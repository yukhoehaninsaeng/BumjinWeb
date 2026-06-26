"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Download, CheckCircle2, FileText } from "lucide-react";

export interface CertificateData {
  id: string;
  title: string;
  issuingBody: string;
  issueDate: string;
  certId: string;
  scope: string;
  category: string;
}

interface CertificateModalProps {
  cert: CertificateData | null;
  onClose: () => void;
}

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  useEffect(() => {
    if (!cert) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            key="cert-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            key="cert-panel"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl bg-slate-900/90 border border-slate-700 backdrop-blur-md shadow-[0_32px_80px_rgba(0,0,0,0.75)] overflow-hidden"
          >
            {/* Top accent line */}
            <div className="h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0" />

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <X className="size-4" />
            </button>

            <div className="grid md:grid-cols-[220px,1fr]">
              {/* ── Left: A4 document placeholder ── */}
              <div className="bg-slate-800/40 border-r border-slate-700/50 p-8 flex flex-col items-center justify-center gap-5">
                <div
                  className="relative flex flex-col items-center justify-center gap-3 border border-slate-600/40 bg-slate-800/30 overflow-hidden"
                  style={{ width: "148px", aspectRatio: "1 / 1.414" }}
                >
                  {/* Inner micro-grid (blueprint aesthetic) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(100,149,237,0.07) 1px, transparent 1px)," +
                        "linear-gradient(90deg, rgba(100,149,237,0.07) 1px, transparent 1px)",
                      backgroundSize: "14px 14px",
                    }}
                  />
                  {/* Corner registration marks */}
                  {[
                    "top-1 left-1",
                    "top-1 right-1",
                    "bottom-1 left-1",
                    "bottom-1 right-1",
                  ].map((pos) => (
                    <div
                      key={pos}
                      aria-hidden="true"
                      className={`absolute ${pos} size-3 border-[1.5px] border-cyan-600/30`}
                    />
                  ))}
                  <FileText className="size-9 text-slate-500 relative z-10" />
                  <span className="text-[9px] text-slate-500 tracking-[1.5px] uppercase relative z-10 text-center leading-loose px-3">
                    Certificate<br />Document Scan
                  </span>
                  <span className="text-[8px] text-slate-600 relative z-10">
                    A4 · PDF · Secured
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-semibold">
                    <CheckCircle2 className="size-3.5" />
                    Verified &amp; Active
                  </div>
                  <p className="text-[9px] text-slate-600 tracking-wide text-center">
                    Bumjin Electronics Co., Ltd.
                  </p>
                </div>
              </div>

              {/* ── Right: Metadata grid ── */}
              <div className="p-8 flex flex-col gap-5">
                <div>
                  <p className="text-[9px] font-bold tracking-[2px] uppercase text-cyan-400/60 mb-2">
                    {cert.category}
                  </p>
                  <h2 className="text-[22px] font-black text-white leading-tight tracking-tight">
                    {cert.title}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                  {(
                    [
                      { label: "Official Title",  value: cert.title,       full: false },
                      { label: "Issuing Body",    value: cert.issuingBody, full: false },
                      { label: "Issue Date",      value: cert.issueDate,   full: false },
                      { label: "Certificate ID",  value: cert.certId,      full: false },
                      { label: "Scope of Supply", value: cert.scope,       full: true  },
                    ] as { label: string; value: string; full: boolean }[]
                  ).map(({ label, value, full }) => (
                    <div
                      key={label}
                      className={`border-t border-slate-700/50 pt-3 ${full ? "col-span-2" : ""}`}
                    >
                      <p className="text-[9px] font-bold tracking-[1.5px] uppercase text-slate-500 mb-1.5">
                        {label}
                      </p>
                      <p className="text-[12px] text-slate-200 leading-snug font-medium">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-700/40">
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 text-[12px] font-bold px-5 py-3 hover:bg-gray-100 active:bg-gray-200 transition-colors">
                    <Download className="size-3.5" />
                    Download Official Copy (.pdf)
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
