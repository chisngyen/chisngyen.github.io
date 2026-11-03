---
permalink: /
title: ""
author_profile: false
classes: home-barron
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

<div class="hb">
<div class="hb__text" markdown="1">
<h1 class="hb__name">Chi-Nguyen Tran</h1>

I'm a final-year B.Sc. student in Artificial Intelligence at **VNUHCM, University of Science** (HCMUS), and AI R&D Lead at **Realtime Robotics**.

I am doing research in robotics. My goal is to help robots understand what is around them, know where they are, and work out how to act, and whether it is safe to act, when their surroundings change. In the real world, light, weather and surroundings keep changing and sensors get noisy, so a model that scores well on test data can still fail once deployed. I work on models that hold up in those conditions and are light enough to run on the small computers robots carry:

- **Perceive and localize.** Robots that keep recognising where they are when the weather and the scene change.
- **Act.** Agents that act reliably on camera input distorted in ways they never saw in training.
- **Test.** Finding the road scenarios most likely to break a self-driving car.
- **Next.** Teams of robots that learn whom to trust, and vision-language-action models for acting on what they see.

**I am looking for PhD positions starting Fall 2027** in robotics.


<p class="hb__links"><a href="mailto:tcnguyen2365@gmail.com">Email</a> / <a href="{{ base_path }}/files/cv.pdf">CV</a> / <a href="https://scholar.google.com/citations?user=dyVn0zMAAAAJ&hl=en">Scholar</a> / <a href="https://github.com/chisngyen">GitHub</a> / <a href="https://www.linkedin.com/in/chi-nguyen-tran-381513331/">LinkedIn</a></p>
</div>
<img class="hb__photo" src="{{ base_path }}/images/profile.png" alt="Chi-Nguyen Tran">
</div>

<h2 class="sec-title">News</h2>
<ul class="news">
  <li><time>Sep 2026</time><span><b>5 papers accepted at NeurIPS 2026</b> (Sydney), 2 as co-first author.</span></li>
  <li><time>Aug 2026</time><span>Awarded the Vallet Scholarship 2026.</span></li>
  <li><time>Jul 2026</time><span><b>Winner</b>, FSE-AIWare 2026 Agentic Python Dependency Resolution Competition (MEMRES).</span></li>
  <li><time>Feb 2026</time><span>Joined Realtime Robotics as AI R&amp;D Lead, working on perception and localization for robots on embedded hardware.</span></li>
  <li><time>Dec 2025</time><span><b>1st Place</b> in both tracks, NeurIPS 2025 Mouse vs. AI Robust Foraging Competition.</span></li>
</ul>

<h2 class="sec-title">Selected Publications</h2>
<p style="font-size: 0.85em">* equal contribution</p>
{% assign selected = site.publications | where: "selected", true | sort: "date" | reverse %}
{% assign featured = selected | where: "featured", true %}
{% for post in featured %}
  {% include pub-card.html %}
{% endfor %}
{% for post in selected %}{% unless post.featured %}
  {% include pub-card.html %}
{% endunless %}{% endfor %}
<p class="sec-more"><a href="{{ base_path }}/publications/">All publications &rarr;</a></p>

<h2 class="sec-title">Honors</h2>
<ul class="honors">
  <li><b>1st Place</b> (both tracks), NeurIPS 2025 Mouse vs. AI Robust Foraging Competition</li>
  <li><b>Winner</b>, FSE-AIWare 2026 Agentic Python Dependency Resolution Competition</li>
  <li><b>1st Place</b> in five shared tasks at SemEval-2026, LREC 2026 and EACL 2026</li>
  <li><b>Third Prize</b>, Vietnam Student AI Olympiad, National Round 2025</li>
  <li><b>Vallet Scholarship</b> 2026</li>
</ul>

<h2 class="sec-title">Service</h2>
<ul class="honors">
  <li>Reviewer: ACL, CVPR Workshops</li>
</ul>
