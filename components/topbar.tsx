import { ChevronDown, CircleHelp, LogOut, User } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full border-b bg-white px-6 z-50">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-2">
        </div>

        <div className="hidden items-center gap-8 md:flex text-sm text-muted-foreground">
          {/* How it Works */}
          <div className="flex items-center gap-1">
            <CircleHelp className="h-4 w-4 text-[#004364]" /> How it Works
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1">
            <div className="flex">
              <div className="bg-[#E6EDF1] px-1 py-0.5 rounded-l-sm text-[#004364] text-xs font-semibold">
                A
              </div>
              <div className="bg-[#E6EDF1] px-1 py-0.5 rounded-r-sm text-[#004364] text-xs font-semibold border-l border-[#004364]">
                अ
              </div>
            </div>
            <span className="text-sm text-[#004364] font-medium">English</span>
            <ChevronDown className="h-4 w-4 text-[#004364]" />
          </div>

          {/* My Account */}
          <div className="flex items-center gap-1">
            <User className="h-4 w-4 text-[#004364]" /> My Account
          </div>

          {/* Logout */}
          <div className="flex items-center gap-1">
            <LogOut className="h-4 w-4 text-[#004364]" /> Logout
          </div>
        </div>
      </div>
    </div>
  );
}
