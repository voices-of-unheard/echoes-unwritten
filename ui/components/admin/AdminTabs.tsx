"use client"

export default function AdminTabs({
  active,
  onChange,
}: {
  active: string
  onChange: (tab: string) => void
}) {
  const tabs = ["pending", "approved", "hidden"]

  return (
    <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          style={{
            borderBottom:
              active === tab ? "2px solid white" : "2px solid transparent",
            opacity: active === tab ? 1 : 0.5,
            paddingBottom: 6,
            textTransform: "capitalize",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
