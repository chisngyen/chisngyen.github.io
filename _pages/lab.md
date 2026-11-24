---
layout: single
title: "Lab"
description: "Laboratory for Multi-Agent and Trustworthy Artificial Intelligence at VNUHCM, University of Science, led by Prof. Long Tran-Thanh."
permalink: /lab/
author_profile: false
classes: home-barron
---

{% include base_path %}
{% assign lab = site.data.lab %}

<div class="lab-head">
  <p class="lab-head__name">{{ lab.name }}</p>
  <p class="lab-head__meta">Faculty of Information Technology, VNUHCM, University of Science. Led by Prof. Long Tran-Thanh. <a href="{{ lab.url }}">Lab page <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></p>
</div>

<h2 class="sec-title">Research</h2>
<ol class="rs lab-pillars">
  <li class="rs__item"><span class="rs__thread">Multi-agent foundations</span><p>Machine learning problems seen through many agents: game-theoretic models of strategic interaction, multi-agent reinforcement learning, and splitting one large task into parts that coordinate. Such systems stay cheaper and sturdier when compute, data and connectivity are limited.</p></li>
  <li class="rs__item"><span class="rs__thread">Steering black-box foundation models</span><p>Multi-agent methods that align models reached only through an API with local culture, ethics and safety rules, without retraining them.</p></li>
  <li class="rs__item"><span class="rs__thread">Reliable learning in real conditions</span><p>Continual learning, online learning and robust visual perception. Most of my work in the lab sits here.</p></li>
</ol>

<h2 class="sec-title">Members</h2>
<h3 class="pp__label">Faculty</h3>
<ul class="pp-m pp-m--4">
{% for p in lab.faculty %}{% include person-card.html p=p %}{% endfor %}
</ul>
<h3 class="pp__label">Students</h3>
<ul class="pp-m pp-m--4 pp-m--student">
{% for p in lab.students %}{% include person-card.html p=p %}{% endfor %}
</ul>

<h2 class="sec-title">Also working with</h2>
<ul class="pp-m pp-m--2">
{% for p in lab.others %}{% include person-card.html p=p %}{% endfor %}
</ul>

