---
title: Evals and the tuning loop
level: advanced
order: 8
status: published
koan: >-
  You cannot improve what you do not measure. How to grade an AI system and
  tighten it.
summary: >-
  You cannot improve what you do not measure. Evals are how you grade an AI
  system against real tasks; the tuning loop is how you use that grade to make
  it better on purpose, instead of by vibes.
date: '2026-06-11'
updated: '2026-06-11'
faq:
  - q: What exactly is an eval?
    a: >-
      A graded test for an AI system: real tasks with known-good answers, run
      and scored. It turns "it seems fine" into a number you can track over
      time.
  - q: Who grades the outputs?
    a: >-
      Sometimes exact checks (right number, valid format). Often a
      model-as-judge scoring against a rubric you wrote, with humans
      spot-checking. The point is a consistent, repeatable score.
  - q: How is this different from prompting?
    a: >-
      Prompting changes the system; evals tell you whether the change helped.
      You prompt, you measure, you keep what worked. Without evals you are
      guessing in a nicer font.
  - q: How often should we re-run evals?
    a: >-
      On every meaningful change, and on a schedule, because models and data
      drift. The whole value is catching a regression before your users do.
---

You cannot improve what you do not measure. Evals are how an AI system gets better on purpose instead of by feel.

## Why vibes do not scale

Early on you judge a system by feel: it seems good today. That breaks the moment it is doing real work. You need a way to ask, concretely, did it get better or worse? That is what an eval is: a graded test the system has to pass.

## What an eval is

A set of real tasks with known-good outcomes, run against the system, and scored. Some scoring is exact: did it pull the right number? Some is judged: was the reply good? Either way you get a number you can track instead of an impression you can argue about.

## The tuning loop

Measure, change one thing (the prompt, the tools, the model, the memory), measure again. Keep what moved the number; drop what did not. It is the same loop the agent runs on a task, run on the system itself. Memory is how it compounds: your edits become its standing instructions.

## Where humans stay

Evals do not remove judgment; they aim it. You decide what good means and which failures matter. The system tells you, honestly, how often it is hitting that bar. That is the difference between a system you trust and one you only hope about.
