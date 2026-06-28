import { Activity, AlertCircle, CheckCircle2, Sparkles, TrendingUp, UsersRound } from 'lucide-react';
import { platformHighlights } from '../data/site.js';

const rows = [
  { section: '8A', pulse: 91, status: 'Stable', color: 'from-primary to-tertiary' },
  { section: '9B', pulse: 74, status: 'Watch', color: 'from-secondary to-primary' },
  { section: '10C', pulse: 83, status: 'Rising', color: 'from-tertiary to-secondary' },
];

export default function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-3 top-8 hidden rounded-2xl border border-primary/20 bg-[#080b16]/80 p-3 shadow-violet backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <CheckCircle2 size={17} className="text-tertiary" aria-hidden="true" />
          12 follow-ups closed
        </div>
      </div>

      <div className="absolute -right-2 bottom-10 hidden rounded-2xl border border-secondary/20 bg-[#080b16]/80 p-3 shadow-violet backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Sparkles size={17} className="text-secondary" aria-hidden="true" />
          AI summary ready
        </div>
      </div>

      <div className="glass-panel overflow-hidden rounded-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Today&apos;s pulse</p>
            <h2 className="mt-1 text-lg font-black text-white">Classroom dashboard</h2>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/12 text-primary">
            <Activity size={21} aria-hidden="true" />
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-xl border border-white/10 bg-[#05070d]/70 p-4 text-white">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white/70">Engagement index</p>
              <TrendingUp size={18} className="text-tertiary" aria-hidden="true" />
            </div>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-black">86</span>
              <span className="pb-2 text-sm font-bold text-tertiary">+9%</span>
            </div>
            <div className="mt-6 grid grid-cols-7 items-end gap-1" aria-hidden="true">
              {[42, 58, 48, 68, 76, 62, 88].map((height, index) => (
                <div
                  key={height + index}
                  className="rounded-full bg-gradient-to-t from-primary to-tertiary"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {rows.map((row) => (
              <div key={row.section} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-white">Section {row.section}</p>
                    <p className="text-xs font-semibold text-white/50">{row.status}</p>
                  </div>
                  <span className="text-sm font-black text-white">{row.pulse}%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full rounded-full bg-gradient-to-r ${row.color}`} style={{ width: `${row.pulse}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 border-t border-white/10 p-4 sm:grid-cols-2">
          <div className="rounded-xl border border-secondary/20 bg-secondary/8 p-4">
            <div className="flex items-center gap-2 text-sm font-black text-white">
              <AlertCircle size={18} className="text-secondary" aria-hidden="true" />
              Needs attention
            </div>
            <p className="mt-2 text-sm leading-6 text-white/68">
              9B has repeated absence patterns and lower participation after lunch.
            </p>
          </div>
          <div className="rounded-xl border border-tertiary/20 bg-tertiary/10 p-4 text-white">
            <div className="flex items-center gap-2 text-sm font-black">
              <UsersRound size={18} className="text-tertiary" aria-hidden="true" />
              Suggested action
            </div>
            <p className="mt-2 text-sm leading-6 text-white/72">
              Schedule mentor check-ins and share a weekly progress note.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {platformHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/7 p-3 text-center shadow-sm backdrop-blur-xl">
              <Icon className="mx-auto text-primary" size={19} aria-hidden="true" />
              <p className="mt-2 text-xs font-bold text-white/70">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
