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
  Building2,
  Globe2,
  Users,
} from "lucide-react";
import type {
  SiteContent,
  ProcessStepContent,
  CapabilityContent,
  DeptContent,
  ProductContent,
  CompanyContent,
  LocationData,
  VisionMeaningItem,
  CoreValueItem,
  SubsidiaryItem,
  HistoryEntry,
  HistoryEvent,
  GlobalSiteItem,
  ClientItem,
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

/* ── 회사 소개 에디터 ───────────────────────── */

const DEFAULT_CEO_OPENING =
  "범진은 고객의 행복한 삶이라는 가치 실현을 위해 끊임없이 도전하며 성장해 왔습니다.";

const DEFAULT_CEO_PARAGRAPHS = [
  "1991년 창립 이후 범진은 견고한 기술력과 투명한 경영을 바탕으로 국내 시장에서 경쟁력을 확보하고, 세계 각국에 생산기지를 구축하며 음향기기 및 금형·사출 분야의 전문 기업으로 성장해 왔습니다. 모두가 불가능하다고 했던 꿈을 현실로 만들어 온 지난 시간처럼, 범진은 미래를 향한 도전을 멈추지 않을 것입니다.",
  "범진은 단순한 외형적 성장에 만족하지 않습니다. 지속적인 투자와 연구개발을 통해 고객에게 더 큰 가치를 제공하고, 글로벌 시장에서 신뢰받는 기업으로 자리매김하기 위해 최선을 다하고 있습니다. 고객의 성공이 곧 우리의 성공이라는 믿음 아래 최고의 품질과 혁신적인 기술로 고객 만족을 실현해 나가겠습니다.",
  "또한 범진은 고객, 임직원, 협력사와 함께 성장하는 기업을 지향합니다. 신뢰와 투명성을 바탕으로 정도경영을 실천하며, 인재를 소중히 여기고 사회적 책임을 다하는 기업으로서 지속 가능한 미래를 만들어 가겠습니다.",
  "저희 임직원 모두는 현재의 자부심을 지키며 미래에 대한 확고한 비전으로 새로운 내일을 향해 나아가겠습니다.",
  "앞으로도 범진의 도전과 성장에 변함없는 관심과 성원을 부탁드립니다.",
];

const DEFAULT_LOCATIONS: LocationData[] = [
  {
    name: "범진전자 수원사업장",
    type: "본사 · 전자사업장",
    address: "경기도 수원시 권선구 산업로155번길 217 (고색동)",
    phone: "031-493-9415",
    note: "1호선 고색역 인근",
  },
  {
    name: "범진IND 금형사업장",
    type: "금형 제조",
    address: "경기도 수원시 권선구 고색동",
    phone: "031-676-1461",
    note: "금형 설계 및 제작 전문 사업장",
  },
  {
    name: "범진IND 성형사업장",
    type: "사출성형 제조",
    address: "경기도 안성시",
    phone: "031-210-4930",
    note: "생활가전·자동차 부품 사출성형",
  },
];

const DEFAULT_VISION_STATEMENT = '"범진은 고객과 범진人의 동행으로 성장한다."';

const DEFAULT_VISION_MEANING: VisionMeaningItem[] = [
  { term: "범진은", desc: "글로벌 범진 전체를 의미하며, 모든 사업과 성장의 중심이 되는 우리 모두를 뜻합니다." },
  { term: "고객은", desc: "고객, 협력사, 주주 등 범진과 함께하는 모든 파트너를 의미합니다." },
  { term: "범진인은", desc: "범진의 모든 사업을 이끌어가는 구성원 전체를 의미합니다." },
  { term: "동행으로는", desc: "핵심가치의 실천을 통해 고객을 감동시키고 일류 경쟁력을 확보하는 것을 의미합니다." },
  { term: "성장한다는", desc: "도전과 혁신을 통한 지속성장으로 백년기업을 추구하고 구성원의 행복과 가치를 실현하는 것을 의미합니다." },
];

const DEFAULT_CORE_VALUES: CoreValueItem[] = [
  { num: "01", title: "고객 최우선", en: "Customer First", body: "최고의 제품과 최상의 서비스를 제공하는 것을 최우선으로 하며, 범진의 모든 가치 중심에 고객을 두고 고객감동 문화를 만들어갑니다." },
  { num: "02", title: "인재존중과 열린 조직문화", en: "People & Culture", body: "기업의 기본은 사람이라는 신념 아래 우수한 인재를 육성하고, 구성원들이 열정과 꿈을 펼칠 수 있는 행복한 회사를 만들어갑니다." },
  { num: "03", title: "도전과 실행", en: "Challenge & Execution", body: "급변하는 글로벌 경영환경 속에서도 기존의 틀을 뛰어넘는 차별화된 아이디어와 창의적인 실행력으로 목표를 달성합니다." },
  { num: "04", title: "열린 소통과 협력", en: "Communication & Partnership", body: "고객, 협력사, 그리고 내부 조직 간의 원활한 소통과 협력을 통해 조직 발전의 시너지 효과를 창출합니다." },
  { num: "05", title: "투명·정도경영", en: "Integrity Management", body: "고객과 구성원의 신뢰를 바탕으로 투명경영과 준법경영을 실천하며, 사회적 책임을 다하는 지속가능한 기업으로 성장합니다." },
];

const DEFAULT_SUBSIDIARIES: SubsidiaryItem[] = [
  {
    name: "범진전자", en: "Bumjin Electronics",
    tagline: "글로벌 전자제품 통합 제조 솔루션",
    desc: "범진전자는 글로벌 전자제품 제조 전문 기업으로 연구개발부터 생산, 품질관리까지 통합 제조 솔루션을 제공합니다.",
    locations: ["범진전자 (한국)", "범진전자 중국", "범진전자 베트남", "범진전자 인도네시아"],
    revenue: "3,578억", employees: "2,150", productsLabel: "주력 제품",
    products: ["Sound Bar", "Speaker", "Home Theater"],
    roles: ["전자제품 연구개발", "ODM/OEM 생산", "글로벌 생산 및 품질관리"],
    dark: true,
  },
  {
    name: "범진IND", en: "Bumjin IND",
    tagline: "정밀 금형·사출성형 핵심 부품 공급",
    desc: "범진IND는 금형 설계·제작 및 사출성형 분야의 전문 기업으로 생활가전과 자동차 산업에 필요한 핵심 부품을 공급하고 있습니다.",
    locations: ["범진IND 금형·성형사업장", "범진IND 멕시코", "범진IND 헝가리"],
    revenue: "2,069억", employees: "1,200", productsLabel: "주력 사업",
    products: ["금형 설계·제작", "생활가전 사출성형", "자동차 부품 사출성형"],
    roles: ["정밀 금형 개발", "사출성형 생산", "글로벌 제조 지원"],
    dark: false,
  },
];

const DEFAULT_HISTORY_DATA: HistoryEntry[] = [
  { year: "2023", events: [{ month: "02", text: "DENON 거래 개시 (AV Receiver 생산)" }] },
  { year: "2019", events: [{ month: "10", text: "범진전자베트남 유한공사 설립" }] },
  { year: "2018", events: [{ month: "01", text: "멀티미디어연구소 설립 (사운드바 자체 개발)" }] },
  { year: "2017", events: [{ month: "12", text: "범진 신사옥 신축 완공" }] },
  { year: "2016", events: [{ month: "12", text: "제53회 무역의 날 3,000만불 수출의 탑 수상" }] },
  { year: "2015", events: [{ month: "12", text: "블루투스 스피커 출시 (자사 브랜드 : TONN)" }] },
  { year: "2014", events: [{ month: "12", text: "삼성전자(주) 자랑스런 삼성인상 특별상 수상" }, { month: "08", text: "헝가리범진전자 KFT 설립" }, { month: "02", text: "삼성전자(주) 올해의 강소기업 인증" }] },
  { year: "2013", events: [{ month: "07", text: "범진아이엔디(주) 수원공장 신축 이전" }] },
  { year: "2011", events: [{ month: "11", text: "제48회 무역의 날 500만불 수출의 탑 수상" }] },
  { year: "2010", events: [{ month: "04", text: "범진전자 인도네시아 설립 (스피커시스템, 사출)" }] },
  { year: "2008", events: [{ month: "09", text: "범진시엔엘(주) 기업부설연구소 인증" }, { month: "08", text: "범진시엔엘(주) 안산공장 신축 이전" }, { month: "01", text: "천진범진전자유한공사 설립" }] },
  { year: "2007", events: [{ month: "09", text: "범진공업(주) 기업부설연구소 인증" }] },
  { year: "2005", events: [{ month: "04", text: "범진공업(주) 성형사업부 설립" }] },
  { year: "2004", events: [{ month: "08", text: "중국범진전자유한공사 설립 (스피커시스템)" }, { month: "05", text: "범진전자(주) 설립 (스피커시스템)" }] },
  { year: "1991", events: [{ month: "10", text: "범진공업사 설립 (금형, 서울 영등포 소재)" }] },
];

const DEFAULT_GLOBAL_SITES: GlobalSiteItem[] = [
  { city: "수원, 한국", role: "HQ · 금형사업장", type: "hq" },
  { city: "안성, 한국", role: "사출성형 공장", type: "plant" },
  { city: "티후아나, 멕시코", role: "BJAM MEXICANA", type: "plant" },
  { city: "찌카랑, 인도네시아", role: "동남아 생산 거점", type: "plant" },
  { city: "꽝닌, 베트남", role: "베트남 제조 허브", type: "plant" },
  { city: "후이저우, 중국", role: "광동 부품 공장", type: "plant" },
  { city: "뢰린치, 헝가리", role: "유럽 제조 거점", type: "plant" },
];

const DEFAULT_CLIENTS: ClientItem[] = [
  { id: "samsung", name: "Samsung Electronics" },
  { id: "lg", name: "LG Electronics" },
  { id: "sony", name: "SONY" },
  { id: "harman-kardon", name: "Harman Kardon" },
  { id: "jbl", name: "JBL" },
  { id: "panasonic", name: "Panasonic" },
  { id: "hp", name: "HP" },
  { id: "dell", name: "Dell" },
];

function initCompany(stored: CompanyContent | null): CompanyContent {
  const defaults: CompanyContent = {
    overviewHeadline: "도전과 혁신,\n사람과 고객\n중심의 기업.",
    overviewIntro:
      "범진은 글로벌 전자·제조 전문 기업으로, 음향기기와 금형·사출 분야에서 30년 이상의 기술력과 신뢰를 축적해 왔습니다.",
    coreMessage:
      '"도전과 혁신, 인재와 고객 중심의 가치 실현을 통해 지속 가능한 성장을 만들어가는 기업"',
    ceoOpening: DEFAULT_CEO_OPENING,
    ceoParagraphs: DEFAULT_CEO_PARAGRAPHS,
    visionStatement: DEFAULT_VISION_STATEMENT,
    visionMeaning: DEFAULT_VISION_MEANING,
    coreValues: DEFAULT_CORE_VALUES,
    subsidiaries: DEFAULT_SUBSIDIARIES,
    historyData: DEFAULT_HISTORY_DATA,
    locations: DEFAULT_LOCATIONS,
  };
  if (!stored) return defaults;
  return {
    overviewHeadline: stored.overviewHeadline ?? defaults.overviewHeadline,
    overviewIntro: stored.overviewIntro ?? defaults.overviewIntro,
    coreMessage: stored.coreMessage ?? defaults.coreMessage,
    ceoOpening: stored.ceoOpening ?? defaults.ceoOpening,
    ceoParagraphs: stored.ceoParagraphs ?? defaults.ceoParagraphs,
    visionStatement: stored.visionStatement ?? defaults.visionStatement,
    visionMeaning: stored.visionMeaning ?? defaults.visionMeaning,
    coreValues: stored.coreValues ?? defaults.coreValues,
    subsidiaries: stored.subsidiaries ?? defaults.subsidiaries,
    historyData: stored.historyData ?? defaults.historyData,
    locations: stored.locations ?? defaults.locations,
  };
}

type CompanyTab = "overview" | "ceo" | "vision" | "group" | "history" | "location";

function CompanyEditor({
  content,
  onChange,
}: {
  content: CompanyContent;
  onChange: (c: CompanyContent) => void;
}) {
  const [tab, setTab] = useState<CompanyTab>("overview");
  const [editingLoc, setEditingLoc] = useState<number | null>(null);
  const [editingGroup, setEditingGroup] = useState<number | null>(null);
  const [editingYear, setEditingYear] = useState<number | null>(null);
  const [editingVM, setEditingVM] = useState<number | null>(null);
  const [editingCV, setEditingCV] = useState<number | null>(null);

  function set<K extends keyof CompanyContent>(key: K, value: CompanyContent[K]) {
    onChange({ ...content, [key]: value });
  }

  // CEO
  function updateParagraph(i: number, value: string) {
    const updated = [...(content.ceoParagraphs ?? DEFAULT_CEO_PARAGRAPHS)];
    updated[i] = value;
    set("ceoParagraphs", updated);
  }
  function addParagraph() {
    set("ceoParagraphs", [...(content.ceoParagraphs ?? DEFAULT_CEO_PARAGRAPHS), ""]);
  }
  function deleteParagraph(i: number) {
    set("ceoParagraphs", (content.ceoParagraphs ?? DEFAULT_CEO_PARAGRAPHS).filter((_, j) => j !== i));
  }

  // Location
  function updateLocation(i: number, data: Partial<LocationData>) {
    set("locations", (content.locations ?? DEFAULT_LOCATIONS).map((l, j) => j === i ? { ...l, ...data } : l));
  }
  function addLocation() {
    const locs = content.locations ?? DEFAULT_LOCATIONS;
    set("locations", [...locs, { name: "새 사업장", type: "사업장 유형", address: "주소를 입력하세요", phone: "000-000-0000", note: "" }]);
    setEditingLoc(locs.length);
  }
  function deleteLocation(i: number) {
    set("locations", (content.locations ?? DEFAULT_LOCATIONS).filter((_, j) => j !== i));
    if (editingLoc === i) setEditingLoc(null);
  }

  // Vision Meaning
  function updateVisionMeaning(i: number, data: Partial<VisionMeaningItem>) {
    set("visionMeaning", (content.visionMeaning ?? DEFAULT_VISION_MEANING).map((v, j) => j === i ? { ...v, ...data } : v));
  }
  function addVisionMeaning() {
    const vm = content.visionMeaning ?? DEFAULT_VISION_MEANING;
    set("visionMeaning", [...vm, { term: "새 용어", desc: "설명을 입력하세요" }]);
    setEditingVM(vm.length);
  }
  function deleteVisionMeaning(i: number) {
    set("visionMeaning", (content.visionMeaning ?? DEFAULT_VISION_MEANING).filter((_, j) => j !== i));
    if (editingVM === i) setEditingVM(null);
  }

  // Core Values
  function updateCoreValue(i: number, data: Partial<CoreValueItem>) {
    set("coreValues", (content.coreValues ?? DEFAULT_CORE_VALUES).map((c, j) => j === i ? { ...c, ...data } : c));
  }
  function addCoreValue() {
    const cv = content.coreValues ?? DEFAULT_CORE_VALUES;
    set("coreValues", [...cv, { num: String(cv.length + 1).padStart(2, "0"), title: "새 핵심가치", en: "New Core Value", body: "설명을 입력하세요" }]);
    setEditingCV(cv.length);
  }
  function deleteCoreValue(i: number) {
    set("coreValues", (content.coreValues ?? DEFAULT_CORE_VALUES).filter((_, j) => j !== i));
    if (editingCV === i) setEditingCV(null);
  }

  // Subsidiaries
  function updateSubsidiary(i: number, data: Partial<SubsidiaryItem>) {
    set("subsidiaries", (content.subsidiaries ?? DEFAULT_SUBSIDIARIES).map((s, j) => j === i ? { ...s, ...data } : s));
  }
  function addSubsidiary() {
    const subs = content.subsidiaries ?? DEFAULT_SUBSIDIARIES;
    set("subsidiaries", [...subs, { name: "새 계열사", en: "New Subsidiary", tagline: "", desc: "", locations: [], revenue: "0억", employees: "0", productsLabel: "주력 제품", products: [], roles: [], dark: false }]);
    setEditingGroup(subs.length);
  }
  function deleteSubsidiary(i: number) {
    set("subsidiaries", (content.subsidiaries ?? DEFAULT_SUBSIDIARIES).filter((_, j) => j !== i));
    if (editingGroup === i) setEditingGroup(null);
  }

  // History
  function updateHistoryYear(i: number, year: string) {
    set("historyData", (content.historyData ?? DEFAULT_HISTORY_DATA).map((h, j) => j === i ? { ...h, year } : h));
  }
  function addHistoryYear() {
    const hd = content.historyData ?? DEFAULT_HISTORY_DATA;
    set("historyData", [{ year: String(new Date().getFullYear()), events: [{ month: "01", text: "" }] }, ...hd]);
    setEditingYear(0);
  }
  function deleteHistoryYear(i: number) {
    set("historyData", (content.historyData ?? DEFAULT_HISTORY_DATA).filter((_, j) => j !== i));
    if (editingYear === i) setEditingYear(null);
  }
  function updateHistoryEvent(yi: number, ei: number, data: Partial<HistoryEvent>) {
    set("historyData", (content.historyData ?? DEFAULT_HISTORY_DATA).map((h, i) =>
      i !== yi ? h : { ...h, events: h.events.map((ev, j) => j === ei ? { ...ev, ...data } : ev) }
    ));
  }
  function addHistoryEvent(yi: number) {
    set("historyData", (content.historyData ?? DEFAULT_HISTORY_DATA).map((h, i) =>
      i !== yi ? h : { ...h, events: [...h.events, { month: "01", text: "" }] }
    ));
  }
  function deleteHistoryEvent(yi: number, ei: number) {
    set("historyData", (content.historyData ?? DEFAULT_HISTORY_DATA).map((h, i) =>
      i !== yi ? h : { ...h, events: h.events.filter((_, j) => j !== ei) }
    ));
  }

  const companyTabs: { id: CompanyTab; label: string }[] = [
    { id: "overview", label: "개요" },
    { id: "ceo",      label: "CEO 인사말" },
    { id: "vision",   label: "비전" },
    { id: "group",    label: "범진" },
    { id: "history",  label: "연혁" },
    { id: "location", label: "찾아오시는 길" },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-1 bg-gray-100 p-1">
        {companyTabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 text-[12px] font-semibold transition-colors ${
              tab === t.id ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="space-y-5">
          <Field label="대제목 (줄바꿈은 \\n 입력)" value={content.overviewHeadline ?? ""} onChange={(v) => set("overviewHeadline", v)} multiline rows={3} hint="두 번째 줄은 빨간색으로 표시됩니다" />
          <Field label="소개 문구" value={content.overviewIntro ?? ""} onChange={(v) => set("overviewIntro", v)} multiline rows={3} />
          <Field label="Core Message" value={content.coreMessage ?? ""} onChange={(v) => set("coreMessage", v)} multiline rows={2} />
        </div>
      )}

      {tab === "ceo" && (
        <div className="space-y-5">
          <Field label="CEO 인사말 첫 문장 (굵게 표시)" value={content.ceoOpening ?? DEFAULT_CEO_OPENING} onChange={(v) => set("ceoOpening", v)} multiline rows={2} />
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">본문 단락</p>
            {(content.ceoParagraphs ?? DEFAULT_CEO_PARAGRAPHS).map((para, i) => (
              <div key={i} className="border border-gray-200 p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-400">단락 {i + 1}</span>
                  <button type="button" onClick={() => deleteParagraph(i)} className="flex items-center gap-1 text-[10px] text-red-400 hover:text-red-600">
                    <Trash2 className="size-3" /> 삭제
                  </button>
                </div>
                <textarea value={para} onChange={(e) => updateParagraph(i, e.target.value)} rows={3} className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[12px] px-3 py-2.5 focus:outline-none focus:border-red-400 resize-y font-mono" />
              </div>
            ))}
            <button type="button" onClick={addParagraph} className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-gray-300 hover:border-gray-500 text-[12px] text-gray-500 hover:text-gray-900 transition-colors">
              <Plus className="size-3.5" /> 단락 추가
            </button>
          </div>
          <p className="text-[11px] text-gray-400 bg-blue-50 border border-blue-100 p-3">
            💡 CEO 사진은 이미지 관리에서 <strong>company-ceo</strong> ID로 업로드하세요.
          </p>
        </div>
      )}

      {tab === "vision" && (
        <div className="space-y-6">
          <Field label="비전 선언문" value={content.visionStatement ?? DEFAULT_VISION_STATEMENT} onChange={(v) => set("visionStatement", v)} multiline rows={2} />

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">비전의 의미</p>
              <span className="text-[10px] text-gray-400">{(content.visionMeaning ?? DEFAULT_VISION_MEANING).length}개</span>
            </div>
            {(content.visionMeaning ?? DEFAULT_VISION_MEANING).map((vm, i) => (
              <div key={i} className="border border-gray-200">
                <button type="button" onClick={() => setEditingVM(editingVM === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[12px] font-bold text-red-600 shrink-0">{vm.term}</span>
                    <span className="text-[11px] text-gray-400 truncate">{vm.desc}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button type="button" onClick={(e) => { e.stopPropagation(); deleteVisionMeaning(i); }} className="text-red-400 hover:text-red-600"><Trash2 className="size-3.5" /></button>
                    {editingVM === i ? <ChevronUp className="size-4 text-gray-400" /> : <ChevronDown className="size-4 text-gray-400" />}
                  </div>
                </button>
                {editingVM === i && (
                  <div className="p-4 space-y-3">
                    <Field label="용어" value={vm.term} onChange={(v) => updateVisionMeaning(i, { term: v })} />
                    <Field label="설명" value={vm.desc} onChange={(v) => updateVisionMeaning(i, { desc: v })} multiline rows={2} />
                  </div>
                )}
              </div>
            ))}
            <button type="button" onClick={addVisionMeaning} className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-gray-300 hover:border-gray-500 text-[12px] text-gray-500 hover:text-gray-900 transition-colors">
              <Plus className="size-3.5" /> 의미 추가
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">핵심가치</p>
              <span className="text-[10px] text-gray-400">{(content.coreValues ?? DEFAULT_CORE_VALUES).length}개</span>
            </div>
            {(content.coreValues ?? DEFAULT_CORE_VALUES).map((cv, i) => (
              <div key={i} className="border border-gray-200">
                <button type="button" onClick={() => setEditingCV(editingCV === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[10px] font-mono text-red-600 shrink-0">{cv.num}</span>
                    <span className="text-[13px] font-semibold text-gray-900 truncate">{cv.title}</span>
                    <span className="text-[11px] text-gray-400 hidden sm:block">{cv.en}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button type="button" onClick={(e) => { e.stopPropagation(); deleteCoreValue(i); }} className="text-red-400 hover:text-red-600"><Trash2 className="size-3.5" /></button>
                    {editingCV === i ? <ChevronUp className="size-4 text-gray-400" /> : <ChevronDown className="size-4 text-gray-400" />}
                  </div>
                </button>
                {editingCV === i && (
                  <div className="p-4 space-y-3">
                    <div className="grid sm:grid-cols-3 gap-3">
                      <Field label="번호" value={cv.num} onChange={(v) => updateCoreValue(i, { num: v })} hint="예: 01" />
                      <Field label="제목 (한국어)" value={cv.title} onChange={(v) => updateCoreValue(i, { title: v })} />
                      <Field label="제목 (영어)" value={cv.en} onChange={(v) => updateCoreValue(i, { en: v })} />
                    </div>
                    <Field label="설명" value={cv.body} onChange={(v) => updateCoreValue(i, { body: v })} multiline rows={2} />
                  </div>
                )}
              </div>
            ))}
            <button type="button" onClick={addCoreValue} className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-gray-300 hover:border-gray-500 text-[12px] text-gray-500 hover:text-gray-900 transition-colors">
              <Plus className="size-3.5" /> 핵심가치 추가
            </button>
          </div>
        </div>
      )}

      {tab === "group" && (
        <div className="space-y-2">
          {(content.subsidiaries ?? DEFAULT_SUBSIDIARIES).map((sub, i) => (
            <div key={i} className="border border-gray-200">
              <button type="button" onClick={() => setEditingGroup(editingGroup === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[13px] font-semibold text-gray-900">{sub.name}</span>
                  <span className="text-[11px] text-gray-400 hidden sm:block">{sub.en}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button type="button" onClick={(e) => { e.stopPropagation(); deleteSubsidiary(i); }} className="text-red-400 hover:text-red-600"><Trash2 className="size-3.5" /></button>
                  {editingGroup === i ? <ChevronUp className="size-4 text-gray-400" /> : <ChevronDown className="size-4 text-gray-400" />}
                </div>
              </button>
              {editingGroup === i && (
                <div className="p-4 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="회사명 (한국어)" value={sub.name} onChange={(v) => updateSubsidiary(i, { name: v })} />
                    <Field label="회사명 (영어)" value={sub.en} onChange={(v) => updateSubsidiary(i, { en: v })} />
                  </div>
                  <Field label="태그라인" value={sub.tagline} onChange={(v) => updateSubsidiary(i, { tagline: v })} />
                  <Field label="소개" value={sub.desc} onChange={(v) => updateSubsidiary(i, { desc: v })} multiline rows={3} />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="매출" value={sub.revenue} onChange={(v) => updateSubsidiary(i, { revenue: v })} hint="예: 3,578억" />
                    <Field label="임직원 수" value={sub.employees} onChange={(v) => updateSubsidiary(i, { employees: v })} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">사업장 (줄바꿈으로 구분)</label>
                    <textarea value={sub.locations.join("\n")} onChange={(e) => updateSubsidiary(i, { locations: e.target.value.split("\n").map(s => s.trim()).filter(Boolean) })} rows={3} className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[12px] px-3 py-2.5 focus:outline-none focus:border-red-400 resize-y font-mono" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="제품 레이블" value={sub.productsLabel} onChange={(v) => updateSubsidiary(i, { productsLabel: v })} hint="예: 주력 제품" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">주력 제품/사업 (줄바꿈으로 구분)</label>
                    <textarea value={sub.products.join("\n")} onChange={(e) => updateSubsidiary(i, { products: e.target.value.split("\n").map(s => s.trim()).filter(Boolean) })} rows={3} className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[12px] px-3 py-2.5 focus:outline-none focus:border-red-400 resize-y font-mono" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">주요 역할 (줄바꿈으로 구분)</label>
                    <textarea value={sub.roles.join("\n")} onChange={(e) => updateSubsidiary(i, { roles: e.target.value.split("\n").map(s => s.trim()).filter(Boolean) })} rows={3} className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[12px] px-3 py-2.5 focus:outline-none focus:border-red-400 resize-y font-mono" />
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">다크 테마</label>
                    <button
                      type="button"
                      onClick={() => updateSubsidiary(i, { dark: !sub.dark })}
                      className={`relative w-10 h-5 rounded-full transition-colors ${sub.dark ? "bg-gray-900" : "bg-gray-300"}`}
                    >
                      <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${sub.dark ? "left-5" : "left-0.5"}`} />
                    </button>
                    <span className="text-[11px] text-gray-500">{sub.dark ? "다크 배경" : "라이트 배경"}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
          <button type="button" onClick={addSubsidiary} className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-gray-300 hover:border-gray-500 text-[12px] text-gray-500 hover:text-gray-900 transition-colors">
            <Plus className="size-3.5" /> 계열사 추가
          </button>
        </div>
      )}

      {tab === "history" && (
        <div className="space-y-2">
          <div className="flex justify-end">
            <button type="button" onClick={addHistoryYear} className="flex items-center gap-2 py-2 px-4 bg-gray-900 text-white text-[12px] hover:bg-gray-700 transition-colors">
              <Plus className="size-3.5" /> 연도 추가
            </button>
          </div>
          {(content.historyData ?? DEFAULT_HISTORY_DATA).map((entry, i) => (
            <div key={i} className="border border-gray-200">
              <button type="button" onClick={() => setEditingYear(editingYear === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-[18px] font-black text-gray-900">{entry.year}</span>
                  <span className="text-[11px] text-gray-400">{entry.events.length}개 항목</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button type="button" onClick={(e) => { e.stopPropagation(); deleteHistoryYear(i); }} className="text-red-400 hover:text-red-600"><Trash2 className="size-3.5" /></button>
                  {editingYear === i ? <ChevronUp className="size-4 text-gray-400" /> : <ChevronDown className="size-4 text-gray-400" />}
                </div>
              </button>
              {editingYear === i && (
                <div className="p-4 space-y-4">
                  <Field label="연도" value={entry.year} onChange={(v) => updateHistoryYear(i, v)} hint="예: 2023" />
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">이벤트</p>
                    {entry.events.map((ev, j) => (
                      <div key={j} className="flex gap-2 items-center border border-gray-100 p-2 bg-gray-50">
                        <input type="text" value={ev.month} onChange={(e) => updateHistoryEvent(i, j, { month: e.target.value })} placeholder="월" className="w-12 bg-white border border-gray-200 text-gray-900 text-[12px] px-2 py-1.5 focus:outline-none focus:border-red-400 font-mono text-center shrink-0" />
                        <input type="text" value={ev.text} onChange={(e) => updateHistoryEvent(i, j, { text: e.target.value })} className="flex-1 bg-white border border-gray-200 text-gray-900 text-[12px] px-2 py-1.5 focus:outline-none focus:border-red-400 min-w-0" placeholder="내용을 입력하세요" />
                        <button type="button" onClick={() => deleteHistoryEvent(i, j)} className="text-red-400 hover:text-red-600 shrink-0"><Trash2 className="size-3.5" /></button>
                      </div>
                    ))}
                    <button type="button" onClick={() => addHistoryEvent(i)} className="w-full flex items-center justify-center gap-2 py-2 border border-dashed border-gray-300 hover:border-gray-500 text-[12px] text-gray-500 hover:text-gray-900 transition-colors">
                      <Plus className="size-3.5" /> 이벤트 추가
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === "location" && (
        <div className="space-y-3">
          {(content.locations ?? DEFAULT_LOCATIONS).map((loc, i) => (
            <div key={i} className="border border-gray-200">
              <button type="button" onClick={() => setEditingLoc(editingLoc === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[10px] font-mono text-[#C0392B]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[13px] font-semibold text-gray-900 truncate">{loc.name}</span>
                  <span className="text-[11px] text-gray-400 hidden sm:block">{loc.type}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button type="button" onClick={(e) => { e.stopPropagation(); deleteLocation(i); }} className="text-red-400 hover:text-red-600"><Trash2 className="size-3.5" /></button>
                  {editingLoc === i ? <ChevronUp className="size-4 text-gray-400" /> : <ChevronDown className="size-4 text-gray-400" />}
                </div>
              </button>
              {editingLoc === i && (
                <div className="p-4 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="사업장명" value={loc.name} onChange={(v) => updateLocation(i, { name: v })} />
                    <Field label="유형" value={loc.type} onChange={(v) => updateLocation(i, { type: v })} hint="예: 본사 · 전자사업장" />
                  </div>
                  <Field label="주소" value={loc.address} onChange={(v) => updateLocation(i, { address: v })} hint="입력한 주소로 구글 지도가 자동 표시됩니다" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="전화번호" value={loc.phone} onChange={(v) => updateLocation(i, { phone: v })} />
                    <Field label="비고" value={loc.note} onChange={(v) => updateLocation(i, { note: v })} hint="예: 1호선 고색역 인근" />
                  </div>
                </div>
              )}
            </div>
          ))}
          <button type="button" onClick={addLocation} className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-gray-300 hover:border-gray-500 text-[12px] text-gray-500 hover:text-gray-900 transition-colors">
            <Plus className="size-3.5" /> 사업장 추가
          </button>
          <p className="text-[11px] text-gray-400 bg-blue-50 border border-blue-100 p-3">
            💡 주소를 수정하면 구글 지도가 자동으로 해당 위치를 표시합니다.
          </p>
        </div>
      )}
    </div>
  );
}

/* ── 메인 AdminDashboard ─────────────────────── */

type NavSection = "home" | "business" | "company" | "global" | "clients" | "images";
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

  // 회사 소개 데이터
  const [company, setCompany] = useState<CompanyContent>(() =>
    initCompany(initialContent.company)
  );

  // 글로벌 네트워크 데이터
  const [globalSites, setGlobalSites] = useState<GlobalSiteItem[]>(
    initialContent.global ?? DEFAULT_GLOBAL_SITES
  );

  // 고객사 데이터
  const [clients, setClients] = useState<ClientItem[]>(
    initialContent.clients ?? DEFAULT_CLIENTS
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
      company,
      global: globalSites,
      clients,
      images,
    }),
    [processSteps, capabilities, electronics, molding, startup, company, globalSites, clients, images]
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
    { id: "company",  label: "회사 소개",  icon: <Building2 className="size-4" /> },
    { id: "global",   label: "글로벌",     icon: <Globe2 className="size-4" /> },
    { id: "clients",  label: "고객사",     icon: <Users className="size-4" /> },
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

          {/* ── 회사 소개 ── */}
          {nav === "company" && (
            <div className="max-w-4xl space-y-6">
              <div>
                <h2 className="text-[20px] font-bold text-gray-900 mb-1">회사 소개</h2>
                <p className="text-[12px] text-gray-400">
                  회사 소개 페이지의 텍스트를 수정합니다. CEO 사진은 이미지 관리에서 <strong>company-ceo</strong> ID로 업로드하세요.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 space-y-4">
                <CompanyEditor content={company} onChange={setCompany} />
              </div>
            </div>
          )}

          {/* ── 글로벌 네트워크 ── */}
          {nav === "global" && (
            <div className="max-w-4xl space-y-6">
              <div>
                <h2 className="text-[20px] font-bold text-gray-900 mb-1">글로벌 네트워크</h2>
                <p className="text-[12px] text-gray-400">
                  홈페이지 글로벌 섹션에 표시되는 사업장 위치를 관리합니다.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 space-y-3">
                {globalSites.map((site, i) => (
                  <div key={i} className="border border-gray-200">
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-[10px] font-mono text-[#C0392B] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[13px] font-semibold text-gray-900 truncate">{site.city}</span>
                        <span className="text-[11px] text-gray-400 hidden sm:block truncate">{site.role}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setGlobalSites(globalSites.filter((_, j) => j !== i))}
                        className="text-red-400 hover:text-red-600 shrink-0"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="grid sm:grid-cols-3 gap-3">
                        <Field
                          label="도시명"
                          value={site.city}
                          onChange={(v) => setGlobalSites(globalSites.map((s, j) => j === i ? { ...s, city: v } : s))}
                          hint="예: 수원, 한국"
                        />
                        <Field
                          label="역할/설명"
                          value={site.role}
                          onChange={(v) => setGlobalSites(globalSites.map((s, j) => j === i ? { ...s, role: v } : s))}
                          hint="예: HQ · 금형사업장"
                        />
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-500 tracking-[2px] uppercase">유형</label>
                          <select
                            value={site.type}
                            onChange={(e) => setGlobalSites(globalSites.map((s, j) => j === i ? { ...s, type: e.target.value } : s))}
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[12px] px-3 py-2.5 focus:outline-none focus:border-red-400 transition-colors"
                          >
                            <option value="hq">hq (본사)</option>
                            <option value="plant">plant (공장)</option>
                            <option value="office">office (사무소)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setGlobalSites([...globalSites, { city: "새 도시, 국가", role: "역할을 입력하세요", type: "plant" }])}
                  className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-gray-300 hover:border-gray-500 text-[12px] text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Plus className="size-3.5" />
                  사업장 추가
                </button>
                <p className="text-[11px] text-gray-400 bg-blue-50 border border-blue-100 p-3">
                  💡 글로브 지도의 마커 위치는 도시명을 기반으로 자동 표시됩니다.
                </p>
              </div>
            </div>
          )}

          {/* ── 고객사 ── */}
          {nav === "clients" && (
            <div className="max-w-4xl space-y-6">
              <div>
                <h2 className="text-[20px] font-bold text-gray-900 mb-1">고객사</h2>
                <p className="text-[12px] text-gray-400">
                  홈페이지 고객사 섹션의 로고 슬라이더에 표시될 고객사 목록을 관리합니다.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 space-y-3">
                {clients.map((client, i) => (
                  <div key={i} className="border border-gray-200">
                    <div className="p-3 flex items-center gap-3">
                      <span className="text-[10px] font-mono text-[#C0392B] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <div className="flex-1 grid sm:grid-cols-2 gap-3">
                        <Field
                          label="고객사명"
                          value={client.name}
                          onChange={(v) => setClients(clients.map((c, j) => j === i ? { ...c, name: v } : c))}
                        />
                        <Field
                          label="ID (이미지 연동용)"
                          value={client.id}
                          onChange={(v) => setClients(clients.map((c, j) => j === i ? { ...c, id: v } : c))}
                          hint="이미지 관리에서 이 ID로 로고 이미지를 업로드하세요"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setClients(clients.filter((_, j) => j !== i))}
                        className="text-red-400 hover:text-red-600 shrink-0 mt-4"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setClients([...clients, { id: `client-${Date.now()}`, name: "새 고객사" }])}
                  className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-gray-300 hover:border-gray-500 text-[12px] text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Plus className="size-3.5" />
                  고객사 추가
                </button>
                <p className="text-[11px] text-gray-400 bg-blue-50 border border-blue-100 p-3">
                  💡 각 고객사 ID로 이미지 관리에서 로고를 업로드하면 슬라이더에 이미지가 표시됩니다. 이미지가 없으면 고객사명이 텍스트로 표시됩니다.
                </p>
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
