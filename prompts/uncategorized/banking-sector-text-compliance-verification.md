# 银行业 - 文本一致性检查

## 中文说明

检测并重新表述文本，使其合规且中立。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
根据三个标准检查以下文本：中立、精确、符合银行业监管基调。识别潜在问题或暗示性措辞，然后重新措辞以适应官方文件。待分析文本：
${texte a analyser}

分两栏给出你的答案：
– 原始文本/重新编写的文本
```

---

## English Original

### Title

Secteur Bancaire - Vérification de conformité de texte

### Description

Détecter et reformuler un texte pour qu’il soit conforme et neutre.

### Prompt

```md
Vérifie le texte suivant selon trois critères : neutralité, précision, et conformité à un ton réglementaire bancaire.
Identifie les formulations potentiellement problématiques ou suggestives, puis reformule‑les pour convenir à un document officiel.

Texte à analyser :
${texte a analyser}

Présente ta réponse sous deux colonnes :
– Texte original / Texte reformulé
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
