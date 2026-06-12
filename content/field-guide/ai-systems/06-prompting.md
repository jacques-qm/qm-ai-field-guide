---
title: 'Prompting: steering the system'
level: intermediate
order: 6
status: published
koan: 'How you tell the system what good looks like, in plain language.'
summary: >-
  Prompting is how you tell an AI system what good looks like, in plain
  language. The same model, given clear instructions and the right context,
  produces a far better answer. Most of the quality gap lives here.
date: '2026-06-11'
updated: '2026-06-11'
faq:
  - q: Is prompting a real skill or a fad?
    a: >-
      Real, but plain. It is clear thinking written down: say the task, the
      standard, and the context. The fad is the mystique around it. The skill is
      communication.
  - q: Why did the same prompt work yesterday and not today?
    a: >-
      Usually the context changed, or the model was updated. Prompts are not
      code with guaranteed output; they are instructions to a probabilistic
      system. Build in checks rather than trusting a magic phrase.
  - q: Can prompting make a small model act like a big one?
    a: >-
      Sometimes, for narrow tasks: good context and examples close part of the
      gap. But there is a ceiling. Past it, you need a better model, not a
      better prompt.
  - q: What is the most common mistake?
    a: >-
      Under-specifying. People ask for less than they mean and get exactly that.
      The fix is boring: be explicit about what good looks like, and give an
      example.
---

Prompting is how you aim an AI system. You do not program a model; you instruct it. Vague in, vague out. Specific in, specific out.

## Steering, not coding

A prompt is plain language that sets the task, the standard, and the context. The model is capable. Prompting is how you point that capability at the thing you actually want, instead of the nearest plausible thing.

## Context is most of it

The single biggest lever is giving the model the right information: the relevant document, an example of a good result, the constraint that matters. Most "the AI got it wrong" moments are really "the AI was not told."

## Show, do not just tell

Examples beat adjectives. "Write it like this," with a sample, outperforms "write it professionally." A couple of good examples teach the model your standard faster than a paragraph describing it.

## Where prompting ends

Prompting steers; it does not fix everything. If the task needs a tool the model does not have, or a fact it was never given, no prompt will conjure it. Know the line between steering the model and changing the system around it.
