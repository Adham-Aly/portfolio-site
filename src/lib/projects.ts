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
    title: "Character Identification Neural Network from Scratch",
    stack: ["C++"],
    description:
      "From scratch flattened multi-layer perceptron trained on the MNIST dataset to recognize numbers and letters. Implemented completely from scratch in C++ with no libraries.",
    href: "",
  },
  {
    title: "GPT-Style Transformer Language Model",
    stack: ["C++"],
    description:
      "Built a GPT-style transformer language model from scratch in C++ with no external libraries, implementing multi-head self-attention, layer normalization, manual backpropagation, and Adam optimization to train a character-level text generator.",
    href: "",
  },
  {
    title: "WMOJ",
    subtitle: "Competitive-programming online judge",
    stack: ["TypeScript", "Next.js", "Docker"],
    description:
      "A co-founded, open-source competitive-programming judge that compiles and grades untrusted submissions inside isolated Docker containers, now serving several school-board schools and powering the WOSS Dual Olympiad.",
    href: "https://github.com/WMOJ",
  },
  {
    title: "Scire",
    subtitle: "Peer-to-peer tutoring LMS",
    stack: ["Next.js", "React", "TypeScript"],
    description:
      "A full-stack tutoring platform with tutor-tutee matching, scheduling, session tracking, and admin dashboards, deployed in an active high-school tutoring club.",
    href: "https://app.tutoringapp.ca/",
  },
];
