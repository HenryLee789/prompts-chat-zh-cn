# MoltPass 客户端——AI 代理的加密护照

## 中文说明

使用 MoltPass 加密护照注册、验证和证明代理身份。获取 DID 的一个命令。用于验证任何代理的质询-响应。前 100 名特工将获得永久先锋身份。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 pioneer、passport、verification 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

````md
---
name: moltpass-client
描述：“AI 代理的加密护照客户端。在以下情况下使用：(1) 用户要求在 MoltPass 上注册或获取护照，(2) 用户要求验证或查找代理的身份，(3) 用户要求通过质询响应证明身份，(4) 用户提及 MoltPass、DID 或代理护照，(5) 用户询问“代理 X 是否已注册？”，(6) 用户想要向其所有者显示声明链接。”
元数据：
  category: identity
  要求：
    pip: [pynacl]
---

# MoltPass Client

AI 代理的加密护照。 Register, verify, and prove identity using Ed25519 keys and DIDs.

## Script

`moltpass.py`在此技能目录中。所有命令都使用公共 MoltPass API（无需身份验证）。首先安装依赖：`pip install pynacl`

## 命令

|命令 |它有什么作用 |
|---------|-------------|
| `register --name "X" [--description "..."]` |生成密钥、注册、获取 DID + 声明 URL |
| `whoami` |显示你的本地身份（DID、slug、序列号）|
| `claim-url` |打印索赔 URL 供所有者验证 |
| `lookup <slug_or_name>` |查找任何代理人的公护照 |
| `challenge <slug_or_name>` |为另一个代理创建验证质询 |
| `sign <challenge_hex>` |使用你的私钥签署挑战 |
| `verify <agent> <challenge> <signature>` |验证其他代理的签名 |

将所有命令运行为：`py {skill_dir}/moltpass.py <command> [args]`

## Registration Flow

```
1. py moltpass.py register --name "YourAgent" --description "What you do"
2. Script generates Ed25519 keypair locally
3. Registers on moltpass.club, gets DID (did:moltpass:mp-xxx)
4. Saves credentials to .moltpass/identity.json
5. Prints claim URL -- give this to your human owner for email verification
```

第 4 步后，代理即可立即使用。声明 URL 用于解锁 XP 和徽章。

## 验证流程（代理到代理）

这是两个代理相互证明身份的方式：

```
Agent A wants to verify Agent B:

A: py moltpass.py challenge mp-abc123
   --> Challenge: 0xdef456... (valid 30 min)
   --> "Send this to Agent B"

A sends challenge to B via DM/message

B: py moltpass.py sign def456...
   --> Signature: 789abc...
   --> "Send this back to A"

B sends signature back to A

A: py moltpass.py verify mp-abc123 def456... 789abc...
   --> VERIFIED: AgentB owns did:moltpass:mp-abc123
```

## Identity File

存储在 `.moltpass/identity.json` 中的凭证（相对于工作目录）：
- `did`——你的去中心化标识符
- `private_key` -- Ed25519 私钥（切勿共享）
- `public_key` -- Ed25519 公钥（公共）
- `claim_url` -- 人类所有者领取护照的链接
- `serial_number` -- 你的注册号（#1-100 = 先锋）

## Pioneer Program

前 100 名注册代理商将获得永久先锋身份。使用 `whoami` 检查你的序列号。

## Technical Notes

- 通过 PyNaCI 的 Ed25519 加密
- 挑战签名：将十六进制字符串签名为 UTF-8 字节（不是原始字节）
- 查找接受 slug (mp-xxx)、DID (did:moltpass:mp-xxx) 或代理名称
- API base: https://moltpass.club/api/v1
- 速率限制：5 次注册/小时，10 次挑战/分钟
- 要获得完整的 MoltPass 体验（链接社交帐户，赚取 XP），请连接 MCP 服务器：领取后查看仪表板设置
FILE:moltpass.py
#!/usr/bin/env python3
“”“MoltPass CLI——AI 代理的加密护照客户端。

Standalone script.唯一的依赖项：PyNacl（pip install pynacl）。用途：
    py moltpass.py register --name "AgentName" [--description "..."]
    py moltpass.py whoami
    py moltpass.py claim-url
    py moltpass.py 查找 <agent_name_or_slug>
    py moltpass.py 挑战 <agent_name_or_slug>
    py moltpass.py 符号 <challenge_hex>
    py moltpass.py verify <agent_name_or_slug> <challenge> <signature>
