"use client"

import { useEffect, useState } from "react"
import AdminHeader from "@/ui/components/admin/AdminHeader"
import AdminTabs from "@/ui/components/admin/AdminTabs"
import AdminStoryList from "@/ui/components/admin/AdminStoryList"

export default function AdminPage() {
  const [tab, setTab] = useState("pending")
  const [counts, setCounts] = useState({
    pending: 0,
    approved: 0,
    hidden: 0,
  })

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then((stories) => {
        setCounts({
          pending: stories.filter((s: any) => s.status === "pending").length,
          approved: stories.filter((s: any) => s.status === "approved").length,
          hidden: stories.filter((s: any) => s.status === "hidden").length,
        })
      })
  }, [tab])

  return (
    <section
      style={{
        padding: "120px 24px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <AdminHeader counts={counts} />
      <AdminTabs active={tab} onChange={setTab} />
      <AdminStoryList status={tab} />
    </section>
  )
}
