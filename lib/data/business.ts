import type { Department, HeroStat } from "@/types/business";

export const HERO_STATS: HeroStat[] = [
  { value: "6,056억", label: "연간 매출액 (2022)" },
  { value: "6개국 8거점", label: "글로벌 생산기지" },
  { value: "77개국", label: "5대륙 글로벌 공급" },
];

export const BUSINESS_DEPARTMENTS: Department[] = [
  {
    id: "electronics",
    label: "전자부문",
    labelEn: "Electronics",
    index: "01",
    tagline: "LIFE & HAPPINESS — Audio & Driver Total Solution",
    title: "당신 곁에 있는\n언제나 범진전자",
    description:
      "멀티미디어연구소의 음향·회로·SoC 소프트웨어 자체 개발 역량과 100% 수직계열화·80% 자동화 생산라인(SMD 7라인 월 230M pcs)을 결합해 11.1.4ch Dolby Atmos 사운드바, AV 리시버, 스마트 스피커, 연 6,000만 개의 스피커 드라이버까지 원스톱으로 공급합니다.",
    odmTitle: "ODM이란?",
    odmBody:
      "제조자 개발생산(Original Development Manufacturing). 고객 R&D 공동 기획부터 Fine Box·Abaqus 시뮬레이션, Audio SoC SW 개발, 완전무향실·Rtings 검증, 금형·사출·SMD 및 글로벌 양산 출하까지 전 과정을 책임집니다.",
    odmFlow: [
      { step: "01", title: "제품 기획 · 컨셉 수립" },
      { step: "02", title: "회로 · 기구 · SoC 설계" },
      { step: "03", title: "무향실 · 시제품 검증" },
      { step: "04", title: "Dolby · HDMI 2.1 인증" },
      { step: "05", title: "SMD · 자동화 양산" },
      { step: "06", title: "5대륙 77개국 출하" },
    ],
    products: [
      {
        id: "sound-bar",
        name: "11.1.4ch Atmos 사운드바",
        nameEn: "Dolby Atmos Soundbar",
        description: "Dolby Atmos · DTS:X · HDMI 2.1(eARC) 탑재 플래그십 사운드바 (월 200K대 양산 체계)",
        icon: "Radio",
      },
      {
        id: "channel-sound",
        name: "AV 리시버 · Hi-Fi 리시버",
        nameEn: "AV & Hi-Fi Network Receiver",
        description: "DENON 등 글로벌 하이파이 브랜드를 위한 다채널 AV Receiver 및 Streaming Audio Hub",
        icon: "Speaker",
      },
      {
        id: "ai-speaker",
        name: "Wi-Fi · AI · 블루투스 스피커",
        nameEn: "Smart & Transformer Speaker",
        description: "Wi-Fi Bookshelf, Transformer Speaker 및 자사 브랜드 TONN 무선 스피커",
        icon: "Mic2",
      },
      {
        id: "vesa-stand",
        name: "ANC TWS · 무선 헤드폰",
        nameEn: "ANC TWS & Wireless Headphone",
        description: "액티브 노이즈 캔슬링(ANC) 무선 이어버드 및 하이엔드 무선 헤드폰·액세서리",
        icon: "Monitor",
      },
      {
        id: "sound-stand",
        name: "스피커 드라이버 · 신소재 진동판",
        nameEn: "Speaker Driver (60M pcs/yr)",
        description: "TV 내장형·사운드바 유닛, Slim 고강도·친환경 진동판 및 생활가전 음성안내 모듈 (연 6,000만개 CAPA)",
        icon: "MonitorSpeaker",
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
    tagline: "Precision Tooling & Large-Tonnage Injection",
    title: "고객 Needs에 최적화된\n금형 · 사출 솔루션",
    description:
      "42,000RPM 고속가공기·대형 EDM·비접촉 3차원 측정기를 갖춘 금형연구소(연 300벌·납기 25~60일)와 160T~3,200T 초대형 TOC 사출기 80대(한국·멕시코·헝가리)를 운영하며 TV, 자동차 내외장, 생활가전, 반도체 FOUP 부품을 생산합니다.",
    tags: ["TV · 모니터", "자동차 내·외장", "반도체 FOUP", "생활가전 · 시디즈"],
    products: [
      {
        id: "high-gloss",
        name: "E-MOLD 고광택 특수사출",
        nameEn: "E-MOLD High-Gloss",
        description: "가열캐비티·수션유닛(Suction Unit) 적용으로 표면 웰드라인을 제거한 초고광택 외관 성형",
        icon: "Sparkles",
      },
      {
        id: "two-shot",
        name: "TOC 이중사출 (최대 3,200T)",
        nameEn: "Two-Shot & Rear-Gate Molding",
        description: "160T~3,200T 대형 이중사출 및 게이트 숨김 후방사출·표면 헤어라인 가공",
        icon: "Layers",
      },
      {
        id: "mold-design",
        name: "초정밀 금형 · 3D 냉각 코어",
        nameEn: "Precision Mold & 3D Cooling",
        description: "브레이징·확산접합 3D 냉각 코어, 42,000RPM 고속가공 및 반도체 FOUP 금형 자체 개발",
        icon: "PenTool",
      },
      {
        id: "injection",
        name: "자동차 · 가전 대량 사출",
        nameEn: "Global Injection Molding",
        description: "한국(27대)·멕시코(39대)·헝가리(14대) 80대 사출기 기반 프론트 범퍼 그릴·가니쉬·TV 캐비닛 생산",
        icon: "Settings2",
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
        { value: "$460M+", label: "Annual Revenue (2022)" },
        { value: "8 Sites", label: "Across 6 Countries" },
        { value: "77 Countries", label: "Global Supply Network" },
      ],
    },
    zh: {
      badge: "Business Domain",
      line1: "范振电子的",
      line2: "核心业务能力",
      subtitle: "从设计研发到量产交付——通过全流程垂直整合，为客户提供最具竞争力的产品解决方案。",
      stats: [
        { value: "6,056亿", label: "年营收(韩元)" },
        { value: "6国8基地", label: "全球生产网络" },
        { value: "77国", label: "5大洲全球供货" },
      ],
    },
    ja: {
      badge: "Business Domain",
      line1: "範珍電子が",
      line2: "できること",
      subtitle: "設計から量産・出荷まで——全工程の垂直統合により、お客様に最も競争力のある製品を提供します。",
      stats: [
        { value: "6,056億", label: "年間売上(ウォン)" },
        { value: "6か国8拠点", label: "グローバル生産網" },
        { value: "77か国", label: "5大陸グローバル供給" },
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
          "Combining Multimedia R&D's in-house acoustic, circuit, and Audio SoC firmware development with 100% vertical integration and 80% automated lines (7 SMD lines, 230M pcs/mo) to supply 11.1.4ch Dolby Atmos soundbars, AV receivers, smart speakers, and 60M speaker drivers/yr.",
        odmBody:
          "Original Development Manufacturing — From joint planning, Fine Box/Abaqus simulation, and SoC software to anechoic/Rtings testing, precision tooling, SMT, and global delivery to 77 countries.",
        odmFlow: [
          { step: "01", title: "Planning · Concept" },
          { step: "02", title: "Circuit · Mech · SoC" },
          { step: "03", title: "Anechoic Validation" },
          { step: "04", title: "Dolby · HDMI 2.1 Cert" },
          { step: "05", title: "SMD · Automated Line" },
          { step: "06", title: "77-Country Delivery" },
        ],
        products: [
          { id: "sound-bar", name: "11.1.4ch Atmos Soundbar", nameEn: "Dolby Atmos Soundbar", description: "Flagship Dolby Atmos · DTS:X · HDMI 2.1 (eARC) soundbar (200K+/mo capacity)", icon: "Radio" },
          { id: "channel-sound", name: "AV & Hi-Fi Receiver", nameEn: "AV & Hi-Fi Network Receiver", description: "Multi-channel AV Receivers (DENON) & Streaming Audio Hub platforms", icon: "Speaker" },
          { id: "ai-speaker", name: "Wi-Fi · AI · Bluetooth Speaker", nameEn: "Smart & Transformer Speaker", description: "Wi-Fi Bookshelf, Transformer Speaker & proprietary TONN wireless audio", icon: "Mic2" },
          { id: "vesa-stand", name: "ANC TWS · Wireless Headphone", nameEn: "ANC TWS & Wireless Headphone", description: "Active noise canceling earbuds and wireless Hi-Fi headphones", icon: "Monitor" },
          { id: "sound-stand", name: "Speaker Driver · Eco Diaphragm", nameEn: "Speaker Driver (60M pcs/yr)", description: "TV/Soundbar drivers & slim eco diaphragms (60M pcs/yr capacity)", icon: "MonitorSpeaker" },
        ],
        contacts: [{ role: "Electronics Sales Inquiry", tel: "+82-70-4603-3970", email: "odm_sales@bumjin.net" }],
      },
      {
        ...BUSINESS_DEPARTMENTS[1],
        label: "Mold & Molding",
        title: "Optimized Mold &\nInjection Solutions",
        description:
          "Equipped with 42,000RPM high-speed CNC, large EDM, and 3D CMM (300 molds/yr, 25–60 day lead time) plus 80 injection machines (160T–3,200T TOC) across Korea, Mexico, and Hungary for TV, automotive, home appliance, and semiconductor FOUP parts.",
        tags: ["TV & Monitor", "Automotive Parts", "Semiconductor FOUP", "Home Appliances · SIDIZ"],
        products: [
          { id: "high-gloss", name: "E-MOLD High-Gloss", nameEn: "E-MOLD High-Gloss", description: "Heated-cavity & Suction Unit molding eliminating surface weld lines", icon: "Sparkles" },
          { id: "two-shot", name: "TOC Two-Shot (Up to 3,200T)", nameEn: "Two-Shot & Rear-Gate Molding", description: "160T–3,200T two-color molding, rear-gate hiding & hairline tooling", icon: "Layers" },
          { id: "mold-design", name: "Precision Mold · 3D Cooling", nameEn: "Precision Mold & 3D Cooling", description: "Brazed/diffusion-bonded 3D cooling cores & semiconductor FOUP tooling", icon: "PenTool" },
          { id: "injection", name: "Automotive & Appliance Molding", nameEn: "Global Injection Molding", description: "80 injection machines across Korea, Mexico & Hungary for grilles & cabinets", icon: "Settings2" },
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
          "将多媒体研究所的声学、电路及Audio SoC软件自主研发能力与100%垂直整合、80%自动化产线(7条SMD线，月2.3亿颗)相结合，一站式供应11.1.4ch Atmos声棒、AV功放及年产6,000万只扬声器单元。",
        odmBody: "自主设计制造（ODM）——全面负责联合策划、Fine Box/Abaqus仿真、SoC软件开发、消声室/Rtings测试及全球77国量产交付。",
        odmFlow: [
          { step: "01", title: "产品策划 · 方案" },
          { step: "02", title: "电路·结构·SoC" },
          { step: "03", title: "消声室验证" },
          { step: "04", title: "Dolby·HDMI 2.1" },
          { step: "05", title: "SMD·自动量产" },
          { step: "06", title: "77国全球交付" },
        ],
        products: [
          { id: "sound-bar", name: "11.1.4ch Atmos 声棒", nameEn: "Dolby Atmos Soundbar", description: "搭载Dolby Atmos·DTS:X·HDMI 2.1(eARC)旗舰声棒(月产20万台+)", icon: "Radio" },
          { id: "channel-sound", name: "AV 功放 · Hi-Fi 功放", nameEn: "AV & Hi-Fi Network Receiver", description: "面向DENON等品牌的多声道AV Receiver及流媒体音频中枢", icon: "Speaker" },
          { id: "ai-speaker", name: "Wi-Fi · AI · 蓝牙音箱", nameEn: "Smart & Transformer Speaker", description: "Wi-Fi书架音箱、变形音箱及自有品牌TONN无线音箱", icon: "Mic2" },
          { id: "vesa-stand", name: "ANC TWS · 无线耳机", nameEn: "ANC TWS & Wireless Headphone", description: "主动降噪TWS耳塞及高端无线头戴耳机", icon: "Monitor" },
          { id: "sound-stand", name: "扬声器单元 · 环保振膜", nameEn: "Speaker Driver (60M pcs/yr)", description: "TV/声棒单元及超薄高强度环保振膜（年产能6,000万只）", icon: "MonitorSpeaker" },
        ],
        contacts: [{ role: "电子事业部营业咨询", tel: "+82-70-4603-3970", email: "odm_sales@bumjin.net" }],
      },
      {
        ...BUSINESS_DEPARTMENTS[1],
        label: "模具·注塑部",
        title: "贴合客户需求的\n模具与注塑方案",
        description:
          "配备42,000RPM高速加工机、大型EDM与三维测量仪的模具研究所(年产300套、交期25~60天)及韩/墨/匈80台注塑机(160T~3,200T双色)，生产TV、汽车内外饰、家电及半导体FOUP部件。",
        tags: ["TV · 显示器", "汽车内外饰", "半导体 FOUP", "生活家电 · SIDIZ"],
        products: [
          { id: "high-gloss", name: "E-MOLD 高光特种注塑", nameEn: "E-MOLD High-Gloss", description: "加热模腔与Suction Unit排气技术消除表面熔接痕", icon: "Sparkles" },
          { id: "two-shot", name: "TOC 双色注塑(最大3,200T)", nameEn: "Two-Shot & Rear-Gate Molding", description: "160T~3,200T双色注塑、隐藏浇口背部注塑与拉丝加工", icon: "Layers" },
          { id: "mold-design", name: "超精密模具 · 3D冷却模芯", nameEn: "Precision Mold & 3D Cooling", description: "钎焊/扩散焊3D冷却模芯及半导体FOUP精密模具研发", icon: "PenTool" },
          { id: "injection", name: "汽车 · 家电大批量注塑", nameEn: "Global Injection Molding", description: "依托韩(27台)·墨(39台)·匈(14台)80台设备生产前格栅与TV背板", icon: "Settings2" },
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
          "マルチメディア研究所の音響・回路・Audio SoCソフト自社開発力と100%垂直統合・80%自動化ライン(SMD 7ライン月2.3億pcs)を融合し、11.1.4ch Atmosサウンドバー、AVレシーバー、年6,000万個のスピーカードライバーを一貫供給します。",
        odmBody: "自社設計製造（ODM）——共同企画、Fine Box/Abaqus解析、SoCソフト開発、無響室・Rtings検証、精密金型・射出・SMD・77か国出荷まで全工程を担います。",
        odmFlow: [
          { step: "01", title: "製品企画・立案" },
          { step: "02", title: "回路・機構・SoC" },
          { step: "03", title: "無響室・試作検証" },
          { step: "04", title: "Dolby・HDMI 2.1" },
          { step: "05", title: "SMD・自動量産" },
          { step: "06", title: "77か国グローバル出荷" },
        ],
        products: [
          { id: "sound-bar", name: "11.1.4ch Atmos サウンドバー", nameEn: "Dolby Atmos Soundbar", description: "Dolby Atmos・DTS:X・HDMI 2.1(eARC)対応フラッグシップ(月20万台+)", icon: "Radio" },
          { id: "channel-sound", name: "AV / Hi-Fi レシーバー", nameEn: "AV & Hi-Fi Network Receiver", description: "DENONなどハイファイ向け多チャンネルAVRおよびAudio Hub", icon: "Speaker" },
          { id: "ai-speaker", name: "Wi-Fi・AI・Bluetooth スピーカー", nameEn: "Smart & Transformer Speaker", description: "Wi-Fiブックシェルフ、トランスフォーマー型および自社ブランドTONN", icon: "Mic2" },
          { id: "vesa-stand", name: "ANC TWS・ワイヤレスヘッドホン", nameEn: "ANC TWS & Wireless Headphone", description: "ノイズキャンセリング搭載ワイヤレスイヤホン・ヘッドホン", icon: "Monitor" },
          { id: "sound-stand", name: "スピーカードライバー・新素材振動板", nameEn: "Speaker Driver (60M pcs/yr)", description: "TV/サウンドバー用ドライバー・高強度環境対応振動板(年6,000万個)", icon: "MonitorSpeaker" },
        ],
        contacts: [{ role: "電子部門 営業お問い合わせ", tel: "+82-70-4603-3970", email: "odm_sales@bumjin.net" }],
      },
      {
        ...BUSINESS_DEPARTMENTS[1],
        label: "金型・成形部門",
        title: "顧客ニーズに最適化された\n金型・射出ソリューション",
        description:
          "42,000RPM高速加工機・大型EDM・非接触3次元測定機を備える金型研究所(年300型・納期25~60日)と韓・墨・洪80台の射出機(160T~3,200T TOC)でTV・車載・家電・半導体FOUP部品を量産します。",
        tags: ["TV・モニター", "車載内外装", "半導体 FOUP", "生活家電・SIDIZ"],
        products: [
          { id: "high-gloss", name: "E-MOLD 高光沢特殊射出", nameEn: "E-MOLD High-Gloss", description: "加熱キャビティとSuction Unit排気によりウェルドラインを解消", icon: "Sparkles" },
          { id: "two-shot", name: "TOC 二色成形 (最大3,200T)", nameEn: "Two-Shot & Rear-Gate Molding", description: "160T~3,200T二色成形、ゲートレス後方射出・ヘアライン加工", icon: "Layers" },
          { id: "mold-design", name: "超精密金型・3D冷却コア", nameEn: "Precision Mold & 3D Cooling", description: "ろう付け/拡散接合3D冷却コアおよび半導体FOUP金型開発", icon: "PenTool" },
          { id: "injection", name: "車載・家電の大型量産射出", nameEn: "Global Injection Molding", description: "韓27台・墨39台・洪14台計80台によるグリル・TVキャビネット量産", icon: "Settings2" },
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