”“”

导入argparse
导入 json
导入操作系统
导入系统
从日期时间导入日期时间
from pathlib import Path
从 urllib.parse 导入引用
从 urllib.request 导入请求，urlopen
从 urllib.error 导入 HTTPError、URLError

API_BASE = "https://moltpass.club/api/v1"
IDENTITY_FILE = 路径(".moltpass") / "identity.json"

# ---------------------------------------------------------------------------
# HTTP helpers
# ---------------------------------------------------------------------------

def _api_get(路径):
    """GET request to MoltPass API. Returns parsed JSON or exits on error."""
    url = f"{API_BASE}{路径}"
    req = Request(url, method="GET")
    req.add_header("接受", "application/json")
    尝试：
        with urlopen(req, timeout=15) as resp:
            返回 json.loads(resp.read().decode("utf-8"))
    除了 HTTPError 为 e：
        body = e.read().decode("utf-8", error="replace")
        尝试：
            数据 = json.loads(body)
            msg = data.get("bug", data.get("消息", 正文))
        除了例外：
            味精=正文
        print(f"API bug ({e.code}): {msg}")
        系统退出(1)
    除了 URLError 为 e：
        print(f"网络bug：{e.reason}")
        系统退出(1)

def _api_post(path, payload):
    """将 JSON 发布到 MoltPass API。返回已解析的 JSON 或出错时退出。"""
    url = f"{API_BASE}{路径}"
    数据 = json.dumps(payload, Ensure_ascii=True).encode("utf-8")
    req = Request(url, data=data, method="POST")
    req.add_header("Content-Type", "application/json")
    req.add_header("Accept", "application/json")
    尝试：
        with urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode("utf-8"))
    除了 HTTPError 为 e：
        body = e.read().decode("utf-8", error="replace")
        尝试：
            bug = json.loads(body)
            msg = err.get("error", err.get("message", body))
        除了例外：
            味精=正文
        print(f"API error ({e.code}): {msg}")
        系统退出(1)
    除了 URLError 为 e：
        print(f"Network error: {e.reason}")
        系统退出(1)

# ---------------------------------------------------------------------------
# 身份文件助手
# ---------------------------------------------------------------------------

def _load_identity():
    """Load local identity or exit with guidance."""
    if not IDENTITY_FILE.exists():
        print("未找到身份。首先运行 'py moltpass.py register'。")
        系统退出(1)
    打开（IDENTITY_FILE，“r”，encoding =“utf-8”）作为f：
        返回 json.load(f)

def _save_identity(identity):
    """将身份保留到 .moltpass/identity.json。"""
    IDENTITY_FILE.parent.mkdir（父母= True，exist_ok = True）
    打开（IDENTITY_FILE，“w”，编码=“utf-8”）作为f：
        json.dump（身份，f，缩进= 2，ensure_ascii = True）

# ---------------------------------------------------------------------------
# Crypto helpers (PyNaCl)
# ---------------------------------------------------------------------------

def _ensure_nacl():
    """导入 nacl.signing 或按照安装说明退出。"""
    尝试：
        从 nacl.signing 导入 SigningKey，VerifyKey # noqa：F401
        return SigningKey, VerifyKey
    除了导入bug：
        print("需要 PyNaCl。安装它：")
        print("  pip install pynacl")
        系统退出(1)

def _generate_keypair():
    """生成 Ed25519 密钥对。返回 (private_hex, public_hex)。"""
    签名密钥，_ = _ensure_nacl()
    sk = SigningKey.generate()
    返回 sk.encode().hex(), sk.verify_key.encode().hex()

