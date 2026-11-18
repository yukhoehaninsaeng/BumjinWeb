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
    opening: string;
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
    revenueLabel: string;
    employeesLabel: string;
    locationsLabel: string;
    rolesLabel: string;
    subsidiaries: SubsidiaryItem[];
    coreMessage: string;
  };
  history: {
    eyebrow: string;
    title: string;
    subtitle: string;
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
      "범진은 글로벌 전자·제조 전문 기업으로, 음향기기와 금형·사출 분야에서 30년 이상의 기술력과 신뢰를 축적해 왔습니다.",
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
      '"도전과 혁신, 인재와 고객 중심의 가치 실현을 통해 지속 가능한 성장을 만들어가는 기업"',
  },
  ceo: {
    eyebrow: "CEO Message",
    titleLines: ["CEO", "인사말"],
    ceoTitle: "대표이사",
    ceoCompany: "범진전자(주) · 범진아이엔디(주)",
    opening:
      "범진은 고객의 행복한 삶이라는 가치 실현을 위해 끊임없이 도전하며 성장해 왔습니다.",
    paragraphs: [
      "1991년 창립 이후 범진은 견고한 기술력과 투명한 경영을 바탕으로 국내 시장에서 경쟁력을 확보하고, 세계 각국에 생산기지를 구축하며 음향기기 및 금형·사출 분야의 전문 기업으로 성장해 왔습니다. 모두가 불가능하다고 했던 꿈을 현실로 만들어 온 지난 시간처럼, 범진은 미래를 향한 도전을 멈추지 않을 것입니다.",
      "범진은 단순한 외형적 성장에 만족하지 않습니다. 지속적인 투자와 연구개발을 통해 고객에게 더 큰 가치를 제공하고, 글로벌 시장에서 신뢰받는 기업으로 자리매김하기 위해 최선을 다하고 있습니다. 고객의 성공이 곧 우리의 성공이라는 믿음 아래 최고의 품질과 혁신적인 기술로 고객 만족을 실현해 나가겠습니다.",
      "또한 범진은 고객, 임직원, 협력사와 함께 성장하는 기업을 지향합니다. 신뢰와 투명성을 바탕으로 정도경영을 실천하며, 인재를 소중히 여기고 사회적 책임을 다하는 기업으로서 지속 가능한 미래를 만들어 가겠습니다.",
      "저희 임직원 모두는 현재의 자부심을 지키며 미래에 대한 확고한 비전으로 새로운 내일을 향해 나아가겠습니다.",
      "앞으로도 범진의 도전과 성장에 변함없는 관심과 성원을 부탁드립니다.",
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
    eyebrow: "Vision 2025",
    statement: '"범진은 고객과 범진人의 동행으로 성장한다."',
    description:
      "Vision 2025는 2025년까지 매출 1조 달성을 목표로 백년기업으로 성장 가능한 핵심 사업군을 발굴하고, R&D 및 인프라를 지속적으로 발전시키며, 중견기업으로 도약하기 위한 인재 육성과 활기찬 조직문화를 구축하여 고객과 함께 성장하는 미래를 만들어갑니다.",
    goals: [
      { value: "1조", label: "2025 매출 목표" },
      { value: "100년", label: "장기 목표" },
      { value: "30+", label: "창립 연수" },
      { value: "6개국", label: "글로벌 생산 거점" },
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
        title: "인재존중과 열린 조직문화",
        en: "People & Culture",
        body: "기업의 기본은 사람이라는 신념 아래 우수한 인재를 육성하고, 구성원들이 열정과 꿈을 펼칠 수 있는 행복한 회사를 만들어갑니다.",
      },
      {
        num: "03",
        title: "도전과 실행",
        en: "Challenge & Execution",
        body: "급변하는 글로벌 경영환경 속에서도 기존의 틀을 뛰어넘는 차별화된 아이디어와 창의적인 실행력으로 목표를 달성합니다.",
      },
      {
        num: "04",
        title: "열린 소통과 협력",
        en: "Communication & Partnership",
        body: "고객, 협력사, 그리고 내부 조직 간의 원활한 소통과 협력을 통해 조직 발전의 시너지 효과를 창출합니다.",
      },
      {
        num: "05",
        title: "투명·정도경영",
        en: "Integrity Management",
        body: "고객과 구성원의 신뢰를 바탕으로 투명경영과 준법경영을 실천하며, 사회적 책임을 다하는 지속가능한 기업으로 성장합니다.",
      },
    ],
  },
  group: {
    eyebrow: "Bumjin Group",
    title: "범진",
    revenueLabel: "매출",
    employeesLabel: "임직원",
    locationsLabel: "사업장",
    rolesLabel: "주요 역할",
    subsidiaries: [
      {
        name: "범진전자",
        en: "Bumjin Electronics",
        tagline: "글로벌 전자제품 통합 제조 솔루션",
        desc: "범진전자는 글로벌 전자제품 제조 전문 기업으로 연구개발부터 생산, 품질관리까지 통합 제조 솔루션을 제공합니다.",
        locations: [
          "범진전자 (한국)",
          "범진전자 중국",
          "범진전자 베트남",
          "범진전자 인도네시아",
        ],
        revenue: "3,578억",
        employees: "2,150",
        productsLabel: "주력 제품",
        products: ["Sound Bar", "Speaker", "Home Theater"],
        roles: ["전자제품 연구개발", "ODM/OEM 생산", "글로벌 생산 및 품질관리"],
        dark: true,
      },
      {
        name: "범진IND",
        en: "Bumjin IND",
        tagline: "정밀 금형·사출성형 핵심 부품 공급",
        desc: "범진IND는 금형 설계·제작 및 사출성형 분야의 전문 기업으로 생활가전과 자동차 산업에 필요한 핵심 부품을 공급하고 있습니다.",
        locations: ["범진IND 금형·성형사업장", "범진IND 멕시코", "범진IND 헝가리"],
        revenue: "2,069억",
        employees: "1,200",
        productsLabel: "주력 사업",
        products: ["금형 설계·제작", "생활가전 사출성형", "자동차 부품 사출성형"],
        roles: ["정밀 금형 개발", "사출성형 생산", "글로벌 제조 지원"],
        dark: false,
      },
    ],
    coreMessage:
      '"연구개발, 생산, 금형, 사출성형까지 아우르는 글로벌 제조 밸류체인을 구축하여 고객의 성공을 지원합니다."',
  },
  history: {
    eyebrow: "History",
    title: "연혁",
    subtitle: "1991년 창립 이후 지속적인 도전과 혁신으로 성장해 온 범진의 발자취입니다.",
    entries: [
      { year: "2023", events: [{ month: "02", text: "DENON 거래 개시 (AV Receiver 생산)" }] },
      { year: "2019", events: [{ month: "10", text: "범진전자베트남 유한공사 설립" }] },
      { year: "2018", events: [{ month: "01", text: "멀티미디어연구소 설립 (사운드바 자체 개발)" }] },
      { year: "2017", events: [{ month: "12", text: "범진 신사옥 신축 완공" }] },
      { year: "2016", events: [{ month: "12", text: "제53회 무역의 날 3,000만불 수출의 탑 수상" }] },
      { year: "2015", events: [{ month: "12", text: "블루투스 스피커 출시 (자사 브랜드 : TONN)" }] },
      {
        year: "2014",
        events: [
          { month: "12", text: "삼성전자(주) 자랑스런 삼성인상 특별상 수상" },
          { month: "08", text: "헝가리범진전자 KFT 설립" },
          { month: "02", text: "삼성전자(주) 올해의 강소기업 인증" },
        ],
      },
      { year: "2013", events: [{ month: "07", text: "범진아이엔디(주) 수원공장 신축 이전" }] },
      { year: "2011", events: [{ month: "11", text: "제48회 무역의 날 500만불 수출의 탑 수상" }] },
      { year: "2010", events: [{ month: "04", text: "범진전자 인도네시아 설립 (스피커시스템, 사출)" }] },
      {
        year: "2008",
        events: [
          { month: "09", text: "범진시엔엘(주) 기업부설연구소 인증" },
          { month: "08", text: "범진시엔엘(주) 안산공장 신축 이전" },
          { month: "01", text: "천진범진전자유한공사 설립" },
        ],
      },
      { year: "2007", events: [{ month: "09", text: "범진공업(주) 기업부설연구소 인증" }] },
      { year: "2005", events: [{ month: "04", text: "범진공업(주) 성형사업부 설립" }] },
      {
        year: "2004",
        events: [
          { month: "08", text: "중국범진전자유한공사 설립 (스피커시스템)" },
          { month: "05", text: "범진전자(주) 설립 (스피커시스템)" },
        ],
      },
      { year: "1991", events: [{ month: "10", text: "범진공업사 설립 (금형, 서울 영등포 소재)" }] },
    ],
  },
  location: {
    eyebrow: "Location",
    title: "찾아오시는 길",
    subtitle: "범진의 사업장을 방문하시기 전 아래 정보를 확인해 주세요.",
    viewLarge: "크게 보기",
    sitesCountLabel: (count) => `${count}개 사업장`,
    prevLabel: "이전",
    nextLabel: "다음",
    mapHl: "ko",
    locations: [
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
      "Bumjin is a global electronics and manufacturing specialist with over 30 years of accumulated technology and trust in acoustic systems, precision molds, and injection molding.",
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
      '"A company building sustainable growth by realizing people- and customer-centric value through challenge and innovation."',
  },
  ceo: {
    eyebrow: "CEO Message",
    titleLines: ["CEO", "Message"],
    ceoTitle: "Chief Executive Officer",
    ceoCompany: "Bumjin Electronics Co., Ltd. · Bumjin IND Co., Ltd.",
    opening:
      "Bumjin has grown through continuous challenge to realize the value of a happier life for our customers.",
    paragraphs: [
      "Since our founding in 1991, Bumjin has built strong competitiveness in the domestic market on a foundation of solid technology and transparent management, expanding production bases worldwide to become a specialist in acoustic devices, precision molds, and injection molding. Just as we turned what many called impossible dreams into reality, Bumjin will never stop challenging the future.",
      "We are never satisfied with mere quantitative growth. Through continuous investment and R&D, we strive to deliver greater value to our customers and stand as a trusted partner in the global market. Guided by the belief that our customers' success is our success, we will achieve complete customer satisfaction with superior quality and innovative technology.",
      "Furthermore, Bumjin aspires to grow together with our customers, employees, and partners. Practicing ethical management built on trust and transparency, we will cherish our talent and fulfill our social responsibilities to build a sustainable future.",
      "All of us at Bumjin will uphold our pride today and move forward toward a new tomorrow with a steadfast vision for the future.",
      "We sincerely ask for your continued interest and support in Bumjin's ongoing journey of challenge and growth.",
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
    eyebrow: "Vision 2025",
    statement: '"Bumjin grows together with our customers and Bumjin people."',
    description:
      "Aiming for KRW 1 trillion in revenue, Vision 2025 identifies core business pillars capable of 100-year longevity, continuously advances R&D and infrastructure, and fosters talent and an energetic corporate culture to grow alongside our customers.",
    goals: [
      { value: "₩1T", label: "2025 Revenue Target" },
      { value: "100 Yrs", label: "Long-Term Vision" },
      { value: "30+", label: "Years of Heritage" },
      { value: "6", label: "Global Production Sites" },
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
        en: "People & Culture",
        body: "Guided by the belief that people are the foundation of enterprise, we nurture talent and build a joyful workplace.",
      },
      {
        num: "03",
        title: "Challenge & Execution",
        en: "Challenge & Execution",
        body: "Even in a rapidly shifting global environment, we achieve our goals with bold ideas and creative execution.",
      },
      {
        num: "04",
        title: "Communication & Partnership",
        en: "Communication & Partnership",
        body: "We generate organizational synergy through open communication and collaboration across customers, partners, and teams.",
      },
      {
        num: "05",
        title: "Integrity Management",
        en: "Integrity Management",
        body: "Built on trust with customers and employees, we practice transparent, compliant management and fulfill our social responsibilities.",
      },
    ],
  },
  group: {
    eyebrow: "Bumjin Group",
    title: "Bumjin",
    revenueLabel: "Revenue",
    employeesLabel: "Employees",
    locationsLabel: "Sites",
    rolesLabel: "Key Roles",
    subsidiaries: [
      {
        name: "Bumjin Electronics",
        en: "Bumjin Electronics",
        tagline: "Integrated Global Electronics Manufacturing Solution",
        desc: "Bumjin Electronics is a global electronics manufacturing specialist providing end-to-end solutions from R&D to production and quality control.",
        locations: [
          "Bumjin Electronics (Korea)",
          "Bumjin Electronics China",
          "Bumjin Electronics Vietnam",
          "Bumjin Electronics Indonesia",
        ],
        revenue: "₩357.8B",
        employees: "2,150",
        productsLabel: "Core Products",
        products: ["Sound Bar", "Speaker", "Home Theater"],
        roles: ["Electronics R&D", "ODM / OEM Manufacturing", "Global Production & QC"],
        dark: true,
      },
      {
        name: "Bumjin IND",
        en: "Bumjin IND",
        tagline: "Precision Mold & Injection Molding Core Components",
        desc: "Bumjin IND specializes in mold design, fabrication, and injection molding, supplying essential components for home appliances and automotive industries.",
        locations: ["Bumjin IND Mold & Molding", "Bumjin IND Mexico", "Bumjin IND Hungary"],
        revenue: "₩206.9B",
        employees: "1,200",
        productsLabel: "Core Business",
        products: ["Mold Design & Fabrication", "Appliance Injection Molding", "Automotive Injection Molding"],
        roles: ["Precision Mold Development", "Injection Molding Production", "Global Manufacturing Support"],
        dark: false,
      },
    ],
    coreMessage:
      '"We support our customers\' success by building a global manufacturing value chain spanning R&D, production, precision molds, and injection molding."',
  },
  history: {
    eyebrow: "History",
    title: "History",
    subtitle: "Bumjin's milestones of continuous challenge and innovation since 1991.",
    entries: [
      { year: "2023", events: [{ month: "02", text: "Commenced business with DENON (AV Receiver production)" }] },
      { year: "2019", events: [{ month: "10", text: "Established Bumjin Electronics Vietnam Co., Ltd." }] },
      { year: "2018", events: [{ month: "01", text: "Founded Multimedia R&D Center (in-house Soundbar development)" }] },
      { year: "2017", events: [{ month: "12", text: "Completed new Bumjin headquarters building" }] },
      { year: "2016", events: [{ month: "12", text: "Awarded USD 30M Export Tower at the 53rd Trade Day" }] },
      { year: "2015", events: [{ month: "12", text: "Launched Bluetooth Speaker (proprietary brand: TONN)" }] },
      {
        year: "2014",
        events: [
          { month: "12", text: "Received Samsung Electronics Special Award for Proud Partner" },
          { month: "08", text: "Established Hungary Bumjin Electronics KFT" },
          { month: "02", text: "Certified as Samsung Electronics Hidden Champion of the Year" },
        ],
      },
      { year: "2013", events: [{ month: "07", text: "Relocated and built new Bumjin IND Suwon Plant" }] },
      { year: "2011", events: [{ month: "11", text: "Awarded USD 5M Export Tower at the 48th Trade Day" }] },
      { year: "2010", events: [{ month: "04", text: "Established Bumjin Electronics Indonesia (Speaker Systems, Molding)" }] },
      {
        year: "2008",
        events: [
          { month: "09", text: "Certified Corporate R&D Center for Bumjin C&L Co., Ltd." },
          { month: "08", text: "Relocated and built new Bumjin C&L Ansan Plant" },
          { month: "01", text: "Established Tianjin Bumjin Electronics Co., Ltd." },
        ],
      },
      { year: "2007", events: [{ month: "09", text: "Certified Corporate R&D Center for Bumjin Industry Co., Ltd." }] },
      { year: "2005", events: [{ month: "04", text: "Established Molding Division at Bumjin Industry Co., Ltd." }] },
      {
        year: "2004",
        events: [
          { month: "08", text: "Established China Bumjin Electronics Co., Ltd. (Speaker Systems)" },
          { month: "05", text: "Established Bumjin Electronics Co., Ltd. (Speaker Systems)" },
        ],
      },
      { year: "1991", events: [{ month: "10", text: "Founded Bumjin Industry (Precision Molds, Yeongdeungpo, Seoul)" }] },
    ],
  },
  location: {
    eyebrow: "Location",
    title: "Location",
    subtitle: "Check the details below before visiting Bumjin's facilities.",
    viewLarge: "View Map",
    sitesCountLabel: (count) => `${count} Facilities`,
    prevLabel: "Previous",
    nextLabel: "Next",
    mapHl: "en",
    locations: [
      {
        name: "Bumjin Electronics Suwon",
        type: "HQ · Electronics",
        address: "217, Saneop-ro 155beon-gil, Gwonseon-gu, Suwon-si, Gyeonggi-do",
        phone: "031-493-9415",
        note: "Near Gosaek Station (Line 1)",
      },
      {
        name: "Bumjin IND Mold Plant",
        type: "Mold Manufacturing",
        address: "Gosaek-dong, Gwonseon-gu, Suwon-si, Gyeonggi-do",
        phone: "031-676-1461",
        note: "Precision mold design & fabrication",
      },
      {
        name: "Bumjin IND Molding Plant",
        type: "Injection Molding",
        address: "Anseong-si, Gyeonggi-do",
        phone: "031-210-4930",
        note: "Appliance & automotive injection molding",
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
      "凡真是一家全球电子与制造专业企业，在音响设备及模具·注塑领域积累了30余年的技术实力与信赖。",
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
      '"通过挑战与创新，践行以人才和客户为中心的价值理念，实现可持续发展的企业"',
  },
  ceo: {
    eyebrow: "CEO Message",
    titleLines: ["CEO", "致辞"],
    ceoTitle: "代表理事",
    ceoCompany: "凡真电子(株) · 凡真IND(株)",
    opening: "凡真为实现客户幸福生活的价值理念，不断挑战并持续成长。",
    paragraphs: [
      "自1991年创立以来，凡真凭借扎实的技术实力与透明经营在国内市场确立竞争力，并在全球各地建立生产基地，成长为音响设备及模具·注塑领域的专业企业。正如我们将众人认为不可能的梦想变为现实一样，凡真面向未来的挑战永不止步。",
      "凡真不满足于单纯的规模扩张。我们将通过持续投资与研发，为客户创造更大价值，全力打造全球市场信赖的企业。秉持客户成功即我们成功的信念，以卓越品质与创新技术实现客户满意。",
      "同时，凡真致力于与客户、员工及合作伙伴共同成长。以信赖与透明为基础践行正道经营，珍视人才并履行社会责任，共创可持续发展的未来。",
      "全体员工将坚守当下的自豪，怀抱对未来的坚定愿景，迈向崭新的明天。",
      "今后也恳请各位一如既往地关注与支持凡真的挑战与成长。",
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
    eyebrow: "Vision 2025",
    statement: '"凡真与客户及凡真人同行共成长。"',
    description:
      "Vision 2025以实现1万亿韩元营收为目标，发掘可成长为百年企业的核心事业群，持续升级研发与基础设施，培养人才并建设充满活力的组织文化，与客户携手共创未来。",
    goals: [
      { value: "1兆", label: "2025营收目标" },
      { value: "100年", label: "长期目标" },
      { value: "30+", label: "创立年数" },
      { value: "6国", label: "全球生产基地" },
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
        title: "尊重人才与开放文化",
        en: "People & Culture",
        body: "秉持企业之本在于人的信念，培养优秀人才，打造让员工尽情施展热情与梦想的幸福企业。",
      },
      {
        num: "03",
        title: "挑战与执行",
        en: "Challenge & Execution",
        body: "在瞬息万变的全球经营环境中，以突破常规的差异化构想与创造性执行力达成目标。",
      },
      {
        num: "04",
        title: "开放沟通与协作",
        en: "Communication & Partnership",
        body: "通过客户、合作伙伴与内部组织间的顺畅沟通与协作，创造组织发展的协同效应。",
      },
      {
        num: "05",
        title: "透明·正道经营",
        en: "Integrity Management",
        body: "以客户与成员的信赖为基础践行透明与合规经营，成长为履行社会责任的可持续企业。",
      },
    ],
  },
  group: {
    eyebrow: "Bumjin Group",
    title: "凡真",
    revenueLabel: "营收",
    employeesLabel: "员工",
    locationsLabel: "事业部/基地",
    rolesLabel: "核心职能",
    subsidiaries: [
      {
        name: "凡真电子",
        en: "Bumjin Electronics",
        tagline: "全球电子产品综合制造解决方案",
        desc: "凡真电子是全球电子产品制造专业企业，提供从研发到生产、品质管理的一体化制造解决方案。",
        locations: ["凡真电子 (韩国)", "凡真电子 中国", "凡真电子 越南", "凡真电子 印度尼西亚"],
        revenue: "3,578亿",
        employees: "2,150",
        productsLabel: "主力产品",
        products: ["Sound Bar", "Speaker", "Home Theater"],
        roles: ["电子产品研发", "ODM/OEM 生产", "全球生产与品质管理"],
        dark: true,
      },
      {
        name: "凡真IND",
        en: "Bumjin IND",
        tagline: "精密模具与注塑成型核心部件供应",
        desc: "凡真IND专注于模具设计制造与注塑成型，为生活家电及汽车产业供应核心零部件。",
        locations: ["凡真IND 模具·成型基地", "凡真IND 墨西哥", "凡真IND 匈牙利"],
        revenue: "2,069亿",
        employees: "1,200",
        productsLabel: "主力业务",
        products: ["模具设计与制造", "生活家电注塑成型", "汽车零部件注塑成型"],
        roles: ["精密模具开发", "注塑成型生产", "全球制造支持"],
        dark: false,
      },
    ],
    coreMessage:
      '"构建涵盖研发、生产、模具及注塑成型的全球制造价值链，助力客户成功。"',
  },
  history: {
    eyebrow: "History",
    title: "发展历程",
    subtitle: "自1991年创立以来，凡真以持续挑战与创新不断成长的足迹。",
    entries: [
      { year: "2023", events: [{ month: "02", text: "开启 DENON 合作（生产 AV Receiver）" }] },
      { year: "2019", events: [{ month: "10", text: "成立凡真电子越南有限公司" }] },
      { year: "2018", events: [{ month: "01", text: "设立多媒体研究所（自主研发 Soundbar）" }] },
      { year: "2017", events: [{ month: "12", text: "凡真新办公大楼竣工" }] },
      { year: "2016", events: [{ month: "12", text: "荣获第53届贸易日3,000万美元出口塔奖" }] },
      { year: "2015", events: [{ month: "12", text: "推出蓝牙音箱（自有品牌：TONN）" }] },
      {
        year: "2014",
        events: [
          { month: "12", text: "荣获三星电子(株)骄傲三星人特别奖" },
          { month: "08", text: "成立匈牙利凡真电子 KFT" },
          { month: "02", text: "获三星电子(株)年度强小企业认证" },
        ],
      },
      { year: "2013", events: [{ month: "07", text: "凡真IND(株)水原工厂新建搬迁" }] },
      { year: "2011", events: [{ month: "11", text: "荣获第48届贸易日500万美元出口塔奖" }] },
      { year: "2010", events: [{ month: "04", text: "成立凡真电子印度尼西亚公司（扬声器系统、注塑）" }] },
      {
        year: "2008",
        events: [
          { month: "09", text: "凡真C&L(株)获企业附属研究所认证" },
          { month: "08", text: "凡真C&L(株)安山工厂新建搬迁" },
          { month: "01", text: "成立天津凡真电子有限公司" },
        ],
      },
      { year: "2007", events: [{ month: "09", text: "凡真工业(株)获企业附属研究所认证" }] },
      { year: "2005", events: [{ month: "04", text: "设立凡真工业(株)成型事业部" }] },
      {
        year: "2004",
        events: [
          { month: "08", text: "成立中国凡真电子有限公司（扬声器系统）" },
          { month: "05", text: "成立凡真电子(株)（扬声器系统）" },
        ],
      },
      { year: "1991", events: [{ month: "10", text: "创立凡真工业社（模具，位于首尔永登浦）" }] },
    ],
  },
  location: {
    eyebrow: "Location",
    title: "交通指南",
    subtitle: "来访凡真各事业部前，请先确认以下地址与联系方式。",
    viewLarge: "查看大图",
    sitesCountLabel: (count) => `${count} 处基地`,
    prevLabel: "上一页",
    nextLabel: "下一页",
    mapHl: "zh-CN",
    locations: [
      {
        name: "凡真电子 水原事业部",
        type: "总部 · 电子事业部",
        address: "京畿道水原市劝善区产业路155街217（古索洞）",
        phone: "031-493-9415",
        note: "地铁1号线古索站附近",
      },
      {
        name: "凡真IND 模具事业部",
        type: "模具制造",
        address: "京畿道水原市劝善区古索洞",
        phone: "031-676-1461",
        note: "模具设计与制造专业基地",
      },
      {
        name: "凡真IND 成型事业部",
        type: "注塑成型制造",
        address: "京畿道安城市",
        phone: "031-210-4930",
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
      "ボムジンはグローバル電子・製造専門企業として、音響機器および金型・射出成形分野で30年以上の技術力と信頼を培ってきました。",
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
      '"挑戦と革新、人材と顧客中心の価値実現を通じて持続可能な成長を創り出す企業"',
  },
  ceo: {
    eyebrow: "CEO Message",
    titleLines: ["CEO", "ご挨拶"],
    ceoTitle: "代表取締役",
    ceoCompany: "ボムジン電子(株) · ボムジンIND(株)",
    opening:
      "ボムジンはお客様の幸せな暮らしという価値実現のため、絶えず挑戦し成長してきました。",
    paragraphs: [
      "1991年の創業以来、ボムジンは確かな技術力と透明な経営を基盤に国内市場で競争力を確立し、世界各地に生産拠点を築きながら音響機器および金型・射出成形分野の専門企業へと成長してまいりました。誰もが不可能だと言った夢を現実にしてきたこれまでのように、ボムジンは未来への挑戦を止めません。",
      "私たちは単なる外形的成長に満足いたしません。継続的な投資と研究開発を通じてお客様により大きな価値を提供し、グローバル市場で信頼される企業として地位を確立すべく最善を尽くしております。お客様の成功こそが私たちの成功であるという信念のもと、最高の品質と革新的な技術でお客様満足を実現してまいります。",
      "またボムジンは、お客様、社員、パートナー企業とともに成長する企業を目指します。信頼と透明性に基づく正道経営を実践し、人材を大切にして社会的責任を果たす企業として持続可能な未来を築いてまいります。",
      "私たち社員一同は現在の誇りを胸に、未来への確固たるビジョンをもって新たな明日へと邁進してまいります。",
      "今後ともボムジンの挑戦と成長に変わらぬご関心とご支援を賜りますようお願い申し上げます。",
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
    eyebrow: "Vision 2025",
    statement: '"ボムジンは顧客とボムジン人の同行により成長する。"',
    description:
      "Vision 2025は売上1兆ウォン達成を目標に、100年企業へと成長可能な中核事業群を発掘し、R&Dおよびインフラを継続的に発展させ、人材育成と活気ある組織文化の構築によってお客様とともに成長する未来を創造します。",
    goals: [
      { value: "1兆", label: "2025年売上目標" },
      { value: "100年", label: "長期目標" },
      { value: "30+", label: "創業年数" },
      { value: "6ヶ国", label: "グローバル生産拠点" },
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
        title: "人材尊重と開かれた組織文化",
        en: "People & Culture",
        body: "企業の基本は人であるという信念のもと優秀な人材を育成し、社員が情熱と夢を広げられる幸福な会社をつくります。",
      },
      {
        num: "03",
        title: "挑戦と実行",
        en: "Challenge & Execution",
        body: "急変するグローバル経営環境の中でも既存の枠を超えた差別化アイデアと創造的な実行力で目標を達成します。",
      },
      {
        num: "04",
        title: "開かれた疎通と協力",
        en: "Communication & Partnership",
        body: "お客様、協力会社、そして社内組織間の円滑なコミュニケーションと協力により組織発展のシナジーを創出します。",
      },
      {
        num: "05",
        title: "透明・正道経営",
        en: "Integrity Management",
        body: "お客様と社員の信頼をもとに透明経営とコンプライアンス経営を実践し、社会的責任を果たす持続可能な企業へと成長します。",
      },
    ],
  },
  group: {
    eyebrow: "Bumjin Group",
    title: "ボムジン",
    revenueLabel: "売上高",
    employeesLabel: "従業員数",
    locationsLabel: "拠点",
    rolesLabel: "主な役割",
    subsidiaries: [
      {
        name: "ボムジン電子",
        en: "Bumjin Electronics",
        tagline: "グローバル電子製品統合製造ソリューション",
        desc: "ボムジン電子はグローバル電子製品製造の専門企業として、研究開発から生産・品質管理まで統合製造ソリューションを提供します。",
        locations: ["ボムジン電子 (韓国)", "ボムジン電子 中国", "ボムジン電子 ベトナム", "ボムジン電子 インドネシア"],
        revenue: "3,578億",
        employees: "2,150",
        productsLabel: "主力製品",
        products: ["Sound Bar", "Speaker", "Home Theater"],
        roles: ["電子製品研究開発", "ODM/OEM 生産", "グローバル生産・品質管理"],
        dark: true,
      },
      {
        name: "ボムジンIND",
        en: "Bumjin IND",
        tagline: "精密金型・射出成形コア部品の供給",
        desc: "ボムジンINDは金型設計・製作および射出成形分野の専門企業として、生活家電や自動車産業に不可欠な主要部品を供給しています。",
        locations: ["ボムジンIND 金型・成形事業所", "ボムジンIND メキシコ", "ボムジンIND ハンガリー"],
        revenue: "2,069億",
        employees: "1,200",
        productsLabel: "主力事業",
        products: ["金型設計・製作", "生活家電射出成形", "自動車部品射出成形"],
        roles: ["精密金型開発", "射出成形生産", "グローバル製造支援"],
        dark: false,
      },
    ],
    coreMessage:
      '"研究開発、生産、金型、射出成形まで網羅するグローバル製造バリューチェーンを構築し、お客様の成功を支援します。"',
  },
  history: {
    eyebrow: "History",
    title: "沿革",
    subtitle: "1991年の創業以来、絶え間ない挑戦と革新で成長してきたボムジンの歩みです。",
    entries: [
      { year: "2023", events: [{ month: "02", text: "DENONとの取引開始（AVレシーバー生産）" }] },
      { year: "2019", events: [{ month: "10", text: "ボムジン電子ベトナム有限会社 設立" }] },
      { year: "2018", events: [{ month: "01", text: "マルチメディア研究所 設立（サウンドバー自社開発）" }] },
      { year: "2017", events: [{ month: "12", text: "ボムジン新社屋 竣工" }] },
      { year: "2016", events: [{ month: "12", text: "第53回貿易の日 3,000万ドル輸出の塔 受賞" }] },
      { year: "2015", events: [{ month: "12", text: "Bluetoothスピーカー発売（自社ブランド：TONN）" }] },
      {
        year: "2014",
        events: [
          { month: "12", text: "サムスン電子(株) 誇らしいサムスン人賞 特別賞 受賞" },
          { month: "08", text: "ハンガリーボムジン電子 KFT 設立" },
          { month: "02", text: "サムスン電子(株) 今年の強小企業 認証" },
        ],
      },
      { year: "2013", events: [{ month: "07", text: "ボムジンIND(株) 水原工場 新築移転" }] },
      { year: "2011", events: [{ month: "11", text: "第48回貿易の日 500万ドル輸出の塔 受賞" }] },
      { year: "2010", events: [{ month: "04", text: "ボムジン電子インドネシア 設立（スピーカーシステム、射出）" }] },
      {
        year: "2008",
        events: [
          { month: "09", text: "ボムジンC&L(株) 企業付設研究所 認証" },
          { month: "08", text: "ボムジンC&L(株) 安山工場 新築移転" },
          { month: "01", text: "天津ボムジン電子有限公司 設立" },
        ],
      },
      { year: "2007", events: [{ month: "09", text: "ボムジン工業(株) 企業付設研究所 認証" }] },
      { year: "2005", events: [{ month: "04", text: "ボムジン工業(株) 成形事業部 設立" }] },
      {
        year: "2004",
        events: [
          { month: "08", text: "中国ボムジン電子有限公司 設立（スピーカーシステム）" },
          { month: "05", text: "ボムジン電子(株) 設立（スピーカーシステム）" },
        ],
      },
      { year: "1991", events: [{ month: "10", text: "ボムジン工業社 創業（金型、ソウル永登浦区）" }] },
    ],
  },
  location: {
    eyebrow: "Location",
    title: "アクセス",
    subtitle: "ボムジンの事業所をご訪問の際は、下記情報をご確認ください。",
    viewLarge: "拡大表示",
    sitesCountLabel: (count) => `${count} 事業所`,
    prevLabel: "前へ",
    nextLabel: "次へ",
    mapHl: "ja",
    locations: [
      {
        name: "ボムジン電子 水原事業所",
        type: "本社 · 電子事業所",
        address: "京畿道水原市勧善区産業路155番キル217（古索洞）",
        phone: "031-493-9415",
        note: "1号線 古索駅 近く",
      },
      {
        name: "ボムジンIND 金型事業所",
        type: "金型製造",
        address: "京畿道水原市勧善区古索洞",
        phone: "031-676-1461",
        note: "金型設計・製作専門事業所",
      },
      {
        name: "ボムジンIND 成形事業所",
        type: "射出成形製造",
        address: "京畿道安城市",
        phone: "031-210-4930",
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
