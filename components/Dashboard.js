const cards = [
  { k: "Lesson plan", t: "Newton's Laws of Motion", m: "45 min · 3 sections" },
  { k: "Quiz", t: "10-question quiz", m: "Mixed format · answer key" },
  { k: "Differentiated task", t: "Three levels of support", m: "Foundation · Core · Stretch" },
];

// Static product mockup — not a working app.
export default function Dashboard() {
  return (
    <div className="dash" role="img" aria-label="Mockup of the TeachMate AI app generating a lesson on Newton's Laws">
      <div className="dash-bar">
        <i /><i /><i />
        <span>TeachMate AI</span>
        <small>Preview</small>
      </div>
      <div className="dash-body" aria-hidden="true">
        <p className="dash-hi">Good morning</p>
        <h3>What are you teaching today?</h3>
        <div className="prompt">
          Create a 45-minute lesson on Newton&apos;s Laws for Grade 10, with a short quiz and differentiated activities.
          <span className="caret" />
        </div>
        <div className="prompt-foot">
          <span className="chip">Grade 10</span>
          <span className="chip">Physics</span>
          <span className="gen">Generate lesson ✦</span>
        </div>
        <div className="gen-cards">
          {cards.map((c, i) => (
            <div className="gen-card" key={c.k} style={{ animationDelay: `${0.6 + i * 0.25}s` }}>
              <span className="chip chip-sage">{c.k}</span>
              <strong>{c.t}</strong>
              <small>{c.m}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
