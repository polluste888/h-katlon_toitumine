import type { FoodIconName, PenguinData } from "../game/types"

export function Icon({
  name,
  className = "size-5",
}: {
  name: "arrow" | "clock" | "wallet" | "check" | "book" | "play" | "spark"
  className?: string
}) {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 7.5h16v11H4z" />
        <path d="M4 9V6h13v3M15 13h5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 7" />,
    book: (
      <>
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23.5z" />
        <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H12v18h4.5a3.5 3.5 0 0 1 3.5 3.5z" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5z" />,
    spark: (
      <>
        <path d="m12 2 1.4 5.1L18 9l-4.6 1.9L12 16l-1.4-5.1L6 9l4.6-1.9z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

export function FoodIcon({
  name,
  color,
  className = "size-10",
}: {
  name: FoodIconName
  color: string
  className?: string
}) {
  const drawings: Record<FoodIconName, React.ReactNode> = {
    broccoli: (
      <>
        <path d="M25 45V29M18 45h14" />
        <circle cx="19" cy="22" r="9" fill="currentColor" opacity=".82" />
        <circle cx="30" cy="19" r="10" fill="currentColor" />
        <circle cx="39" cy="25" r="8" fill="currentColor" opacity=".72" />
      </>
    ),
    carrot: (
      <>
        <path
          d="m21 18 11 3-10 26c-2 5-7 3-7-1Z"
          fill="currentColor"
          opacity=".9"
        />
        <path d="M24 18c-1-7 3-11 7-13M27 18c5-5 10-5 14-3M25 17c-5-4-9-3-12-1" />
      </>
    ),
    rice: (
      <>
        <path
          d="M9 27h38c-2 14-9 21-19 21S11 41 9 27Z"
          fill="currentColor"
          opacity=".22"
        />
        <path d="M13 27c3-10 10-15 15-15 9 0 14 7 16 15" />
        <path d="m19 22 4-4m4 5 5-6m3 7 4-4" />
      </>
    ),
    bread: (
      <>
        <path
          d="M10 24c0-9 8-15 18-15s18 6 18 15v21H10Z"
          fill="currentColor"
          opacity=".22"
        />
        <path d="M19 17c2 3 4 5 7 6M29 14c2 3 4 5 7 6" />
      </>
    ),
    fish: (
      <>
        <path
          d="M8 29c9-13 24-16 35-5l7-7v22l-7-7C32 43 17 41 8 29Z"
          fill="currentColor"
          opacity=".25"
        />
        <circle cx="37" cy="27" r="2" fill="currentColor" />
        <path d="M17 29h12m-5-8 5 8-5 8" />
      </>
    ),
    beans: (
      <>
        <path
          d="M16 17c7-8 17-3 14 6-2 6-10 5-12 11-2 7-13 6-13-3 0-6 6-9 11-14Z"
          fill="currentColor"
          opacity=".72"
        />
        <path
          d="M40 21c8 2 9 13 1 16-6 2-9-5-15-4-7 1-10-9-2-13 5-3 10 0 16 1Z"
          fill="currentColor"
          opacity=".34"
        />
      </>
    ),
    yogurt: (
      <>
        <path d="M15 17h27l-3 31H18Z" fill="currentColor" opacity=".22" />
        <path d="M13 17h31M20 11h17M28 11V5" />
        <circle cx="28" cy="30" r="6" fill="currentColor" opacity=".65" />
      </>
    ),
    apple: (
      <>
        <path
          d="M29 18c15-8 23 5 17 19-5 13-13 12-18 8-5 4-13 5-18-8-6-14 2-27 17-19Z"
          fill="currentColor"
          opacity=".3"
        />
        <path d="M28 19c0-7 3-11 8-14M30 13c5-5 11-4 15-1" />
      </>
    ),
    berries: (
      <>
        <circle cx="19" cy="29" r="9" fill="currentColor" opacity=".55" />
        <circle cx="31" cy="25" r="10" fill="currentColor" opacity=".8" />
        <circle cx="38" cy="36" r="8" fill="currentColor" opacity=".42" />
        <circle cx="24" cy="40" r="9" fill="currentColor" opacity=".68" />
        <path d="M29 17c1-7 5-10 10-12" />
      </>
    ),
    energy: (
      <>
        <path d="M18 8h22l-2 42H20Z" fill="currentColor" opacity=".22" />
        <path d="m31 15-8 17h7l-3 13 10-18h-7Z" fill="currentColor" />
        <path d="M19 8h20" />
      </>
    ),
    cake: (
      <>
        <path d="m9 41 6-25 33 12-7 20Z" fill="currentColor" opacity=".25" />
        <path d="M15 16c6 5 10-3 15 3s11-1 18 9M13 27l32 12" />
        <circle cx="34" cy="12" r="4" fill="currentColor" />
      </>
    ),
    fries: (
      <>
        <path d="M18 20 16 7m10 14-1-16m9 17 4-15m3 18 6-12" />
        <path d="M12 22h35l-5 28H18Z" fill="currentColor" opacity=".27" />
        <path d="M17 29h27" />
      </>
    ),
    soda: (
      <>
        <path d="M18 14h24l-3 37H21Z" fill="currentColor" opacity=".24" />
        <path d="M16 14h28M24 7h19M35 7l-3 25" />
        <circle cx="29" cy="35" r="3" fill="currentColor" />
      </>
    ),
    candy: (
      <>
        <path d="m7 19 10 5v16L7 45l3-13Z" fill="currentColor" opacity=".35" />
        <rect
          x="17"
          y="21"
          width="24"
          height="22"
          rx="8"
          fill="currentColor"
          opacity=".68"
        />
        <path
          d="m41 24 10-5-3 13 3 13-10-5Z"
          fill="currentColor"
          opacity=".35"
        />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color }}
    >
      {drawings[name]}
    </svg>
  )
}

export function Penguin({
  data,
  compact = false,
  mood = "happy",
}: {
  data: PenguinData
  compact?: boolean
  mood?: "happy" | "sad"
}) {
  return (
    <svg
      aria-label={`Pingviin ${data.name}`}
      className={compact ? "h-24 w-20" : "h-full w-full"}
      viewBox="0 0 240 300"
      role="img"
    >
      <ellipse cx="120" cy="278" rx="74" ry="12" fill="#17383A" opacity=".1" />
      <g transform={mood === "sad" ? "translate(24 0) scale(.8 1)" : undefined}>
        <path
          d="M48 154C42 86 75 31 120 31s78 55 72 123c-5 73-30 125-72 125S53 227 48 154Z"
          fill="#183D42"
        />
        <ellipse cx="120" cy="169" rx="54" ry="82" fill="#F8F4E8" />
        <path
          d="M83 51c10-17 24-27 37-27s27 10 37 27c-10-5-23-8-37-8s-27 3-37 8Z"
          fill="#102D31"
        />
        <circle cx="96" cy="91" r="7" fill="#102D31" />
        <circle cx="144" cy="91" r="7" fill="#102D31" />
        <circle cx="98" cy="89" r="2" fill="white" />
        <circle cx="146" cy="89" r="2" fill="white" />
        <path d="m120 99 19 13-19 10-19-10Z" fill="#E5A645" />
        {mood === "sad" && (
          <>
            <path
              d="M86 77l17 6M154 77l-17 6"
              stroke="#102D31"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path d="M151 102c0 8-5 12-8 12s-6-4-4-8l7-11Z" fill="#74B8D1" />
          </>
        )}
        <path d="M56 127c-23 14-29 47-21 73 16-11 29-29 34-50" fill="#183D42" />
        <path d="M184 127c23 14 29 47 21 73-16-11-29-29-34-50" fill="#183D42" />
        <path
          d="M77 269c-10 2-21 9-25 17h55l2-13M163 269c10 2 21 9 25 17h-55l-2-13"
          fill="#E5A645"
        />
        {data.accessory === "scarf" && (
          <>
            <path
              d="M67 132c30 13 76 13 106 0l-4 25c-31 11-67 11-98 0Z"
              fill={data.color}
            />
            <path d="M153 151h22l-7 56-22-7Z" fill={data.color} />
          </>
        )}
        {data.accessory === "glasses" && (
          <>
            <circle
              cx="95"
              cy="92"
              r="20"
              fill="none"
              stroke={data.color}
              strokeWidth="7"
            />
            <circle
              cx="145"
              cy="92"
              r="20"
              fill="none"
              stroke={data.color}
              strokeWidth="7"
            />
            <path d="M115 92h10" stroke={data.color} strokeWidth="7" />
          </>
        )}
        {data.accessory === "cap" && (
          <>
            <path
              d="M73 55c7-31 28-44 54-40 21 3 34 20 39 43-30-10-62-11-93-3Z"
              fill={data.color}
            />
            <path
              d="M155 55c20-3 33 3 39 13-17 3-32 1-47-5Z"
              fill={data.color}
            />
          </>
        )}
        {data.accessory === "bow" && (
          <>
            <path d="m120 132-29-17-8 29 29 7Z" fill={data.color} />
            <path d="m120 132 29-17 8 29-29 7Z" fill={data.color} />
            <circle cx="120" cy="135" r="10" fill="#F2C15B" />
          </>
        )}
        {data.accessory === "headphones" && (
          <>
            <path
              d="M73 97c0-41 19-62 47-62s47 21 47 62"
              fill="none"
              stroke={data.color}
              strokeWidth="10"
            />
            <rect
              x="61"
              y="87"
              width="22"
              height="43"
              rx="11"
              fill={data.color}
            />
            <rect
              x="157"
              y="87"
              width="22"
              height="43"
              rx="11"
              fill={data.color}
            />
          </>
        )}
        {data.accessory === "bag" && (
          <>
            <path
              d="M167 157c26 5 37 22 33 49l-7 44h-47l-4-43c-3-26 4-45 25-50Z"
              fill={data.color}
            />
            <path
              d="M157 167c-3-26 19-30 27-8"
              fill="none"
              stroke="#F8F4E8"
              strokeWidth="6"
            />
          </>
        )}
      </g>
    </svg>
  )
}

export function FoodPyramid() {
  const levels = [
    {
      label: "Maiustused ja snäkid",
      note: "harva",
      width: "43%",
      color: "#d75f50",
    },
    {
      label: "Kala, muna, piimatooted",
      note: "mõõdukalt",
      width: "62%",
      color: "#d8a94d",
    },
    {
      label: "Täisteratooted",
      note: "iga päev",
      width: "78%",
      color: "#9bb36a",
    },
    {
      label: "Köögiviljad ja puuviljad",
      note: "sagedamini",
      width: "94%",
      color: "#4e8491",
    },
  ]

  return (
    <div className="rounded-[22px] bg-white p-3 text-[#183d42] shadow-xl sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="font-design-bold text-[10px] leading-tight sm:text-xs">
          TOIDUPÜRAMIID
        </p>
        <span className="rounded-full bg-[#e8f0ec] px-2 py-1 text-[8px] text-[#386e79] sm:text-[9px]">
          spikker
        </span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        {levels.map((level) => (
          <div
            key={level.label}
            className="rounded-md px-2 py-1.5 text-center text-white"
            style={{ width: level.width, backgroundColor: level.color }}
          >
            <span className="font-design-semibold block text-[8px] leading-tight sm:text-[9px]">
              {level.label}
            </span>
            <span className="block text-[7px] opacity-80 sm:text-[8px]">
              {level.note}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center text-[7px] uppercase tracking-[.08em] text-[#6f817f] sm:text-[8px]">
        Ülal harvem · all sagedamini
      </div>
      <div className="mt-2 rounded-lg bg-[#e8f0ec] px-2 py-1.5 text-center text-[8px] leading-tight text-[#386e79] sm:text-[9px]">
        Vesi on parim janukustutaja
      </div>
    </div>
  )
}
