import { useState, FormEvent } from "react";
import byteframeLogo from "@/assets/byteframe-logo.png";
import PolicyModal from "@/components/PolicyModal";

const Index = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [policyModal, setPolicyModal] = useState<"privacy" | "terms" | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="dark">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-md border-b border-[#424754]/20">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <button onClick={() => scrollTo("hero")} className="flex items-center">
            <img src={byteframeLogo} alt="Byteframe" className="h-8 w-auto" style={{ background: 'transparent' }} />
          </button>
          <div className="hidden md:flex items-center gap-8 font-headline font-medium tracking-tight">
            <button onClick={() => scrollTo("services")} className="text-[#dae2fd]/70 hover:text-[#adc6ff] transition-colors">Services</button>
            <button onClick={() => scrollTo("portfolio")} className="text-[#dae2fd]/70 hover:text-[#adc6ff] transition-colors">Portfolio</button>
            <button onClick={() => scrollTo("about")} className="text-[#dae2fd]/70 hover:text-[#adc6ff] transition-colors">About</button>
            <button onClick={() => scrollTo("booking")} className="text-[#dae2fd]/70 hover:text-[#adc6ff] transition-colors">Booking</button>
          </div>
          <button
            onClick={() => scrollTo("booking")}
            className="bg-[#adc6ff] text-[#002e6a] px-6 py-2 rounded-lg font-headline font-bold text-sm hover:brightness-110 active:scale-95 duration-150 transition-all"
          >
            Book a Call
          </button>
        </div>
      </nav>

      <main className="relative min-h-screen pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative px-8 pt-24 pb-32 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#adc6ff]/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#304671]/20 blur-[100px] rounded-full"></div>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col items-start space-y-8">
              <span className="text-[#adc6ff] font-headline font-extrabold tracking-[0.2em] text-xs uppercase bg-[#4d8eff]/10 px-3 py-1 rounded">
                Digital Architecture Studio
              </span>
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-[#dae2fd]">
                Elevating Businesses Through <span className="text-[#adc6ff]">Dynamic Digital Architectures.</span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-[#c2c6d6] font-light leading-relaxed">
                Malaysia-based designer delivering modern, scalable web and system solutions globally. We bridge the gap between architectural precision and technical excellence.
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
                  <img alt="Technical Background" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPUNRdryRk06THfGMHWpfSMDWRTgec2WbBTyNh0OKFNdSHON3WBxWLZP1f8H8q5UvATwULLlZclPE_HFh4dNj2FkoJ2ZOtlD61Hza7qxAhSExS4fL7bNn-zu-tTVZSejJf8kBpL9GvT9Ujkj1OXzBm2UqzIrGkC6yK201mZ8RQhwHdSYpHk_p1NCpEBQH945apvhKm-yuKw66uRZifXIze_bCHo7DHuEsWwDKTu84qCkygnpg3lDvxmrAL824GGR6yiXFAJTHGmZii" />
                </div>
                <div className="relative z-20 space-y-4">
                  <div className="h-1 w-12 bg-[#adc6ff]"></div>
                  <h3 className="font-headline font-bold text-2xl text-[#dae2fd]">Precision in Every Byte.</h3>
                  <p className="text-sm text-[#c2c6d6]">Systems designed to scale from MVP to enterprise-grade infrastructures with seamless aesthetics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#131b2e] py-16">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "50+", label: "Projects Shipped" },
              { val: "12", label: "Global Markets" },
              { val: "99%", label: "Uptime Rating" },
              { val: "4.9/5", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <p className="text-[#adc6ff] font-headline font-extrabold text-4xl">{s.val}</p>
                <p className="text-xs uppercase tracking-widest text-[#c2c6d6] font-body">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-8 py-24 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline font-bold text-4xl tracking-tight text-[#dae2fd] mb-4">Architectural Approach</h2>
            <p className="text-[#c2c6d6] max-w-xl">We don't just build websites. We engineer digital environments that facilitate growth and brand authority.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 bg-[#222a3d] p-8 flex flex-col justify-between group cursor-default transition-all duration-300">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-[#adc6ff] text-4xl">architecture</span>
                <h3 className="text-2xl font-headline font-bold text-[#dae2fd]">Web Systems Design</h3>
                <p className="text-[#c2c6d6] max-w-md">Scalable, high-performance web applications built with React, Tailwind, and robust backend architectures.</p>
              </div>
            </div>
            <div className="bg-[#4d8eff] p-8 flex flex-col justify-between text-[#00285d]">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-[#00285d] text-4xl">brush</span>
                <h3 className="text-2xl font-headline font-bold">UX Audit</h3>
                <p className="text-[#00285d]/80 text-sm">A deep dive into your product's user flow to identify friction points and conversion leaks.</p>
              </div>
              <div className="w-full h-px bg-[#00285d]/20"></div>
            </div>
            <div className="bg-[#171f33] p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-[#adc6ff] text-4xl">cloud_done</span>
                <h3 className="text-2xl font-headline font-bold text-[#dae2fd]">Modern SaaS</h3>
                <p className="text-[#c2c6d6] text-sm">Specializing in multi-tenant architectures and data-heavy dashboards.</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-[#060e20] border border-[#424754]/10 p-8 flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-headline font-bold text-[#dae2fd]">Brand Identity</h3>
                <p className="text-[#c2c6d6] text-sm">Visual languages for the digital-first era.</p>
              </div>
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full border-2 border-[#0b1326] bg-[#222a3d] flex items-center justify-center font-bold text-xs text-[#dae2fd]">BF</div>
                <div className="w-12 h-12 rounded-full border-2 border-[#0b1326] bg-[#4d8eff] flex items-center justify-center font-bold text-xs text-[#00285d]">UI</div>
                <div className="w-12 h-12 rounded-full border-2 border-[#0b1326] bg-[#304671] flex items-center justify-center font-bold text-xs text-[#dae2fd]">DX</div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio / About Section */}
        <section id="portfolio" className="px-8 py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
            <div className="md:col-span-7 aspect-video relative overflow-hidden bg-[#2d3449]">
              <img
                alt="Digital design process visualization"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9VwcY3p5nlb7QkO6dcEJ5C6dAbAXThK8LWOuPERmd2lqAoKk_3tUKGL2_NC3bL-9KKvkC4vUYCtYnIJNZrk5cDWRcF9qszwmqo0H8ag3pNBihLZVaBK3rFfTWGg4H6Red-0b9LOkegr0dysAMGwStXy0JcEGSGXbGPOw9YdO-m0K1_Et3BpLaxAXr_CLk75g2oa-ZokxgGbUL5_KbLvQswm2VyyKf13T6R_hnd-lT8ArChRO4EDKAkv8RSEIyFYLXDOwCLQOYiBER"
              />
            </div>
            <div id="about" className="md:col-span-5 md:-ml-24 z-10 p-12 bg-[#222a3d] border-l-4 border-[#adc6ff] shadow-2xl">
              <h4 className="text-3xl font-headline font-extrabold text-[#dae2fd] mb-6 leading-tight">Ready to architect your digital presence?</h4>
              <p className="text-[#c2c6d6] mb-8 text-lg">Our team is ready to translate your vision into a high-performance digital asset.</p>
              <button
                onClick={() => scrollTo("booking")}
                className="w-full py-4 bg-[#adc6ff] text-[#002e6a] font-headline font-extrabold uppercase tracking-widest text-sm hover:bg-[#4d8eff] transition-colors"
              >
                Initiate Project
              </button>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="px-6 pt-32 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[#adc6ff] font-headline font-extrabold uppercase tracking-[0.2em] text-xs mb-4">Inquiry System</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-[#dae2fd] leading-none tracking-tighter mb-8">Book a Call</h2>
              <p className="text-lg text-[#c2c6d6] max-w-md leading-relaxed mb-12">
                Let's discuss your digital architecture. Select a slot to initiate a technical audit and discovery session for your next project.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#131b2e] border border-[#424754]/10">
                  <span className="material-symbols-outlined text-[#adc6ff]">chat_bubble</span>
                  <div>
                    <p className="font-headline font-bold text-[#dae2fd]">Free Consultation</p>
                    <p className="text-sm text-[#c2c6d6]">We'll discuss your needs and recommend the best solution for your business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#131b2e] border border-[#424754]/10">
                  <span className="material-symbols-outlined text-[#adc6ff]">bolt</span>
                  <div>
                    <p className="font-headline font-bold text-[#dae2fd]">Quick Turnaround</p>
                    <p className="text-sm text-[#c2c6d6]">Most projects are completed within 2–3 weeks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#131b2e] p-8 md:p-12 rounded-xl relative overflow-hidden">
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
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">Name</label>
                        <input required className="w-full bg-[#171f33] border-0 border-b-2 border-[#424754]/30 py-4 px-0 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300" placeholder="John Architect" type="text" />
                      </div>
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">Email</label>
                        <input required className="w-full bg-[#171f33] border-0 border-b-2 border-[#424754]/30 py-4 px-0 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300" placeholder="john@studio.com" type="email" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">Service Type</label>
                        <div className="relative">
                          <select className="w-full appearance-none bg-[#171f33] border-0 border-b-2 border-[#424754]/30 py-4 px-0 text-[#dae2fd] focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300">
                            <option>Booking System</option>
                            <option>Brand Website</option>
                            <option>Product Catalogue</option>
                            <option>Automation System</option>
                            <option>E-commerce / Sales Page</option>
                            <option>Event Registration</option>
                            <option>Other</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-0 top-4 text-[#c2c6d6] pointer-events-none">expand_more</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">WhatsApp Number</label>
                        <input required className="w-full bg-[#171f33] border-0 border-b-2 border-[#424754]/30 py-4 px-0 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300" placeholder="+60 12-345 6789" type="tel" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">Message</label>
                      <textarea className="w-full bg-[#171f33] border-0 border-b-2 border-[#424754]/30 py-4 px-0 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300 resize-none" placeholder="Briefly describe your project goals..." rows={4}></textarea>
                    </div>
                    <div className="pt-4">
                      <button type="submit" className="group relative w-full md:w-auto overflow-hidden bg-[#adc6ff] px-10 py-5 rounded-lg text-[#002e6a] font-headline font-extrabold text-sm tracking-widest uppercase flex items-center justify-center gap-3 active:scale-95 transition-all duration-200">
                        <span>Send Inquiry</span>
                        <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Stats */}
        <section className="bg-[#131b2e] py-20 border-t border-[#424754]/10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "24h", label: "Response Time" },
              { val: "100+", label: "Prototypes Delivered" },
              { val: "Global", label: "Client Network" },
              { val: "Bespoke", label: "Architecture" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-headline font-extrabold text-[#adc6ff] mb-2">{s.val}</p>
                <p className="text-xs uppercase tracking-widest font-bold text-[#c2c6d6]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 bg-[#0b1326] border-t border-[#424754]/10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
          <button onClick={() => scrollTo("hero")} className="flex items-center">
            <img src={byteframeLogo} alt="Byteframe" className="h-6 w-auto" style={{ background: 'transparent' }} />
          </button>
          <div className="flex flex-wrap justify-center gap-8 font-body text-sm text-[#dae2fd]/60">
            <button onClick={() => setPolicyModal("privacy")} className="hover:text-[#adc6ff] transition-colors">Privacy Policy</button>
            <button onClick={() => setPolicyModal("terms")} className="hover:text-[#adc6ff] transition-colors">Terms of Service</button>
            <a className="hover:text-[#adc6ff] transition-colors" href="mailto:hello@byteframe.studio">Email</a>
            {/* Facebook icon replacing LinkedIn */}
            <a className="hover:text-[#adc6ff] transition-colors flex items-center gap-1" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
          </div>
          <div className="font-body text-sm text-[#dae2fd]/60">
            © 2024 Byteframe Studio. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Policy Modals */}
      <PolicyModal
        isOpen={policyModal === "privacy"}
        onClose={() => setPolicyModal(null)}
        title="Privacy Policy"
      />
      <PolicyModal
        isOpen={policyModal === "terms"}
        onClose={() => setPolicyModal(null)}
        title="Terms of Service"
      />
    </div>
  );
};

export default Index;
