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
updated: '2026-06-11'
status: published
---

A deployed AI system stays under control through three things built in from the start: an off switch, scoped permissions, and a full audit trail. Governance is architecture, not a memo.

## An off switch

The whole system runs inside a harness. One switch pauses everything, instantly. Not a feature request, not a deploy, a switch. If you cannot stop it in one move, it is not governed.

## Scoped permissions

The agent can touch only the systems and actions you have explicitly granted, with the permissions you set. Least privilege, by default. What it cannot reach, it cannot break.

## A full audit trail

Every draft, every approval, every action is logged and reviewable after the fact. You can always answer what happened and who approved it. The record is not optional; it is part of the system.

## The human gate as policy

Anything that leaves the organization passes through a human first. As trust builds, routine low-risk actions get pre-approved, but the gate is policy, not a setting someone forgot. Control survives turnover, scale, and a bad day.
