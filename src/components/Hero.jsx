import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, -40]);
  const y2 = useTransform(scrollY, [0, 400], [0, -80]);

  // Animated counters
  const [stats, setStats] = useState({ cases: 0, clients: 0, years: 0 });
  useEffect(() => {
    const targets = { cases: 850, clients: 1200, years: 25 };
    const duration = 1500;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setStats({
        cases: Math.round(targets.cases * p),
        clients: Math.round(targets.clients * p),
        years: Math.round(targets.years * p),
      });
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(245,158,11,0.1),transparent_60%),radial-gradient(600px_circle_at_80%_-10%,rgba(59,130,246,0.07),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 style={{ y: y1 }} className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Your Trusted Counsel for Complex Matters
          </motion.h1>
          <motion.p style={{ y: y2 }} className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            We blend rigorous legal expertise with pragmatic strategy to protect what matters most. Clear advice, decisive action, and unwavering advocacy.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-amber-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-amber-600/20 hover:bg-amber-500 transition">
              Book a Consultation
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 px-5 py-3 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
              Explore Practice Areas
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <StatCard label="Cases Won" value={stats.cases.toLocaleString()} />
            <StatCard label="Satisfied Clients" value={stats.clients.toLocaleString()} />
            <StatCard label="Years of Excellence" value={stats.years.toLocaleString()} />
          </div>

          <ul className="mt-8 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="text-amber-600" size={18} /> Confidential, secure, and client-first approach</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-amber-600" size={18} /> Transparent fees and flexible engagement</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-amber-600" size={18} /> Senior attorneys on every matter</li>
          </ul>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden shadow-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE4MTAwNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="absolute bottom-6 left-6 right-6">
            <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-xl p-5 text-white">
              <p className="text-sm">“Precision, empathy, and relentless advocacy.”</p>
              <p className="text-xs text-white/80 mt-1">— Managing Partner</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-sm">
      <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{value}+</p>
      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{label}</p>
    </motion.div>
  );
}
