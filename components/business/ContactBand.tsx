import { Phone, Mail } from "lucide-react";
import type { Contact } from "@/types/business";

export function ContactBand({ contacts }: { contacts: Contact[] }) {
  return (
    <div className="bg-[#F5F5F3] rounded-2xl p-8 lg:p-10">
      <div
        className={`grid gap-8 ${contacts.length > 1 ? "md:grid-cols-2" : "max-w-md"}`}
      >
        {contacts.map((c) => (
          <div key={c.email}>
            <p
              className="text-[10px] font-medium tracking-[3px] uppercase text-[#C0392B] mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {c.role}
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${c.tel.replace(/\s/g, "")}`}
                className="flex items-center gap-3 group"
              >
                <Phone className="size-4 text-[#999999] shrink-0" />
                <span className="text-[15px] font-medium text-[#111111] group-hover:text-[#C0392B] transition-colors">
                  {c.tel}
                </span>
              </a>
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-3 group"
              >
                <Mail className="size-4 text-[#999999] shrink-0" />
                <span className="text-[15px] text-[#666666] group-hover:text-[#C0392B] transition-colors">
                  {c.email}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
