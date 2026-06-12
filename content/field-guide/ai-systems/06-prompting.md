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
updated: '2026-06-12'
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

Prompting is how you aim an AI system. You are not programming the model, you are instructing it, and the quality of the instruction shows up directly in the quality of the result.

## Steering, not coding

A prompt is plain language that says what you want done, what a good result looks like, and what the model needs to know to get there. The model is already capable. Prompting is how you point that capability at the specific thing you want, instead of the nearest plausible-looking thing it could produce on its own.

## Context is most of it

The biggest lever by far is the information you hand the model: the document that is actually relevant, an example of the output you want, the one constraint that cannot be broken. A large share of "the AI got it wrong" is really "the AI was never told." Fix the context before you fuss over the wording.

## Show, don't only tell

A sample does more than a description. "Write it like this," with an example attached, gets you closer than "write it professionally" ever will. Two or three good examples teach the model your standard faster than a paragraph trying to name it.

## Where prompting ends

Prompting steers; it cannot supply what isn't there. If the task needs a tool the model doesn't have, or a fact it was never given, no amount of phrasing will produce it. Part of the skill is noticing when you've stopped steering the model and started needing to change the system around it.
