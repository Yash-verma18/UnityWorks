"use client";

import { getEmployeeGraphData } from "@/app/apis";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Type for Graph Data
interface GraphData {
  name: string;
  office: number;
  wfh: number;
}

export default function WorkLocationTrends() {
  const [data, setData] = useState<GraphData[]>([]);

  useEffect(() => {
    const fetchGraphData = async () => {
      const authString = localStorage.getItem("auth");
      if (!authString) {
        return;
      }
      try {
        const authObject: { accessToken: string } = JSON.parse(authString);
        const accessToken = authObject.accessToken;
        const graphData = await getEmployeeGraphData(accessToken);
        if (graphData && Array.isArray(graphData)) {
          setData(graphData as GraphData[]);
        }
      } catch (error) {
        console.error("Error fetching graph data:", error);
        setData([]);
      }
    };

    fetchGraphData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      {data.length > 0 ? (
        <BarChart
          data={data}
          className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
        >
          <XAxis dataKey="name" stroke="#888888" fontSize={12} />
          <YAxis stroke="#888888" fontSize={12} />
          <Tooltip
            separator=": "
            formatter={(value, name) => {
              if (name === "wfh") {
                return [value, "Work from home"];
              } else if (name === "office") {
                return [value, "Work from office"];
              }
              return [value, name]; // Default formatter
            }}
            labelClassName="font-bold"
            wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
          />
          <Legend
            iconType="circle"
            formatter={(value) => {
              if (value === "wfh") {
                return <div className="text-sm">Work from home</div>;
              } else if (value === "office") {
                return <div className="text-sm">Work from office</div>;
              }
              return <div className="text-sm">{value}</div>; // Default formatter
            }}
          />
          <Bar dataKey="office" stackId="1" fill="#ec4899" />
          <Bar dataKey="wfh" stackId="1" fill="#6b7280" radius={[4, 4, 0, 0]} />
        </BarChart>
      ) : (
        <p>No data available.</p> // Display message if data is empty
      )}
    </ResponsiveContainer>
  );
}
