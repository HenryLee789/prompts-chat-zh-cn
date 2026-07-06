---
id: "cmlb8lcmu0005l5048bnrh1g3"
slug: "sales-research"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/sales-research"
category: "sales"
category_name: "Sales"
category_zh: "销售"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "96b1e52088659b3ae5b0ab05a8e304c4ba9cce39a936ae1b0b677ca0f34b5ab1"
upstream_updated_at: "2026-02-06T18:46:46.484Z"
---
# 销售研究

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[sales-research](https://prompts.chat/prompts/sales-research)  
> 分类：销售（Sales / `sales`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

该技能提供了研究销售前景的方法和最佳实践。

## 使用场景

- 用于销售相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 Sales、Research 等主题快速生成可复用结果。

## 适用人群

- 销售人员
- 业务负责人
- 创业者

## 中文 Prompt 正文

```md
---
名称：销售研究
描述：该技能提供了研究销售前景的方法和最佳实践。
---

# 销售研究

## 概述

该技能提供了研究销售前景的方法和最佳实践。它涵盖公司研究、联系人分析和信号检测以显示可操作的情报。

## 用法

公司研究员和联系人研究员子代理在以下情况下引用此技能：
- 研究新前景
- 查找公司信息
- 分析个人联系人
- 检测购买信号

## 研究方法

### 公司研究清单

1. **基本简介**
   - 公司名称、行业、规模（员工、收入）
   - 总部和主要地点
   - 成立日期、成长阶段

2. **近期进展**
   - 资助公告（过去 12 个月）
   - 并购活动
   - 领导层变动
   - 产品发布

3. **技术堆栈**
   - 已知技术（BuiltWith、StackShare）
   - 提及工具的职位发布
   - 整合合作伙伴关系

4. **信号**
   - 职位发布（规模=机会）
   - Glassdoor 评论（痛点）
   - 新闻提及（上下文）
   - 社交媒体活动

### 联系研究清单

1. **专业背景**
   - 目前的角色和任期
   - 以前的公司和职位
   - 教育

2. **影响力指标**
   - 报告结构
   - 决策权
   - 预算所有权

3. **接合钩**
   - 最近的 LinkedIn 帖子
   - 发表文章
   - 演讲活动
   - 相互联系

## 资源

- `resources/signal-indicators.md` - 购买信号分类
- `resources/research-checklist.md` - 完整的研究清单

## 脚本

- `scripts/company-enricher.py` - 汇总多个来源的公司数据
- `scripts/linkedin-parser.py` - 结构 LinkedIn 个人资料数据
文件:company-enricher.py
#!/usr/bin/env python3
”“”
company-enricher.py - 聚合来自多个来源的公司数据

输入：
  - 公司名称：字符串
  - 域：字符串（可选）

输出：
  - 简介：
      名称：字符串
      所属行业： 线绳
      尺寸： 字符串
      资金来源：字符串
      技术堆栈：[字符串]
      centre_news: [新闻项目]

依赖项：
  - 请求，beautifulsoup4
”“”

# 需求：请求，beautifulsoup4

导入 json
从输入导入任何
从数据类导入数据类，asdict
从日期时间导入日期时间


@数据类
类新闻项目：
    标题：str
    日期：str
    来源：str
    网址：str
    摘要：str


@数据类
类公司简介：
    名称：str
    域：str
    行业： 钢铁
    尺寸：str
    地点： 斯特拉
    成立：str
    资金来源：str
    tech_stack: 列表[str]
    最近的新闻：列表[字典]
    竞争对手：列表[str]
    描述：str


def search_company_info(company_name: str, 域: str = None) -> dict:
    ”“”
    搜索公司基本信息。
    在生产中，这将调用 Clearbit、Crunchbase 等 API。
    ”“”
    # TODO：实现实际的 API 调用
    # 占位符返回结构
    返回{
        “名称”：公司名称，
        "domain": 域名或 f"{company_name.lower().replace(' ', '')}.com",
        "industry": "Technology", # 来自 API
        “尺寸”：“未知”，
        “位置”：“未知”，
        "成立": "未知",
        "description": f"有关{company_name}的信息"
    }

def search_funding_info(company_name: str) -> dict:
    ”“”
    搜索资金信息。
    在生产中，会调用 Crunchbase、PitchBook 等。
    ”“”
    # TODO：实现实际的 API 调用
    返回{
        "total_funding": "未知",
        "last_round": "未知",
        "last_round_date": "未知",
        “投资者”：[]
    }


def search_tech_stack（域：str）->列表[str]：
    ”“”
    检测技术栈。
    在生产中，会调用BuiltWith、Wappalyzer等。
    ”“”
    # TODO：实现实际的 API 调用
    返回[]


def search_recent_news(company_name: str, days: int = 90) -> list[dict]:
    ”“”
    搜索有关该公司的最新新闻。
    在生产中，将调用新闻 API。
    ”“”
    # TODO：实现实际的 API 调用
    返回[]


定义主要（
    公司名称：str，
    域：str = 无
) -> 字典[str, 任意]:
    ”“”
    汇总来自多个来源的公司数据。

    参数：
        company_name：要研究的公司名称
        域名：公司域名（可选，将被推断）

    返回：
        包含公司简介的字典，包括行业、规模、资金、技术堆栈、新闻
    ”“”
    # 获取公司基本信息
    basic_info = search_company_info(公司名称, 域名)

    # 获取资金信息
    资金信息 = 搜索资金信息（公司名称）

    # 检测技术栈
    公司域 = basic_info.get("域", 域)
    tech_stack = search_tech_stack(company_domain) if company_domain else []

    # 获取最新消息
    新闻 = search_recent_news(公司名称)

    # 编译配置文件
    简介 = 公司简介(
        名称=基本信息[“名称”],
        域=basic_info["域"],
        行业=basic_info["行业"],
        尺寸=基本信息[“尺寸”],
        位置=基本信息[“位置”],
        成立=basic_info["成立"],
        资金=funding_info.get("total_funding", "未知"),
        技术堆栈=技术堆栈，
        最近的新闻=新闻，
        竞争者=[], #将从行业分析中丰富
        描述=基本信息[“描述”]
    ）

    返回{
        “个人资料”：asdict（个人资料），
        “资金详细信息”：资金信息，
        “enriched_at”：datetime.now().isoformat()，
        "sources_checked": ["company_info", "funding", "tech_stack", "news"]
    }


如果 __name__ == "__main__":
    导入系统

    # 用法示例
    结果=主要(
        company_name="数据流系统",
        域=“dataflow.io”
    ）
    打印（json.dumps（结果，缩进= 2））
文件:linkedin-parser.py
#!/usr/bin/env python3
”“”
linkedin-parser.py - 构建 LinkedIn 个人资料数据

输入：
  - profile_url：字符串
  - 或名称 + 公司：字符串

输出：
  - 联系方式：
      名称：字符串
      标题：字符串
      任期：字符串
      previous_roles: [角色对象]
      相互连接：[字符串]
      最近的活动：[帖子摘要]

依赖项：
  - 请求
”“”

# 需求：请求

导入 json
从输入导入任何
从数据类导入数据类，asdict
从日期时间导入日期时间


@数据类
类上一个角色：
    标题：str
    公司：str
    持续时间：str
    描述：str


@数据类
最近的帖子类：
    日期：str
    内容预览：str
    参与度：整数
    主题：str


@数据类
联系资料类：
    名称：str
    标题：str
    公司：str
    地点： 斯特拉
    任期：str
    previous_roles: 列表[字典]
    教育程度：列表[str]
    相互连接：列表[str]
    最近的活动：列表[字典]
    个人资料网址：str
    标题：str

def search_linkedin_profile（名称：str = None，公司：str = None，profile_url：str = None）-> dict：
    ”“”
    搜索 LinkedIn 个人资料信息。
    在生产中，将使用 LinkedIn API 或 Sales Navigator。
    ”“”
    # TODO：实施实际的 LinkedIn API 集成
    # 注意：LinkedIn 的 API 有严格的服务条款

    返回{
        “发现”：错误，
        “name”：名称或“未知”，
        "title": "未知",
        “公司”：公司或“未知”，
        “位置”：“未知”，
        “标题”：“”，
        "tenure": "未知",
        “profile_url”：profile_url 或“”
    }


def get_career_history(profile_data: dict) -> list[dict]:
    ”“”
    从个人资料中提取职业历史。
    ”“”
    # TODO：实施职业提取
    返回[]


def get_mutual_connections(profile_data: dict, user_network: list = None) -> list[str]:
    ”“”
    寻找相互联系。
    ”“”
    # TODO: 实现相互连接检测
    返回[]


def get_recent_activity(profile_data: dict, days: int = 30) -> list[dict]:
    ”“”
    获取最近的帖子和活动。
    ”“”
    # TODO：实施活动提取
    返回[]


定义主要（
    名称：str = 无，
    公司：str = 无，
    profile_url: str = 无
) -> 字典[str, 任意]:
    ”“”
    构建 LinkedIn 个人资料数据以进行销售准备。

    参数：
        姓名：人的姓名
        公司：他们工作的公司
        profile_url：直接 LinkedIn 个人资料 URL

    返回：
        具有结构化联系人资料的字典
    ”“”
    如果不是 profile_url 且不是（姓名和公司）：
        return {"error": "提供 profile_url 或姓名 + 公司"}

    # 搜索个人资料
    profile_data = search_linkedin_profile(
        姓名=姓名，
        公司=公司，
        个人资料网址=个人资料网址
    ）

    如果不是 profile_data.get("found"):
        返回{
            “发现”：错误，
            “name”：名称或“未知”，
            “公司”：公司或“未知”，
            "message": "个人资料未找到或访问受限",
            “建议”：[
                “尝试直接在 LinkedIn 上搜索”,
                “检查替代拼写”，
                “验证此人是否仍在这家公司工作”
            ]
        }

    # 获取职业历史
    以前的角色 = get_career_history(个人资料数据)

    # 寻找相互联系
    相互连接= get_相互连接（配置文件数据）

    # 获取最近的活动
    最近的活动 = get_最近的活动（个人资料数据）

    # 编译联系人资料
    联系人 = 联系资料(
        名称=个人资料数据[“名称”],
        标题=个人资料数据[“标题”]，
        公司=个人资料数据[“公司”]，
        位置=个人资料数据[“位置”]，
        任期=个人资料数据[“任期”]，
        以前的角色=以前的角色，
        education=[], # 将从个人资料中提取
        相互连接=相互连接，
        最近的活动=最近的活动，
        profile_url=profile_data["profile_url"],
        标题=个人资料数据[“标题”]
    ）

    返回{
        “发现”：确实，
        “联系”：asdict（联系），
        “research_date”：datetime.now().isoformat(),
        “data_completeness”：计算_完整性（联系人）
    }

defcalculate_completeness(contact:ContactProfile) -> dict:
    """计算配置文件数据的完整性。"""
    字段={
        "basic_info": bool(contact.name 和 contact.title 和 contact.company),
        "career_history": len(contact.previous_roles) > 0,
        "mutual_connections": len(contact.mutual_connections) > 0,
        “最近的活动”：len(contact.recent_activity) > 0,
        “教育”：len(contact.education) > 0
    }

    完整计数 = sum(fields.values())
    返回{
        “字段”：字段，
        "分数": f"{complete_count}/{len(fields)}",
        “百分比”：int((complete_count / len(fields)) * 100)
    }


如果 __name__ == "__main__":
    导入系统

    # 用法示例
    结果=主要(
        名称=“莎拉·陈”，
        公司=“数据流系统”
    ）
    打印（json.dumps（结果，缩进= 2））
文件:priority-scorer.py
#!/usr/bin/env python3
”“”
priority-scorer.py - 计算潜在客户优先级并对其进行排名

输入：
  - 前景：[前景带有信号的对象]
  - 权重：{交易规模、时机、热情、信号}

输出：
  - 排名：[有分数和推理的前景]

依赖项：
  -（无 - 纯Python）
”“”

导入 json
从输入导入任何
从数据类导入数据类


# 默认评分权重
DEFAULT_WEIGHTS = {
    “交易规模”：0.25，
    “计时”：0.30，
    “温暖”：0.20，
    “信号”：0.25
}

# 信号分数映射
信号分数 = {
    # 高意图信号
    “最近的资金”：10，
    “领导力变化”：8，
    “job_postings_relevant”：9，
    “expansion_news”：7，
    “竞争对手提及”：6，

    # 中等意图信号
    “一般招聘”：4，
    “行业事件”：3，
    “内容参与度”：3，

    # 关系信号
    “相互连接”：5，
    “上一个联系人”：6，
    “referred_lead”：8，

    # 负信号
    “最近裁员”：-3，
    “预算冻结_提到”：-5，
    “competitor_selected”：-7，
}


@数据类
类 ScoredProspect:
    公司：str
    联系人：str
    通话时间：str
    raw_score：浮动
    标准化分数：int
    优先级：int
    分数细分：字典
    推理：str
    is_followup: 布尔


def Score_deal_size(prospect: dict) -> tuple[float, str]:
    """根据估计交易规模进行评分。"""
    size_indicators = prospect.get("size_indicators", {})

    员工计数 = size_indicators.get("员工", 0)
    Revenue_estimate = size_indicators.get("收入", 0)

    # 根据公司规模进行简单评分
    如果employee_count > 1000 或revenue_estimate > 100_000_000：
        返回 10.0，“企业规模机会”
    elif 员工计数 > 200 或收入估计 > 20_000_000：
        返回 7.0，“中端市场机会”
    elif 员工计数 > 50：
        返回5.0，“中小企业机会”
    其他：
        返回3.0，“小型企业”


def Score_timing(prospect: dict) -> tuple[float, str]:
    “”“基于计时信号的分数。”“”
    Timing_signals = prospect.get("timing_signals", [])

    分数 = 5.0 # 基本分数
    原因=[]

    对于timing_signals中的信号：
        如果信号==“budget_cycle_q4”：
            分数 += 3
            Reasons.append("第四季度预算规划")
        elif 信号 == "contract_expiring":
            分数 += 4
            Reasons.append("合同即将到期")
        elif 信号==“active_evaluation”：
            分数 += 5
            Reasons.append("积极评估")
        elif 信号==“just_funded”：
            分数 += 3
            Reasons.append("最近资助")

    return min(score, 10.0), "; ".join(reasons) 如果有其他原因 "标准计时"

def Score_warmth(prospect: dict) -> 元组[float, str]:
    """根据关系温暖度进行评分。"""
    关系 = prospect.get("关系", {})

    如果关系.get(“is_followup”):
        最后的结果=关系.get（“最后的结果”，“中性”）
        如果last_outcome ==“积极”：
            return 9.0，“热情跟进（积极最后联系）”
        elif last_outcome ==“中立”：
            return 7.0,“后续（中立的最后联系）”
        其他：
            返回 5.0，“后续（需要重新参与）”

    如果关系.get(“被推荐”):
        返回 8.0，“推荐潜在客户”

    如果关系.get("mutual_connections", 0) > 0:
        return 6.0, f"{relationship['mutual_connections']}相互连接"

    如果关系.get(“入站”):
        返回 7.0，“入境利息”

    返回4.0，“冷外展”


def Score_signals(prospect: dict) -> 元组[float, str]:
    """根据检测到的购买信号进行评分。"""
    信号 = prospect.get("信号", [])

    总分 = 0
    信号原因 = []

    对于信号中的信号：
        signal_score = SIGNAL_SCORES.get(信号, 0)
        总分 += 信号分
        如果 signal_score > 0：
            signal_reasons.append(signal.replace("_", " "))

    # 标准化为 0-10 范围
    归一化 = min(max(total_score / 2, 0), 10)

    Reason = f"信号：{', '.join(signal_reasons)}" if signal_reasons else "没有强信号"
    返回标准化，原因


def 计算优先级分数(
    前景：字典，
    权重：字典=无
) -> 得分前景：
    """计算潜在客户的总体优先级得分。"""
    权重 = 权重或 DEFAULT_WEIGHTS

    # 计算组件分数
    deal_score, deal_reason = Score_deal_size(潜在客户)
    计时分数，计时原因 = 分数计时（前景）
    温暖得分，温暖原因 = 得分温暖（前景）
    signal_score, signal_reason = Score_signals(prospect)

    # 加权总计
    原始分数 = (
        deal_score * 权重["deal_size"] +
        Timing_score * 权重["timing"] +
        温暖得分 * 权重[“温暖”] +
        signal_score * 权重[“信号”]
    ）

    # 编译推理
    原因=[]
    如果timing_score >= 8：
        原因.append(timing_reason)
    如果 signal_score >= 7：
        原因.append(signal_reason)
    如果 Warm_Score >= 7：
        原因.append(warmth_reason)
    如果 deal_score >= 8：
        原因.append(deal_reason)

    返回得分前景（
        公司=prospect.get("公司", "未知"),
        contact=prospect.get("联系人", "未知"),
        call_time=prospect.get("call_time", "未知"),
        raw_score=round(raw_score, 2),
        Normalized_score=int(raw_score * 10),
        priority_rank=0, # 排序后会设置
        分数_细分={
            "deal_size": {"score": deal_score, "reason": deal_reason},
            “计时”：{“分数”：timing_score，“原因”：timing_reason}，
            “温暖”：{“得分”：温暖_得分，“原因”：温暖_原因}，
            “信号”：{“分数”：signal_score，“原因”：signal_reason}
        },
        Reasoning="; ".join(reasons) 如果有其他原因"标准优先级",
        is_followup=prospect.get("关系", {}).get("is_followup", False)
    ）


定义主要（
    前景：列表[dict]，
    权重：字典=无
) -> 字典[str, 任意]:
    ”“”
    计算潜在客户的优先级并对其进行排序。

    参数：
        前景：带有信号的前景对象列表
        权重：用于评分组件的可选自定义权重

返回：
        包含排名前景和得分详细信息的字典
    ”“”
    权重 = 权重或 DEFAULT_WEIGHTS

    # 对所有潜在客户进行评分
    Scored = [计算前景中 p 的优先级得分（p，权重）]

    # 按原始分数降序排序
    Scored.sort(key=lambda x: x.raw_score，reverse=True)

    # 分配排名
    对于 i，枚举中的前景（得分，1）：
        前景.priority_rank = i

    # 转换为字典以进行 JSON 序列化
    排名=[]
    对于得分中的 s：
        排名.追加（{
            “公司”：s.company，
            “联系方式”：s.联系方式，
            “call_time”：s.call_time，
            “priority_rank”：s.priority_rank，
            “分数”：s.normalized_score，
            “推理”：s.reasoning，
            "is_followup": s.is_followup,
            “细分”：s.score_breakdown
        })

    返回{
        “排名”：排名，
        “weights_used”：权重，
        “total_prospects”：len（前景）
    }


如果 __name__ == "__main__":
    导入系统

    # 用法示例
    示例_前景 = [
        {
            “公司”：“数据流系统”，
            “联系人”：“莎拉·陈”，
            "call_time": "下午 2 点",
            "size_indicators": {"员工": 200, "收入": 25_000_000},
            "timing_signals": ["just_funded", "active_evaluation"],
            "signals": ["recent_funding", "job_postings_relevant"],
            “关系”：{“is_followup”：False，“mutual_connections”：2}
        },
        {
            “公司”：“Acme 制造”，
            “联系人”：“汤姆·布拉德利”，
            “call_time”：“上午 10 点”，
            “size_indicators”：{“员工”：500}，
            "timing_signals": ["contract_expiring"],
            “信号”：[]，
            "relationship": {"is_followup": True, "last_outcome": "neutral"}
        },
        {
            "公司": "FirstRate Financial",
            “联系人”：“琳达·汤普森”，
            “call_time”：“下午 4 点”，
            “size_indicators”：{“员工”：300}，
            “计时信号”：[]，
            “信号”：[]，
            “关系”：{“is_followup”：False}
        }
    ]

    结果=主要（前景= example_prospects）
    打印（json.dumps（结果，缩进= 2））
文件：研究清单.md
# 前景研究清单

## 公司研究

### 基本信息
- [ ] 公司名称（验证拼写）
- [ ] 行业/垂直
- [ ] 总部所在地
- [ ] 员工人数（LinkedIn、网站）
- [ ] 收入估算（如果有）
- [ ] 成立日期
- [ ] 资助阶段/历史

### 最近新闻（过去 90 天）
- [ ] 资助公告
- [ ] 收购或合并
- [ ] 领导层变动
- [ ] 产品发布
- [ ] 赢得大客户
- [ ] 媒体提及
- [ ] 收益/财务新闻

### 数字足迹
- [ ] 网站评论
- [ ] 博客/内容主题
- [ ] 社交媒体存在
- [ ] 职位发布（职业页面 + LinkedIn）
- [ ] 技术堆栈（BuiltWith、职位发布）

### 竞争格局
- [ ] 已知竞争对手
- [ ] 市场地位
- [ ] 声称的差异化因素
- [ ] 最近的竞争动作

### 痛点指标
- [ ] Glassdoor 评论（主题）
- [ ] G2/Capterra 评论（如果是 B2B）
- [ ] 社交媒体投诉
- [ ] 职位发布模式

## 联系研究

### 专业简介
- [ ] 当前标题
- [ ] 担任角色的时间
- [ ] 在公司的时间
- [ ] 以前的公司
- [ ] 以前的角色
- [ ] 教育

### 决策权
- [ ] 向谁报告
- [ ] 团队规模（如果是经理）
- [ ] 预算权限（推断）
- [ ] 购买参与历史

### 订婚挂钩
- [ ] 最近的 LinkedIn 帖子
- [ ] 发表文章
- [ ] 播客出场
- [ ] 会议演讲
- [ ] 相互连接
- [ ] 共同兴趣/团体

### 沟通方式
- [ ] 后音（正式/休闲）
- [ ] 他们参与的主题
- [ ] 响应模式

## CRM 检查（如果有）

- [ ] 任何先前的接触点
- [ ] 以前的机会
- [ ] 公司相关联系人
- [ ] 同事的笔记
- [ ] 电子邮件参与历史记录

## 基于时间的研究深度

|可用时间 |研究深度|
|----------------|----------------|
| 5 分钟 |仅公司基本信息 + 联系人姓名 |
| 15 分钟 | + 最近新闻 + LinkedIn 个人资料 |
| 30 分钟 | + 痛点信号 + 参与钩子 |
| 60 分钟 |完整清单+竞争分析|
文件：信号指示器.md
# 信号指标参考

## 高强度信号

### 职位发布
- **发布 3 个以上相关角色** = 积极主动，分配预算
- **您所在领域的高级人才** = 战略优先事项
- **紧急语言（“尽快”、“立即”）** = 疼痛剧烈
- **提到的特定工具** = 竞争对手或类别认知度

### 财经事件
- **B+ 轮融资** = 成长资本、购买力
- **首次公开募股准备** = 所需的运营成熟度
- **宣布收购** = 整合挑战即将到来
- **收入里程碑公关** = 可用预算

### 领导层变动
- **您所在域中的新 CXO** = 90 天优先级设置
- **新的 CRO/CMO** = 可能进行技术堆栈评估
- **创始人转型为首席执行官** = 专业化运营

## 中等强度信号

### 扩展信号
- **新办公室开业** = 基础设施需求
- **国际扩张** = 本地化、合规性
- **新产品发布** = 扩展挑战
- **赢得大客户** = 交付压力

### 技术信号
- **RFP 已发布** = 积极的购买流程
- **提及供应商评论** = 比较购物
- **技术堆栈变化** = 集成机会
- **遗留系统投诉** = 现代化需求

### 内容信号
- **关于您的主题的博客文章** = 自我教育
- **出席网络研讨会** = 已确认兴趣
- **白皮书下载** = 问题意识
- **会议发言** = 思想领导力、知名度

## 低意图信号（培养）

### 一般活动
- **行业活动出席率** = 市场参与者
- **一般招聘** = 公司成长
- **正面媒体** = 健康的公司
- **社交媒体活动** = 敬业的领导力

## 信号评分

|信号类型|分数 |行动|
|------------|--------|--------|
|职位发布（相关）| +3 |优先考虑外展 |
|近期融资 | +3 |对话中的参考 |
|领导层变动| +2 |时间敏感的机会 |
|拓展新闻 | +2 |成长角度|
|负面评论 | +2 |痛点角度|
|内容参与度| +1 |培育轨迹|
|无信号| 0 |发现焦点|
```

---

## English Original

### Title

Sales Research

### Description

This skill provides methodology and best practices for researching sales prospects.

### Prompt

```md
---
name: sales-research
description: This skill provides methodology and best practices for researching sales prospects.
---

# Sales Research

## Overview

This skill provides methodology and best practices for researching sales prospects. It covers company research, contact profiling, and signal detection to surface actionable intelligence.

## Usage

The company-researcher and contact-researcher sub-agents reference this skill when:
- Researching new prospects
- Finding company information
- Profiling individual contacts
- Detecting buying signals

## Research Methodology

### Company Research Checklist

1. **Basic Profile**
   - Company name, industry, size (employees, revenue)
   - Headquarters and key locations
   - Founded date, growth stage

2. **Recent Developments**
   - Funding announcements (last 12 months)
   - M&A activity
   - Leadership changes
   - Product launches

3. **Tech Stack**
   - Known technologies (BuiltWith, StackShare)
   - Job postings mentioning tools
   - Integration partnerships

4. **Signals**
   - Job postings (scaling = opportunity)
   - Glassdoor reviews (pain points)
   - News mentions (context)
   - Social media activity

### Contact Research Checklist

1. **Professional Background**
   - Current role and tenure
   - Previous companies and roles
   - Education

2. **Influence Indicators**
   - Reporting structure
   - Decision-making authority
   - Budget ownership

3. **Engagement Hooks**
   - Recent LinkedIn posts
   - Published articles
   - Speaking engagements
   - Mutual connections

## Resources

- `resources/signal-indicators.md` - Taxonomy of buying signals
- `resources/research-checklist.md` - Complete research checklist

## Scripts

- `scripts/company-enricher.py` - Aggregate company data from multiple sources
- `scripts/linkedin-parser.py` - Structure LinkedIn profile data
FILE:company-enricher.py
#!/usr/bin/env python3
"""
company-enricher.py - Aggregate company data from multiple sources

Inputs:
  - company_name: string
  - domain: string (optional)

Outputs:
  - profile:
      name: string
      industry: string
      size: string
      funding: string
      tech_stack: [string]
      recent_news: [news items]

Dependencies:
  - requests, beautifulsoup4
"""

# Requirements: requests, beautifulsoup4

import json
from typing import Any
from dataclasses import dataclass, asdict
from datetime import datetime


@dataclass
class NewsItem:
    title: str
    date: str
    source: str
    url: str
    summary: str


@dataclass
class CompanyProfile:
    name: str
    domain: str
    industry: str
    size: str
    location: str
    founded: str
    funding: str
    tech_stack: list[str]
    recent_news: list[dict]
    competitors: list[str]
    description: str


def search_company_info(company_name: str, domain: str = None) -> dict:
    """
    Search for basic company information.
    In production, this would call APIs like Clearbit, Crunchbase, etc.
    """
    # TODO: Implement actual API calls
    # Placeholder return structure
    return {
        "name": company_name,
        "domain": domain or f"{company_name.lower().replace(' ', '')}.com",
        "industry": "Technology",  # Would come from API
        "size": "Unknown",
        "location": "Unknown",
        "founded": "Unknown",
        "description": f"Information about {company_name}"
    }


def search_funding_info(company_name: str) -> dict:
    """
    Search for funding information.
    In production, would call Crunchbase, PitchBook, etc.
    """
    # TODO: Implement actual API calls
    return {
        "total_funding": "Unknown",
        "last_round": "Unknown",
        "last_round_date": "Unknown",
        "investors": []
    }


def search_tech_stack(domain: str) -> list[str]:
    """
    Detect technology stack.
    In production, would call BuiltWith, Wappalyzer, etc.
    """
    # TODO: Implement actual API calls
    return []


def search_recent_news(company_name: str, days: int = 90) -> list[dict]:
    """
    Search for recent news about the company.
    In production, would call news APIs.
    """
    # TODO: Implement actual API calls
    return []


def main(
    company_name: str,
    domain: str = None
) -> dict[str, Any]:
    """
    Aggregate company data from multiple sources.

    Args:
        company_name: Company name to research
        domain: Company domain (optional, will be inferred)

    Returns:
        dict with company profile including industry, size, funding, tech stack, news
    """
    # Get basic company info
    basic_info = search_company_info(company_name, domain)

    # Get funding information
    funding_info = search_funding_info(company_name)

    # Detect tech stack
    company_domain = basic_info.get("domain", domain)
    tech_stack = search_tech_stack(company_domain) if company_domain else []

    # Get recent news
    news = search_recent_news(company_name)

    # Compile profile
    profile = CompanyProfile(
        name=basic_info["name"],
        domain=basic_info["domain"],
        industry=basic_info["industry"],
        size=basic_info["size"],
        location=basic_info["location"],
        founded=basic_info["founded"],
        funding=funding_info.get("total_funding", "Unknown"),
        tech_stack=tech_stack,
        recent_news=news,
        competitors=[],  # Would be enriched from industry analysis
        description=basic_info["description"]
    )

    return {
        "profile": asdict(profile),
        "funding_details": funding_info,
        "enriched_at": datetime.now().isoformat(),
        "sources_checked": ["company_info", "funding", "tech_stack", "news"]
    }


if __name__ == "__main__":
    import sys

    # Example usage
    result = main(
        company_name="DataFlow Systems",
        domain="dataflow.io"
    )
    print(json.dumps(result, indent=2))
FILE:linkedin-parser.py
#!/usr/bin/env python3
"""
linkedin-parser.py - Structure LinkedIn profile data

Inputs:
  - profile_url: string
  - or name + company: strings

Outputs:
  - contact:
      name: string
      title: string
      tenure: string
      previous_roles: [role objects]
      mutual_connections: [string]
      recent_activity: [post summaries]

Dependencies:
  - requests
"""

# Requirements: requests

import json
from typing import Any
from dataclasses import dataclass, asdict
from datetime import datetime


@dataclass
class PreviousRole:
    title: str
    company: str
    duration: str
    description: str


@dataclass
class RecentPost:
    date: str
    content_preview: str
    engagement: int
    topic: str


@dataclass
class ContactProfile:
    name: str
    title: str
    company: str
    location: str
    tenure: str
    previous_roles: list[dict]
    education: list[str]
    mutual_connections: list[str]
    recent_activity: list[dict]
    profile_url: str
    headline: str


def search_linkedin_profile(name: str = None, company: str = None, profile_url: str = None) -> dict:
    """
    Search for LinkedIn profile information.
    In production, would use LinkedIn API or Sales Navigator.
    """
    # TODO: Implement actual LinkedIn API integration
    # Note: LinkedIn's API has strict terms of service

    return {
        "found": False,
        "name": name or "Unknown",
        "title": "Unknown",
        "company": company or "Unknown",
        "location": "Unknown",
        "headline": "",
        "tenure": "Unknown",
        "profile_url": profile_url or ""
    }


def get_career_history(profile_data: dict) -> list[dict]:
    """
    Extract career history from profile.
    """
    # TODO: Implement career extraction
    return []


def get_mutual_connections(profile_data: dict, user_network: list = None) -> list[str]:
    """
    Find mutual connections.
    """
    # TODO: Implement mutual connection detection
    return []


def get_recent_activity(profile_data: dict, days: int = 30) -> list[dict]:
    """
    Get recent posts and activity.
    """
    # TODO: Implement activity extraction
    return []


def main(
    name: str = None,
    company: str = None,
    profile_url: str = None
) -> dict[str, Any]:
    """
    Structure LinkedIn profile data for sales prep.

    Args:
        name: Person's name
        company: Company they work at
        profile_url: Direct LinkedIn profile URL

    Returns:
        dict with structured contact profile
    """
    if not profile_url and not (name and company):
        return {"error": "Provide either profile_url or name + company"}

    # Search for profile
    profile_data = search_linkedin_profile(
        name=name,
        company=company,
        profile_url=profile_url
    )

    if not profile_data.get("found"):
        return {
            "found": False,
            "name": name or "Unknown",
            "company": company or "Unknown",
            "message": "Profile not found or limited access",
            "suggestions": [
                "Try searching directly on LinkedIn",
                "Check for alternative spellings",
                "Verify the person still works at this company"
            ]
        }

    # Get career history
    previous_roles = get_career_history(profile_data)

    # Find mutual connections
    mutual_connections = get_mutual_connections(profile_data)

    # Get recent activity
    recent_activity = get_recent_activity(profile_data)

    # Compile contact profile
    contact = ContactProfile(
        name=profile_data["name"],
        title=profile_data["title"],
        company=profile_data["company"],
        location=profile_data["location"],
        tenure=profile_data["tenure"],
        previous_roles=previous_roles,
        education=[],  # Would be extracted from profile
        mutual_connections=mutual_connections,
        recent_activity=recent_activity,
        profile_url=profile_data["profile_url"],
        headline=profile_data["headline"]
    )

    return {
        "found": True,
        "contact": asdict(contact),
        "research_date": datetime.now().isoformat(),
        "data_completeness": calculate_completeness(contact)
    }


def calculate_completeness(contact: ContactProfile) -> dict:
    """Calculate how complete the profile data is."""
    fields = {
        "basic_info": bool(contact.name and contact.title and contact.company),
        "career_history": len(contact.previous_roles) > 0,
        "mutual_connections": len(contact.mutual_connections) > 0,
        "recent_activity": len(contact.recent_activity) > 0,
        "education": len(contact.education) > 0
    }

    complete_count = sum(fields.values())
    return {
        "fields": fields,
        "score": f"{complete_count}/{len(fields)}",
        "percentage": int((complete_count / len(fields)) * 100)
    }


if __name__ == "__main__":
    import sys

    # Example usage
    result = main(
        name="Sarah Chen",
        company="DataFlow Systems"
    )
    print(json.dumps(result, indent=2))
FILE:priority-scorer.py
#!/usr/bin/env python3
"""
priority-scorer.py - Calculate and rank prospect priorities

Inputs:
  - prospects: [prospect objects with signals]
  - weights: {deal_size, timing, warmth, signals}

Outputs:
  - ranked: [prospects with scores and reasoning]

Dependencies:
  - (none - pure Python)
"""

import json
from typing import Any
from dataclasses import dataclass


# Default scoring weights
DEFAULT_WEIGHTS = {
    "deal_size": 0.25,
    "timing": 0.30,
    "warmth": 0.20,
    "signals": 0.25
}

# Signal score mapping
SIGNAL_SCORES = {
    # High-intent signals
    "recent_funding": 10,
    "leadership_change": 8,
    "job_postings_relevant": 9,
    "expansion_news": 7,
    "competitor_mention": 6,

    # Medium-intent signals
    "general_hiring": 4,
    "industry_event": 3,
    "content_engagement": 3,

    # Relationship signals
    "mutual_connection": 5,
    "previous_contact": 6,
    "referred_lead": 8,

    # Negative signals
    "recent_layoffs": -3,
    "budget_freeze_mentioned": -5,
    "competitor_selected": -7,
}


@dataclass
class ScoredProspect:
    company: str
    contact: str
    call_time: str
    raw_score: float
    normalized_score: int
    priority_rank: int
    score_breakdown: dict
    reasoning: str
    is_followup: bool


def score_deal_size(prospect: dict) -> tuple[float, str]:
    """Score based on estimated deal size."""
    size_indicators = prospect.get("size_indicators", {})

    employee_count = size_indicators.get("employees", 0)
    revenue_estimate = size_indicators.get("revenue", 0)

    # Simple scoring based on company size
    if employee_count > 1000 or revenue_estimate > 100_000_000:
        return 10.0, "Enterprise-scale opportunity"
    elif employee_count > 200 or revenue_estimate > 20_000_000:
        return 7.0, "Mid-market opportunity"
    elif employee_count > 50:
        return 5.0, "SMB opportunity"
    else:
        return 3.0, "Small business"


def score_timing(prospect: dict) -> tuple[float, str]:
    """Score based on timing signals."""
    timing_signals = prospect.get("timing_signals", [])

    score = 5.0  # Base score
    reasons = []

    for signal in timing_signals:
        if signal == "budget_cycle_q4":
            score += 3
            reasons.append("Q4 budget planning")
        elif signal == "contract_expiring":
            score += 4
            reasons.append("Contract expiring soon")
        elif signal == "active_evaluation":
            score += 5
            reasons.append("Actively evaluating")
        elif signal == "just_funded":
            score += 3
            reasons.append("Recently funded")

    return min(score, 10.0), "; ".join(reasons) if reasons else "Standard timing"


def score_warmth(prospect: dict) -> tuple[float, str]:
    """Score based on relationship warmth."""
    relationship = prospect.get("relationship", {})

    if relationship.get("is_followup"):
        last_outcome = relationship.get("last_outcome", "neutral")
        if last_outcome == "positive":
            return 9.0, "Warm follow-up (positive last contact)"
        elif last_outcome == "neutral":
            return 7.0, "Follow-up (neutral last contact)"
        else:
            return 5.0, "Follow-up (needs re-engagement)"

    if relationship.get("referred"):
        return 8.0, "Referred lead"

    if relationship.get("mutual_connections", 0) > 0:
        return 6.0, f"{relationship['mutual_connections']} mutual connections"

    if relationship.get("inbound"):
        return 7.0, "Inbound interest"

    return 4.0, "Cold outreach"


def score_signals(prospect: dict) -> tuple[float, str]:
    """Score based on buying signals detected."""
    signals = prospect.get("signals", [])

    total_score = 0
    signal_reasons = []

    for signal in signals:
        signal_score = SIGNAL_SCORES.get(signal, 0)
        total_score += signal_score
        if signal_score > 0:
            signal_reasons.append(signal.replace("_", " "))

    # Normalize to 0-10 scale
    normalized = min(max(total_score / 2, 0), 10)

    reason = f"Signals: {', '.join(signal_reasons)}" if signal_reasons else "No strong signals"
    return normalized, reason


def calculate_priority_score(
    prospect: dict,
    weights: dict = None
) -> ScoredProspect:
    """Calculate overall priority score for a prospect."""
    weights = weights or DEFAULT_WEIGHTS

    # Calculate component scores
    deal_score, deal_reason = score_deal_size(prospect)
    timing_score, timing_reason = score_timing(prospect)
    warmth_score, warmth_reason = score_warmth(prospect)
    signal_score, signal_reason = score_signals(prospect)

    # Weighted total
    raw_score = (
        deal_score * weights["deal_size"] +
        timing_score * weights["timing"] +
        warmth_score * weights["warmth"] +
        signal_score * weights["signals"]
    )

    # Compile reasoning
    reasons = []
    if timing_score >= 8:
        reasons.append(timing_reason)
    if signal_score >= 7:
        reasons.append(signal_reason)
    if warmth_score >= 7:
        reasons.append(warmth_reason)
    if deal_score >= 8:
        reasons.append(deal_reason)

    return ScoredProspect(
        company=prospect.get("company", "Unknown"),
        contact=prospect.get("contact", "Unknown"),
        call_time=prospect.get("call_time", "Unknown"),
        raw_score=round(raw_score, 2),
        normalized_score=int(raw_score * 10),
        priority_rank=0,  # Will be set after sorting
        score_breakdown={
            "deal_size": {"score": deal_score, "reason": deal_reason},
            "timing": {"score": timing_score, "reason": timing_reason},
            "warmth": {"score": warmth_score, "reason": warmth_reason},
            "signals": {"score": signal_score, "reason": signal_reason}
        },
        reasoning="; ".join(reasons) if reasons else "Standard priority",
        is_followup=prospect.get("relationship", {}).get("is_followup", False)
    )


def main(
    prospects: list[dict],
    weights: dict = None
) -> dict[str, Any]:
    """
    Calculate and rank prospect priorities.

    Args:
        prospects: List of prospect objects with signals
        weights: Optional custom weights for scoring components

    Returns:
        dict with ranked prospects and scoring details
    """
    weights = weights or DEFAULT_WEIGHTS

    # Score all prospects
    scored = [calculate_priority_score(p, weights) for p in prospects]

    # Sort by raw score descending
    scored.sort(key=lambda x: x.raw_score, reverse=True)

    # Assign ranks
    for i, prospect in enumerate(scored, 1):
        prospect.priority_rank = i

    # Convert to dicts for JSON serialization
    ranked = []
    for s in scored:
        ranked.append({
            "company": s.company,
            "contact": s.contact,
            "call_time": s.call_time,
            "priority_rank": s.priority_rank,
            "score": s.normalized_score,
            "reasoning": s.reasoning,
            "is_followup": s.is_followup,
            "breakdown": s.score_breakdown
        })

    return {
        "ranked": ranked,
        "weights_used": weights,
        "total_prospects": len(prospects)
    }


if __name__ == "__main__":
    import sys

    # Example usage
    example_prospects = [
        {
            "company": "DataFlow Systems",
            "contact": "Sarah Chen",
            "call_time": "2pm",
            "size_indicators": {"employees": 200, "revenue": 25_000_000},
            "timing_signals": ["just_funded", "active_evaluation"],
            "signals": ["recent_funding", "job_postings_relevant"],
            "relationship": {"is_followup": False, "mutual_connections": 2}
        },
        {
            "company": "Acme Manufacturing",
            "contact": "Tom Bradley",
            "call_time": "10am",
            "size_indicators": {"employees": 500},
            "timing_signals": ["contract_expiring"],
            "signals": [],
            "relationship": {"is_followup": True, "last_outcome": "neutral"}
        },
        {
            "company": "FirstRate Financial",
            "contact": "Linda Thompson",
            "call_time": "4pm",
            "size_indicators": {"employees": 300},
            "timing_signals": [],
            "signals": [],
            "relationship": {"is_followup": False}
        }
    ]

    result = main(prospects=example_prospects)
    print(json.dumps(result, indent=2))
FILE:research-checklist.md
# Prospect Research Checklist

## Company Research

### Basic Information
- [ ] Company name (verify spelling)
- [ ] Industry/vertical
- [ ] Headquarters location
- [ ] Employee count (LinkedIn, website)
- [ ] Revenue estimate (if available)
- [ ] Founded date
- [ ] Funding stage/history

### Recent News (Last 90 Days)
- [ ] Funding announcements
- [ ] Acquisitions or mergers
- [ ] Leadership changes
- [ ] Product launches
- [ ] Major customer wins
- [ ] Press mentions
- [ ] Earnings/financial news

### Digital Footprint
- [ ] Website review
- [ ] Blog/content topics
- [ ] Social media presence
- [ ] Job postings (careers page + LinkedIn)
- [ ] Tech stack (BuiltWith, job postings)

### Competitive Landscape
- [ ] Known competitors
- [ ] Market position
- [ ] Differentiators claimed
- [ ] Recent competitive moves

### Pain Point Indicators
- [ ] Glassdoor reviews (themes)
- [ ] G2/Capterra reviews (if B2B)
- [ ] Social media complaints
- [ ] Job posting patterns

## Contact Research

### Professional Profile
- [ ] Current title
- [ ] Time in role
- [ ] Time at company
- [ ] Previous companies
- [ ] Previous roles
- [ ] Education

### Decision Authority
- [ ] Reports to whom
- [ ] Team size (if manager)
- [ ] Budget authority (inferred)
- [ ] Buying involvement history

### Engagement Hooks
- [ ] Recent LinkedIn posts
- [ ] Published articles
- [ ] Podcast appearances
- [ ] Conference talks
- [ ] Mutual connections
- [ ] Shared interests/groups

### Communication Style
- [ ] Post tone (formal/casual)
- [ ] Topics they engage with
- [ ] Response patterns

## CRM Check (If Available)

- [ ] Any prior touchpoints
- [ ] Previous opportunities
- [ ] Related contacts at company
- [ ] Notes from colleagues
- [ ] Email engagement history

## Time-Based Research Depth

| Time Available | Research Depth |
|----------------|----------------|
| 5 minutes | Company basics + contact title only |
| 15 minutes | + Recent news + LinkedIn profile |
| 30 minutes | + Pain point signals + engagement hooks |
| 60 minutes | Full checklist + competitive analysis |
FILE:signal-indicators.md
# Signal Indicators Reference

## High-Intent Signals

### Job Postings
- **3+ relevant roles posted** = Active initiative, budget allocated
- **Senior hire in your domain** = Strategic priority
- **Urgency language ("ASAP", "immediate")** = Pain is acute
- **Specific tool mentioned** = Competitor or category awareness

### Financial Events
- **Series B+ funding** = Growth capital, buying power
- **IPO preparation** = Operational maturity needed
- **Acquisition announced** = Integration challenges coming
- **Revenue milestone PR** = Budget available

### Leadership Changes
- **New CXO in your domain** = 90-day priority setting
- **New CRO/CMO** = Tech stack evaluation likely
- **Founder transition to CEO** = Professionalizing operations

## Medium-Intent Signals

### Expansion Signals
- **New office opening** = Infrastructure needs
- **International expansion** = Localization, compliance
- **New product launch** = Scaling challenges
- **Major customer win** = Delivery pressure

### Technology Signals
- **RFP published** = Active buying process
- **Vendor review mentioned** = Comparison shopping
- **Tech stack change** = Integration opportunity
- **Legacy system complaints** = Modernization need

### Content Signals
- **Blog post on your topic** = Educating themselves
- **Webinar attendance** = Interest confirmed
- **Whitepaper download** = Problem awareness
- **Conference speaking** = Thought leadership, visibility

## Low-Intent Signals (Nurture)

### General Activity
- **Industry event attendance** = Market participant
- **Generic hiring** = Company growing
- **Positive press** = Healthy company
- **Social media activity** = Engaged leadership

## Signal Scoring

| Signal Type | Score | Action |
|-------------|-------|--------|
| Job posting (relevant) | +3 | Prioritize outreach |
| Recent funding | +3 | Reference in conversation |
| Leadership change | +2 | Time-sensitive opportunity |
| Expansion news | +2 | Growth angle |
| Negative reviews | +2 | Pain point angle |
| Content engagement | +1 | Nurture track |
| No signals | 0 | Discovery focus |
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [sales-research](https://prompts.chat/prompts/sales-research) |
| Category | Sales (`sales`) |
| Type | `SKILL` |
| Tags | Sales, Research |
| Contributors | tomstools11 |
| Updated At | 2026-02-06T18:46:46.484Z |
