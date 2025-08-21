---
layout: default
title: screeds
permalink: /screeds/
---

## screeds


{% assign docs = site.screeds | sort: 'title' %}
{% for doc in docs %}
  - <a href="{{ doc.url | relative_url }}">{{ doc.title | default: doc.basename }}</a>
{% endfor %}

