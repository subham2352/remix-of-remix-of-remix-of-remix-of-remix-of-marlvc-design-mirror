import { motion } from "framer-motion";

const dots = [
  { cx: 200, cy: 130, label: "New York" },
  { cx: 210, cy: 145, label: "Washington" },
  { cx: 195, cy: 155, label: "Atlanta" },
  { cx: 520, cy: 120, label: "London" },
  { cx: 540, cy: 135, label: "Paris" },
  { cx: 700, cy: 200, label: "Mumbai" },
  { cx: 820, cy: 250, label: "Singapore" },
  { cx: 870, cy: 310, label: "Sydney" },
];

const WorldMap = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[80%] opacity-30 lg:opacity-50 pointer-events-none">
      <svg viewBox="0 0 1000 500" className="w-full h-full" fill="none">
        {/* Simplified world map outline */}
        <path
          d="M150,120 Q170,80 220,90 Q250,85 270,100 Q290,90 300,110 Q280,130 260,125 Q240,140 220,135 Q200,150 180,140 Q160,135 150,120Z"
          stroke="hsl(var(--navy-deep) / 0.15)"
          strokeWidth="1"
          fill="hsl(var(--navy-deep) / 0.03)"
        />
        {/* North America */}
        <path
          d="M80,80 Q100,50 140,55 Q170,40 200,50 Q230,45 250,60 Q270,55 280,70 Q290,85 280,100 Q270,110 250,105 Q230,115 210,120 Q200,130 180,135 Q160,140 140,130 Q120,140 110,125 Q90,135 80,120 Q70,110 75,95 Z"
          stroke="hsl(var(--navy-deep) / 0.12)"
          strokeWidth="0.8"
          fill="hsl(var(--navy-deep) / 0.02)"
        />
        {/* South America */}
        <path
          d="M220,220 Q240,200 260,210 Q270,230 265,260 Q260,290 250,310 Q240,330 230,340 Q220,335 225,310 Q215,290 210,260 Q215,240 220,220Z"
          stroke="hsl(var(--navy-deep) / 0.12)"
          strokeWidth="0.8"
          fill="hsl(var(--navy-deep) / 0.02)"
        />
        {/* Europe */}
        <path
          d="M480,70 Q500,55 530,60 Q560,50 580,65 Q590,80 575,90 Q560,100 540,95 Q520,105 500,100 Q485,95 480,80Z"
          stroke="hsl(var(--navy-deep) / 0.12)"
          strokeWidth="0.8"
          fill="hsl(var(--navy-deep) / 0.02)"
        />
        {/* Africa */}
        <path
          d="M500,150 Q530,140 550,155 Q560,180 555,210 Q550,250 540,280 Q530,300 515,305 Q500,300 505,270 Q495,240 500,210 Q495,180 500,150Z"
          stroke="hsl(var(--navy-deep) / 0.12)"
          strokeWidth="0.8"
          fill="hsl(var(--navy-deep) / 0.02)"
        />
        {/* Asia */}
        <path
          d="M600,60 Q650,45 700,55 Q750,50 800,65 Q830,80 840,100 Q835,130 810,140 Q780,150 750,145 Q720,155 690,150 Q660,160 640,145 Q620,130 610,110 Q600,90 600,60Z"
          stroke="hsl(var(--navy-deep) / 0.12)"
          strokeWidth="0.8"
          fill="hsl(var(--navy-deep) / 0.02)"
        />
        {/* India */}
        <path
          d="M680,150 Q700,140 720,150 Q725,175 720,200 Q710,220 695,225 Q680,215 685,190 Q678,170 680,150Z"
          stroke="hsl(var(--navy-deep) / 0.12)"
          strokeWidth="0.8"
          fill="hsl(var(--navy-deep) / 0.02)"
        />
        {/* Australia */}
        <path
          d="M820,280 Q850,270 880,280 Q900,295 895,315 Q880,330 860,325 Q840,330 825,320 Q815,305 820,280Z"
          stroke="hsl(var(--navy-deep) / 0.12)"
          strokeWidth="0.8"
          fill="hsl(var(--navy-deep) / 0.02)"
        />
        {/* Southeast Asia / Indonesia */}
        <path
          d="M780,200 Q800,190 830,195 Q850,210 845,225 Q830,235 810,230 Q790,225 780,210Z"
          stroke="hsl(var(--navy-deep) / 0.12)"
          strokeWidth="0.8"
          fill="hsl(var(--navy-deep) / 0.02)"
        />

        {/* Animated dots */}
        {dots.map((dot, i) => (
          <g key={i}>
            {/* Pulse ring */}
            <motion.circle
              cx={dot.cx}
              cy={dot.cy}
              r={4}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              initial={{ r: 4, opacity: 0.8 }}
              animate={{ r: 14, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
            {/* Dot */}
            <motion.circle
              cx={dot.cx}
              cy={dot.cy}
              r={4}
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default WorldMap;
