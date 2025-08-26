// Basic helpers
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
$("#year").textContent = new Date().getFullYear();

// Mobile nav (simple)
const navToggle = $(".nav-toggle");
navToggle?.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

// Reveal on scroll
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add("is-visible"); io.unobserve(e.target); }
  });
}, {threshold:.12});
$$(".reveal").forEach(el=>io.observe(el));


// i18n
const dict = {
  fr: {
    brand: "Amirane World Shipping",
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.tracking": "Suivi",
    "nav.quote": "Demander un devis",
    "nav.contact": "Contact",
    "home.title": "Solutions de transport maritime et logistique fiables",
    "home.lead": "Fret maritime (FCL/LCL), aérien et terrestre, avec un réseau mondial de partenaires.",
    "home.cta.quote": "Demander un devis",
    "home.cta.track": "Suivi de votre expédition",
    "home.stats.ports": "Ports couverts",
    "home.stats.response": "Devis en 72h max",
    "home.stats.support": "Support",
    "about.title": "À propos",
    "about.text": "Société de transport maritime, travaillant avec un réseau de représentants dans les principaux ports mondiaux.",
    "services.title": "Services",
    "services.sea.title": "Transport maritime (FCL / LCL)",
    "services.sea.desc": "Solutions complètes conteneur & groupage.",
    "services.air.title": "Transport aérien",
    "services.air.desc": "Livraisons rapides et prioritaires.",
    "services.road.title": "Transport terrestre",
    "services.road.desc": "Routier et intermodal porte-à-porte.",
    "services.clearance.title": "Dédouanement",
    "services.clearance.desc": "Formalités et conformité douanière.",
    "services.storage.title": "Stockage & assurance",
    "services.storage.desc": "Entrepôts sécurisés et couverture adaptée.",
    "tracking.title": "Suivi",
    "tracking.label": "Numéro de connaissement (B/L)",
    "tracking.submit": "Suivre",
    "quote.title": "Demande de devis",
    "quote.from": "Port de départ",
    "quote.to": "Port d’arrivée",
    "quote.cargo": "Type de marchandise",
    "quote.weight": "Poids / volume",
    "quote.contact": "Coordonnées",
    "quote.phone": "Téléphone",
    "quote.submit": "Obtenir un devis",
    "network.title": "Réseau de partenaires",
    "network.text": "Nous couvrons de nombreux ports à travers notre réseau de partenaires et représentants internationaux.",
    "contact.title": "Contact",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Envoyer",
    "contact.addressLabel": "Adresse:",
    "contact.address": "Hassi Messaoud, Ouargla, Algérie",
    "contact.phoneLabel": "Téléphone:",
    "contact.emailLabel": "Email:",
    "footer.rights": "Tous droits réservés.",
    "footer.ssl": "SSL activé (https)",
    "footer.pwa": "PWA prête",
    "footer.seo": "SEO optimisé",
    // Nouvelles clés
    "tracking.note": "Suivez vos expéditions en temps réel grâce à notre système de suivi précis et sécurisé.",
     "hero.text": "Votre partenaire de confiance pour un transport maritime aérien et terrestre fluide, sécurisé et sans frontières.",
    "contact.intro": "Une question, une demande de devis ou un partenariat ? Notre équipe est là pour vous répondre rapidement.",
    "devis.note": "Obtenez rapidement un devis clair et adapté à vos besoins en transport.",
    "services.note": "Nous nous engageons à fournir des solutions rapides, fiables et adaptées à vos besoins."
  },
  en: {
    brand: "Amirane World Shipping",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.tracking": "Tracking",
    "nav.quote": "Get a Quote",
    "nav.contact": "Contact",
    "home.title": "Reliable ocean freight and logistics solutions",
    "home.lead": "Sea (FCL/LCL), air and road freight with a global partner network.",
    "home.cta.quote": "Get a quote",
    "home.cta.track": "Track your shipment",
    "home.stats.ports": "Ports covered",
    "home.stats.response": "Quotes within 72h",
    "home.stats.support": "Support",
    "about.title": "About",
    "about.text": "Ocean freight company working with representatives in major world ports.",
    "services.title": "Services",
    "services.sea.title": "Sea freight (FCL / LCL)",
    "services.sea.desc": "Full-container and consolidation solutions.",
    "services.air.title": "Air freight",
    "services.air.desc": "Fast, priority deliveries.",
    "services.road.title": "Road transport",
    "services.road.desc": "Door-to-door road and intermodal.",
    "services.clearance.title": "Customs clearance",
    "services.clearance.desc": "Formalities and compliance.",
    "services.storage.title": "Storage & insurance",
    "services.storage.desc": "Secure warehousing and coverage.",
    "tracking.title": "Tracking",
    "tracking.label": "Bill of Lading (B/L)",
    "tracking.submit": "Track",
    "quote.title": "Get a Quote",
    "quote.from": "Port of departure",
    "quote.to": "Port of arrival",
    "quote.cargo": "Cargo type",
    "quote.weight": "Weight / volume",
    "quote.contact": "Contact info",
    "quote.phone": "Phone",
    "quote.submit": "Request quote",
    "network.title": "Partner network",
    "network.text": "We cover many ports through our international representatives.",
    "contact.title": "Contact",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send",
    "contact.addressLabel": "Address:",
    "contact.address": "Hassi Messaoud, Ouargla, Algeria",
    "contact.phoneLabel": "Phone:",
    "contact.emailLabel": "Email:",
    "footer.rights": "All rights reserved.",
    "footer.ssl": "SSL enabled (https)",
    "footer.pwa": "PWA ready",
    "footer.seo": "SEO optimized",
    // Nouvelles clés
    "tracking.note": "Track your shipments in real time with our precise and secure tracking system.",
    "contact.intro": "Have a question, a quote request, or a partnership? Our team is here to respond quickly.",
    "devis.note": "Quickly get a clear quote tailored to your transport needs.",
    "services.note": "We are committed to providing fast, reliable, and tailored solutions for your needs.",
    "hero.text": "Your trusted partner for seamless, secure, and borderless sea, air, and land transportation.",
    
  },
  ar: {
    brand: "amirane world shipping ",
    "hero.text": "شريكك الموثوق به للنقل البحري والجوي والبري بسلاسة وأمان وبدون حدود.",
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.tracking": "تتبع",
    "nav.quote": "طلب عرض سعر",
    "nav.contact": "اتصال",
    "home.title": "حلول موثوقة للشحن والخدمات اللوجستية",
    "home.lead": "شحن بحري (حاوية كاملة/مشترك)، جوي وبري مع شبكة عالمية من الشركاء.",
    "home.cta.quote": "اطلب عرض سعر",
    "home.cta.track": "تتبع شحنتك",
    "home.stats.ports": "موانئ مشمولة",
    "home.stats.response": "عروض خلال 72 ساعة",
    "home.stats.support": "دعم",
    "about.title": "من نحن",
    "about.text": "شركة شحن بحري تعمل مع ممثلين في أهم موانئ العالم.",
    "services.title": "الخدمات",
    "services.sea.title": "الشحن البحري (FCL / LCL)",
    "services.sea.desc": "حلول الحاويات الكاملة والمشتركة.",
    "services.air.title": "الشحن الجوي",
    "services.air.desc": "تسليمات سريعة وأولوية.",
    "services.road.title": "النقل البري",
    "services.road.desc": "من الباب إلى الباب بري/متعدد الوسائط.",
    "services.clearance.title": "التخليص الجمركي",
    "services.clearance.desc": "إجراءات وامتثال.",
    "services.storage.title": "التخزين والتأمين",
    "services.storage.desc": "مستودعات آمنة وتغطية.",
    "tracking.title": "تتبع",
    "tracking.label": "رقم بوليصة الشحن",
    "tracking.submit": "تتبع",
    "quote.title": "طلب عرض سعر",
    "quote.from": "ميناء المغادرة",
    "quote.to": "ميناء الوصول",
    "quote.cargo": "نوع البضاعة",
    "quote.weight": "الوزن / الحجم",
    "quote.contact": "بيانات التواصل",
    "quote.phone": "هاتف",
    "quote.submit": "إرسال الطلب",
        "network.title": "شبكة الشركاء",
    "network.text": "نغطي العديد من الموانئ عبر شبكة ممثلينا الدوليين.",
    "contact.title": "اتصال",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.submit": "إرسال",
    "contact.addressLabel": "العنوان:",
    "contact.address": "حاسي مسعود، ورقلة، الجزائر",
    "contact.phoneLabel": "هاتف:",
    "contact.emailLabel": "البريد:",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.ssl": "SSL مفعل (https)",
    "footer.pwa": "PWA جاهزة",
    "footer.seo": "محسنة لمحركات البحث",
    // Nouvelles clés
    "tracking.note": "تتبع شحناتك في الوقت الفعلي بفضل نظام التتبع الدقيق والآمن لدينا.",
    "contact.intro": "هل لديك سؤال أو طلب عرض سعر أو شراكة؟ فريقنا هنا للرد بسرعة.",
    "devis.note": "احصل بسرعة على عرض سعر واضح ومخصص لاحتياجاتك في النقل.",
    "services.note": "نحن ملتزمون بتقديم حلول سريعة وموثوقة ومناسبة لاحتياجاتك.",
      "home": "الرئيسية",
  "about": "من نحن",
  "services": "خدماتنا",
  "tracking": "تتبع",
  "contact": "اتصل بنا",
  "learn_more": "اعرف المزيد",
  "our_mission": "مهمتنا",
  "get_quote": "اطلب عرض سعر",
  "faq": "الأسئلة الشائعة",
  "read_more": "اقرأ المزيد"
  }
};


const setLang = (lang) => {
  const isRTL = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[lang]?.[key]) el.textContent = dict[lang][key];
  });
  $$(".lang-switch button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.lang===lang));
  localStorage.setItem("lang", lang);
};
$$(".lang-switch button").forEach(b=>b.addEventListener("click", ()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem("lang") || "fr");

// Tracking form (placeholder)
$("#tracking-form")?.addEventListener("submit", (e)=>{
  e.preventDefault();
  const bl = new FormData(e.currentTarget).get("bl")?.toString().trim();
  const hint = $("#tracking-hint");
  if(!bl || bl.length < 6){ hint.textContent = (dict[document.documentElement.lang]["tracking.label"] + " — invalide."); return; }
  hint.textContent = "Recherche du statut…";
  // Simulate request
  setTimeout(()=>{
    hint.textContent = `Statut: En transit — ETA 6 jours pour ${bl}`;
  }, 900);
});

// Quote form (placeholder)
$("#quote-form")?.addEventListener("submit", async (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget).entries());
  $("#quote-hint").textContent = "Envoi de votre demande…";
  // TODO: POST to your backend endpoint
  setTimeout(()=>{$("#quote-hint").textContent = "Merci ! Nous revenons vers vous sous 24–72h."}, 900);
});








