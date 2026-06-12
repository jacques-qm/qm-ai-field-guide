---
title: Designing the software factory
level: advanced
order: 4
koan: The harness around the agents is the real work now. How to build one.
summary: >-
  Designing a software factory means building the harness around the agents: the
  tools they can use, the tests that catch them, and the gates where humans
  decide. It is ordinary engineering, arranged so output is cheap and trust is
  high.
faq:
  - q: Where do you start designing a factory?
    a: >-
      At the gates. Decide what a human must approve and what is safe to
      pre-approve, then build the line to enforce that. Control defines the
      shape; throughput fills it in.
  - q: How do you keep agents from doing damage?
    a: >-
      Bound them in the harness: only the tools they need, scoped permissions,
      spending caps, and an off switch. A bounded agent’s mistakes are contained
      by design.
  - q: Why are tests so central?
    a: >-
      They are how the factory verifies its own output before a human looks,
      turning review into judgment instead of proofreading. Automatic
      verification is what makes cheap output trustworthy.
  - q: How does the factory improve over time?
    a: >-
      Memory and evals. Capture human edits as standing instructions, feed them
      back, and measure changes against a graded test set. Improvement becomes
      deliberate, not hoped-for.
date: '2026-06-11'
updated: '2026-06-11'
status: published
---

Designing a software factory means building the harness around the agents: the tools they can use, the tests that catch them, and the gates where humans decide.

## Start from the gates

Design backward from where a human has to sign off. Decide what must pass through a person and what can be pre-approved, then build the factory to enforce it. Governance first, throughput second.

## Tools and limits

Give agents the tools the work needs and nothing more. Scoped permissions, spending caps, an off switch. The agent's power is bounded by the harness, so a mistake is contained, not catastrophic.

## Make verification automatic

Tests are the factory's immune system. The more the system can check on its own, the more human review becomes judgment instead of proofreading. Invest here first; it is what makes speed safe.

## Memory and the loop

The factory should get better with use. Capture what humans approved and changed, feed it back as standing instructions, and run evals so improvement is measured, not assumed. A factory that does not learn just repeats itself faster.
