"use client";

import {
  Home,
  FileText,
  Bell,
  GraduationCap,
  Layers,
  Gift,
  ArrowUpRight,
  type LucideIcon, // ✅ import type for icon props
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function SidebarItem({
  icon: Icon,
  label,
}: {
  icon: LucideIcon; // ✅ correct typing
  label: string;
}) {
  return (
    <button className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-white hover:bg-white/10">
      <Icon className="h-4 w-4 text-white" />
      <span className="text-base">{label}</span>
    </button>
  );
}

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden w-64 shrink-0 flex-col justify-between bg-[#008A00] p-3 md:flex">
      <div className="space-y-2">
        <Link href="/" className="mb-3 flex items-center py-2 px-2 gap-2 ">
          <div className="h-4 w-4 bg-[#FFDD00]" />
          <span className="text-white text-xl font-semibold tracking-wide">
            NETBRAMHA™
          </span>
        </Link>

        {/* Overview Section */}
        <Accordion type="single" collapsible defaultValue="overview">
          <AccordionItem value="overview" className="border-b-0">
            <AccordionTrigger className="px-4 py-2 text-white hover:no-underline hover:bg-white/10 rounded-md [&>svg]:text-white">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span className="text-base font-medium">Overview</span>
                </div>
              </div>
            </AccordionTrigger>

            {/* Submenu with vertical line */}
            <AccordionContent className="pl-10 pr-3 text-base text-white/80 space-y-2 relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/30" />
              <div className="cursor-pointer hover:text-white text-sm">
                Score & Report
              </div>
              <div className="cursor-pointer hover:text-white   text-sm">
                Summary
              </div>
              <div className="cursor-pointer hover:text-white text-sm">
                History
              </div>
              <div className="cursor-pointer hover:text-white text-sm">
                Where You Stand
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Other Sections */}
        <SidebarItem icon={FileText} label="Your Report" />

        <div className="relative">
          <SidebarItem icon={Bell} label="Alerts" />
          <Badge className="absolute right-4 top-2 bg-yellow-400 text-black px-1.5 py-0 text-xs rounded-full">
            4
          </Badge>
        </div>

        <SidebarItem icon={Layers} label="Simulator" />
        <SidebarItem icon={GraduationCap} label="Education" />
        <SidebarItem icon={ArrowUpRight} label="Upgrade My Plan" />
        <SidebarItem icon={Gift} label="Rewards Program" />
      </div>
    </aside>
  );
}
