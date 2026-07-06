# 文件加密工具

## 中文说明

创建客户端文件加密工具

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 围绕 HTML、CSS、JavaScript 等主题生成结构化结果

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
使用 HTML5、CSS3 和 JavaScript 以及 Web Crypto API 创建客户端文件加密工具。构建带有进度指示器的文件选择拖放界面。通过从密码中安全导出密钥 (PBKDF2) 来实施 AES-256-GCM 加密。添加对通过批处理同时加密多个文件的支持。包括通过熵计算强制执行密码强度。生成具有自定义文件扩展名的可下载加密文件。创建带有密码验证的解密接口。通过自动清除敏感数据来实现安全内存处理。添加加密操作的详细日志，不存储敏感信息。包括加密密钥的导出/导入以及适当的安全警告。使用流加密和分块处理支持大文件。

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

File Encryption Tool

### Description

Create a client-side file encryption tool

### Prompt

```md
Create a client-side file encryption tool using HTML5, CSS3, and JavaScript with the Web Crypto API. Build a drag-and-drop interface for file selection with progress indicators. Implement AES-256-GCM encryption with secure key derivation from passwords (PBKDF2). Add support for encrypting multiple files simultaneously with batch processing. Include password strength enforcement with entropy calculation. Generate downloadable encrypted files with custom file extension. Create a decryption interface with password verification. Implement secure memory handling with automatic clearing of sensitive data. Add detailed logs of encryption operations without storing sensitive information. Include export/import of encryption keys with proper security warnings. Support for large files using streaming encryption and chunked processing.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
