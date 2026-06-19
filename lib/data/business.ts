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
      "제품 기획",
      "회로/기구 설계",
      "시제품",
      "양산 승인",
      "생산",
      "출하",
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
