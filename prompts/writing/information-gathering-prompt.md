---
id: "cmm55hzfp0001l504s6rrl4hb"
slug: "information-gathering-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/information-gathering-prompt"
category: "writing"
category_name: "Writing"
category_zh: "写作"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "676e71ce296d75c27d389572ed1e961c3d2c5c73958de06ebf09f330d27e037f"
upstream_updated_at: "2026-02-27T17:13:10.212Z"
---
# 信息收集提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[information-gathering-prompt](https://prompts.chat/prompts/information-gathering-prompt)  
> 分类：写作（Writing / `writing`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

针对您想要撰写的任何主题的有效信息收集提示 - 提供有关该主题的基本信息（分为子类别）或专业信息（也分为子类别）。

## 使用场景

- 用于写作相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Research、Creative Writing、Essay Writing、Blogging 等主题快速生成可复用结果。

## 适用人群

- 写作者
- 内容创作者
- 编辑

## 中文 Prompt 正文

```md
## *信息收集提示*

---

## *提示输入*
- 输入提示主题=${topic}
- **输入的主题是大括号内的变量，在整个提示中将被称为“M”。**

---

## *提示原则*
- 我是一名研究人员，设计各种主题的文章。
- 你**绝对不**应该帮助我设计这篇文章。 （最重要的一点）
	1. **永远不要向我推荐一篇关于“M”的文章。**
	2. **不要提供任何设计有关“M”的文章的技巧。**
- 你只需向我提供有关“M”的信息，以便**根据我从这些信息中学到的知识，==我自己==可以去设计这篇文章。**
- 在“提示输出”部分，将设计各种输出，每个输出都标有数字，例如输出 1、输出 2 等。
	- **输出如何工作：**
		1. **首先，提交此提示后，询问我需要哪个输出。**
		2. 我将输入所需输出的编号，例如“1”或“2”等。
		3. 您只需提供具有该特定数字的输出。
		4. 提交所需的输出后，如果我输入**“more”**，则会展开相同类型的编号输出。
	- 您提供哪个输出或我是否输入“更多”并不重要；无论如何，您的回复应该**非常详细**，并使用**最大字符和标记**进行输出。 （极其重要）
- 感谢您的合作，尊敬的聊天机器人！

---

## *提示输出*

---

### *输出1*
- 此输出被命名为：**“基本信息”**
- 包括以下内容：
	- 关于“M”的**介绍**
	- **关于“M”的一般**信息
	- 关于“M”的**关键**亮点和要点
- 如果键入“2”，则继续下一个输出。
- 如果输入“more”，则扩展此类输出。

---

### *输出2*
- 此输出被命名为：“专业信息”
- 包括：
	- 更多学术和专业信息
	- 如果提示主题是角色发展：
		- 对于奇幻角色发展，更详细的信息，例如铁杆粉丝意见、详细的角色故事以及角色的衍生作品。
		- 对于现实生活中的角色，更多的个人故事、习惯、行为以及获得的关于角色的详细信息。
- 如何交付输出：
	1.以“目录”的形式将“M”的专业信息所涵盖的各个主题以列表的形式展示出来；这些是最初的主题。
	2. 在其下方键入：
		- “你对哪个话题感兴趣？”
			- 如果键入所需主题的名称，请提供有关该主题的完整专业信息。
		- “如果您需要更多有关‘M’的主题，请输入‘更多’”
			- 如果键入“更多”，请提供初始列表之外的其他主题。如果在第二轮之后再次输入“更多”，则在前两组之外添加更多初始主题。
				- 给您的提示：最初编译主题时，请尝试包含尽可能多的相关主题，以尽量减少使用此选项的需要。
		- “如果您需要访问任何主题的子主题，请输入‘主题...（所需主题）’。”
			- 如果输入了指定的文本，请提供初始主题的子主题（次要主题）。
			- 即使我输入“主题...（次要主题）”，仍然提供这些次要主题的子主题，可以称为“第三级主题”，并且这可以延续到任何级别。
			- 在主题的任何阶段（初始、第二、第三级等），输入“更多”将始终扩展同一级别的主题。
		- **总结**：
			- 如果仅键入主题名称，请以该主题的格式提供专门信息。
			- 如果键入“主题...（另一个主题）”，请解决该主题的子主题。
			- 如果在提供主题列表后键入“更多”，则展开同一级别的主题。
			- 如果在提供有关某个主题的信息后键入“更多”，请提供有关该主题的更专业的信息。
	3. 在任何阶段，如果输入“1”，则参考“输出1”。
		- 提供任意级别的主题列表时，提醒我，如果我只输入“1”，我们将返回“基本信息”；如果我输入“选项 1”，我们将转到该列表中的第一项。
```

