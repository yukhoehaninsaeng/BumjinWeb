import type { Lang } from "@/lib/translations";
import type {
  VisionMeaningItem,
  CoreValueItem,
  SubsidiaryItem,
  HistoryEntry,
} from "@/lib/content-store";

export interface MottoItem {
  num: string;
  archLabel: string;
  title: string;
  en: string;
  body: string;
}

export interface MgmtPhilosophyItem {
  num: string;
  title: string;
  items: string[];
}

export interface LocationItem {
  name: string;
  type: string;
  address: string;
  phone: string;
  note: string;
}

export interface CompanyTranslations {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  subNav: { id: string; label: string }[];
  overview: {
    eyebrow: string;
    headlineLines: string[];
    intro: string;
    visionEyebrow: string;
    mottoItems: MottoItem[];
    coreMessageLabel: string;
    coreMessage: string;
  };
  ceo: {
    eyebrow: string;
    titleLines: string[];
    ceoTitle: string;
    ceoCompany: string;
    profileEyebrow: string;
    profileHeadline: string;
    profileMetrics: { label: string; value: string }[];
    opening: string;
    highlights: { num: string; title: string; desc: string }[];
    paragraphs: string[];
    thanks: string;
    philosophyEyebrow: string;
    philosophy: MgmtPhilosophyItem[];
  };
  vision: {
    eyebrow: string;
    statement: string;
    description: string;
    goals: { value: string; label: string }[];
    meaningEyebrow: string;
    meaning: VisionMeaningItem[];
    coreValuesEyebrow: string;
    coreValues: CoreValueItem[];
  };
  group: {
    eyebrow: string;
    title: string;
    subtitle: string;
    descriptionLabel: string;
    foundedLabel: string;
    businessFieldLabel: string;
    hqLabel: string;
    revenueLabel: string;
    employeesLabel: string;
    locationsLabel: string;
    rolesLabel: string;
    visitSiteLabel: string;
    affiliatesMeta: {
      category: string;
      founded: string;
      businessField: string;
      hq: string;
      href: string;
    }[];
    subsidiaries: SubsidiaryItem[];
    coreMessage: string;
  };
  history: {
    eyebrow: string;
    title: string;
    subtitle: string;
    awardsEyebrow: string;
    awards: { title: string; org: string }[];
    entries: HistoryEntry[];
  };
  location: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewLarge: string;
    sitesCountLabel: (count: number) => string;
    prevLabel: string;
    nextLabel: string;
    mapHl: string;
    locations: LocationItem[];
  };
  footer: {
    mainHome: string;
  };
}

