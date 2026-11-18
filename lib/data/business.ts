import type { Department, HeroStat } from "@/types/business";

export const HERO_STATS: HeroStat[] = [
  { value: "35년+", label: "제조 업력" },
  { value: "6개국", label: "글로벌 생산거점" },
  { value: "3개 부문", label: "전문 사업영역" },
];

export const BUSINESS_DEPARTMENTS: Department[] = [
  {
    id: "electronics",
    label: "전자부문",
    labelEn: "Electronics",
    index: "01",
    tagline: "Creative & Life",
    title: "당신 곁에 있는\n언제나 범진전자",
    description:
      "통통 튀는 아이디어와 철저한 품질 경영, 탄탄한 기술력을 바탕으로 한 One Stop Total Solution Provider. 제품의 설계부터 생산, 판매에 이르는 전 공정의 수직계열화를 통해 보다 효율적이고 경쟁력 있는 제품을 제공합니다.",
    odmTitle: "ODM이란?",
    odmBody:
      "제조자 개발생산(Original Development Manufacturing). 고객이 원하는 제품을 기획·설계부터 양산까지 범진전자가 전 과정을 책임집니다.",
    odmFlow: [
      { step: "01", title: "제품 기획" },
      { step: "02", title: "회로/기구 설계" },
      { step: "03", title: "시제품" },
      { step: "04", title: "양산 승인" },
      { step: "05", title: "생산" },
      { step: "06", title: "출하" },
    ],
    products: [
      {
        id: "channel-sound",
        name: "채널 사운드 시스템",
        nameEn: "Channel Sound System",
        description: "다채널 홈 오디오 시스템",
        icon: "Speaker",
      },
      {
        id: "ai-speaker",
        name: "AI 스피커",
        nameEn: "AI Speaker",
        description: "인공지능 음성인식 스피커",
        icon: "Mic2",
      },
      {
        id: "sound-stand",
        name: "사운드 스탠드",
        nameEn: "Sound Stand",
        description: "거치형 사운드 스탠드",
        icon: "MonitorSpeaker",
      },
      {
        id: "sound-bar",
        name: "사운드바",
        nameEn: "Sound Bar",
        description: "슬림 사운드바 솔루션",
        icon: "Radio",
      },
      {
        id: "vesa-stand",
        name: "베사 데스크 사운드 스탠드",
        nameEn: "Vesa Desk Sound Stand",
        description: "VESA 규격 데스크 마운트 사운드 스탠드",
        icon: "Monitor",
      },
    ],
    contacts: [
      {
        role: "전자부문 영업 문의",
        tel: "070-4603-3970",
        email: "odm_sales@bumjin.net",
      },
    ],
  },
  {
    id: "molding",
    label: "금형·성형부문",
    labelEn: "Mold & Molding",
    index: "02",
    tagline: "Customer Satisfaction",
    title: "고객 Needs에 최적화된\n금형 · 사출 솔루션",
    description:
      "플라스틱 제품의 無에서 有를 창출하는 핵심기술로, 일반 사출성형과 특수사출성형(고광택, 이중사출 등)의 제조 기술력과 설비를 보유하고 있습니다. 국내외 생산 거점을 기반으로 고부가가치 하이테크 솔루션을 제공합니다.",
    tags: ["생활가전", "자동차", "IT 기기", "기타 산업재"],
    products: [
      {
        id: "injection",
        name: "일반 사출성형",
        nameEn: "Injection Molding",
        description: "범용 플라스틱 부품 생산",
        icon: "Settings2",
      },
      {
        id: "high-gloss",
        name: "고광택 특수사출",
        nameEn: "High-Gloss Molding",
        description: "하이글로시 표면처리 기술",
        icon: "Sparkles",
      },
      {
        id: "two-shot",
        name: "이중사출",
        nameEn: "Two-Shot Molding",
        description: "Two-shot 복합 소재 성형",
        icon: "Layers",
      },
      {
        id: "mold-design",
        name: "금형 설계·제작",
        nameEn: "Mold Design & Manufacturing",
        description: "정밀 금형 자체 개발",
        icon: "PenTool",
      },
    ],
    contacts: [
      {
        role: "금형 담당",
        tel: "070-4016-4116",
        email: "pinboll0211@bumjin.net",
      },
      {
        role: "사출성형 담당",
        tel: "031-210-4881",
        email: "1119ho@bumjin.net",
      },
    ],
  },
  {
    id: "startup",
    label: "스타트업부문",
    labelEn: "Startup Support",
    index: "03",
    tagline: "Realize Your Ideas",
    title: "당신의 아이디어를\n범진의 기술이 실현합니다",
    description:
      "범진은 스타트업 제품에 개발투자부터 제품설계 → 금형제작 → 사출성형 → 완제품 조립/생산까지 One Stop System으로 전 제조공정을 책임집니다. IoT 기술과 AI가 함께하는 미래 기술 접목 제품 개발에도 적극 참여합니다.",
    processes: [
      {
        step: "01",
        title: "개발투자 확정",
        description:
          "아이디어의 상품성, 시장성, 투자규모 등을 검토하여 최적의 투자 방향을 결정합니다.",
      },
      {
        step: "02",
        title: "제품 설계",
        description:
          "범진의 우수한 설계 조직과 솔루션으로 아이디어를 충분히 반영하고 원가절감 설계로 제품 경쟁력을 확보합니다.",
      },
      {
        step: "03",
        title: "금형 제작 / 사출성형",
        description:
          "오랜 기간 부품제조 기업으로 성장한 금형·사출 원천기술력을 바탕으로 고품질 부품을 생산합니다.",
      },
      {
        step: "04",
        title: "완제품 조립 / 생산",
        description:
          "홈시어터, 사운드바 등 완성품 제조 능력을 바탕으로 원가 경쟁력을 갖춘 완성품을 양산합니다.",
      },
    ],
    successCases: [
      {
        id: "air-purifier",
        title: "웨이븐 공기청정시스템",
        subtitle: "IoT 연동 스마트 공기청정",
        icon: "Wind",
      },
      {
        id: "smart-umbrella",
        title: "스마트 우산",
        subtitle: "날씨 연동 자동 알림 우산",
        icon: "CloudRain",
      },
      {
        id: "smart-cradle",
        title: "스마트 크레들",
        subtitle: "무선충전 멀티 거치대",
        icon: "Smartphone",
      },
      {
        id: "smart-cane",
        title: "스마트 지팡이",
        subtitle: "낙상 감지·위치 추적 기능",
        icon: "Activity",
      },
    ],
    contacts: [
      {
        role: "스타트업 지원 문의",
        tel: "070-4016-4134",
        email: "huns3557@bumjin.net",
      },
    ],
  },
];

