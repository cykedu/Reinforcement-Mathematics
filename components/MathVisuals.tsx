import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { VisualizationType } from '../types';

interface VisualProps {
  type: VisualizationType;
}

const QuadraticVisual: React.FC = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const data = useMemo(() => {
    const points = [];
    for (let x = -5; x <= 5; x += 0.5) {
      points.push({
        x,
        y: a * x * x + b * x + c
      });
    }
    return points;
  }, [a, b, c]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold mb-4 text-indigo-900">Interactive Quadratic Graph</h3>
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-indigo-50 p-3 rounded-lg">
            <label className="block text-sm font-medium text-indigo-700 mb-1">Value of a: {a}</label>
            <input 
                type="range" min="-3" max="3" step="0.1" value={a} 
                onChange={(e) => setA(parseFloat(e.target.value))}
                className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <p className="text-xs text-indigo-500 mt-1">{a > 0 ? "😊 Happy (Minimum)" : a < 0 ? "☹️ Sad (Maximum)" : "Line"}</p>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg">
            <label className="block text-sm font-medium text-indigo-700 mb-1">Value of b: {b}</label>
            <input 
                type="range" min="-5" max="5" step="0.5" value={b} 
                onChange={(e) => setB(parseFloat(e.target.value))}
                className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <p className="text-xs text-indigo-500 mt-1">Shifts left/right</p>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg">
            <label className="block text-sm font-medium text-indigo-700 mb-1">Value of c: {c}</label>
            <input 
                type="range" min="-5" max="5" step="1" value={c} 
                onChange={(e) => setC(parseFloat(e.target.value))}
                className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <p className="text-xs text-indigo-500 mt-1">Y-intercept</p>
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" domain={[-5, 5]} allowDataOverflow={false} stroke="#64748b" />
            <YAxis domain={[-10, 10]} allowDataOverflow={true} stroke="#64748b" />
            <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                itemStyle={{ color: '#4f46e5' }}
                formatter={(val: number) => val.toFixed(2)}
                labelFormatter={(val: number) => `x = ${val}`}
            />
            <Line type="monotone" dataKey="y" stroke="#4f46e5" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center font-mono bg-slate-100 p-2 rounded text-slate-700">
        Equation: y = {a}x² {b >= 0 ? '+' : ''}{b}x {c >= 0 ? '+' : ''}{c}
      </div>
    </div>
  );
};

