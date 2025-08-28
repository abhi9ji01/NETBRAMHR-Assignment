"use client"
import React from "react";
import Sidebar from "@/components/sidebar";
import AccountsRow from "@/components/account";
import WhereYouStand from "@/components/whereYouStand";
import HeroRow from "@/components/heroRow";
import Footer from "@/components/footer";
import { HistoryRow } from "@/components/history";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f6f9fb">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 space-y-6 bg-white ">
          <HeroRow />
          <AccountsRow />
          <HistoryRow />
          <WhereYouStand/>
          <Footer />
        </main>
      </div>
    </div>
  );
}



