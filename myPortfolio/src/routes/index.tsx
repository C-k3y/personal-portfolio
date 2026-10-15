import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Download,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Boxes,
  Code2,
  Wrench,
  GraduationCap,
  Award,
  Lock,
  Droplets,
  HardDrive,
  Terminal,
  Zap,
  Send,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { PortfolioBackground } from "@/components/PortfolioBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kelsey Soi portfolio" },
      {
        name: "description",
        content:
          "Blockchain Developer specializing in Solidity, Foundry, smart contract security, and modern frontend engineering for Web3.",
      },
      { property: "og:title", content: "Kelsey Soi portfolio" },
      {
        property: "og:description",
        content:
          "Building secure Web3 infrastructure and decentralized applications.",
      },
    ],
  }),
  component: PortfolioPage,
});

/* ---------- Shared bits ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mono mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/50 px-3 py-1 text-xs uppercase tracking-widest text-cyan"
      >
        <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl font-semibold sm:text-4xl md:text-5xl text-gradient"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-base text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certs" },
    { href: "#projects", label: "Projects" },
    { href: "#timeline", label: "Timeline" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-40 mx-auto mt-4 max-w-6xl px-4"
    >
      <div className="glass-card flex items-center justify-between rounded-2xl px-4 py-3">
        <a
          href="#top"
          className="mono flex items-center gap-2 text-sm font-semibold"
        >
          <span className="grid size-7 place-items-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
            <Boxes className="size-4" />
          </span>
          <span>kelsey.soi</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-cyan">eth</span>
        </a>
        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition hover:brightness-110 sm:inline-flex"
        >
          Hire me <ArrowRight className="size-3.5" />
        </a>
      </div>
    </motion.header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const stats = [
    { value: "2+", label: "Hackathons" },
    { value: "3+", label: "Certifications" },
    { value: "4+", label: "Blockchain Projects" },
    { value: "OSS", label: "Contributor" },
  ];

  return (
    <section id="top" ref={ref} className="relative px-4 pt-36 pb-24 sm:pt-44">
      <motion.div style={{ y }} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mono mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-success shadow-[0_0_10px_var(--success)]" />
          block #19,438,201 · synced
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">Building Secure Web3</span>
          <br />
          <span className="text-foreground/90">Infrastructure &</span>{" "}
          <span className="text-gradient">Decentralized Apps</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Blockchain Developer specializing in Solidity, Foundry, smart contract
          development, and modern frontend engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition glow-primary hover:brightness-110"
          >
            View Projects
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-medium transition hover:border-primary/50 hover:bg-surface"
          >
            <Download className="size-4" /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <Mail className="size-4" /> Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              className="glass-card rounded-xl p-5"
            >
              <div className="mono text-2xl font-semibold text-foreground sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 overflow-hidden rounded-2xl border border-border/70 bg-[oklch(0.18_0.04_268)] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <span className="mono ml-3 text-xs text-muted-foreground">
              ~ kelsey@web3 — solidity
            </span>
          </div>
          <pre className="mono overflow-x-auto px-5 py-4 text-xs leading-relaxed text-foreground/90 sm:text-sm">
            {`$ forge build
[⠊] Compiling 14 files with Solc 0.8.24
[⠒] Solc finished in 1.42s
`}
            <span className="text-success">Compiler run successful!</span>
            {`

$ forge test --gas-report
Running 24 tests for test/LockLedger.t.sol`}
            <span className="text-success">{`
[PASS] test_storeDocument()  (gas: 84,210)
[PASS] test_encryptedRetrieval() (gas: 41,098)
[PASS] test_accessControl_revertsForOutsider() (gas: 22,540)
`}</span>
            {`

> deploying to `}
            <span className="text-cyan">sepolia</span>
            {` ...
> contract `}
            <span className="text-[oklch(0.78_0.16_80)]">0xA31f...c4Eb</span>
            {` verified ✓`}
          </pre>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// about"
          title="A builder at the edge of Web3."
        />
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card relative aspect-square overflow-hidden rounded-3xl p-1">
              <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.3),transparent_60%)]">
                <div className="mono text-center">
                  <div className="text-7xl font-bold text-gradient">KS</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    0xKelsey.eth
                  </div>
                </div>
              </div>
              {/* corner brackets */}
              {[
                "top-3 left-3 border-l-2 border-t-2",
                "top-3 right-3 border-r-2 border-t-2",
                "bottom-3 left-3 border-l-2 border-b-2",
                "bottom-3 right-3 border-r-2 border-b-2",
              ].map((c) => (
                <span
                  key={c}
                  className={`absolute size-5 border-primary/70 ${c}`}
                />
              ))}
            </div>

            <div className="mono mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>chain: ethereum</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 animate-pulse rounded-full bg-success" />
                available
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-foreground/85"
          >
            <p>
              Hi, I'm{" "}
              <span className="font-semibold text-foreground">Kelsey Soi</span>.
            </p>
            <p>
              A Blockchain Developer passionate about building decentralized
              applications, smart contracts, and secure digital infrastructure.
            </p>
            <p className="text-muted-foreground">
              My journey started with frontend development and evolved into
              blockchain engineering where I now focus on{" "}
              <span className="text-foreground">Solidity</span>,{" "}
              <span className="text-foreground">smart contract security</span>,{" "}
              <span className="text-foreground">cryptography</span>, and{" "}
              <span className="text-foreground">Web3 development</span>.
            </p>

            <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: "Security focused" },
                { icon: Activity, label: "On-chain native" },
                { icon: Code2, label: "Web3 Builder" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 rounded-xl border border-border/60 bg-surface/50 px-3 py-2 text-sm"
                >
                  <b.icon className="size-4 text-cyan" />
                  {b.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */

const skillGroups = [
  {
    icon: Boxes,
    title: "Blockchain",
    color: "text-primary",
    items: ["Solidity", "Foundry", "Smart Contracts", "Ethereum"],
  },
  {
    icon: Code2,
    title: "Frontend",
    color: "text-cyan",
    items: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "text-[oklch(0.78_0.16_80)]",
    items: ["Linux", "Git", "GitHub", "VS Code"],
  },
  {
    icon: GraduationCap,
    title: "Learning",
    color: "text-violet",
    items: ["ZK Proofs", "Cryptography", " Blockchain Security"],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// stack"
          title="The toolkit."
          description="A continuously evolving stack for shipping production-grade decentralized systems."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/60 p-6 transition hover:border-primary/40"
            >
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div
                className={`mb-5 inline-flex size-10 items-center justify-center rounded-xl bg-surface-elevated ${g.color}`}
              >
                <g.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <ul className="mono mt-4 space-y-2 text-sm text-muted-foreground">
                {g.items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-primary/60" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */

const certs = [
  {
    issuer: "HackQuest",
    title: "Ethereum Builder",
    color: "from-primary/40 to-cyan/20",
  },
  {
    issuer: "Cyfrin Updraft",
    title: "Blockchain Basics",
    color: "from-violet/40 to-primary/20",
  },
  {
    issuer: "Cyfrin Updraft",
    title: "Solidity Fundamentals",
    color: "from-cyan/40 to-violet/20",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// credentials"
          title="Verified on-chain learning."
          description="Certifications from leading Web3 education platforms — each independently verifiable."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/70 p-6 transition hover:border-primary/60 hover:shadow-[0_0_0_1px_var(--primary),0_20px_60px_-20px_color-mix(in_oklab,var(--primary)_60%,transparent)]"
            >
              <div
                className={`absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br ${c.color} opacity-60 blur-3xl transition group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <Award className="size-7 text-primary" />
                  <span className="mono inline-flex items-center gap-1.5 rounded-full border border-success/40 bg-success/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-success">
                    <CheckCircle2 className="size-3" /> verified
                  </span>
                </div>
                <div className="mono mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                  {c.issuer}
                </div>
                <h3 className="mt-1 text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Verified Certificate of completion
                </p>
                <a
                  href="#"
                  className="mono mt-6 inline-flex items-center gap-1.5 text-sm text-primary transition group-hover:gap-2.5"
                >
                  View Credential <ExternalLink className="size-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */

const projects = [
  {
    icon: Lock,
    name: "LockLedger",
    tagline: "Escrow freelancing Platform",
    description:
      "Freelance Securely and transparently on-chain. Built with Solidity, Foundry, and Ethers.js.",
    features: [
      "Solidity Smart Contracts",
      "Ethers.js Wallet Integration",
      "Secure Payments",
      "File Encryption",
      "Decentralized Architecture",
    ],
    featured: true,
  },
  {
    icon: Droplets,
    name: "AquaTrace",
    tagline: "Transparent water tracking on-chain",
    description:
      "A transparent blockchain-based tracking platform for water resource accountability.",
    features: ["Public Ledger", "IoT Ingest", "Analytics"],
  },
  {
    icon: HardDrive,
    name: "Terminus",
    tagline: "Decentralized Digital Inheritance",
    description:
      "Terminus acts as a Smart Vault guarded by an AI Lawyer powered by blockchain primitives.",
    features: [
      "Smart Contracts (The Vault)",
      "Backend & AI (The Lawyer)",
      "Frontend (The Client UI)",
      "Decentralized Storage & Encryption",
    ],
  },
  {
    icon: Zap,
    name: "WattChain",
    tagline: "P2P Energy Swap",
    description:
      "Empowering Communities Through Peer-to-Peer Renewable Energy Trading.",
    features: ["Smart Settlement", "Decentralised Marketplace", "AI & IOT"],
  },
];

function Projects() {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// projects"
          title="Featured builds."
          description="Hackathon-tested and production-curious. A selection of recent Web3 work."
        />

        {/* Featured */}
        {projects
          .filter((p) => p.featured)
          .map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-card group relative mb-8 overflow-hidden rounded-3xl p-8 md:p-10"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.18),transparent_60%)]" />
              <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
                <div>
                  <div className="mono mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary">
                    <span className="size-1.5 rounded-full bg-primary" />{" "}
                    featured
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
                      <p.icon className="size-6" />
                    </span>
                    <div>
                      <h3 className="text-3xl font-semibold">{p.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {p.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-base text-muted-foreground">
                    {p.description}
                  </p>

                  <ul className="mono mt-6 grid gap-2 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 rounded-lg border border-border/50 bg-surface/40 px-3 py-2 text-xs"
                      >
                        <CheckCircle2 className="size-3.5 text-cyan" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                    >
                      Live Demo <ExternalLink className="size-3.5" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface/60 px-4 py-2.5 text-sm font-medium transition hover:border-primary/50"
                    >
                      <Github className="size-4" /> GitHub
                    </a>
                  </div>
                </div>

                {/* Mock contract panel */}
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-[oklch(0.18_0.04_268)]">
                  <div className="mono flex items-center justify-between border-b border-border/60 px-4 py-2.5 text-xs text-muted-foreground">
                    <span>Escrow.sol</span>
                    <span className="text-cyan">0xA31f…c4Eb</span>
                  </div>
                  <pre className="mono overflow-x-auto px-5 py-4 text-xs leading-relaxed">
                    {`pragma solidity `}
                    <span className="text-cyan">^0.8.24</span>
                    {`;

contract `}
                    <span className="text-[oklch(0.78_0.16_80)]">
                      Escrow is ReentrancyGuard
                    </span>
                    {` {
  enum State{
        AWAITING_PAYMENT,
        IN_PROGRESS,
        COMPLETED,
        DISPUTED
  }
  `}
                    {`
    address public immutable client;
    address public immutable freelancer;
    uint256 public immutable amount;
    State public state;
}
    `}
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
          {projects
            .filter((p) => !p.featured)
            .map((p, i) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border/60 bg-surface/60 p-6 transition hover:border-primary/40"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-surface-elevated text-cyan ring-1 ring-border/60">
                    <p.icon className="size-5" />
                  </span>
                  <a
                    href="#"
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    <Github className="size-4" />
                  </a>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
                <p className="mt-3 text-sm text-foreground/75">
                  {p.description}
                </p>
                <div className="mono mt-4 flex flex-wrap gap-1.5">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-md border border-border/60 bg-surface px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Timeline ---------- */

const timeline = [
  { year: "2026", title: "DEV3Pack Hackathon", sub: "Terminal Addresses" },
  {
    year: "2026",
    title: "Continuous Web3 Learning",
    sub: "ZK-Proof, Cryptography, Security",
  },
  { year: "2025", title: "DeKUT Hack & Rise", sub: "P2P Energy Swap" },
];

function Timeline() {
  return (
    <section id="timeline" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// timeline"
          title="Hackathons & Milestones."
        />
        <div className="grid gap-12 md:grid-cols-2">
          {/* Hackathon timeline */}
          <div className="relative">
            <div className="mono mb-6 text-sm text-muted-foreground">
              2025-2026
            </div>
            <div className="relative pl-6">
              <span className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-cyan to-violet" />
              {timeline.map((t, i) => (
                <motion.div
                  key={t.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="relative mb-8 last:mb-0"
                >
                  <span className="absolute -left-[18px] top-1.5 size-3 rounded-full bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_25%,transparent)]" />
                  <h4 className="font-semibold">{t.title}</h4>
                  <p className="text-sm text-muted-foreground">{t.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Learning roadmap */}
          <LearningJourney />
        </div>
      </div>
    </section>
  );
}

function LearningJourney() {
  const steps = [
    "Frontend",
    "React",
    "Blockchain Basics",
    "Solidity",
    "Foundry",
    "Smart Contract Security",
    "Cryptography",
    "Zero Knowledge Proofs",
  ];
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="mono mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
        <span>learning_journey.log</span>
        <span className="text-success">↑ growth</span>
      </div>
      <ol className="relative space-y-2">
        {steps.map((s, i) => (
          <motion.li
            key={s}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="flex items-center gap-3 rounded-lg border border-border/40 bg-surface/40 px-3 py-2"
            style={{ marginLeft: `${i * 6}px` }}
          >
            <span className="mono w-6 text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />
            <span className="text-sm">{s}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- GitHub activity ---------- */

const languages = [
  { name: "Solidity", pct: 40, color: "var(--primary)" },
  { name: "TypeScript", pct: 30, color: "var(--cyan)" },
  { name: "JavaScript", pct: 15, color: "oklch(0.78 0.16 80)" },
  { name: "CSS", pct: 10, color: "var(--violet)" },
  { name: "Other", pct: 5, color: "var(--muted-foreground)" },
];

function GitHubActivity() {
  // contribution heatmap
  const cells = Array.from({ length: 7 * 26 }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const v = seed / 233280;
    const level = v < 0.5 ? 0 : v < 0.7 ? 1 : v < 0.85 ? 2 : v < 0.95 ? 3 : 4;
    return level;
  });
  const levelStyle = [
    "bg-surface/60",
    "bg-primary/25",
    "bg-primary/50",
    "bg-primary/75",
    "bg-primary",
  ];

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// activity"
          title="GitHub activity."
          description="Shipping consistently across smart contracts, tooling and frontend."
        />
        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass-card overflow-hidden rounded-2xl p-6"
          >
            <div className="mono mb-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>contributions</span>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                @ C-k3y
                <ExternalLink className="size-3" />
              </a>
            </div>
            <div className="overflow-x-auto">
              <div
                className="grid w-max gap-1"
                style={{
                  gridTemplateColumns: "repeat(26, minmax(0, 1fr))",
                  gridAutoFlow: "column",
                  gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                }}
              >
                {cells.map((l, i) => (
                  <span
                    key={i}
                    className={`size-3 rounded-[3px] ${levelStyle[l]}`}
                  />
                ))}
              </div>
            </div>
            <div className="mono mt-4 flex items-center justify-end gap-2 text-[10px] text-muted-foreground">
              <span>less</span>
              {levelStyle.map((c, i) => (
                <span key={i} className={`size-3 rounded-[3px] ${c}`} />
              ))}
              <span>more</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="glass-card rounded-2xl p-6"
          >
            <div className="mono mb-4 text-xs uppercase tracking-widest text-muted-foreground">
              top languages
            </div>
            <ul className="space-y-3">
              {languages.map((l, i) => (
                <li key={l.name}>
                  <div className="mono flex items-center justify-between text-sm">
                    <span>{l.name}</span>
                    <span className="text-muted-foreground">{l.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-elevated">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08 }}
                      className="h-full rounded-full"
                      style={{ background: l.color }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Basic local validation; no backend wired yet.
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:kelcee254@gmail.com",
      value: "kelcee254@gmail.com",
    },
    { icon: Linkedin, label: "LinkedIn", href: "#", value: "/in/kelseysoi" },
    { icon: Github, label: "GitHub", href: "#", value: "@C-k3y" },
    { icon: Twitter, label: "X / Twitter", href: "#", value: "@kelseysoi" },
  ];

  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// contact"
          title="Let's build something amazing."
          description="Open to Web3 Development roles, Frontend Development and hackathon collaborations."
        />
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6"
          >
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex items-center gap-4 rounded-xl border border-border/50 bg-surface/40 p-4 transition hover:border-primary/50 hover:bg-surface"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                      <s.icon className="size-5" />
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{s.label}</div>
                      <div className="mono text-xs text-muted-foreground">
                        {s.value}
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            onSubmit={onSubmit}
            className="glass-card rounded-2xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
                  name
                </span>
                <input
                  required
                  maxLength={80}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="block">
                <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
                  email
                </span>
                <input
                  required
                  type="email"
                  maxLength={120}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
                message
              </span>
              <textarea
                required
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full resize-none rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </label>
            <div className="mt-5 flex items-center justify-between">
              <span className="mono text-xs text-muted-foreground">
                {status === "sent" ? (
                  <span className="inline-flex items-center gap-1.5 text-success">
                    <CheckCircle2 className="size-3.5" /> message queued · tx
                    pending
                  </span>
                ) : (
                  "encrypted in transit"
                )}
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition glow-primary hover:brightness-110"
              >
                Send <Send className="size-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <div className="mono">
          © {new Date().getFullYear()} kelsey soi · Always learning. Always
          building
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="transition hover:text-foreground">
            <Github className="size-4" />
          </a>
          <a href="#" className="transition hover:text-foreground">
            <Linkedin className="size-4" />
          </a>
          <a href="#" className="transition hover:text-foreground">
            <Twitter className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
      <PortfolioBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Timeline />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