const MotionVisual: React.FC = () => {
  const data = [
    { time: 0, distance: 0, speed: 0 },
    { time: 2, distance: 10, speed: 5 },
    { time: 5, distance: 40, speed: 10 },
    { time: 8, distance: 40, speed: 0 },
    { time: 10, distance: 60, speed: 10 }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold mb-4 text-indigo-900">Motion Graphs</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-[250px]">
            <h4 className="text-sm font-medium text-center mb-2 text-slate-500">Distance-Time (Gradient = Speed)</h4>
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0"/>
                <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5 }} stroke="#64748b" />
                <YAxis label={{ value: 'Dist (m)', angle: -90, position: 'insideLeft' }} stroke="#64748b" />
                <Tooltip contentStyle={{ borderRadius: '8px' }} />
                <Area type="monotone" dataKey="distance" stroke="#0ea5e9" fill="#e0f2fe" strokeWidth={2} />
            </AreaChart>
            </ResponsiveContainer>
        </div>
        <div className="h-[250px]">
            <h4 className="text-sm font-medium text-center mb-2 text-slate-500">Speed-Time (Area = Distance)</h4>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0"/>
                <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5 }} stroke="#64748b" />
                <YAxis label={{ value: 'Speed (m/s)', angle: -90, position: 'insideLeft' }} stroke="#64748b" />
                <Tooltip contentStyle={{ borderRadius: '8px' }} />
                <Line type="stepAfter" dataKey="speed" stroke="#f43f5e" strokeWidth={2} dot={{r: 4}} />
            </LineChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const TrigVisual: React.FC = () => {
    const [func, setFunc] = useState<'sin' | 'cos' | 'tan'>('sin');

    const data = useMemo(() => {
        const pts = [];
        for(let x = 0; x <= 360; x+=5) {
            const rad = x * Math.PI / 180;
            let y = 0;
            if (func === 'sin') y = Math.sin(rad);
            if (func === 'cos') y = Math.cos(rad);
            if (func === 'tan') y = Math.tan(rad);
            
            // Clamp tan for visual sanity
            if (func === 'tan' && Math.abs(y) > 5) y = y > 0 ? 5 : -5;

            pts.push({ x, y });
        }
        return pts;
    }, [func]);

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-indigo-900">Trigonometric Functions</h3>
                <div className="flex space-x-2 bg-slate-100 p-1 rounded-lg">
                    {(['sin', 'cos', 'tan'] as const).map(f => (
                        <button 
                            key={f}
                            onClick={() => setFunc(f)}
                            className={`px-4 py-1 rounded-md text-sm font-medium transition-colors capitalize ${
                                func === f ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="x" type="number" domain={[0, 360]} tickCount={9} stroke="#64748b" />
                        <YAxis domain={[-1.5, 1.5]} hide={func === 'tan'} stroke="#64748b" />
                        <Tooltip labelFormatter={(label) => `${label}°`} formatter={(val:number) => val.toFixed(3)} />
                        <Line type="monotone" dataKey="y" stroke="#8b5cf6" dot={false} strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
             <p className="mt-4 text-sm text-slate-500 text-center">
                Graph of <span className="font-mono font-bold">y = {func}(x)</span> for 0° ≤ x ≤ 360°
            </p>
        </div>
    )
}

const SetsVisual: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-indigo-900">Venn Diagram Concepts</h3>
            <div className="relative w-64 h-48">
                <div className="absolute top-0 left-4 w-32 h-32 rounded-full bg-red-500/30 border-2 border-red-500 flex items-center justify-center text-red-800 font-bold">A</div>
                <div className="absolute top-0 right-4 w-32 h-32 rounded-full bg-blue-500/30 border-2 border-blue-500 flex items-center justify-center text-blue-800 font-bold">B</div>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-sm font-bold text-purple-900">A ∩ B</div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm w-full">
                <div className="p-3 bg-purple-50 rounded border border-purple-100 text-center">
                    <span className="block font-bold text-purple-700">Intersection ∩</span>
                    <span className="text-slate-600">Overlapping region only</span>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100 text-center">
                    <span className="block font-bold text-slate-700">Union ∪</span>
                    <span className="text-slate-600">All colored regions combined</span>
                </div>
            </div>
        </div>
    )
}

const MatricesVisual: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 text-indigo-900">Matrix Operations Visualized</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-mono text-lg">
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <div className="flex">
                        <div className="flex flex-col gap-2 border-l-2 border-r-2 border-slate-800 px-2">
                            <span>1</span>
                            <span>3</span>
                        </div>
                        <div className="flex flex-col gap-2 border-r-2 border-slate-800 pr-2">
                            <span>2</span>
                            <span>4</span>
                        </div>
                    </div>
                    <div className="text-center text-xs text-slate-500 mt-2">Matrix A</div>
                </div>
                <div className="text-2xl text-slate-400">+</div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                     <div className="flex">
                        <div className="flex flex-col gap-2 border-l-2 border-r-2 border-slate-800 px-2">
                            <span>5</span>
                            <span>7</span>
                        </div>
                        <div className="flex flex-col gap-2 border-r-2 border-slate-800 pr-2">
                            <span>6</span>
                            <span>8</span>
                        </div>
                    </div>
                    <div className="text-center text-xs text-slate-500 mt-2">Matrix B</div>
                </div>
                <div className="text-2xl text-slate-400">=</div>
                <div className="bg-indigo-50 p-4 rounded border border-indigo-200 text-indigo-700">
                     <div className="flex">
                        <div className="flex flex-col gap-2 border-l-2 border-r-2 border-indigo-800 px-2">
                            <span>1+5</span>
                            <span>3+7</span>
                        </div>
                        <div className="flex flex-col gap-2 border-r-2 border-indigo-800 pr-2">
                            <span>2+6</span>
                            <span>4+8</span>
                        </div>
                    </div>
                     <div className="text-center text-xs text-indigo-500 mt-2">Result</div>
                </div>
            </div>
        </div>
    )
}

const MathVisuals: React.FC<VisualProps> = ({ type }) => {
  if (type === 'quadratic') return <QuadraticVisual />;
  if (type === 'motion') return <MotionVisual />;
  if (type === 'trig') return <TrigVisual />;
  if (type === 'sets') return <SetsVisual />;
  if (type === 'matrices') return <MatricesVisual />;
  // Placeholder for others or 'none'
  return null;
};

export default MathVisuals;