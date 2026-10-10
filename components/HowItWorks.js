import Reveal from "./Reveal";

const steps = [
  ["01", "Give it your context", "Upload or describe your curriculum, materials, topic, grade, and learning objectives."],
  ["02", "Generate", "TeachMate creates a structured first draft tailored to your classroom."],
  ["03", "Review & teach", "Edit, customize, and use the content the way you want."],
];

const parts = [["01", "Warm-up"], ["02", "Concept exploration"], ["03", "Practice & assessment"]];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section container split">
      <Reveal>
        <p className="label">Simple by design</p>
        <h2>From idea to <em>classroom-ready</em> content.</h2>
        <p className="lead">
          You stay in control. TeachMate handles the repetitive first draft so you can spend your time reviewing,
          refining, and teaching.
        </p>
        <ol className="steps">
          {steps.map(([n, t, p]) => (
            <li key={n}>
              <span className="step-n">{n}</span>
              <div><h3>{t}</h3><p>{p}</p></div>
            </li>
          ))}
        </ol>
      </Reveal>
      <Reveal delay={120}>
        <div className="paper" role="img" aria-label="Example lesson plan: Newton's Laws of Motion, Grade 10 Physics, 45 minutes">
          <div aria-hidden="true">
            <p className="label">Lesson plan</p>
            <p className="paper-meta">Grade 10 · Physics</p>
            <h3>Newton&apos;s Laws of Motion</h3>
            <p className="muted">45 minutes · Inquiry-based lesson</p>
            <ul>
              {parts.map(([n, t]) => (
                <li key={n}><span>{n}</span>{t}<i /></li>
              ))}
            </ul>
            <span className="badge">✦ Generated with your teaching context</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
