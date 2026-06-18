"use client";

import { useEffect, useState } from "react";
import { Map, MapArc, MapMarker, MarkerContent, MarkerPopup, MapControls, useMap } from "@/components/ui/mapcn-map-arc";
import { MapPin, Phone, Building2 } from "lucide-react";

type Lang = "ko" | "en" | "zh" | "ja";

type Factory = {
  id: string;
  name: string;
  shortLabel: Record<Lang, string>;
  localName: Record<Lang, string>;
  address: string;
  tel: string;
  fax: string;
  lng: number;
  lat: number;
  type: "hq" | "plant";
  country: string;
};

const FACTORIES: Factory[] = [
  {
    id: "suwon-hq",
    name: "Bumjin Electronics / Bumjin C&L",
    shortLabel: { ko: "본사 (수원)", en: "HQ (Suwon)", zh: "总部(水原)", ja: "本社(水原)" },
    localName:  { ko: "범진전자 · 범진시엔엘", en: "Bumjin Electronics · Bumjin C&L", zh: "范珍电子 · 范珍C&L", ja: "範珍電子 · 範珍C&L" },
    address: "경기도 수원시 권선구 산업로 155번길 217 (고색동)",
    tel: "031-493-9415",
    fax: "031-298-9418",
    lng: 126.972,
    lat: 37.244,
    type: "hq",
    country: "Korea",
  },
  {
    id: "suwon-mold",
    name: "Bumjin IND Mold (Suwon)",
    shortLabel: { ko: "금형 (수원)", en: "Mold (Suwon)", zh: "金属模具(水原)", ja: "金型(水原)" },
    localName:  { ko: "범진아이엔디 금형", en: "Bumjin IND Mold", zh: "范珍IND 金属模具", ja: "範珍IND 金型" },
    address: "경기도 수원시 권선구 산업로 174-14 (고색동)",
    tel: "031-676-1461",
    fax: "031-292-1466",
    lng: 126.969,
    lat: 37.243,
    type: "plant",
    country: "Korea",
  },
  {
    id: "anseong",
    name: "Bumjin IND Injection (Anseong)",
    shortLabel: { ko: "성형 (안성)", en: "Molding (Anseong)", zh: "注塑(安城)", ja: "成形(安城)" },
    localName:  { ko: "범진아이엔디 성형", en: "Bumjin IND Injection", zh: "范珍IND 注塑", ja: "範珍IND 成形" },
    address: "경기도 안성시 보개면 신장길 47-10",
    tel: "031-678-9203",
    fax: "031-678-9230",
    lng: 127.279,
    lat: 37.008,
    type: "plant",
    country: "Korea",
  },
  {
    id: "mexico",
    name: "BJAM MEXICANA S.A. DE C.V.",
    shortLabel: { ko: "멕시코", en: "Mexico", zh: "墨西哥", ja: "メキシコ" },
    localName:  { ko: "범진아이엔디 멕시코", en: "BJAM MEXICANA", zh: "BJAM MEXICANA", ja: "BJAM MEXICANA" },
    address: "Carretera Libre Tijuana-Tecate No.22001, El Realito, Tijuana, B.C.",
    tel: "+52 664 231 5126",
    fax: "+52 664 978 2525",
    lng: -117.038,
    lat: 32.514,
    type: "plant",
    country: "Mexico",
  },
  {
    id: "indonesia",
    name: "Bumjin Electronics Indonesia",
    shortLabel: { ko: "인도네시아", en: "Indonesia", zh: "印尼", ja: "インドネシア" },
    localName:  { ko: "범진전자 인도네시아", en: "Bumjin Electronics Indonesia", zh: "范珍电子 印尼", ja: "範珍電子 インドネシア" },
    address: "KWS. INDUSTRI JABABEKA TAHAP 3, Block A5B, Cikarang, Indonesia",
    tel: "+62 21-8984-2744",
    fax: "+62 21-8984-2666",
    lng: 107.14,
    lat: -6.285,
    type: "plant",
    country: "Indonesia",
  },
  {
    id: "vietnam",
    name: "Bumjin Electronics Vietnam",
    shortLabel: { ko: "베트남", en: "Vietnam", zh: "越南", ja: "ベトナム" },
    localName:  { ko: "범진전자 베트남", en: "Bumjin Electronics Vietnam", zh: "范珍电子 越南", ja: "範珍電子 ベトナム" },
    address: "CN-04, Dong Mai Industrial Zone, Quang Yen, Quang Ninh, Viet Nam",
    tel: "+84 2033 684 666",
    fax: "+84 2033 684 123",
    lng: 106.812,
    lat: 20.948,
    type: "plant",
    country: "Vietnam",
  },
  {
    id: "china",
    name: "Huizhou Bumjin Technology (HJB)",
    shortLabel: { ko: "중국 (혜주)", en: "China (Huizhou)", zh: "中国(惠州)", ja: "中国(恵州)" },
    localName:  { ko: "혜주범진과기(유)", en: "Huizhou Bumjin Technology", zh: "惠州范珍科技有限公司", ja: "惠州範珍科技" },
    address: "Block B, Jinherui Hi-tech Industrial Park, Huizhou City, Guangdong",
    tel: "+86-0752-319-7998",
    fax: "+86-0752-319-7997",
    lng: 114.247,
    lat: 23.021,
    type: "plant",
    country: "China",
  },
  {
    id: "hungary",
    name: "Bumjin IND Hungary",
    shortLabel: { ko: "헝가리", en: "Hungary", zh: "匈牙利", ja: "ハンガリー" },
    localName:  { ko: "범진아이엔디 헝가리", en: "Bumjin IND Hungary", zh: "范珍IND 匈牙利", ja: "範珍IND ハンガリー" },
    address: "3021 Lőrinci, Heredi ut 050/18, Hungary",
    tel: "+36-20-213-3255",
    fax: "+36-37-999-622",
    lng: 19.673,
    lat: 47.741,
    type: "plant",
    country: "Hungary",
  },
];

