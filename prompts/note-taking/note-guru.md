# 教师笔记

## 中文说明

分析大量杂乱的文件，其中包含随机注释，并使用相同的注释创建新文件，仅将其组织成美观且易于查找和访问的主题排序文档

## 使用场景

* 整理资料、会议或课程笔记
* 提炼重点、结构和行动项
* 把长内容转化为可复习的知识卡片
* 围绕 Note Taking、Organization、Efficiency 等主题生成结构化结果

## 适用人群

* 学生
* 研究人员
* 知识管理用户

## 中文 Prompt

````md
分析名为 '${main_folder}` located at `${path_to_folder}`/ 的文件夹中的所有文件并执行以下任务：

## 任务 1：提取敏感数据
彻底审查每个文件并识别所有敏感信息，包括 API 密钥、密码、令牌、凭据、私钥、秘密、连接字符串和任何其他机密数据。创建一个名为 `secrets.md` 的新文件，其中包含所有发现的敏感信息以及对其源文件的明确引用。

## 任务 2：按主题组织
完成秘密提取后，再次分析每个文件的内容。许多文件包含在不同时间编写的多个不相关的注释。你的工作是：

1. 根据内容频率和重要性识别所有文件中最突出的主题“${topic_max}”
2. 创建“${topic_max}”新 Markdown 文件，每个主题一个，命名为 `${topic:#}.md`，你可以在其中选择描述性主题名称
3. 对于原始文件中的每个音符片段：
   - 将其复制到相应的主题文件中
   - 在原始文件中该注释旁边添加参考号（例如，`${topic:2}` 或 `→ Security:2`）
   - 此参考有助于稍后验证迁移

## 任务 3：存档原始文件
将原始文件中的所有注释复制到各自的主题文件并添加参考号后，将该原始文件移动到名为 `${archive_folder:old}` 的新文件夹中。

## 预期的最终结构
```
${main_folder}/
├── secrets.md (1 file)
├── ${topic:1}.md (topic files total)
├── ${topic:2}.md
├── ..... (more topic files)
├── ${topic:#}.md
└── ${archive_folder:old}/
      └── (all original files)
```

## 重要准则
- 分析彻底——完整阅读每个文件
- 复制到主题文件时保留原始内容
- 选择准确反映你找到的内容集群的主题名称
- 确保每个笔记片段都得到分类
- 保持参考编号清晰一致
- 仅在确认所有内容已正确迁移后才将文件移动到存档文件夹

从 `${path_to_folder}` 开始，当你在组织过程中需要澄清任何不明确的内容时，请告诉我。
````

---

## English Original

### Title

Note Guru

### Description

analyze loads of messy files with random notes in them and create new files with the same notes only organized into beautiful easy to find and access topic sorted documents 

### Prompt

````md
Analyze all files in the folder named '${main_folder}` located at `${path_to_folder}`/ and perform the following tasks:

## Task 1: Extract Sensitive Data
Review every file thoroughly and identify all sensitive information including API keys, passwords, tokens, credentials, private keys, secrets, connection strings, and any other confidential data. Create a new file called `secrets.md` containing all discovered sensitive information with clear references to their source files.

## Task 2: Organize by Topic
After completing the secrets extraction, analyze the content of each file again. Many files contain multiple unrelated notes written at different times. Your job is to:

1. Identify the '${topic_max}' most prominent topics across all files based on content frequency and importance
2. Create '${topic_max}' new markdown files, one for each topic, named `${topic:#}.md` where you choose descriptive topic names
3. For each note segment in the original files:
   - Copy it to the appropriate topic file
   - Add a reference number in the original file next to that note (e.g., `${topic:2}` or `→ Security:2`)
   - This reference helps verify the migration later

## Task 3: Archive Original Files
Once all notes from an original file have been copied to their respective topic files and reference numbers added, move that original file into a new folder called `${archive_folder:old}`.

## Expected Final Structure
```
${main_folder}/
├── secrets.md (1 file)
├── ${topic:1}.md (topic files total)
├── ${topic:2}.md
├── ..... (more topic files)
├── ${topic:#}.md
└── ${archive_folder:old}/
      └── (all original files)
```

## Important Guidelines
- Be thorough in your analysis—read every file completely
- Maintain the original content when copying to topic files
- Choose topic names that accurately reflect the content clusters you find
- Ensure every note segment gets categorized
- Keep reference numbers clear and consistent
- Only move files to the archive folder after confirming all content has been properly migrated

Begin with `${path_to_folder}` and let me know when you need clarification on any ambiguous content during the organization process.

````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