import type { Lang } from "@/lib/translations";

export function getBusinessHeroCopy(lang: Lang) {
  const map: Record<Lang, { badge: string; line1: string; line2: string; subtitle: string; stats: HeroStat[] }> = {
    ko: {
      badge: "Business Domain",
      line1: "범진전자가",
      line2: "할 수 있는 것",
      subtitle: "설계부터 생산, 판매까지 — 전 공정 수직계열화로 고객에게 가장 경쟁력 있는 제품을 제공합니다.",
      stats: HERO_STATS,
    },
    en: {
      badge: "Business Domain",
      line1: "What Bumjin",
      line2: "Can Build",
      subtitle: "From engineering and tooling to mass production and delivery — full vertical integration for competitive global manufacturing.",
      stats: [
        { value: "30+ Yrs", label: "Manufacturing Heritage" },
        { value: "6 Countries", label: "Global Production Hubs" },
        { value: "3 Divisions", label: "Core Business Units" },
      ],
    },
    zh: {
      badge: "Business Domain",
      line1: "范振电子的",
      line2: "核心业务能力",
      subtitle: "从设计研发到量产交付——通过全流程垂直整合，为客户提供最具竞争力的产品解决方案。",
      stats: [
        { value: "30年+", label: "制造经验" },
        { value: "6个国家", label: "全球生产基地" },
        { value: "3大部门", label: "专业事业领域" },
      ],
    },
    ja: {
      badge: "Business Domain",
      line1: "範珍電子が",
      line2: "できること",
      subtitle: "設計から量産・出荷まで——全工程の垂直統合により、お客様に最も競争力のある製品を提供します。",
      stats: [
        { value: "30年+", label: "製造実績" },
        { value: "6か国", label: "グローバル生産拠点" },
        { value: "3部門", label: "専門事業領域" },
      ],
    },
  };
  return map[lang];
}

