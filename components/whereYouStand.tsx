"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CircleHelp } from "lucide-react";

const WhereYouStand = () => {
  const score = 767;

  const ranges = [
    { label: "300-722", pct: 15, color: "#E15825" },
    { label: "723-747", pct: 22, color: "#F18200" },
    { label: "748-764", pct: 26, color: "#FCD800" },
    { label: "765-777", pct: 18, color: "#A9D161" },
    { label: "778-900", pct: 20, color: "#009900" },
  ];

  // find range index
  const pointerIndex = ranges.findIndex((r) => {
    const [min, max] = r.label.split("-").map(Number);
    return score >= min && score <= max;
  });

  const totalPct = ranges.reduce((sum, r) => sum + r.pct, 0);

  let pointerPosition = "0%";

  if (pointerIndex !== -1) {
    const offset = ranges
      .slice(0, pointerIndex)
      .reduce((sum, r) => sum + r.pct, 0);

    pointerPosition = `calc(${
      ((offset + ranges[pointerIndex].pct / 2) / totalPct) * 100
    }% - 215px)`;
  }

  return (
    <section className="grid grid-cols-1 gap-4 md:px-10 md:py-4 px-4 py-2 ">
      <div className="mt-10">
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold text-[#046899] tracking-wide">
            WHERE YOU STAND
          </div>
          <CircleHelp className="h-4 w-4 text-[#046899]" />
        </div>
      </div>

      <Card className="p-4 bg-[#F7F9FA]">
        <CardContent className="space-y-6 px-20 p-10 bg-white m-6 ">
          {/* SCORE BARS */}
          <div className="relative overflow-hidden rounded-md border border-[#E3F7FD]">
            <div className="flex text-white text-lg font-semibold text-center w-full">
              {ranges.map((r, i) => (
                <div
                  key={i}
                  className={`flex h-14 items-center justify-start  ${
                    i === 0 ? "rounded-l-xl" : ""
                  } ${i === ranges.length - 1 ? "rounded-r-md" : ""}`}
                  style={{
                    backgroundColor: r.color,
                    width: `${(r.pct / totalPct) * 100}%`,
                  }}
                >
                  <div className="ml-4">
                    {r.pct}%
                  </div>
                </div>
              ))}
            </div>

            {/* POINTER (dynamic) */}
            <div
              className="absolute -bottom-6 flex flex-col items-center"
              style={{ left: pointerPosition }}
            >
              <div className="relative flex flex-col items-center">
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#004780]"></div>
                <div className="text-[13px] text-[#004780] z-10 font-semibold mt-1">
                  Your NB Score
                </div>
              </div>
            </div>
          </div>

          {/* SCORE DISPLAY */}
          <div className="text-center -mt-2">
            <div className="text-sm text-black z-10 font-semibold">
              Your NB Score
            </div>
            <div className="text-4xl mt-2 font-bold text-black">{score}</div>
          </div>

          {/* LEGEND */}
          <div className="border-t pt-4">
            <div className="flex items-center justify-center gap-6">
              <span className="font-semibold text-[#262626] text-sm">
                Score Range:
              </span>
              <div className="grid grid-cols-5 gap-6 text-base text-center">
                {ranges.map((r, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1">
                      <div
                        className="w-3 h-3"
                        style={{ backgroundColor: r.color }}
                      />
                      <span className="font-medium text-[#222]">{r.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        <div className="text-center -mt-4 text-md text-muted-foreground">
          Your NB Score lies in the top 70% in All Of India. <br />
          Based on the NB Data
        </div>
      </Card>
    </section>
  );
};

export default WhereYouStand;
