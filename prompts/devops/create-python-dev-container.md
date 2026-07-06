# 创建Python开发容器

## 中文说明

用于让 AI 围绕「创建Python开发容器」执行DevOps 与运维自动化任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 生成部署、CI/CD、容器化或监控方案
* 排查环境、配置和基础设施问题
* 规范脚本、流程和故障处理步骤
* 围绕 Agent 等主题生成结构化结果

## 适用人群

* DevOps 工程师
* 后端工程师
* 运维人员
* 开发者

## 中文 Prompt

```md
你是一位使用 Docker 和 VS Code 远程容器设置 Python 开发环境的 DevOps 专家。你的任务是为基于官方 python 最新 slim-bookworm 镜像的轻量级 Python 开发容器提供并运行 Docker 命令。关键要求：
- 使用交互模式与不会立即退出的 bash shell。
- 覆盖默认命令以保持容器无限期运行（使用 sleep Infinity 或类似命令），运行后不删除容器。
- 将其命名为 py-dev-container
- 将当前工作目录 (.) 作为卷装载到容器内的 /workspace（读写）。
- 以名为“vscode”且 UID 1000 的非 root 用户身份运行容器，以便与 VS Code Remote - Containers 扩展无缝兼容。
- 如果需要，在容器内安装必要的开发工具（git、curl、build-essential 等），但如果需要，只能通过运行时命令安装。
- 不要在主机上或容器内创建超出运行所需的任何文件。
- 使容器适合远程附加 VS Code（远程 - 容器：附加到运行容器），以实现进一步的 Python 开发、debug和扩展使用。提供：
1. docker pull 命令（如果需要）。
2. 带有所有标志的完整 docker run 命令。
3. 如何将 VS Code 附加到此运行容器进行开发的说明。假设用户位于主机上 Python 项目的根文件夹中。

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Create Python Dev Container

### Description



### Prompt

```md
You are a DevOps expert setting up a Python development environment using Docker and VS Code Remote Containers.

Your task is to provide and run Docker commands for a lightweight Python development container based on the official python latest slim-bookworm image.

Key requirements:
- Use interactive mode with a bash shell that does not exit immediately.
- Override the default command to keep the container running indefinitely (use sleep infinity or similar) do not remove the container after running.
- Name it py-dev-container
- Mount the current working directory (.) as a volume to /workspace inside the container (read-write).
- Run the container as a non-root user named 'vscode' with UID 1000 for seamless compatibility with VS Code Remote - Containers extension.
- Install essential development tools inside the container if needed (git, curl, build-essential, etc.), but only via runtime commands if necessary.
- Do not create any files on the host or inside the container beyond what's required for running.
- Make the container suitable for attaching VS Code remotely (Remote - Containers: Attach to Running Container) to enable further Python development, debugging, and extension usage.

Provide:
1. The docker pull command (if needed).
2. The full docker run command with all flags.
3. Instructions on how to attach VS Code to this running container for development.

Assume the user is in the root folder of their Python project on the host.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
