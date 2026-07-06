"use strict";
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderGit2,
  BookmarkCheck,
  TrendingUp,
  User
} from "lucide-react";
import Logo from "./Logo";
import { getProgress } from "@/lib/progress";

export default function Sidebar() {
  const pathname = usePathname();
  const [currentWeek, setCurrentWeek] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initial fetch
    const prog = getProgress();
    setCurrentWeek(prog.currentWeek);

    // Sync on updates
    const handleUpdate = () => {
      const updated = getProgress();
      setCurrentWeek(updated.currentWeek);
    };

    // Toggle menu listener
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener("swe_progress_updated", handleUpdate);
    window.addEventListener("toggle_sidebar", handleToggle);
    return () => {
      window.removeEventListener("swe_progress_updated", handleUpdate);
      window.removeEventListener("toggle_sidebar", handleToggle);
    };
  }, []);

  // Close sidebar on navigation (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Interview Prep", href: "/interview", icon: BookmarkCheck },
    { name: "My Progress", href: "/progress", icon: TrendingUp }
  ];

  return (
    <>
      {/* Mobile Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-[220px] bg-white border-r border-[#E8F0EC]/80 flex flex-col justify-between p-4 z-50 select-none transition-transform duration-300 ease-out overflow-x-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Top Section */}
        <div className="flex flex-col gap-6">
          <div className="pt-2 px-1 flex items-center justify-between">
            <Logo />
          </div>
          <hr className="border-[#E8F0EC]" />

          <nav className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-3">
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
    </>
  );
}
