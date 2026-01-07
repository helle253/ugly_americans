---
layout: default
title: pages
permalink: /pages/
---

## pages

{% assign docs = site.pages | sort: 'title' %}
{% for doc in docs %}
  - <a href="{{ doc.url | relative_url }}">{{ doc.title | default: doc.basename }}</a>
{% endfor %}

