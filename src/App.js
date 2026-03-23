import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0d0d0f",
  bg2: "#111114",
  bg3: "#16161a",
  surface: "#1c1c21",
  border: "#2a2a32",
  gold: "#f0a500",
  gold2: "#ffc84a",
  goldDim: "rgba(240,165,0,0.12)",
  text: "#e8e6df",
  text2: "#9d9b94",
  text3: "#4a4845",
  white: "#ffffff",
  green: "#22c55e",
  greenDim: "rgba(34,197,94,0.1)",
  violet: "#8b5cf6",
  violetDim: "rgba(139,92,246,0.1)",
};

const FONTS = {
  disp: "'Syne', sans-serif",
  body: "'Crimson Pro', serif",
  mono: "'JetBrains Mono', monospace",
};

const WA_NUM = "2347062962468";
const WA_BASE = `https://wa.me/${WA_NUM}`;
const CAL_LINK =
  "https://calendar.google.com/appointments/schedules/AcZssZ256OkHsCTOaMrIOsSB-SPYPCuJWGW8PPDcfllKF7UxotV45wfgqvosD7yr3_DJewGhKOLsQ75h";

// ── GLOBAL STYLES ─────────────────────────────────────────────
const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
    
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth;overflow-x:hidden}
    body{background:#0d0d0f;color:#e8e6df;font-family:'Crimson Pro',serif;font-size:18px;line-height:1.7;overflow-x:hidden;margin:0;width:100%}
    
    ::-webkit-scrollbar{width:3px}
    ::-webkit-scrollbar-track{background:#0d0d0f}
    ::-webkit-scrollbar-thumb{background:#f0a500;border-radius:2px}
    
    @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0.25}}
    @keyframes waPulse{0%,100%{box-shadow:0 4px 24px rgba(37,211,102,0.35)}50%{box-shadow:0 4px 44px rgba(37,211,102,0.65)}}
    @keyframes calPulse{0%,100%{box-shadow:0 4px 24px rgba(66,133,244,0.35)}50%{box-shadow:0 4px 44px rgba(66,133,244,0.65)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
    @keyframes gridFade{from{opacity:0}to{opacity:1}}
    
    .reveal{opacity:0;transform:translateY(22px);transition:opacity 0.65s cubic-bezier(0.16,1,0.3,1),transform 0.65s cubic-bezier(0.16,1,0.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    
    input,textarea,select{background:#1c1c21;border:1px solid #2a2a32;border-radius:8px;padding:13px 17px;color:#e8e6df;font-family:'Crimson Pro',serif;font-size:16px;outline:none;transition:border-color 0.2s;width:100%;resize:none}
    input:focus,textarea:focus,select:focus{border-color:#f0a500}
    input::placeholder,textarea::placeholder{color:#4a4845}
    select option{background:#0d0d0f}
    a{color:inherit;text-decoration:none}
    
    /* ============================================ */
    /* COMPLETE MOBILE RESPONSIVE FIXES */
    /* ============================================ */
    
    /* Mobile Styles (up to 1023px) */
    @media (max-width: 1023px) {
      body {
        font-size: 16px;
        line-height: 1.6;
        overflow-x: hidden;
        width: 100%;
      }
      
      /* Fix all containers to prevent overflow */
      section, div, main, footer {
        max-width: 100vw;
        overflow-x: hidden;
      }
      
      /* Navigation */
      nav {
        padding: 0 20px !important;
        height: 60px !important;
      }
      
      nav a[href="#hero"] {
        font-size: 18px !important;
      }
      
      /* Hide desktop navigation links */
      nav > div:first-of-type {
        display: none !important;
      }
      
      /* Show hamburger menu button with visible color */
      .mobile-menu-btn {
        display: flex !important;
        background: transparent !important;
        border: none !important;
        cursor: pointer !important;
        padding: 8px !important;
        width: 40px !important;
        height: 40px !important;
        align-items: center !important;
        justify-content: center !important;
        color: #e8e6df !important;
      }
      
      .mobile-menu-btn svg {
        stroke: #e8e6df !important;
      }
      
      /* Mobile Menu */
      .mobile-menu {
        position: fixed !important;
        top: 60px !important;
        left: 0 !important;
        right: 0 !important;
        background: rgba(13,13,15,0.98) !important;
        backdrop-filter: blur(20px) !important;
        border-bottom: 1px solid #2a2a32 !important;
        padding: 24px 20px !important;
        z-index: 199 !important;
        display: none !important;
        flex-direction: column !important;
        gap: 20px !important;
      }
      
      .mobile-menu a {
        font-family: 'JetBrains Mono', monospace !important;
        font-size: 16px !important;
        color: #e8e6df !important;
        padding: 12px 0 !important;
        border-bottom: 1px solid #2a2a32 !important;
        display: block !important;
      }
      
      .mobile-menu.open {
        display: flex !important;
      }
      
      /* All sections - reduce padding */
      section {
        padding: 60px 20px !important;
        max-width: 100% !important;
        overflow-x: hidden !important;
      }
      
      /* Hero Section */
      #hero {
        padding: 100px 20px 60px !important;
        min-height: auto !important;
      }
      
      #hero h1 {
        font-size: clamp(44px, 12vw, 70px) !important;
        letter-spacing: -2px !important;
        line-height: 0.95 !important;
      }
      
      #hero p {
        font-size: 16px !important;
      }
      
      #hero .stats-container {
        gap: 30px !important;
        margin-top: 48px !important;
        flex-wrap: wrap !important;
        justify-content: space-between !important;
      }
      
      #hero .stat-item {
        flex: 1 !important;
        min-width: 80px !important;
        text-align: center !important;
      }
      
      #hero .stat-number {
        font-size: 32px !important;
      }
      
      /* About Section - Make it single column */
      #about > div:last-child {
        display: flex !important;
        flex-direction: column !important;
        gap: 48px !important;
      }
      
      #about .about-text {
        width: 100% !important;
      }
      
      #about .quick-facts {
        padding: 28px !important;
        width: 100% !important;
      }
      
      /* Services Section - Make all cards full width */
      #services > div:last-child {
        display: flex !important;
        flex-direction: column !important;
        gap: 20px !important;
      }
      
      .service-card {
        width: 100% !important;
        padding: 28px !important;
      }
      
      /* Data Band - Make it responsive */
      .data-band {
        padding: 28px 20px !important;
        margin-top: 32px !important;
      }
      
      .data-band-header {
        flex-direction: column !important;
        gap: 20px !important;
      }
      
      .data-band-deliverables {
        display: flex !important;
        flex-direction: column !important;
        gap: 12px !important;
      }
      
      .data-band-deliverable {
        width: 100% !important;
        padding: 14px !important;
      }
      
      .data-band-tags {
        gap: 8px !important;
      }
      
      /* WorkDora Band */
      .workdora-band {
        padding: 28px 20px !important;
        margin-top: 32px !important;
      }
      
      .workdora-band h3 {
        font-size: 24px !important;
      }
      
      .workdora-band .workdora-btn {
        width: 100% !important;
        justify-content: center !important;
      }
      
      /* Stack Section - Make 2 columns on tablet, 1 on mobile */
      .stack-layer {
        margin-bottom: 28px !important;
      }
      
      .stack-grid {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 12px !important;
      }
      
      .stack-item {
        padding: 12px 14px !important;
      }
      
      .stack-item .stack-name {
        font-size: 12px !important;
      }
      
      /* Projects Section - Make all cards full width */
      #work > div:last-child {
        display: flex !important;
        flex-direction: column !important;
        gap: 20px !important;
      }
      
      .project-card {
        width: 100% !important;
        grid-column: span 1 !important;
        padding: 28px !important;
      }
      
      .project-card.featured {
        order: -1 !important;
      }
      
      .project-card h3 {
        font-size: 24px !important;
      }
      
      .project-stack {
        flex-wrap: wrap !important;
        gap: 6px !important;
      }
      
      /* Creator Section */
      .creator-section {
        padding: 60px 20px !important;
      }
      
      .creator-content {
        display: flex !important;
        flex-direction: column !important;
        gap: 48px !important;
      }
      
      .creator-left h2 {
        font-size: clamp(28px, 6vw, 40px) !important;
      }
      
      .creator-platforms {
        flex-wrap: wrap !important;
        gap: 10px !important;
      }
      
      /* Booking Section */
      .booking-section {
        padding: 60px 20px !important;
      }
      
      .booking-grid {
        display: flex !important;
        flex-direction: column !important;
        gap: 16px !important;
        margin-bottom: 36px !important;
      }
      
      .booking-card {
        width: 100% !important;
        padding: 24px !important;
      }
      
      .booking-card .booking-time {
        font-size: 10px !important;
        padding: 3px 10px !important;
      }
      
      /* Contact Section */
      #contact {
        display: flex !important;
        flex-direction: column !important;
        gap: 48px !important;
        padding: 60px 20px !important;
      }
      
      #contact .contact-left {
        width: 100% !important;
      }
      
      #contact .contact-right {
        width: 100% !important;
        padding-top: 0 !important;
      }
      
      .form-grid {
        display: flex !important;
        flex-direction: column !important;
        gap: 12px !important;
      }
      
      .channel-row {
        padding: 14px 16px !important;
      }
      
      .channel-icon {
        width: 36px !important;
        height: 36px !important;
        font-size: 16px !important;
      }
      
      /* Footer */
      footer {
        display: flex !important;
        flex-direction: column !important;
        text-align: center !important;
        gap: 16px !important;
        padding: 28px 20px !important;
      }
      
      footer > div:last-child {
        justify-content: center !important;
        flex-wrap: wrap !important;
        gap: 16px !important;
      }
      
      /* Divider */
      .divider {
        margin: 0 20px !important;
      }
      
      /* Button group */
      .btn-group {
        display: flex !important;
        flex-wrap: wrap !important;
        gap: 12px !important;
      }
      
      .btn-group .btn, 
      .btn-group a {
        flex: 1 !important;
        min-width: auto !important;
        justify-content: center !important;
      }
      
      /* Floating buttons - reposition for mobile */
      .floating-buttons {
        bottom: 20px !important;
        right: 20px !important;
        gap: 10px !important;
      }
      
      .floating-buttons .cal-btn {
        width: 48px !important;
        height: 48px !important;
      }
      
      .floating-buttons .wa-btn {
        width: 52px !important;
        height: 52px !important;
      }
      
      /* Hide tooltips on mobile */
      .tooltip {
        display: none !important;
      }
      
      /* Fix all grid layouts that might cause overflow */
      [style*="display: grid"] {
        max-width: 100% !important;
      }
    }
    
    /* Tablet Optimization (768px to 1023px) */
    @media (min-width: 768px) and (max-width: 1023px) {
      /* Services - 2 columns on tablet */
      #services > div:last-child {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 20px !important;
      }
      
      /* Projects - 2 columns on tablet */
      #work > div:last-child {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 20px !important;
      }
      
      .project-card.featured {
        grid-column: span 2 !important;
      }
      
      /* Stack - 4 columns on tablet */
      .stack-grid {
        grid-template-columns: repeat(4, 1fr) !important;
      }
      
      /* Creator section on tablet */
      .creator-content {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 48px !important;
      }
      
      /* Booking on tablet */
      .booking-grid {
        display: grid !important;
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 16px !important;
      }
    }
    
    /* Small Mobile (below 480px) */
    @media (max-width: 480px) {
      body {
        font-size: 14px;
      }
      
      #hero h1 {
        font-size: clamp(36px, 10vw, 48px) !important;
      }
      
      #hero .stats-container {
        gap: 20px !important;
      }
      
      #hero .stat-number {
        font-size: 28px !important;
      }
      
      #hero .stat-label {
        font-size: 9px !important;
      }
      
      .service-card h3 {
        font-size: 20px !important;
      }
      
      .service-card .service-icon {
        font-size: 28px !important;
      }
      
      .stack-grid {
        grid-template-columns: 1fr !important;
      }
      
      .project-card h3 {
        font-size: 22px !important;
      }
      
      .booking-card h4 {
        font-size: 18px !important;
      }
      
      .channel-row .channel-value {
        font-size: 13px !important;
      }
      
      button, .btn {
        font-size: 12px !important;
        padding: 10px 16px !important;
      }
    }
    
    /* Desktop styles remain untouched - show desktop navigation */
    @media (min-width: 1024px) {
      .mobile-menu-btn {
        display: none !important;
      }
      .mobile-menu {
        display: none !important;
      }
      nav > div:first-of-type {
        display: flex !important;
      }
    }
  `}</style>
);

// ── HOOKS ─────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return scrolled;
}

// ── PRIMITIVES ────────────────────────────────────────────────
const Tag = ({ children, color = COLORS.gold }) => (
  <div
    style={{
      fontFamily: FONTS.mono,
      fontSize: 12,
      color,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14,
    }}
  >
    <span style={{ width: 28, height: 1, background: color, opacity: 0.6 }} />
    {children}
  </div>
);

const Divider = () => (
  <div
    style={{
      height: 1,
      background: `linear-gradient(90deg,transparent,${COLORS.border},transparent)`,
      margin: "0 20px",
    }}
  />
);

const Btn = ({
  href,
  onClick,
  children,
  variant = "primary",
  style: s = {},
  external = false,
}) => {
  const [hov, setHov] = useState(false);
  const base = {
    fontFamily: FONTS.mono,
    fontSize: 14,
    padding: "14px 30px",
    borderRadius: 8,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
    border: "none",
    ...s,
  };
  const variants = {
    primary: { background: COLORS.gold, color: COLORS.bg, fontWeight: 500 },
    ghost: {
      background: "transparent",
      color: COLORS.text,
      border: `1px solid ${COLORS.border}`,
    },
    green: { background: COLORS.green, color: "#fff", fontWeight: 500 },
  };
  const hoverStyles = hov
    ? variant === "ghost"
      ? {
          borderColor: COLORS.gold,
          color: COLORS.gold,
          transform: "translateY(-2px)",
        }
      : {
          filter: "brightness(1.1)",
          transform: "translateY(-2px)",
          boxShadow:
            variant === "green"
              ? "0 8px 24px rgba(34,197,94,0.3)"
              : "0 8px 24px rgba(240,165,0,0.25)",
        }
    : {};

  const handleClick = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.(e);
  };

  const Tag2 = href ? "a" : "button";
  return (
    <Tag2
      href={href}
      target={external && href && !href.startsWith("#") ? "_blank" : undefined}
      rel={
        external && href && !href.startsWith("#")
          ? "noopener noreferrer"
          : undefined
      }
      onClick={handleClick}
      style={{ ...base, ...variants[variant], ...hoverStyles }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </Tag2>
  );
};

// ── ICONS ─────────────────────────────────────────────────────
function WAIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function CalIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="14" x2="8.01" y2="14" strokeWidth="3" />
      <line x1="12" y1="14" x2="12.01" y2="14" strokeWidth="3" />
      <line x1="16" y1="14" x2="16.01" y2="14" strokeWidth="3" />
    </svg>
  );
}

// ── NAV ──────────────────────────────────────────────────────
function Nav() {
  const scrolled = useScrolled();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = ["About", "Services", "Stack", "Work", "Contact"];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: "0 40px",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(13,13,15,0.92)" : "rgba(13,13,15,0.7)",
          backdropFilter: "blur(22px)",
          borderBottom: `1px solid ${scrolled ? "rgba(240,165,0,0.18)" : COLORS.border}`,
          transition: "all 0.3s",
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: FONTS.disp,
            fontSize: 20,
            fontWeight: 800,
            color: COLORS.white,
          }}
        >
          Abass<span style={{ color: COLORS.gold }}>.</span>
        </a>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", gap: 34 }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                color: COLORS.text2,
                letterSpacing: "0.06em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.gold)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.text2)}
            >
              {l}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <Btn
            href={WA_BASE}
            external
            style={{ padding: "8px 20px", fontSize: 12 }}
          >
            Let's Talk
          </Btn>

          {/* Mobile Menu Button - White color for visibility */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e8e6df",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6L18 18" />
              ) : (
                <path d="M3 12H21M3 6H21M3 18H21" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 70,
          left: 0,
          right: 0,
          background: "rgba(13,13,15,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #2a2a32",
          padding: "24px 20px",
          zIndex: 199,
          display: mobileMenuOpen ? "flex" : "none",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              color: "#e8e6df",
              padding: "12px 0",
              borderBottom: "1px solid #2a2a32",
              display: "block",
            }}
          >
            {l}
          </a>
        ))}
      </div>
    </>
  );
}

// ── HERO ─────────────────────────────────────────────────────
function Hero() {
  const stats = [
    { num: "8+", label: "Years Building" },
    { num: "BSc", label: "Statistics — OAU" },
    { num: "5", label: "Service Areas" },
    { num: "AI", label: "Integrated" },
  ];
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        padding: "130px 40px 80px",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(240,165,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(240,165,0,0.04) 1px,transparent 1px)`,
          backgroundSize: "58px 58px",
          animation: "gridFade 1.2s ease both",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          top: -150,
          right: -250,
          pointerEvents: "none",
          background:
            "radial-gradient(circle,rgba(240,165,0,0.07) 0%,transparent 70%)",
        }}
      />

      <div style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: FONTS.mono,
            fontSize: 12,
            color: COLORS.green,
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
            padding: "6px 15px",
            borderRadius: 100,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: COLORS.green,
              animation: "blink 1.5s infinite",
            }}
          />
          Available for new projects
        </div>
      </div>

      <div
        style={{
          animation: "fadeUp 0.7s 0.08s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 12,
            color: COLORS.gold,
            letterSpacing: "0.18em",
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <span style={{ width: 30, height: 1, background: COLORS.gold }} />
          Ibadan, Nigeria — Remote Globally
        </div>
      </div>

      <div
        style={{
          animation: "fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <h1
          style={{
            fontFamily: FONTS.disp,
            fontSize: "clamp(60px,9vw,104px)",
            fontWeight: 800,
            lineHeight: 0.93,
            letterSpacing: "-3px",
            color: COLORS.white,
            marginBottom: 10,
          }}
        >
          Abass
          <br />
          <span style={{ color: COLORS.gold }}>Olaiya.</span>
        </h1>
      </div>

      <div
        style={{
          animation: "fadeUp 0.7s 0.22s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "clamp(18px,2.5vw,26px)",
            color: COLORS.text2,
            fontWeight: 300,
            marginBottom: 36,
          }}
        >
          <strong style={{ color: COLORS.text, fontWeight: 600 }}>
            Full-Stack Developer
          </strong>
          {" · "}AI & Data Engineer{" · "}Founder
        </p>
      </div>

      <div
        style={{
          animation: "fadeUp 0.7s 0.28s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <p
          style={{
            maxWidth: 580,
            fontSize: 18,
            color: COLORS.text2,
            lineHeight: 1.85,
            marginBottom: 48,
          }}
        >
          I build web apps, mobile apps, AI-powered tools, and the data systems
          that tell you whether any of it is actually working — solo, from brief
          to launch.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          animation: "fadeUp 0.7s 0.34s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <Btn href="#services">See What I Build</Btn>
        <Btn href="#contact" variant="ghost">
          Start a Project
        </Btn>
        <Btn
          href={CAL_LINK}
          external
          variant="ghost"
          style={{ borderColor: "#4285f430", color: "#4285f4" }}
        >
          <CalIcon size={15} color="#4285f4" /> Book a Call
        </Btn>
      </div>

      <div
        className="stats-container"
        style={{
          display: "flex",
          gap: 44,
          marginTop: 72,
          paddingTop: 44,
          borderTop: `1px solid ${COLORS.border}`,
          flexWrap: "wrap",
        }}
      >
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <div
              className="stat-number"
              style={{
                fontFamily: FONTS.disp,
                fontSize: 38,
                fontWeight: 800,
                color: COLORS.gold,
                lineHeight: 1,
              }}
            >
              {s.num}
            </div>
            <div
              className="stat-label"
              style={{
                fontFamily: FONTS.mono,
                fontSize: 11,
                color: COLORS.text3,
                letterSpacing: "0.08em",
                marginTop: 6,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── ABOUT ────────────────────────────────────────────────────
function About() {
  const ref = useReveal();
  const facts = [
    {
      icon: "📍",
      label: "Location",
      value: "Ibadan, Nigeria — Remote Globally",
    },
    {
      icon: "🎓",
      label: "Education",
      value: "BSc. Statistics — Obafemi Awolowo University",
    },
    {
      icon: "🗣️",
      label: "Languages",
      value: "English (Fluent) · Yoruba (Native)",
    },
    {
      icon: "⚡",
      label: "Specialisation",
      value: "MERN Stack · React Native · AI · Data & BI",
    },
    {
      icon: "🏗️",
      label: "Currently Building",
      value: "WorkDora — Task-to-Cash OS for African SMBs",
    },
    {
      icon: "🎥",
      label: "Also",
      value: "Tech Content Creator · TikTok · Reels",
    },
  ];

  return (
    <section
      id="about"
      style={{ padding: "60px 20px", maxWidth: 1200, margin: "0 auto" }}
    >
      <Tag>About</Tag>
      <h2
        style={{
          fontFamily: FONTS.disp,
          fontSize: "clamp(28px, 8vw, 56px)",
          fontWeight: 800,
          letterSpacing: "-1px",
          color: COLORS.white,
          marginBottom: "40px",
          lineHeight: 1.1,
        }}
      >
        Statistics graduate.
        <br />
        <span style={{ color: COLORS.gold }}>Full-stack builder.</span>
      </h2>
      <div
        ref={ref}
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        <div>
          {[
            <>
              I'm <strong style={{ color: COLORS.text }}>Abass Olaiya</strong> —
              a full-stack developer, AI engineer, and data professional based
              in Nigeria, building products for clients and founders around the
              world.
            </>,
            <>
              I studied Statistics at{" "}
              <strong style={{ color: COLORS.text }}>
                Obafemi Awolowo University
              </strong>
              , which means I don't just build dashboards — I understand what
              the numbers mean, what visualisation is appropriate, and how to
              structure data to make analysis actually possible. That
              combination is rarer than it sounds.
            </>,
            <>
              My engineering stack is React and Next.js on the frontend, Node.js
              and Express on the backend, MongoDB for data, and React Native for
              mobile. When a product needs intelligence, I wire in AI —
              fine-tuned models, LLM integrations, document processors,
              recommendation engines.
            </>,
            <>
              I'm also the founder of{" "}
              <strong style={{ color: COLORS.text }}>WorkDora</strong> — a
              task-to-cash operating system built specifically for African SMBs.
              Designed, architected, and built entirely by me.
            </>,
            <>
              I speak fluent English and Yoruba. I work fully remote. I care
              about shipping things that actually work — not just things that
              look good in a demo.
            </>,
          ].map((txt, i) => (
            <p
              key={i}
              style={{
                color: COLORS.text2,
                marginBottom: "16px",
                fontSize: "15px",
                lineHeight: 1.7,
              }}
            >
              {txt}
            </p>
          ))}

          <div
            style={{
              marginTop: "24px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: COLORS.violetDim,
              border: `1px solid ${COLORS.violet}30`,
              borderRadius: 10,
              padding: "12px 16px",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                background: `${COLORS.violet}20`,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              🎓
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "9px",
                  color: COLORS.text3,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Education
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: COLORS.text,
                  marginTop: "2px",
                }}
              >
                BSc. Statistics · Obafemi Awolowo University, Ile-Ife
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 16,
            padding: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg,${COLORS.gold},transparent)`,
            }}
          />
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: "11px",
              color: COLORS.gold,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Quick Facts
          </div>
          {facts.map((f, i) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                paddingBottom: i < facts.length - 1 ? "14px" : 0,
                marginBottom: i < facts.length - 1 ? "14px" : 0,
                borderBottom:
                  i < facts.length - 1 ? `1px solid ${COLORS.border}` : "none",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    f.label === "Education"
                      ? `${COLORS.violet}20`
                      : COLORS.goldDim,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "9px",
                    color: COLORS.text3,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {f.label}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: COLORS.text,
                    marginTop: "2px",
                  }}
                >
                  {f.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SERVICES ─────────────────────────────────────────────────
const SERVICES = [
  {
    num: "01",
    icon: "🌐",
    title: "Web Application",
    desc: "Full-stack web products built with React/Next.js frontend, Node.js + Express backend, MongoDB data layer. Auth, dashboards, payments, APIs — all of it.",
    price: "From $300 — $3,000+",
    accent: COLORS.gold,
  },
  {
    num: "02",
    icon: "📱",
    title: "Mobile App",
    desc: "iOS and Android from a single React Native codebase. Half the cost, same quality. Real-time features, push notifications, offline support, clean UI.",
    price: "From $500 — $4,000+",
    accent: COLORS.gold,
  },
  {
    num: "03",
    icon: "🤖",
    title: "AI-Powered Tools",
    desc: "Custom AI integrations on top of your web or mobile product. Chatbots trained on your data, document processors, recommendation engines, LLM workflows.",
    price: "From $800 — $5,000+",
    accent: COLORS.gold,
  },
  {
    num: "04",
    icon: "📊",
    title: "Data Analysis & BI",
    desc: "Business intelligence dashboards, statistical analysis, and data pipelines — backed by a BSc. in Statistics. I don't just visualise your data. I understand it.",
    price: "From $400 — $4,000+",
    accent: COLORS.violet,
    highlight: true,
  },
];

function Services() {
  const ref = useReveal();
  return (
    <section
      id="services"
      style={{ padding: "60px 20px", maxWidth: 1200, margin: "0 auto" }}
    >
      <Tag>Services</Tag>
      <h2
        style={{
          fontFamily: FONTS.disp,
          fontSize: "clamp(28px, 8vw, 56px)",
          fontWeight: 800,
          letterSpacing: "-1px",
          color: COLORS.white,
          marginBottom: "12px",
          lineHeight: 1.1,
        }}
      >
        What I <span style={{ color: COLORS.gold }}>build</span> for you.
      </h2>
      <p
        style={{
          fontSize: "15px",
          color: COLORS.text2,
          maxWidth: "100%",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}
      >
        Four service areas. Production-ready, documented, built to grow — and
        grounded in real analytical thinking.
      </p>
      <div
        ref={ref}
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 22,
        }}
      >
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.num} {...s} delay={i * 70} />
        ))}
      </div>
      <DataBand />
      <WorkDoraBand />
    </section>
  );
}

function ServiceCard({
  num,
  icon,
  title,
  desc,
  price,
  delay,
  accent,
  highlight,
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: highlight ? `${COLORS.violet}08` : COLORS.surface,
        border: `1px solid ${hov ? accent : highlight ? `${COLORS.violet}30` : COLORS.border}`,
        borderRadius: 16,
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        transform: hov ? "translateY(-4px)" : "none",
        transitionDelay: `${delay}ms`,
      }}
    >
      {highlight && (
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "12px",
            fontFamily: FONTS.mono,
            fontSize: "8px",
            color: COLORS.violet,
            background: `${COLORS.violet}15`,
            border: `1px solid ${COLORS.violet}30`,
            padding: "2px 8px",
            borderRadius: 100,
            letterSpacing: "0.1em",
          }}
        >
          STATISTICS BACKGROUND
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg,${accent},transparent)`,
          transform: hov ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: "10px",
          color: accent,
          marginBottom: "16px",
          letterSpacing: "0.1em",
        }}
      >
        {num}
      </div>
      <div style={{ fontSize: "28px", marginBottom: "14px" }}>{icon}</div>
      <div
        style={{
          fontFamily: FONTS.disp,
          fontSize: "18px",
          fontWeight: 700,
          color: COLORS.white,
          marginBottom: "10px",
          letterSpacing: "-0.3px",
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: "13px",
          color: COLORS.text2,
          lineHeight: 1.6,
          marginBottom: "16px",
        }}
      >
        {desc}
      </p>
      <div style={{ fontFamily: FONTS.mono, fontSize: "11px", color: accent }}>
        {price}
      </div>
    </div>
  );
}

function DataBand() {
  const deliverables = [
    {
      icon: "📈",
      label: "Interactive Dashboards",
      desc: "React-powered BI dashboards with live data — not static reports",
    },
    {
      icon: "🔬",
      label: "Statistical Analysis",
      desc: "Hypothesis testing, regression, forecasting backed by actual theory",
    },
    {
      icon: "🗄️",
      label: "Data Pipelines",
      desc: "Clean, queryable data architecture built into your product from day one",
    },
    {
      icon: "💡",
      label: "Business Intelligence",
      desc: "Turn raw numbers into decisions your team can act on immediately",
    },
  ];
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        marginTop: "32px",
        background: "linear-gradient(135deg,#120d1a,#0e0a16)",
        border: `1px solid ${COLORS.violet}25`,
        borderRadius: 16,
        padding: "28px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg,${COLORS.violet},transparent)`,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "28px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: "10px",
              color: COLORS.violet,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{ width: "16px", height: 1, background: COLORS.violet }}
            />
            Data Analysis & Business Intelligence
          </div>
          <div
            style={{
              fontFamily: FONTS.disp,
              fontSize: "20px",
              fontWeight: 800,
              color: COLORS.white,
              letterSpacing: "-0.3px",
              marginBottom: "8px",
            }}
          >
            Numbers that mean something.
          </div>
          <p
            style={{
              color: COLORS.text2,
              fontSize: "13px",
              lineHeight: 1.6,
              maxWidth: "100%",
            }}
          >
            A Statistics degree from OAU means I don't just put charts on a
            screen — I understand the underlying distributions, the appropriate
            tests, and when a trend is real versus noise.
          </p>
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "10px",
            color: COLORS.violet,
            background: `${COLORS.violet}12`,
            border: `1px solid ${COLORS.violet}25`,
            borderRadius: 10,
            padding: "8px 12px",
            alignSelf: "flex-start",
          }}
        >
          BSc. Statistics · OAU Ile-Ife
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "12px",
        }}
      >
        {deliverables.map((d) => (
          <div
            key={d.label}
            style={{
              background: `${COLORS.violet}08`,
              border: `1px solid ${COLORS.violet}18`,
              borderRadius: 10,
              padding: "14px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ fontSize: "20px", flexShrink: 0 }}>{d.icon}</div>
            <div>
              <div
                style={{
                  fontFamily: FONTS.disp,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: COLORS.white,
                  marginBottom: "4px",
                }}
              >
                {d.label}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: COLORS.text2,
                  lineHeight: 1.5,
                }}
              >
                {d.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {[
          "Python",
          "R",
          "SQL",
          "Power BI",
          "Tableau",
          "Pandas",
          "Recharts",
          "Statistical Modelling",
        ].map((p) => (
          <span
            key={p}
            style={{
              fontFamily: FONTS.mono,
              fontSize: "10px",
              padding: "3px 8px",
              borderRadius: 4,
              background: `${COLORS.violet}10`,
              border: `1px solid ${COLORS.violet}22`,
              color: COLORS.violet,
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkDoraBand() {
  const pills = [
    "React / Next.js",
    "Node.js",
    "MongoDB",
    "PWA",
    "AI-Augmented",
    "Offline-First",
    "African SMBs",
  ];
  return (
    <div
      style={{
        marginTop: "40px",
        background: "linear-gradient(135deg,#0d1a0f,#0a1510)",
        border: "1px solid rgba(34,197,94,0.2)",
        borderRadius: 16,
        padding: "28px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg,${COLORS.green},transparent)`,
        }}
      />
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: "10px",
          color: COLORS.green,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ width: "16px", height: 1, background: COLORS.green }} />
        Flagship Product — Now Live
      </div>
      <div
        style={{
          fontFamily: FONTS.disp,
          fontSize: "22px",
          fontWeight: 800,
          color: COLORS.white,
          letterSpacing: "-0.3px",
          marginBottom: "10px",
        }}
      >
        WorkDora — Task to Cash OS
      </div>
      <p
        style={{
          color: COLORS.text2,
          fontSize: "13px",
          lineHeight: 1.6,
          maxWidth: "100%",
          marginBottom: "18px",
        }}
      >
        An offline-capable, AI-augmented workspace for African SMBs and
        neurodiverse knowledge workers. Task management, invoicing with
        part-payment support, expense tracking, and lite accounting — in one
        place.{" "}
        <strong style={{ color: COLORS.green }}>
          Now live at workdora.com
        </strong>
      </p>
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {pills.map((p) => (
          <span
            key={p}
            style={{
              fontFamily: FONTS.mono,
              fontSize: "10px",
              padding: "3px 8px",
              borderRadius: 4,
              background: "rgba(34,197,94,0.07)",
              border: "1px solid rgba(34,197,94,0.2)",
              color: COLORS.green,
            }}
          >
            {p}
          </span>
        ))}
      </div>
      <Btn
        href="https://workdora.com"
        external={true}
        variant="green"
        style={{
          padding: "10px 20px",
          fontSize: "12px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        Visit WorkDora.com →
      </Btn>
    </div>
  );
}

// ── STACK ────────────────────────────────────────────────────
function Stack() {
  const ref = useReveal();
  const layers = [
    {
      label: "Frontend",
      items: [
        { name: "React", cat: "UI Framework" },
        { name: "Next.js", cat: "Full-Stack Framework" },
        { name: "React Native", cat: "Mobile" },
        { name: "Tailwind CSS", cat: "Styling" },
      ],
    },
    {
      label: "Backend",
      items: [
        { name: "Node.js", cat: "Runtime" },
        { name: "Express.js", cat: "API Framework" },
        { name: "MongoDB", cat: "Database" },
        { name: "Socket.io", cat: "Real-time" },
      ],
    },
    {
      label: "Data & Analytics",
      items: [
        { name: "Python", cat: "Data Science", violet: true },
        { name: "R", cat: "Statistical Analysis", violet: true },
        { name: "SQL", cat: "Data Querying", violet: true },
        { name: "Power BI", cat: "BI Dashboards", violet: true },
      ],
    },
    {
      label: "AI & Deployment",
      items: [
        { name: "OpenAI API", cat: "LLM Integration", green: true },
        { name: "Claude", cat: "AI Integration", green: true },
        { name: "Vercel / AWS", cat: "Deployment", green: true },
        { name: "GitHub", cat: "Version Control", green: true },
      ],
    },
  ];
  return (
    <section
      id="stack"
      style={{ padding: "60px 20px", maxWidth: 1200, margin: "0 auto" }}
    >
      <Tag>Tech Stack</Tag>
      <h2
        style={{
          fontFamily: FONTS.disp,
          fontSize: "clamp(28px, 8vw, 56px)",
          fontWeight: 800,
          letterSpacing: "-1px",
          color: COLORS.white,
          marginBottom: "12px",
          lineHeight: 1.1,
        }}
      >
        The tools I <span style={{ color: COLORS.gold }}>build with.</span>
      </h2>
      <p
        style={{
          fontSize: "15px",
          color: COLORS.text2,
          maxWidth: "100%",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}
      >
        Every tool chosen deliberately. Every layer covered.
      </p>
      <div ref={ref} className="reveal">
        {layers.map((layer) => (
          <div key={layer.label} style={{ marginBottom: "28px" }}>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: "10px",
                color:
                  layer.label === "Data & Analytics"
                    ? COLORS.violet
                    : COLORS.text3,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              {layer.label}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "10px",
              }}
            >
              {layer.items.map((item, j) => (
                <StackItem key={item.name} {...item} delay={j * 50} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StackItem({ name, cat, green, violet, delay }) {
  const [hov, setHov] = useState(false);
  const dot = violet ? COLORS.violet : green ? COLORS.green : COLORS.gold;
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? COLORS.bg3 : COLORS.surface,
        border: `1px solid ${hov ? dot : COLORS.border}`,
        borderRadius: 8,
        padding: "18px 22px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
        transform: hov ? "translateY(-3px)" : "none",
      }}
    >
      <div
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: dot,
          flexShrink: 0,
        }}
      />
      <div>
        <div
          style={{ fontFamily: FONTS.mono, fontSize: 13, color: COLORS.text }}
        >
          {name}
        </div>
        <div style={{ fontSize: 11, color: COLORS.text3, marginTop: 2 }}>
          {cat}
        </div>
      </div>
    </div>
  );
}

// ── PROJECTS ─────────────────────────────────────────────────
function Projects() {
  const ref = useReveal();
  return (
    <section
      id="work"
      style={{ padding: "60px 20px", maxWidth: 1200, margin: "0 auto" }}
    >
      <Tag>Selected Work</Tag>
      <h2
        style={{
          fontFamily: FONTS.disp,
          fontSize: "clamp(28px, 8vw, 56px)",
          fontWeight: 800,
          letterSpacing: "-1px",
          color: COLORS.white,
          marginBottom: "12px",
          lineHeight: 1.1,
        }}
      >
        Things I've <span style={{ color: COLORS.gold }}>built.</span>
      </h2>
      <p
        style={{
          fontSize: "15px",
          color: COLORS.text2,
          maxWidth: "100%",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}
      >
        A selection of projects across web, mobile, data, and AI.
      </p>
      <div
        ref={ref}
        className="reveal"
        style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
      >
        <ProjectCard
          featured
          tag="Live Product — Now Available"
          title="WorkDora"
          desc="A task-to-cash operating system for African SMBs. Combines project management, invoicing with part-payment support, expense tracking, and AI-assisted workflows."
          stack={["React", "Next.js", "Node.js", "MongoDB", "PWA", "AI Layer"]}
          linkText="Visit WorkDora →"
          href="https://workdora.com"
          external={true}
        />
        <ProjectCard
          tag="Data & Business Intelligence"
          accentColor={COLORS.violet}
          title="SME Analytics Dashboard"
          desc="A full BI dashboard for an SME client. KPI tracking, revenue trends, expense breakdowns."
          stack={["React", "Node.js", "MongoDB", "Recharts", "Python"]}
          linkText="Build a BI dashboard"
          href={`${WA_BASE}?text=${encodeURIComponent("Hi Abass, I need a business intelligence dashboard")}`}
        />
        <ProjectCard
          tag="Web App"
          title="Full-Stack SME Dashboard"
          desc="Custom business management dashboard with real-time data, role-based access, reporting."
          stack={["React", "Node.js", "MongoDB", "Express"]}
          linkText="Build something similar"
          href={`${WA_BASE}?text=${encodeURIComponent("Hi Abass, I want to build something similar")}`}
        />
        <ProjectCard
          tag="Mobile App"
          title="React Native Cross-Platform App"
          desc="iOS and Android from a single React Native codebase. Push notifications, offline support."
          stack={["React Native", "Node.js", "MongoDB"]}
          linkText="Need a mobile app?"
          href={`${WA_BASE}?text=${encodeURIComponent("Hi Abass, I need a mobile app")}`}
        />
      </div>
    </section>
  );
}

function ProjectCard({
  featured,
  tag,
  title,
  desc,
  stack,
  linkText,
  href,
  accentColor,
}) {
  const [hov, setHov] = useState(false);
  const accent = accentColor || COLORS.gold;
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        gridColumn: featured ? "span 2" : "span 1",
        background: hov
          ? COLORS.bg3
          : accentColor
            ? `${accentColor}06`
            : COLORS.surface,
        border: `1px solid ${hov ? accent : accentColor ? `${accentColor}25` : COLORS.border}`,
        borderRadius: 16,
        padding: 40,
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        transform: hov ? "translateY(-4px)" : "none",
      }}
    >
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: 11,
          color: accent,
          background: `${accent}15`,
          padding: "5px 12px",
          borderRadius: 4,
          display: "inline-block",
          marginBottom: 18,
          letterSpacing: "0.1em",
        }}
      >
        {tag}
      </span>
      <div
        style={{
          fontFamily: FONTS.disp,
          fontWeight: 700,
          color: COLORS.white,
          marginBottom: 12,
          letterSpacing: "-0.5px",
          fontSize: featured ? 34 : 24,
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: 15,
          color: COLORS.text2,
          lineHeight: 1.8,
          marginBottom: 24,
        }}
      >
        {desc}
      </p>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}
      >
        {stack.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              background: COLORS.bg3,
              border: `1px solid ${COLORS.border}`,
              color: COLORS.text2,
              padding: "4px 10px",
              borderRadius: 4,
            }}
          >
            {s}
          </span>
        ))}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: FONTS.mono,
          fontSize: 13,
          color: accent,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          transition: "gap 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.gap = "16px")}
        onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
      >
        {linkText} →
      </a>
    </div>
  );
}

// ── CREATOR ──────────────────────────────────────────────────
function Creator() {
  const ref = useReveal();
  const series = [
    "Client vs Dev — the chaos everyone recognises",
    "Dev Explains — big tech concepts in under 60 seconds",
    "Founder Truth — the business side nobody talks about",
    "WorkDora Build-in-Public — shipping in real time",
    "BD Short-Form — business development with jokes",
  ];
  return (
    <div
      style={{
        background: "linear-gradient(135deg,#111114,#16161a)",
        borderTop: `1px solid ${COLORS.border}`,
        borderBottom: `1px solid ${COLORS.border}`,
        padding: "80px 40px",
      }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
      >
        <div>
          <Tag>Content Creator</Tag>
          <h2
            style={{
              fontFamily: FONTS.disp,
              fontSize: "clamp(30px,4vw,46px)",
              fontWeight: 800,
              color: COLORS.white,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: 18,
            }}
          >
            I also explain tech
            <br />
            <span style={{ color: COLORS.gold }}>out loud.</span>
          </h2>
          <p
            style={{
              color: COLORS.text2,
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 28,
            }}
          >
            Building an audience around developer education, founder truths, and
            the honest chaos of freelance tech life.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["TikTok", "Instagram Reels", "LinkedIn", "X / Twitter"].map(
              (p) => (
                <div
                  key={p}
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 12,
                    padding: "7px 16px",
                    borderRadius: 100,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text2,
                    background: COLORS.surface,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: COLORS.gold,
                    }}
                  />
                  {p}
                </div>
              ),
            )}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: COLORS.text3,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Content Series
          </div>
          {series.map((s, i) => (
            <div
              key={i}
              style={{
                background: COLORS.surface,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                padding: "15px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontSize: 15,
                color: COLORS.text2,
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  color: COLORS.gold,
                  width: 28,
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                0{i + 1}
              </span>
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── BOOKING ──────────────────────────────────────────────────
function Booking() {
  const ref = useReveal();
  const slots = [
    {
      icon: "💬",
      title: "Quick Chat",
      desc: "15 minutes. You explain the project. I tell you if I can build it and what it would cost.",
      time: "15 min",
    },
    {
      icon: "🏗️",
      title: "Project Discovery",
      desc: "30 minutes. We go deep — scope, timeline, tech stack, and deliverables. Come with your ideas.",
      time: "30 min",
    },
    {
      icon: "📊",
      title: "Data Strategy Session",
      desc: "45 minutes. For founders and decision-makers who want to understand what their data can actually tell them.",
      time: "45 min",
    },
  ];
  return (
    <section
      style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div ref={ref} className="reveal">
        <Tag color="#4285f4">Book a Call</Tag>
        <h2
          style={{
            fontFamily: FONTS.disp,
            fontSize: "clamp(34px,4.5vw,52px)",
            fontWeight: 800,
            letterSpacing: "-2px",
            color: COLORS.white,
            marginBottom: 16,
            lineHeight: 1.05,
          }}
        >
          Prefer a <span style={{ color: "#4285f4" }}>scheduled call?</span>
        </h2>
        <p
          style={{
            fontSize: 18,
            color: COLORS.text2,
            maxWidth: 540,
            lineHeight: 1.8,
            marginBottom: 56,
          }}
        >
          Not everyone uses WhatsApp for business. Book a slot on my Google
          Calendar — no chase emails, no back-and-forth. Pick a time, show up,
          let's talk.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 22,
            marginBottom: 44,
          }}
        >
          {slots.map((s, i) => (
            <BookingCard key={i} {...s} />
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Btn
            href={CAL_LINK}
            external
            variant="ghost"
            style={{
              borderColor: "#4285f440",
              color: "#4285f4",
              fontSize: 15,
              padding: "16px 40px",
            }}
          >
            <CalIcon size={18} color="#4285f4" />
            Open Google Calendar Booking
          </Btn>
          <p
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: COLORS.text3,
              marginTop: 16,
              letterSpacing: "0.06em",
            }}
          >
            Powered by Google Calendar Appointment Scheduling · All times in WAT
            (UTC+1)
          </p>
        </div>
      </div>
    </section>
  );
}

function BookingCard({ icon, title, desc, time }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: COLORS.surface,
        border: `1px solid ${hov ? "#4285f4" : COLORS.border}`,
        borderRadius: 16,
        padding: 34,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        transform: hov ? "translateY(-5px)" : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg,#4285f4,transparent)",
          transform: hov ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 18,
        }}
      >
        <div style={{ fontSize: 32 }}>{icon}</div>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            background: "rgba(66,133,244,0.1)",
            border: "1px solid rgba(66,133,244,0.2)",
            color: "#4285f4",
            padding: "4px 11px",
            borderRadius: 100,
          }}
        >
          {time}
        </span>
      </div>
      <div
        style={{
          fontFamily: FONTS.disp,
          fontSize: 20,
          fontWeight: 700,
          color: COLORS.white,
          marginBottom: 12,
          letterSpacing: "-0.5px",
        }}
      >
        {title}
      </div>
      <p style={{ fontSize: 15, color: COLORS.text2, lineHeight: 1.75 }}>
        {desc}
      </p>
    </div>
  );
}

// ── CONTACT ──────────────────────────────────────────────────
function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const channels = [
    {
      icon: "💬",
      label: "WhatsApp (Fastest)",
      value: "+234 706 296 2468",
      href: WA_BASE,
      color: "#25D366",
    },
    {
      icon: "📅",
      label: "Google Calendar",
      value: "Book a scheduled call",
      href: CAL_LINK,
      color: "#4285f4",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    const msg = encodeURIComponent(
      `Hi Abass, my name is ${form.name}.\n\nProject type: ${form.type}\nEmail: ${form.email}\n\n${form.message}`,
    );
    setTimeout(() => {
      window.open(`${WA_BASE}?text=${msg}`, "_blank");
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3500);
    }, 600);
  };

  const projectTypes = [
    "Web Application (MERN Stack)",
    "Mobile App (React Native)",
    "AI-Powered Tool",
    "Desktop App",
    "Data Analysis & Visualisation",
    "BI Dashboard",
    "Statistical Analysis / Modelling",
    "Full Product (Web + Mobile + AI)",
    "Other",
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "60px 20px",
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "48px",
        alignItems: "start",
      }}
    >
      <div ref={ref} className="reveal">
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "11px",
            color: COLORS.gold,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Contact
        </div>
        <h2
          style={{
            fontFamily: FONTS.disp,
            fontSize: "clamp(28px, 8vw, 52px)",
            fontWeight: 800,
            color: COLORS.white,
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: "14px",
          }}
        >
          Let's build
          <br />
          <span style={{ color: COLORS.gold }}>something.</span>
        </h2>
        <p
          style={{
            color: COLORS.text2,
            fontSize: "15px",
            lineHeight: 1.7,
            marginBottom: "32px",
            maxWidth: "100%",
          }}
        >
          Whether you have a fully scoped project or just an idea and a budget,
          I'm worth talking to. I'll tell you honestly what's possible and what
          it should cost.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {channels.map((ch) => (
            <ChannelRow key={ch.label} {...ch} />
          ))}
        </div>
      </div>

      <div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "10px",
            color: COLORS.text3,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Or send a message
        </div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}
          >
            <Field
              label="Your Name"
              type="text"
              placeholder="John Adeyemi"
              required
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
            />
            <Field
              label="Email"
              type="email"
              placeholder="john@company.com"
              required
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: "9px",
                color: COLORS.text3,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Project Type
            </div>
            <select
              value={form.type}
              onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
              required
            >
              <option value="">Select type</option>
              {projectTypes.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <Field
            label="Tell me about it"
            as="textarea"
            rows={4}
            placeholder="Describe the project, your timeline, and approximate budget..."
            value={form.message}
            onChange={(v) => setForm((f) => ({ ...f, message: v }))}
          />
          <button
            type="submit"
            disabled={status !== "idle"}
            style={{
              fontFamily: FONTS.mono,
              fontSize: "13px",
              fontWeight: 500,
              background: status === "sent" ? COLORS.green : COLORS.gold,
              color: COLORS.bg,
              padding: "12px 20px",
              borderRadius: 8,
              border: "none",
              cursor: status !== "idle" ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "all 0.3s",
            }}
          >
            {status === "idle" && "Send via WhatsApp →"}
            {status === "sending" && "Opening WhatsApp..."}
            {status === "sent" && "✓ Message Sent"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  as: As = "input",
  type,
  placeholder,
  required,
  value,
  onChange,
  rows,
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          color: COLORS.text3,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 7,
        }}
      >
        {label}
      </div>
      {As === "textarea" ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      )}
    </div>
  );
}

