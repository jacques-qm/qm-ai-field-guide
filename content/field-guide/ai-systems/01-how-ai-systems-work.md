---
title: How AI systems actually work
level: beginner
order: 1
status: published
koan: 'A model, a harness, a loop, and a prompt. The four parts of every AI system.'
summary: >-
  An AI system is four parts: a model that predicts text, a harness that lets
  it act, a loop that puts it to work, and the prompts that steer it. Most
  confusion about AI is just not knowing which part you mean.
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

Start with the model. You hand it some text and it continues that text, a piece at a time, choosing what is most likely to come next from everything it was trained on. On its own, that is all it does. It produces words. It cannot click a button, send a message, or look anything up. Whatever an AI system does beyond writing, some other part is doing.

So an AI system is really four parts working together.

## The model

A model is what you get when you train a program on an enormous amount of text and code until it becomes very good at one narrow task: predicting the next piece of text. Everything it seems to know is a byproduct of that. It carries no sense of whether it is right. A correct answer and a confident wrong one arrive the same way, in the same steady tone. Hold onto that. Most mistaken ideas about AI come from forgetting it.

## The harness

By itself a model only takes text in and gives text back. The harness is the code built around it — the part that can actually do things. It gives the model tools, keeps track of what has happened so far, and draws the lines it cannot cross. A model can write the sentence "send the email." Whether an email is ever sent is up to the harness. When people ask what an AI is capable of, the harness is what they are really asking about.

## The loop

Most real work takes more than one move. So the system runs in a loop: look at the goal, choose a step, take it, see what happened, then go again — until the work is finished or it reaches a limit someone set. A model running in a loop with tools is what people are calling an agent. The word carries more drama than the thing deserves. This is the thing.

## Prompting

Prompting is telling the system, in ordinary language, what you want and what a good result looks like. The instructions you give, the examples you show, the context you bother to include — these take the same model from a flat answer to a sharp one. Much of the difference between AI that helps and AI that wastes your time is settled right here, in how you ask.

## Why it's worth knowing

Once these four are separate in your head, the useful questions show up on their own. What is this particular model good at? What has its harness been allowed to touch? Where does a person stay in the loop? How is it being asked? You can answer every one of those without any math. You only have to know which part you are talking about.
