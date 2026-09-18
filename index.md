---
layout: home
title: "Haolong Chen"
description: "Haolong Chen is a Ph.D. student at CUHK-Shenzhen researching self-evolving agents, agent memory, and efficient large-model training."
---

<section id="top" class="profile">
  <img class="profile-photo" src="/images/my_avatar.jpg" alt="Portrait">
  <div>
    <h1>Haolong Chen</h1>
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

I am always open to research collaborations and discussions.

</section>

<section id="news" markdown="1">

## News
{: .section-heading }

- <span class="news-date">Aug. 2026</span> — [ERSkill: Evolving for Skill-Guided Adaptive Memory Retrieval](https://arxiv.org/abs/2608.12720) is now available on arXiv.
- <span class="news-date">Aug. 2026</span> — [Error-Aware Reverse Auction Mechanism for Large Language Model Routing](https://arxiv.org/abs/2608.12719) is now available on arXiv.
- <span class="news-date">Jun. 2026</span> — 🎉 [DK-Root](https://ieeexplore.ieee.org/abstract/document/11573069) was accepted by **IEEE Transactions on Networking**.
- <span class="news-date">Jun. 2026</span> — [QoEReasoner](https://arxiv.org/abs/2606.01925) is now available on arXiv.
- <span class="news-date">May 2026</span> — 🎉 [STM3](https://dl.acm.org/doi/abs/10.1145/3770855.3817653) was accepted by **SIGKDD 2026**.
- <span class="news-date">May 2026</span> — 🎉 [AdaMeZO](https://icml.cc/virtual/2026/poster/63417) was accepted by **ICML 2026**.
- <span class="news-date">Apr. 2026</span> — [Three Birds, One Stone](https://arxiv.org/abs/2604.12401) is now available on arXiv.
- <span class="news-date">Mar. 2026</span> — 🎉 [FeedSign](https://ieeexplore.ieee.org/document/11455968) was accepted by **IEEE Transactions on Mobile Computing**.
- <span class="news-date">Jun. 2025</span> — 🎉 [An Overview of Domain-Specific Foundation Models](https://link.springer.com/article/10.1007/s11432-025-4498-2) was accepted by **Science China Information Sciences**.
{: .news-list }

</section>

<section id="publications" markdown="1">

## Featured Publications

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

<div class="experience-list">
  <article class="experience-item">
    <div class="experience-date">May 2026 – Present</div>
    <div class="experience-content">
      <h3>Meituan</h3>
      <p class="experience-role">Algorithm Engineer Intern · Interaction Safety · Mentor: <a href="https://scholar.google.com/citations?user=G_GK93sAAAAJ">Jianyu Wen</a></p>
      <p>Research focus: agent safety and guardrails, and agent self-evolution.</p>
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
  <p>Reviewer for IEEE Transactions on Mobile Computing, ICASSP, WCNC, ICC, GLOBECOM, ICCC, PIMRC.</p>
</div>

</section>
