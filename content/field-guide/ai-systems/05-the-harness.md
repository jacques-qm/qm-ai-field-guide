---
title: 'The harness: tools, memory, and limits'
level: intermediate
order: 5
status: published
koan: >-
  On its own a model is just text in, text out. The harness is the body around
  it.
summary: >-
  On its own a model is just text in, text out. The harness is the software
  wrapped around it: the tools, the memory, and the limits. It is where the
  system can do things, and where it can be told not to.
date: '2026-06-11'
updated: '2026-06-11'
faq:
  - q: Why not just trust the model?
    a: >-
      Because the model has no judgment about consequences. It generates; it
      does not decide what is allowed. Putting control in the harness means
      safety does not depend on the model behaving.
  - q: Is the harness the same as an agent framework?
    a: >-
      Roughly. Frameworks like LangGraph or the OpenAI Agents SDK are harnesses:
      they give the model tools, memory, and control flow. The harness is the
      idea; a framework is one implementation.
  - q: What goes in memory?
    a: >-
      Whatever the system needs to carry forward: past actions, your edits,
      standing instructions, relevant context. Good memory is curated, not a
      dump. It is the difference between a system that learns and one that
      repeats itself.
  - q: Who builds the harness?
    a: >-
      Engineers. This is the real work now. The model is bought; the harness
      around it, with the right tools, memory, and limits for your business, is
      what gets built and shipped.
---

A model can write the words "send this email." It cannot send one. The harness is what closes that gap, and it is where the real engineering lives.

## What the harness adds

The harness is the code that connects the model to real tools and decides, for each one, whether the model may use it. The model proposes. The harness disposes. Without it you have a clever text generator. With it you have a system that can do work.

## Tools

Tools are the things the agent can do: look up a document, read a message, draft a reply, fill a form, run a workflow. The model asks; the harness performs, but only the tools you have granted, with only the permissions you set.

## Memory

A bare model forgets everything between turns. The harness gives it memory: what happened last time, what you approved, your standing instructions. That is how a system gets better with use instead of starting from zero every morning.

## Limits and the off switch

The harness is where control lives. Scoped permissions, spending caps, the human gate, and one switch that pauses everything, instantly. The model is powerful and indifferent. The harness is what makes it safe to point at real work.
