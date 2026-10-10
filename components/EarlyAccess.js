"use client";
import { useState } from "react";
import Reveal from "./Reveal";

export default function EarlyAccess() {
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // No backend yet: the email is NOT stored. Connect a service (e.g. a form provider or
    // your own API route) here before launch, then send the value of the email field.
    setDone(true);
  }

  return (
    <section id="early-access" className="container">
      <Reveal>
        <div className="cta-panel">
          <h2>Let AI handle the busywork.<br /><em>You focus on the students.</em></h2>
          <p className="lead">We&apos;re building TeachMate with teachers. Join the early access list and help shape the product.</p>
          {done ? (
            <p className="success" role="status">Thanks! Early access sign-ups aren&apos;t connected yet, so no email was saved. Check back soon.</p>
          ) : (
            <form onSubmit={onSubmit} className="signup">
              <label htmlFor="email" className="sr-only">Your email address</label>
              <input id="email" type="email" name="email" required placeholder="Your email address" autoComplete="email" />
              <button type="submit" className="btn btn-light">Join early access →</button>
            </form>
          )}
          <p className="small fade">No spam. Just product updates and early access.</p>
        </div>
      </Reveal>
    </section>
  );
}