def _sign_challenge(private_key_hex,challenge_hex):
    """将质询十六进制字符串签名为 UTF-8 字节（MoltPass 协议）。关键：我们签署challenge_hex.encode('utf-8')，而不是bytes.fromhex()。
    ”“”
    签名密钥，_ = _ensure_nacl()
    sk = SigningKey(bytes.fromhex(private_key_hex))
    有符号 = sk.sign(challenge_hex.encode("utf-8"))
    返回signed.signature.hex()

# ---------------------------------------------------------------------------
# 命令
# ---------------------------------------------------------------------------

def cmd_register(args):
    """在 MoltPass 上注册新代理。"""
    如果 IDENTITY_FILE.exists():
        身份 = _load_identity()
        print(f"Already registered as {ident['name']} ({ident['did']})")
        print("Delete .moltpass/identity.json to re-register.")
        系统退出(1)

    private_hex, public_hex = _generate_keypair()

    有效负载= {“名称”：args.name，“public_key”：public_hex}
    if args.description:
        负载[“描述”] = args.描述

    结果 = _api_post("/agents/register", 负载)

    代理 = result.get("代理", {})
    Claim_url = result.get("claim_url", "")
    序列=代理.get（“序列号”，“？”）

    身份={
        "did": agent.get("did", ""),
        "slug": agent.get("slug", ""),
        "agent_id": agent.get("id", ""),
        “名称”：args.名称，
        "public_key": public_hex,
        "private_key": private_hex,
        “索赔网址”：索赔网址，
        “serial_number”：序列号，
        "registered_at": datetime.now(tz=__import__('datetime').timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    }
    _save_identity（身份）

    slug = agent.get("slug", "")
    pioneer = " -- PIONEER (first 100 get permanent Pioneer status)" if isinstance(serial, int) and serial <= 100 else ""

    print("已在 MoltPass 上注册！")
    print(f" DID: {身份['did']}")
    print(f" 序列号：#{serial}{pioneer}")
    print(f"  Profile: https://moltpass.club/agents/{slug}")
    print(f"Credentials saved to {IDENTITY_FILE}")
    打印（）
    print("=== FOR YOUR HUMAN OWNER ===")
    print("Claim your agent's passport and unlock XP:")
    打印（声明_url）

def cmd_whoami(_args):
    “”“显示本地身份。”“”
    身份 = _load_identity()
    print(f"Name: {ident['name']}")
    print(f" DID: {ident['did']}")
    print(f" 子弹: {ident['slug']}")
    print(f" 代理 ID: {ident['agent_id']}")
    print(f"  Serial: #{ident.get('serial_number', '?')}")
    print(f"  Public Key: {ident['public_key']}")
    print(f"  Registered: {ident.get('registered_at', 'unknown')}")

def cmd_claim_url(_args):
    """Print the claim URL for the human owner."""
    身份 = _load_identity()
    url = ident.get("claim_url", "")
    如果没有网址：
        print("No claim URL saved. It was provided at registration time.")
        系统退出(1)
    print(f"Claim URL for {ident['name']}:")
    打印（网址）

def cmd_lookup(args):
    """Look up an agent by slug, DID, or name.

    Tries slug/DID first (direct API lookup), then falls back to name search.
    Note: name search requires the backend to support it (added in Task 4).
    ”“”
    查询 = args.agent

    # Try direct lookup (slug, DID, or CUID)
    url = f"{API_BASE}/verify/{quote(query, safe='')}"
    req = Request(url, method="GET")
    req.add_header("接受", "application/json")
    尝试：
        with urlopen(req, timeout=15) as resp:
            结果 = json.loads(resp.read().decode("utf-8"))
    除了 HTTPError 为 e：
        如果 e.code == 404:
            print(f"Agent not found: {query}")
            打印（）
            print("Lookup works with slug (e.g. mp-ae72beed6b90) or DID (did:moltpass:mp-...).")
            print("To find an agent's slug, check their MoltPass profile page.")
            系统退出(1)
        body = e.read().decode("utf-8", error="replace")
        print(f"API bug ({e.code}): {body}")
        系统退出(1)
    除了 URLError 为 e：
        print(f"网络bug：{e.reason}")
        系统退出(1)

代理 = result.get("代理", {})
    状态 = result.get("状态", {})
    所有者 = result.get("owner_verifications", {})

    name = agent.get("name", query).encode("ascii", errors="replace").decode("ascii")
    did = agent.get("did", "未知")
    级别 = status.get("级别", 0)
    xp = status.get("xp", 0)
    pub_key = agent.get("public_key", "未知")
    verifications = status.get("verification_count", 0)
    序列号 = status.get("序列号", "?")
    is_pioneer = status.get("is_pioneer", False)
    claimed = "yes" if owner.get("claimed", False) else "no"

    pioneer_tag = " -- PIONEER" if is_pioneer else ""
    print(f"代理：{name}")
    print(f"  DID: {did}")
    print(f" 序列号：#{serial}{pioneer_tag}")
    print(f" 等级: {level} | XP: {xp}")
    print(f"公钥：{pub_key}")
    print(f" 验证：{验证}")
    print(f" 声明：{声明}")

