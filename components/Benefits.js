import Reveal from "./Reveal";

const items = [
  ["Minutes", "Instead of hours for first drafts"],
  ["One workspace", "For lessons, assessments & resources"],
  ["Your context", "At the center of every generation"],
];

export default function Benefits() {
  return (
    <section className="benefits container" aria-label="Benefits">
      <Reveal>
        <ul>
          {items.map(([h, p]) => (
            <li key={h}>
              <strong>{h}</strong>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
