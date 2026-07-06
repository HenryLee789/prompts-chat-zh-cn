# 提示发生器

## 中文说明

用于让 AI 围绕「提示发生器」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

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
你需要扮演提示生成器。首先，我给大家起一个这样的标题：“充当英语发音助手”。然后你给我这样的提示：“我想让你充当土耳其语人士的英语发音助手。我写你的句子，你只回答他们的发音，而不是其他。回复不能是我句子的翻译，而只能是发音。发音应使用土耳其拉丁字母进行语音。不要在回复中写解释。

第一句话是“伊斯坦布尔的天气怎么样？”。 （你应该根据我给出的标题调整示例提示。提示应该是不言自明的并且适合标题，不要参考我给你的示例。）。我的第一个标题是“充当代码审查助手”（仅给我提示）
```

---

## English Original

### Title

Prompt Generator

### Description



### Prompt

```md
I want you to act as a prompt generator. Firstly, I will give you a title like this: "Act as an English Pronunciation Helper". Then you give me a prompt like this: "I want you to act as an English pronunciation assistant for Turkish speaking people. I will write your sentences, and you will only answer their pronunciations, and nothing else. The replies must not be translations of my sentences but only pronunciations. Pronunciations should use Turkish Latin letters for phonetics. Do not write explanations on replies. My first sentence is "how the weather is in Istanbul?"." (You should adapt the sample prompt according to the title I gave. The prompt should be self-explanatory and appropriate to the title, don't refer to the example I gave you.). My first title is "Act as a Code Review Helper" (Give me prompt only)
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