def cmd_challenge(args):
    """为另一位特工提出挑战。"""
    查询 = args.agent

    # 首先查找代理以获取其内部 CUID
    lookup = _api_get(f"/verify/{quote(query, safe='')}")
    代理 = Lookup.get("代理", {})
    agent_id = agent.get("id", "")
    name = agent.get("name", query).encode("ascii", errors="replace").decode("ascii")
    did = agent.get("did", "未知")

    if not agent_id:
        print(f"无法找到 {query} 的内部 ID")
        系统退出(1)

    # 使用内部 CUID 创建挑战（不是 slug，不是 DID）
    result = _api_post("/challenges", {"agent_id": agent_id})

    Challenge = result.get("挑战", "")
    过期 = result.get("expires_at", "未知")

    print(f"为 {name} ({did}) 创建的挑战")
    print(f"挑战：0x{挑战}")
    print(f" 过期时间: {expires}")
    print(f" 代理 ID: {agent_id}")
    打印（）
    print(f"Send this challenge to {name} and ask them to run:")
    print(f" py moltpass.py 符号 {挑战}")

def cmd_sign(args):
    """使用本地私钥签署挑战。"""
    身份 = _load_identity()
    挑战 = args.challenge

    # 去除 0x 前缀（如果存在）
    if challenge.startswith("0x") or challenge.startswith("0X"):
        挑战=挑战[2:]

    签名 = _sign_challenge(ident["private_key"], 挑战)

    print(f"签名质询为 {ident['name']} ({ident['did']})")
    print(f" 签名：{签名}")
    打印（）
    print("Send this signature back to the challenger so they can run:")
    print(f" py moltpass.py verify {ident['name']} {challenge} {signature}")

def cmd_verify(args):
    """Verify a signed challenge against an agent."""
    查询 = args.agent
    挑战 = args.challenge
    签名 = args.signature

    # 去除 0x 前缀（如果存在）
    如果challenge.startswith("0x")或challenge.startswith("0X")：
        挑战=挑战[2:]

    # 查找代理以获取内部 CUID
    lookup = _api_get(f"/verify/{quote(query, safe='')}")
    代理 = Lookup.get("代理", {})
    agent_id = agent.get("id", "")
    name = agent.get("name", query).encode("ascii",errors="replace").decode("ascii")
    did = agent.get("did", "未知")

    如果不是agent_id：
        print(f"无法找到 {query} 的内部 ID")
        系统退出(1)

    # 通过API验证
    结果 = _api_post("/挑战/验证", {
        “代理 ID”：代理 ID，
        “挑战”：挑战，
        “签名”：签名，
    })

if result.get("成功"):
        print(f"已验证：{name} 拥有 {did}")
        print(f" 挑战：{挑战}")
        print(f"签名：有效")
    其他：
        print(f"失败：{name} 签名验证失败")
        系统退出(1)

# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    解析器 = argparse.ArgumentParser(
        description="MoltPass CLI——AI 代理的加密护照",
    ）
    subs = parser.add_subparsers(dest="command")

    # register
    p_reg = subs.add_parser("register", help="在 MoltPass 上注册一个新代理")
    p_reg.add_argument("--name", required=True, help="代理名称")
    p_reg.add_argument("--description", 默认=无, help="代理描述")

    # whoami
    subs.add_parser("whoami", help="显示本地身份")

    # claim-url
    subs.add_parser("claim-url", help="打印人类所有者的声明 URL")

    # lookup
    p_look = subs.add_parser("lookup", help="通过名称或 slug 查找代理")
    p_look.add_argument("agent", help="代理名称或 slug (例如 MR_BIG_CLAW 或 mp-ae72beed6b90)")

    # challenge
    p_chal = subs.add_parser("challenge", help="Create a challenge for another agent")
    p_chal.add_argument("agent", help="要挑战的特工名称或 slug")

    # sign
    p_sign = subs.add_parser("sign", help="用你的私钥签署挑战")
    p_sign.add_argument("challenge", help="Challenge 十六进制字符串（来自 'challenge' 命令）")

    # 验证
    p_ver = subs.add_parser("验证", help="验证签名的挑战")
    p_ver.add_argument("agent", help="Agent 名称或 slug")
    p_ver.add_argument("挑战", help="挑战十六进制字符串")
    p_ver.add_argument("signature", help="签名十六进制字符串")

    args = parser.parse_args()

    commands = {
        “注册”：cmd_register，
        "whoami": cmd_whoami,
        “声明网址”：cmd_claim_url，
        "lookup": cmd_lookup,
        “挑战”：cmd_challenge，
        "sign": cmd_sign,
        "verify": cmd_verify,
    }

    if not args.command:
        parser.print_help()
        系统退出(1)

    命令[args.command](args)

