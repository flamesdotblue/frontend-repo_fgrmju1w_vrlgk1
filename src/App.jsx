import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <AboutSection />
        <Testimonials />
        <ContactSection />
      </main>
      <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Aurelius Legal. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-600">Privacy Policy</a>
            <a href="#" className="hover:text-amber-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">About Us</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">We are a boutique law firm known for clarity and precision. Our senior-led teams combine courtroom rigor with commercial pragmatism to deliver decisive outcomes.</p>
            <div className="mt-8 space-y-5">
              <TimelineItem year="1999" text="Firm founded with a focus on civil litigation." />
              <TimelineItem year="2008" text="Expanded corporate advisory and cross-border practice." />
              <TimelineItem year="2017" text="Recognized among top dispute resolution practices." />
              <TimelineItem year="2024" text="Launched secure client portal and digital-first onboarding." />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <TeamCard name="A. Mehta" role="Managing Partner" img="https://images.unsplash.com/photo-1541726260-e6b6a6a08bc0?q=80&w=1200&auto=format&fit=crop" />
            <TeamCard name="S. Rao" role="Senior Counsel" img="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop" />
            <TeamCard name="D. Singh" role="Litigation Lead" img="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop" />
            <TeamCard name="N. Kapoor" role="Corporate Advisory" img="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, text }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1.5 size-2 rounded-full bg-amber-600" />
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{year}</p>
      <p className="text-zinc-800 dark:text-zinc-200">{text}</p>
    </div>
  );
}

function TeamCard({ name, role, img }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
      <img src={img} alt={`${name} — ${role}`} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
      <div className="absolute bottom-0 p-4">
        <p className="text-white font-medium drop-shadow">{name}</p>
        <p className="text-white/80 text-sm drop-shadow">{role}</p>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Book a Consultation</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">Choose your preferred time and tell us about your matter. We offer secure online and in-person meetings.</p>
            <form className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" required placeholder="Full Name" className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <input type="email" required placeholder="Email" className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="Phone" className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <select className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Consultation Type</option>
                  <option>Online</option>
                  <option>In-person</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="date" className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <input type="time" className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <textarea rows="4" placeholder="Briefly describe your matter" className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
              <div className="flex items-center gap-3">
                <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-amber-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-amber-600/20 hover:bg-amber-500 transition">
                  Proceed to Payment
                </button>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Secure checkout. You’ll receive an email confirmation.</p>
              </div>
            </form>
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <iframe title="Office location" className="w-full h-[420px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086741029223!2d-122.40135022413813!3d37.78970097198108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a20b7a5f%3A0x9d0d8b9d6a8a78ab!2sEmbarcadero%20Center!5e0!3m2!1sen!2sus!4v1712940270992!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
