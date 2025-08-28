"use client";

import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Topbar from "./topbar";
import image from "../public/images/image.jpg";
import Image from "next/image";
import image1 from "../public/images/test.jpg";

export default function CreditScoreDashboard() {
  const score = 767;
  const min = 300;
  const max = 900;

  const pct = Math.max(0, Math.min(1, (score - min) / (max - min)));

  const COLORS: string[] = [
    "#E15825",
    "#F18200",
    "#FCD800",
    "#A9D161",
    "#009900",
  ];

  const data: { value: number }[] = [
    { value: 120 },
    { value: 120 },
    { value: 120 },
    { value: 120 },
    { value: 120 },
  ];

  const chartW = 280;
  const chartH = 160;
  const cx = chartW / 2;
  const cy = chartH;

  type NeedleProps = {
    cx: number;
    cy: number;
    length?: number;
    hubRadius?: number;
    halfWidth?: number;
    percentage: number;
  };

  const renderNeedle = ({
    cx,
    cy,
    length = 118,
    hubRadius = 12,
    halfWidth = 4,
    percentage,
  }: NeedleProps) => {
    const theta = Math.PI * (1 - percentage);

    const xTip = cx + length * Math.cos(theta);
    const yTip = cy - length * Math.sin(theta);

    const xL = cx + halfWidth * Math.cos(theta + Math.PI / 2);
    const yL = cy - halfWidth * Math.sin(theta + Math.PI / 2);

    const xR = cx + halfWidth * Math.cos(theta - Math.PI / 2);
    const yR = cy - halfWidth * Math.sin(theta - Math.PI / 2);

    return (
      <g>
        <defs>
          <filter
            id="needleShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" />
          </filter>
        </defs>

        <path
          d={`M ${xL} ${yL} L ${xR} ${yR} L ${xTip} ${yTip} Z`}
          fill="#333"
          filter="url(#needleShadow)"
        />

        <circle
          cx={cx}
          cy={cy}
          r={hubRadius}
          fill="#e6e6e6"
          stroke="#bfbfbf"
          strokeWidth={2}
        />
        <circle cx={cx} cy={cy} r={3.5} fill="#9e9e9e" />
      </g>
    );
  };

  return (
    <>
      <Topbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-10 md:py-4 px-4 py-2">
        {/* Left Card */}
        <div className="flex flex-col justify-between shadow-md rounded-2xl overflow-hidden">
          <div className="bg-[#F8FAFC]">
            <CardHeader className="text-center pt-6">
              <CardTitle className="text-2xl font-semibold">
                Hello, Rahul L.
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col items-center">
              <div className="relative -mt-6">
                <PieChart width={chartW} height={chartH}>
                  <Pie
                    data={data}
                    startAngle={180}
                    endAngle={0}
                    cx={cx}
                    cy={cy}
                    innerRadius={115}
                    outerRadius={130}
                    paddingAngle={1}
                    dataKey="value"
                  >
                    {data.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>

                  {/* Needle */}
                  {renderNeedle({
                    cx,
                    cy,
                    length: 118,
                    hubRadius: 12,
                    halfWidth: 4,
                    percentage: pct,
                  })}
                </PieChart>
              </div>

              {/* Score */}
              <p className="text-5xl font-bold mt-6">{score}</p>
              <p className="text-lg text-gray-600 mb-6">
                is your <span className="text-blue-500">NB</span> Score as of
                19th Apr &#39;22
              </p>
            </CardContent>
          </div>

          <div className="bg-white px-6 py-4 flex items-center justify-between">
            <a
              href="#"
              className="text-[#066A9B] font-medium text-base underline"
            >
              Score Analysis
            </a>
            <Button className="bg-[#FDDC02] hover:bg-yellow-500 text-black text-base rounded-full px-16 py-6">
              Refresh Now
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          <Card className="shadow-lg px-4 rounded-md relative">
            <div className="absolute right-6 top-4">
              <div className="h-25 w-25 rounded-full grid place-items-center">
                <Image
                  src={image}
                  alt="NB Report icon"
                  className=" w-60 object-cover"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl text-[#046899] font-semibold">
                NB REPORT
              </CardTitle>
            </CardHeader>

            <CardContent className="text-lg text-gray-600 -mt-6">
              <p className="text-base">
                Get your personalized NB Report to plan <br /> your financial
                future.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="#"
                  className="flex items-center text-base text-[#066A9B] hover:underline"
                >
                  <Eye size={18} className="mr-2 text-[#262626]" />
                  <span className="flex items-center">
                    View Your NB Report
                    <ArrowRight size={16} className="ml-2" />
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center text-base text-[#066A9B] hover:underline"
                >
                  <Download size={18} className="mr-2 text-[#262626]" />
                  <span className="flex items-center">
                    Download Your NB Report With Summary
                    <ArrowRight size={16} className="ml-2" />
                  </span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#FEEF93] shadow-md  py-0">
            <CardContent className="flex items-center justify-between text-gray-700 w-full gap-4">
              <p className="text-base flex-1">
                You currently have an active subscription. You will be able to
                access Free Annual NB Score & Report after the subscription
                period expires.
              </p>

              <motion.div
                initial={{ rotate: -20 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="shrink-0"
              >
                <Image
                  src={image1}
                  alt="Illustration"
                  width={128}
                  height={128}
                  className="w-42 h-42 object-contain"
                />
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
