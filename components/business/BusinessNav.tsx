"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS_DEPARTMENTS } from "@/lib/data/business";

export function BusinessNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <div className="flex items-end overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {BUSINESS_DEPARTMENTS.map((dept) => {
            const href = `/business/${dept.id}`;
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={dept.id}
                href={href}
                className={`shrink-0 relative px-6 py-4 text-[13px] font-medium tracking-wide transition-colors whitespace-nowrap border-b-2 ${
                  isActive
                    ? "border-[#C0392B] text-[#111111]"
                    : "border-transparent text-[#666666] hover:text-[#111111]"
                }`}
              >
                <span>{dept.label}</span>
                <span
                  className={`ml-2 text-[10px] tracking-[2px] uppercase transition-colors ${
                    isActive ? "text-[#C0392B]" : "text-[#999999]"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {dept.labelEn}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
