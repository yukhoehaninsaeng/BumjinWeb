"use client";

import { useEffect, useState } from "react";
import { Map, MapArc, MapMarker, MarkerContent, MarkerPopup, MapControls, useMap } from "@/components/ui/mapcn-map-arc";
import { MapPin, Phone, Building2 } from "lucide-react";

type Factory = {
  id: string;
  name: string;
  nameKo: string;
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
    nameKo: "범진전자 · 범진시엔엘",
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
    nameKo: "범진아이엔디 금형",
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
    nameKo: "범진아이엔디 성형",
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
    nameKo: "범진아이엔디 멕시코",
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
    nameKo: "범진전자 인도네시아",
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
    nameKo: "범진전자 베트남",
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
    nameKo: "혜주범진과기(유)",
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
    nameKo: "범진아이엔디 헝가리",
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

const DARK_STYLE = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

/* Auto-rotate the globe — stops on user interaction, resumes after 2s */
function GlobeAutoRotate() {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded) return;

    let animId: number;
    let userInteracting = false;
    let resumeTimer: ReturnType<typeof setTimeout>;

    const animate = () => {
      if (!userInteracting) {
        map.rotateTo(map.getBearing() + 0.08, { duration: 0 });
      }
      animId = requestAnimationFrame(animate);
    };

    const onInteractStart = () => {
      userInteracting = true;
      clearTimeout(resumeTimer);
    };
    const onInteractEnd = () => {
      resumeTimer = setTimeout(() => {
        userInteracting = false;
      }, 2000);
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

export function FactoryGlobeMap({ mapHint }: { mapHint?: string }) {
  const [activeFactory, setActiveFactory] = useState<string | null>(null);

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-xl border border-gray-200 shadow-xl">
      <Map
        center={[30, 25]}
        zoom={1.4}
        projection={{ type: "globe" }}
        theme="dark"
        styles={{ dark: DARK_STYLE }}
        renderWorldCopies={false}
      >
        {/* Auto-rotation */}
        <GlobeAutoRotate />

        {/* Arcs from Korean HQ to international plants */}
        <MapArc
          data={ARCS}
          curvature={0.25}
          paint={{
            "line-color": "#E8001D",
            "line-width": 1.5,
            "line-opacity": 0.6,
            "line-dasharray": [3, 3],
          }}
          interactive={false}
        />

        {/* Factory markers */}
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
              <div className="relative flex items-center justify-center">
                {factory.type === "hq" ? (
                  <div className="size-4 rounded-full border-2 border-white bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
                ) : (
                  <div className="size-3 rounded-full border-2 border-white bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                )}
              </div>
            </MarkerContent>

            {activeFactory === factory.id && (
              <MarkerPopup closeButton offset={20}>
                <div className="min-w-[200px] space-y-2 bg-gray-900/95 backdrop-blur rounded-lg p-3 border border-white/10">
                  <div className="flex items-start gap-2">
                    <Building2 className="mt-0.5 size-4 shrink-0 text-red-400" />
                    <div>
                      <p className="text-sm font-semibold leading-tight text-white">
                        {factory.nameKo}
                      </p>
                      <p className="text-[11px] text-gray-400">{factory.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-gray-400" />
                    <p className="text-[11px] leading-relaxed text-gray-300">
                      {factory.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="size-3.5 shrink-0 text-gray-400" />
                    <p className="text-[11px] text-gray-300">{factory.tel}</p>
                  </div>
                </div>
              </MarkerPopup>
            )}
          </MapMarker>
        ))}

        <MapControls position="bottom-right" showZoom showCompass />
      </Map>
      {mapHint && (
        <p className="mt-2 text-center text-[11px] text-gray-400">{mapHint}</p>
      )}
    </div>
  );
}