const KO: CompanyTranslations = {
  hero: {
    eyebrow: "Company Introduction",
    title: "회사소개",
    subtitle: "1991년 창립 이후 도전과 혁신으로 성장해 온 범진을 소개합니다.",
  },
  subNav: [
    { id: "overview", label: "개요" },
    { id: "ceo", label: "CEO 인사말" },
    { id: "vision", label: "비전" },
    { id: "group", label: "범진" },
    { id: "history", label: "연혁" },
    { id: "location", label: "찾아오시는 길" },
  ],
  overview: {
    eyebrow: "About Us",
    headlineLines: ["도전과 혁신,", "사람과 고객", "중심의 기업."],
    intro:
      "1991년 창립한 범진(범진전자㈜·범진아이엔디㈜·범진시엔엘㈜)은 매출 6,056억 원·임직원 3,565명 규모로 성장하며, 음향 완제품·스피커 드라이버·정밀 금형·사출 성형을 100% 내재화해 5대륙 77개국에 공급하고 있습니다.",
    visionEyebrow: "Vision",
    mottoItems: [
      {
        num: "01",
        archLabel: "도전과 혁신",
        title: "도전과 혁신",
        en: "Challenge & Innovation",
        body: "지속적인 도전과 혁신을 통해 풍부한 가치를 창조합니다.",
      },
      {
        num: "02",
        archLabel: "인재경영",
        title: "인재경영",
        en: "People Management",
        body: "범진의 미래는 인재에 달려있다는 믿음으로 인재 양성을 추구합니다.",
      },
      {
        num: "03",
        archLabel: "고객만족",
        title: "고객만족",
        en: "Customer Satisfaction",
        body: "혁신적인 선도기술을 바탕으로 고객 감동을 실천합니다.",
      },
      {
        num: "04",
        archLabel: "정도경영",
        title: "정도경영",
        en: "Integrity Management",
        body: "준법경영 실천을 통해 임직원, 고객 그리고 사회와의 약속을 지켜갑니다.",
      },
      {
        num: "05",
        archLabel: "변화추구",
        title: "변화추구",
        en: "Pursuit of Change",
        body: "대담한 도전으로 새로운 가치를 창조하며 미래를 선도합니다.",
      },
    ],
    coreMessageLabel: "Core Message",
    coreMessage:
      '"In everyday life, and a happier tomorrow, Bumjin’s smart solution will be there with you."',
  },
  ceo: {
    eyebrow: "CEO Message",
    titleLines: ["CEO", "인사말"],
    ceoTitle: "대표이사 박정길",
    ceoCompany: "범진전자(주) · 범진아이엔디(주) · 범진시엔엘(주)",
    profileEyebrow: "SINCE 1991 · LEADERSHIP",
    profileHeadline: "도전과 혁신으로 30여 년을 걸어온 글로벌 제조 파트너",
    profileMetrics: [
      { label: "창립", value: "1991.10.01" },
      { label: "제조 역량", value: "100% 인하우스 수직계열화" },
      { label: "글로벌 공급", value: "5대륙 77개국" },
      { label: "비전 목표", value: "Vision 2030" },
    ],
    opening:
      "기술 자립과 정도경영으로 고객의 신뢰에 보답하며, 사람과 기술이 함께 성장하는 100년 기업을 만들어가겠습니다.",
    highlights: [
      {
        num: "01",
        title: "100% 인하우스 기술 자립",
        desc: "선행 R&D부터 금형·사출·완제품 양산까지 자체 기술로 완결",
      },
      {
        num: "02",
        title: "타협 없는 품질·납기 신뢰",
        desc: "글로벌 생산거점 기반 5대륙 77개국 적기 공급 체계 구축",
      },
      {
        num: "03",
        title: "사람 중심·정도경영",
        desc: "투명한 준법경영과 인재 육성으로 지속 가능한 동반성장 실현",
      },
    ],
    paragraphs: [
      "1991년 정밀 금형 제조로 출발한 범진은 지난 30여 년간 끊임없는 기술 도전과 투명한 경영을 바탕으로, 음향·멀티미디어 완제품과 스피커 드라이버, 초정밀 금형·사출성형을 아우르는 글로벌 제조 파트너로 성장해 왔습니다.",
      "범진은 단순한 외형 확장이 아닌 본질적인 제조 경쟁력에 집중합니다. 선행 R&D 투자와 100% 인하우스 공정 내재화, 타협 없는 품질 관리로 고객의 제품 가치를 높이고 5대륙 77개국 시장에서 약속된 납기와 품질을 지켜나가고 있습니다.",
      "법과 윤리를 준수하는 투명경영, 인재가 자부심을 가지고 역량을 펼치는 건강한 조직문화를 토대로 고객·임직원·협력사가 함께 도약하는 Vision 2030의 미래를 열어가겠습니다.",
    ],
    thanks: "감사합니다.",
    philosophyEyebrow: "경영철학",
    philosophy: [
      {
        num: "01",
        title: "인재를 소중하게 생각하며",
        items: [
          "고객과 직원의 풍요로운 삶과 행복을 최우선으로 생각합니다.",
          "인재 육성을 통해 기업과 직원이 함께 성장하는 문화를 만들어 갑니다.",
          "최고의 인재가 주인의식을 가지고 역량을 발휘할 수 있는 일터를 조성합니다.",
        ],
      },
      {
        num: "02",
        title: "법과 윤리를 준수하고",
        items: [
          "신뢰와 투명성을 바탕으로 정도경영을 실천합니다.",
          "성실한 납세와 책임 있는 경영으로 국가경제 발전에 기여합니다.",
        ],
      },
      {
        num: "03",
        title: "최고의 제품으로",
        items: [
          "고객에게 최고의 만족을 제공하는 혁신적인 기술과 제품을 개발합니다.",
          "삶의 질 향상에 기여하는 기술 개발을 지속적으로 추진합니다.",
          "탁월한 품질과 브랜드 가치로 고객이 먼저 인정하는 제품을 만들어 갑니다.",
        ],
      },
      {
        num: "04",
        title: "기업가치를 향상시킨다",
        items: [
          "사회적 가치 창출과 혁신을 통해 지속 가능한 성장을 추구합니다.",
          "업계를 선도하는 기업으로 성장하여 미래 시장 경쟁력을 확보합니다.",
          "경쟁사가 배우고 싶어 하는 모범적인 기업으로 발전해 나가겠습니다.",
        ],
      },
    ],
  },
  vision: {
    eyebrow: "Vision 2030",
    statement: '"범진은 고객과 범진人의 동행으로 성장한다."',
    description:
      "Vision 2030은 2030년까지 매출 1조 달성을 목표로 백년기업으로 성장 가능한 핵심 사업군을 발굴하고, R&D 및 인프라를 지속적으로 발전시키며, 중견기업으로 도약하기 위한 인재 육성과 활기찬 조직문화를 구축하여 고객과 함께 성장하는 미래를 만들어갑니다.",
    goals: [
      { value: "1조", label: "2030 매출 목표" },
      { value: "6,056억", label: "연간 매출액 (2022 · CAGR 21%)" },
      { value: "3,565명", label: "글로벌 임직원" },
      { value: "77개국", label: "5대륙 공급 국가" },
    ],
    meaningEyebrow: "비전의 의미",
    meaning: [
      {
        term: "범진은",
        desc: "글로벌 범진 전체를 의미하며, 모든 사업과 성장의 중심이 되는 우리 모두를 뜻합니다.",
      },
      {
        term: "고객은",
        desc: "고객, 협력사, 주주 등 범진과 함께하는 모든 파트너를 의미합니다.",
      },
      {
        term: "범진인은",
        desc: "범진의 모든 사업을 이끌어가는 구성원 전체를 의미합니다.",
      },
      {
        term: "동행으로는",
        desc: "핵심가치의 실천을 통해 고객을 감동시키고 일류 경쟁력을 확보하는 것을 의미합니다.",
      },
      {
        term: "성장한다는",
        desc: "도전과 혁신을 통한 지속성장으로 백년기업을 추구하고 구성원의 행복과 가치를 실현하는 것을 의미합니다.",
      },
    ],
    coreValuesEyebrow: "핵심가치",
    coreValues: [
      {
        num: "01",
        title: "고객 최우선",
        en: "Customer First",
        body: "최고의 제품과 최상의 서비스를 제공하는 것을 최우선으로 하며, 범진의 모든 가치 중심에 고객을 두고 고객감동 문화를 만들어갑니다.",
      },
      {
        num: "02",
        title: "인재육성 · 열린 조직문화",
        en: "People & Open Culture",
        body: "기업의 기본은 사람이라는 신념 아래 우수한 인재를 육성하고, 구성원들이 열정과 꿈을 펼칠 수 있는 행복한 회사를 만들어갑니다.",
      },
      {
        num: "03",
        title: "혁신 / 실행",
        en: "Innovation & Execution",
        body: "급변하는 글로벌 경영환경 속에서도 기존의 틀을 뛰어넘는 차별화된 아이디어와 창의적인 실행력으로 목표를 달성합니다.",
      },
      {
        num: "04",
        title: "제조 경쟁력",
        en: "Manufacturing Excellence",
        body: "100% 수직계열화와 핵심공정 내재화, 자동화 생산 역량을 바탕으로 글로벌 일류 제조 경쟁력을 확보합니다.",
      },
      {
        num: "05",
        title: "지속가능 경영",
        en: "Sustainable Management",
        body: "고객과 구성원의 신뢰를 바탕으로 투명경영과 준법경영을 실천하며, 사회적 책임을 다하는 백년기업으로 성장합니다.",
      },
    ],
  },
  group: {
    eyebrow: "Affiliates",
    title: "계열사",
    subtitle: "음향전자부터 정밀 금형·사출성형까지 수직 계열화된 범진 그룹을 소개합니다.",
    descriptionLabel: "Description",
    foundedLabel: "설립연도",
    businessFieldLabel: "사업분야",
    hqLabel: "본사위치",
    revenueLabel: "매출",
    employeesLabel: "임직원",
    locationsLabel: "글로벌 거점",
    rolesLabel: "주요 역할",
    visitSiteLabel: "사업부 상세보기",
    affiliatesMeta: [
      {
        category: "Acoustic & Electronics Solutions",
        founded: "2004년 05월",
        businessField: "사운드바 · AV 리시버 · 스피커 드라이버 R&D 및 ODM/OEM 제조",
        hq: "경기도 수원시 권선구 산업로 155번길 217",
        href: "/business/electronics",
      },
      {
        category: "Precision Mold & Injection Molding",
        founded: "1991년 10월",
        businessField: "정밀 금형(연 300벌) 및 TV·자동차·가전·반도체 FOUP 사출성형",
        hq: "경기도 수원시 권선구 산업로 174-14",
        href: "/business/molding",
      },
      {
        category: "R&D & Precision Components",
        founded: "2008년 08월",
        businessField: "멀티미디어 · 음향 선행 R&D, 핵심 모듈 및 AV 쇼룸 운영",
        hq: "경기도 수원시 권선구 산업로 155번길 217",
        href: "/business/startup",
      },
    ],
    subsidiaries: [
      {
        name: "범진전자",
        en: "Bumjin Electronics",
        tagline: "글로벌 오디오 완제품 · 스피커 유닛 통합 제조 솔루션",
        desc: "범진전자는 한국 HQ 멀티미디어연구소를 중심으로 중국·베트남·인도네시아 생산 법인을 운영하며 11.1.4ch Atmos 사운드바, AV 리시버, 연 6,000만 개의 스피커 드라이버를 공급합니다.",
        locations: [
          "한국 HQ (수원 본사)",
          "범진전자 중국",
          "범진전자 베트남",
          "범진전자 인도네시아",
        ],
        revenue: "",
        employees: "",
        productsLabel: "주력 제품",
        products: ["Soundbar · AV Receiver", "Speaker Driver (60M/yr)", "Smart Speaker · TWS"],
        roles: ["멀티미디어 R&D", "ODM/OEM 대량생산", "5대륙 77개국 공급"],
        dark: true,
      },
      {
        name: "범진IND",
        en: "Bumjin IND",
        tagline: "정밀 금형 · 초대형 TOC 사출성형 핵심 부품 공급",
        desc: "범진IND는 국내외 생산 거점에서 80대의 사출기(최대 3,200T TOC)를 가동하며 TV, 자동차 내외장, 생활가전, 반도체 FOUP 부품을 공급합니다.",
        locations: ["수원 금형(산업로 174-14)", "수원 사출(매영로 160) · 안성", "멕시코 · 헝가리"],
        revenue: "",
        employees: "",
        productsLabel: "주력 사업",
        products: ["정밀 금형 (연 300벌)", "TV · 생활가전 사출", "자동차 · 반도체 FOUP"],
        roles: ["E-MOLD · 3D 냉각금형", "80대 사출 (최대 3,200T TOC)", "미주·유럽 현지 공급"],
        dark: false,
      },
      {
        name: "범진시엔엘(주)",
        en: "Bumjin C&L Co., Ltd.",
        tagline: "차세대 음향·전자 R&D 및 핵심 모듈·쇼룸 솔루션",
        desc: "범진시엔엘은 수원 본사 R&D 센터 및 AV 쇼룸을 중심으로 Audio SoC 소프트웨어, 차세대 음향 모듈 및 신소재 진동판 연구를 수행하며 범진 그룹의 선행 기술 경쟁력을 이끌고 있습니다.",
        locations: ["범진시엔엘 본사 (수원 HQ 5F)", "기업부설연구소 · 무향실"],
        revenue: "",
        employees: "",
        productsLabel: "핵심 역량",
        products: ["음향·SoC 선행 연구", "신소재 진동판 개발", "스타트업 제품화 지원"],
        roles: ["선행 기술 R&D", "AV 쇼룸 · 청취실 운영", "신사업 인큐베이팅"],
        dark: true,
      },
    ],
    coreMessage:
      '"선행 R&D부터 정밀 금형·사출, 완제품 양산까지 — 각 계열사의 전문성이 하나로 이어지는 원스톱 제조 솔루션을 제공합니다."',
  },
  history: {
    eyebrow: "History & Awards",
    title: "연혁 및 수상",
    subtitle: "1991년 창립 이후 도전과 혁신으로 일궈온 범진의 발자취와 주요 수상 실적입니다.",
    awardsEyebrow: "Awards & Recognition",
    awards: [
      { title: "대한민국 일자리 으뜸기업", org: "대통령상" },
      { title: "자랑스런 삼성인상 특별상", org: "제조 기술 혁신 부문" },
      { title: "Samsung VD Members 인증", org: "우수 협력사상" },
      { title: "중소기업 혁신대상", org: "품질 부문" },
      { title: "대한민국 우수특허 대상", org: "핵심 기술 특허" },
      { title: "일하기 좋은 기업 · 모범 납세자상", org: "기업문화 · 투명경영" },
    ],
    entries: [
      { year: "2023", events: [{ month: "02", text: "DENON 거래 개시 (AV Receiver 생산)" }] },
      { year: "2020", events: [{ month: "01", text: "범진전자 베트남 생산 개시 및 글로벌 물류 77개국 확대" }] },
      { year: "2019", events: [{ month: "10", text: "범진전자베트남 유한공사(BJV) 설립" }] },
      {
        year: "2018",
        events: [
          { month: "05", text: "멕시코 범진아메리카(BJAM MEXICANA) 설립 (대형 사출)" },
          { month: "01", text: "멀티미디어연구소 설립 (사운드바 자체 개발)" },
        ],
      },
      { year: "2017", events: [{ month: "12", text: "범진 수원 신사옥 신축 완공" }] },
      { year: "2016", events: [{ month: "12", text: "제53회 무역의 날 3,000만불 수출의 탑 수상" }] },
      { year: "2015", events: [{ month: "12", text: "블루투스 스피커 출시 (자사 브랜드 : TONN)" }] },
      {
        year: "2014",
        events: [
          { month: "12", text: "삼성전자(주) 자랑스런 삼성인상 특별상 수상" },
          { month: "10", text: "헝가리 범진전자(BJH) 생산 가동" },
          { month: "03", text: "혜주범진과기유한공사(HBC) 설립" },
          { month: "02", text: "삼성전자(주) 올해의 강소기업 인증" },
        ],
      },
      { year: "2013", events: [{ month: "12", text: "범진아이엔디(주) 수원 사출공장 신축 이전 (매영로 160)" }] },
      { year: "2011", events: [{ month: "11", text: "제48회 무역의 날 500만불 수출의 탑 수상" }] },
      { year: "2010", events: [{ month: "04", text: "범진전자 인도네시아(BJI) 설립 (스피커시스템, 사출)" }] },
      { year: "2009", events: [{ month: "08", text: "헝가리 법인 설립 및 대형사출 해외 진출 기반 마련" }] },
      {
        year: "2008",
        events: [
          { month: "09", text: "범진시엔엘(주) 기업부설연구소 인증" },
          { month: "01", text: "천진범진전자유한공사 설립 (대형사출)" },
        ],
      },
      { year: "2007", events: [{ month: "09", text: "범진공업(주) 기업부설연구소 인증 및 삼성전자 거래 개시" }] },
      { year: "2005", events: [{ month: "04", text: "범진공업(주) 성형사업부 설립" }] },
      {
        year: "2004",
        events: [
          { month: "08", text: "중국범진전자유한공사 설립 (스피커시스템)" },
          { month: "05", text: "범진전자(주) 설립 (스피커시스템)" },
        ],
      },
      { year: "1991", events: [{ month: "10", text: "범진공업사 설립 (금형 제조 · 대형 사출 시작)" }] },
    ],
  },
  location: {
    eyebrow: "Location",
    title: "찾아오시는 길",
    subtitle: "범진의 국내 사업장을 방문하시기 전 아래 정보를 확인해 주세요.",
    viewLarge: "크게 보기",
    sitesCountLabel: (count) => `${count}개 사업장`,
    prevLabel: "이전",
    nextLabel: "다음",
    mapHl: "ko",
    locations: [
      {
        name: "범진 수원 HQ (범진전자 · C&L)",
        type: "본사 · 멀티미디어 R&D",
        address: "경기도 수원시 권선구 산업로155번길 217 (고색동)",
        phone: "031-493-9415",
        note: "1~5F 연구소·무향실·청취실·AV쇼룸 (8,316㎥)",
      },
      {
        name: "범진IND 수원 금형사업장",
        type: "초정밀 금형 제조",
        address: "경기도 수원시 권선구 산업로 174-14 (고색동)",
        phone: "031-676-1461",
        note: "42,000RPM 고속가공·EDM · 연 300벌 금형 제작",
      },
      {
        name: "범진IND 수원 사출사업장",
        type: "중·대형 사출성형",
        address: "경기도 수원시 매영로 160",
        phone: "031-210-4881",
        note: "160T~3,200T TOC 중대형 사출기 27대 운영",
      },
      {
        name: "범진IND 안성 성형사업장",
        type: "사출성형 제조",
        address: "경기도 안성시 보개면 신장길 47-10",
        phone: "031-678-9203",
        note: "생활가전·자동차 부품 사출성형",
      },
    ],
  },
  footer: {
    mainHome: "메인 홈페이지",
  },
};

