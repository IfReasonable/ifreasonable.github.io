---
layout: home
title: "Haolong Chen"
description: "Haolong Chen is a Ph.D. student at CUHK-Shenzhen researching self-evolving agents, agent memory, and efficient large-model training."
---

<section id="top" class="profile">
  <img class="profile-photo" src="/images/my_avatar.jpg" alt="Portrait">
  <div>
    <h1>Haolong Chen · 陈 浩泷</h1>
    <p class="profile-role">Ph.D. Student · LLM Agents &amp; Domain-Specific Intelligence</p>
    <p class="profile-links">
      <a href="mailto:haolongchen1@link.cuhk.edu.cn">Email</a>
      <a href="https://scholar.google.com/citations?user=-fqFHUgAAAAJ">Google Scholar</a>
      <a href="https://github.com/IfReasonable">GitHub</a>
      <a href="https://orcid.org/0009-0009-3138-8320">ORCID</a>
    </p>
  </div>
</section>

<section id="about" markdown="1">

## About Me
{: .section-heading }

I am currently pursuing my Ph.D. in Computer and Information Engineering at [The Chinese University of Hong Kong, Shenzhen](https://www.cuhk.edu.cn/en) under the supervision of [Prof. Guangxu Zhu](https://sites.google.com/view/guangxuzhu/home) and [Prof. Tsung-Hui Chang](https://myweb.cuhk.edu.cn/changtsunghui). I received my B.Eng. in Software Engineering from Jinan University in 2023.
{: .lede }

My research lies at the intersection of LLM agents and domain-specific intelligence. I am particularly interested in:

- **Self-evolving agents:** enabling agents to improve their knowledge and behavior through interaction and feedback.
- **Agent memory systems:** building adaptive, reliable mechanisms for storing and retrieving experience.
- **AI for communication networks:** applying foundation models and agentic reasoning to network diagnosis and optimization.
{: .interests }

I am interested in the end-to-end business logic of AI and how it creates value. I deeply enjoy working with my outstanding collaborators, and I look forward to joining forces with more people to build something bigger together.

</section>

<section id="news" markdown="1">

## News
{: .section-heading }

- <span class="news-date">Oct. 2026</span> [any-jev](https://github.com/IfReasonable/any-jev), a lightweight tool for turning LLMs/VLMs into JEV-like decision models, is now available on GitHub.
- <span class="news-date">Aug. 2026</span> [ERSkill: Evolving for Skill-Guided Adaptive Memory Retrieval](https://arxiv.org/abs/2608.12720) is now available on arXiv.
- <span class="news-date">Aug. 2026</span> [Error-Aware Reverse Auction Mechanism for Large Language Model Routing](https://arxiv.org/abs/2608.12719) is now available on arXiv.
- <span class="news-date">Jun. 2026</span> 🎉 [DK-Root: A Joint Data-and-Knowledge-Driven Framework for Root Cause Analysis of QoE Degradations in Mobile Networks](https://ieeexplore.ieee.org/abstract/document/11573069) was accepted by **IEEE Transactions on Networking**.
- <span class="news-date">Jun. 2026</span> [QoEReasoner: An Agentic Reasoning Framework for Automated and Explainable QoE Diagnosis in RANs](https://arxiv.org/abs/2606.01925) is now available on arXiv.
- <span class="news-date">May 2026</span> 🎉 [STM3: Mixture of Multiscale Mamba for Long-Term Spatio-Temporal Time-Series Prediction](https://dl.acm.org/doi/abs/10.1145/3770855.3817653) was accepted by **SIGKDD 2026**.
- <span class="news-date">May 2026</span> 🎉 [AdaMeZO: Adam-style Zeroth-Order Optimizer for LLM Fine-tuning Without Maintaining the Moments](https://icml.cc/virtual/2026/poster/63417) was accepted by **ICML 2026**.
- <span class="news-date">Apr. 2026</span> [Three Birds, One Stone: Solving the Communication-Memory-Privacy Trilemma in LLM Fine-tuning Over Wireless Networks with Zeroth-Order Optimization](https://arxiv.org/abs/2604.12401) is now available on arXiv.
- <span class="news-date">Mar. 2026</span> 🎉 [FeedSign: Robust Full-parameter Federated Fine-tuning of Large Models with Extremely Low Communication Overhead of One Bit](https://ieeexplore.ieee.org/document/11455968) was accepted by **IEEE Transactions on Mobile Computing**.
- <span class="news-date">Jun. 2025</span> 🎉 [An Overview of Domain-Specific Foundation Models: Key Technologies, Applications and Challenges](https://link.springer.com/article/10.1007/s11432-025-4498-2) was accepted by **Science China Information Sciences**.
{: .news-list }

</section>

<section id="publications" markdown="1">

## Featured Publications
{: .section-heading }

<p class="publication-note">* Equal contribution.</p>

<div class="featured-publications">
{% for publication_id in site.data.publication_groups.featured %}
  {% assign matches = site.publications | where: "publication_id", publication_id %}
  {% assign publication = matches | first %}
  {% if publication %}
    {% include featured-publication.html publication=publication index=forloop.index %}
  {% endif %}
{% endfor %}
</div>

<div class="all-publications-heading">
  <h2>Full Publications</h2>
  <p>Grouped by research theme</p>
</div>

<div class="publication-groups">
{% assign publication_number = 0 %}
{% for theme in site.data.publication_groups.themes %}
  <details class="publication-group"{% if forloop.first %} open{% endif %}>
    <summary>
      <span>{{ theme.name }}</span>
      <span class="publication-group-toggle" aria-hidden="true"></span>
    </summary>
    {% if theme.description %}<p class="publication-group-description">{{ theme.description }}</p>{% endif %}
    <div class="compact-publications">
    {% for publication_id in theme.publications %}
      {% assign matches = site.publications | where: "publication_id", publication_id %}
      {% assign publication = matches | first %}
      {% if publication %}
        {% assign publication_number = publication_number | plus: 1 %}
        {% include compact-publication.html publication=publication index=publication_number %}
      {% endif %}
    {% endfor %}
    </div>
  </details>
{% endfor %}
</div>
</section>

<section id="experience" markdown="1">

## Experience
{: .section-heading }

<div class="experience-list">
  <article class="experience-item">
    <div class="experience-date">May 2026 – Present</div>
    <div class="experience-content">
      <h3>Meituan</h3>
      <p class="experience-role">Intern · Foundational R&D Platform · Mentor: <a href="https://scholar.google.com/citations?user=G_GK93sAAAAJ">Jianyu Wen</a></p>
      <p>Research focus: agent guardrails / judges, and agent self-evolution.</p>
    </div>
  </article>

  <article class="experience-item">
    <div class="experience-date">May 2023 – Present</div>
    <div class="experience-content">
      <h3>Shenzhen Research Institute of Big Data</h3>
      <p class="experience-role">Research Assistant</p>
    </div>
  </article>
</div>

</section>

<section id="thoughts" markdown="1">

## Thoughts
{: .section-heading }

{% assign thoughts = site.thoughts | where_exp: "thought", "thought.published != false" | where_exp: "thought", "thought.content != ''" | sort: "date" | reverse %}
<div class="thought-list">
{% assign shown_thoughts = '' %}
{% assign thought_number = 0 %}
{% for thought in thoughts %}
  {% assign thought_key = thought.translation_key | default: thought.url %}
  {% capture thought_marker %}|{{ thought_key }}|{% endcapture %}
  {% unless shown_thoughts contains thought_marker %}
    {% assign shown_thoughts = shown_thoughts | append: thought_marker %}
    {% assign thought_number = thought_number | plus: 1 %}
    {% if thought.translation_key %}
      {% assign versions = thoughts | where: "translation_key", thought.translation_key %}
    {% else %}
      {% assign versions = thoughts | where: "url", thought.url %}
    {% endif %}
    {% assign english_version = versions | where: "lang", "en" | first %}
    {% assign displayed_thought = english_version | default: thought %}
  <article class="thought-card{% if displayed_thought.image and displayed_thought.image != empty %} with-image{% endif %}" lang="{{ displayed_thought.lang | default: site.lang | escape }}">
    {% if displayed_thought.image and displayed_thought.image != empty %}
    <a class="thought-cover-link" href="{{ displayed_thought.url | relative_url }}" aria-label="Read {{ displayed_thought.title | escape }}">
      <img class="thought-cover" src="{{ displayed_thought.image | relative_url }}" alt="{{ displayed_thought.image_alt | default: displayed_thought.title | escape }}" loading="lazy" width="240" height="150">
    </a>
    {% endif %}
    <div class="thought-card-content">
      <div class="thought-card-meta">
        <span class="thought-card-number" aria-label="Article {{ thought_number }}">{% if thought_number < 10 %}0{% endif %}{{ thought_number }}</span>
        {% if displayed_thought.date %}<time datetime="{{ displayed_thought.date | date_to_xmlschema }}">{{ displayed_thought.date | date: '%Y.%m.%d' }}</time>{% endif %}
      </div>
      <h3>{{ displayed_thought.title | escape }}</h3>
      {% if displayed_thought.summary and displayed_thought.summary != empty %}<p class="thought-card-summary">{{ displayed_thought.summary | escape }}</p>{% endif %}
      {% include thought-languages.html versions=versions %}
    </div>
  </article>
  {% endunless %}
{% else %}
  <p class="thought-empty">Essays and reflections coming soon.</p>
{% endfor %}
</div>

</section>

<section id="patents" markdown="1">

## Patents
{: .section-heading }

{% assign patents = site.patents | sort: "date" | reverse %}
<ol class="patent-list">
{% for patent in patents %}
  <li>
    <span class="patent-number" aria-hidden="true">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
    <div class="patent-content">
      <span class="patent-title">{{ patent.title }}</span>
      <span class="patent-meta">{{ patent.authors }} · {{ patent.patent_number }}{% if patent.status %} · {{ patent.status }}{% endif %}</span>
    </div>
  </li>
{% endfor %}
</ol>

</section>

<section id="education" markdown="1">

## Education & Service
{: .section-heading }

<div class="education-item">
  <p><strong>Ph.D. in Computer and Information Engineering</strong><br>The Chinese University of Hong Kong, Shenzhen</p>
  <p class="education-date">Present</p>
</div>

<div class="education-item">
  <p><strong>B.Eng. in Software Engineering</strong><br>Jinan University</p>
  <p class="education-date">2023</p>
</div>

<div class="service-note">
  <h3>Academic Service</h3>
  <p>Reviewer for ICLR, IEEE Transactions on Mobile Computing, ICASSP, WCNC, ICC, GLOBECOM, ICCC, PIMRC.</p>
</div>

</section>

<section id="beyond-research" markdown="1">

## Beyond Research
{: .section-heading }

I also like to spend time arranging music and DJing.

<h3 class="music-heading">Music Recommendations</h3>
{% assign recommended_music = site.recommended_music | where_exp: "song", "song.published != false" | sort: "order" %}
<div class="music-list">
{% for song in recommended_music %}
  {% include recommended-music.html song=song %}
{% else %}
  <p class="music-empty">Music picks coming soon.</p>
{% endfor %}
</div>

</section>
