"use client";

import React from 'react';
import {
    Area,
    AreaChart,
    ResponsiveContainer,
} from 'recharts';

// Define the data structure
interface ChartData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

// Sample data
const data: ChartData[] = [
    {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Example: React.FC = () => {
  return (
    <ResponsiveContainer width="96%" height={60}>
        <AreaChart
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <Area type="monotone" dataKey="uv" stroke="#fff" fill="#333" />
        </AreaChart>
    </ResponsiveContainer>
  );
};

export default Example;

