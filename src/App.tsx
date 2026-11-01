import React, { useState, useEffect } from "react";
import {
    Mail,
    ExternalLink,
    BookOpen,
    Activity,
    Sun,
    Moon,
    MapPin,
    GraduationCap,
    ArrowUpRight,
} from "lucide-react";

interface ProjectItem {
    title: string;
    tech: string;
    description: string;
    link?: string;
    linkLabel?: string;
}

const PROJECTS: ProjectItem[] = [
    {
        title: "NonlinearROMs.jl",
        tech: "Julia · Lux.jl · Reactant.jl",
        description:
            "Core neural operator architectures (DeepONet, NOMAD) and XLA-compiled training loops adopted as the foundation for Gridap's deep learning ROM package.",
        link: "https://github.com/nichomueller/NonlinearROMs.jl",
        linkLabel: "Repository",
    },
    {
        title: "Sentinel-AI: Multithreaded Packet Analyzer",
        tech: "C11 · libpcap · pthreads · ONNX",
        description:
            "Producer-consumer packet capture engine in C11 using a POSIX ring buffer, manual L2–L4 header parsing, and native ONNX Runtime C inference.",
        link: "https://github.com/bitsarebits/sentinel-ai",
        linkLabel: "GitHub",
    },
    {
        title: "Rust Simulation & Native RL Inference",
        tech: "Rust · Python · Gymnasium",
        description:
            "Headless 2D simulation in Rust connected to Python Gymnasium via binary protocol, featuring zero-dependency native CNN+MLP policy inference.",
    },
    {
        title: "Undergraduate Research Intern (B.Sc. Thesis)",
        tech: "UPC Barcelona · TU Delft · CNRS",
        description:
            "Benchmarked Physics-Informed Neural Networks (PINNs) and Neural Operators against classical Finite Element solvers for cell migration PDEs.",
    },
];

const SKILLS: string[] = [
    "C11",
    "Rust",
    "Julia",
    "TypeScript",
    "Python",
    "Linux / POSIX",
    "TCP/IP & L2–L4",
    "React",
    "Lux.jl / PyTorch",
];

export default function App() {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            if (saved) return saved === "dark";
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-400">
            {/* Top Navbar */}
            <header className="sticky top-0 z-30 backdrop-blur-md bg-slate-50/80 dark:bg-zinc-950/80 border-b border-slate-200/80 dark:border-zinc-800/80">
                <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="font-mono font-medium text-sm tracking-tight text-slate-800 dark:text-zinc-200">
                        isaia.zollo
                        <span className="text-blue-600 dark:text-blue-400">
                            ~
                        </span>
                        $
                    </span>

                    <div className="flex items-center gap-4">
                        {/* GitHub SVG Icon */}
                        <a
                            href="https://github.com/bitsarebits"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                            aria-label="GitHub"
                        >
                            <svg
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>

                        {/* LinkedIn SVG Icon */}
                        <a
                            href="https://linkedin.com/in/isaia-zollo"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>

                        <a
                            href="mailto:isaia.zollo@gmail.com"
                            className="text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                        <div className="h-4 w-[1px] bg-slate-200 dark:bg-zinc-800 mx-1" />
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-lg bg-slate-200/60 dark:bg-zinc-800/60 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <Sun className="w-4 h-4" />
                            ) : (
                                <Moon className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-3xl mx-auto px-6 py-12 md:py-16 space-y-16">
                {/* Hero / Bio Section */}
                <section className="space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Verona, Italy · Relocating to Munich</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-zinc-900 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-800">
                            <GraduationCap className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
                            <span>B.Sc. CS (109/110) · Future M.Sc. @ TUM</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
                            Hi, I'm Isaia Zollo.
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
                            Computer Science graduate (
                            <span className="text-slate-900 dark:text-zinc-200 font-medium">
                                109/110
                            </span>
                            ) at the University of Verona and{" "}
                            <span className="text-slate-900 dark:text-zinc-200 font-medium">
                                Google Summer of Code 2026
                            </span>{" "}
                            contributor under NumFOCUS.
                        </p>
                        <p className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
                            My work sits at the intersection of{" "}
                            <span className="text-slate-800 dark:text-zinc-200 font-medium">
                                systems programming
                            </span>
                            ,{" "}
                            <span className="text-slate-800 dark:text-zinc-200 font-medium">
                                software infrastructure
                            </span>
                            , and{" "}
                            <span className="text-slate-800 dark:text-zinc-200 font-medium">
                                scientific machine learning (SciML)
                            </span>
                            . Whether it's parsing raw network packets in C11,
                            running native neural policies in Rust, or compiling
                            neural operators with XLA in Julia, I enjoy building
                            fast, reliable software from the ground up.
                        </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                        {SKILLS.map((skill) => (
                            <span
                                key={skill}
                                className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-200/70 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Featured GSoC Hub */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                            Featured Open Source Work — GSoC 2026 @ NumFOCUS /
                            Gridap.jl
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {/* Card 1: GSoC Devlog Blog */}
                        <a
                            href="https://bitsarebits.github.io/gsoc2026-gridap/"
                            className="group relative p-6 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-blue-500/60 dark:hover:border-blue-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                                <h3 className="font-semibold text-lg text-slate-900 dark:text-zinc-100">
                                    GSoC 2026 Technical Blog
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                                    Complete engineering devlog covering the
                                    design of DeepONet, NOMAD, and Graph Neural
                                    Operators for nonlinear PDEs in Julia.
                                </p>
                            </div>
                            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center text-xs font-medium text-blue-600 dark:text-blue-400">
                                Read the 9-part series →
                            </div>
                        </a>

                        {/* Card 2: Interactive Dashboard */}
                        <a
                            href="https://bitsarebits.github.io/Gridap-NeuralOperators-GSoC2026/"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative p-6 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                                        <Activity className="w-5 h-5" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                                <h3 className="font-semibold text-lg text-slate-900 dark:text-zinc-100">
                                    Interactive Experiment Gallery
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                                    Live web orchestrator & telemetry dashboard
                                    built with React and Oxygen.jl to inspect
                                    PDE simulations and neural operator metrics.
                                </p>
                            </div>
                            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                Launch online dashboard →
                            </div>
                        </a>
                    </div>
                </section>

                {/* Selected Engineering & Research */}
                <section className="space-y-4">
                    <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Selected Projects & Research
                    </h2>

                    <div className="space-y-3">
                        {PROJECTS.map((project) => (
                            <div
                                key={project.title}
                                className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="space-y-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="font-semibold text-slate-900 dark:text-zinc-100">
                                            {project.title}
                                        </span>
                                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                                            {project.tech}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-zinc-400">
                                        {project.description}
                                    </p>
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        <span>
                                            {project.linkLabel || "Link"}
                                        </span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="pt-8 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-500">
                    <span>
                        © {new Date().getFullYear()} Isaia Zollo. Built with
                        React, TypeScript & Tailwind CSS.
                    </span>
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:isaia.zollo@gmail.com"
                            className="hover:text-slate-800 dark:hover:text-zinc-300"
                        >
                            isaia.zollo@gmail.com
                        </a>
                        <span>·</span>
                        <a
                            href="https://github.com/bitsarebits"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-slate-800 dark:hover:text-zinc-300"
                        >
                            github.com/bitsarebits
                        </a>
                    </div>
                </footer>
            </main>
        </div>
    );
}
