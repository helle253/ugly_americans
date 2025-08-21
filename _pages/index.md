---
layout: default
title: pages
permalink: /pages/
---

<h2>pages</h2>

<ul>
{% assign docs = site.pages | sort: 'title' %}
{% for doc in docs %}
  <li>
    <a href="{{ doc.url | relative_url }}">{{ doc.title | default: doc.basename }}</a>
  </li>
{% endfor %}
</ul>
