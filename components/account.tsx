import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { CircleHelp, TriangleAlert } from "lucide-react";

const donutData = [
  { name: "Closed credit cards", value: 4 },
  { name: "Closed loans", value: 1 },
  { name: "Open credit cards", value: 2 },
  { name: "Open loans", value: 6 },
];

const palette = ["#7E79DD", "#67D995", "#99DBEA", "#FDE866"];

function LegendItem({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between gap-2 text-sm">
      <div className="flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-[#262626]">{label}</span>
      </div>
      <span className="font-medium text-[#262626]">{value}</span>
    </div>
  );
}

export default function AccountsRow() {
  const totalAccounts = donutData.reduce((acc, d) => acc + d.value, 0);

  return (
    <section className="md:px-10 md:py-4 px-4 py-2 flex flex-col lg:flex-row gap-4">
      {/* Left Big Card (60%) */}
      <Card className="lg:basis-[60%] !border-0 !border-t !border-[#066A9B]">
        <CardHeader className="flex flex-row items-center justify-between pb-0">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base text-[#046899]">
              Your Accounts
            </CardTitle>
            <CircleHelp className="h-4 w-4 text-[#046899]" />
          </div>

          <Tabs defaultValue="closed">
            <TabsList className="rounded-md bg-[#F7F9FA]">
              <TabsTrigger
                value="all"
                className="px-4 py-1 data-[state=active]:bg-[#066A9B] data-[state=active]:text-white rounded-md"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="open"
                className="px-4 py-1 data-[state=active]:bg-[#066A9B] data-[state=active]:text-white rounded-md"
              >
                Open
              </TabsTrigger>
              <TabsTrigger
                value="closed"
                className="px-4 py-1 data-[state=active]:bg-[#066A9B] data-[state=active]:text-white rounded-md"
              >
                Closed
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>

        <CardContent className="grid grid-cols-1 items-center gap-6 py-6 md:grid-cols-2">
          {/* Donut Chart */}
          <div className="relative h-56 w-full">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={donutData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={90}
                  outerRadius={110}
                  paddingAngle={2}
                >
                  {donutData.map((_, i) => (
                    <Cell key={i} fill={palette[i % palette.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center placeholder number */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-lg font-semibold text-gray-700 text-center">
                <span className="block">Total</span>
                <span className="block">Accounts</span>
              </h1>
              <span className="mt-2 text-xl  text-gray-700">
                {totalAccounts}
              </span>
            </div>
          </div>

          {/* Legends */}
          <div className="grid grid-cols-1 gap-6 text-sm font-bold">
            {donutData.map((d, i) => (
              <LegendItem
                key={i}
                color={palette[i]}
                label={d.name}
                value={d.value}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Right Side (40%) */}
      <div className="lg:basis-[40%] grid grid-cols-1 gap-4">
        {/* Disputes */}
        <div className="flex flex-row !border-0 !border-t !border-[#066A9B] rounded-lg shadow-sm overflow-hidden w-full">
          <div className="bg-[#E3F7FD] flex items-center -mt-25 justify-end px-4">
            <TriangleAlert className="text-[#066A9B] w-6 h-6" />
          </div>

          <div className="flex flex-col justify-center px-4 bg-white w-full">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-semibold text-[#066A9B]">
                Total Disputes
              </h4>
              <span className="text-lg font-bold text-gray-800 ml-4">12</span>
            </div>

            <p className="text-base text-gray-500 mt-4">
              Learn more about credit reporting <br /> and related policies.
            </p>

            <Button
              variant="link"
              className="p-0 text-lg text-[#066A9B] mt-2 h-auto justify-start underline"
            >
              Read More
            </Button>
          </div>
        </div>

        {/* Enquiries */}
        <div className="flex flex-row !border-0 !border-t !border-[#066A9B] rounded-lg shadow-sm overflow-hidden w-full">
          <div className="bg-[#E3F7FD] flex items-center px-4  ">
            <TriangleAlert className="text-[#066A9B] w-6 h-6" />
          </div>

          <div className="flex flex-col justify-center px-4 bg-white w-full">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h4 className="text-base font-semibold text-[#066A9B]">
                  Total Enquiries
                </h4>
                <span className="text-sm text-gray-500">(In last 3 years)</span>
              </div>
              <span className="text-lg font-bold text-gray-800 ml-4">12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