const EN: CompanyTranslations = {
  hero: {
    eyebrow: "Company Introduction",
    title: "About Bumjin",
    subtitle: "Growing through challenge and innovation since our founding in 1991.",
  },
  subNav: [
    { id: "overview", label: "Overview" },
    { id: "ceo", label: "CEO Message" },
    { id: "vision", label: "Vision" },
    { id: "group", label: "Bumjin Group" },
    { id: "history", label: "History" },
    { id: "location", label: "Location" },
  ],
  overview: {
    eyebrow: "About Us",
    headlineLines: ["Challenge & Innovation,", "People & Customer", "First."],
    intro:
      "Founded in 1991, Bumjin (Bumjin Electronics, Bumjin I&D, and Bumjin C&L) has grown to KRW 605.6B ($460M+) in revenue and 3,565 employees, supplying vertically integrated audio systems, speaker drivers, precision molds, and injection molding to 77 countries across 5 continents.",
    visionEyebrow: "Vision",
    mottoItems: [
      {
        num: "01",
        archLabel: "Challenge",
        title: "Challenge & Innovation",
        en: "Challenge & Innovation",
        body: "Creating lasting value through relentless challenge and innovation.",
      },
      {
        num: "02",
        archLabel: "People",
        title: "People Management",
        en: "People Management",
        body: "Developing talent with the conviction that Bumjin's future depends on its people.",
      },
      {
        num: "03",
        archLabel: "Customer",
        title: "Customer Satisfaction",
        en: "Customer Satisfaction",
        body: "Delivering customer delight through innovative, industry-leading technology.",
      },
      {
        num: "04",
        archLabel: "Integrity",
        title: "Integrity Management",
        en: "Integrity Management",
        body: "Honoring our commitments to employees, customers, and society through ethical compliance.",
      },
      {
        num: "05",
        archLabel: "Change",
        title: "Pursuit of Change",
        en: "Pursuit of Change",
        body: "Leading the future by creating new value through bold transformation.",
      },
    ],
    coreMessageLabel: "Core Message",
    coreMessage:
      '"In everyday life, and a happier tomorrow, Bumjin’s smart solution will be there with you."',
  },
  ceo: {
    eyebrow: "CEO Message",
    titleLines: ["CEO", "Message"],
    ceoTitle: "CEO Park Jung-gil",
    ceoCompany: "Bumjin Electronics · Bumjin I&D · Bumjin C&L",
    profileEyebrow: "SINCE 1991 · LEADERSHIP",
    profileHeadline: "A 30-year global manufacturing partner built on innovation",
    profileMetrics: [
      { label: "Founded", value: "Oct 01, 1991" },
      { label: "Capability", value: "100% In-House Integration" },
      { label: "Global Reach", value: "77 Countries · 5 Continents" },
      { label: "Vision Target", value: "Vision 2030" },
    ],
    opening:
      "Through independent engineering and transparent management, we earn our customers' trust and build a 100-year enterprise where people and technology grow together.",
    highlights: [
      {
        num: "01",
        title: "100% In-House Engineering",
        desc: "Self-reliant capabilities spanning R&D, precision tooling, molding, and final assembly",
      },
      {
        num: "02",
        title: "Uncompromising Quality & Delivery",
        desc: "Reliable global manufacturing delivering on time across 77 countries",
      },
      {
        num: "03",
        title: "People-First Integrity",
        desc: "Transparent governance and talent development driving shared growth",
      },
    ],
    paragraphs: [
      "Founded in 1991 in precision tooling, Bumjin has grown over the past three decades through relentless technical challenge and transparent governance into a global manufacturing partner spanning finished audio, speaker drivers, precision molds, and large-scale molding.",
      "Rather than pursuing mere scale, we focus on fundamental manufacturing strength — investing in advanced R&D, maintaining 100% in-house process control, and upholding strict quality standards to maximize customer product value worldwide.",
      "Guided by ethical compliance and a culture where talent thrives with ownership, we are advancing toward Vision 2030 alongside our customers, employees, and partners.",
    ],
    thanks: "Thank you.",
    philosophyEyebrow: "Management Philosophy",
    philosophy: [
      {
        num: "01",
        title: "Valuing People Above All",
        items: [
          "We prioritize the prosperous life and happiness of our customers and employees.",
          "We foster a culture where company and employees grow together through talent development.",
          "We build a workplace where top talent can exercise ownership and full potential.",
        ],
      },
      {
        num: "02",
        title: "Upholding Law & Ethics",
        items: [
          "We practice ethical management founded on trust and transparency.",
          "We contribute to national economic development through faithful tax compliance and responsible governance.",
        ],
      },
      {
        num: "03",
        title: "Delivering the Finest Products",
        items: [
          "We develop innovative technologies and products that deliver the highest customer satisfaction.",
          "We continuously advance technologies that improve quality of life.",
          "We craft products recognized first by customers for outstanding quality and brand value.",
        ],
      },
      {
        num: "04",
        title: "Enhancing Corporate Value",
        items: [
          "We pursue sustainable growth through social value creation and innovation.",
          "We secure future market competitiveness by growing into an industry leader.",
          "We strive to become an exemplary enterprise that even competitors look up to.",
        ],
      },
    ],
  },
  vision: {
    eyebrow: "Vision 2030",
    statement: '"Bumjin grows together with our customers and Bumjin people."',
    description:
      "Aiming for KRW 1 trillion in revenue by 2030, Vision 2030 identifies core business pillars capable of 100-year longevity, continuously advances R&D and infrastructure, and fosters talent and an energetic corporate culture to grow alongside our customers.",
    goals: [
      { value: "₩1T", label: "2030 Revenue Target" },
      { value: "$460M+", label: "Annual Revenue (KRW 605.6B)" },
      { value: "3,565", label: "Global Workforce" },
      { value: "77", label: "Countries Supplied" },
    ],
    meaningEyebrow: "Meaning of Vision",
    meaning: [
      {
        term: "Bumjin",
        desc: "Represents Global Bumjin as a whole—all of us at the center of every business and growth initiative.",
      },
      {
        term: "Customers",
        desc: "Encompasses all partners alongside Bumjin, including clients, suppliers, and shareholders.",
      },
      {
        term: "Bumjin People",
        desc: "Refers to every member driving all of Bumjin's businesses forward.",
      },
      {
        term: "Together",
        desc: "Means delighting customers and securing world-class competitiveness by living our core values.",
      },
      {
        term: "Growing",
        desc: "Signifies pursuing a 100-year enterprise through sustainable growth, challenge, and innovation while fulfilling employee happiness.",
      },
    ],
    coreValuesEyebrow: "Core Values",
    coreValues: [
      {
        num: "01",
        title: "Customer First",
        en: "Customer First",
        body: "We prioritize delivering the finest products and services, placing customers at the center of every value we create.",
      },
      {
        num: "02",
        title: "People & Open Culture",
        en: "People & Open Culture",
        body: "Guided by the belief that people are the foundation of enterprise, we nurture talent and build a joyful workplace.",
      },
      {
        num: "03",
        title: "Innovation & Execution",
        en: "Innovation & Execution",
        body: "Even in a rapidly shifting global environment, we achieve our goals with bold ideas and creative execution.",
      },
      {
        num: "04",
        title: "Manufacturing Excellence",
        en: "Manufacturing Excellence",
        body: "We secure world-class competitiveness through 100% vertical integration, in-house tooling, and automated production.",
      },
      {
        num: "05",
        title: "Sustainable Management",
        en: "Sustainable Management",
        body: "Built on trust with customers and employees, we practice transparent compliance management for 100-year growth.",
      },
    ],
  },
  group: {
    eyebrow: "Affiliates",
    title: "Affiliates",
    subtitle: "Introducing Bumjin Group's vertically integrated affiliates across acoustics, electronics, tooling, and molding.",
    descriptionLabel: "Description",
    foundedLabel: "Founded",
    businessFieldLabel: "Business Field",
    hqLabel: "Headquarters",
    revenueLabel: "Revenue",
    employeesLabel: "Employees",
    locationsLabel: "Global Sites",
    rolesLabel: "Key Roles",
    visitSiteLabel: "View Division",
    affiliatesMeta: [
      {
        category: "Acoustic & Electronics Solutions",
        founded: "May 2004",
        businessField: "Soundbar, AV Receiver & Speaker Driver R&D and ODM/OEM manufacturing",
        hq: "217, Saneop-ro 155beon-gil, Gwonseon-gu, Suwon-si",
        href: "/business/electronics",
      },
      {
        category: "Precision Mold & Injection Molding",
        founded: "October 1991",
        businessField: "Precision molds (300/yr) & TV, automotive, appliance, semiconductor FOUP molding",
        hq: "174-14, Saneop-ro, Gwonseon-gu, Suwon-si",
        href: "/business/molding",
      },
      {
        category: "R&D & Precision Components",
        founded: "August 2008",
        businessField: "Multimedia & acoustic R&D, core modules, and AV Showroom operations",
        hq: "217, Saneop-ro 155beon-gil, Gwonseon-gu, Suwon-si",
        href: "/business/startup",
      },
    ],
    subsidiaries: [
      {
        name: "Bumjin Electronics",
        en: "Bumjin Electronics",
        tagline: "Integrated Finished Audio & Speaker Driver Solutions",
        desc: "Anchored by our Korea HQ Multimedia R&D Center, Bumjin Electronics operates manufacturing subsidiaries across China, Vietnam, and Indonesia, delivering 11.1.4ch Atmos soundbars, AV receivers, and 60M speaker drivers/yr.",
        locations: [
          "Korea HQ (Suwon)",
          "Bumjin Electronics China",
          "Bumjin Electronics Vietnam",
          "Bumjin Electronics Indonesia",
        ],
        revenue: "",
        employees: "",
        productsLabel: "Core Products",
        products: ["Soundbar · AV Receiver", "Speaker Driver (60M/yr)", "Smart Speaker · TWS"],
        roles: ["Multimedia R&D", "ODM / OEM Production", "77-Country Fulfillment"],
        dark: true,
      },
      {
        name: "Bumjin IND",
        en: "Bumjin IND",
        tagline: "Precision Tooling & Large-Tonnage TOC Injection Molding",
        desc: "Bumjin IND operates 80 injection machines (up to 3,200T TOC) across domestic and overseas manufacturing sites, supplying TV, automotive, appliance, and semiconductor FOUP components.",
        locations: ["Suwon Mold (Saneop-ro 174-14)", "Suwon Molding (Maeyeong-ro 160) · Anseong", "Mexico · Hungary"],
        revenue: "",
        employees: "",
        productsLabel: "Core Business",
        products: ["Precision Molds (300/yr)", "TV & Appliance Molding", "Auto Parts & FOUP"],
        roles: ["E-MOLD · 3D Cooling", "80 Machines (up to 3,200T TOC)", "Americas & EU Supply"],
        dark: false,
      },
      {
        name: "Bumjin C&L Co., Ltd.",
        en: "Bumjin C&L",
        tagline: "Next-Gen Acoustic R&D, Core Modules & AV Showroom",
        desc: "Based at the Korea HQ R&D center and AV showroom, Bumjin C&L leads advanced Audio SoC software, next-generation acoustic modules, and eco-friendly diaphragm research.",
        locations: ["Bumjin C&L HQ (Suwon 5F)", "Corporate R&D Center · Anechoic Lab"],
        revenue: "",
        employees: "",
        productsLabel: "Core Focus",
        products: ["Acoustic & SoC R&D", "New Material Diaphragms", "Startup Incubation"],
        roles: ["Advanced R&D", "AV Showroom & Listening Lab", "New Business Incubation"],
        dark: true,
      },
    ],
    coreMessage:
      '"From advanced R&D to precision tooling, molding, and finished assembly — each affiliate connects seamlessly to deliver a true one-stop manufacturing solution."',
  },
  history: {
    eyebrow: "History & Awards",
    title: "History & Awards",
    subtitle: "Bumjin's milestones of continuous challenge and recognition since 1991.",
    awardsEyebrow: "Awards & Recognition",
    awards: [
      { title: "Korea Best Job-Creating Enterprise", org: "Presidential Award" },
      { title: "Proud Samsung Partner Special Award", org: "Manufacturing Tech Innovation" },
      { title: "Samsung VD Members Certification", org: "Best Partner Award" },
      { title: "SME Innovation Grand Prize", org: "Quality Management" },
      { title: "Korea Excellent Patent Award", org: "Core Technology IP" },
      { title: "Great Place to Work · Model Taxpayer", org: "Culture & Integrity" },
    ],
    entries: [
      { year: "2023", events: [{ month: "02", text: "Commenced business with DENON (AV Receiver production)" }] },
      { year: "2020", events: [{ month: "01", text: "Launched Bumjin Vietnam mass production & expanded to 77 countries" }] },
      { year: "2019", events: [{ month: "10", text: "Established Bumjin Electronics Vietnam Co., Ltd. (BJV)" }] },
      {
        year: "2018",
        events: [
          { month: "05", text: "Established BJAM MEXICANA in Tijuana, Mexico (Large-tonnage molding)" },
          { month: "01", text: "Founded Multimedia R&D Center (in-house Soundbar development)" },
        ],
      },
      { year: "2017", events: [{ month: "12", text: "Completed new Bumjin Suwon headquarters building" }] },
      { year: "2016", events: [{ month: "12", text: "Awarded USD 30M Export Tower at the 53rd Trade Day" }] },
      { year: "2015", events: [{ month: "12", text: "Launched Bluetooth Speaker (proprietary brand: TONN)" }] },
      {
        year: "2014",
        events: [
          { month: "12", text: "Received Samsung Electronics Special Award for Proud Partner" },
          { month: "10", text: "Commenced production at Hungary Bumjin Electronics (BJH)" },
          { month: "03", text: "Established Huizhou Bumjin Technology Co., Ltd. (HBC)" },
          { month: "02", text: "Certified as Samsung Electronics Hidden Champion of the Year" },
        ],
      },
      { year: "2013", events: [{ month: "12", text: "Built new Bumjin IND Suwon Injection Plant (Maeyeong-ro 160)" }] },
      { year: "2011", events: [{ month: "11", text: "Awarded USD 5M Export Tower at the 48th Trade Day" }] },
      { year: "2010", events: [{ month: "04", text: "Established Bumjin Electronics Indonesia (Speaker Systems, Molding)" }] },
      { year: "2009", events: [{ month: "08", text: "Established Hungary subsidiary for European large-tonnage molding" }] },
      {
        year: "2008",
        events: [
          { month: "09", text: "Certified Corporate R&D Center for Bumjin C&L Co., Ltd." },
          { month: "01", text: "Established Tianjin Bumjin Electronics Co., Ltd. (Large molding)" },
        ],
      },
      { year: "2007", events: [{ month: "09", text: "Certified Corporate R&D Center & began Samsung Electronics partnership" }] },
      { year: "2005", events: [{ month: "04", text: "Established Molding Division at Bumjin Industry Co., Ltd." }] },
      {
        year: "2004",
        events: [
          { month: "08", text: "Established China Bumjin Electronics Co., Ltd. (Speaker Systems)" },
          { month: "05", text: "Established Bumjin Electronics Co., Ltd. (Speaker Systems)" },
        ],
      },
      { year: "1991", events: [{ month: "10", text: "Founded Bumjin Industry (Precision Molds & Large Injection)" }] },
    ],
  },
  location: {
    eyebrow: "Location",
    title: "Location",
    subtitle: "Check the details below before visiting Bumjin's domestic facilities.",
    viewLarge: "View Map",
    sitesCountLabel: (count) => `${count} Facilities`,
    prevLabel: "Previous",
    nextLabel: "Next",
    mapHl: "en",
    locations: [
      {
        name: "Bumjin Korea HQ (Electronics · C&L)",
        type: "HQ · Multimedia R&D",
        address: "217, Saneop-ro 155beon-gil, Gwonseon-gu, Suwon-si, Gyeonggi-do",
        phone: "031-493-9415",
        note: "1–5F R&D Labs · Anechoic Chamber · AV Showroom (8,316㎥)",
      },
      {
        name: "Bumjin IND Suwon Mold Plant",
        type: "Precision Tooling",
        address: "174-14, Saneop-ro, Gwonseon-gu, Suwon-si, Gyeonggi-do",
        phone: "031-676-1461",
        note: "42,000RPM CNC · Large EDM · 300 Molds/yr",
      },
      {
        name: "Bumjin IND Suwon Molding Plant",
        type: "Injection Molding",
        address: "160, Maeyeong-ro, Suwon-si, Gyeonggi-do",
        phone: "031-210-4881",
        note: "27 Medium & Large Injection Machines (up to 3,200T TOC)",
      },
      {
        name: "Bumjin IND Anseong Molding Plant",
        type: "Injection Molding",
        address: "47-10, Sinjang-gil, Bogae-myeon, Anseong-si, Gyeonggi-do",
        phone: "031-678-9203",
        note: "Home appliance & automotive component molding",
      },
    ],
  },
  footer: {
    mainHome: "Main Home",
  },
};