---

## English Original

### Title

Information Gathering Prompt

### Description

An effective information gathering prompt for any subject you'd like to write about - providing both Basic Information about the subject, divided into sub categories, or Specialization Information, also divided into sub categories.

### Prompt

```md
## *Information Gathering Prompt*

---

## *Prompt Input*
- Enter the prompt topic = ${topic}
- **The entered topic is a variable within curly braces that will be referred to as "M" throughout the prompt.**

---

## *Prompt Principles*
- I am a researcher designing articles on various topics.
- You are **absolutely not** supposed to help me design the article. (Most important point)
	1. **Never suggest an article about "M" to me.**
	2. **Do not provide any tips for designing an article about "M".**
- You are only supposed to give me information about "M" so that **based on my learnings from this information, ==I myself== can go and design the article.**
- In the "Prompt Output" section, various outputs will be designed, each labeled with a number, e.g., Output 1, Output 2, etc.
	- **How the outputs work:**
		1. **To start, after submitting this prompt, ask which output I need.**
		2. I will type the number of the desired output, e.g., "1" or "2", etc.
		3. You will only provide the output with that specific number.
		4. After submitting the desired output, if I type **"more"**, expand the same type of numbered output.
	- It doesn’t matter which output you provide or if I type "more"; in any case, your response should be **extremely detailed** and use **the maximum characters and tokens** you can for the outputs. (Extremely important)
- Thank you for your cooperation, respected chatbot!

---

## *Prompt Output*

---

### *Output 1*
- This output is named: **"Basic Information"**
- Includes the following:
	- An **introduction** about "M"
	- **General** information about "M"
	- **Key** highlights and points about "M"
- If "2" is typed, proceed to the next output.
- If "more" is typed, expand this type of output.

---

### *Output 2*
- This output is named: "Specialized Information"
- Includes:
	- More academic and specialized information
	- If the prompt topic is character development:
		- For fantasy character development, more detailed information such as hardcore fan opinions, detailed character stories, and spin-offs about the character.
		- For real-life characters, more personal stories, habits, behaviors, and detailed information obtained about the character.
- How to deliver the output:
	1. Show the various topics covered in the specialized information about "M" as a list in the form of a "table of contents"; these are the initial topics.
	2. Below it, type:
		- "Which topic are you interested in?"
			- If the name of the desired topic is typed, provide complete specialized information about that topic.
		- "If you need more topics about 'M', please type 'more'"
			- If "more" is typed, provide additional topics beyond the initial list. If "more" is typed again after the second round, add even more initial topics beyond the previous two sets.
				- A note for you: When compiling the topics initially, try to include as many relevant topics as possible to minimize the need for using this option.
		- "If you need access to subtopics of any topic, please type 'topics ... (desired topic)'."
			- If the specified text is typed, provide the subtopics (secondary topics) of the initial topics.
			- Even if I type "topics ... (a secondary topic)", still provide the subtopics of those secondary topics, which can be called "third-level topics", and this can continue to any level.
			- At any stage of the topics (initial, secondary, third-level, etc.), typing "more" will always expand the topics at that same level.
		- **Summary**:
			- If only the topic name is typed, provide specialized information in the format of that topic.
			- If "topics ... (another topic)" is typed, address the subtopics of that topic.
			- If "more" is typed after providing a list of topics, expand the topics at that same level.
			- If "more" is typed after providing information on a topic, give more specialized information about that topic.
	3. At any stage, if "1" is typed, refer to "Output 1".
		- When providing a list of topics at any level, remind me that if I just type "1", we will return to "Basic Information"; if I type "option 1", we will go to the first item in that list.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [information-gathering-prompt](https://prompts.chat/prompts/information-gathering-prompt) |
| Category | Writing (`writing`) |
| Type | `TEXT` |
| Tags | Research, Creative Writing, Essay Writing, Blogging, AI Tools, Brainstorming |
| Contributors | themikimano |
| Updated At | 2026-02-27T17:13:10.212Z |