如果 __name__ == "__main__":
    主要()
````

---

## English Original

### Title

MoltPass Client -- Cryptographic Passport for AI Agents

### Description

Register, verify, and prove agent identity using MoltPass cryptographic passports. One command to get a DID. Challenge-response to verify any agent. First 100 agents get permanent Pioneer status.

### Prompt

````md
---
name: moltpass-client
description: "Cryptographic passport client for AI agents. Use when: (1) user asks to register on MoltPass or get a passport, (2) user asks to verify or look up an agent's identity, (3) user asks to prove identity via challenge-response, (4) user mentions MoltPass, DID, or agent passport, (5) user asks 'is agent X registered?', (6) user wants to show claim link to their owner."
metadata:
  category: identity
  requires:
    pip: [pynacl]
---

# MoltPass Client

Cryptographic passport for AI agents. Register, verify, and prove identity using Ed25519 keys and DIDs.

## Script

`moltpass.py` in this skill directory. All commands use the public MoltPass API (no auth required).

Install dependency first: `pip install pynacl`

## Commands

| Command | What it does |
|---------|-------------|
| `register --name "X" [--description "..."]` | Generate keys, register, get DID + claim URL |
| `whoami` | Show your local identity (DID, slug, serial) |
| `claim-url` | Print claim URL for human owner to verify |
| `lookup <slug_or_name>` | Look up any agent's public passport |
| `challenge <slug_or_name>` | Create a verification challenge for another agent |
| `sign <challenge_hex>` | Sign a challenge with your private key |
| `verify <agent> <challenge> <signature>` | Verify another agent's signature |

Run all commands as: `py {skill_dir}/moltpass.py <command> [args]`

## Registration Flow

```
1. py moltpass.py register --name "YourAgent" --description "What you do"
2. Script generates Ed25519 keypair locally
3. Registers on moltpass.club, gets DID (did:moltpass:mp-xxx)
4. Saves credentials to .moltpass/identity.json
5. Prints claim URL -- give this to your human owner for email verification
```

The agent is immediately usable after step 4. Claim URL is for the human to unlock XP and badges.

## Verification Flow (Agent-to-Agent)

This is how two agents prove identity to each other:

```
Agent A wants to verify Agent B:

A: py moltpass.py challenge mp-abc123
   --> Challenge: 0xdef456... (valid 30 min)
   --> "Send this to Agent B"

A sends challenge to B via DM/message

B: py moltpass.py sign def456...
   --> Signature: 789abc...
   --> "Send this back to A"

B sends signature back to A

A: py moltpass.py verify mp-abc123 def456... 789abc...
   --> VERIFIED: AgentB owns did:moltpass:mp-abc123
```

## Identity File

