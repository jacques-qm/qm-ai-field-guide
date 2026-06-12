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
updated: '2026-06-12'
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

A model can write the words "send this email." It cannot send one. The harness is the code that closes that gap, and it is where most of the engineering now happens.

## What the harness adds

The harness wires the model to real tools and decides, tool by tool, whether the model is allowed to use them. The model can only suggest an action by writing it out; the harness is what actually carries it out, or refuses. Without it, the model is a fluent text generator with no hands. The harness gives it hands, and decides where those hands are allowed to reach.

## Tools

Tools are the concrete things the agent can do: look up a document, read a message, draft a reply, fill in a form, start a workflow. The model requests one by name and the harness runs it — but only the tools you have granted, with only the permissions you have set. A tool the harness doesn't expose is one the model cannot reach, whatever it writes.

## Memory

A bare model forgets everything the moment a turn ends. The harness is what gives it memory: what happened last time, what you approved, the instructions you've left standing. Curated well, that memory is how a system improves with use instead of waking up blank every morning. Curated badly — everything dumped in at once — it just slows the system down and crowds out what matters.

## Limits and the off switch

Control lives in the harness, not in the model. Scoped permissions, spending caps, the human gate, an audit log, and a single switch that halts everything at once. This matters because the model has no sense of consequences; it will write a reckless instruction as readily as a safe one. Keeping the limits in the harness means safety never rests on the model choosing to behave.
