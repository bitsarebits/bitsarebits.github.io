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

interface ExperienceItem {
    title: string;
    organization: string;
    period: string;
    tech: string;
    description: string;
    link?: string;
    linkLabel?: string;
}

interface ProjectItem {
    title: string;
    tech: string;
    description: string;
    link?: string;
    linkLabel?: string;
}

const EXPERIENCE: ExperienceItem[] = [
    {
        title: "Google Summer of Code 2026 Contributor",
        organization: "NumFOCUS / Gridap.jl",
        period: "May 2026 – Aug 2026",
        tech: "Julia · Lux.jl · Reactant.jl (XLA) · React · TypeScript",
        description:
            "Implemented neural operator architectures for reduced-order modelling of PDEs with XLA hardware acceleration, and built a full-stack web tool to configure runs and inspect metrics. This work started the open-source package NonlinearROMs.jl, which I continue to maintain with the research team.",
        link: "https://github.com/nichomueller/NonlinearROMs.jl",
        linkLabel: "NonlinearROMs.jl",
    },
    {
        title: "Undergraduate Research Intern (B.Sc. Thesis)",
        organization: "UPC Barcelona · TU Delft · CNRS",
        period: "Mar 2026 – Oct 2026",
        tech: "Python · Julia · PINNs · Neural Operators · FEM",
        description:
            "Studied Physics-Informed Neural Networks and Neural Operators as surrogate models for Finite Element solvers applied to cell migration PDEs, writing training and benchmarking pipelines to evaluate runtime speed and numerical accuracy.",
    },
    {
        title: "B.Sc. in Computer Science (109/110) & Curricular Internship",
        organization: "University of Verona · EDALAB s.r.l.",
        period: "Sep 2023 – Oct 2026",
        tech: "Systems & Networks · Network Security · Software Engineering · AI",
        description:
            "Completed coursework in operating systems, computer architecture, network programming and security, software engineering, and Ethereum smart contracts, alongside an 80-hour on-site traineeship at EDALAB working on React and TypeScript web applications.",
    },
    {
        title: "Logistics Coordinator & Operations",
        organization: "Negrini Lda (Lisbon) · ITS Academy LAST (Verona)",
        period: "2020 – Jul 2023",
        tech: "B2B Operations · Route Planning · Supply Chain",
        description:
            "Earned a two-year technical diploma in Logistics and Supply Chain Management (EQF Level 5) and worked full-time in Lisbon after an Erasmus+ traineeship, coordinating daily B2B deliveries, truck routes, and warehouse operations.",
    },
];

const PROJECTS: ProjectItem[] = [
    {
        title: "Sentinel-AI: Multithreaded Packet Analyzer",
        tech: "C11 · Linux · libpcap · pthreads",
        description:
            "Linux network packet capture and parsing tool built to explore low-level networking and concurrency. Uses a multithreaded producer-consumer pipeline with a bounded ring buffer and POSIX mutex/condition variables to parse Ethernet, IPv4/IPv6, TCP, and UDP headers.",
        link: "https://github.com/bitsarebits/sentinel-ai",
        linkLabel: "GitHub",
    },
    {
        title: "Native Simulation & Inference Pipeline",
        tech: "Rust · Python · Gymnasium",
        description:
            "Headless 2D simulation worker in Rust connected to a Python Gymnasium environment via a binary pipe protocol for reinforcement learning experiments, featuring standalone forward-pass policy inference in Rust without runtime C++ or Python dependencies.",
    },
    {
        title: "Ethereum ERC-721 Marketplace",
        tech: "Solidity · Foundry · Hardhat · TypeScript · Viem",
        description:
            "Smart contract project implementing an ERC-721 collection and permissionless marketplace (minting, listings, purchases, fee management), paired with Foundry unit tests, Hardhat integration tests, and a TypeScript CLI.",
        link: "https://github.com/bitsarebits/MarketplaceNFT",
        linkLabel: "GitHub",
    },
];

const SKILLS: string[] = [
    "C",
    "Rust",
    "Python",
    "Julia",
    "TypeScript",
    "Solidity",
    "Linux / POSIX",
    "TCP/IP & Networking",
    "React",
    "Lux.jl / Reactant.jl (XLA)",
    "PyTorch",
    "SQL",
    "Git & CI/CD",
];

