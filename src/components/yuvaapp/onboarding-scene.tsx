// Decorative background for the onboarding screens: two homes, one child,
// a shared calendar. Flat vector shapes in the brand palette. Purely visual.
const C = {
  orchidLight: '#F6DDF1',
  hillBack: '#DC9DD2',
  hillFront: '#D089C6',
  orchidDeep: '#C070B5',
  plum: '#7A2A83',
  eggplant: '#400849',
  orange: '#FF5A0A',
  orangeSoft: '#FFB48A',
  cream: '#FFF3EA',
  skin: '#F4C2A1',
};

function Heart({ x = 0, y = 0, s = 1, fill }: { x?: number; y?: number; s?: number; fill: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 8 C-14 -2 -16 -10 -16 -14 C-16 -20 -11 -24 -6 -24 C-3 -24 -1 -20 0 -16 C1 -20 3 -24 6 -24 C11 -24 16 -20 16 -14 C16 -10 14 -2 0 8Z"
      fill={fill}
    />
  );
}

function Sparkle({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 -14 C2 -4 4 -2 14 0 C4 2 2 4 0 14 C-2 4 -4 2 -14 0 C-4 -2 -2 -4 0 -14Z"
      fill={C.cream}
      opacity=".9"
    />
  );
}

function Cloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={C.orchidLight} opacity=".85">
      <rect x="0" y="24" width="124" height="34" rx="17" />
      <circle cx="44" cy="26" r="24" />
      <circle cx="80" cy="20" r="30" />
    </g>
  );
}

function Leaf({ r, s, fill }: { r: number; s: number; fill: string }) {
  return (
    <g transform={`rotate(${r}) scale(${s})`}>
      <path d="M0 0 C-30 -34 -26 -88 0 -124 C26 -88 30 -34 0 0Z" fill={fill} />
      <path d="M0 -8 L0 -92" stroke={C.cream} strokeOpacity=".28" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
}

function Plant({ x, y, s = 1, flip = false, tones }: { x: number; y: number; s?: number; flip?: boolean; tones?: string[] }) {
  const t = tones ?? [C.plum, C.orchidDeep, C.eggplant];
  const fan = [
    { r: -66, s: 0.68 },
    { r: -38, s: 0.95 },
    { r: -10, s: 1.18 },
    { r: 18, s: 1.02 },
    { r: 46, s: 0.82 },
    { r: 70, s: 0.56 },
  ];
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      {fan.map((l, i) => (
        <Leaf key={i} r={l.r} s={l.s} fill={t[i % t.length] ?? C.plum} />
      ))}
    </g>
  );
}

function Bush({ x, y, s = 1, fill }: { x: number; y: number; s?: number; fill: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={fill}>
      <circle cx="-34" cy="-22" r="28" />
      <circle cx="0" cy="-34" r="38" />
      <circle cx="36" cy="-20" r="26" />
      <rect x="-62" y="-26" width="124" height="26" rx="13" />
    </g>
  );
}

function House({ x, y, s = 1, flip = false, body, door, glass }: { x: number; y: number; s?: number; flip?: boolean; body: string; door: string; glass: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <ellipse cx="0" cy="6" rx="128" ry="11" fill={C.eggplant} opacity=".12" />
      <rect x="50" y="-200" width="30" height="80" rx="8" fill={body} />
      <rect x="-86" y="-132" width="172" height="132" rx="16" fill={body} />
      <path d="M-116 -118 L0 -218 L116 -118Z" fill={body} stroke={body} strokeWidth="22" strokeLinejoin="round" />
      <circle cx="0" cy="-142" r="19" fill={glass} />
      <Heart x={0} y={-134} s={0.62} fill={body} />
      <rect x="-70" y="-100" width="30" height="30" rx="9" fill={glass} />
      <rect x="40" y="-100" width="30" height="30" rx="9" fill={glass} />
      <path d="M-24 0 V-56 a24 24 0 0 1 48 0 V0Z" fill={door} />
      <circle cx="12" cy="-26" r="3.4" fill={body} />
    </g>
  );
}

