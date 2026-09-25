---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<p><a class="pub__btn cv-btn" href="{{ base_path }}/files/cv.pdf">Download CV (PDF)</a></p>

Research interests
======
Robotics and embodied perception, cross-view geo-localization (drone-to-satellite matching) and visual navigation in GPS-denied environments, robust computer vision under adverse weather and corruption, and efficient / on-device (Edge) AI: model compression and distillation for real-time inference on aerial platforms.

Education
======
* **B.Sc. in Artificial Intelligence**, VNUHCM, University of Science (HCMUS), Sep 2023 - Present  
  K23 AI, Faculty of Information Technology. GPA: **9.19/10** (**3.86/4.0**), 130 accumulated credits (official transcript, Sep 2026).

Research & professional experience
======
* **AI R&D Lead**, Realtime Robotics (RTR), Ho Chi Minh City (Feb 2026 - Present)  
  Developing visual positioning systems for UAVs: cross-view image matching, model compression for edge deployment, and robustness under domain shift.

* **Research team member**, Team HCMUS_TheFangs, VNUHCM, University of Science (2025 - Present)  
  Mentored by Prof. Long Tran-Thanh (Warwick) and Prof. The Anh Han (Teesside). Research on LLM agents in game-theoretic settings; international shared-task participation.

* **Freelance software engineer**, Remote (Canada-based client) (2025 - Present)  
  Full-stack development with React/Next.js and cloud infrastructure; continuous delivery.

Selected honors & awards
======
* **Winner**, FSE-AIWare 2026 Agentic Python Dependency Resolution Competition, team MEMRES
* **1st Place**, NeurIPS 2025: Mouse vs AI Robust Foraging Competition (both tracks)
* **1st Place (x2)**, NakbaNLP Shared Tasks @ LREC-COLING 2026
* **1st Place (x2)**, AbjadNLP Shared Tasks @ EACL 2026
* **Top 3.3%** (138/4,182 teams), NVIDIA Nemotron Model Reasoning Challenge (Kaggle), 2026
* **Third Prize**, Vietnam Student AI Olympiad (National Round), 2025
* **2nd Prize**, Vietnam Student AI Olympiad (Regional Round), 2025
* **2nd Place**, MMLoSo 2025 Shared Task (IJCNLP-AACL Workshop)
* **2nd Place**, ALTA 2025 Shared Task (ADE Normalization)
* **2nd Place**, TRACS @ WASP 2025 (IJCNLP-AACL)
* **2nd Place** (Top 2/172), Dig4Bio Raman Transfer Learning Challenge (Kaggle), 2025

Publications
======
<p style="font-size: 0.88em">* equal contribution</p>
{% assign pubs = site.publications | sort: "date" | reverse %}
{% for category in site.publication_category %}
{% assign group = pubs | where: "category", category[0] %}
{% if group.size > 0 %}
<h3>{{ category[1].title }}</h3>
{% for post in group %}{% include pub-card.html %}{% endfor %}
{% endif %}
{% endfor %}
