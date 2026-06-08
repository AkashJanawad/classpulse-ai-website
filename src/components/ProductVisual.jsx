import { Activity, AlertCircle, CheckCircle2, Sparkles, TrendingUp, UsersRound } from 'lucide-react';
import { platformHighlights } from '../data/site.js';

const rows = [
  { section: '8A', pulse: 91, status: 'Stable', color: 'bg-teal-500' },
  { section: '9B', pulse: 74, status: 'Watch', color: 'bg-marigold' },
  { section: '10C', pulse: 83, status: 'Rising', color: 'bg-coral' },
];

export default function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-3 top-8 hidden rounded-lg border border-ink/10 bg-white p-3 shadow-soft dark:border-white/10 dark:bg-night sm:block">
        <div className="flex items-center gap-2 text-sm font-bold text-ink dark:text-white">
          <CheckCircle2 size={17} className="text-teal-600" aria-hidden="true" />
          12 follow-ups closed
        </div>
      </div>

      <div className="absolute -right-2 bottom-10 hidden rounded-lg border border-ink/10 bg-white p-3 shadow-soft dark:border-white/10 dark:bg-night sm:block">
        <div className="flex items-center gap-2 text-sm font-bold text-ink dark:text-white">
          <Sparkles size={17} className="text-coral" aria-hidden="true" />
          AI summary ready
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft dark:border-white/10 dark:bg-white/[0.07]">
        <div className="flex items-center justify-between border-b border-ink/10 px-4 py-4 dark:border-white/10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">
              Today&apos;s pulse
            </p>
            <h2 className="mt-1 text-lg font-black text-ink dark:text-white">Classroom dashboard</h2>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-700 text-white dark:bg-teal-400 dark:text-night">
            <Activity size={21} aria-hidden="true" />
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-xl bg-ink p-4 text-white dark:bg-night">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white/70">Engagement index</p>
              <TrendingUp size={18} className="text-teal-300" aria-hidden="true" />
            </div>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-black">86</span>
              <span className="pb-2 text-sm font-bold text-teal-200">+9%</span>
            </div>
            <div className="mt-6 grid grid-cols-7 items-end gap-1" aria-hidden="true">
              {[42, 58, 48, 68, 76, 62, 88].map((height, index) => (
                <div
                  key={height + index}
                  className="rounded-full bg-gradient-to-t from-teal-500 to-marigold"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {rows.map((row) => (
              <div key={row.section} className="rounded-xl border border-ink/10 p-3 dark:border-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-ink dark:text-white">Section {row.section}</p>
                    <p className="text-xs font-semibold text-ink/55 dark:text-white/55">{row.status}</p>
                  </div>
                  <span className="text-sm font-black text-ink dark:text-white">{row.pulse}%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/8 dark:bg-white/10">
                  <div className={`h-full rounded-full ${row.color}`} style={{ width: `${row.pulse}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 border-t border-ink/10 p-4 dark:border-white/10 sm:grid-cols-2">
          <div className="rounded-xl bg-mist p-4 dark:bg-white/8">
            <div className="flex items-center gap-2 text-sm font-black text-ink dark:text-white">
              <AlertCircle size={18} className="text-coral" aria-hidden="true" />
              Needs attention
            </div>
            <p className="mt-2 text-sm leading-6 text-ink/68 dark:text-white/68">
              9B has three repeated absence patterns and lower participation after lunch.
            </p>
          </div>
          <div className="rounded-xl bg-teal-700 p-4 text-white">
            <div className="flex items-center gap-2 text-sm font-black">
              <UsersRound size={18} aria-hidden="true" />
              Suggested action
            </div>
            <p className="mt-2 text-sm leading-6 text-white/78">
              Schedule mentor check-ins and share a weekly progress note.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {platformHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-lg border border-ink/10 bg-white/76 p-3 text-center shadow-sm dark:border-white/10 dark:bg-white/8">
              <Icon className="mx-auto text-teal-700 dark:text-teal-300" size={19} aria-hidden="true" />
              <p className="mt-2 text-xs font-bold text-ink/72 dark:text-white/70">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
