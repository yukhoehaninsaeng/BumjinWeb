"use client";

import { useState, useEffect } from "react";
import type { SiteContent } from "@/lib/content-store";

let cache: SiteContent | null = null;
let pending: Promise<SiteContent> | null = null;

async function fetchContent(): Promise<SiteContent> {
  if (cache) return cache;
  if (!pending) {
    pending = fetch("/api/content")
      .then((r) => r.json())
      .then((data) => {
        cache = data;
        return data;
      })
      .catch(() => ({ home: {}, business: {}, images: {} } as SiteContent));
  }
  return pending;
}

export function useProductImage(
  productId: string,
  defaultImage?: string
): string | undefined {
  const [img, setImg] = useState<string | undefined>(defaultImage);

  useEffect(() => {
    fetchContent().then((c) => {
      const override = c?.images?.[productId];
      if (override) setImg(override);
    });
  }, [productId, defaultImage]);

  return img;
}

export function useAdminContent(): SiteContent | null {
  const [content, setContent] = useState<SiteContent | null>(null);
  useEffect(() => {
    fetchContent().then(setContent);
  }, []);
  return content;
}
