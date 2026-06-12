---
title: Real capability vs. a good demo
level: intermediate
order: 3
koan: How to tell a system that works from one that only works on stage.
summary: >-
  A demo is a system working once, on chosen inputs, while you watch. A real
  capability keeps working on your inputs, at volume, when nobody is watching.
  Telling them apart is most of buying AI well.
faq:
  - q: How do I tell a demo from a real capability?
    a: >-
      Run it on your own messy inputs, at real volume, unwatched. A capability
      holds up; a demo was tuned for the example on screen. The happy path
      proves nothing.
  - q: What questions expose a demo?
    a: >-
      "How does it fail, how often, and what happens when it does?" Real systems
      answer with error rates and fallbacks. Demos deflect, because failure is
      the part they hid.
  - q: Is a pilot worth the effort?
    a: >-
      Almost always. A week on your real work reveals what a polished
      presentation cannot, and it is far cheaper than discovering it after you
      have bought.
  - q: What should a real capability come with?
    a: >-
      Numbers. How often it is right, how it is verified, where humans stay in
      the loop. Measurement is the difference between a capability and a
      confident demo.
date: '2026-06-11'
updated: '2026-06-12'
status: published
---

A demo shows you a system working once, on inputs someone picked, while you watch. A capability is that same system still working on your inputs, at your volume, on a day when no one is paying attention. Most of buying AI well is learning to tell which one you're being shown.

## Why the demo is the easy part

Almost anything looks impressive on a hand-picked example. The work that matters isn't the clean case you're shown; it's everything the clean case leaves out — the malformed input, the unusual request, the third Tuesday when an upstream system is behaving strangely. A demo is built precisely to stay out of that territory, which is part of why it looks so smooth.

## Ask how it fails

The quickest way to see through a demo is to ask what happens when it goes wrong: how often, in what way, and what the system does next. A team with a real capability can answer that with error rates, known edge cases, and fallbacks they've already built. A team with only a demo will move the conversation somewhere else, because failure is the part they arranged not to show.

## Run it on your own reality

Put your real inputs through it, at something near your real volume, and watch where it strains. A week of that on actual work tells you what no amount of polished presentation can, and it costs far less than finding out after you've signed.

## A capability comes with numbers

A real one arrives with measurement attached: how often it's right, how that gets verified, and where a person stays in the loop. When there's nothing to measure — no rate, no eval, no check — you're looking at a demo, whatever it's being called.
