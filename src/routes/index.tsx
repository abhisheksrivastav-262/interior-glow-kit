import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Menu, X,
  ChefHat, BedDouble, Sofa, Package, Shirt, Lightbulb, Building2, Home,
  ShieldCheck, Sparkles, Wrench, IndianRupee, Clock, Layers, Star, ArrowRight,
} from "lucide-react";

import hero from "../assets/hero.jpg";
import kitchen from "../assets/kitchen.jpg";
import bedroom from "../assets/bedroom.jpg";
import living from "../assets/living.jpg";
import wardrobe from "../assets/wardrobe.jpg";
import ceiling from "../assets/ceiling.jpg";
import office from "../assets/office.jpg";
import dining from "../assets/dining.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "9970377410";
const EMAIL = "hindlalvishwakarma73@gmail.com";
const WHATSAPP = `https://wa.me/91${PHONE}`;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-6");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "#about"], ["Services", "#services"], ["Portfolio", "#portfolio"],
    ["Process", "#process"], ["Contact", "#contact"],
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "glass py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-baseline gap-2 font-display text-2xl tracking-wide">
          <span className="text-gradient-gold font-semibold">Luxury</span>
          <span className="text-foreground/90">Interior</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-foreground/80 transition-colors hover:text-[color:var(--gold)]">{l}</a>
          ))}
          <a href={`tel:${PHONE}`} className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:scale-105">
            Call Now
          </a>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="glass mx-6 mt-3 rounded-2xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-foreground/90">{l}</a>
            ))}
            <a href={`tel:${PHONE}`} className="rounded-full bg-gradient-gold px-5 py-2 text-center text-sm font-medium text-primary-foreground">Call Now</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={hero}
        alt="Luxurious modern living room with warm ambient lighting and premium finishes"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-[color:var(--gold)] animate-fade-in">
            <span className="h-px w-10 bg-[color:var(--gold)]" />
            Naigaon • Vasai
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-7xl md:text-8xl animate-fade-up">
            <span className="block">Luxury</span>
            <span className="block text-gradient-gold italic">Interior</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/80 sm:text-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Transforming spaces into luxury living — premium interior solutions for homes & commercial spaces.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 font-medium text-primary-foreground shadow-gold transition-transform hover:scale-105">
              <Phone size={18} /> Call Now
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-8 py-4 font-medium text-foreground backdrop-blur transition-colors hover:bg-[color:var(--gold)]/10">
              Get Free Quote <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in text-xs uppercase tracking-[0.3em] text-foreground/50">
        Scroll ↓
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div data-reveal className="mx-auto mb-16 max-w-2xl text-center opacity-0 translate-y-6 transition-all duration-700">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">{eyebrow}</p>
      <h2 className="font-display text-4xl text-foreground sm:text-5xl">
        {title.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="text-gradient-gold italic">{title.split(" ").slice(-1)}</span>
      </h2>
      {sub && <p className="mt-5 text-foreground/70">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <div data-reveal className="relative opacity-0 translate-y-6 transition-all duration-700">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-gold opacity-20 blur-2xl" />
          <img src={dining} alt="Elegant dining area with marble table" width={1024} height={1280} loading="lazy" className="rounded-3xl object-cover shadow-elegant" />
        </div>
        <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">About Us</p>
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Crafting <span className="text-gradient-gold italic">timeless</span> spaces with modern soul.
          </h2>
          <p className="mt-6 text-foreground/75">
            Luxury Interior specializes in designing premium residential and commercial interiors with modern aesthetics,
            functional layouts and quality craftsmanship.
          </p>
          <p className="mt-4 text-foreground/75">
            Our goal is to deliver beautiful spaces that match our clients' lifestyle while maintaining superior quality
            and elegant design — from the first sketch to the final finish.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[["150+", "Projects"], ["10+", "Years"], ["100%", "Happy Clients"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-gradient-gold">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: ChefHat, title: "Modular Kitchen", desc: "Ergonomic layouts with premium finishes and smart storage." },
  { icon: BedDouble, title: "Luxury Bedroom", desc: "Restful sanctuaries with tailored panelling and ambient light." },
  { icon: Sofa, title: "Living Room", desc: "Elegant compositions that balance comfort and statement design." },
  { icon: Package, title: "Custom Furniture", desc: "Bespoke units built to your dimensions and material palette." },
  { icon: Shirt, title: "Wardrobes & Storage", desc: "Walk-ins, sliders and hinged systems with luxe hardware." },
  { icon: Lightbulb, title: "False Ceiling & Lighting", desc: "Layered lighting design and sculpted ceiling detailing." },
  { icon: Building2, title: "Commercial Projects", desc: "Offices, showrooms and hospitality — designed to perform." },
  { icon: Home, title: "Residential Projects", desc: "End-to-end turnkey interiors for apartments and villas." },
];

function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="What We Do" title="Our Services" sub="A full spectrum of interior craft — from a single wardrobe to a complete turnkey home." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 opacity-0 translate-y-6 transition-all duration-700 hover:-translate-y-1 hover:border-[color:var(--gold)]/50 hover:shadow-gold"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--gold)]/10 text-[color:var(--gold)] transition-transform group-hover:scale-110">
                <s.icon size={26} />
              </div>
              <h3 className="mb-2 font-display text-2xl text-foreground">{s.title}</h3>
              <p className="text-sm text-foreground/65">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: kitchen, alt: "Luxury modular kitchen with gold accents", span: "md:row-span-2" },
  { src: bedroom, alt: "Warm luxury bedroom with wooden panelling", span: "" },
  { src: living, alt: "Modern living room with chandelier", span: "" },
  { src: wardrobe, alt: "Walk-in wardrobe with brass hardware", span: "md:row-span-2" },
  { src: ceiling, alt: "False ceiling with cove lighting", span: "" },
  { src: office, alt: "Executive office interior", span: "" },
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Our Work" title="Selected Portfolio" sub="A glimpse into the spaces we've shaped — kitchens, bedrooms, wardrobes and beyond." />
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {gallery.map((g, i) => (
            <div
              key={i}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              className={`group relative overflow-hidden rounded-2xl opacity-0 translate-y-6 transition-all duration-700 ${g.span}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Project</p>
                <p className="mt-1 font-display text-xl text-foreground">{g.alt.split(" with")[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Sparkles, t: "Premium Materials" },
  { icon: Layers, t: "Customized Designs" },
  { icon: Wrench, t: "Experienced Craftsmanship" },
  { icon: IndianRupee, t: "Affordable Pricing" },
  { icon: Clock, t: "On-Time Delivery" },
  { icon: ShieldCheck, t: "End-to-End Solutions" },
];

function WhyUs() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Why Choose Us" title="Built on Craft & Trust" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.t}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="glass flex items-center gap-5 rounded-2xl p-6 opacity-0 translate-y-6 transition-all duration-700"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground">
                <r.icon size={22} />
              </div>
              <p className="font-display text-xl text-foreground">{r.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Consultation", d: "We listen to your vision, lifestyle and budget." },
  { n: "02", t: "Design Planning", d: "Detailed 3D layouts, materials and finish palette." },
  { n: "03", t: "Execution", d: "Skilled craftsmanship, monitored at every stage." },
  { n: "04", t: "Project Delivery", d: "Handover with quality checks and after-care." },
];

function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="How We Work" title="Our Design Process" />
        <div className="relative grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <div
              key={s.n}
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
              className="relative opacity-0 translate-y-6 transition-all duration-700"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--gold)]/50 bg-background font-display text-xl text-gradient-gold">
                {s.n}
              </div>
              <h3 className="text-center font-display text-2xl text-foreground">{s.t}</h3>
              <p className="mt-2 text-center text-sm text-foreground/65">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { n: "Priya S.", r: "Naigaon", q: "They transformed our 2BHK into something out of a magazine. The modular kitchen is stunning." },
  { n: "Rahul M.", r: "Vasai West", q: "Professional team, honest pricing and on-time delivery. Our wardrobe finish is flawless." },
  { n: "Ankita D.", r: "Vasai East", q: "The false ceiling and lighting completely changed the mood of our living room. Highly recommend." },
];

function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Kind Words" title="Client Testimonials" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.n}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className="rounded-2xl border border-border bg-card p-8 opacity-0 translate-y-6 transition-all duration-700"
            >
              <div className="mb-4 flex gap-1 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="font-display text-lg italic text-foreground/90">"{t.q}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-medium text-foreground">{t.n}</p>
                <p className="text-xs uppercase tracking-widest text-foreground/50">{t.r}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Get In Touch" title="Let's Build Something Beautiful" sub="Reach out for a free consultation — we'd love to hear about your space." />
        <div className="grid gap-8 lg:grid-cols-2">
          <div data-reveal className="glass rounded-3xl p-10 opacity-0 translate-y-6 transition-all duration-700">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Contact Person</p>
                <p className="mt-1 font-display text-2xl text-foreground">Hindlal Vishwakarma</p>
              </div>
              <div className="space-y-4 border-t border-border pt-6">
                <a href={`tel:${PHONE}`} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)] transition-colors group-hover:bg-gradient-gold group-hover:text-primary-foreground">
                    <Phone size={18} />
                  </span>
                  <span className="text-foreground/90 group-hover:text-[color:var(--gold)]">+91 {PHONE}</span>
                </a>
                <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)] transition-colors group-hover:bg-gradient-gold group-hover:text-primary-foreground">
                    <Mail size={18} />
                  </span>
                  <span className="break-all text-foreground/90 group-hover:text-[color:var(--gold)]">{EMAIL}</span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)]">
                    <MapPin size={18} />
                  </span>
                  <span className="text-foreground/90">Naigaon, Vasai</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-gold">
                  <Phone size={16} /> Call
                </a>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 px-5 py-2.5 text-sm text-foreground hover:bg-[color:var(--gold)]/10">
                  <Mail size={16} /> Email
                </a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 px-5 py-2.5 text-sm text-foreground hover:bg-[color:var(--gold)]/10">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div data-reveal className="overflow-hidden rounded-3xl border border-border opacity-0 translate-y-6 transition-all duration-700">
            <iframe
              title="Naigaon, Vasai map"
              src="https://www.google.com/maps?q=Naigaon,+Vasai&output=embed"
              className="h-full min-h-[400px] w-full grayscale-[0.6] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">
            <span className="text-gradient-gold">Luxury</span> Interior
          </p>
          <p className="mt-2 text-sm text-foreground/60">Naigaon • Vasai</p>
        </div>
        <div className="text-sm text-foreground/70">
          <p className="mb-2 font-medium text-foreground">Contact</p>
          <p>+91 {PHONE}</p>
          <p className="break-all">{EMAIL}</p>
        </div>
        <div>
          <p className="mb-3 font-medium text-foreground">Follow</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, MessageCircle].map((I, i) => (
              <a key={i} href={i === 2 ? WHATSAPP : "#"} target={i === 2 ? "_blank" : undefined} rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--gold)]/40 text-foreground/80 transition-all hover:bg-gradient-gold hover:text-primary-foreground">
                <I size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-foreground/50">© 2025 Luxury Interior. All Rights Reserved.</p>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold transition-transform hover:scale-110"
    >
      <MessageCircle size={24} />
      <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[color:var(--gold)]/40" />
    </a>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
