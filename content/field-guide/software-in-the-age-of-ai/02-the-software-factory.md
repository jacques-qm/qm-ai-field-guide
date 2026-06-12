---
title: 'The software factory, explained'
level: intermediate
order: 2
koan: >-
  Not one clever programmer. A system of agents, harnesses, tests, and human
  review.
summary: >-
  A software factory is the production system around the agents: harnesses,
  tools, tests, and human review that turn intent into shipped software,
  reliably and repeatedly. Building the factory is the work now, not writing
  each line.
faq:
  - q: Is a software factory just a CI/CD pipeline with AI?
    a: >-
      It is broader. Pipelines automate building and shipping; a software
      factory adds agents that draft the work, a harness that governs them, and
      human gates. The pipeline is one part of the line.
  - q: Why not just let one strong engineer use AI?
    a: >-
      That works until you need it reliable and repeatable. A factory produces
      the same quality without depending on a hero. The system, not the
      individual, is what scales.
  - q: Where do tests fit?
    a: >-
      At the center. Automated tests are how the factory catches bad output
      before a human sees it, so review focuses on judgment, not proofreading.
      No tests, no trustworthy factory.
  - q: Who builds the factory?
    a: >-
      Engineers, deliberately, for your specific work. The harness, tools,
      tests, and gates are the real build now, more than any single feature the
      agents produce.
date: '2026-06-11'
updated: '2026-06-12'
status: published
---

A software factory is the production system around the agents: the harness, the tools, the tests, and the human review that together turn an intent into shipped software, again and again. Designing that system is most of the work now.

## From craftsman to factory

The thing you used to scale was a developer writing code. The thing you scale now is a system that produces code — agents running inside a harness, with tools, tests, and people positioned where it counts. In practice the shift is concrete: you spend less effort hiring people to type, and more effort building the line they would have typed on.

## What's in it

An agent, or several, to draft the work. A harness that hands them tools, holds their memory, and sets their limits. A test suite that catches bad output automatically, before a person ever looks. Human review placed where a wrong call would actually hurt. None of these parts is exotic on its own; the engineering is in how they fit together into something that reliably ships.

## Reliability is the point

What a factory buys you is less about raw speed than about repeatability — the same quality on the hundredth run as on the first, without it hanging on one exceptional person being in the room that day. That reliability comes from the checks built around the agents, not from how clever the agents happen to be on a given morning.

## Building it is the job

The harness, the tests, and the gates, designed for your particular work, are the real engineering now. You buy the model off the shelf. What you build is the system that makes it safe and dependable to aim at production.
