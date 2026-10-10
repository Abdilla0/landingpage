import Dashboard from "./Dashboard";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <h1>
          Your teaching,<br />
          <em>amplified by AI.</em>
        </h1>
        <p className="lead">
          TeachMate AI helps teachers turn curriculum, learning objectives, and teaching materials into high-quality
          lessons, quizzes, worksheets, and personalized learning activities — in minutes.
        </p>
        <div className="cta-row">
          <a href="#early-access" className="btn btn-primary">Join the early access →</a>
          <a href="#how-it-works" className="btn btn-ghost">See how it works</a>
        </div>
        <p className="muted small">Built for educators who want to spend less time preparing and more time teaching.</p>
      </div>
      <Dashboard />
    </section>
  );
}
