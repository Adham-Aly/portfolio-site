export type Project = {
  title: string;
  // Optional descriptor shown under the title (e.g. what the project is).
  subtitle?: string;
  stack: string[];
  highlights: string[];
  // The live project. The title becomes a link to it (opens in a new tab).
  href: string;
  // Optional source repository, shown as a "Source" link beside the subtitle.
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Multi-Agent Coding Workflow",
    subtitle: "Open-source agent skill",
    stack: ["Claude Code", "Codex", "Cursor", "Jev"],
    href: "https://github.com/Adham-Aly/implement-loop",
    highlights: [
      "Built an open-source agent skill for Claude Code, Codex, and Cursor that runs a coding task through planning, implementation, and review, each phase owned by an orchestrator agent with up to 4 subagents, so the main session only briefs them, gates their reports, and talks to the user.",
      "Routes each subagent to a model and reasoning effort with Jev, TypeSafe's fast decision model, sending lookups and small edits to a cheap model and design work to a frontier model at high effort, cutting the cost of a run.",
      "Uses the same decision model to choose when to compact an agent's context, keeping decisions, blockers, and next steps and dropping stale tool output, so long runs stay inside the context window.",
      "Runs every task on its own git worktree and branch, hands context between phases through short files instead of the main session, and has the review phase run the project's own tests and an end-to-end check before offering to commit, push, and merge.",
    ],
  },
  {
    title: "WMOJ",
    subtitle: "Competitive-programming online judge",
    stack: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
    href: "https://wmoj.ca",
    repo: "https://github.com/wmoj",
    highlights: [
      "Co-founded WMOJ, an open-source competitive-programming judge with 80 problems, timed contests, and live leaderboards, used by 3+ Halton District School Board schools and running the WOSS Dual Olympiad and TriOlympiad.",
      "Built the grading server that compiles and runs untrusted Python and C++ code inside an nsjail sandbox, with a custom seccomp filter that blocks network access and process tampering, plus CPU, memory, and output limits.",
      "Found and fixed a bug that had graded 94 real timeouts as wrong answers, writing a small C program that records each run's exact CPU time and memory use.",
      "Wrote 190+ unit tests and 39 recorded end-to-end grading scenarios that CI replays against the real Docker image on every push and nightly.",
      "Ran a security review of the web app that fixed 70 defects, adding 64 PostgreSQL row-level security policies and closing holes that exposed answer keys and student code and let anyone forge submissions.",
    ],
  },
  {
    title: "Scire",
    subtitle: "Peer-to-peer tutoring LMS",
    stack: ["Next.js", "React", "TypeScript"],
    href: "https://app.tutoringapp.ca",
    repo: "https://github.com/scire-apps",
    highlights: [
      "Built Scire, a full-stack tutoring learning-management system in Next.js, React, and TypeScript, with tutor-tutee matching and scheduling, session tracking, and admin dashboards.",
      "Deployed it into active use at a high-school tutoring club to coordinate and track sessions; currently pursuing Halton District School Board approval to expand district-wide.",
    ],
  },
];
