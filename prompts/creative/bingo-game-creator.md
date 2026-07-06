---
id: "cmjshq2z1000olc04hsl6msok"
slug: "bingo-game-creator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/bingo-game-creator"
category: "creative"
category_name: "Creative"
category_zh: "创意"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "70382423d1693e5875af7b5d425a51c03b65ced3dd7afb757787e6655ae0908c"
upstream_updated_at: "2025-12-30T11:15:05.803Z"
---
# 宾果游戏创造者

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[bingo-game-creator](https://prompts.chat/prompts/bingo-game-creator)  
> 分类：创意（Creative / `creative`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

创建互动宾果游戏。自定义您的卡牌，设置规则，与朋友一起玩或单独玩。

## 使用场景

- 用于创意相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Games、Entertainment 等主题快速生成可复用结果。

## 适用人群

- 创意工作者
- 内容创作者
- 编剧或作者

## 中文 Prompt 正文

```md
创建宾果游戏。
数字范围从 1 到 90。


选项：
- 出现的数字必须放置在分为 9 行 x 10 列的棋盘上。每列从 1 到 10，第二列从 11 到 20，依此类推。 
对于每一行，数字的颜色与其余行相同且不同。
- 它必须包含一个速度选择器，以便能够提高或降低唱数字的速度
- 另一个音量选择器
- 重新唱当前号码的按钮
- 另一个按钮可以再次唱上一个号码
- 重新开始游戏的按钮
- 开始新游戏的按钮
- 纸板可以通过 csv 文件中的编号输入唯一的代码。
- 每张卡片由三行组成，每行有 5 个数字。第一列中的数字为 1 到 9，第二列中的数字为 10 到 19，第三列中的数字为 20 到 29，依此类推，直到最后一列，即从 80 到 90。 
- 如果纸箱已经插入，则必须将其存放起来，以免再次插入。
。您还可以手动输入每张号码卡及其代码。
- 它必须有一个按钮来暂停游戏或继续游戏。
- 必须有线路按钮。暂停并检查该行是否正确（5 个数字来自卡片上的同一行，并且每场游戏只能有一条行）。如果您输入拨打线路的玩家的卡代码，您必须注明它是否正确。
- 它还必须包含另一个宾果游戏按钮（15 个数字来自卡片）。您必须检查输入的纸箱代码是否正确。
- 每局游戏的数字必须是随机的，并且在新游戏开始时不能重复。
```

---

## English Original

### Title

Bingo Game Creator

### Description

Create an interactive Bingo game. Customize your card, set rules, and play with friends or solo.

### Prompt

```md
Crea un juego de bingo.
Los números van del 1 al 90.


Options:
- Los números que van saliendo se deben coloca en un tablero dividido en 9 filas por 10 columnas. Cada columna va del 1 al 10, la segunda del 11 al 20 y así sucesivamente. 
Para cada fila, el color de los números es el mismo y distinto al resto de filas.
- Debe contener un selector de velocidad para poder aumentar o disminuir la velocidad de ir cantando los números
- Otro selector para el volumen del audio
- Un botón para volver a cantar el número actual
- Otro botón para volver a cantar el número anterior
- Un botón para reiniciar la partida
- Un botón para empezar una nueva partida
- Se pueden introducir los cartones con un código único con sus números a partir de un archivo csv.
- Cada cartón se compone de tres filas y en cada fila tiene 5 números. En la primera columna irán los números del 1 al 9, en la segunda del 10 al 19, en la tercera, del 20 al 29 y así hasta la última que irán del 80 al 90. 
- Si se han introducido ya los cartones, se deben quedar almacenados para no tener que estar introducirlos otra vez.
. También se puede introducir a mano cada cartón de números con su código.
- Debe tener un botón para pausar el juego o continuarlo.
- Debe tener un botón de línea. Para que haga una pausa y se compruebe si es correcta la línea (han salido los 5 números de una misma línea de un cartón y solo puede haber una línea por juego). Si se introduce el código del cartón del jugador que ha cantado línea debe indicar si es correcto o no.
- También debe contener otro botón para bingo (han salido los 15 números de un cartón). Debe comprobar si se introduce el código del cartón si es correcto.
- Los números de cada partida deben ser aleatorios y no pueden repetirse cuando se inicie un nuevo juego.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [bingo-game-creator](https://prompts.chat/prompts/bingo-game-creator) |
| Category | Creative (`creative`) |
| Type | `TEXT` |
| Tags | Games, Entertainment |
| Contributors | manuelmiras |
| Updated At | 2025-12-30T11:15:05.803Z |
