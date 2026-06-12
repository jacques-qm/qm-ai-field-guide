---
title: How AI systems actually work
level: beginner
order: 1
status: published
koan: 'A model, a harness, a loop, and a prompt. The four parts of every AI system.'
summary: >-
  An AI system is a model wrapped in a harness, run in a loop, steered by
  prompts. Four moving parts. Name them and the magic goes away; ordinary
  engineering shows up.
date: '2026-06-11'
updated: '2026-06-11'
faq:
  - q: Is an AI system the same as ChatGPT?
    a: >-
      ChatGPT is one product built on one model. An AI system is the general
      shape underneath it: a model, plus the harness, loop, and prompts around
      it. The chat window is the thinnest possible version.
  - q: Do I need to understand the math?
    a: >-
      No. You need the four parts and how they fit. The math matters to the
      people training models. To use and govern a system, the mental model is
      enough.
  - q: Which part holds the controls?
    a: >-
      The harness. The model generates; the harness decides what it is allowed
      to touch and when a human signs off. Control is engineering, not a
      personality trait of the model.
  - q: What is the difference between a model and an agent?
    a: >-
      A model answers. An agent loops: it plans, uses tools, checks its work,
      and repeats. An agent is a model put to work inside a harness.
---

At the center of every AI system is a model. Give it words and it predicts what comes next, one piece at a time. That is the whole trick. The model knows a great deal and, on its own, decides nothing and does nothing.

## The model is the engine

A model is trained on a vast amount of text and code until it is good at one thing: predicting the next piece of text. Everything it appears to do follows from that. It is powerful and indifferent. It will draft a brilliant reply or a confident mistake with exactly the same energy.

## The harness is the body

A raw model is just text in, text out. The harness is the software wrapped around it. It gives the model tools to use, memory to keep, and limits it cannot cross. The model can write the words "send this email." The harness is what decides whether it can actually send one. Safety lives in the harness, not the model.

## The loop is the work

Real work is rarely one step. The system reads the goal, makes a plan, uses a tool, checks the result, and goes again, until the job is done or it hits a limit you set. That cycle, repeated, is what people mean by an **agent**.

## Prompting is the steering

Prompting is how you tell the system what good looks like, in plain language. Clear instructions, good examples, the right context: the same model, steered toward a far better answer. Most of the gap between a system that helps and one that frustrates lives here, not in the model.

## Why this matters

Once you can see the four parts, the questions get practical. What is the model good at? What can the harness touch? Where does a human stay in the loop? How is it steered? Those are engineering questions with real answers. That is the whole point of a field guide.
