"use client";
import { useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav" id="top">
      <div className="container nav-inner">
        <Logo />
        <nav id="site-nav" className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          <a href="#features" onClick={close}>Features</a>
          <a href="#how-it-works" onClick={close}>How it works</a>
          <a href="#early-access" onClick={close}>Early Access</a>
          <a href="#early-access" className="btn btn-sm btn-primary nav-cta" onClick={close}>Get early access →</a>
        </nav>
        <button className="nav-toggle" aria-expanded={open} aria-controls="site-nav" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}
