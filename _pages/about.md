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

I'm a final-year B.Sc. student in Artificial Intelligence at **VNUHCM, University of Science** (HCMUS), and AI R&D Lead at **Realtime Robotics**, where I build visual positioning for drones.

I want machines that can work out where they are, agree on what many sensors tell them, decide what to do as a team, and then act:

- **See.** Drones that localize without GPS by matching their camera view to satellite maps, in fog, rain and at night.
- **Fuse.** Multi-camera perception that uses the geometry between views, so an extra sensor helps instead of confusing the tracker.
- **Decide.** Fleets of delivery drones whose real battery capability is hidden and has to be learned from their own flights.
- **Act (next).** Vision-language-action models, policy learning and robotics.

**I am looking for PhD positions starting Fall 2027** in robot learning and embodied AI.


<p class="hb__links"><a href="mailto:tcnguyen2365@gmail.com">Email</a> / <a href="{{ base_path }}/files/cv.pdf">CV</a> / <a href="https://scholar.google.com/citations?user=dyVn0zMAAAAJ&hl=en">Scholar</a> / <a href="https://github.com/chisngyen">GitHub</a> / <a href="https://www.linkedin.com/in/chi-nguyen-tran-381513331/">LinkedIn</a></p>
</div>
<img class="hb__photo" src="{{ base_path }}/images/profile.png" alt="Chi-Nguyen Tran">
</div>

<h2 class="sec-title">News</h2>
<ul class="news">
  <li><time>Sep 2026</time><span><b>5 papers accepted at NeurIPS 2026</b> (Sydney), 2 as co-first author.</span></li>
  <li><time>Aug 2026</time><span>Awarded the Vallet Scholarship 2026.</span></li>
  <li><time>Jul 2026</time><span><b>Winner</b>, FSE-AIWare 2026 Agentic Python Dependency Resolution Competition (MEMRES).</span></li>
  <li><time>Feb 2026</time><span>Joined Realtime Robotics as AI R&amp;D Lead, working on visual positioning for UAVs.</span></li>
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
