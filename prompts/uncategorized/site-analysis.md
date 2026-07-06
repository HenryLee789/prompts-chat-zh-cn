# 现场分析

## 中文说明

用于让 AI 围绕「现场分析」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

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
对 https://turvivo.com 进行 LLM（ChatGPT、Gemini、Claude）和 SEO 可见性分析。目的：
- 在“旅游软件”、“旅行社软件”、“旅游预订系统”等关键词上排名靠前
- 被ChatGPT、Gemini等LLM列入推荐名单

---

## 分析流程

### 1. 数据收集
- 使用 WebFetch 获取主页 + 功能 + 价格 + 关于我们页面
- 并行进行以下调用：
  - “turvivo.com”
  - 《旅游软件》
  - “旅游预订系统”
  - “旅游预订软件”
  - 站点：r10.net 或站点：reddit.com 或站点：eksisozluk.com “旅游软件”

---

### 2.SEO分析

对以下主题进行详细分析：

#### 技术搜索引擎优化
- 页面速度（估计）
- HTML语义结构（H1、H2、H3）
- 元标题和描述质量
- 内部链接
- Schema（结构化数据）的使用

#### 内容搜索引擎优化
- 关键词覆盖率
- 与竞争对手相比内容深度
- 博客/内容缺陷
- 长尾关键词机会

#### 权限（页外）
- 有提到品牌吗？
- 论坛/社交/博客可见度
- 反向链接质量（估计）

---

### 3.LLM（AI）可见性分析

回答这些问题：

- 为什么ChatGPT / Gemini推荐或不推荐这个网站？
- 内容是否符合“答案引擎”逻辑？
- 是否可以为这些查询推荐该网站：
  - “最好的旅游软件”
  - “旅游预订软件”
  - “旅游公司网站”

#### 评分：
- 实体（品牌）力量
- 是否有任何解释性内容（是什么、如何工作等）
- 有比较内容吗？
- 信任信号（参考、客户、案例研究）

---

### 4.竞争对手分析（非常关键）

至少有 3 个全球竞争对手和 3 个土耳其竞争对手：
- 功能比较
- SEO差异
- 内容差异
- 为什么他们的地位更高？

---

### 5. 缺陷与机遇

清楚地列出：

- 🚫 关键缺陷（必须具备）
- ⚠️ 中级失踪
- 💡 速胜（立即做的事情）

---

### 6.行动计划（最重要的部分）

建议采用以下格式要求：

#### 0-7 天
- ...

#### 7-30 天
- ...

#### 1-3 个月
- ...

---

### 7. 奖金（非常重要）

生成以下内容：

1. SEO兼容的示例博客标题（至少10个）
2.“旅游软件”登陆页面大纲
3. ChatGPT推荐的理想内容模板
4. FAQ架构建议

---

## 输出格式

- 实质性、清晰、技术性
- 提供不必要的一般信息
- 产生直接行动
- 担任高级SEO + AI顾问
```

---

## English Original

### Title

site analiz

### Description



### Prompt

```md
https://turvivo.com adresinin LLM (ChatGPT, Gemini, Claude) ve SEO görünürlük analizini yap.

Amaç:
- Google’da “tur yazılımı”, “tur acenta yazılımı”, “tur rezervasyon sistemi” gibi anahtar kelimelerde üst sıralara çıkmak
- ChatGPT, Gemini gibi LLM’lerin öneri listelerinde yer almak

---

## ANALİZ AKIŞI

### 1. Veri Toplama
- Ana sayfa + özellikler + fiyatlar + hakkımızda sayfalarını WebFetch ile çek
- Paralel olarak şu aramaları yap:
  - "turvivo.com"
  - "tur yazılımı"
  - "tur rezervasyon sistemi"
  - "tour booking software"
  - site:r10.net OR site:reddit.com OR site:eksisozluk.com "tur yazılımı"

---

### 2. SEO ANALİZİ

Aşağıdaki başlıklarda detaylı analiz yap:

#### Teknik SEO
- Sayfa hızı (tahmini)
- HTML semantik yapı (H1, H2, H3)
- Meta title & description kalitesi
- Internal linking
- Schema (structured data) kullanımı

#### İçerik SEO
- Anahtar kelime kapsamı (keyword coverage)
- Rakiplerle kıyasla içerik derinliği
- Blog / içerik eksiklikleri
- Long-tail keyword fırsatları

#### Otorite (Off-page)
- Marka mention var mı?
- Forum / sosyal / blog görünürlüğü
- Backlink kalitesi (tahmini)

---

### 3. LLM (AI) GÖRÜNÜRLÜK ANALİZİ

Şu sorulara cevap ver:

- ChatGPT / Gemini neden bu siteyi önerir ya da önermez?
- İçerik “answer engine” mantığına uygun mu?
- Site şu sorgular için önerilebilir mi:
  - “en iyi tur yazılımı”
  - “tour booking software”
  - “tur şirketi için web sitesi”

#### Değerlendir:
- Entity (marka) gücü
- Açıklayıcı içerik var mı (What is, How it works vs.)
- Comparison content var mı
- Trust sinyalleri (referans, müşteri, case study)

---

### 4. RAKİP ANALİZİ (ÇOK KRİTİK)

En az 3 global ve 3 Türkiye rakibi çıkar:
- Özellik karşılaştırması
- SEO farkları
- İçerik farkları
- Neden daha üstte oldukları

---

### 5. EKSİKLER & FIRSATLAR

Net olarak listele:

- 🚫 Kritik eksikler (must-have)
- ⚠️ Orta seviye eksikler
- 💡 Quick wins (hemen yapılacaklar)

---

### 6. AKSİYON PLANI (EN ÖNEMLİ KISIM)

Aşağıdaki formatta öner:

#### 0-7 gün
- ...

#### 7-30 gün
- ...

#### 1-3 ay
- ...

---

### 7. BONUS (ÇOK ÖNEMLİ)

Aşağıdakileri üret:

1. SEO uyumlu örnek blog başlıkları (en az 10 adet)
2. “tur yazılımı” için landing page outline
3. ChatGPT’nin önermesi için ideal içerik şablonu
4. FAQ schema önerileri

---

## ÇIKTI FORMATI

- Maddeli, net, teknik
- Gereksiz genel bilgi verme
- Direkt aksiyon üret
- Senior SEO + AI consultant gibi davran
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
