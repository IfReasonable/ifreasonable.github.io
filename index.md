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
- <span class="news-date">Jun. 2026</span> — [DK-Root](https://ieeexplore.ieee.org/abstract/document/11573069) was accepted by **IEEE Transactions on Networking**.
- <span class="news-date">Jun. 2026</span> — [QoEReasoner](https://arxiv.org/abs/2606.01925) is now available on arXiv.
- <span class="news-date">May 2026</span> — [STM3](https://dl.acm.org/doi/abs/10.1145/3770855.3817653) was accepted by **SIGKDD 2026**.
- <span class="news-date">May 2026</span> — [AdaMeZO](https://icml.cc/virtual/2026/poster/63417) was accepted by **ICML 2026**.
- <span class="news-date">Apr. 2026</span> — [Three Birds, One Stone](https://arxiv.org/abs/2604.12401) is now available on arXiv.
- <span class="news-date">Mar. 2026</span> — [FeedSign](https://ieeexplore.ieee.org/document/11455968) was accepted by **IEEE Transactions on Mobile Computing**.
- <span class="news-date">Jun. 2025</span> — [An Overview of Domain-Specific Foundation Models](https://link.springer.com/article/10.1007/s11432-025-4498-2) was accepted by **Science China Information Sciences**.
{: .news-list }

</section>

<section id="publications" markdown="1">

## Publications
{: .section-heading }

<!-- Publications are maintained as individual Markdown files in _publications/. -->
{% assign publications = site.publications | sort: "date" | reverse %}
{% for publication in publications %}
<article class="publication{% if publication.image %} with-image{% endif %}">
{% if publication.image %}
<img class="publication-image" src="{{ publication.image | relative_url }}" alt="Overview of {{ publication.title | escape }}">
{% endif %}
<div class="publication-content">
<p class="venue">{{ publication.venue }}{% if publication.year %} · {{ publication.year }}{% endif %}</p>
<h3>{{ publication.title }}</h3>
<p class="authors">{{ publication.authors }}</p>
{% if publication.summary %}
<p class="publication-summary">{{ publication.summary }}</p>
{% endif %}
{% if publication.paperurl or publication.arxivurl or publication.pdfurl or publication.codeurl or publication.projecturl or publication.bibtexurl %}
<p class="publication-links">
  {% if publication.paperurl %}<a href="{{ publication.paperurl }}">Paper</a>{% endif %}
  {% if publication.arxivurl %}<a href="{{ publication.arxivurl }}">arXiv</a>{% endif %}
  {% if publication.pdfurl %}<a href="{{ publication.pdfurl }}">PDF</a>{% endif %}
  {% if publication.codeurl %}<a href="{{ publication.codeurl }}">Code</a>{% endif %}
  {% if publication.projecturl %}<a href="{{ publication.projecturl }}">Project</a>{% endif %}
  {% if publication.bibtexurl %}<a href="{{ publication.bibtexurl }}">BibTeX</a>{% endif %}
</p>
{% endif %}
</div>
</article>
{% endfor %}
</section>

<section id="patents" markdown="1">

## Patents
{: .section-heading }

{% assign patents = site.patents | sort: "date" | reverse %}
<ol class="patent-list">
{% for patent in patents %}
  <li>
    <strong>{{ patent.title }}</strong>
    <span class="patent-meta">{{ patent.authors }} · {{ patent.patent_number }}{% if patent.status %} · {{ patent.status }}{% endif %}</span>
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
  <p>Reviewer for ICASSP, WCNC, ICC, GLOBECOM, ICCC, PIMRC, and IEEE Transactions on Mobile Computing.</p>
</div>

</section>
