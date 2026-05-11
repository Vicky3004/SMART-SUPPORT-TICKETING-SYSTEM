import { useEffect, useState } from "react";
import "./styles.css";

const API_URL = "/api/tickets";

const PRIORITY_CONFIG = {
  HIGH:   { label: "High",   color: "#E24B4A", bg: "#FCEBEB" },
  MEDIUM: { label: "Medium", color: "#BA7517", bg: "#FAEEDA" },
  LOW:    { label: "Low",    color: "#3B6D11", bg: "#EAF3DE" },
};

const STATUS_CONFIG = {
  OPEN:        { label: "Open",        color: "#185FA5", bg: "#E6F1FB" },
  IN_PROGRESS: { label: "In Progress", color: "#854F0B", bg: "#FAEEDA" },
  CLOSED:      { label: "Closed",      color: "#3B6D11", bg: "#EAF3DE" },
};

const AVATAR_COLORS = [
  { bg: "#EEEDFE", text: "#534AB7" },
  { bg: "#E1F5EE", text: "#0F6E56" },
  { bg: "#E6F1FB", text: "#185FA5" },
  { bg: "#FAEEDA", text: "#854F0B" },
  { bg: "#FBEAF0", text: "#993556" },
];

function Badge({ type, value }) {
  const config = type === "priority" ? PRIORITY_CONFIG : STATUS_CONFIG;
  const item = config[value] || { label: value, color: "#5F5E5A", bg: "#F1EFE8" };
  return (
    <span style={{
      background: item.bg, color: item.color, fontSize: 11, fontWeight: 600,
      padding: "3px 10px", borderRadius: 20, letterSpacing: "0.04em",
      textTransform: "uppercase", display: "inline-block", whiteSpace: "nowrap",
    }}>{item.label}</span>
  );
}

