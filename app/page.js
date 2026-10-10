import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import EarlyAccess from "../components/EarlyAccess";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
