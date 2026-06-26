"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CertificateModal, type CertificateData } from "./CertificateModal";

const CERTIFICATES: CertificateData[] = [
  {
    id: "iso9001",
    title: "ISO 9001:2015",
    issuingBody: "Bureau Veritas Certification",
    issueDate: "2024-01-15",
    certId: "BJH-2024-ISO9001",
    scope: "Design, development and manufacture of soundbar systems and audio equipment",
    category: "Quality Management System",
  },
  {
    id: "iatf",
    title: "IATF 16949:2016",
    issuingBody: "TÜV SÜD",
    issueDate: "2023-11-08",
    certId: "BJH-2023-IATF",
    scope: "Automotive-grade injection moulding, PCB assembly and quality control",
    category: "Automotive Quality System",
  },
  {
    id: "dolby",
    title: "Dolby Atmos® License",
    issuingBody: "Dolby Laboratories, Inc.",
    issueDate: "2024-03-22",
    certId: "BJH-2024-DOLBY",
    scope: "Manufacturing of Dolby Atmos-enabled soundbar systems under ODM agreement",
    category: "Spatial Audio Certification",
  },
  {
    id: "dts",
    title: "DTS:X® Certification",
    issuingBody: "Xperi Inc. (DTS)",
    issueDate: "2024-02-10",
    certId: "BJH-2024-DTSX",
    scope: "Rendering and playback of DTS:X immersive audio in soundbar platforms",
    category: "Spatial Audio Certification",
  },
  {
    id: "hires",
    title: "Hi-Res Audio",
    issuingBody: "Japan Audio Society (JAS)",
    issueDate: "2023-09-01",
    certId: "BJH-2023-HIRES",
    scope: "Playback of audio content at 40 kHz or above, exceeding CD quality specification",
    category: "Audio Performance",
  },
  {
    id: "cefcc",
    title: "CE / FCC / UL",
    issuingBody: "CETECOM / UL Solutions",
    issueDate: "2024-04-05",
    certId: "BJH-2024-CEFCC",
    scope: "Electronic safety, EMC and RF compliance for EU, US and international markets",
    category: "Regulatory Compliance",
  },
];

export function CertificateList() {
  const [selected, setSelected] = useState<CertificateData | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#070E1B] p-7 flex flex-col gap-3 hover:bg-slate-800/50 transition-colors duration-300"
          >
            <p className="text-[9px] font-bold tracking-[2px] uppercase text-cyan-400/50">
              {cert.category}
            </p>
            <h3 className="text-[15px] font-bold text-white leading-snug">
              {cert.title}
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              {cert.issuingBody}
            </p>
            <div className="mt-2">
              <button
                onClick={() => setSelected(cert)}
                className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-semibold hover:text-emerald-300 transition-colors group"
              >
                <CheckCircle2 className="size-3.5" />
                Verified
                <span className="text-slate-600 group-hover:text-slate-500 transition-colors">
                  &nbsp;(View)
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <CertificateModal cert={selected} onClose={() => setSelected(null)} />
    </>
  );
}