function TrainScene() {
  return (
    <div className="train-scene">
      <div className="train-sky">
        <span className="cloud c1">☁️</span>
        <span className="cloud c2">☁️</span>
        <span className="cloud c3">☁️</span>
      </div>
      <div className="train-ground">
        <div className="track">
          {Array.from({ length: 20 }).map((_, i) => <div key={i} className="sleeper" />)}
        </div>
        <div className="train-wrap">
          <div className="locomotive">
            <div className="loco-chimney">
              <span className="puff p1">💨</span>
              <span className="puff p2">💨</span>
            </div>
            <div className="loco-body">
              <div className="loco-window" />
              <div className="loco-light" />
            </div>
            <div className="loco-wheels">
              <span className="lw" /><span className="lw big" /><span className="lw" />
            </div>
          </div>
          <div className="carriage c-blue-car">
            <div className="car-roof" />
            <div className="car-body">
              <div className="car-window" />
              <div className="car-window" />
              <div className="ticket-on-car">🎫</div>
            </div>
            <div className="car-wheels"><span className="cw" /><span className="cw" /></div>
          </div>
          <div className="carriage c-green-car">
            <div className="car-roof" />
            <div className="car-body">
              <div className="car-window" />
              <div className="car-window" />
              <div className="ticket-on-car">🎫</div>
            </div>
            <div className="car-wheels"><span className="cw" /><span className="cw" /></div>
          </div>
        </div>
        <div className="floating-tickets">
          {[
            { label: "#0042", bg: "#E6F1FB", color: "#185FA5", left: "5%",  delay: "0s",   dur: "4s"   },
            { label: "#0017", bg: "#EAF3DE", color: "#3B6D11", left: "25%", delay: "1.2s", dur: "5s"   },
            { label: "#0091", bg: "#FCEBEB", color: "#A32D2D", left: "55%", delay: "2.5s", dur: "3.5s" },
            { label: "#0058", bg: "#FAEEDA", color: "#854F0B", left: "75%", delay: "0.6s", dur: "4.5s" },
            { label: "#0033", bg: "#EEEDFE", color: "#534AB7", left: "42%", delay: "1.8s", dur: "5.5s" },
          ].map(t => (
            <div key={t.label} className="ft" style={{
              left: t.left, animationDelay: t.delay, animationDuration: t.dur,
              background: t.bg, color: t.color,
            }}>🎫 {t.label}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSection({ onNewTicket, ticketCount }) {
  return (
    <div className="hero">
      <div className="hero-text">
        <div className="hero-badge">🚂 Smart Support — All Aboard!</div>
        <h1 className="hero-title">
          Every Ticket<br />
          <span className="hero-accent">Finds Its Track.</span>
        </h1>
        <p className="hero-desc">
            Create, manage and resolve customer issues with speed and clarity.
         </p>
         <p className="hero-desc">
             Built by Vignesh Mahendran.
        </p>
        <div className="hero-actions">
          <button className="hero-cta" onClick={onNewTicket}>🎫 Create Ticket</button>
          <div className="hero-stat-pill">
            <span className="pulse-dot" />
            {ticketCount} active ticket{ticketCount !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
      <TrainScene />
      <div className="dev-strip">
        <span className="dev-track" />
        <a className="dev-label" href="https://www.linkedin.com/in/-vignesh-mahendran-/" target="_blank" rel="noreferrer">✦ Developed by <strong>Vignesh Mahendran</strong> ✦ Smart Support Ticketing System ✦</a>
        <span className="dev-track" />
      </div>
    </div>
  );
}

function StatsBar({ tickets }) {
  const stats = [
    { label: "Total",        value: tickets.length,                                          color: "#5F5E5A", emoji: "🎫" },
    { label: "Open",         value: tickets.filter(t => t.status === "OPEN").length,         color: "#185FA5", emoji: "📬" },
    { label: "In Progress",  value: tickets.filter(t => t.status === "IN_PROGRESS").length,  color: "#BA7517", emoji: "⚙️" },
    { label: "Closed",       value: tickets.filter(t => t.status === "CLOSED").length,       color: "#3B6D11", emoji: "✅" },
    { label: "High Priority",value: tickets.filter(t => t.priority === "HIGH").length,       color: "#E24B4A", emoji: "🔴" },
  ];
  return (
    <div className="stats-bar">
      {stats.map(s => (
        <div className="stat-item" key={s.label}>
          <span className="stat-emoji">{s.emoji}</span>
          <span className="stat-value" style={{ color: s.color }}>{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function TicketCard({ ticket, onStatusChange }) {
  const c = AVATAR_COLORS[(ticket.id || 0) % AVATAR_COLORS.length];
  const initials = (ticket.customerName || "??").split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="ticket-card">
      <div className="ticket-card-header">
        <div className="ticket-avatar" style={{ background: c.bg, color: c.text }}>{initials}</div>
        <div className="ticket-meta">
          <p className="ticket-name">{ticket.customerName || "Unknown"}</p>
          <p className="ticket-id">#{String(ticket.id || 0).padStart(4, "0")}</p>
        </div>
        <div className="ticket-badges">
          {ticket.priority && <Badge type="priority" value={ticket.priority} />}
          <Badge type="status" value={ticket.status} />
        </div>
      </div>
      <p className="ticket-issue">{ticket.issue || ticket.description || "—"}</p>
      <div className="ticket-footer">
        <select className="status-select" value={ticket.status} onChange={e => onStatusChange(ticket.id, e.target.value)}>
          <option value="OPEN">Open</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="CLOSED">Closed</option>
        </select>
        <span className="ticket-time">{ticket.createdAt ? new Date(ticket.createdAt).toLocaleDateString() : "Just now"}</span>
      </div>
    </div>
  );
}
function CreateModal({ onClose, onCreated }) {
  const [form, setForm] = useState({ customerName: "", issue: "", priority: "MEDIUM" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const update = f => e => setForm(p => ({ ...p, [f]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.customerName.trim() || !form.issue.trim()) { setError("Please fill in all fields."); return; }
    setSubmitting(true); setError("");
    try {
      const res = await fetch(API_URL, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, status: "OPEN" }),
      });
      if (!res.ok) throw new Error();
      onCreated(); onClose();
    } catch { setError("Failed to create ticket. Is the backend running?"); }
    finally { setSubmitting(false); }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-hero-strip">
          <span className="modal-train-run">🚂 ·····🎫····· 🚉</span>
        </div>
        <div className="modal-header">
          <h2>New Support Ticket</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {error && <div className="form-error">{error}</div>}
          <div className="form-group">
            <label className="field-label">Customer Name</label>
            <input className="field-input" placeholder="e.g. Wikki" value={form.customerName} onChange={update("customerName")} />
          </div>
          <div className="form-group">
            <label className="field-label">Issue Description</label>
            <textarea className="field-input field-textarea" placeholder="Describe the problem in detail…" value={form.issue} onChange={update("issue")} rows={4} />
          </div>
          <div className="form-group">
            <label className="field-label">Priority Level</label>
            <div className="priority-group">
              {["LOW", "MEDIUM", "HIGH"].map(p => (
                <button key={p} className={`priority-btn ${form.priority === p ? "selected" : ""}`}
                  style={form.priority === p ? { background: PRIORITY_CONFIG[p].bg, color: PRIORITY_CONFIG[p].color, borderColor: PRIORITY_CONFIG[p].color } : {}}
                  onClick={() => setForm(prev => ({ ...prev, priority: p }))}>
                  <span className="priority-dot" style={{ background: PRIORITY_CONFIG[p].color }} />
                  {p.charAt(0) + p.slice(1).toLowerCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-submit" onClick={handleSubmit} disabled={submitting}>
            {submitting ? "🚂 Dispatching…" : "🎫 Create Ticket"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("home");

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3200);
  };

  const loadTickets = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error();
      setTickets(await res.json());
    } catch { showToast("Could not reach the server.", "error"); }
    finally { setLoading(false); }
  };

  useEffect(() => { loadTickets(); }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
      setTickets(prev => prev.map(t => t.id === id ? { ...t, status } : t));
      showToast("✅ Status updated");
    } catch { showToast("Failed to update", "error"); }
  };

  const navItems = [
    { key: "ALL",        label: "All Tickets",  color: "#888780" },
    { key: "OPEN",       label: "Open",          color: "#185FA5" },
    { key: "IN_PROGRESS",label: "In Progress",   color: "#BA7517" },
    { key: "CLOSED",     label: "Closed",        color: "#3B6D11" },
  ];

  const filtered = tickets
    .filter(t => filter === "ALL" || t.status === filter)
    .filter(t => !search.trim() ||
      (t.customerName || "").toLowerCase().includes(search.toLowerCase()) ||
      (t.issue || "").toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">🚂</div>
          <div>
            <p className="brand-name">SupportDesk</p>
            <p className="brand-sub">by Vignesh Mahendran</p>
          </div>
        </div>

        <div className="sidebar-views">
          <button className={`nav-view-btn ${view === "home" ? "active" : ""}`} onClick={() => setView("home")}>🏠 Home</button>
          <button className={`nav-view-btn ${view === "tickets" ? "active" : ""}`} onClick={() => setView("tickets")}>🎫 All Tickets</button>
        </div>

        <p className="nav-section-label">Quick Filter</p>
        <nav className="sidebar-nav">
          {navItems.map(({ key, label, color }) => (
            <button key={key} className={`nav-item ${filter === key ? "active" : ""}`}
              onClick={() => { setFilter(key); setView("tickets"); }}>
              <span className="nav-dot" style={{ background: color }} />
              {label}
              <span className="nav-count">{key === "ALL" ? tickets.length : tickets.filter(t => t.status === key).length}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="new-ticket-btn" onClick={() => setShowModal(true)}>🎫 New Ticket</button>
          <a className="sidebar-credit" href="https://www.linkedin.com/in/-vignesh-mahendran-/" target="_blank" rel="noreferrer"><span className="li-icon">in</span> Vignesh Mahendran</a>
        </div>
      </aside>

      <main className="main">
        {view === "home" ? (
          <div className="home-view">
            <HeroSection onNewTicket={() => setShowModal(true)} ticketCount={tickets.filter(t => t.status !== "CLOSED").length} />
            <div className="home-section">
              <StatsBar tickets={tickets} />
              <div className="section-header">
                <h2 className="section-title">🎫 Recent Tickets</h2>
                <button className="view-all-btn" onClick={() => setView("tickets")}>View all →</button>
              </div>
              {loading ? (
                <div className="center-state"><div className="train-loader">🚂</div><p>Loading…</p></div>
              ) : tickets.length === 0 ? (
                <div className="center-state">
                  <div style={{ fontSize: 40 }}>📭</div>
                  <p className="state-title">No tickets yet</p>
                  <p className="state-text">Create your first support ticket</p>
                  <button className="header-btn" onClick={() => setShowModal(true)}>Create Ticket</button>
                </div>
              ) : (
                <div className="tickets-grid">
                  {tickets.slice(0, 6).map(t => <TicketCard key={t.id} ticket={t} onStatusChange={handleStatusChange} />)}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="tickets-view">
            <header className="main-header">
              <div>
                <h1 className="main-title">{navItems.find(n => n.key === filter)?.label || "All Tickets"}</h1>
                <p className="main-subtitle">{filtered.length} ticket{filtered.length !== 1 ? "s" : ""}</p>
              </div>
              <div className="header-right">
                <div className="search-box">
                  <span>🔍</span>
                  <input className="search-input" placeholder="Search tickets…" value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                <button className="header-btn" onClick={() => setShowModal(true)}>+ New Ticket</button>
              </div>
            </header>
            <StatsBar tickets={tickets} />
            {loading ? (
              <div className="center-state"><div className="train-loader">🚂</div><p className="state-text">Loading tickets…</p></div>
            ) : filtered.length === 0 ? (
              <div className="center-state">
                <div style={{ fontSize: 40 }}>📭</div>
                <p className="state-title">No tickets found</p>
                <p className="state-text">{search ? "Try a different search" : "Create a ticket to start"}</p>
                {!search && <button className="header-btn" onClick={() => setShowModal(true)}>Create Ticket</button>}
              </div>
            ) : (
              <div className="tickets-grid">
                {filtered.map(t => <TicketCard key={t.id} ticket={t} onStatusChange={handleStatusChange} />)}
              </div>
            )}
          </div>
        )}
      </main>

      {showModal && (
        <CreateModal onClose={() => setShowModal(false)} onCreated={() => { loadTickets(); showToast("🎫 Ticket dispatched!"); }} />
      )}

      {toast && <div className={`toast toast-${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}