import { useState, useEffect, useRef } from "react";
import PolicyModal from "@/components/PolicyModal";
import logoIcon from "@/assets/byteframe-logo-icon.png";
import logoWord from "@/assets/byteframe-logo-word.png";
import softwareImg from "@/assets/softwaredevelope.jpg";
import portfolioBooking from "@/assets/portfolio-booking.png";
import portfolioWebsite from "@/assets/portfolio-website.png";
import portfolioCatalogue from "@/assets/portfolio-catalogue.png";
import portfolioAutomation from "@/assets/portfolio-automation.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.png";
import portfolioRegistration from "@/assets/portfolio-registration.png";
const WA_NUMBER = "60129463323";
const TG_USERNAME = "ChangChunHou";

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      about: "About",
      booking: "Booking",
      bookCall: "Book a Call",
    },
    hero: {
      badge: "Web & System Design Studio",
      headline1: "Clean Websites.",
      headline2: "Systems That Work.",
      sub: "Web and system design for businesses that want to grow. Based in Malaysia, serving clients worldwide.",
      bookCall: "Book a Call",
      viewPortfolio: "View Work",
      cardTitle: "Precision in Every Byte.",
      cardDesc: "Clean, functional websites and systems built for real businesses.",
    },
    stats: [
      { val: "50+", label: "Projects Shipped" },
      { val: "2–3", label: "Weeks Delivery" },
      { val: "100%", label: "Client Ownership" },
      { val: "MY", label: "Based in Malaysia" },
    ],
    services: {
      eyebrow: "What We Do",
      heading: "Our Services",
      sub: "Simple solutions for businesses that want to get online and grow.",
      items: [
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
      ],
    },
    portfolio: {
      eyebrow: "What We",
      heading: "Build",
      items: [
        { type: "Booking System", title: "Appointment Booking", desc: "Let customers schedule appointments online — no more back-and-forth on WhatsApp or phone calls." },
        { type: "Brand Website", title: "Business Profile Site", desc: "A clean, professional website that tells people who you are, what you do, and how to reach you." },
        { type: "Product Catalogue", title: "Online Product Listing", desc: "Showcase your products online so customers can browse anytime, from anywhere." },
        { type: "Automation System", title: "Business Automation", desc: "Save time by automating repetitive tasks — like sending quotations, collecting leads, or updating records." },
        { type: "E-commerce / Sales Page", title: "Online Sales Page", desc: "Sell your products online with a simple, fast page that turns visitors into buyers." },
        { type: "Event Registration", title: "Sign-up & Registration", desc: "Collect sign-ups for your events, courses, or workshops — all organised in one page." },
      ],
    },
    about: {
      eyebrow: "Who We Are",
      heading: "We build websites and systems that work for your business.",
      body: "Byteframe is a web design studio based in Malaysia, helping small and medium businesses get online with clean, functional websites and simple digital systems. We work with local businesses across all industries — from clinics to retailers to service providers.",
      advantages: [
        { icon: "check_circle", title: "Simple & Clear", desc: "We design for your customers, not for designers. Easy to use, easy to understand." },
        { icon: "speed", title: "Fast Turnaround", desc: "Most projects delivered within 2–3 weeks so you can get online quickly." },
        { icon: "trending_up", title: "Built to Convert", desc: "Every page is designed to get visitors to take action — call, book, or buy." },
        { icon: "support_agent", title: "Local Support", desc: "Based in Malaysia. We speak your language and understand your market." },
      ],
    },
    booking: {
      eyebrow: "Get Started",
      heading: "Book a Free Consultation",
      sub: "Tell us about your business and what you need. We'll get back to you within 24 hours.",
      features: [
        { icon: "chat_bubble", title: "Free Consultation", desc: "We'll discuss your needs and recommend the best solution for your business." },
        { icon: "bolt", title: "Quick Turnaround", desc: "Most projects are completed within 2–3 weeks." },
      ],
      form: {
        nameLbl: "Full Name *",
        namePh: "Your name",
        emailLbl: "Email *",
        emailPh: "you@example.com",
        serviceLbl: "Service Type *",
        servicePh: "Select a service",
        serviceOptions: [
          "Booking System",
          "Brand Website",
          "Product Catalogue",
          "Automation System",
          "E-commerce / Sales Page",
          "Event Registration",
          "Other",
        ],
        waLbl: "WhatsApp Number *",
        waPh: "+60 12-345 6789",
        msgLbl: "Message",
        msgPh: "Tell us about your business and what you need...",
        sendWa: "Send via WhatsApp",
        sendTg: "Send via Telegram",
      },
    },
    footer: {
      tagline: "Clean websites. Systems that work.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      facebook: "Facebook",
      copy: "© 2026 Byteframe. All rights reserved.",
    },
  },

  zh: {
    nav: {
      services: "服务",
      work: "作品",
      about: "关于",
      booking: "预约",
      bookCall: "预约通话",
    },
    hero: {
      badge: "网站与系统设计工作室",
      headline1: "简洁的网站。",
      headline2: "高效运作的系统。",
      sub: "为想要成长的企业提供网站与系统设计。总部在马来西亚，服务全球客户。",
      bookCall: "预约通话",
      viewPortfolio: "查看作品集",
      cardTitle: "每一字节都精准。",
      cardDesc: "为真实业务打造简洁、实用的网站与系统。",
    },
    stats: [
      { val: "50+", label: "已交付项目" },
      { val: "2–3", label: "周交付" },
      { val: "100%", label: "客户完全拥有" },
      { val: "MY", label: "总部在马来西亚" },
    ],
    services: {
      eyebrow: "我们的服务",
      heading: "服务项目",
      sub: "为想上线并成长的企业提供简单方案。",
      items: [
        {
          icon: "architecture",
          title: "网站设计",
          desc: "干净、专业的网站，呈现你的业务，也让客户更容易找到你并联系你。",
        },
        {
          icon: "layers",
          title: "网页应用",
          desc: "为你的业务量身开发工具，从订单追踪到员工管理。你需要什么，我们就开发什么。",
        },
        {
          icon: "event_available",
          title: "预约系统",
          desc: "让客户随时在线预约，不再错过来电，也不用在 WhatsApp 来回沟通。",
        },
      ],
    },
    portfolio: {
      eyebrow: "我们",
      heading: "打造",
      items: [
        { type: "预约系统", title: "预约安排", desc: "让客户在线安排预约，不再在 WhatsApp 或电话里来回沟通。" },
        { type: "品牌网站", title: "企业简介网站", desc: "干净、专业的网站，让人清楚知道你是谁、你做什么、怎样联系你。" },
        { type: "产品目录", title: "线上产品展示", desc: "在线展示你的产品，让客户随时随地浏览。" },
        { type: "自动化系统", title: "业务自动化", desc: "通过自动化重复工作来节省时间，例如发送报价、收集潜在客户、更新记录。" },
        { type: "电商／销售页面", title: "线上销售页面", desc: "用一个简单快速的页面在线销售产品，把访客转成买家。" },
        { type: "活动报名", title: "报名与注册", desc: "收集活动、课程或工作坊的报名资料，全部集中在一个页面。" },
      ],
    },
    about: {
      eyebrow: "我们是谁",
      heading: "我们为你的业务打造真正好用的网站与系统。",
      body: "Byteframe 是一家位于马来西亚的网站设计工作室，帮助中小企业通过简洁、实用的网站与简单的数字系统上线。我们与各行各业的本地企业合作，从诊所到零售商，再到服务业。",
      advantages: [
        { icon: "check_circle", title: "简单清晰", desc: "我们是为你的客户设计，不是为设计师设计。容易使用，也容易理解。" },
        { icon: "speed", title: "快速交付", desc: "大多数项目会在 2 到 3 周内交付，让你尽快上线。" },
        { icon: "trending_up", title: "为转化而设计", desc: "每一页都以行动为目标，让访客拨打电话、预约或购买。" },
        { icon: "support_agent", title: "本地支持", desc: "总部在马来西亚。我们懂你的语言，也懂你的市场。" },
      ],
    },
    booking: {
      eyebrow: "开始咨询",
      heading: "预约免费咨询",
      sub: "告诉我们你的业务和需求。我们会在 24 小时内回复你。",
      features: [
        { icon: "chat_bubble", title: "免费咨询", desc: "我们会讨论你的需求，并为你的业务推荐最合适的方案。" },
        { icon: "bolt", title: "快速交付", desc: "大多数项目会在 2 到 3 周内完成。" },
      ],
      form: {
        nameLbl: "姓名 *",
        namePh: "你的名字",
        emailLbl: "电子邮件 *",
        emailPh: "you@example.com",
        serviceLbl: "服务类型 *",
        servicePh: "请选择服务",
        serviceOptions: [
          "预约系统",
          "品牌网站",
          "产品目录",
          "自动化系统",
          "电商／销售页面",
          "活动报名",
          "其他",
        ],
        waLbl: "WhatsApp 号码 *",
        waPh: "+60 12-345 6789",
        msgLbl: "留言",
        msgPh: "告诉我们你的业务和需求......",
        sendWa: "通过 WhatsApp 发送",
        sendTg: "通过 Telegram 发送",
      },
    },
    footer: {
      tagline: "简洁的网站。高效运作的系统。",
      privacy: "隐私政策",
      terms: "服务条款",
      facebook: "Facebook",
      copy: "© 2026 Byteframe。保留所有权利。",
    },
  },
} as const;

