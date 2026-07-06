# 网络数据包分析器 CLI

## 中文说明

创建命令行网络数据包分析器

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 围绕 C、libpcap 等主题生成结构化结果

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
使用 libpcap 用 C 语言创建命令行网络数据包分析器。使用过滤选项从网络接口捕获数据包。添加常用协议（TCP、UDP、HTTP、DNS等）的协议分析。包括带宽使用情况和连接计数的流量统计数据。使用详细的标头信息实现数据包解码。添加 PCAP 和 CSV 格式的导出功能。包括针对可疑流量模式的警报系统。使用状态信息实施连接跟踪。 Add geolocation lookup for IP addresses.包括具有合理默认值的所有选项的命令行参数。实施颜色编码输出以提高可读性。
```

---

## English Original

### Title

Network Packet Analyzer CLI

### Description

Create a command-line network packet analyzer

### Prompt

```md
Create a command-line network packet analyzer in C using libpcap. Implement packet capture from network interfaces with filtering options. Add protocol analysis for common protocols (TCP, UDP, HTTP, DNS, etc.). Include traffic statistics with bandwidth usage and connection counts. Implement packet decoding with detailed header information. Add export functionality in PCAP and CSV formats. Include alert system for suspicious traffic patterns. Implement connection tracking with state information. Add geolocation lookup for IP addresses. Include command-line arguments for all options with sensible defaults. Implement color-coded output for better readability.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
