export default function AdminHeader({
  counts,
}: {
  counts: { pending: number; approved: number; hidden: number }
}) {
  return (
    <header style={{ marginBottom: 48 }}>
      <h1 style={{ fontSize: 32 }}>Admin Dashboard</h1>
      <p style={{ opacity: 0.6, marginTop: 8 }}>
        Moderate stories before they enter the archive.
      </p>

      <p style={{ marginTop: 16, fontSize: 14, opacity: 0.8 }}>
        Pending: {counts.pending} · Approved: {counts.approved} · Hidden:{" "}
        {counts.hidden}
      </p>
    </header>
  )
}
