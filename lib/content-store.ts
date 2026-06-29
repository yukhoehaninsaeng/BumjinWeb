import fs from "fs";
import path from "path";

// In production serverless, use /tmp; on Node.js server, use data/
const DATA_DIR =
  process.env.NODE_ENV === "production" && process.env.VERCEL
    ? "/tmp"
    : path.join(process.cwd(), "data");

const CONTENT_FILE = path.join(DATA_DIR, "content.json");
export const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

export interface ProcessStepContent {
  step: string;
  title: string;
  body: string;
  detail: string;
}

export interface CapabilityContent {
  id: string;
  title: string;
  desc: string;
}

export interface ProductContent {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
}

export interface DeptContent {
  title?: string;
  tagline?: string;
  description?: string;
  odmBody?: string;
  tags?: string[];
  products?: ProductContent[];
}

export interface LocationData {
  name: string;
  type: string;
  address: string;
  phone: string;
  note: string;
}

export interface VisionMeaningItem {
  term: string;
  desc: string;
}

export interface CoreValueItem {
  num: string;
  title: string;
  en: string;
  body: string;
}

export interface SubsidiaryItem {
  name: string;
  en: string;
  tagline: string;
  desc: string;
  locations: string[];
  revenue: string;
  employees: string;
  productsLabel: string;
  products: string[];
  roles: string[];
  dark: boolean;
}

export interface HistoryEvent {
  month: string;
  text: string;
}

export interface HistoryEntry {
  year: string;
  events: HistoryEvent[];
}

export interface CompanyContent {
  overviewHeadline?: string;
  overviewIntro?: string;
  coreMessage?: string;
  ceoOpening?: string;
  ceoParagraphs?: string[];
  visionStatement?: string;
  visionMeaning?: VisionMeaningItem[];
  coreValues?: CoreValueItem[];
  subsidiaries?: SubsidiaryItem[];
  historyData?: HistoryEntry[];
  locations?: LocationData[];
}

export interface GlobalSiteItem {
  city: string;
  role: string;
  type: string;
}

export interface ClientItem {
  id: string;
  name: string;
}

export interface SiteContent {
  home: {
    processSteps: ProcessStepContent[] | null;
    capabilities: CapabilityContent[] | null;
  };
  business: {
    electronics: DeptContent | null;
    molding: DeptContent | null;
    startup: DeptContent | null;
  };
  company: CompanyContent | null;
  global: GlobalSiteItem[] | null;
  clients: ClientItem[] | null;
  images: Record<string, string>;
}

const DEFAULT: SiteContent = {
  home: { processSteps: null, capabilities: null },
  business: { electronics: null, molding: null, startup: null },
  company: null,
  global: null,
  clients: null,
  images: {},
};

export function readContent(): SiteContent {
  try {
    if (!fs.existsSync(CONTENT_FILE)) return DEFAULT;
    return { ...DEFAULT, ...JSON.parse(fs.readFileSync(CONTENT_FILE, "utf-8")) };
  } catch {
    return DEFAULT;
  }
}

export function writeContent(content: SiteContent): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2), "utf-8");
}

export function ensureUploadDir(): void {
  if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}