const ZH: CompanyTranslations = {
  hero: {
    eyebrow: "Company Introduction",
    title: "公司介绍",
    subtitle: "自1991年创立以来，以挑战与创新不断成长的凡真。",
  },
  subNav: [
    { id: "overview", label: "概要" },
    { id: "ceo", label: "CEO致辞" },
    { id: "vision", label: "愿景" },
    { id: "group", label: "凡真集团" },
    { id: "history", label: "发展历程" },
    { id: "location", label: "交通指南" },
  ],
  overview: {
    eyebrow: "About Us",
    headlineLines: ["挑战与创新，", "以人与客户", "为中心的企业。"],
    intro:
      "凡真创立于1991年（凡真电子·凡真IND·凡真C&L），年营收6,056亿韩元、员工3,565人，全面内制化音响整机、扬声器单元、精密模具与注塑成形，面向5大洲77个国家供货。",
    visionEyebrow: "Vision",
    mottoItems: [
      {
        num: "01",
        archLabel: "挑战创新",
        title: "挑战与创新",
        en: "Challenge & Innovation",
        body: "通过持续的挑战与创新创造丰硕价值。",
      },
      {
        num: "02",
        archLabel: "人才经营",
        title: "人才经营",
        en: "People Management",
        body: "坚信凡真的未来取决于人才，致力于人才培养。",
      },
      {
        num: "03",
        archLabel: "客户满意",
        title: "客户满意",
        en: "Customer Satisfaction",
        body: "依托创新领先技术，践行令客户感动的服务。",
      },
      {
        num: "04",
        archLabel: "正道经营",
        title: "正道经营",
        en: "Integrity Management",
        body: "践行合规经营，信守对员工、客户及社会的承诺。",
      },
      {
        num: "05",
        archLabel: "追求变革",
        title: "追求变革",
        en: "Pursuit of Change",
        body: "以大胆挑战创造全新价值，引领未来发展。",
      },
    ],
    coreMessageLabel: "Core Message",
    coreMessage:
      '"In everyday life, and a happier tomorrow, Bumjin’s smart solution will be there with you."',
  },
  ceo: {
    eyebrow: "CEO Message",
    titleLines: ["CEO", "致辞"],
    ceoTitle: "代表理事 朴正吉",
    ceoCompany: "凡真电子(株) · 凡真IND(株) · 凡真C&L(株)",
    profileEyebrow: "SINCE 1991 · LEADERSHIP",
    profileHeadline: "以挑战与创新走过三十余载的全球制造合作伙伴",
    profileMetrics: [
      { label: "创立日期", value: "1991.10.01" },
      { label: "制造实力", value: "100% 自主垂直整合" },
      { label: "全球供货", value: "5大洲 77个国家" },
      { label: "愿景目标", value: "Vision 2030" },
    ],
    opening:
      "依托自主技术实力与正道透明经营回馈客户信赖，打造人才与技术共同成长的百年企业。",
    highlights: [
      {
        num: "01",
        title: "100% 自主技术独立",
        desc: "以前沿研发、精密模具、注塑到整机量产全流程自主技术赋能",
      },
      {
        num: "02",
        title: "坚守品质与交期信赖",
        desc: "依托全球生产基地，向5大洲77个国家准时交付卓越品质",
      },
      {
        num: "03",
        title: "以人为本 · 正道经营",
        desc: "以透明合规经营与人才培养践行可持续发展，与伙伴共赢未来",
      },
    ],
    paragraphs: [
      "自1991年以精密模具制造起步以来，凡真在过去三十余年间凭借持之以恒的技术挑战与透明经营，成长为涵盖音响多媒体整机、扬声器单元及超精密模具注塑的全球制造合作伙伴。",
      "凡真不满足于单纯的规模扩张，而是聚焦制造本质竞争力。通过前瞻研发投入、100%工序内制化及严格质量体系，全面提升客户产品价值，并在全球77个国家兑现交期与品质承诺。",
      "我们将继续践行恪守法规与伦理的透明经营，建设让人才引以为傲的健康组织文化，携手客户、员工与合作伙伴共同迈向 Vision 2030 的崭新未来。",
    ],
    thanks: "谢谢。",
    philosophyEyebrow: "经营哲学",
    philosophy: [
      {
        num: "01",
        title: "珍视人才",
        items: [
          "将客户与员工的丰盈生活与幸福放在首位。",
          "通过人才培养营造企业与员工共同成长的文化。",
          "打造让优秀人才怀抱主人翁意识施展才华的工作环境。",
        ],
      },
      {
        num: "02",
        title: "遵守法规与伦理",
        items: [
          "以信赖与透明为基础践行正道经营。",
          "通过诚信纳税与负责任的经营为国家经济发展贡献力量。",
        ],
      },
      {
        num: "03",
        title: "打造卓越产品",
        items: [
          "开发能够为客户带来最高满意度的创新技术与产品。",
          "持续推进提升生活品质的技术研发。",
          "以卓越品质与品牌价值打造客户率先认可的产品。",
        ],
      },
      {
        num: "04",
        title: "提升企业价值",
        items: [
          "通过创造社会价值与创新追求可持续发展。",
          "成长为行业领军企业，确保未来市场竞争力。",
          "发展成为连竞争对手都愿学习的典范企业。",
        ],
      },
    ],
  },
  vision: {
    eyebrow: "Vision 2030",
    statement: '"凡真与客户及凡真人同行共成长。"',
    description:
      "Vision 2030以到2030年实现1万亿韩元营收为目标，发掘可成长为百年企业的核心事业群，持续升级研发与基础设施，培养人才并建设充满活力的组织文化，与客户携手共创未来。",
    goals: [
      { value: "1兆", label: "2030营收目标" },
      { value: "6,056亿", label: "年营收 (2022 · CAGR 21%)" },
      { value: "3,565人", label: "全球员工数" },
      { value: "77国", label: "5大洲供货国家" },
    ],
    meaningEyebrow: "愿景含义",
    meaning: [
      { term: "凡真", desc: "指代全球凡真整体，是所有事业与成长核心的我们全体。" },
      { term: "客户", desc: "指与凡真同行的客户、合作伙伴、股东等所有伙伴。" },
      { term: "凡真人", desc: "指引领凡真所有事业发展的全体成员。" },
      { term: "同行", desc: "指通过践行核心价值感动客户，并确立一流竞争力。" },
      { term: "成长", desc: "指通过挑战与创新实现持续成长，追求百年企业与员工幸福价值。" },
    ],
    coreValuesEyebrow: "核心价值",
    coreValues: [
      {
        num: "01",
        title: "客户至上",
        en: "Customer First",
        body: "以提供最优产品与最佳服务为首要准则，将客户置于凡真所有价值的核心，营造感动客户的文化。",
      },
      {
        num: "02",
        title: "人才培养 · 开放文化",
        en: "People & Open Culture",
        body: "秉持企业之本在于人的信念，培养优秀人才，打造让员工尽情施展热情与梦想的幸福企业。",
      },
      {
        num: "03",
        title: "创新 / 执行",
        en: "Innovation & Execution",
        body: "在瞬息万变的全球经营环境中，以突破常规的差异化构想与创造性执行力达成目标。",
      },
      {
        num: "04",
        title: "制造竞争力",
        en: "Manufacturing Excellence",
        body: "依托100%垂直整合、核心工艺内制化与自动化生产实力，确立世界一流的制造竞争力。",
      },
      {
        num: "05",
        title: "可持续经营",
        en: "Sustainable Management",
        body: "以客户与成员的信赖为基础践行透明与合规经营，成长为履行社会责任的百年企业。",
      },
    ],
  },
  group: {
    eyebrow: "Affiliates",
    title: "关联企业",
    subtitle: "为您介绍从音响电子到精密模具·注塑成型垂直整合的凡真集团核心企业。",
    descriptionLabel: "Description",
    foundedLabel: "创立年份",
    businessFieldLabel: "业务领域",
    hqLabel: "总部地址",
    revenueLabel: "营收",
    employeesLabel: "员工",
    locationsLabel: "全球基地",
    rolesLabel: "核心职能",
    visitSiteLabel: "查看事业部",
    affiliatesMeta: [
      {
        category: "Acoustic & Electronics Solutions",
        founded: "2004年 05月",
        businessField: "声棒 · AV功放 · 扬声器单元研发与 ODM/OEM 制造",
        hq: "京畿道水原市劝善区产业路155街217",
        href: "/business/electronics",
      },
      {
        category: "Precision Mold & Injection Molding",
        founded: "1991年 10月",
        businessField: "精密模具(年300套)及TV·汽车·家电·半导体FOUP注塑成形",
        hq: "京畿道水原市劝善区产业路174-14",
        href: "/business/molding",
      },
      {
        category: "R&D & Precision Components",
        founded: "2008年 08月",
        businessField: "多媒体声学前沿研发、核心模组及AV展示厅运营",
        hq: "京畿道水原市劝善区产业路155街217",
        href: "/business/startup",
      },
    ],
    subsidiaries: [
      {
        name: "凡真电子",
        en: "Bumjin Electronics",
        tagline: "全球音响整机与扬声器单元一体化制造解决方案",
        desc: "以韩国总部多媒体研究所为核心，统筹运营中国、越南及印尼生产法人，供应11.1.4ch Atmos声棒、AV功放及年产6,000万只扬声器单元。",
        locations: ["韩国总部(水原)", "凡真电子 中国", "凡真电子 越南", "凡真电子 印尼"],
        revenue: "",
        employees: "",
        productsLabel: "主力产品",
        products: ["Soundbar · AV Receiver", "Speaker Driver (60M/yr)", "Smart Speaker · TWS"],
        roles: ["多媒体研发", "ODM/OEM 大批量生产", "5大洲77国供应"],
        dark: true,
      },
      {
        name: "凡真IND",
        en: "Bumjin IND",
        tagline: "精密模具与超大型TOC双色注塑核心部件",
        desc: "在国内外生产基地运营80台注塑机(最大3,200T TOC)，为TV、汽车内外饰、生活家电及半导体FOUP提供核心零件。",
        locations: ["水原模具(产业路174-14)", "水原注塑(梅英路160) · 安城", "墨西哥 · 匈牙利"],
        revenue: "",
        employees: "",
        productsLabel: "主力业务",
        products: ["精密模具(年300套)", "TV · 家电注塑", "汽车部件 · FOUP"],
        roles: ["E-MOLD · 3D冷却模具", "80台注塑(最大3,200T)", "美洲与欧洲本地供货"],
        dark: false,
      },
      {
        name: "凡真C&L(株)",
        en: "Bumjin C&L",
        tagline: "新一代声学与电子前沿研发及AV展示厅解决方案",
        desc: "以水原总部研发中心及AV展示厅为核心，推进Audio SoC软件、前沿声学模组及环保新材料振膜研究，引领集团技术竞争力。",
        locations: ["凡真C&L 总部（水原HQ 5F）", "企业附属研究所 · 消声室"],
        revenue: "",
        employees: "",
        productsLabel: "核心能力",
        products: ["声学 · SoC前沿研究", "新材料振膜研发", "初创企业量产赋能"],
        roles: ["前沿技术研发", "AV展示厅与试听室", "新业务孵化"],
        dark: true,
      },
    ],
    coreMessage:
      '"从前沿研发到精密模具、注塑与整机量产——各关联企业紧密协同，为客户提供真正的一站式制造解决方案。"',
  },
  history: {
    eyebrow: "History & Awards",
    title: "发展历程与荣誉",
    subtitle: "自1991年创立以来，凡真以挑战与创新书写的成长足迹与主要获奖荣誉。",
    awardsEyebrow: "Awards & Recognition",
    awards: [
      { title: "韩国最佳就业优秀企业", org: "总统奖" },
      { title: "自豪三星人奖特别奖", org: "制造技术创新领域" },
      { title: "Samsung VD Members 认证", org: "优秀合作伙伴奖" },
      { title: "中小企业创新大奖", org: "质量管理领域" },
      { title: "韩国优秀专利大奖", org: "核心技术专利" },
      { title: "优秀雇主 · 模范纳税企业奖", org: "企业文化 · 透明经营" },
    ],
    entries: [
      { year: "2023", events: [{ month: "02", text: "开启 DENON 合作（生产 AV Receiver）" }] },
      { year: "2020", events: [{ month: "01", text: "启动越南基地量产并扩展全球物流至77个国家" }] },
      { year: "2019", events: [{ month: "10", text: "成立凡真电子越南有限公司(BJV)" }] },
      {
        year: "2018",
        events: [
          { month: "05", text: "成立墨西哥 BJAM MEXICANA（大型注塑）" },
          { month: "01", text: "设立多媒体研究所（自主研发 Soundbar）" },
        ],
      },
      { year: "2017", events: [{ month: "12", text: "凡真水原新办公大楼竣工" }] },
      { year: "2016", events: [{ month: "12", text: "荣获第53届贸易日3,000万美元出口塔奖" }] },
      { year: "2015", events: [{ month: "12", text: "推出蓝牙音箱（自有品牌：TONN）" }] },
      {
        year: "2014",
        events: [
          { month: "12", text: "荣获三星电子(株)自豪三星人特别奖" },
          { month: "10", text: "匈牙利凡真电子(BJH)正式投产" },
          { month: "03", text: "成立惠州凡真科技有限公司(HBC)" },
          { month: "02", text: "获三星电子(株)年度强小企业认证" },
        ],
      },
      { year: "2013", events: [{ month: "12", text: "凡真IND(株)水原注塑工厂新建搬迁（梅英路160）" }] },
      { year: "2011", events: [{ month: "11", text: "荣获第48届贸易日500万美元出口塔奖" }] },
      { year: "2010", events: [{ month: "04", text: "成立凡真电子印度尼西亚公司(BJI)（扬声器、注塑）" }] },
      { year: "2009", events: [{ month: "08", text: "设立匈牙利法人，奠定欧洲大型注塑基地基础" }] },
      {
        year: "2008",
        events: [
          { month: "09", text: "凡真C&L(株)获企业附属研究所认证" },
          { month: "01", text: "成立天津凡真电子有限公司（大型注塑）" },
        ],
      },
      { year: "2007", events: [{ month: "09", text: "获企业附属研究所认证并开启与三星电子合作" }] },
      { year: "2005", events: [{ month: "04", text: "设立凡真工业(株)成型事业部" }] },
      {
        year: "2004",
        events: [
          { month: "08", text: "成立中国凡真电子有限公司（扬声器系统）" },
          { month: "05", text: "成立凡真电子(株)（扬声器系统）" },
        ],
      },
      { year: "1991", events: [{ month: "10", text: "创立凡真工业社（精密模具制造与大型注塑）" }] },
    ],
  },
  location: {
    eyebrow: "Location",
    title: "交通指南",
    subtitle: "来访凡真韩国各基地前，请先确认以下地址与联系方式。",
    viewLarge: "查看大图",
    sitesCountLabel: (count) => `${count} 处基地`,
    prevLabel: "上一页",
    nextLabel: "下一页",
    mapHl: "zh-CN",
    locations: [
      {
        name: "凡真韩国总部 HQ（电子 · C&L）",
        type: "总部 · 多媒体研发",
        address: "京畿道水原市劝善区产业路155街217（古索洞）",
        phone: "031-493-9415",
        note: "1~5F 研究所·消声室·试听室·AV展示厅 (8,316㎥)",
      },
      {
        name: "凡真IND 水原模具基地",
        type: "超精密模具制造",
        address: "京畿道水原市劝善区产业路174-14（古索洞）",
        phone: "031-676-1461",
        note: "42,000RPM高速加工·EDM · 年产300套模具",
      },
      {
        name: "凡真IND 水原注塑基地",
        type: "中·大型注塑成形",
        address: "京畿道水原市梅英路160",
        phone: "031-210-4881",
        note: "运营27台160T~3,200T TOC注塑机",
      },
      {
        name: "凡真IND 安城成形基地",
        type: "注塑成型制造",
        address: "京畿道安城市宝盖面新长路47-10",
        phone: "031-678-9203",
        note: "生活家电与汽车零部件注塑成型",
      },
    ],
  },
  footer: {
    mainHome: "返回首页",
  },
};

