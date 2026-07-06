# 删除当前 vnet

## 中文说明

用于让 AI 围绕「删除当前 vnet」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

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
我使用 netgen vnet 进行部署，由内部中央团队管理，该团队由其他团队为我们部署，并由他们从不同的资源组（PC 管理）进行管理。它遇到了障碍，现在我们将回到旧方法来创建我们自己的团队管理的 vnet 和子网，而不是依赖于不同的团队管理的 vnet。想要删除（注释掉）所有模块和资源的所有依赖性。并对网络主文件进行注释，以便将其完全删除。只有当它被完全删除后，我们才能在我们的资源组中创建新的兽医。帮助我使用代码来删除当前的 vnet，就像从目前连接的所有资源和模块中删除 vnet 一样。还要注释掉网络代码，以便我可以删除所有网络组件，包括私有点。还列出了使用 vnet 的所有资源。 so that its easier to track
```

---

## English Original

### Title

remove current vnet

### Description



### Prompt

```md
I have used netgen vnet to deploy that is managed by internal cental team which is geeting deployed by other team for us and managed by them from diffrenct resource group (pc-managed). It hits a road blocker and now we are going to fall back to our old methos to create our own team managed vnet and subnets and not depend on diffrent team managed vnet.

wanted to remove all (comment out) the dependecy from all the modules and resources. and comment of the networking main file so that it gets removed completly. Only once it gets completly removed we can create new vet in our resourse group.


help me with the code to remove current vnet like as in dettact the vnet from all the resources and modules it is acttached as of now. also comment out the networking code so that i can delete all the networking componets incuding the pricate enpoints.

also list down all the resources which are using the vnet. so that its easier to track
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
