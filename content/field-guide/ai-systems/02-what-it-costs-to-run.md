---
title: What it costs to run an AI agent
level: beginner
order: 2
status: published
koan: >-
  AI is metered like a utility. Most tasks cost cents, and the meter is
  predictable.
summary: >-
  An AI agent is metered like a utility. You pay for the words it reads and the
  words it writes, at a rate the provider sets. Most tasks cost cents, and the
  meter is predictable.
date: '2026-06-11'
updated: '2026-06-11'
faq:
  - q: What is a token?
    a: >-
      A chunk of text, roughly a few characters. Models read and write in
      tokens, and providers price per token. Think of it as the unit on the
      meter.
  - q: How much does a typical task cost?
    a: >-
      Usually cents. A short reply can be a fraction of a cent; a long,
      multi-step job a few cents to a dollar. Heavy, document-laden work costs
      more because it moves more tokens.
  - q: Can costs run away?
    a: >-
      Not if the harness caps them. You set per-task and per-period limits the
      agent cannot exceed. Runaway cost is a missing limit, not an inherent
      risk.
  - q: Why do complex tasks cost more?
    a: >-
      More steps and tools mean more words in and out. Same rate, bigger
      reading. The meter does not change; the volume does.
---

The cost of running an AI agent is simple to picture, and that is the point. It is a meter, not a mystery.

## The meter

Tokens in, plus tokens out, times a rate, equals the cost. **Tokens in** is everything the agent reads: your request, emails, documents, context. **Tokens out** is everything it writes: drafts, documents, its own working notes. The **rate** is a price per unit of text, set by the AI provider. The result is usually cents per task.

## Why it is predictable

Because every action is just text in and text out, you can estimate a task before it runs and cap what it is allowed to spend. There are no surprise invoices. There is a meter you can read.

## What makes a task cost more

More context, more steps, more tools. A quick reply is cheap. A multi-step job that reads long documents and calls several tools costs more, because it moves more words through the meter. Same rate, bigger reading.

## Metered, and capped

You set the ceilings. A single task, a day, or a whole project can each carry a spending limit the agent cannot cross. The cost is not just visible, it is governed, the same way every other action the agent takes is governed.