function ChannelRow({ icon, label, value, href, color }) {
  const [hov, setHov] = useState(false);
  const isExternal = href && !href.startsWith("#");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: COLORS.surface,
        border: `1px solid ${hov ? color : COLORS.border}`,
        borderRadius: 10,
        padding: "17px 22px",
        display: "flex",
        alignItems: "center",
        gap: 15,
        transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
        transform: hov ? "translateX(6px)" : "none",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          background: `${color}18`,
          borderRadius: 9,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 19,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            color: COLORS.text3,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: 15, color: COLORS.text, marginTop: 3 }}>
          {value}
        </div>
      </div>
      <span
        style={{
          marginLeft: "auto",
          fontFamily: FONTS.mono,
          fontSize: 14,
          color,
          opacity: hov ? 1 : 0.4,
          transition: "opacity 0.2s",
        }}
      >
        →
      </span>
    </a>
  );
}

// ── FOOTER ───────────────────────────────────────────────────
function Footer() {
  return (
    <>
      <Divider />
      <footer
        style={{
          padding: "24px 20px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          textAlign: "center",
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: FONTS.disp,
            fontSize: "16px",
            fontWeight: 800,
            color: COLORS.white,
          }}
        >
          Abass<span style={{ color: COLORS.gold }}>.</span>
        </a>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "10px",
            color: COLORS.text3,
          }}
        >
          © 2026 Abass Olaiya · BSc Statistics, OAU · Built with MERN
        </span>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            ["WhatsApp", WA_BASE],
            ["Book a Call", CAL_LINK],
            ["Services", "#services"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: FONTS.mono,
                fontSize: "10px",
                color: COLORS.text3,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.gold)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.text3)}
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

