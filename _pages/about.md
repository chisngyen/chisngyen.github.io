---
permalink: /
title: ""
seo_title: "Chi-Nguyen Tran | Robotics research"
author_profile: false
classes: home-barron
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

<div class="hb">
<img class="hb__photo" src="{{ base_path }}/images/profile.jpg?v=2" alt="Chi-Nguyen Tran">
<div class="hb__text" markdown="1">
<h1 class="hb__name">Chi-Nguyen Tran</h1>
<p class="hb__status">Looking for PhD positions in robotics, Fall 2027</p>

I'm a final-year B.Sc. student in Artificial Intelligence at <a href="https://hcmus.edu.vn">VNUHCM, University of Science</a> (HCMUS). From February to October 2026 I was AI R&D Lead at **Realtime Robotics**.

My goal is to help robots understand what is around them, know where they are, and work out how to act, and whether it is safe to act, when their surroundings change, with models light enough to run on the robot itself.

With my teammates I have **two co-first papers at NeurIPS 2026**, **1st place in both tracks** of the NeurIPS 2025 Mouse vs. AI competition, and a paper in **Interface Focus** (Royal Society).

<ul class="hb__links">
  <li><a href="mailto:tcnguyen2365@gmail.com"><i class="fa-solid fa-envelope" aria-hidden="true"></i>Email</a></li>
  <li><a href="{{ base_path }}/files/cv.pdf" data-cv><i class="fa-solid fa-file-lines" aria-hidden="true"></i>CV</a></li>
  <li><a href="{{ site.author.googlescholar }}"><i class="fa-brands fa-google-scholar" aria-hidden="true"></i>Scholar</a></li>
  <li><a href="{{ site.author.orcid }}"><i class="fa-brands fa-orcid" aria-hidden="true"></i>ORCID</a></li>
  <li><a href="https://github.com/{{ site.author.github }}"><i class="fa-brands fa-github" aria-hidden="true"></i>GitHub</a></li>
  <li><a href="https://www.linkedin.com/in/{{ site.author.linkedin }}/"><i class="fa-brands fa-linkedin" aria-hidden="true"></i>LinkedIn</a></li>
</ul>
</div>
</div>

<h2 class="sec-title">Timeline</h2>
{% include timeline.html %}

<h2 class="sec-title">Research</h2>
{% assign selected = site.publications | where: "selected", true | sort: "rank" %}
<ol class="rs">
{% for post in selected %}
  <li class="rs__item"><span class="rs__thread">{{ post.thread }}</span>
  {% include pub-card.html compact=true %}
  </li>
{% endfor %}
  <li class="rs__item rs__item--next"><span class="rs__thread">Next</span><p class="rs__next">Teams of robots and sensors that learn from evidence how much to trust each member.</p></li>
</ol>
<p class="sec-more"><a href="{{ base_path }}/publications/">All publications &rarr;</a></p>
