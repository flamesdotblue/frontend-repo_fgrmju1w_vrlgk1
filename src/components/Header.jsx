import { useEffect, useState } from 'react';
import { Moon, Sun, Scale } from 'lucide-react';

export default function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  // Font size controls for accessibility
  const increaseFont = () => {
    const current = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = Math.min(current + 1, 20) + 'px';
  };
  const decreaseFont = () => {
    const current = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = Math.max(current - 1, 14) + 'px';
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-600/20 grid place-items-center">
            <Scale className="text-white" size={18} />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">Aurelius Legal</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Counsel. Clarity. Confidence.</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="text-zinc-600 dark:text-zinc-300 hover:text-amber-600 transition">Home</a>
          <a href="#about" className="text-zinc-600 dark:text-zinc-300 hover:text-amber-600 transition">About</a>
          <a href="#services" className="text-zinc-600 dark:text-zinc-300 hover:text-amber-600 transition">Practice Areas</a>
          <a href="#testimonials" className="text-zinc-600 dark:text-zinc-300 hover:text-amber-600 transition">Testimonials</a>
          <a href="#contact" className="text-zinc-600 dark:text-zinc-300 hover:text-amber-600 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={decreaseFont} aria-label="Decrease font size" className="px-2 py-1 rounded-md text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">A-</button>
          <button onClick={increaseFont} aria-label="Increase font size" className="px-2 py-1 rounded-md text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">A+</button>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="ml-1 inline-flex items-center justify-center rounded-md h-9 w-9 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-zinc-700" />}
          </button>
          <a href="#contact" className="ml-2 hidden sm:inline-flex items-center gap-2 rounded-lg bg-amber-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-amber-600/20 hover:bg-amber-500 transition">
            Book Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