// ── FLOATING BUTTONS ─────────────────────────────────────────
function FloatingButtons() {
  const [tip, setTip] = useState(null);
  const Tooltip = ({ text }) => (
    <div
      style={{
        position: "absolute",
        right: 70,
        top: "50%",
        transform: "translateY(-50%)",
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.text,
        fontFamily: FONTS.mono,
        fontSize: 11,
        padding: "7px 13px",
        borderRadius: 7,
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </div>
  );
  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 300,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ position: "relative" }}>
        {tip === "cal" && <Tooltip text="Book a Call" />}
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setTip("cal")}
          onMouseLeave={() => setTip(null)}
          style={{
            width: 54,
            height: 54,
            background: "#4285f4",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "calPulse 2.8s infinite",
            transition: "transform 0.25s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.12)";
            e.currentTarget.style.animation = "none";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.animation = "calPulse 2.8s infinite";
          }}
        >
          <CalIcon size={24} color="#fff" />
        </a>
      </div>
      <div style={{ position: "relative" }}>
        {tip === "wa" && <Tooltip text="Chat on WhatsApp" />}
        <a
          href={`${WA_BASE}?text=${encodeURIComponent("Hi Abass, I found your website and wanted to say hello")}`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setTip("wa")}
          onMouseLeave={() => setTip(null)}
          style={{
            width: 58,
            height: 58,
            background: "#25D366",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "waPulse 2.5s infinite",
            transition: "transform 0.25s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.animation = "none";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.animation = "waPulse 2.5s infinite";
          }}
        >
          <WAIcon />
        </a>
      </div>
    </div>
  );
}

// ── ROOT ─────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Services />
        <Divider />
        <Stack />
        <Divider />
        <Projects />
        <Divider />
        <Creator />
        <Divider />
        <Booking />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
