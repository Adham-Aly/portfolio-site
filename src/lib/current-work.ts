// Works in progress, shown at the top of the home page. Unlike projects, these
// have no live link yet; an item can instead point at a blog post that goes
// into more detail.
export type CurrentWork = {
  title: string;
  // Short descriptor shown under the title.
  subtitle: string;
  stack: string[];
  highlights: string[];
  // Optional slug of a post under /blog, shown as a "Read more" link beside
  // the subtitle.
  postSlug?: string;
};

export const currentWork: CurrentWork[] = [
  {
    title: "Reverse-Mode Autodiff Engine",
    subtitle: "Part of my from-scratch C++ ML library",
    stack: ["C++"],
    highlights: [
      "Building a reverse-mode automatic differentiation engine in C++ that records every operation into a computation graph, then walks it backwards to compute exact gradients for every parameter in a single pass, the core idea behind PyTorch's autograd.",
      "Porting my original handwritten-letter recognition networks onto it, so their gradients come straight from the graph instead of hand-derived backpropagation.",
      "Adding an Adam optimizer to the library alongside it, giving each parameter its own adaptive step size from bias-corrected running averages of its gradients and squared gradients.",
    ],
  },
  {
    title: "Human-Like Chess Transformer",
    subtitle: "Plays like a human at a chosen rating",
    stack: ["Transformers", "Lichess"],
    postSlug: "human-like-chess",
    highlights: [
      "Training a transformer to play chess like a real human at a chosen rating, rather than like a deliberately weakened engine, learning the game from records of real games alone, with no search and no hand-written evaluation.",
      "Planning a model of a few tens of millions of parameters, trained for about a day on a GPU using Lichess games from a single rating band, written out as move text, so it picks up the habits (and the mistakes) of the players it learned from.",
    ],
  },
  {
    title: "Inference Engine",
    subtitle: "From-scratch C++ runtime",
    stack: ["C++"],
    highlights: [
      "Writing a lightweight inference engine in C++ from scratch that loads trained weights and runs a model's forward pass with no ML framework underneath, implementing the core operations (matrix multiplies, activations, softmax) by hand.",
      "Using it to dig into the systems side of ML, like memory layout and cache-friendly loops, to understand where inference time actually goes.",
    ],
  },
];
