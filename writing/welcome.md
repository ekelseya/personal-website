---
layout: article.njk
title: Welcome to the Show!
date: 2020-09-03
tags: ['write', 'grind']
---

I wanted a blog to document my leetcode learning, so I built this with Eleventy. I love building things, but I hate leetcode (thus starting a whole new project rather than just studying). Consider this first post a rant against leetcode and the current recruitment process with a smattering of "why maybe it's worth it".

<!-- excerpt -->

---

Right now, companies are falling over themselves to be seen as inclusive and diverse. However, leetcode style technical interviews are the opposite of inclusive.

## What are you testing for?

I interviewed with a web agency recently. They primarily develop in Django, a framework I love and am at least a decent beginner in. I expected a technical interview on Django: models, templates, views, filters, et cetera. Instead I was asked a relatively simple problem in Python: given a string, find the the longest substring without repeating characters. Given time and a stress free environment, I could probably come up with an answer, but in the interview, I went blank.

Afterwards, I wondered how often they have to find a non-repeating substring when developing in Django. Does it come up often enough that they need to see how other people do it? Does this question accurately reflect how well someone can create a third normal form database through Django models? Of course not. This question has nothing to do with the day to day job, and will not give the hiring manager a useful assessment of the candidate.

## Why leetcode isn't inclusive

When companies start with this style of interviewing, they are immediately excluding candidates with test anxiety. That candidate might be the best there is at building shiny widgets, but if he freezes due to test anxiety, the team won't benefit from his expertise. The "leetcode grind" means hours a day of studying, often for months. Where does that leave the candidate who works full time while taking night classes? Or those who have to care for young children or elderly parents? What if the candidate has a disability? If a company is truly inclusive, they know the value of diverse mindsets and experiences. Starting with a leetcode question immediately excludes too many people.

## What's the alternative?
I don't claim to have an answer to this problem, but a first step to not only a more inclusive interview process, but also a more accurate assessment of a candidate, would be to ask questions that better reflect the day to day work. Maybe there is a common mistake caught in code review - can the candidate find it? Can the candidate map out RESTful routing with express? Answering either of these questions would take just as much time as a leetcode style problem, and give the hiring manager a better idea of how the candidate codes. This of course doesn't help those with test anxiety. I'm hesitant to recommend take home assignments, because these often turn into multi-day projects that many people don't have the time for. Like I said, I don't have the answers, I just know that there has to be a better way.

## So why am I documenting my leetcode here?
Given all of the above, I imagine you are curious as to why I'm here, sharing leetcode. It's simple: as terrible as the process is, it's still reality. If I want to interview well, I need to be able to answer these types of questions without freezing, stammering, or otherwise looking like a fool.

But it's more than that. Leetcode style questions are actually incredibly useful *for learning*. Leetcode gives me a chance to practice JavaScript in a way that building an application doesn't. If I don't use `Map()` very often in my projects, how can I remember it for when I need it? And although I used the ternary operator whenever possible, I still had to double check the syntax: `conditional ? doIfTrue : doIfFalse` until I started practicing coding quizes.

## But Eryn, your code is crap
Yeah, it might be. I do not pretend to be an expert. However, the process of explaining what is happening in every step is what will eventually make me an expert. If you find mistakes, or have a better way to solve a problem, let me know on Twitter: [@ekelseya](https://twitter.com/ekelseya)