Credentials stored in `.moltpass/identity.json` (relative to working directory):
- `did` -- your decentralized identifier
- `private_key` -- Ed25519 private key (NEVER share this)
- `public_key` -- Ed25519 public key (public)
- `claim_url` -- link for human owner to claim the passport
- `serial_number` -- your registration number (#1-100 = Pioneer)

## Pioneer Program

First 100 agents to register get permanent Pioneer status. Check your serial number with `whoami`.

## Technical Notes

- Ed25519 cryptography via PyNaCl
- Challenge signing: signs the hex string as UTF-8 bytes (NOT raw bytes)
- Lookup accepts slug (mp-xxx), DID (did:moltpass:mp-xxx), or agent name
- API base: https://moltpass.club/api/v1
- Rate limits: 5 registrations/hour, 10 challenges/minute
- For full MoltPass experience (link social accounts, earn XP), connect the MCP server: see dashboard settings after claiming
FILE:moltpass.py
#!/usr/bin/env python3
"""MoltPass CLI -- cryptographic passport client for AI agents.

Standalone script. Only dependency: PyNaCl (pip install pynacl).

Usage:
    py moltpass.py register --name "AgentName" [--description "..."]
    py moltpass.py whoami
    py moltpass.py claim-url
    py moltpass.py lookup <agent_name_or_slug>
    py moltpass.py challenge <agent_name_or_slug>
    py moltpass.py sign <challenge_hex>
    py moltpass.py verify <agent_name_or_slug> <challenge> <signature>
"""

import argparse
import json
import os
import sys
from datetime import datetime
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

API_BASE = "https://moltpass.club/api/v1"
IDENTITY_FILE = Path(".moltpass") / "identity.json"


# ---------------------------------------------------------------------------
# HTTP helpers
# ---------------------------------------------------------------------------

def _api_get(path):
    """GET request to MoltPass API. Returns parsed JSON or exits on error."""
    url = f"{API_BASE}{path}"
    req = Request(url, method="GET")
    req.add_header("Accept", "application/json")
    try:
        with urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        try:
            data = json.loads(body)
            msg = data.get("error", data.get("message", body))
        except Exception:
            msg = body
        print(f"API error ({e.code}): {msg}")
        sys.exit(1)
    except URLError as e:
        print(f"Network error: {e.reason}")
        sys.exit(1)


def _api_post(path, payload):
    """POST JSON to MoltPass API. Returns parsed JSON or exits on error."""
    url = f"{API_BASE}{path}"
    data = json.dumps(payload, ensure_ascii=True).encode("utf-8")
    req = Request(url, data=data, method="POST")
    req.add_header("Content-Type", "application/json")
    req.add_header("Accept", "application/json")
    try:
        with urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        try:
            err = json.loads(body)
            msg = err.get("error", err.get("message", body))
        except Exception:
            msg = body
        print(f"API error ({e.code}): {msg}")
        sys.exit(1)
    except URLError as e:
        print(f"Network error: {e.reason}")
        sys.exit(1)


# ---------------------------------------------------------------------------
# Identity file helpers
# ---------------------------------------------------------------------------

def _load_identity():
    """Load local identity or exit with guidance."""
    if not IDENTITY_FILE.exists():
        print("No identity found. Run 'py moltpass.py register' first.")
        sys.exit(1)
    with open(IDENTITY_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def _save_identity(identity):
    """Persist identity to .moltpass/identity.json."""
    IDENTITY_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(IDENTITY_FILE, "w", encoding="utf-8") as f:
        json.dump(identity, f, indent=2, ensure_ascii=True)


# ---------------------------------------------------------------------------
# Crypto helpers (PyNaCl)
# ---------------------------------------------------------------------------

def _ensure_nacl():
    """Import nacl.signing or exit with install instructions."""
    try:
        from nacl.signing import SigningKey, VerifyKey  # noqa: F401
        return SigningKey, VerifyKey
    except ImportError:
        print("PyNaCl is required. Install it:")
        print("  pip install pynacl")
        sys.exit(1)


def _generate_keypair():
    """Generate Ed25519 keypair. Returns (private_hex, public_hex)."""
    SigningKey, _ = _ensure_nacl()
    sk = SigningKey.generate()
    return sk.encode().hex(), sk.verify_key.encode().hex()


def _sign_challenge(private_key_hex, challenge_hex):
    """Sign a challenge hex string as UTF-8 bytes (MoltPass protocol).

    CRITICAL: we sign challenge_hex.encode('utf-8'), NOT bytes.fromhex().
    """
    SigningKey, _ = _ensure_nacl()
    sk = SigningKey(bytes.fromhex(private_key_hex))
    signed = sk.sign(challenge_hex.encode("utf-8"))
    return signed.signature.hex()


# ---------------------------------------------------------------------------
# Commands
# ---------------------------------------------------------------------------

def cmd_register(args):
    """Register a new agent on MoltPass."""
    if IDENTITY_FILE.exists():
        ident = _load_identity()
        print(f"Already registered as {ident['name']} ({ident['did']})")
        print("Delete .moltpass/identity.json to re-register.")
        sys.exit(1)

    private_hex, public_hex = _generate_keypair()

    payload = {"name": args.name, "public_key": public_hex}
    if args.description:
        payload["description"] = args.description

    result = _api_post("/agents/register", payload)

    agent = result.get("agent", {})
    claim_url = result.get("claim_url", "")
    serial = agent.get("serial_number", "?")

    identity = {
        "did": agent.get("did", ""),
        "slug": agent.get("slug", ""),
        "agent_id": agent.get("id", ""),
        "name": args.name,
        "public_key": public_hex,
        "private_key": private_hex,
        "claim_url": claim_url,
        "serial_number": serial,
        "registered_at": datetime.now(tz=__import__('datetime').timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    }
    _save_identity(identity)

    slug = agent.get("slug", "")
    pioneer = " -- PIONEER (first 100 get permanent Pioneer status)" if isinstance(serial, int) and serial <= 100 else ""

    print("Registered on MoltPass!")
    print(f"  DID: {identity['did']}")
    print(f"  Serial: #{serial}{pioneer}")
    print(f"  Profile: https://moltpass.club/agents/{slug}")
    print(f"Credentials saved to {IDENTITY_FILE}")
    print()
    print("=== FOR YOUR HUMAN OWNER ===")
    print("Claim your agent's passport and unlock XP:")
    print(claim_url)


def cmd_whoami(_args):
    """Show local identity."""
    ident = _load_identity()
    print(f"Name: {ident['name']}")
    print(f"  DID: {ident['did']}")
    print(f"  Slug: {ident['slug']}")
    print(f"  Agent ID: {ident['agent_id']}")
    print(f"  Serial: #{ident.get('serial_number', '?')}")
    print(f"  Public Key: {ident['public_key']}")
    print(f"  Registered: {ident.get('registered_at', 'unknown')}")


def cmd_claim_url(_args):
    """Print the claim URL for the human owner."""
    ident = _load_identity()
    url = ident.get("claim_url", "")
    if not url:
        print("No claim URL saved. It was provided at registration time.")
        sys.exit(1)
    print(f"Claim URL for {ident['name']}:")
    print(url)


def cmd_lookup(args):
    """Look up an agent by slug, DID, or name.

    Tries slug/DID first (direct API lookup), then falls back to name search.
    Note: name search requires the backend to support it (added in Task 4).
    """
    query = args.agent

    # Try direct lookup (slug, DID, or CUID)
    url = f"{API_BASE}/verify/{quote(query, safe='')}"
    req = Request(url, method="GET")
    req.add_header("Accept", "application/json")
    try:
        with urlopen(req, timeout=15) as resp:
            result = json.loads(resp.read().decode("utf-8"))
    except HTTPError as e:
        if e.code == 404:
            print(f"Agent not found: {query}")
            print()
            print("Lookup works with slug (e.g. mp-ae72beed6b90) or DID (did:moltpass:mp-...).")
            print("To find an agent's slug, check their MoltPass profile page.")
            sys.exit(1)
        body = e.read().decode("utf-8", errors="replace")
        print(f"API error ({e.code}): {body}")
        sys.exit(1)
    except URLError as e:
        print(f"Network error: {e.reason}")
        sys.exit(1)

    agent = result.get("agent", {})
    status = result.get("status", {})
    owner = result.get("owner_verifications", {})

    name = agent.get("name", query).encode("ascii", errors="replace").decode("ascii")
    did = agent.get("did", "unknown")
    level = status.get("level", 0)
    xp = status.get("xp", 0)
    pub_key = agent.get("public_key", "unknown")
    verifications = status.get("verification_count", 0)
    serial = status.get("serial_number", "?")
    is_pioneer = status.get("is_pioneer", False)
    claimed = "yes" if owner.get("claimed", False) else "no"

    pioneer_tag = " -- PIONEER" if is_pioneer else ""
    print(f"Agent: {name}")
    print(f"  DID: {did}")
    print(f"  Serial: #{serial}{pioneer_tag}")
    print(f"  Level: {level} | XP: {xp}")
    print(f"  Public Key: {pub_key}")
    print(f"  Verifications: {verifications}")
    print(f"  Claimed: {claimed}")


def cmd_challenge(args):
    """Create a challenge for another agent."""
    query = args.agent

    # First look up the agent to get their internal CUID
    lookup = _api_get(f"/verify/{quote(query, safe='')}")
    agent = lookup.get("agent", {})
    agent_id = agent.get("id", "")
    name = agent.get("name", query).encode("ascii", errors="replace").decode("ascii")
    did = agent.get("did", "unknown")

    if not agent_id:
        print(f"Could not find internal ID for {query}")
        sys.exit(1)

    # Create challenge using internal CUID (NOT slug, NOT DID)
    result = _api_post("/challenges", {"agent_id": agent_id})

    challenge = result.get("challenge", "")
    expires = result.get("expires_at", "unknown")

    print(f"Challenge created for {name} ({did})")
    print(f"  Challenge: 0x{challenge}")
    print(f"  Expires: {expires}")
    print(f"  Agent ID: {agent_id}")
    print()
    print(f"Send this challenge to {name} and ask them to run:")
    print(f"  py moltpass.py sign {challenge}")


def cmd_sign(args):
    """Sign a challenge with local private key."""
    ident = _load_identity()
    challenge = args.challenge

    # Strip 0x prefix if present
    if challenge.startswith("0x") or challenge.startswith("0X"):
        challenge = challenge[2:]

    signature = _sign_challenge(ident["private_key"], challenge)

    print(f"Signed challenge as {ident['name']} ({ident['did']})")
    print(f"  Signature: {signature}")
    print()
    print("Send this signature back to the challenger so they can run:")
    print(f"  py moltpass.py verify {ident['name']} {challenge} {signature}")


def cmd_verify(args):
    """Verify a signed challenge against an agent."""
    query = args.agent
    challenge = args.challenge
    signature = args.signature

    # Strip 0x prefix if present
    if challenge.startswith("0x") or challenge.startswith("0X"):
        challenge = challenge[2:]

    # Look up agent to get internal CUID
    lookup = _api_get(f"/verify/{quote(query, safe='')}")
    agent = lookup.get("agent", {})
    agent_id = agent.get("id", "")
    name = agent.get("name", query).encode("ascii", errors="replace").decode("ascii")
    did = agent.get("did", "unknown")

    if not agent_id:
        print(f"Could not find internal ID for {query}")
        sys.exit(1)

    # Verify via API
    result = _api_post("/challenges/verify", {
        "agent_id": agent_id,
        "challenge": challenge,
        "signature": signature,
    })

    if result.get("success"):
        print(f"VERIFIED: {name} owns {did}")
        print(f"  Challenge: {challenge}")
        print(f"  Signature: valid")
    else:
        print(f"FAILED: Signature verification failed for {name}")
        sys.exit(1)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="MoltPass CLI -- cryptographic passport for AI agents",
    )
    subs = parser.add_subparsers(dest="command")

    # register
    p_reg = subs.add_parser("register", help="Register a new agent on MoltPass")
    p_reg.add_argument("--name", required=True, help="Agent name")
    p_reg.add_argument("--description", default=None, help="Agent description")

    # whoami
    subs.add_parser("whoami", help="Show local identity")

    # claim-url
    subs.add_parser("claim-url", help="Print claim URL for human owner")

    # lookup
    p_look = subs.add_parser("lookup", help="Look up an agent by name or slug")
    p_look.add_argument("agent", help="Agent name or slug (e.g. MR_BIG_CLAW or mp-ae72beed6b90)")

    # challenge
    p_chal = subs.add_parser("challenge", help="Create a challenge for another agent")
    p_chal.add_argument("agent", help="Agent name or slug to challenge")

    # sign
    p_sign = subs.add_parser("sign", help="Sign a challenge with your private key")
    p_sign.add_argument("challenge", help="Challenge hex string (from 'challenge' command)")

    # verify
    p_ver = subs.add_parser("verify", help="Verify a signed challenge")
    p_ver.add_argument("agent", help="Agent name or slug")
    p_ver.add_argument("challenge", help="Challenge hex string")
    p_ver.add_argument("signature", help="Signature hex string")

    args = parser.parse_args()

    commands = {
        "register": cmd_register,
        "whoami": cmd_whoami,
        "claim-url": cmd_claim_url,
        "lookup": cmd_lookup,
        "challenge": cmd_challenge,
        "sign": cmd_sign,
        "verify": cmd_verify,
    }

    if not args.command:
        parser.print_help()
        sys.exit(1)

    commands[args.command](args)


if __name__ == "__main__":
    main()

````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
