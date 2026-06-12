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
updated: '2026-06-12'
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

Orchestration is the coordination layer that makes several agents behave like one system. You build it when a single agent, holding a single context, can no longer carry the whole job.

## When one agent stops scaling

One agent is the right default, and it holds longer than most people expect. It breaks on two axes: when the task no longer fits in one context window, and when it spans work too varied for one set of tools and one system prompt to handle well. At that point you decompose the job — a researcher, a drafter, a checker — and something has to route work between them and reconcile what comes back. That routing is orchestration.

## The shapes worth knowing

Most real systems are combinations of four patterns. A **pipeline** passes work down a fixed sequence of stages. A **fan-out** runs agents in parallel and merges their outputs. A **manager** holds the plan, delegates pieces to workers, and assembles the result. A **loop** pairs a maker and a checker that trade passes until the output clears a bar. Pick by the shape of the work, not the org chart you wish you had.

## Coordination is not free

Every added agent multiplies tokens, latency, and the number of places a run can go wrong, and errors compound as they pass from one agent to the next. A coordinated team sometimes beats a single strong agent and sometimes just spends more to reach the same answer more slowly. Treat each layer of coordination as a cost to justify with a measured win, not a default you reach for because multi-agent sounds advanced.

## Control across many agents

More agents make the gate matter more, not less. Keep one harness over the whole system, one off switch, permissions scoped per agent to the minimum each one needs, and a human at the point where anything leaves the building. Adding agents changes how the labor is divided. It should not change who approves what ships.
