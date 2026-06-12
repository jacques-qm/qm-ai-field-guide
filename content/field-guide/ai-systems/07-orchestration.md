---
title: 'Orchestration: many agents, one system'
level: advanced
order: 7
status: published
koan: 'When one agent is not enough: coordinating several without losing control.'
summary: >-
  Orchestration is the coordination layer that gets several agents working
  together as one system. You reach for it when a single agent, with a single
  context, can no longer hold the whole job.
date: '2026-06-11'
updated: '2026-06-11'
faq:
  - q: Do I need multiple agents?
    a: >-
      Usually not at first. Most jobs fit one well-built agent. Reach for
      orchestration when the task genuinely exceeds one context or needs
      distinct specialists, not because multi-agent sounds impressive.
  - q: What is a supervisor or orchestrator agent?
    a: >-
      An agent whose job is to delegate: it breaks the work into pieces, hands
      them to worker agents, and assembles the result. The manager-worker shape.
      It coordinates; it does not do the specialist work itself.
  - q: Why do multi-agent projects fail?
    a: >-
      Cost and complexity, mostly. More agents multiply tokens and failure
      points, and the coordination is hard to get right. Many cancelled projects
      were single-agent jobs dressed up as multi-agent ones.
  - q: Does more agents mean better results?
    a: >-
      Not automatically. Sometimes a coordinated team beats a soloist; sometimes
      it is just a slower, pricier way to the same answer. Measure it.
      Complexity is a cost, not a feature.
---

Orchestration is the coordination layer that gets several agents working together as one system. It is what you build when one agent stops being enough.

## When one agent is not enough

A single agent works until the task gets too big for one context or too varied for one set of tools. Then you split it: a researcher, a drafter, a checker. Something has to coordinate them. That something is orchestration.

## The common shapes

A few patterns recur. A **pipeline** hands work from one agent to the next. A **fan-out** runs several in parallel and merges the results. A **manager** delegates to workers and assembles their output. A **loop** has a maker and a checker trade passes until the work is good.

## The cost of coordination

More agents mean more tokens, more places to fail, and more error to propagate. A multi-agent system can outperform a single one, and it can also just be slower and more expensive. Use the lowest level of complexity that reliably meets the requirement.

## Keeping control across agents

The gate does not disappear when there are many agents; it matters more. One harness, one off switch, scoped permissions per agent, and a human at the point where work leaves the building. Orchestration coordinates the labor. It does not change who decides.
