import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const ITEMS = [
  {
    quote:
      'Their counsel was precise and strategic. We achieved a swift resolution without compromising on outcomes.',
    name: 'Rohit Sharma',
    role: 'Founder, Meridian Group',
  },
  {
    quote:
      'Empathetic, thorough, and formidable in court. I felt supported every step of the way.',
    name: 'Ananya Gupta',
    role: 'Private Client',
  },
  {
    quote:
      'Exceptional command over corporate law. They navigated complex negotiations with ease.',
    name: 'Daniel Lee',
    role: 'CFO, Lattice Labs',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((n) => (n + 1) % ITEMS.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-amber-600/10 grid place-items-center text-amber-600">
            <Quote size={18} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Client Testimonials</h2>
        </div>

        <div className="relative mt-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5 pointer-events-none" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-200">“{ITEMS[index].quote}”</p>
              <div className="mt-6">
                <p className="font-medium text-zinc-900 dark:text-zinc-50">{ITEMS[index].name}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{ITEMS[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex gap-2">
            {ITEMS.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-amber-600' : 'w-2 bg-zinc-300 dark:bg-zinc-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
