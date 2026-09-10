import type { IconType } from 'react-icons'
import type { LucideIcon } from 'lucide-react'

export interface Skill {
  name: string
  pct: number
  icon?: IconType | LucideIcon
  color?:string;
}

export interface Chip {
  name: string
  icon?: IconType | LucideIcon
  color?:string;
}

export interface Project {
  id: string
  emoji: string
  gradient: string
  featured?: boolean
  tags: string[]
  title: string
  desc: string
  demo: string
  github: string
  image: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  points: string[]
}

export interface Certification {
  id: string
  icon: string
  color: string
  iconColor: string
  title: string
  issuer: string
  date: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export type GalleryCategory = 'All' | 'UI/UX' | 'Backend' | 'Mobile' | 'Open Source'