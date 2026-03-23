import { useState, FormEvent } from "react";
import PolicyModal from "../components/PolicyModal";
import logoIcon from "../assets/byteframe-logo-icon.png";
import logoWord from "../assets/byteframe-logo-word.png";
import portfolioBooking from "@/assets/portfolio-booking.jpg";
import portfolioWebsite from "@/assets/portfolio-website.jpg";
import portfolioCatalogue from "@/assets/portfolio-catalogue.jpg";
import portfolioAutomation from "@/assets/portfolio-automation.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioRegistration from "@/assets/portfolio-registration.jpg";


const WEBHOOK_URL = "https://hook.eu1.make.com/2hu1fihrq4k2kedc28155d8647fsozx2";

const Index = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [policyModal, setPolicyModal] = useState<"privacy" | "terms" | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(false);

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok || res.status === 200) {
        setFormSubmitted(true);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setFormError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const services = [
    {
      icon: "architecture",
      title: "Web Design",
      desc: "A clean, professional website that represents your business and makes it easy for customers to find and contact you.",
    },
    {
      icon: "layers",
      title: "Web Apps",
      desc: "Custom tools built for your business — from order tracking to staff management. If you need it, we can build it.",
    },
    {
      icon: "event_available",
      title: "Booking Systems",
      desc: "Let your customers book appointments online, anytime. No more missed calls or WhatsApp back-and-forth.",
    },
  ];

  const portfolio = [
    { img: portfolioBooking, type: "Booking System", title: "Appointment Booking", desc: "Let customers schedule appointments online — no more back-and-forth on WhatsApp or phone calls." },
    { img: portfolioWebsite, type: "Brand Website", title: "Business Profile Site", desc: "A clean, professional website that tells people who you are, what you do, and how to reach you." },
    { img: portfolioCatalogue, type: "Product Catalogue", title: "Online Product Listing", desc: "Showcase your products online so customers can browse anytime, from anywhere." },
    { img: portfolioAutomation, type: "Automation System", title: "Business Automation", desc: "Save time by automating repetitive tasks — like sending quotations, collecting leads, or updating records." },
    { img: portfolioEcommerce, type: "E-commerce / Sales Page", title: "Online Sales Page", desc: "Sell your products online with a simple, fast page that turns visitors into buyers." },
    { img: portfolioRegistration, type: "Event Registration", title: "Sign-up & Registration", desc: "Collect sign-ups for your events, courses, or workshops — all organised in one page." },
  ];

  const advantages = [
    { icon: "check_circle", title: "Simple & Clear", desc: "We design for your customers, not for designers. Easy to use, easy to understand." },
    { icon: "speed", title: "Fast Turnaround", desc: "Most projects delivered within 2–3 weeks so you can get online quickly." },
    { icon: "trending_up", title: "Built to Convert", desc: "Every page is designed to get visitors to take action — call, book, or buy." },
    { icon: "support_agent", title: "Local Support", desc: "Based in Malaysia. We speak your language and understand your market." },
  ];

  return (
    <div className="dark bg-[#0b1326] text-[#dae2fd] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .font-headline { font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; font-family: 'Material Symbols Outlined'; }
      `}</style>

      {/* ========== NAVBAR ========== */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-md border-b border-[#424754]/20">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <img src={logoIcon} alt="Byteframe icon" className="h-9 w-auto" /><img src={logoWord} alt="Byteframe" className="h-5 w-auto" />
          </button>
          <div className="hidden md:flex items-center gap-8 font-headline font-medium tracking-tight">
            <button onClick={() => scrollTo("services")} className="text-[#dae2fd]/70 hover:text-[#adc6ff] transition-colors">Services</button>
            <button onClick={() => scrollTo("portfolio")} className="text-[#dae2fd]/70 hover:text-[#adc6ff] transition-colors">Portfolio</button>
            <button onClick={() => scrollTo("about")} className="text-[#dae2fd]/70 hover:text-[#adc6ff] transition-colors">About</button>
            <button onClick={() => scrollTo("booking")} className="text-[#dae2fd]/70 hover:text-[#adc6ff] transition-colors">Booking</button>
          </div>
          <button
            onClick={() => scrollTo("booking")}
            className="bg-[#adc6ff] text-[#002e6a] px-6 py-2 rounded-lg font-headline font-bold text-sm hover:brightness-110 active:scale-95 transition-all"
          >
            Book a Call
          </button>
        </div>
      </nav>

      <main className="relative pt-20">

        {/* ========== HERO ========== */}
        <section id="hero" className="relative px-8 pt-24 pb-32 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#adc6ff]/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#304671]/20 blur-[100px] rounded-full"></div>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col items-start space-y-8">
              <span className="text-[#adc6ff] font-headline font-extrabold tracking-[0.2em] text-xs uppercase bg-[#4d8eff]/10 px-3 py-1 rounded">
                Web & System Design Studio
              </span>
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-[#dae2fd]">
                Clean Websites. <span className="text-[#adc6ff]">Systems That Work.</span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-[#c2c6d6] font-light leading-relaxed">
                Web and system design for businesses that want to grow. Based in Malaysia, serving clients worldwide.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <button
                  onClick={() => scrollTo("booking")}
                  className="bg-[#adc6ff] text-[#002e6a] px-8 py-4 rounded font-headline font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2 group"
                >
                  Book a Call
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button
                  onClick={() => scrollTo("portfolio")}
                  className="bg-[#222a3d] text-[#dae2fd] px-8 py-4 rounded font-headline font-bold text-lg hover:bg-[#2d3449] transition-all border border-[#424754]/20"
                >
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 relative group">
              <div className="aspect-[4/5] bg-[#131b2e] border border-[#424754]/10 relative overflow-hidden p-6 flex flex-col justify-end">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent z-10"></div>
                  <img
                    alt="Dark minimal workspace"
                    className="w-full h-full object-cover grayscale brightness-80 group-hover:scale-105 transition-transform duration-700"
                    src="@/assets/softwaredevelope.jpg"
                  />
                </div>
                <div className="relative z-20 space-y-4">
                  <div className="h-1 w-12 bg-[#adc6ff]"></div>
                  <h3 className="font-headline font-bold text-2xl text-[#dae2fd]">Precision in Every Byte.</h3>
                  <p className="text-sm text-[#c2c6d6]">Clean, functional websites and systems built for real businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#131b2e] py-16">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "50+", label: "Projects Shipped" },
              { val: "2–3", label: "Weeks Delivery" },
              { val: "100%", label: "Client Ownership" },
              { val: "MY", label: "Based in Malaysia" },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <p className="text-[#adc6ff] font-headline font-extrabold text-4xl">{s.val}</p>
                <p className="text-xs uppercase tracking-widest text-[#c2c6d6]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== SERVICES ========== */}
        <section id="services" className="px-8 py-24 max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[#adc6ff] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">What We Do</span>
              <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-[#dae2fd]">Our Services</h2>
              <div className="w-24 h-1 bg-[#adc6ff] mt-8"></div>
            </div>
            <p className="text-[#c2c6d6] max-w-sm text-lg leading-relaxed">
              Simple solutions for businesses that want to get online and grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`group relative p-12 bg-[#131b2e] hover:bg-[#171f33] transition-all duration-300 ${i < 2 ? "border-r border-[#424754]/10" : ""}`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-12">
                    <span className="material-symbols-outlined text-[#adc6ff] text-4xl">{s.icon}</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-[#dae2fd] mb-4">{s.title}</h3>
                  <p className="text-[#c2c6d6] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== PORTFOLIO ========== */}
        <section id="portfolio" className="bg-[#131b2e] py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-[#adc6ff] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Our Work</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-[#dae2fd]">Portfolio</h2>
              <div className="w-24 h-1 bg-[#adc6ff] mt-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolio.map((p) => (
                <div key={p.title} className="bg-[#171f33] hover:bg-[#222a3d] transition-all duration-300">
                  <div className="aspect-video bg-[#222a3d] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <span className="text-xs font-headline font-bold tracking-widest uppercase text-[#adc6ff]">{p.type}</span>
                    <h3 className="text-xl font-headline font-bold text-[#dae2fd] mt-2 mb-3">{p.title}</h3>
                    <p className="text-[#c2c6d6] text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== ABOUT ========== */}
        <section id="about" className="px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-[#adc6ff] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Who We Are</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-[#dae2fd] max-w-3xl">
                We build websites and systems that work for your business.
              </h2>
              <div className="w-24 h-1 bg-[#adc6ff] mt-8"></div>
            </div>
            <p className="text-[#c2c6d6] text-xl leading-relaxed max-w-2xl mb-16">
              Byteframe is a web design studio based in Malaysia, helping small and medium businesses get online with clean, functional websites and simple digital systems. We work with local businesses across all industries — from clinics to retailers to service providers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((a) => (
                <div key={a.title} className="p-8 bg-[#131b2e] hover:bg-[#171f33] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#adc6ff] text-3xl mb-6 block">{a.icon}</span>
                  <h3 className="font-headline font-bold text-[#dae2fd] text-lg mb-3">{a.title}</h3>
                  <p className="text-[#c2c6d6] text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== BOOKING ========== */}
        <section id="booking" className="bg-[#131b2e] py-24 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[#adc6ff] font-headline font-extrabold uppercase tracking-[0.2em] text-xs mb-4">Get Started</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-[#dae2fd] leading-none tracking-tighter mb-8">
                Book a Free Consultation
              </h2>
              <p className="text-lg text-[#c2c6d6] max-w-md leading-relaxed mb-12">
                Tell us about your business and what you need. We'll get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#171f33] border border-[#424754]/10">
                  <span className="material-symbols-outlined text-[#adc6ff]">chat_bubble</span>
                  <div>
                    <p className="font-headline font-bold text-[#dae2fd]">Free Consultation</p>
                    <p className="text-sm text-[#c2c6d6]">We'll discuss your needs and recommend the best solution for your business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#171f33] border border-[#424754]/10">
                  <span className="material-symbols-outlined text-[#adc6ff]">bolt</span>
                  <div>
                    <p className="font-headline font-bold text-[#dae2fd]">Quick Turnaround</p>
                    <p className="text-sm text-[#c2c6d6]">Most projects are completed within 2–3 weeks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#171f33] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#adc6ff]/5 blur-[100px] rounded-full pointer-events-none"></div>
                {formSubmitted ? (
                  <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center space-y-6">
                    <span className="material-symbols-outlined text-[#adc6ff] text-6xl">check_circle</span>
                    <h3 className="text-2xl font-headline font-bold text-[#dae2fd]">Thanks! I'll get back to you within 24 hours.</h3>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-[#adc6ff] font-headline font-bold text-sm underline underline-offset-4 hover:brightness-110"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">Full Name *</label>
                        <input name="name" required className="w-full bg-[#131b2e] border-0 border-b-2 border-[#424754]/30 py-4 px-0 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300" placeholder="Your name" type="text" />
                      </div>
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">Email *</label>
                        <input name="email" required className="w-full bg-[#131b2e] border-0 border-b-2 border-[#424754]/30 py-4 px-0 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300" placeholder="you@example.com" type="email" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">Service Type *</label>
                        <div className="relative">
                          <select name="service" required className="w-full appearance-none bg-[#131b2e] border-0 border-b-2 border-[#424754]/30 py-4 px-0 text-[#dae2fd] focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300">
                            <option value="">Select a service</option>
                            <option>Booking System</option>
                            <option>Brand Website</option>
                            <option>Product Catalogue</option>
                            <option>Automation System</option>
                            <option>E-commerce / Sales Page</option>
                            <option>Event Registration</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">WhatsApp Number *</label>
                        <input name="whatsapp" required className="w-full bg-[#131b2e] border-0 border-b-2 border-[#424754]/30 py-4 px-0 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300" placeholder="+60 12-345 6789" type="tel" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">Message</label>
                      <textarea name="message" className="w-full bg-[#131b2e] border-0 border-b-2 border-[#424754]/30 py-4 px-0 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300 resize-none" placeholder="Tell us about your business and what you need..." rows={4}></textarea>
                    </div>
                    {formError && (
                      <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                    )}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group relative w-full md:w-auto overflow-hidden bg-[#adc6ff] px-10 py-5 text-[#002e6a] font-headline font-extrabold text-sm tracking-widest uppercase flex items-center justify-center gap-3 active:scale-95 transition-all duration-200 hover:brightness-110 disabled:opacity-60"
                      >
                        <span>{submitting ? "Sending..." : "Book a Call"}</span>
                        <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="w-full py-12 px-8 bg-[#0b1326] border-t border-[#424754]/10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
          <div>
            <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
              <img src={logoIcon} alt="Byteframe icon" className="h-8 w-auto" /><img src={logoWord} alt="Byteframe" className="h-4 w-auto" />
            </button>
            <p className="text-[#dae2fd]/40 text-xs mt-2">Clean websites. Systems that work.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[#dae2fd]/60">
            <button onClick={() => setPolicyModal("privacy")} className="hover:text-[#adc6ff] transition-colors">Privacy Policy</button>
            <button onClick={() => setPolicyModal("terms")} className="hover:text-[#adc6ff] transition-colors">Terms of Service</button>
            <a className="hover:text-[#adc6ff] transition-colors flex items-center gap-1" href="https://www.facebook.com/byteframer" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
          <p className="text-sm text-[#dae2fd]/40">© 2026 Byteframe. All rights reserved.</p>
        </div>
      </footer>

      {/* Policy Modals */}
      <PolicyModal isOpen={policyModal === "privacy"} onClose={() => setPolicyModal(null)} title="Privacy Policy" />
      <PolicyModal isOpen={policyModal === "terms"} onClose={() => setPolicyModal(null)} title="Terms of Service" />
    </div>
  );
};

export default Index;