function Child({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="4" rx="40" ry="8" fill={C.eggplant} opacity=".14" />
      {/* balloon */}
      <g className="onb-sway">
        <path d="M44 -122 C38 -160 70 -184 62 -216" stroke={C.eggplant} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <Heart x={64} y={-238} s={3.2} fill={C.orange} />
        <path d="M36 -262 C40 -272 48 -277 57 -275" stroke={C.cream} strokeOpacity=".7" strokeWidth="5" strokeLinecap="round" fill="none" />
      </g>
      {/* legs + shoes */}
      <rect x="-17" y="-48" width="13" height="46" rx="6.5" fill={C.eggplant} />
      <rect x="4" y="-48" width="13" height="46" rx="6.5" fill={C.eggplant} />
      <ellipse cx="-12" cy="-1" rx="13" ry="6.5" fill={C.orange} />
      <ellipse cx="12" cy="-1" rx="13" ry="6.5" fill={C.orange} />
      {/* arms behind body */}
      <path d="M-22 -94 L-33 -58" stroke={C.cream} strokeWidth="13" strokeLinecap="round" />
      <path d="M22 -94 L44 -124" stroke={C.cream} strokeWidth="13" strokeLinecap="round" />
      <circle cx="-34" cy="-54" r="6.5" fill={C.skin} />
      <circle cx="45" cy="-126" r="6.5" fill={C.skin} />
      {/* body */}
      <rect x="-27" y="-110" width="54" height="68" rx="20" fill={C.cream} />
      <Heart x={0} y={-72} s={0.7} fill={C.orange} />
      {/* head */}
      <rect x="-6" y="-120" width="12" height="14" rx="5" fill={C.skin} />
      <circle cx="0" cy="-138" r="25" fill={C.skin} />
      <path d="M-26 -140 C-30 -170 -4 -176 10 -170 C26 -166 30 -150 26 -140 C18 -152 -10 -152 -26 -140Z" fill={C.eggplant} />
      <circle cx="-9" cy="-135" r="2.6" fill={C.eggplant} />
      <circle cx="9" cy="-135" r="2.6" fill={C.eggplant} />
      <path d="M-6 -126 Q0 -120 6 -126" stroke={C.eggplant} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="-16" cy="-128" r="5" fill={C.orange} opacity=".22" />
      <circle cx="16" cy="-128" r="5" fill={C.orange} opacity=".22" />
    </g>
  );
}

// Shared calendar: mother's days orange, father's days eggplant.
function Calendar({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  const cols = [18, 39, 60, 81, 102];
  const rows = [60, 80, 100, 120];
  const mother = new Set(['0-0', '2-0', '1-1', '3-2', '0-3']);
  const father = new Set(['3-0', '4-1', '1-2', '2-3', '4-3']);
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="0" y="10" width="124" height="138" rx="22" fill={C.eggplant} opacity=".13" />
      <rect x="0" y="0" width="124" height="138" rx="22" fill={C.cream} />
      <path d="M0 22 A22 22 0 0 1 22 0 H102 A22 22 0 0 1 124 22 V40 H0Z" fill={C.orange} />
      <rect x="30" y="-8" width="9" height="22" rx="4.5" fill={C.eggplant} />
      <rect x="85" y="-8" width="9" height="22" rx="4.5" fill={C.eggplant} />
      {rows.flatMap((cy, j) =>
        cols.map((cx, i) => {
          const k = `${i}-${j}`;
          const fill = mother.has(k) ? C.orange : father.has(k) ? C.eggplant : '#EBCDE5';
          return <circle key={k} cx={cx + 2} cy={cy} r={mother.has(k) || father.has(k) ? 7 : 4.4} fill={fill} />;
        }),
      )}
    </g>
  );
}

function Messages({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="2" y="10" width="132" height="76" rx="30" fill={C.eggplant} opacity=".13" />
      <path d="M26 74 L14 100 L50 80Z" fill={C.cream} />
      <rect x="0" y="0" width="132" height="76" rx="30" fill={C.cream} />
      <Heart x={66} y={40} s={1.5} fill={C.orange} />
      <rect x="62" y="92" width="92" height="52" rx="22" fill={C.eggplant} transform="translate(0 0)" />
      <path d="M128 136 L146 154 L116 140Z" fill={C.eggplant} />
      <circle cx="88" cy="118" r="4.5" fill={C.cream} />
      <circle cx="108" cy="118" r="4.5" fill={C.cream} />
      <circle cx="128" cy="118" r="4.5" fill={C.cream} />
    </g>
  );
}

const hill = (top: number[], bottom = 900) =>
  `M-900 ${top[0]} C-300 ${top[1]} 160 ${top[2]} 420 ${top[3]} C700 ${top[4]} 900 ${top[5]} 1300 ${top[6]} C1700 ${top[7]} 2000 ${top[8]} 2100 ${top[9]} V${bottom} H-900Z`;

