import React, { useMemo } from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend
} from 'recharts';

const COLORS = {
  Easy: '#22c55e',
  Medium: '#eab308',
  Hard: '#ef4444',
  Pattern: ['#f97316', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5']
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1a1a] border border-gray-800 p-3 rounded-lg shadow-xl">
        <p className="text-sm font-bold text-white">{payload[0].name}</p>
        <p className="text-xs text-orange-500 font-semibold">
          {payload[0].value}% of questions
        </p>
      </div>
    );
  }
  return null;
};

export function AnalyticsSection({ data = [], companyName = "Company" }) {
<<<<<<< HEAD

=======
  
>>>>>>> 2cba75a645973649706b42d54993b1b4cb2dd1c2
  const difficultyData = useMemo(() => {
    if (!data.length) return [];
    
    const counts = { Easy: 0, Medium: 0, Hard: 0 };
    data.forEach(q => {
      if (counts[q.difficulty] !== undefined) {
        counts[q.difficulty]++;
      }
    });

    const total = data.length;
    return [
      { name: 'Easy', value: Math.round((counts.Easy / total) * 100), color: COLORS.Easy },
      { name: 'Medium', value: Math.round((counts.Medium / total) * 100), color: COLORS.Medium },
      { name: 'Hard', value: Math.round((counts.Hard / total) * 100), color: COLORS.Hard },
    ].filter(d => d.value > 0);
  }, [data]);

<<<<<<< HEAD
 
  const patternData = useMemo(() => {
   
=======
  
  const patternData = useMemo(() => {
    
>>>>>>> 2cba75a645973649706b42d54993b1b4cb2dd1c2
    const seed = companyName.length;
    const patterns = [
      { name: 'Arrays & Strings', base: 40 },
      { name: 'DP', base: 20 },
      { name: 'Graphs', base: 15 },
      { name: 'Trees', base: 15 },
      { name: 'Others', base: 10 },
    ];

    return patterns.map((p, i) => ({
      ...p,
      value: Math.max(5, p.base + (seed % (i + 5)) - 2),
      color: COLORS.Pattern[i]
    }));
  }, [companyName]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<<<<<<< HEAD

=======
      
>>>>>>> 2cba75a645973649706b42d54993b1b4cb2dd1c2
      <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300 group">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white">Interview Pattern Distribution</h3>
          <p className="text-gray-500 text-sm">Most frequently asked topics at {companyName}</p>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={patternData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {patternData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="middle" 
                align="right" 
                layout="vertical"
                iconType="circle"
                formatter={(value) => <span className="text-gray-400 text-sm font-medium pr-4">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

<<<<<<< HEAD
     
=======
      
>>>>>>> 2cba75a645973649706b42d54993b1b4cb2dd1c2
      <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300 group">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white">Difficulty Wise Distribution</h3>
          <p className="text-gray-500 text-sm">Breakdown of {companyName} question complexity</p>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={difficultyData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={100}
                dataKey="value"
                stroke="#0f0f0f"
                strokeWidth={4}
              >
                {difficultyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="middle" 
                align="right" 
                layout="vertical"
                iconType="circle"
                formatter={(value) => <span className="text-gray-400 text-sm font-medium pr-4">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