export default function App() {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            if (saved === "dark" || saved === "light") {
                return saved === "dark";
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);

    // Listener for OS theme change
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            setDarkMode(e.matches);
            localStorage.removeItem("theme");
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = () => {
        setDarkMode((prev) => {
            const next = !prev;
            localStorage.setItem("theme", next ? "dark" : "light");
            return next;
        });
    };

    return (
        <div className="min-h-screen font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-400">
            {/* Top Navbar */}
            <header className="sticky top-0 z-30 backdrop-blur-md bg-slate-50/80 dark:bg-zinc-950/80 border-b border-slate-200/80 dark:border-zinc-800/80">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <span className="font-mono font-medium text-sm tracking-tight text-slate-800 dark:text-zinc-200">
                        isaia.zollo
                        <span className="text-blue-600 dark:text-blue-400">
                            ~
                        </span>
                        $
                    </span>

                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* GitHub SVG Icon */}
                        <a
                            href="https://github.com/bitsarebits"
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
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
                            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
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
                            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                        <div className="h-4 w-[1px] bg-slate-200 dark:bg-zinc-800 mx-1" />
                        <button
                            onClick={toggleTheme}
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
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12 sm:space-y-16">
                {/* Hero / Bio Section */}
                <section className="space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span>Verona, Italy</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-zinc-900 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-800">
                            <GraduationCap className="w-3.5 h-3.5 shrink-0 text-slate-500 dark:text-zinc-400" />
                            <span>B.Sc. Computer Science · 109/110</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
                            Hi, I'm Isaia Zollo.
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
                            Computer Science graduate at the University of
                            Verona and{" "}
                            <span className="text-slate-900 dark:text-zinc-200 font-medium">
                                Google Summer of Code 2026
                            </span>{" "}
                            contributor under NumFOCUS.
                        </p>
                        <p className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
                            Through my thesis and open-source work, I focused on{" "}
                            <span className="text-slate-800 dark:text-zinc-200 font-medium">
                                scientific computing
                            </span>
                            ,{" "}
                            <span className="text-slate-800 dark:text-zinc-200 font-medium">
                                machine learning for physical systems
                            </span>
                            , and{" "}
                            <span className="text-slate-800 dark:text-zinc-200 font-medium">
                                full-stack web tooling
                            </span>
                            . Alongside this, I have a strong interest in{" "}
                            <span className="text-slate-800 dark:text-zinc-200 font-medium">
                                systems programming
                            </span>{" "}
                            (C, Rust, Linux),{" "}
                            <span className="text-slate-800 dark:text-zinc-200 font-medium">
                                networking and security
                            </span>
                            , and blockchain protocols. Before university, I
                            worked full-time in Lisbon coordinating B2B
                            logistics operations.
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
                            Open Source Work — GSoC 2026 @ NumFOCUS / Gridap.jl
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
                                    GSoC 2026 Technical Notes
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                                    9-part development log covering the
                                    implementation of DeepONet, NOMAD, FNO, GNO,
                                    and HAMLET architectures for PDEs in Julia.
                                </p>
                            </div>
                            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center text-xs font-medium text-blue-600 dark:text-blue-400">
                                Read the development series →
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
                                    Experiment Dashboard
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                                    Web interface built with React, TypeScript,
                                    and Oxygen.jl to configure training runs and
                                    inspect simulation metrics.
                                </p>
                            </div>
                            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                Open web dashboard →
                            </div>
                        </a>
                    </div>
                </section>

                {/* Experience & Education */}
                <section className="space-y-4">
                    <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Experience & Education
                    </h2>

                    <div className="space-y-3">
                        {EXPERIENCE.map((item) => (
                            <div
                                key={item.title}
                                className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                            >
                                <div className="space-y-1.5">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="font-semibold text-slate-900 dark:text-zinc-100">
                                            {item.title}
                                        </span>
                                        <span className="text-xs text-slate-500 dark:text-zinc-400">
                                            · {item.organization} ({item.period}
                                            )
                                        </span>
                                    </div>
                                    <div>
                                        <span className="inline-block text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                                            {item.tech}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed pt-0.5">
                                        {item.description}
                                    </p>
                                </div>
                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="self-start shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 pt-1"
                                    >
                                        <span>{item.linkLabel || "Link"}</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Selected Technical Explorations */}
                <section className="space-y-4">
                    <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Selected Technical Explorations
                    </h2>

                    <div className="space-y-3">
                        {PROJECTS.map((project) => (
                            <div
                                key={project.title}
                                className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="space-y-1.5">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="font-semibold text-slate-900 dark:text-zinc-100">
                                            {project.title}
                                        </span>
                                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                                            {project.tech}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="self-start sm:self-center pt-1 sm:pt-0 shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
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
                    <span>© {new Date().getFullYear()} Isaia Zollo</span>
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