type Lang = keyof typeof translations;

// ============================================================
// COMPONENT
// ============================================================
const Index = () => {
  const [lang, setLang] = useState<Lang>("en");
  const [policyModal, setPolicyModal] = useState<"privacy" | "terms" | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [langAnim, setLangAnim] = useState(false);

  const t = translations[lang];

  // FIX 1: Use rootMargin instead of threshold so tall sections (portfolio)
  // trigger when they enter the middle 10% of the viewport, not when 35% is visible.
  useEffect(() => {
    const sections = ["hero", "services", "portfolio", "about", "booking"];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // FIX 3: Use window.scrollTo so smooth scroll works regardless of CSS injection order.
  // Subtracts 80px to account for the fixed navbar height.
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleLangSwitch = (newLang: Lang) => {
    if (newLang === lang) return;
    setLangAnim(true);
    setLang(newLang);
    setTimeout(() => setLangAnim(false), 350);
  };

  const buildMessage = () =>
    `Hi Byteframe! I'd like to enquire about your services.%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AService: ${encodeURIComponent(service)}%0AWhatsApp: ${encodeURIComponent(whatsapp)}%0AMessage: ${encodeURIComponent(message || "—")}`;

  const sendWhatsApp = () => {
    const url = "https://wa.me/" + WA_NUMBER + "?text=" + buildMessage();
    window.open(url, "_blank");
  };

  const sendTelegram = () => {
    const url = "https://t.me/" + TG_USERNAME + "?text=" + buildMessage();
    window.open(url, "_blank");
  };

  const portfolioImgs = [
    portfolioBooking,
    portfolioWebsite,
    portfolioCatalogue,
    portfolioAutomation,
    portfolioEcommerce,
    portfolioRegistration,
  ];

  return (
    <div className="dark bg-[#0b1326] text-[#dae2fd] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .font-headline { font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; font-family: 'Material Symbols Outlined'; }
        html { scroll-behavior: smooth; }

        /* Nav link active underline */
        .nav-link {
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #adc6ff;
          transition: width 0.25s ease;
        }
        .nav-link.nav-active { color: #adc6ff; }
        .nav-link.nav-active::after { width: 100%; }

        /* Lang toggle */
        .lang-toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0;
          border: 1.5px solid rgba(173,198,255,0.25);
          border-radius: 6px;
          overflow: hidden;
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.08em;
          transition: border-color 0.2s;
        }
        .lang-toggle.lang-switching {
          animation: lang-pop 0.32s ease;
          border-color: rgba(173,198,255,0.55);
        }
        @keyframes lang-pop {
          0%   { transform: scale(1); }
          30%  { transform: scale(0.92); }
          65%  { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        .lang-toggle button {
          padding: 5px 12px;
          transition: background 0.18s, color 0.18s;
          color: rgba(218,226,253,0.5);
          background: transparent;
        }
        .lang-toggle button.active {
          background: rgba(173,198,255,0.15);
          color: #adc6ff;
        }
        .lang-toggle button:hover:not(.active) {
          color: rgba(218,226,253,0.8);
        }

        /* Book a Call press animation */
        .book-btn {
          transition: all 0.15s ease;
        }
        .book-btn:active {
          transform: translateY(3px) scale(0.97);
          filter: brightness(0.95);
        }
      `}</style>

      {/* ========== NAVBAR ========== */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-md border-b border-[#424754]/20">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <img src={logoIcon} alt="Byteframe icon" className="h-9 w-auto" />
            <img src={logoWord} alt="Byteframe" className="h-5 w-auto" />
          </button>
          <div className="hidden md:flex items-center gap-8 font-headline font-medium tracking-tight">
            <button onClick={() => scrollTo("services")} className={`nav-link ${activeSection === "services" ? "nav-active" : "text-[#dae2fd]/70 hover:text-[#adc6ff]"}`}>{t.nav.services}</button>
            <button onClick={() => scrollTo("portfolio")} className={`nav-link ${activeSection === "portfolio" ? "nav-active" : "text-[#dae2fd]/70 hover:text-[#adc6ff]"}`}>{t.nav.work}</button>
            <button onClick={() => scrollTo("about")} className={`nav-link ${activeSection === "about" ? "nav-active" : "text-[#dae2fd]/70 hover:text-[#adc6ff]"}`}>{t.nav.about}</button>
            <button onClick={() => scrollTo("booking")} className={`nav-link ${activeSection === "booking" ? "nav-active" : "text-[#dae2fd]/70 hover:text-[#adc6ff]"}`}>{t.nav.booking}</button>
          </div>
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className={`lang-toggle${langAnim ? " lang-switching" : ""}`}>
              <button className={lang === "en" ? "active" : ""} onClick={() => handleLangSwitch("en")}>EN</button>
              <button className={lang === "zh" ? "active" : ""} onClick={() => handleLangSwitch("zh")}>中文</button>
            </div>
            <button
              onClick={() => scrollTo("booking")}
              className="book-btn hidden md:inline-flex bg-[#adc6ff] text-[#002e6a] px-6 py-2 rounded-lg font-headline font-bold text-sm hover:brightness-110"
            >
              {t.nav.bookCall}
            </button>
          </div>
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
                {t.hero.badge}
              </span>
              {/* FIX 2a: ZH gets looser leading (same font size, no shrink), EN keeps original tight style */}
              <h1 className={`font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl text-[#dae2fd] ${lang === "zh" ? "tracking-normal leading-[1.2]" : "tracking-tighter leading-[0.95]"}`}>
                {lang === 'zh' ? (
                  <>
                    <span className="block">{t.hero.headline1}</span>
                    <span className="block text-[#adc6ff]">{t.hero.headline2}</span>
                  </>
                ) : (
                  <>
                    {t.hero.headline1}{' '}
                    <span className="text-[#adc6ff]">{t.hero.headline2}</span>
                  </>
                )}
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-[#c2c6d6] font-light leading-relaxed">
                {t.hero.sub}
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <button
                  onClick={() => scrollTo("booking")}
                  className="bg-[#adc6ff] text-[#002e6a] px-8 py-4 rounded font-headline font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2 group"
                >
                  {t.hero.bookCall}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button
                  onClick={() => scrollTo("portfolio")}
                  className="bg-[#222a3d] text-[#dae2fd] px-8 py-4 rounded font-headline font-bold text-lg hover:bg-[#2d3449] transition-all border border-[#424754]/20"
                >
                  {t.hero.viewPortfolio}
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 relative group">
              <div className="aspect-[4/5] bg-[#131b2e] border border-[#424754]/10 relative overflow-hidden p-6 flex flex-col justify-end">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent z-10"></div>
                  <img
                    alt="Dark minimal workspace"
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700"
                    src={softwareImg}
                  />
                </div>
                <div className="relative z-20 space-y-4">
                  <div className="h-1 w-12 bg-[#adc6ff]"></div>
                  <h3 className="font-headline font-bold text-2xl text-[#dae2fd]">{t.hero.cardTitle}</h3>
                  <p className="text-sm text-[#c2c6d6]">{t.hero.cardDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#131b2e] py-16">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((s) => (
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
              <span className="text-[#adc6ff] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">{t.services.eyebrow}</span>
              <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-[#dae2fd]">{t.services.heading}</h2>
              <div className="w-24 h-1 bg-[#adc6ff] mt-8"></div>
            </div>
            <p className="text-[#c2c6d6] max-w-sm text-lg leading-relaxed">
              {t.services.sub}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {t.services.items.map((s, i) => (
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
              <span className="text-[#adc6ff] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">{t.portfolio.eyebrow}</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-[#dae2fd]">{t.portfolio.heading}</h2>
              <div className="w-24 h-1 bg-[#adc6ff] mt-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.portfolio.items.map((p, i) => (
                <div key={p.title} className="bg-[#171f33] hover:bg-[#222a3d] transition-all duration-300">
                  <div className="aspect-video bg-[#222a3d] overflow-hidden">
                    <img src={portfolioImgs[i]} alt={p.title} className="w-full h-full object-cover" />
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
              <span className="text-[#adc6ff] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">{t.about.eyebrow}</span>
              {/* FIX 2b: ZH gets looser leading (same font size, no shrink), EN keeps original tight style */}
              <h2 className={`font-headline font-extrabold text-[#dae2fd] max-w-3xl text-5xl md:text-6xl ${lang === "zh" ? "tracking-normal leading-[1.4]" : "tracking-tighter"}`}>
                {t.about.heading}
              </h2>
              <div className="w-24 h-1 bg-[#adc6ff] mt-8"></div>
            </div>
            <p className="text-[#c2c6d6] text-xl leading-relaxed max-w-2xl mb-16">
              {t.about.body}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.about.advantages.map((a) => (
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
              <span className="text-[#adc6ff] font-headline font-extrabold uppercase tracking-[0.2em] text-xs mb-4">{t.booking.eyebrow}</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-[#dae2fd] leading-none tracking-tighter mb-8">
                {t.booking.heading}
              </h2>
              <p className="text-lg text-[#c2c6d6] max-w-md leading-relaxed mb-12">
                {t.booking.sub}
              </p>
              <div className="space-y-6">
                {t.booking.features.map((f) => (
                  <div key={f.title} className="flex items-start gap-4 p-4 bg-[#171f33] border border-[#424754]/10">
                    <span className="material-symbols-outlined text-[#adc6ff]">{f.icon}</span>
                    <div>
                      <p className="font-headline font-bold text-[#dae2fd]">{f.title}</p>
                      <p className="text-sm text-[#c2c6d6]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#171f33] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#adc6ff]/5 blur-[100px] rounded-full pointer-events-none"></div>
                  <form className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">{t.booking.form.nameLbl}</label>
                        <input name="name" required className="w-full bg-[#131b2e] border-0 border-b-2 border-[#424754]/30 py-4 px-4 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300" placeholder={t.booking.form.namePh} type="text" value={name} onChange={e => setName(e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">{t.booking.form.emailLbl}</label>
                        <input name="email" required className="w-full bg-[#131b2e] border-0 border-b-2 border-[#424754]/30 py-4 px-4 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300" placeholder={t.booking.form.emailPh} type="email" value={email} onChange={e => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">{t.booking.form.serviceLbl}</label>
                        <div className="relative">
                          <select name="service" required className="w-full appearance-none bg-[#131b2e] border-0 border-b-2 border-[#424754]/30 py-4 px-4 text-[#dae2fd] focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300" value={service} onChange={e => setService(e.target.value)}>
                            <option value="">{t.booking.form.servicePh}</option>
                            {t.booking.form.serviceOptions.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">{t.booking.form.waLbl}</label>
                        <input name="whatsapp" required className="w-full bg-[#131b2e] border-0 border-b-2 border-[#424754]/30 py-4 px-4 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300" placeholder={t.booking.form.waPh} type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-headline font-bold uppercase tracking-widest text-[#adc6ff] mb-2">{t.booking.form.msgLbl}</label>
                      <textarea name="message" className="w-full bg-[#131b2e] border-0 border-b-2 border-[#424754]/30 py-4 px-5 text-[#dae2fd] placeholder:text-[#c2c6d6]/30 focus:ring-0 focus:border-[#adc6ff] focus:outline-none transition-all duration-300 resize-none" placeholder={t.booking.form.msgPh} rows={4} value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        onClick={sendWhatsApp}
                        className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 font-headline font-extrabold text-sm tracking-widest uppercase active:scale-95 transition-all duration-200 hover:brightness-110"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        {t.booking.form.sendWa}
                      </button>
                      <button
                        type="button"
                        onClick={sendTelegram}
                        className="flex-1 flex items-center justify-center gap-3 bg-[#229ED9] text-white px-8 py-5 font-headline font-extrabold text-sm tracking-widest uppercase active:scale-95 transition-all duration-200 hover:brightness-110"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                        {t.booking.form.sendTg}
                      </button>
                    </div>
                  </form>
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
              <img src={logoIcon} alt="Byteframe icon" className="h-8 w-auto" />
              <img src={logoWord} alt="Byteframe" className="h-4 w-auto" />
            </button>
            <p className="text-[#dae2fd]/40 text-xs mt-2">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[#dae2fd]/60">
            <button onClick={() => setPolicyModal("privacy")} className="hover:text-[#adc6ff] transition-colors">{t.footer.privacy}</button>
            <button onClick={() => setPolicyModal("terms")} className="hover:text-[#adc6ff] transition-colors">{t.footer.terms}</button>
            <a className="hover:text-[#adc6ff] transition-colors flex items-center gap-1" href="https://www.facebook.com/share/1AYZDo1FYz/" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              {t.footer.facebook}
            </a>
          </div>
          <p className="text-sm text-[#dae2fd]/40">{t.footer.copy}</p>
        </div>
      </footer>

      <PolicyModal isOpen={policyModal === "privacy"} onClose={() => setPolicyModal(null)} title={t.footer.privacy} />
      <PolicyModal isOpen={policyModal === "terms"} onClose={() => setPolicyModal(null)} title={t.footer.terms} />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=Hi%20Byteframe!%20I%27d%20like%20to%20enquire%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  );
};

export default Index;
