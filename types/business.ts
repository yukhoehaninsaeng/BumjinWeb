export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
  image?: string;
}

export interface ProcessFlowItem {
  step: string;
  title: string;
  description?: string;
}

export interface Process extends ProcessFlowItem {
  description: string;
}

export interface SuccessCase {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface Contact {
  role: string;
  tel: string;
  email: string;
}

export interface Department {
  id: string;
  label: string;
  labelEn: string;
  index: string;
  tagline: string;
  title: string;
  description: string;
  products?: Product[];
  odmFlow?: ProcessFlowItem[];
  odmTitle?: string;
  odmBody?: string;
  processes?: Process[];
  successCases?: SuccessCase[];
  contacts: Contact[];
  tags?: string[];
}

export interface HeroStat {
  value: string;
  label: string;
}
