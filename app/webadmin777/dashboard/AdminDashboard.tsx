"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Save,
  LogOut,
  Home,
  Briefcase,
  ImageIcon,
  ChevronDown,
  ChevronUp,
  Check,
  AlertCircle,
  Upload,
  Eye,
  EyeOff,
  Plus,
  Trash2,
} from "lucide-react";
import type {
  SiteContent,
  ProcessStepContent,
  CapabilityContent,
  DeptContent,
  ProductContent,
} from "@/lib/content-store";
import { BUSINESS_DEPARTMENTS } from "@/lib/data/business";

/* ── 기본 데이터 ─────────────────────────────────────── */

const DEFAULT_PROCESS_STEPS: ProcessStepContent[] = [
  { step: "01", title: "기획", body: "R&D 공동 기획, 시장 조사, 음향 모델링, 산업 디자인 방향 수립.", detail: "클라이언트 R&D팀과 공동으로 제품 기획 단계를 진행합니다. 시장 조사, 타겟 사양 정의, 음향 모델링, PCB 구성 검토, 산업 디자인 방향 수립까지 전 과정을 지원합니다." },
  { step: "02", title: "설계", body: "PCB·기구·음향 통합 설계. DFM·DFA 검토 완료 후 시제품 제작.", detail: "회로 설계(PCB 레이아웃, EMC 최적화), 기구 설계(3D CAD), 음향 설계(FEA 시뮬레이션)를 통합적으로 수행합니다. 시제품 제작 전 DFM·DFA 검토를 완료합니다." },
  { step: "03", title: "사출", body: "자체 CNC·EDM 금형. 리드타임 업계 평균 대비 40% 단축.", detail: "자체 CNC 및 EDM 설비로 금형을 제작합니다. 리드타임은 업계 평균 대비 40% 단축되며 PP·ABS·PC 등 다양한 수지 재료를 지원합니다." },
  { step: "04", title: "조립", body: "고속 SMT·AOI 검사. 로봇 자동 조립, 100% 음향 캘리브레이션.", detail: "고속 SMT 라인(0201 대응)과 AOI 자동광학검사를 거쳐 PCB를 실장합니다. 로봇 자동화 조립 라인에서 드라이버·앰프·DSP 모듈을 통합하고 100% 라인엔드 음향 캘리브레이션을 수행합니다." },
  { step: "05", title: "품질", body: "AQL 샘플링, CE·FCC·UL 인증, ISO 9001 / IATF 16949 준수.", detail: "AQL 샘플링 검사, CE·FCC·UL 인증 대응, 고객사별 맞춤 패키징을 진행합니다. ISO 9001 / IATF 16949 품질경영 시스템을 기반으로 전수 검사와 신뢰성 시험을 병행합니다." },
  { step: "06", title: "물류", body: "6개 거점 항공·해상·철도 네트워크. 3PL 연동·실시간 추적.", detail: "6개 거점(한국·중국·베트남·폴란드·미국·일본)에서 항공·해상·철도를 활용한 글로벌 배송 네트워크를 운영합니다. 3PL 직접 연동 및 실시간 재고 추적 시스템을 제공합니다." },
];

