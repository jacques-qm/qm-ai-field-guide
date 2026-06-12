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
updated: '2026-06-12'
status: published
---

Designing a software factory means building the harness around the agents: the tools they're allowed to use, the tests that check them, and the gates where a human decides. The agents are the easy part to add. The factory is the part you actually engineer.

## Start from the gates

Design backward from the points where a human has to sign off. Work out which actions must pass a person and which can be safely pre-approved, and let that decision set the shape of the whole line before you optimize anything for speed. Enumerate the irreversible actions by name — money moving, data leaving, anything you can't take back — and make those fail closed, so the system stops rather than guesses when it isn't sure.

## Tools and limits

Give each agent the tools its work requires and nothing it doesn't, with permissions scoped to the minimum and spending capped. You're bounding a non-deterministic actor: you can't prove it will never make a bad call, so you build the harness so that a bad call is contained instead of catastrophic. An agent that can reach only three tools can only fail in the shape of those three tools.

## Make verification automatic

Tests are how the factory inspects its own output before a person ever sees it. The more the line can check on its own — types, unit tests, integration runs, a model-as-judge against a rubric — the more the human at the gate spends attention on judgment instead of re-reading for mistakes a machine should have caught. This is the highest-leverage thing to build, because it's what lets you raise throughput without lowering trust.

## Memory and the loop

A factory should improve as it runs. Capture what humans approved and what they changed, feed those edits back as standing instructions, and put a graded eval set in the loop so each change is measured against known-good cases rather than assumed to help. Skip that, and more speed just means producing the same mistakes faster and learning about them later.