const JA: CompanyTranslations = {
  hero: {
    eyebrow: "Company Introduction",
    title: "会社紹介",
    subtitle: "1991年の創業以来、挑戦と革新で成長を続けてきたボムジンをご紹介します。",
  },
  subNav: [
    { id: "overview", label: "概要" },
    { id: "ceo", label: "CEO挨拶" },
    { id: "vision", label: "ビジョン" },
    { id: "group", label: "ボムジン" },
    { id: "history", label: "沿革" },
    { id: "location", label: "アクセス" },
  ],
  overview: {
    eyebrow: "About Us",
    headlineLines: ["挑戦と革新、", "人と顧客", "中心の企業。"],
    intro:
      "1991年創業のボムジン（ボムジン電子(株)・ボムジンIND(株)・ボムジンC&L(株)）は、売上高6,056億ウォン・従業員数3,565名規模へと成長し、音響完成品・スピーカードライバー・精密金型・射出成形を100%内製化して5大陸77ヶ国へ供給しています。",
    visionEyebrow: "Vision",
    mottoItems: [
      {
        num: "01",
        archLabel: "挑戦と革新",
        title: "挑戦と革新",
        en: "Challenge & Innovation",
        body: "絶え間ない挑戦と革新を通じて豊かな価値を創造します。",
      },
      {
        num: "02",
        archLabel: "人材経営",
        title: "人材経営",
        en: "People Management",
        body: "ボムジンの未来は人材にかかっているという信念のもと、人材育成を追求します。",
      },
      {
        num: "03",
        archLabel: "顧客満足",
        title: "顧客満足",
        en: "Customer Satisfaction",
        body: "革新的な先端技術をもとに顧客感動を実践します。",
      },
      {
        num: "04",
        archLabel: "正道経営",
        title: "正道経営",
        en: "Integrity Management",
        body: "コンプライアンス経営の実践により、社員・顧客・社会との約束を守ります。",
      },
      {
        num: "05",
        archLabel: "変化追求",
        title: "変化追求",
        en: "Pursuit of Change",
        body: "大胆な挑戦で新たな価値を創造し、未来をリードします。",
      },
    ],
    coreMessageLabel: "Core Message",
    coreMessage:
      '"In everyday life, and a happier tomorrow, Bumjin’s smart solution will be there with you."',
  },
  ceo: {
    eyebrow: "CEO Message",
    titleLines: ["CEO", "ご挨拶"],
    ceoTitle: "代表取締役 朴正吉 (Park Jung-gil)",
    ceoCompany: "ボムジン電子(株) · ボムジンIND(株) · ボムジンC&L(株)",
    profileEyebrow: "SINCE 1991 · LEADERSHIP",
    profileHeadline: "挑戦と革新で30年余りを歩んできたグローバル製造パートナー",
    profileMetrics: [
      { label: "創業", value: "1991.10.01" },
      { label: "製造力", value: "100% インハウス垂直統合" },
      { label: "グローバル供給", value: "5大陸 77ヶ国" },
      { label: "ビジョン目標", value: "Vision 2030" },
    ],
    opening:
      "技術の自立と正道経営でお客様の信頼に応え、人材と技術がともに成長する100年企業を築いてまいります。",
    highlights: [
      {
        num: "01",
        title: "100% インハウス技術自立",
        desc: "先行R&Dから金型・射出成形・完成品量産まで自社技術で完結",
      },
      {
        num: "02",
        title: "妥協のない品質・納期信頼",
        desc: "グローバル生産拠点網により5大陸77ヶ国へ適時供給を実現",
      },
      {
        num: "03",
        title: "人材尊重・正道経営",
        desc: "透明なコンプライアンス経営と人材育成で持続可能な共創成長を実現",
      },
    ],
    paragraphs: [
      "1991年の精密金型製造から歩みを始めたボムジンは、過去30余年にわたる絶え間ない技術挑戦と透明な経営により、音響・マルチメディア完成品からスピーカードライバー、超精密金型・射出成形まで網羅するグローバル製造パートナーへと成長してまいりました。",
      "私たちは単なる規模拡大ではなく本質的な製造競争力に注力しています。先行R&D投資と100%インハウス工程内製化、厳格な品質管理によりお客様の製品価値を高め、世界77ヶ国市場で約束された品質と納期を守り続けています。",
      "法と倫理を遵守する透明経営と、社員が誇りをもって力を発揮できる健全な組織文化を基盤に、お客様・社員・パートナー企業とともに飛躍する Vision 2030 の未来を切り拓いてまいります。",
    ],
    thanks: "ありがとうございます。",
    philosophyEyebrow: "経営哲学",
    philosophy: [
      {
        num: "01",
        title: "人材を大切にし",
        items: [
          "お客様と社員の豊かな暮らしと幸福を最優先に考えます。",
          "人材育成を通じて企業と社員がともに成長する文化を築きます。",
          "優秀な人材がオーナーシップを持って力を発揮できる職場をつくります。",
        ],
      },
      {
        num: "02",
        title: "法と倫理を遵守し",
        items: [
          "信頼と透明性をもとに正道経営を実践します。",
          "誠実な納税と責任ある経営で国家経済の発展に貢献します。",
        ],
      },
      {
        num: "03",
        title: "最高の製品で",
        items: [
          "お客様に最高の満足を提供する革新的な技術と製品を開発します。",
          "暮らしの質の向上に貢献する技術開発を継続的に推進します。",
          "卓越した品質とブランド価値でお客様に選ばれる製品を創り続けます。",
        ],
      },
      {
        num: "04",
        title: "企業価値を向上させる",
        items: [
          "社会的価値の創出と革新を通じて持続可能な成長を追求します。",
          "業界をリードする企業へと成長し、未来の市場競争力を確保します。",
          "競合他社も学びたくなる模範的な企業へと発展してまいります。",
        ],
      },
    ],
  },
  vision: {
    eyebrow: "Vision 2030",
    statement: '"ボムジンは顧客とボムジン人の同行により成長する。"',
    description:
      "Vision 2030は2030年までの売上1兆ウォン達成を目標に、100年企業へと成長可能な中核事業群を発掘し、R&Dおよびインフラを継続的に発展させ、中堅企業へと飛躍するための人材育成と活気ある組織文化の構築によってお客様とともに成長する未来を創造します。",
    goals: [
      { value: "1兆", label: "2030年売上目標" },
      { value: "6,056億", label: "年間売上高 (2022 · CAGR 21%)" },
      { value: "3,565名", label: "グローバル従業員数" },
      { value: "77ヶ国", label: "5大陸供給国" },
    ],
    meaningEyebrow: "ビジョンの意味",
    meaning: [
      { term: "ボムジンは", desc: "グローバル・ボムジン全体を意味し、すべての事業と成長の中心となる私たち全員を指します。" },
      { term: "顧客は", desc: "お客様、協力会社、株主などボムジンとともに歩むすべてのパートナーを意味します。" },
      { term: "ボムジン人は", desc: "ボムジンのあらゆる事業を牽引する全社員を意味します。" },
      { term: "同行により", desc: "コアバリューの実践を通じてお客様を感動させ、一流の競争力を確保することを意味します。" },
      { term: "成長するとは", desc: "挑戦と革新による持続成長で100年企業を追求し、社員の幸福と価値を実現することを意味します。" },
    ],
    coreValuesEyebrow: "コアバリュー",
    coreValues: [
      {
        num: "01",
        title: "顧客最優先",
        en: "Customer First",
        body: "最高の製品と最上のサービス提供を最優先とし、ボムジンのあらゆる価値の中心にお客様を置いて顧客感動文化を築きます。",
      },
      {
        num: "02",
        title: "人材育成・開かれた組織文化",
        en: "People & Open Culture",
        body: "企業の基本は人であるという信念のもと優秀な人材を育成し、社員が情熱と夢を広げられる幸福な会社をつくります。",
      },
      {
        num: "03",
        title: "革新 / 実行",
        en: "Innovation & Execution",
        body: "急変するグローバル経営環境の中でも既存の枠を超えた差別化アイデアと創造的な実行力で目標を達成します。",
      },
      {
        num: "04",
        title: "製造競争力",
        en: "Manufacturing Excellence",
        body: "100%垂直統合とコア工程の内製化、自動化生産能力をもとにグローバル一流の製造競争力を確保します。",
      },
      {
        num: "05",
        title: "持続可能な経営",
        en: "Sustainable Management",
        body: "お客様と社員の信頼をもとに透明経営とコンプライアンス経営を実践し、社会的責任を果たす100年企業へと成長します。",
      },
    ],
  },
  group: {
    eyebrow: "Affiliates",
    title: "グループ会社",
    subtitle: "音響エレクトロニクスから精密金型・射出成形まで垂直統合されたボムジングループをご紹介します。",
    descriptionLabel: "Description",
    foundedLabel: "設立年",
    businessFieldLabel: "事業分野",
    hqLabel: "本社所在地",
    revenueLabel: "売上高",
    employeesLabel: "従業員数",
    locationsLabel: "グローバル拠点",
    rolesLabel: "主な役割",
    visitSiteLabel: "事業部詳細",
    affiliatesMeta: [
      {
        category: "Acoustic & Electronics Solutions",
        founded: "2004年 05月",
        businessField: "サウンドバー・AVレシーバー・スピーカードライバー研究開発およびODM/OEM製造",
        hq: "京畿道水原市勧善区産業路155番キル217",
        href: "/business/electronics",
      },
      {
        category: "Precision Mold & Injection Molding",
        founded: "1991年 10月",
        businessField: "精密金型（年300型）およびTV・自動車・家電・半導体FOUP射出成形",
        hq: "京畿道水原市勧善区産業路174-14",
        href: "/business/molding",
      },
      {
        category: "R&D & Precision Components",
        founded: "2008年 08月",
        businessField: "マルチメディア・音響先行R&D、コアモジュールおよびAVショールーム運営",
        hq: "京畿道水原市勧善区産業路155番キル217",
        href: "/business/startup",
      },
    ],
    subsidiaries: [
      {
        name: "ボムジン電子",
        en: "Bumjin Electronics",
        tagline: "グローバルオーディオ完成品・スピーカーユニット統合製造ソリューション",
        desc: "ボムジン電子は韓国HQマルチメディア研究所を拠点に、中国・ベトナム・インドネシア生産法人を運営し、11.1.4ch Atmosサウンドバー、AVレシーバー、年間6,000万個のスピーカードライバーを供給しています。",
        locations: [
          "韓国HQ（水原本社）",
          "ボムジン電子 中国",
          "ボムジン電子 ベトナム",
          "ボムジン電子 インドネシア",
        ],
        revenue: "",
        employees: "",
        productsLabel: "主力製品",
        products: ["Soundbar · AV Receiver", "Speaker Driver (60M/yr)", "Smart Speaker · TWS"],
        roles: ["マルチメディアR&D", "ODM/OEM量産", "5大陸77ヶ国供給"],
        dark: true,
      },
      {
        name: "ボムジンIND",
        en: "Bumjin IND",
        tagline: "精密金型・超大型TOC射出成形コア部品の供給",
        desc: "ボムジンINDは国内外の生産拠点で80台の射出成形機（最大3,200T TOC）を稼働し、TV、自動車内外装、生活家電、半導体FOUP部品を供給しています。",
        locations: ["水原金型(産業路174-14)", "水原射出(梅嶺路160) · 安城", "メキシコ · ハンガリー"],
        revenue: "",
        employees: "",
        productsLabel: "主力事業",
        products: ["精密金型（年300型）", "TV・生活家電射出", "自動車・半導体FOUP"],
        roles: ["E-MOLD · 3D冷却金型", "80台射出（最大3,200T TOC）", "米州・欧州現地供給"],
        dark: false,
      },
      {
        name: "ボムジンC&L(株)",
        en: "Bumjin C&L Co., Ltd.",
        tagline: "次世代音響・電子R&Dおよびコアモジュール・ショールームソリューション",
        desc: "ボムジンC&Lは水原本社R&DセンターおよびAVショールームを中心に、Audio SoCソフトウェア、次世代音響モジュールおよび新素材振動板の研究を行い、グループの先行技術競争力を牽引しています。",
        locations: ["ボムジンC&L本社（水原HQ 5F）", "企業付設研究所・無響室"],
        revenue: "",
        employees: "",
        productsLabel: "コア領域",
        products: ["音響・SoC先行研究", "新素材振動板開発", "スタートアップ製品化支援"],
        roles: ["先行技術R&D", "AVショールーム・試聴室運営", "新規事業インキュベーション"],
        dark: true,
      },
    ],
    coreMessage:
      '"先行R&Dから精密金型・射出成形、完成品量産まで——グループ各社の専門性がひとつにつながるワンストップ製造ソリューションを提供します。"',
  },
  history: {
    eyebrow: "History & Awards",
    title: "沿革・受賞",
    subtitle: "1991年の創業以来、絶え間ない挑戦と革新で築き上げてきたボムジンの歩みと主な受賞実績です。",
    awardsEyebrow: "Awards & Recognition",
    awards: [
      { title: "大韓民国 雇用優秀企業", org: "大統領賞" },
      { title: "誇らしいサムスン人賞 特別賞", org: "製造技術革新部門" },
      { title: "Samsung VD Members 認証", org: "優秀協力社賞" },
      { title: "中小企業革新大賞", org: "品質部門" },
      { title: "大韓民国 優秀特許大賞", org: "コア技術特許" },
      { title: "働きやすい企業・模範納税者賞", org: "企業文化・透明経営" },
    ],
    entries: [
      { year: "2023", events: [{ month: "02", text: "DENONとの取引開始（AVレシーバー生産）" }] },
      { year: "2020", events: [{ month: "01", text: "ボムジン電子ベトナム生産開始およびグローバル物流77ヶ国拡大" }] },
      { year: "2019", events: [{ month: "10", text: "ボムジン電子ベトナム有限会社(BJV) 設立" }] },
      {
        year: "2018",
        events: [
          { month: "05", text: "メキシコ ボムジンアメリカ(BJAM MEXICANA) 設立（大型射出）" },
          { month: "01", text: "マルチメディア研究所 設立（サウンドバー自社開発）" },
        ],
      },
      { year: "2017", events: [{ month: "12", text: "ボムジン水原新社屋 竣工" }] },
      { year: "2016", events: [{ month: "12", text: "第53回貿易の日 3,000万ドル輸出の塔 受賞" }] },
      { year: "2015", events: [{ month: "12", text: "Bluetoothスピーカー発売（自社ブランド：TONN）" }] },
      {
        year: "2014",
        events: [
          { month: "12", text: "サムスン電子(株) 誇らしいサムスン人賞 特別賞 受賞" },
          { month: "10", text: "ハンガリーボムジン電子(BJH) 生産稼働" },
          { month: "03", text: "恵州ボムジン科技有限公司(HBC) 設立" },
          { month: "02", text: "サムスン電子(株) 今年の強小企業 認証" },
        ],
      },
      { year: "2013", events: [{ month: "12", text: "ボムジンIND(株) 水原射出工場 新築移転（梅嶺路160）" }] },
      { year: "2011", events: [{ month: "11", text: "第48回貿易の日 500万ドル輸出の塔 受賞" }] },
      { year: "2010", events: [{ month: "04", text: "ボムジン電子インドネシア(BJI) 設立（スピーカーシステム、射出）" }] },
      { year: "2009", events: [{ month: "08", text: "ハンガリー法人設立および大型射出海外進出基盤構築" }] },
      {
        year: "2008",
        events: [
          { month: "09", text: "ボムジンC&L(株) 企業付設研究所 認証" },
          { month: "01", text: "天津ボムジン電子有限公司 設立（大型射出）" },
        ],
      },
      { year: "2007", events: [{ month: "09", text: "ボムジン工業(株) 企業付設研究所 認証およびサムスン電子取引開始" }] },
      { year: "2005", events: [{ month: "04", text: "ボムジン工業(株) 成形事業部 設立" }] },
      {
        year: "2004",
        events: [
          { month: "08", text: "中国ボムジン電子有限公司 設立（スピーカーシステム）" },
          { month: "05", text: "ボムジン電子(株) 設立（スピーカーシステム）" },
        ],
      },
      { year: "1991", events: [{ month: "10", text: "ボムジン工業社 創業（金型製造・大型射出開始）" }] },
    ],
  },
  location: {
    eyebrow: "Location",
    title: "アクセス",
    subtitle: "ボムジンの国内事業所をご訪問の際は、下記情報をご確認ください。",
    viewLarge: "拡大表示",
    sitesCountLabel: (count) => `${count} 事業所`,
    prevLabel: "前へ",
    nextLabel: "次へ",
    mapHl: "ja",
    locations: [
      {
        name: "ボムジン水原HQ（ボムジン電子・C&L）",
        type: "本社・マルチメディアR&D",
        address: "京畿道水原市勧善区産業路155番キル217（古索洞）",
        phone: "031-493-9415",
        note: "1〜5F 研究所・無響室・試聴室・AVショールーム (8,316㎥)",
      },
      {
        name: "ボムジンIND 水原金型事業所",
        type: "超精密金型製造",
        address: "京畿道水原市勧善区産業路174-14（古索洞）",
        phone: "031-676-1461",
        note: "42,000RPM高速加工・EDM・年300型金型製作",
      },
      {
        name: "ボムジンIND 水原射出事業所",
        type: "中・大型射出成形",
        address: "京畿道水原市梅嶺路160",
        phone: "031-210-4881",
        note: "160T〜3,200T TOC中大型射出機27台稼働",
      },
      {
        name: "ボムジンIND 安城成形事業所",
        type: "射出成形製造",
        address: "京畿道安城市宝蓋面新長キル47-10",
        phone: "031-678-9203",
        note: "生活家電・自動車部品射出成形",
      },
    ],
  },
  footer: {
    mainHome: "メインホーム",
  },
};

export const COMPANY_TRANSLATIONS: Record<Lang, CompanyTranslations> = {
  ko: KO,
  en: EN,
  zh: ZH,
  ja: JA,
};

export function getCompanyTranslations(lang: Lang): CompanyTranslations {
  return COMPANY_TRANSLATIONS[lang] ?? KO;
}
