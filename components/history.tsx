"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  DotProps,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { CircleHelp, ArrowUp, ArrowDown, ArrowRight } from "lucide-react";

type HistoryDataPoint = {
  month: string;
  score: number | null;
};

const historyData: HistoryDataPoint[] = [
  { month: "JAN", score: null },
  { month: "FEB", score: null },
  { month: "MAR", score: null },
  { month: "APR", score: 520 },
  { month: "MAY", score: 580 },
  { month: "JUN", score: 493 },
  { month: "JUL", score: null },
  { month: "AUG", score: 510 },
  { month: "SEP", score: null },
  { month: "OCT", score: null },
  { month: "NOV", score: null },
  { month: "DEC", score: null },
];

const COLORS = {
  line: "#0078AE",
  chipBlue: "#00AEEF",
  chipBlueCircle: "#003D66",
  chipYellow: "#FFD600",
  chipYellowCircle: "#0078AE",
};

const CustomDot = (props: DotProps & { payload?: HistoryDataPoint }) => {
  const { cx, cy, payload } = props;
  if (!payload || payload.score == null) return null;

  const isLatest = payload.month === "AUG";
  const pillFill = isLatest ? COLORS.chipYellow : COLORS.chipBlue;
  const circleFill = isLatest ? COLORS.chipYellowCircle : COLORS.chipBlueCircle;
  const icon = isLatest ? "›" : "+";

  const scoreStr = String(payload.score);
  const charW = 8;
  const padX = 12;
  const pillW = scoreStr.length * charW + padX * 2;
  const pillH = 24;
  const yOffset = 28;
  const baseY = (cy ?? 0) - yOffset;

  return (
    <g>
      <rect
        x={(cx ?? 0) - pillW / 2 - 6}
        y={baseY - pillH / 2}
        width={pillW + 18}
        height={pillH}
        rx={pillH / 2}
        ry={pillH / 2}
        fill={pillFill}
      />
      <text
        x={(cx ?? 0) - 4}
        y={baseY + 4}
        textAnchor="end"
        fontSize="12"
        fontWeight="700"
        fill="#fff"
      >
        {scoreStr}
      </text>
      <circle
        cx={(cx ?? 0) + pillW / 2 + 6}
        cy={baseY}
        r={12}
        fill={circleFill}
      />
      <text
        x={(cx ?? 0) + pillW / 2 + 6}
        y={baseY + 4}
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#fff"
      >
        {icon}
      </text>
      <circle
        cx={cx ?? 0}
        cy={cy ?? 0}
        r={3}
        fill={pillFill}
        stroke="#fff"
        strokeWidth={1.6}
      />
    </g>
  );
};

function ScoreItem({
  score,
  date,
  direction,
}: {
  score: number | string;
  date: string;
  direction: "up" | "down" | "right" | "none";
}) {
  const iconMap = {
    up: <ArrowUp className="text-green-600 w-4 h-4" />,
    down: <ArrowDown className="text-red-600 w-4 h-4" />,
    right: <ArrowRight className="text-blue-600 w-4 h-4" />,
  };

  return (
    <div className="flex justify-between items-center text-sm py-2 border-b last:border-b-0">
      <div className="flex items-center gap-2">
        {direction !== "none" && iconMap[direction]}
        <span className="text-black text-lg font-semibold">{score}</span>
      </div>
      <div className="text-muted-foreground text-lg ">{date}</div>
    </div>
  );
}

export function HistoryRow() {
  return (
    <div className="md:px-10 md:py-4 px-4 py-2">
      <div className="pb-2 mt-5">
        <div className="flex items-center gap-2">
          <div className="text-lg text-[#046899] font-bold uppercase">
            NB Score History
          </div>
          <CircleHelp className="h-4 w-4 text-[#046899] " />
        </div>
      </div>
      <Card className="bg-[#f9fafa] shadow-sm border border-gray-200">
        <div className="text-base px-10">
          Trended view of the changes in your NB Score with every refresh.
        </div>

        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4">
            <div className="h-80">
              <ResponsiveContainer>
                <LineChart
                  data={historyData}
                  margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E9EEF2" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[300, 900]} tickCount={7} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke={COLORS.line}
                    strokeWidth={2}
                    dot={<CustomDot />}
                    activeDot={{ r: 6 }}
                    connectNulls={true}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="h-70 overflow-y-auto mt-6 mr-6 ml-6 bg-white pr-6 p-2 rounded-xl pl-4">
              <h3 className="text-lg font-semibold mb-2">August 2022</h3>
              <ScoreItem score={493} date="18/08/2022" direction="up" />
              <ScoreItem score={490} date="16/08/2022" direction="down" />
              <ScoreItem score={510} date="14/08/2022" direction="up" />
              <ScoreItem score={509} date="12/08/2022" direction="right" />
              <ScoreItem score="N/H" date="09/08/2022" direction="right" />
              <ScoreItem score={505} date="07/08/2022" direction="down" />
              <ScoreItem score={507} date="06/08/2022" direction="up" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
