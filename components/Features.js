import Reveal from "./Reveal";

const features = [
  ["✦", "Lesson Plans", "Turn learning objectives and teaching materials into structured, classroom-ready lesson plans."],
  ["☷", "Quizzes & Assessments", "Create quizzes, homework, discussion questions, and assessment materials in seconds."],
  ["◈", "Differentiate Learning", "Adapt explanations and activities for different student levels without creating everything from scratch."],
  ["↗", "Work With Your Materials", "Give the assistant your curriculum, notes, or documents so generated content stays grounded in your teaching context."],
];

export default function Features() {
  return (
    <section id="features" className="section container">
      <Reveal className="section-head">
        <p className="label">Less time preparing</p>
        <h2>A teaching assistant that <em>works with you.</em></h2>
        <p className="lead">TeachMate is designed to support the work teachers already do — not replace the teacher.</p>
      </Reveal>
      <div className="feature-grid">
        {features.map(([icon, title, text], i) => (
          <Reveal key={title} delay={i * 70}>
            <article className="card feature">
              <span className="icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
