---
title: What is an AI model
level: beginner
order: 3
status: published
koan: >-
  The engine. It predicts the next word, knows a lot, and decides nothing on its
  own.
summary: >-
  A model is the engine at the center of every AI system. Give it text and it
  predicts what comes next, one piece at a time. It knows a great deal and, on
  its own, does nothing.
date: '2026-06-11'
updated: '2026-06-11'
faq:
  - q: Does the model think?
    a: >-
      Not the way people do. It predicts text that looks like thinking, and
      often that is useful. But it has no goals, no awareness, and no stake in
      the answer. Treat it as a very capable text engine.
  - q: Does it know today’s news?
    a: >-
      Only up to its training cutoff, unless the harness gives it a tool to look
      things up. On its own, its knowledge is frozen at the moment it was
      trained.
  - q: Can it make things up?
    a: >-
      Yes. It predicts plausible text, and plausible is not always true. That is
      why the harness, the human gate, and good prompting matter: they catch
      what the model gets confidently wrong.
  - q: Is a bigger model always better?
    a: >-
      Not always. Bigger models tend to know more and reason better, but they
      cost more and can be overkill. The right model is the smallest one that
      reliably does the job.
---

A model is the engine at the center of every AI system. It does one thing well, and everything else is built on top of it.

## A next-word predictor

A model is trained on a vast amount of text and code until it gets good at predicting the next piece of text. Answer, summarize, translate, write code: all of it falls out of that single skill, repeated. It sounds small. It is not.

## What it knows

During training it absorbs patterns from its data: language, facts, styles, how code works, how an argument goes. It carries a compressed version of all of that. Ask it something and it draws on the patterns. It is not looking the answer up in a database.

## What it cannot do on its own

A bare model has no memory between conversations, no access to your files, no way to take an action in the world. It reads text and writes text. That is the whole interface. Everything else is the harness around it.

## Why "predict the next word" is enough

Predicting the next word *well* turns out to require a working grip on language, facts, and reasoning. Push that skill far enough and the model can draft, plan, and explain. The capability is not magic. It is scale and the right training, pointed at a single, deceptively simple task.