export function getBusinessSectionLabels(lang: Lang) {
  const map: Record<Lang, {
    odmSubtitle: string;
    productLineup: string;
    capabilities: string;
    startupProcess: string;
    successCases: string;
  }> = {
    ko: {
      odmSubtitle: "제조자 개발생산",
      productLineup: "제품 라인업",
      capabilities: "기술 역량",
      startupProcess: "4단계 협업 프로세스",
      successCases: "성공사례",
    },
    en: {
      odmSubtitle: "Original Development Manufacturing",
      productLineup: "Product Lineup",
      capabilities: "Technical Capabilities",
      startupProcess: "4-Stage Collaboration Process",
      successCases: "Success Cases",
    },
    zh: {
      odmSubtitle: "自主设计制造 (ODM)",
      productLineup: "产品阵容",
      capabilities: "技术能力",
      startupProcess: "4阶段协作流程",
      successCases: "成功案例",
    },
    ja: {
      odmSubtitle: "自社設計製造 (ODM)",
      productLineup: "製品ラインナップ",
      capabilities: "技術力",
      startupProcess: "4段階協業プロセス",
      successCases: "成功事例",
    },
  };
  return map[lang];
}

export function getBusinessDepartments(lang: Lang): Department[] {
  if (lang === "ko") return BUSINESS_DEPARTMENTS;

  const localized: Record<Exclude<Lang, "ko">, Department[]> = {
    en: [
      {
        ...BUSINESS_DEPARTMENTS[0],
        label: "Electronics",
        title: "Always Beside You,\nBumjin Electronics",
        description:
          "A One-Stop Total Solution Provider backed by creative engineering, strict quality management, and vertical integration from R&D to mass production and global delivery.",
        odmBody:
          "Original Development Manufacturing — Bumjin takes full responsibility from product planning and acoustic/PCB engineering to mass production.",
        odmFlow: [
          { step: "01", title: "Planning" },
          { step: "02", title: "PCB / Mech Design" },
          { step: "03", title: "Prototyping" },
          { step: "04", title: "Mass Approval" },
          { step: "05", title: "Production" },
          { step: "06", title: "Shipment" },
        ],
        products: [
          { id: "channel-sound", name: "Channel Sound System", nameEn: "Channel Sound System", description: "Multi-channel home audio system", icon: "Speaker" },
          { id: "ai-speaker", name: "AI Speaker", nameEn: "AI Speaker", description: "Voice-enabled smart speaker", icon: "Mic2" },
          { id: "sound-stand", name: "Sound Stand", nameEn: "Sound Stand", description: "Pedestal TV sound stand", icon: "MonitorSpeaker" },
          { id: "sound-bar", name: "Sound Bar", nameEn: "Sound Bar", description: "Slim Dolby Atmos soundbar", icon: "Radio" },
          { id: "vesa-stand", name: "VESA Desk Sound Stand", nameEn: "Vesa Desk Sound Stand", description: "VESA-mounted desktop soundbar", icon: "Monitor" },
        ],
        contacts: [{ role: "Electronics Sales Inquiry", tel: "+82-70-4603-3970", email: "odm_sales@bumjin.net" }],
      },
      {
        ...BUSINESS_DEPARTMENTS[1],
        label: "Mold & Molding",
        title: "Optimized Mold &\nInjection Solutions",
        description:
          "Core plastic manufacturing technology spanning standard injection molding and specialized processes (high-gloss, two-shot molding) across domestic and global plants.",
        tags: ["Home Appliances", "Automotive", "IT Devices", "Industrial Parts"],
        products: [
          { id: "injection", name: "Injection Molding", nameEn: "Injection Molding", description: "Precision mass-production molding", icon: "Settings2" },
          { id: "high-gloss", name: "High-Gloss Molding", nameEn: "High-Gloss Molding", description: "Mirror-finish surface molding", icon: "Sparkles" },
          { id: "two-shot", name: "Two-Shot Molding", nameEn: "Two-Shot Molding", description: "Dual-material composite molding", icon: "Layers" },
          { id: "mold-design", name: "Mold Design & Tooling", nameEn: "Mold Design & Manufacturing", description: "In-house CNC & EDM tooling", icon: "PenTool" },
        ],
        contacts: [
          { role: "Mold Division", tel: "+82-70-4016-4116", email: "pinboll0211@bumjin.net" },
          { role: "Injection Molding Division", tel: "+82-31-210-4881", email: "1119ho@bumjin.net" },
        ],
      },
      {
        ...BUSINESS_DEPARTMENTS[2],
        label: "Startup Support",
        title: "Your Ideas,\nRealized by Bumjin",
        description:
          "One-stop manufacturing support for hardware startups — from R&D co-investment and design to tooling, injection molding, and final assembly, including IoT and AI products.",
        processes: [
          { step: "01", title: "Development Investment", description: "Evaluate marketability, product feasibility, and optimal investment structure." },
          { step: "02", title: "Product Engineering", description: "Leverage Bumjin's R&D team for cost-optimized, manufacturable product design." },
          { step: "03", title: "Tooling & Injection", description: "Produce precision components backed by decades of mold & molding expertise." },
          { step: "04", title: "Final Assembly", description: "Scale to mass production with cost-competitive finished goods assembly." },
        ],
        successCases: [
          { id: "air-purifier", title: "Waven Air Purifier", subtitle: "IoT-connected smart air purifier", icon: "Wind" },
          { id: "smart-umbrella", title: "Smart Umbrella", subtitle: "Weather-synced alert umbrella", icon: "CloudRain" },
          { id: "smart-cradle", title: "Smart Cradle", subtitle: "Multi-device wireless charging dock", icon: "Smartphone" },
          { id: "smart-cane", title: "Smart Cane", subtitle: "Fall detection & GPS tracking", icon: "Activity" },
        ],
        contacts: [{ role: "Startup Support Inquiry", tel: "+82-70-4016-4134", email: "huns3557@bumjin.net" }],
      },
    ],
    zh: [
      {
        ...BUSINESS_DEPARTMENTS[0],
        label: "电子事业部",
        title: "时刻伴您左右的\n范振电子",
        description:
          "依托创新研发、严格品质管理与雄厚技术实力，提供从产品设计到生产、销售全流程垂直整合的一站式解决方案。",
        odmBody: "自主设计制造（ODM）——范振电子全面负责从策划、电路/结构设计到量产交付的全过程。",
        odmFlow: [
          { step: "01", title: "产品策划" },
          { step: "02", title: "电路/结构设计" },
          { step: "03", title: "打样试产" },
          { step: "04", title: "量产承认" },
          { step: "05", title: "批量生产" },
          { step: "06", title: "全球出货" },
        ],
        products: [
          { id: "channel-sound", name: "多声道音响系统", nameEn: "Channel Sound System", description: "多声道家庭影院系统", icon: "Speaker" },
          { id: "ai-speaker", name: "AI 智能音箱", nameEn: "AI Speaker", description: "人工智能语音识别音箱", icon: "Mic2" },
          { id: "sound-stand", name: "底座式音响", nameEn: "Sound Stand", description: "电视底座式音响系统", icon: "MonitorSpeaker" },
          { id: "sound-bar", name: "声棒 Soundbar", nameEn: "Sound Bar", description: "超薄全景声声棒方案", icon: "Radio" },
          { id: "vesa-stand", name: "VESA 桌面音响支架", nameEn: "Vesa Desk Sound Stand", description: "VESA标准桌面挂载音响", icon: "Monitor" },
        ],
        contacts: [{ role: "电子事业部营业咨询", tel: "+82-70-4603-3970", email: "odm_sales@bumjin.net" }],
      },
      {
        ...BUSINESS_DEPARTMENTS[1],
        label: "模具·注塑部",
        title: "贴合客户需求的\n模具与注塑方案",
        description:
          "涵盖普通注塑与高光、双色注塑等特种工艺的核心制造技术，依托海内外生产基地提供高附加值精密制造服务。",
        tags: ["生活家电", "汽车配件", "IT设备", "工业材料"],
        products: [
          { id: "injection", name: "普通注塑成型", nameEn: "Injection Molding", description: "通用精密塑料件量产", icon: "Settings2" },
          { id: "high-gloss", name: "高光特种注塑", nameEn: "High-Gloss Molding", description: "高光泽镜面表面处理", icon: "Sparkles" },
          { id: "two-shot", name: "双色注塑", nameEn: "Two-Shot Molding", description: "双料复合精密成型", icon: "Layers" },
          { id: "mold-design", name: "模具设计·制造", nameEn: "Mold Design & Manufacturing", description: "自主精密模具开发", icon: "PenTool" },
        ],
        contacts: [
          { role: "模具负责人", tel: "+82-70-4016-4116", email: "pinboll0211@bumjin.net" },
          { role: "注塑成型负责人", tel: "+82-31-210-4881", email: "1119ho@bumjin.net" },
        ],
      },
      {
        ...BUSINESS_DEPARTMENTS[2],
        label: "初创支持部",
        title: "您的创意，\n由范振技术实现",
        description:
          "为硬件初创企业提供从开发投资、产品设计、模具制作、注塑成型到成品组装的一站式全流程制造支持，积极赋能IoT与AI创新产品。",
        processes: [
          { step: "01", title: "确定开发投资", description: "评估产品商业价值、市场潜力与投资规模，制定最优合作方案。" },
          { step: "02", title: "产品设计", description: "依托范振优秀设计团队充分实现创意，并通过降本设计提升竞争力。" },
          { step: "03", title: "模具制造 / 注塑", description: "凭借多年积累的模具与注塑核心技术，生产高品质零部件。" },
          { step: "04", title: "成品组装 / 量产", description: "依托音响整机量产能力，实现具成本竞争力的成品规模化生产。" },
        ],
        successCases: [
          { id: "air-purifier", title: "Waven 空气净化系统", subtitle: "IoT 联动智能空气净化", icon: "Wind" },
          { id: "smart-umbrella", title: "智能雨伞", subtitle: "天气联动自动提醒雨伞", icon: "CloudRain" },
          { id: "smart-cradle", title: "智能充电底座", subtitle: "无线充电多功能支架", icon: "Smartphone" },
          { id: "smart-cane", title: "智能手杖", subtitle: "跌倒监测与定位追踪", icon: "Activity" },
        ],
        contacts: [{ role: "初创支持咨询", tel: "+82-70-4016-4134", email: "huns3557@bumjin.net" }],
      },
    ],
    ja: [
      {
        ...BUSINESS_DEPARTMENTS[0],
        label: "電子部門",
        title: "いつもあなたのそばに、\n範珍電子",
        description:
          "創造的なアイデアと徹底した品質経営、確かな技術力を基盤としたワンストップ・トータルソリューションプロバイダー。設計から生産・販売まで全工程を垂直統合しています。",
        odmBody: "自社設計製造（ODM）——企画・設計から量産まで範珍電子が全工程を一貫して担います。",
        odmFlow: [
          { step: "01", title: "製品企画" },
          { step: "02", title: "回路/機構設計" },
          { step: "03", title: "試作" },
          { step: "04", title: "量産承認" },
          { step: "05", title: "生産" },
          { step: "06", title: "出荷" },
        ],
        products: [
          { id: "channel-sound", name: "チャンネルサウンドシステム", nameEn: "Channel Sound System", description: "マルチチャンネルホームオーディオ", icon: "Speaker" },
          { id: "ai-speaker", name: "AI スピーカー", nameEn: "AI Speaker", description: "音声認識スマートスピーカー", icon: "Mic2" },
          { id: "sound-stand", name: "サウンドスタンド", nameEn: "Sound Stand", description: "据置型サウンドスタンド", icon: "MonitorSpeaker" },
          { id: "sound-bar", name: "サウンドバー", nameEn: "Sound Bar", description: "スリムサウンドバーソリューション", icon: "Radio" },
          { id: "vesa-stand", name: "VESA デスクサウンドスタンド", nameEn: "Vesa Desk Sound Stand", description: "VESA規格デスクマウント音響", icon: "Monitor" },
        ],
        contacts: [{ role: "電子部門 営業お問い合わせ", tel: "+82-70-4603-3970", email: "odm_sales@bumjin.net" }],
      },
      {
        ...BUSINESS_DEPARTMENTS[1],
        label: "金型・成形部門",
        title: "顧客ニーズに最適化された\n金型・射出ソリューション",
        description:
          "一般射出成形から高光沢・二色成形などの特殊射出成形まで対応する設備と技術力を保有。国内外の拠点で高付加価値な精密製造を提供します。",
        tags: ["生活家電", "自動車", "IT機器", "産業資材"],
        products: [
          { id: "injection", name: "一般射出成形", nameEn: "Injection Molding", description: "汎用プラスチック精密成形", icon: "Settings2" },
          { id: "high-gloss", name: "高光沢特殊射出", nameEn: "High-Gloss Molding", description: "ハイグロス鏡面表面処理", icon: "Sparkles" },
          { id: "two-shot", name: "二色成形", nameEn: "Two-Shot Molding", description: "Two-shot 複合素材成形", icon: "Layers" },
          { id: "mold-design", name: "金型設計・製作", nameEn: "Mold Design & Manufacturing", description: "精密金型の自社開発", icon: "PenTool" },
        ],
        contacts: [
          { role: "金型担当", tel: "+82-70-4016-4116", email: "pinboll0211@bumjin.net" },
          { role: "射出成形担当", tel: "+82-31-210-4881", email: "1119ho@bumjin.net" },
        ],
      },
      {
        ...BUSINESS_DEPARTMENTS[2],
        label: "スタートアップ部門",
        title: "あなたのアイデアを\n範珍の技術が実現します",
        description:
          "スタートアップ製品の開発投資から設計・金型・射出成形・完成品組立までワンストップで支援。IoTやAIを活用した次世代製品開発にも積極参画しています。",
        processes: [
          { step: "01", title: "開発投資の確定", description: "アイデアの商品性・市場性・投資規模を検討し、最適な投資方針を決定します。" },
          { step: "02", title: "製品設計", description: "範珍の設計体制でアイデアを具現化し、コスト最適化設計で競争力を確保します。" },
          { step: "03", title: "金型製作 / 射出成形", description: "長年培った金型・射出の基盤技術により高品質な部品を生産します。" },
          { step: "04", title: "完成品組立 / 量産", description: "完成品製造ノウハウを活かし、高いコスト競争力で量産を実現します。" },
        ],
        successCases: [
          { id: "air-purifier", title: "Waven 空気清浄システム", subtitle: "IoT連携スマート空気清浄機", icon: "Wind" },
          { id: "smart-umbrella", title: "スマート傘", subtitle: "天気連携自動通知アンブレラ", icon: "CloudRain" },
          { id: "smart-cradle", title: "スマートクレードル", subtitle: "ワイヤレス充電マルチスタンド", icon: "Smartphone" },
          { id: "smart-cane", title: "スマート杖", subtitle: "転倒検知・位置追跡機能", icon: "Activity" },
        ],
        contacts: [{ role: "スタートアップ支援お問い合わせ", tel: "+82-70-4016-4134", email: "huns3557@bumjin.net" }],
      },
    ],
  };

  return localized[lang];
}