const HQ: [number, number] = [126.97, 37.244];

const ARCS = FACTORIES.filter((f) => f.country !== "Korea").map((f) => ({
  id: f.id,
  from: HQ,
  to: [f.lng, f.lat] as [number, number],
}));

const LIGHT_STYLE = "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";

function GlobeAutoRotate() {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded) return;

    let animId: number;
    let userInteracting = false;
    let resumeTimer: ReturnType<typeof setTimeout>;

    const animate = () => {
      if (!userInteracting) {
        const { lng, lat } = map.getCenter();
        map.setCenter([lng + 0.07, lat]);
      }
      animId = requestAnimationFrame(animate);
    };

    const onInteractStart = () => {
      userInteracting = true;
      clearTimeout(resumeTimer);
    };
    const onInteractEnd = () => {
      resumeTimer = setTimeout(() => { userInteracting = false; }, 2000);
    };

    map.on("mousedown", onInteractStart);
    map.on("touchstart", onInteractStart);
    map.on("mouseup", onInteractEnd);
    map.on("touchend", onInteractEnd);

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resumeTimer);
      map.off("mousedown", onInteractStart);
      map.off("touchstart", onInteractStart);
      map.off("mouseup", onInteractEnd);
      map.off("touchend", onInteractEnd);
    };
  }, [map, isLoaded]);

  return null;
}

export function FactoryGlobeMap({
  mapHint,
  lang = "ko",
}: {
  mapHint?: string;
  lang?: Lang;
}) {
  const [activeFactory, setActiveFactory] = useState<string | null>(null);

  return (
    <div className="relative h-[520px] w-full overflow-hidden">
      <Map
        center={[126.97, 37.244]}
        zoom={1.6}
        projection={{ type: "globe" }}
        theme="light"
        styles={{ light: LIGHT_STYLE }}
        renderWorldCopies={false}
      >
        <GlobeAutoRotate />

        <MapArc
          data={ARCS}
          curvature={0.25}
          paint={{
            "line-color": "#C0392B",
            "line-width": 1.5,
            "line-opacity": 0.55,
            "line-dasharray": [3, 3],
          }}
          interactive={false}
        />

        {FACTORIES.map((factory) => (
          <MapMarker
            key={factory.id}
            longitude={factory.lng}
            latitude={factory.lat}
            onClick={() =>
              setActiveFactory(activeFactory === factory.id ? null : factory.id)
            }
          >
            <MarkerContent>
              <div className="flex flex-col items-center gap-0.5 cursor-pointer select-none">
                <div
                  className={`rounded-full bg-red-600 border-2 border-white shadow-[0_0_8px_rgba(192,57,43,0.55)] ${
                    factory.type === "hq" ? "w-4 h-4" : "w-2.5 h-2.5"
                  }`}
                />
                <span className="px-1.5 py-[2px] bg-white/90 border border-gray-200 text-[8.5px] font-semibold text-gray-700 whitespace-nowrap leading-tight shadow-sm">
                  {factory.shortLabel[lang]}
                </span>
              </div>
            </MarkerContent>

            {activeFactory === factory.id && (
              <MarkerPopup closeButton offset={24}>
                <div className="min-w-[210px] space-y-2.5 bg-white/97 rounded-lg p-3.5 border border-gray-100 shadow-xl">
                  <div className="flex items-start gap-2">
                    <Building2 className="mt-0.5 size-4 shrink-0 text-red-600" />
                    <div>
                      <p className="text-[13px] font-bold leading-tight text-gray-900">
                        {factory.localName[lang]}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{factory.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-gray-400" />
                    <p className="text-[11px] leading-relaxed text-gray-600">
                      {factory.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="size-3.5 shrink-0 text-gray-400" />
                    <p className="text-[11px] text-gray-600">{factory.tel}</p>
                  </div>
                </div>
              </MarkerPopup>
            )}
          </MapMarker>
        ))}

        <MapControls position="bottom-right" showZoom showCompass />
      </Map>
    </div>
  );
}
