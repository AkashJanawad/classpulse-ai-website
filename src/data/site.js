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

export const contactDetails = {
  email: 'classpulseai@gmail.com',
  phone: '8618162468',
  address: 'Belagavi 590008',
};

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

export const founders = [
  {
    name: 'Akash Janawad',
    role: 'Co-owner, Product Strategy',
    image: '/team/Akash_Janawad.jpg',
    text: 'Akash helps shape the ClassPulse AI product vision, school workflow ideas, and the practical direction of the platform.',
  },
  {
    name: 'Suresh Murgod',
    role: 'Co-owner, Operations',
    image: '/team/Suresh_Murgod.jpg',
    text: 'Suresh supports operations, coordination, and the disciplined execution needed to move the startup from idea to real adoption.',
  },
  {
    name: 'Karan Jadhav',
    role: 'Co-owner, Technology',
    image: '/team/Karan_Jadhav.jpg',
    text: 'Karan focuses on technology planning, platform reliability, and keeping the product lightweight enough for lean deployment.',
  },
  {
    name: 'Vaishnavi Modekar',
    role: 'Co-owner, Experience Design',
    image: '/team/Vaishnavi_Modekar.jpg',
    text: 'Vaishnavi contributes to user experience, communication clarity, and making the product feel approachable for schools.',
  },
  {
    name: 'Danesh Mang',
    role: 'Co-owner, Growth',
    image: '/team/Danesh_Mang.jpg',
    text: 'Danesh supports outreach, partnerships, and the growth path for ClassPulse AI as it prepares for school pilots.',
  },
];

export const companyStrengths = [
  'Built by a focused founding team in Belagavi',
  'Designed for schools that need useful AI without heavy infrastructure',
  'Prepared for Android Termux, Linux, GitHub, and Cloudflare Tunnel deployment',
  'Focused on privacy-aware insights, simple workflows, and fast adoption',
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
