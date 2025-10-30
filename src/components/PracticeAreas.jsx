import { motion } from 'framer-motion';
import { Gavel, Building2, Users, Shield, Scale, Briefcase } from 'lucide-react';

const AREAS = [
  { icon: <Users size={22} />, title: 'Family Law', desc: 'Divorce, custody, adoption, and succession with discretion and care.' },
  { icon: <Building2 size={22} />, title: 'Property Law', desc: 'Title diligence, transactions, and disputes for residential & commercial assets.' },
  { icon: <Shield size={22} />, title: 'Criminal Defense', desc: 'Strategic defense, bail matters, and trial representation.' },
  { icon: <Briefcase size={22} />, title: 'Corporate Law', desc: 'Governance, compliance, contracts, and cross-border deals.' },
  { icon: <Scale size={22} />, title: 'Civil Litigation', desc: 'High-stakes disputes, arbitration, and appellate practice.' },
  { icon: <Gavel size={22} />, title: 'Regulatory', desc: 'Regulatory approvals and liaison across key sectors.' },
];

export default function PracticeAreas() {
  return (
    <section id="services" className="py-20 bg-zinc-50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Practice Areas</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">Deep sector experience paired with decisive action.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="size-11 rounded-xl grid place-items-center bg-amber-600/10 text-amber-700 dark:text-amber-400">
                {a.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{a.desc}</p>
              <button className="mt-4 inline-flex text-sm text-amber-700 dark:text-amber-400 group-hover:underline">Learn more</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
