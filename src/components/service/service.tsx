export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  accentColor: string;
  accentBg: string;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
}

export interface ServicesGridProps {
  services?: Service[];
  title?: string;
  subtitle?: string;
}

export interface ServiceIconProps {
  name: string;
  className?: string;
}

export interface ServiceTagProps {
  label: string;
  accentColor: string;
  accentBg: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
}