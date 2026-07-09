"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderGit2,
  BookmarkCheck,
  TrendingUp,
  User,
  BookOpen
} from "lucide-react";
import Logo from "./Logo";
import { getProgress } from "@/lib/progress";

export default function Sidebar() {
  const pathname = usePathname();
  const [currentWeek, setCurrentWeek] = useState(1);

  useEffect(() => {
    // Initial fetch
    const prog = getProgress();
    setCurrentWeek(prog.currentWeek);

    // Sync on updates
    const handleUpdate = () => {
      const updated = getProgress();
      setCurrentWeek(updated.currentWeek);
    };

    window.addEventListener("swe_progress_updated", handleUpdate);
    return () => {
      window.removeEventListener("swe_progress_updated", handleUpdate);
    };
  }, []);

  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Interview Prep", href: "/interview", icon: BookmarkCheck },
    { name: "Tech Literacy", href: "/tech-literacy", icon: BookOpen },
    { name: "My Progress", href: "/progress", icon: TrendingUp }
  ];

  return (
    <aside
      className="hidden md:flex fixed top-0 left-0 h-screen w-[220px] bg-white border-r border-[#E8F0EC]/80 flex-col justify-between py-4 z-50 select-none overflow-x-hidden"
      style={{ minWidth: "220px", maxWidth: "220px" }}
    >
      {/* Top Section */}
      <div className="flex flex-col gap-6">
        <Logo fontSize="14px" padding="20px 16px" />
        <div className="px-4">
          <hr className="border-[#E8F0EC]" />
        </div>

        <nav className="flex flex-col gap-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-full text-sm font-sans transition-all duration-200 ${
                  isActive
                    ? "bg-[#F5C842] text-[#1A2E44] font-bold shadow-md shadow-[#F5C842]/20"
                    : "text-[#6B7C8D] hover:text-[#1A2E44] hover:bg-[#A8E6CF]/10"
                }`}
              >
                <Icon size={20} strokeWidth={2.2} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile Area */}
      <div className="flex flex-col gap-3 px-4">
        <hr className="border-[#E8F0EC]" />
        <div className="flex items-center gap-3 px-1 py-2">
          <div className="w-10 h-10 rounded-full bg-[#F5C842] flex items-center justify-center text-[#1A2E44] font-semibold text-lg border-2 border-white shadow-md">
            <User size={20} className="text-[#1A2E44]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-sans font-semibold text-[#1A2E44]">
              You
            </span>
            <span className="inline-block mt-0.5 px-2 py-0.5 bg-[#F5C842]/20 text-[#E6B800] border border-[#F5C842]/30 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider">
              Week {currentWeek} of 18
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