export function OnboardingScene() {
  return (
    <>
      {/* wide layout */}
      <svg className="onb-svg onb-svg-wide" viewBox="0 0 1200 760" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
        <circle cx="150" cy="250" r="170" fill={C.orchidLight} opacity=".5" />
        <circle cx="1070" cy="200" r="104" fill={C.orangeSoft} opacity=".3" />
        <Cloud x={380} y={96} />
        <Cloud x={820} y={64} s={0.8} />
        <Sparkle x={150} y={120} s={0.9} />
        <Sparkle x={1110} y={380} s={0.7} />
        <Sparkle x={420} y={330} s={0.6} />
        <g className="onb-float"><Calendar x={226} y={186} /></g>
        <g className="onb-float onb-float-b"><Messages x={898} y={176} /></g>

        <path d={hill([600, 540, 556, 594, 636, 560, 556, 556, 596, 604])} fill={C.hillBack} />
        <Bush x={330} y={640} s={0.9} fill={C.orchidDeep} />
        <Bush x={880} y={640} s={0.8} fill={C.orchidDeep} />
        <Plant x={46} y={650} s={0.9} />
        <Plant x={1156} y={650} s={0.9} flip />
        <House x={170} y={664} body={C.orange} door={C.cream} glass={C.cream} />
        <House x={1030} y={664} flip body={C.eggplant} door="#E7B0DE" glass={C.cream} />

        <path d={hill([668, 650, 664, 660, 706, 690, 662, 652, 664, 672])} fill={C.hillFront} />
        <path d="M170 676 C262 730 420 746 556 726" stroke={C.cream} strokeWidth="5" strokeLinecap="round" strokeDasharray="1 13" fill="none" />
        <path d="M1030 676 C938 730 780 746 644 726" stroke={C.cream} strokeWidth="5" strokeLinecap="round" strokeDasharray="1 13" fill="none" />
        <Child x={600} y={726} s={0.98} />
        <Plant x={-20} y={800} s={1.7} tones={[C.eggplant, C.plum, C.orchidDeep]} />
        <Plant x={1220} y={800} s={1.7} flip tones={[C.eggplant, C.plum, C.orchidDeep]} />
      </svg>

      {/* tall layout (phones) */}
      <svg className="onb-svg onb-svg-tall" viewBox="0 0 420 520" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
        <circle cx="60" cy="170" r="110" fill={C.orchidLight} opacity=".5" />
        <circle cx="370" cy="120" r="64" fill={C.orangeSoft} opacity=".3" />
        <Cloud x={250} y={44} s={0.7} />
        <Sparkle x={40} y={70} s={0.7} />
        <Sparkle x={388} y={260} s={0.6} />
        <g className="onb-float"><Calendar x={22} y={150} s={0.72} /></g>
        <g className="onb-float onb-float-b"><Messages x={280} y={150} s={0.7} /></g>

        <path d="M-300 372 C-100 340 100 340 210 362 C320 340 500 340 720 372 V700 H-300Z" fill={C.hillBack} />
        <Bush x={196} y={420} s={0.55} fill={C.orchidDeep} />
        <Plant x={14} y={430} s={0.55} />
        <Plant x={406} y={430} s={0.55} flip />
        <House x={106} y={436} s={0.6} body={C.orange} door={C.cream} glass={C.cream} />
        <House x={314} y={436} s={0.6} flip body={C.eggplant} door="#E7B0DE" glass={C.cream} />

        <path d="M-300 450 C-100 436 100 442 210 452 C320 442 500 436 720 450 V700 H-300Z" fill={C.hillFront} />
        <path d="M106 444 C130 478 170 488 190 484" stroke={C.cream} strokeWidth="4" strokeLinecap="round" strokeDasharray="1 11" fill="none" />
        <path d="M314 444 C290 478 250 488 230 484" stroke={C.cream} strokeWidth="4" strokeLinecap="round" strokeDasharray="1 11" fill="none" />
        <Child x={210} y={494} s={0.72} />
        <Plant x={-6} y={540} s={1.05} tones={[C.eggplant, C.plum, C.orchidDeep]} />
        <Plant x={426} y={540} s={1.05} flip tones={[C.eggplant, C.plum, C.orchidDeep]} />
      </svg>
    </>
  );
}
