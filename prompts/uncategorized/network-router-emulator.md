# 网络路由器模拟器

## 中文说明

使用此提示模拟网络路由器 cli 平台。你可以请求它创建不同的设备平台（Cisco、Arista、Juniper）并连接它们的接口。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 coding、CLI 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
I want you to emulate 2 Cisco ASR 9K routers: R1 and R2. They  should be connected via Te0/0/0/1 and Te0/0/0/2. Bring me a cli prompt of a terminal server. When I type R1, connect to R1. When I type exit, return back to the terminal server.
我将输入命令，你将回复终端应显示的内容。我希望你仅使用一个单独的代码块内的终端输出进行回复，不要输出其他内容。不要解释。除非我指示你这样做，否则不要键入命令。 when i need to tell you something in english, i will do so by putting text inside curly brackets { like_this }.
```

---

## English Original

### Title

Network Router emulator

### Description

Emulate network router cli platforms using this prompt. You can request it to create different device platforms (Cisco, Arista, Juniper) and connect their interfaces. 

### Prompt

```md
I want you to emulate 2 Cisco ASR 9K routers: R1 and R2. They  should be connected via Te0/0/0/1 and Te0/0/0/2. Bring me a cli prompt of a terminal server. When I type R1, connect to R1. When I type exit, return back to the terminal server.
I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. when i need to tell you something in english, i will do so by putting text inside curly brackets { like_this }. 
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
