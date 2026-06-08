import {
  Activity,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  LineChart,
  LockKeyhole,
  MessageSquareText,
  Radar,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WandSparkles,
  Zap,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export const metrics = [
  { label: 'Signal refresh', value: 'Live', detail: 'classroom pulse updates' },
  { label: 'Setup time', value: '< 1 day', detail: 'for pilot schools' },
  { label: 'Data posture', value: 'Privacy-first', detail: 'minimal, school-owned data' },
];

export const featureCards = [
  {
    icon: Activity,
    title: 'Live Classroom Pulse',
    text: 'Bring attendance, participation, focus indicators, and teacher notes into a single daily view.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Insight Summaries',
    text: 'Turn noisy classroom patterns into plain-language observations for teachers and coordinators.',
  },
  {
    icon: Radar,
    title: 'Early Risk Signals',
    text: 'Spot low engagement, repeated absence, and intervention needs before they become bigger issues.',
  },
  {
    icon: LockKeyhole,
    title: 'Privacy-Aware Design',
    text: 'Keep sensitive school workflows controlled with clear consent, role-based access, and minimal data capture.',
  },
  {
    icon: CalendarCheck,
    title: 'Attendance Intelligence',
    text: 'Understand class-level attendance trends, late patterns, and recovery opportunities across sections.',
  },
  {
    icon: MessageSquareText,
    title: 'Parent-Ready Updates',
    text: 'Prepare concise, respectful summaries that help schools communicate progress without extra admin load.',
  },
];

export const workflow = [
  {
    icon: BookOpenCheck,
    title: 'Capture school signals',
    text: 'Teachers and coordinators add attendance, participation, and notes from regular school routines.',
  },
  {
    icon: WandSparkles,
    title: 'AI organizes the pulse',
    text: 'ClassPulse AI groups patterns, highlights outliers, and keeps human review at the center.',
  },
  {
    icon: CheckCircle2,
    title: 'Act with clarity',
    text: 'Teams decide follow-ups, parent conversations, and classroom support with better context.',
  },
];

export const team = [
  {
    name: 'Founding Team',
    role: 'Product, AI, and school operations',
    text: 'We are building ClassPulse AI with teachers, administrators, and families in mind from the first pilot onward.',
  },
  {
    name: 'Education Advisors',
    role: 'Classroom practice and student support',
    text: 'Our advisory circle helps keep the platform practical, respectful, and useful inside real school days.',
  },
  {
    name: 'Technology Partners',
    role: 'Deployment and secure infrastructure',
    text: 'The platform is designed for lean deployment, GitHub updates, Linux servers, and Termux-based hosting.',
  },
];

export const values = [
  {
    icon: ShieldCheck,
    title: 'Trust before automation',
    text: 'AI should support school decisions, never replace teacher judgment or student dignity.',
  },
  {
    icon: Zap,
    title: 'Lightweight by default',
    text: 'The site and server are built to run on small hardware without Docker or complicated orchestration.',
  },
  {
    icon: UsersRound,
    title: 'Human-centered schools',
    text: 'Insights are written for action: clearer conversations, timely support, and less administrative guessing.',
  },
];

export const platformHighlights = [
  { icon: BarChart3, label: 'Engagement trends' },
  { icon: Clock3, label: 'Timely follow-ups' },
  { icon: Sparkles, label: 'AI summaries' },
  { icon: LineChart, label: 'Progress signals' },
];
