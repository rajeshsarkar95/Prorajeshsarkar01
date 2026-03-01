export interface Skill       { name: string; pct: number }
export interface Project     { id: string; emoji: string; gradient: string; featured?: boolean; tags: string[]; title: string; desc: string; demo: string; github: string }
export interface Experience  { id: string; company: string; role: string; period: string; points: string[] }
export interface Certification { id: string; icon: string; color: string; iconColor: string; title: string; issuer: string; date: string }
export interface ContactForm { name: string; email: string; subject: string; message: string }
