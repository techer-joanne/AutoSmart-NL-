import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface ChartProps {
  data: any[];
  height?: number;
  color?: string;
}

const COLORS = {
  indigo: '#6366f1',
  emerald: '#10b981',
  blue: '#3b82f6',
  purple: '#9333ea'
};

export const AnimatedBarChart: React.FC<ChartProps> = ({
  data,
  height = 300,
  color = 'indigo'
}) => {
  const chartData = data.map((value, index) => ({
    name: `Jour ${index + 1}`,
    value
  }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis dataKey="name" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1f2937',
            border: 'none',
            borderRadius: '0.5rem',
            color: '#fff'
          }}
        />
        <Bar
          dataKey="value"
          fill={COLORS[color as keyof typeof COLORS]}
          animationDuration={1500}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const AnimatedLineChart: React.FC<ChartProps> = ({
  data,
  height = 300,
  color = 'indigo'
}) => {
  const chartData = data.map((value, index) => ({
    name: `Jour ${index + 1}`,
    value
  }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis dataKey="name" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1f2937',
            border: 'none',
            borderRadius: '0.5rem',
            color: '#fff'
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={COLORS[color as keyof typeof COLORS]}
          strokeWidth={2}
          dot={{ fill: COLORS[color as keyof typeof COLORS] }}
          animationDuration={1500}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const AnimatedAreaChart: React.FC<ChartProps> = ({
  data,
  height = 300,
  color = 'indigo'
}) => {
  const chartData = data.map((value, index) => ({
    name: `Jour ${index + 1}`,
    value
  }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis dataKey="name" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1f2937',
            border: 'none',
            borderRadius: '0.5rem',
            color: '#fff'
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={COLORS[color as keyof typeof COLORS]}
          fill={COLORS[color as keyof typeof COLORS]}
          fillOpacity={0.2}
          animationDuration={1500}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

interface CircleChartProps {
  percentage: number;
  size?: number;
  color?: string;
}

export const AnimatedCircleChart: React.FC<CircleChartProps> = ({
  percentage,
  size = 200,
  color = 'indigo'
}) => {
  const data = [
    { name: 'Complete', value: percentage },
    { name: 'Incomplete', value: 100 - percentage }
  ];

  return (
    <ResponsiveContainer width={size} height={size}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill={COLORS[color as keyof typeof COLORS]}
          paddingAngle={5}
          dataKey="value"
          animationDuration={1500}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === 0 ? COLORS[color as keyof typeof COLORS] : '#374151'}
            />
          ))}
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl font-bold fill-white"
        >
          {percentage}%
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export const AnimatedWaveChart: React.FC<ChartProps> = ({
  data,
  height = 300,
  color = 'indigo'
}) => {
  const chartData = data.map((value, index) => ({
    name: `Jour ${index + 1}`,
    value
  }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis dataKey="name" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1f2937',
            border: 'none',
            borderRadius: '0.5rem',
            color: '#fff'
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={COLORS[color as keyof typeof COLORS]}
          fill={`url(#colorGradient-${color})`}
          fillOpacity={0.6}
          animationDuration={1500}
        >
          <defs>
            <linearGradient id={`colorGradient-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={COLORS[color as keyof typeof COLORS]}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={COLORS[color as keyof typeof COLORS]}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
        </Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};