const DEFAULT_CAPABILITIES: CapabilityContent[] = [
  { id: "c1",  title: "DSP 엔지니어링 & 음향 튜닝",     desc: "24비트 DSP 알고리즘 설계, 무향실 측정, 목표 커브 매칭으로 정밀 음색 구현." },
  { id: "c2",  title: "커스텀 드라이버 제조",            desc: "우퍼·트위터 맞춤 설계, 마그넷 최적화, 보이스코일 와인딩 내재화." },
  { id: "c3",  title: "Dolby Atmos / DTS:X 인증",      desc: "공간음향 렌더링 파이프라인 구축 및 Dolby·DTS 공식 인증 라이선스 취득." },
  { id: "c4",  title: "AirPlay 2 / Chromecast 연동",   desc: "Wi-Fi 멀티룸 스트리밍 모듈 통합 및 iOS·Android 전 플랫폼 호환성 검증." },
  { id: "c5",  title: "Class-D & Class-AB 앰프 설계",  desc: "고효율 D급 앰프 및 저왜율 AB급 앰프 고객사 사양 맞춤 설계." },
  { id: "c6",  title: "Wi-Fi 6 & Bluetooth 5.3 통합", desc: "최신 무선 모듈 통합, 레이턴시 최적화, 각국 RF 공인 시험 일괄 지원." },
  { id: "c7",  title: "인하우스 CNC & EDM 금형",        desc: "자체 NC·방전 가공 설비로 리드타임 업계 평균 대비 40% 단축 달성." },
  { id: "c8",  title: "SMT 실장 & AOI 검사",           desc: "고속 SMT 라인(0201 부품 대응), 자동 광학검사 100% 전수 적용." },
  { id: "c9",  title: "Hi-Res Audio 인증",             desc: "일본음향협회 기준 40kHz 이상 재생 능력 검증 및 로고 라이선싱 취득." },
  { id: "c10", title: "HDMI eARC / HDMI 2.1 모듈",    desc: "최신 HDMI 규격 전면 대응, eARC 음성 패스스루 회로 자체 설계." },
  { id: "c11", title: "무향실 측정",                   desc: "자체 운영 무향실에서 FR·THD·방향성·지향성 전 항목 정밀 측정." },
  { id: "c12", title: "ISO 9001 / IATF 16949 QMS",    desc: "전사 품질경영시스템 인증 유지, 자동차 전장 품질 기준 완전 대응." },
];

function initDept(
  id: "electronics" | "molding" | "startup",
  stored: DeptContent | null
): DeptContent {
  if (stored) return stored;
  const s = BUSINESS_DEPARTMENTS.find((d) => d.id === id)!;
  return {
    title: s.title,
    tagline: s.tagline,
    description: s.description,
    odmBody: s.odmBody ?? "",
    tags: s.tags ?? [],
    products: (s.products ?? []).map((p) => ({
      id: p.id,
      name: p.name,
      nameEn: p.nameEn,
      description: p.description,
      icon: p.icon,
    })),
  };
}

/* ── 유틸리티 ─────────────────────────────────── */

function markdownToHtml(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/_(.*?)_/g, "<em>$1</em>")
    .split("\n\n")
    .map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`)
    .join("");
}

/* ── 공통 UI ─────────────────────────────────── */

function Field({
  label,
  value,
  onChange,
  multiline = false,
  rows = 3,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
  hint?: string;
}) {
  const [preview, setPreview] = useState(false);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">
          {label}
        </label>
        {multiline && (
          <button
            type="button"
            onClick={() => setPreview(!preview)}
            className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-gray-700 transition-colors"
          >
            {preview ? <EyeOff className="size-3" /> : <Eye className="size-3" />}
            {preview ? "편집" : "HTML 미리보기"}
          </button>
        )}
      </div>

      {multiline && preview ? (
        <div
          className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-[12px] px-3 py-2.5 min-h-[80px] prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(value) }}
        />
      ) : multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[12px] px-3 py-2.5 focus:outline-none focus:border-red-400 transition-colors resize-y font-mono"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[12px] px-3 py-2.5 focus:outline-none focus:border-red-400 transition-colors"
        />
      )}

      {hint && <p className="text-[10px] text-gray-300">{hint}</p>}
    </div>
  );
}

function Toast({ msg, type }: { msg: string; type: "success" | "error" }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 shadow-lg text-[12px] font-semibold ${
        type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
      }`}
    >
      {type === "success" ? <Check className="size-4" /> : <AlertCircle className="size-4" />}
      {msg}
    </div>
  );
}

/* ── 이미지 업로드 ────────────────────────────── */

