# 休假申请的表单验证规则

## 中文说明

此提示定义表单中不同类型的休假请求的验证规则。它确保遵守基于休假类型的特定休假条件，并防止重叠日期的重复请求。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 HR、Workflow、Automation 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
{
  “规则”：[
    {
      "leaveType": "婚假",
      "validity": "如员工结婚，有效期为3个工作日。",
      “最大天数”：3
    },
    {
      "leaveType": "产假（配偶）",
      "validity": "如果员工的配偶生育，5个工作日",
      “最大天数”：5
    },
    {
      "leaveType": "一级濒死状态离开",
      "validity": "如果雇员的母亲、父亲、兄弟姐妹、配偶和子女死亡，则为 3 个工作日",
      “最大天数”：3
    },
    {
      "leaveType": "自然灾害",
      "validity": "这是在发生自然灾害时最多使用 10 个工作日的假期。",
      “最大天数”：10
    },
    {
      "leaveType": "带薪产假",
      "validity": "怀孕、生育的，依法采取行动。女性人员必须在产前8周和产后8周内不得雇用。如果是多胎妊娠，则在产前8周内增加两周。",
      “出生前周”：8，
      “出生后周”：8，
      “多胎妊娠额外周数”：2，
      “工作直到周前”：3
    },
    {
      "leaveType": "无薪产假",
      "validity": "这是在带薪产假结束的情况下，根据雇员的要求给予最多 6 个月的假期。不能部分使用。",
      “最大月份”：6
    },
    {
      "leaveType": "怀孕员工健康检查请假",
      "validity": "这是一种可以在月度检查期间使用的休假类型，如果怀孕的员工记录了她的怀孕情况并且没有日期限制。",
      “文档必需”：true
    },
    {
      "leaveType": "社交借口假",
      "validity": "员工一年内可以使用的事假总计为3个工作日。超过3天的事假从年假中扣除。",
      “每年最多天数”：3
    },
    {
      "leaveType": "自由假",
      "validity": "这是一种没有任何限制的休假类型，如果雇主根据雇员的书面请求认为合适的话。",
      “文档必需”：true
    }
  ],
  “一般规则”：{
    "duplicateCheck": "如果之前有过相同日期的请假请求，则用户不应再次请求休假。",
    “适用表格ID”：1
  }
}
```

---

## English Original

### Title

Form Validation Rules for Leave Requests

### Description

This prompt defines validation rules for different types of leave requests in a form. It ensures compliance with specific leave conditions based on the type of leave and prevents duplicate requests for overlapping dates.

### Prompt

```md
{
  "rules": [
    {
      "leaveType": "Evlilik İzni",
      "validity": "Personelin evlenmesi halinde 3 iş günü şeklinde kullandırılır.",
      "maxDays": 3
    },
    {
      "leaveType": "Doğum İzni (Eş)",
      "validity": "Personelin eşinin doğum yapması halinde 5 iş günü",
      "maxDays": 5
    },
    {
      "leaveType": "I.Derece Yakın Ölümü İçin İzin",
      "validity": "Personelin ana, baba, kardeş, eş ve çocuklarının ölümü halinde 3 iş günü",
      "maxDays": 3
    },
    {
      "leaveType": "Doğal Afet",
      "validity": "Doğal afet olması halinde 10 iş gününe kadar kullanılan izindir.",
      "maxDays": 10
    },
    {
      "leaveType": "Ücretli Doğum İzni",
      "validity": "Gebelik ve analık halinde Kanunu’na göre islem yapılır. Kadın personelin dogumdan önce 8 hafta ve dogumdan sonra 8 hafta olmak üzere çalıstırılmamaları esastır. Çogul gebelik halinde dogumdan önce çalıstırılmayacak 8 haftalık süreye iki hafta süre eklenir.",
      "preBirthWeeks": 8,
      "postBirthWeeks": 8,
      "extraWeeksForMultiplePregnancy": 2,
      "workUntilPreWeeks": 3
    },
    {
      "leaveType": "Ücretsiz Doğum İzni",
      "validity": "Ücretli doğum izninin bitmesi durumunda çalışanın talebi üzerine 6 aya kadar verilen izindir. Parçalar halinde kullanılamaz.",
      "maxMonths": 6
    },
    {
      "leaveType": "Hamile Çalışan Sağlık Kontrol İzni",
      "validity": "Hamile çalışanın hamileliğini belgelemesi durumunda aylık kontrollerinde kullanılabilen ve gün kısıtı bulunmayan izin türüdür.",
      "documentationRequired": true
    },
    {
      "leaveType": "Sosyal Mazeret İzni",
      "validity": "Çalışanın bir yılda kullanabilecegi mazeret izni toplam 3 iş günüdür. 3 günü aşan izinler yıllık izinden düşürülür.",
      "maxDaysPerYear": 3
    },
    {
      "leaveType": "Ücretsiz İzin",
      "validity": "Çalışanın yazılı talebi üzerine işverenin uygun görmesi durumunda kısıtı bulunmayan izin türüdür.",
      "documentationRequired": true
    }
  ],
  "generalRules": {
    "duplicateCheck": "Daha önce aynı tarihler içinde bir izin talebi varsa kullanıcının tekrar izin talep etmemeli.",
    "applicableFormId": 1
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
