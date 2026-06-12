---
title: Governance in deployed systems
level: advanced
order: 4
koan: >-
  Off switch, scoped permissions, audit trail. How shipped AI stays under
  control.
summary: >-
  A deployed AI system stays under control through three things built in from
  the start: an off switch, scoped permissions, and a full audit trail.
  Governance is architecture, not a policy memo.
faq:
  - q: What does the off switch actually do?
    a: >-
      It pauses the whole harness at once: no drafts, no actions, nothing.
      Because everything runs inside one harness, stopping it is a single move,
      not a scramble across systems.
  - q: How do we limit what the agent can do?
    a: >-
      Scoped permissions, set explicitly. The agent reaches only the tools and
      actions you grant, with the access you allow. Least privilege is the
      default, so the blast radius stays small.
  - q: Is there a record of every action?
    a: >-
      Yes. Every draft, approval, and action is logged and reviewable. After the
      fact you can always reconstruct what happened and who signed off.
  - q: Can routine actions skip the human?
    a: >-
      Only ones you have explicitly pre-approved as low-risk. Anything leaving
      the organization passes through a human first. That gate is policy baked
      into the system, not a toggle.
date: '2026-06-11'
updated: '2026-06-12'
status: published
---

A deployed AI system stays under control through three things, and they only work if they were built in from the start: an off switch, scoped permissions, and a complete audit trail. Governance here is a property of the architecture, not a paragraph in a policy doc.

## An off switch

Because the whole system runs inside one harness, there is a single way to stop all of it — every agent, every pending action — at once. The test is blunt: if halting the system takes a deploy, a code change, or a call to three different teams, you don't have an off switch, you have a hope. One harness as the only path to action is what keeps the stop a single move.

## Scoped permissions

The agent reaches only the tools and actions you have explicitly granted, at the access level you set, and nothing else exists for it to use. Default to least privilege: grant a capability because a task needs it, not because it might be handy later. That is what bounds the blast radius when something goes wrong — and with a non-deterministic actor, build as though it eventually will.

## A full audit trail

Every draft, approval, and action is logged and reviewable after the fact, so you can reconstruct exactly what happened and who signed off on it. Treat the log as part of the system, not a debugging nicety. The first serious question after an incident is always what the system did, and the second is who approved it.

## The human gate as policy

Anything leaving the organization passes a human first. You can pre-approve specific low-risk actions as trust grows, but the gate is encoded in the system, not left to whoever remembers to be careful. Built this way, control doesn't ride on the current headcount, the current scale, or anyone having a good day.
