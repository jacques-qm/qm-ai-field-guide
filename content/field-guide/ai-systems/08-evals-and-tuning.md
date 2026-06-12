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
updated: '2026-06-12'
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

An eval is a graded test for an AI system: real tasks, known-good outcomes, run and scored. It is the instrument that lets you change a system on purpose instead of by feel. Once a system is doing real work, by feel stops being good enough.

## Why feel stops working

In the first week you judge a system by reading its output: this looks right today. That holds until the volume rises and the cases get strange, and then no one can keep the whole picture in their head. The question you actually need answered is narrow and repeatable: compared to yesterday, did this change make the system better or worse? A pile of impressions can't answer that. A scored test can.

## What goes in the set

A representative set of real tasks, each with an outcome you can check. Some checks are exact — the right figure, valid JSON, a call that passes. Many are judged against a rubric, often by a model scoring the output, with humans auditing the judge so its biases don't quietly set your bar. Two things make or break the set: that it resembles production traffic, and that it includes the tail cases, because the tail is where systems actually break.

## The tuning loop

Measure, change one variable — the prompt, the tools, the model, the memory — measure again, keep what moved the number, drop what didn't. It is the agent's own act-and-check loop turned on the system that runs it. The discipline is changing one thing at a time; change three and a better score won't tell you which one earned it.

## Where humans stay

Evals don't replace judgment, they point it. You decide what good means, which failures are unacceptable, and where the bar sits. The system reports, against that definition, how often it clears it. Watch one number above the rest: performance on a held-out set the system was never tuned against. A score that only climbs on the cases you optimized for is measuring your overfitting, not your quality.
