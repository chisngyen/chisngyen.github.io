---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

I'm **Chi-Nguyen Tran** (Trần Chí Nguyên), a final-year B.Sc. student in Artificial Intelligence at **VNUHCM, University of Science** (HCMUS), and AI R&D Lead at **Realtime Robotics**.

I work on making aerial robots perceive and localize reliably on their own hardware: **cross-view geo-localization** (matching drone views to satellite maps in GPS-denied settings), **robust perception** under adverse weather, and **edge / on-device AI**. I also work on continual learning and on the behaviour of LLM agents with collaborators at Warwick and Teesside.

<h2 class="sec-title">News</h2>
<ul class="news">
  <li><time>Sep 2026</time><span><b>5 papers accepted at NeurIPS 2026</b> (Sydney), 2 as co-first author. <b>SkyPart</b> received reviewer scores <b>5 / 5 / 5</b>.</span></li>
  <li><time>Aug 2026</time><span>Awarded the Vallet Scholarship 2026.</span></li>
  <li><time>Jul 2026</time><span><b>Winner</b>, FSE-AIWare 2026 Agentic Python Dependency Resolution Competition (MEMRES).</span></li>
  <li><time>May 2026</time><span>SkyPart, MIST, compositional CFSL and cultural alignment preprints released on arXiv.</span></li>
  <li><time>Feb 2026</time><span>Joined Realtime Robotics as AI R&amp;D Lead, working on visual positioning for UAVs.</span></li>
  <li><time>Dec 2025</time><span><b>1st Place</b> in both tracks, NeurIPS 2025 Mouse vs. AI Robust Foraging Competition.</span></li>
</ul>

<h2 class="sec-title">Selected Publications</h2>
<p style="font-size: 0.85em">* equal contribution</p>
{% assign selected = site.publications | where: "selected", true | sort: "date" | reverse %}
{% for post in selected %}
  {% include pub-card.html %}
{% endfor %}
<p class="sec-more"><a href="{{ base_path }}/publications/">All publications &rarr;</a></p>

<h2 class="sec-title">Honors</h2>
<ul class="honors">
  <li><b>1st Place</b>, NeurIPS 2025 Mouse vs. AI Robust Foraging Competition (both tracks)</li>
  <li><b>Winner</b>, FSE-AIWare 2026 Agentic Python Dependency Resolution Competition</li>
  <li><b>1st Place (x2)</b>, NakbaNLP Shared Tasks @ LREC-COLING 2026</li>
  <li><b>1st Place (x2)</b>, AbjadNLP Shared Tasks @ EACL 2026</li>
  <li><b>Top 3.3%</b> (138 / 4,182 teams), NVIDIA Nemotron Model Reasoning Challenge, Kaggle 2026</li>
  <li><b>Third Prize</b>, Vietnam Student AI Olympiad, National Round 2025</li>
  <li><b>Vallet Scholarship</b> 2026</li>
</ul>

<h2 class="sec-title">Service</h2>
<ul class="honors">
  <li>Reviewer: ACL, CVPR Workshops</li>
</ul>