function ImageManager({
  images,
  onImageUpload,
}: {
  images: Record<string, string>;
  onImageUpload: (productId: string, url: string) => void;
}) {
  const [productId, setProductId] = useState("");
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function upload(file: File) {
    if (!productId.trim()) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("productId", productId.trim());
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.ok) onImageUpload(productId.trim(), data.url);
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) upload(file);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-[13px] font-bold text-gray-900">이미지 업로드</h3>
        <Field
          label="제품 ID (영문, 소문자)"
          value={productId}
          onChange={setProductId}
          hint="예: channel-sound, ai-speaker, injection — 사업영역 제품 ID와 동일하게 입력하세요"
        />
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => productId.trim() && inputRef.current?.click()}
          className={`relative flex flex-col items-center justify-center gap-3 border-2 border-dashed py-10 transition-colors ${
            !productId.trim()
              ? "border-gray-100 bg-gray-50 cursor-not-allowed"
              : dragOver
              ? "border-red-400 bg-red-50 cursor-pointer"
              : "border-gray-200 hover:border-gray-400 bg-gray-50 cursor-pointer"
          }`}
        >
          <Upload className="size-6 text-gray-300" />
          <p className="text-[12px] text-gray-400">
            {uploading
              ? "업로드 중..."
              : !productId.trim()
              ? "제품 ID를 먼저 입력하세요"
              : "클릭하거나 이미지를 드래그해서 놓으세요"}
          </p>
          <p className="text-[10px] text-gray-300">JPG · PNG · WebP · GIF</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) upload(f);
              e.target.value = "";
            }}
          />
        </div>
      </div>

      {Object.keys(images).length > 0 && (
        <div>
          <h3 className="text-[13px] font-bold text-gray-900 mb-3">
            업로드된 이미지 ({Object.keys(images).length}개)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(images).map(([id, url]) => (
              <div key={id} className="group relative border border-gray-200 bg-gray-50">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src={url} alt={id} fill className="object-cover" sizes="200px" />
                </div>
                <p className="px-2 py-1.5 text-[10px] text-gray-500 font-mono truncate">{id}</p>
                <p className="px-2 pb-2 text-[10px] text-gray-300 truncate">{url}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── 제조 프로세스 에디터 ────────────────────── */

function ProcessEditor({
  steps,
  onChange,
}: {
  steps: ProcessStepContent[];
  onChange: (steps: ProcessStepContent[]) => void;
}) {
  const [open, setOpen] = useState<string | null>("01");

  function update(step: string, field: keyof ProcessStepContent, value: string) {
    onChange(steps.map((s) => (s.step === step ? { ...s, [field]: value } : s)));
  }

  return (
    <div className="space-y-2">
      {steps.map((s) => (
        <div key={s.step} className="border border-gray-200">
          <button
            type="button"
            onClick={() => setOpen(open === s.step ? null : s.step)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-[#C0392B] tracking-wider">{s.step}</span>
              <span className="text-[13px] font-semibold text-gray-900">{s.title}</span>
            </div>
            {open === s.step ? <ChevronUp className="size-4 text-gray-400" /> : <ChevronDown className="size-4 text-gray-400" />}
          </button>
          {open === s.step && (
            <div className="p-4 space-y-4">
              <Field label="단계 제목" value={s.title} onChange={(v) => update(s.step, "title", v)} />
              <Field label="카드 설명 (짧게)" value={s.body} onChange={(v) => update(s.step, "body", v)} multiline rows={2} hint="카드에 표시되는 한 줄 요약" />
              <Field label="상세 설명 (모달)" value={s.detail} onChange={(v) => update(s.step, "detail", v)} multiline rows={4} hint="클릭 시 모달에 표시되는 내용 · **굵게** _기울임_ 사용 가능" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── 기술 역량 에디터 ──────────────────────── */

function CapabilityEditor({
  caps,
  onChange,
}: {
  caps: CapabilityContent[];
  onChange: (caps: CapabilityContent[]) => void;
}) {
  function update(id: string, field: "title" | "desc", value: string) {
    onChange(caps.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {caps.map((c) => (
        <div key={c.id} className="border border-gray-200 p-4 space-y-3">
          <p className="text-[10px] font-mono text-gray-300 tracking-wider">{c.id}</p>
          <Field label="역량명" value={c.title} onChange={(v) => update(c.id, "title", v)} />
          <Field label="설명" value={c.desc} onChange={(v) => update(c.id, "desc", v)} multiline rows={2} />
        </div>
      ))}
    </div>
  );
}

/* ── 제품 목록 에디터 ──────────────────────── */

function ProductListEditor({
  products,
  onChange,
}: {
  products: ProductContent[];
  onChange: (p: ProductContent[]) => void;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);

  function addProduct() {
    const newProduct: ProductContent = {
      id: `product-${Date.now()}`,
      name: "새 제품",
      nameEn: "New Product",
      description: "제품 설명을 입력하세요",
      icon: "Speaker",
    };
    onChange([...products, newProduct]);
    setEditingId(newProduct.id);
  }

  function updateProduct(id: string, data: Partial<ProductContent>) {
    onChange(products.map((p) => (p.id === id ? { ...p, ...data } : p)));
  }

  function deleteProduct(id: string) {
    onChange(products.filter((p) => p.id !== id));
    if (editingId === id) setEditingId(null);
  }

  return (
    <div className="space-y-2">
      {products.length === 0 && (
        <p className="text-[12px] text-gray-400 py-4 text-center border border-dashed border-gray-200">
          제품이 없습니다. 아래 버튼으로 추가하세요.
        </p>
      )}
      {products.map((p) => (
        <div key={p.id} className="border border-gray-200">
          <button
            type="button"
            onClick={() => setEditingId(editingId === p.id ? null : p.id)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-[11px] font-mono text-gray-400 shrink-0">{p.icon}</span>
              <span className="text-[13px] font-semibold text-gray-900 truncate">{p.name}</span>
              <span className="text-[11px] text-gray-400 truncate hidden sm:block">{p.nameEn}</span>
            </div>
            {editingId === p.id ? <ChevronUp className="size-4 text-gray-400 shrink-0" /> : <ChevronDown className="size-4 text-gray-400 shrink-0" />}
          </button>
          {editingId === p.id && (
            <div className="p-4 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="제품 ID (영문, 소문자, 하이픈)" value={p.id} onChange={(v) => updateProduct(p.id, { id: v })} hint="이미지 업로드 시 이 ID를 사용하세요" />
                <Field label="아이콘 이름 (Lucide)" value={p.icon} onChange={(v) => updateProduct(p.id, { icon: v })} hint="Speaker, Mic2, Monitor, Radio, Settings2, Layers, PenTool, Sparkles 등" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="제품명 (한국어)" value={p.name} onChange={(v) => updateProduct(p.id, { name: v })} />
                <Field label="제품명 (영어)" value={p.nameEn} onChange={(v) => updateProduct(p.id, { nameEn: v })} />
              </div>
              <Field label="제품 설명" value={p.description} onChange={(v) => updateProduct(p.id, { description: v })} multiline rows={2} />
              <div className="pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => deleteProduct(p.id)}
                  className="flex items-center gap-1.5 text-[11px] text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-3" />
                  이 제품 삭제
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addProduct}
        className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-gray-300 hover:border-gray-500 text-[12px] text-gray-500 hover:text-gray-900 transition-colors"
      >
        <Plus className="size-3.5" />
        제품 추가
      </button>
    </div>
  );
}

/* ── 사업부문 에디터 ─────────────────────────── */

function DeptEditor({
  deptId,
  content,
  onChange,
}: {
  deptId: "electronics" | "molding" | "startup";
  content: DeptContent;
  onChange: (c: DeptContent) => void;
}) {
  function set<K extends keyof DeptContent>(key: K, value: DeptContent[K]) {
    onChange({ ...content, [key]: value });
  }

  return (
    <div className="space-y-5">
      <Field
        label="대제목 (줄바꿈은 \\n 입력)"
        value={content.title ?? ""}
        onChange={(v) => set("title", v)}
        multiline
        rows={2}
        hint='예: 당신 곁에 있는\n언제나 범진전자'
      />
      <Field
        label="태그라인 (영문 소문자 슬로건)"
        value={content.tagline ?? ""}
        onChange={(v) => set("tagline", v)}
        hint="예: Creative & Life"
      />
      <Field
        label="부서 소개"
        value={content.description ?? ""}
        onChange={(v) => set("description", v)}
        multiline
        rows={4}
        hint="페이지 우측에 표시되는 소개 문구입니다."
      />

      {deptId === "electronics" && (
        <Field
          label="ODM 설명"
          value={content.odmBody ?? ""}
          onChange={(v) => set("odmBody", v)}
          multiline
          rows={3}
          hint="ODM 섹션의 설명 문구입니다."
        />
      )}

      {deptId === "molding" && (
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">
            응용 산업 태그
          </label>
          <input
            type="text"
            value={(content.tags ?? []).join(", ")}
            onChange={(e) =>
              set(
                "tags",
                e.target.value
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
              )
            }
            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[12px] px-3 py-2.5 focus:outline-none focus:border-red-400 transition-colors"
            placeholder="생활가전, 자동차, IT 기기, 기타 산업재"
          />
          <p className="text-[10px] text-gray-300">쉼표로 구분하여 입력하세요</p>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-[13px] font-bold text-gray-900">제품 목록</h4>
          <p className="text-[10px] text-gray-400">
            {(content.products ?? []).length}개 등록됨
          </p>
        </div>
        <ProductListEditor
          products={content.products ?? []}
          onChange={(p) => set("products", p)}
        />
      </div>
    </div>
  );
}

/* ── 메인 AdminDashboard ─────────────────────── */

type NavSection = "home" | "business" | "images";
type HomeTab = "process" | "capabilities";
type BusinessTab = "electronics" | "molding" | "startup";

export default function AdminDashboard({
  initialContent,
}: {
  initialContent: SiteContent;
}) {
  const [nav, setNav] = useState<NavSection>("home");
  const [homeTab, setHomeTab] = useState<HomeTab>("process");
  const [businessTab, setBusinessTab] = useState<BusinessTab>("electronics");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  // 홈 데이터
  const [processSteps, setProcessSteps] = useState<ProcessStepContent[]>(
    initialContent.home.processSteps ?? DEFAULT_PROCESS_STEPS
  );
  const [capabilities, setCapabilities] = useState<CapabilityContent[]>(
    initialContent.home.capabilities ?? DEFAULT_CAPABILITIES
  );

  // 사업영역 데이터
  const [electronics, setElectronics] = useState<DeptContent>(() =>
    initDept("electronics", initialContent.business.electronics)
  );
  const [molding, setMolding] = useState<DeptContent>(() =>
    initDept("molding", initialContent.business.molding)
  );
  const [startup, setStartup] = useState<DeptContent>(() =>
    initDept("startup", initialContent.business.startup)
  );

  // 이미지
  const [images, setImages] = useState<Record<string, string>>(
    initialContent.images ?? {}
  );

  function showToast(msg: string, type: "success" | "error") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }

  const buildContent = useCallback(
    (): SiteContent => ({
      home: { processSteps, capabilities },
      business: { electronics, molding, startup },
      images,
    }),
    [processSteps, capabilities, electronics, molding, startup, images]
  );

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildContent()),
      });
      if (res.ok) {
        showToast("저장되었습니다.", "success");
      } else {
        showToast("저장에 실패했습니다.", "error");
      }
    } catch {
      showToast("네트워크 오류가 발생했습니다.", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/webadmin777";
  }

  function handleImageUpload(productId: string, url: string) {
    const updated = { ...images, [productId]: url };
    setImages(updated);
    showToast(`${productId} 이미지가 업로드되었습니다.`, "success");
    fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...buildContent(), images: updated }),
    });
  }

  const navItems: { id: NavSection; label: string; icon: React.ReactNode }[] = [
    { id: "home",     label: "홈페이지",   icon: <Home className="size-4" /> },
    { id: "business", label: "사업영역",   icon: <Briefcase className="size-4" /> },
    { id: "images",   label: "이미지 관리", icon: <ImageIcon className="size-4" /> },
  ];

  const businessTabs: { id: BusinessTab; label: string; index: string }[] = [
    { id: "electronics", label: "전자부문",    index: "01" },
    { id: "molding",     label: "금형·성형",   index: "02" },
    { id: "startup",     label: "스타트업",    index: "03" },
  ];

  const currentDept =
    businessTab === "electronics"
      ? { content: electronics, onChange: setElectronics }
      : businessTab === "molding"
      ? { content: molding, onChange: setMolding }
      : { content: startup, onChange: setStartup };

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Image
            src="/bumjin%20icon.jpg"
            alt="Bumjin"
            width={100}
            height={30}
            className="h-8 w-auto object-contain"
          />
          <span className="text-[11px] font-bold text-gray-400 tracking-[2px] uppercase hidden sm:block">
            Admin Panel
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            className="text-[12px] text-gray-400 hover:text-gray-700 transition-colors hidden sm:block"
          >
            사이트 보기 →
          </a>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-1.5 bg-[#C0392B] hover:bg-red-700 text-white text-[12px] font-bold px-4 py-2 transition-colors disabled:opacity-60"
          >
            <Save className="size-3.5" />
            {saving ? "저장 중..." : "저장"}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-900 text-[12px] px-3 py-2 transition-colors"
          >
            <LogOut className="size-3.5" />
            <span className="hidden sm:block">로그아웃</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-48 shrink-0 bg-white border-r border-gray-200 p-3">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setNav(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-medium transition-colors text-left ${
                  nav === item.id
                    ? "bg-[#C0392B] text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-[10px] text-gray-300 px-3 leading-relaxed">
              저장 버튼을 누르면 웹사이트에 즉시 반영됩니다.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto">

          {/* ── 홈페이지 ── */}
          {nav === "home" && (
            <div className="max-w-4xl space-y-6">
              <div>
                <h2 className="text-[20px] font-bold text-gray-900 mb-1">홈페이지</h2>
                <p className="text-[12px] text-gray-400">
                  홈페이지 메인 섹션 텍스트를 수정합니다.
                </p>
              </div>

              <div className="flex gap-1 bg-gray-100 p-1 w-fit">
                {(
                  [
                    { id: "process", label: "제조 프로세스" },
                    { id: "capabilities", label: "기술 역량" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setHomeTab(tab.id)}
                    className={`px-4 py-2 text-[12px] font-semibold transition-colors ${
                      homeTab === tab.id
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {homeTab === "process" && (
                <div className="bg-white border border-gray-200 p-6 space-y-4">
                  <h3 className="text-[14px] font-bold text-gray-900">제조 프로세스 6단계</h3>
                  <p className="text-[12px] text-gray-400 -mt-2">
                    각 단계 제목, 카드 설명, 모달 상세 내용을 편집하세요.
                  </p>
                  <ProcessEditor steps={processSteps} onChange={setProcessSteps} />
                </div>
              )}

              {homeTab === "capabilities" && (
                <div className="bg-white border border-gray-200 p-6 space-y-4">
                  <h3 className="text-[14px] font-bold text-gray-900">기술 역량 12개</h3>
                  <p className="text-[12px] text-gray-400 -mt-2">
                    각 역량 카드의 제목과 설명을 편집하세요.
                  </p>
                  <CapabilityEditor caps={capabilities} onChange={setCapabilities} />
                </div>
              )}
            </div>
          )}

          {/* ── 사업영역 ── */}
          {nav === "business" && (
            <div className="max-w-4xl space-y-6">
              <div>
                <h2 className="text-[20px] font-bold text-gray-900 mb-1">사업영역</h2>
                <p className="text-[12px] text-gray-400">
                  각 사업 부문의 텍스트와 제품 목록을 수정합니다.
                </p>
              </div>

              {/* Dept tabs */}
              <div className="flex gap-1 bg-gray-100 p-1 w-fit">
                {businessTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setBusinessTab(tab.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold transition-colors ${
                      businessTab === tab.id
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <span className="text-[10px] font-mono text-[#C0392B]">{tab.index}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="bg-white border border-gray-200 p-6 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <span className="text-[10px] font-mono text-[#C0392B] tracking-wider bg-red-50 px-2 py-1">
                    {businessTabs.find((t) => t.id === businessTab)?.index}
                  </span>
                  <h3 className="text-[14px] font-bold text-gray-900">
                    {businessTabs.find((t) => t.id === businessTab)?.label}
                  </h3>
                </div>
                <DeptEditor
                  deptId={businessTab}
                  content={currentDept.content}
                  onChange={currentDept.onChange}
                />
              </div>
            </div>
          )}

          {/* ── 이미지 관리 ── */}
          {nav === "images" && (
            <div className="max-w-3xl space-y-6">
              <div>
                <h2 className="text-[20px] font-bold text-gray-900 mb-1">이미지 관리</h2>
                <p className="text-[12px] text-gray-400">
                  제품 이미지를 업로드하면 해당 제품 카드에 즉시 반영됩니다. 제품 ID는 사업영역에서 설정한 ID와 동일하게 입력하세요.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6">
                <ImageManager images={images} onImageUpload={handleImageUpload} />
              </div>
            </div>
          )}

        </main>
      </div>

      {toast && <Toast msg={toast.msg} type={toast.type} />}
    </div>
  );
}
