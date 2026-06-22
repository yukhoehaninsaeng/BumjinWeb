"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/webadmin777/dashboard");
      } else {
        const data = await res.json();
        setError(data.error ?? "오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Image
            src="/bumjin%20icon.jpg"
            alt="Bumjin"
            width={140}
            height={42}
            className="h-10 w-auto object-contain mx-auto mb-5"
          />
          <p className="text-[11px] font-semibold text-gray-400 tracking-[3px] uppercase">
            Admin Panel
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-8 shadow-sm">
          <h2 className="text-[18px] font-bold text-gray-900 mb-1">관리자 로그인</h2>
          <p className="text-[12px] text-gray-400 mb-6">범진전자 웹사이트 관리 시스템</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 tracking-[2px] uppercase mb-2">
                비밀번호
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="관리자 비밀번호"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[13px] px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                required
                autoFocus
              />
            </div>

            {error && (
              <p className="text-[12px] text-red-600 bg-red-50 px-3 py-2 border border-red-200">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C0392B] hover:bg-red-700 text-white text-[13px] font-bold py-3 transition-colors disabled:opacity-60"
            >
              {loading ? "로그인 중..." : "로그인"}
            </button>
          </form>
        </div>

        <p className="text-center text-[10px] text-gray-300 mt-6 tracking-wider">
          BUMJIN ELECTRONICS © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
