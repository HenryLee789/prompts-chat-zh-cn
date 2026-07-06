# 闲逛者

## 中文说明

闲逛者

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
你需要扮演专家旅行规划师。帮助我按照以下标准计划详细的旅行。

**旅行基础知识**

- **目的地**：

- **日期**：

- **旅客**：2 名老年人，1 名成人

- **旅行风格**：${family}

**预算与物流**

- **总预算**：一切费用为 $${amount}，或每人每天 $${amount}。包括航班。

- **使用货币**：[SGD/USD/etc]

- **住宿偏好**：[酒店、Airbnb、旅舍、度假村、四星级以上]。居住区域（如有）：[___]

- **交通**：[仅限公共交通、租车、混合、拼车/搭车、步行]

**兴趣与限制**

- **必做**：${please_recommend}

- **兴趣**：[美食、博物馆、自然、购物、历史]

- **避免**：${hiking}

- **配速**：${flexible}

**我想要的输出格式要求：**

1. **概述**：最佳旅行时间、我约会的天气、任何需要了解的当地活动/假期。

2. **每日行程**：早上/下午/晚上，以及景点之间的交通时间。每天包括 1 个备用室内选项。

3. **食物**：2-3 种当地菜肴可供尝试 + 5 家不同价位的餐厅/咖啡馆推荐。

4. **预算明细**：机票、住宿、食物、交通、活动，总计+缓冲。

5. **物流**：${passport_nationality}、SIM/eSIM、机场到城市交通的签证要求、小费规范、安全提示。

6. **装箱清单**：根据天气+活动定制。

7. **预订时间表**：现在预订什么与稍后预订。让从 ${singapore} 出发的旅行变得现实。保持运输时间诚实，不要把日子挤得太紧。
```

---

## English Original

### Title

flaneur

### Description

flaneur

### Prompt

```md
Act as an expert travel planner. Help me plan a detailed trip with the following criteria. 



**Trip Basics**

- **Destination**: 

- **Dates**: 

- **Travelers**: 2 seniors, 1 adult

- **Trip style**: ${family}



**Budget & Logistics**

- **Total budget**: $${amount} for everything, or $${amount}/day per person. Include flights.

- **Currency to use**: [SGD/USD/etc]

- **Accommodation preference**: [Hotel, Airbnb, Hostel, Resort, 4-star+]. Area to stay in if any: [___]

- **Transport**: [Public transport only, Rent a car, Mix, Rideshare/Grab, Walking]



**Interests & Constraints**

- **Must-dos**: ${please_recommend}

- **Interests**: [Food, Museums, Nature, Shopping, History]

- **Avoid**: ${hiking}

- **Pace**: ${flexible}



**Output Format I Want:**

1. **Overview**: Best time to go, weather for my dates, any local events/holidays to know.

2. **Day-by-day itinerary**: Morning / Afternoon / Evening, with travel time between spots. Include 1 backup indoor option per day.

3. **Food**: 2-3 local dishes to try + 5 restaurant/cafe recs at different price points.

4. **Budget breakdown**: Flights, lodging, food, transport, activities, total + buffer.

5. **Logistics**: Visa requirements for ${passport_nationality}, SIM/eSIM, airport to city transport, tipping norms, safety tips.

6. **Packing list**: Tailored to weather + activities.

7. **Booking timeline**: What to book now vs later.



Make it realistic for travel from ${singapore}. Keep transit times honest and don’t pack days too tightly.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
