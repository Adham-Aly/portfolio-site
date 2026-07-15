export type Project = {
  title: string;
  // Optional descriptor shown under the title (e.g. what the project is).
  subtitle?: string;
  stack: string[];
  description: string;
  // Placeholder for now. Drop the project URL in here and it becomes a live
  // link automatically (opens in a new tab).
  href: string;
};

export const projects: Project[] = [
  {
    title: "LLM Inference Engine",
    stack: ["C++"],
    description:
      "A transformer language model written from scratch in C++ with no machine-learning libraries, implementing the attention mechanism and core math routines by hand and multithreading them to run efficiently on a standard CPU.",
    href: "",
  },
  {
    title: "Custom x86 Kernel",
    stack: ["C", "x86 Assembly", "QEMU"],
    description:
      "A small operating-system kernel that boots on its own hardware, sets up memory segmentation, and handles interrupts and device drivers to print to the screen and respond to keyboard input in real time.",
    href: "",
  },
  {
    title: "WMOJ",
    subtitle: "Competitive-programming online judge",
    stack: ["TypeScript", "Next.js", "Docker"],
    description:
      "A co-founded, open-source competitive-programming judge that compiles and grades untrusted submissions inside isolated Docker containers, now serving several school-board schools and powering the WOSS Dual Olympiad.",
    href: "",
  },
  {
    title: "Scire",
    subtitle: "Peer-to-peer tutoring LMS",
    stack: ["Next.js", "React", "TypeScript"],
    description:
      "A full-stack tutoring platform with tutor-tutee matching, scheduling, session tracking, and admin dashboards, deployed in an active high-school tutoring club.",
    href: "",
  },
];
