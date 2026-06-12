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
updated: '2026-06-12'
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

Running an AI agent costs money, and you can see exactly where it goes. You pay for text. Every time the agent reads something or writes something, that text gets counted and billed at a set rate. For most tasks the total comes to a few cents.

## What you're paying for

Two things: the text going in and the text coming out. Going in is everything the agent reads — your request, plus any emails, documents, or background it needs to do the job. Coming out is everything it writes — the answer, any files it produces, and the notes it makes to itself as it works. The provider charges a small fixed price per chunk of text in each direction. Add those up and you have the cost of the task.

## Why the bill doesn't surprise you

The whole job is text in and text out, nothing hidden. That means you can estimate a task before it runs, and you can set a hard ceiling it is not allowed to pass. You are watching a meter, and you can read it.

## What makes one task cost more than another

Volume. A one-line question is nearly free. A job that reads three long contracts, calls a few tools, and works through several steps will cost more, because much more text passes through it. The price per chunk stays the same. The amount of text is what moves.

## You set the ceiling

The limits are yours. A single task, a day, or a whole project can each carry a cap the agent cannot exceed. So the cost stays under your control, governed the same way as everything else the agent is allowed to do.
