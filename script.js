/* =========================================================
   OUR STORY — CINEMATIC BIRTHDAY WEBSITE
   script.js
   ========================================================= */

/* ===== PERSONAL DETAILS — EDIT HERE ===== */
const CONFIG = {
  BOYFRIEND_NAME: "Him",
  MY_NAME: "Ur Love",
  BIRTHDAY_DATE: "September 9",
  RELATIONSHIP_START_DATE: "The day it all Began",

  // ---- Memory gallery photos (assets/photo1.jpg ... photo10.jpg) ----
  galleryPhotos: [
    { src: "assets/p1.jpeg",  caption: "That evening we didn't want to end." },
    { src: "assets/p2.jpeg",  caption: "You, mid-laugh — my favorite sound." },
    { src: "assets/p3.jpeg",  caption: "A quiet moment, just us." },
    { src: "assets/p4.jpeg",  caption: "This one lives rent-free in my head." },
    { src: "assets/p5.jpeg",  caption: "Somewhere in the middle of nowhere, with you." },
    { src: "assets/p6.jpeg",  caption: "Golden hour, golden you." },
    { src: "assets/p7.jpeg",  caption: "The little in-between moments." },
    { src: "assets/p8.jpeg",  caption: "Us, being us." },
    { src: "assets/p9.jpeg",  caption: "One I never get tired of looking at." },
    { src: "assets/p10.jpeg", caption: "A memory I'll keep forever." }
  ],

  // ---- Our Story timeline ----
timeline: [
  {
    date: "2020",
    title: "The Beginning",
    photo: "assets/p1.jpeg",
    text: "Namma story eppadi start aagum nu appo namakkum theriyadhu. Oru simple beginning-ah irundhadhu, aana adhu dhaan en life-la romba beautiful-aana oru chapter-ku start."
  },

  {
    date: "2021",
    title: "Our First Conversation",
    photo: "assets/p2.jpeg",
    text: "First time pesumbodhu idhu ivlo special-a maarum nu naan nenaikkave illa. Konjam konjam-ah pesuna conversations, enakku unna innum nerukkama feel panna vachadhu."
  },

  {
    date: "2023",
    title: "The First Memory",
    photo: "assets/p3.jpeg",
    text: "Namma share pannina sila moments romba simple-ah irundhalum, en heart-la adhu romba special. Innikum random-ah napagam varumbodhu automatic-ah smile varum."
  },

  {
    date: "2024",
    title: "When You Became Special",
    photo: "assets/p4.jpeg",
    text: "Eppo nee enakku ivlo important-a aayita nu unakke theriyum. Aana oru stage-ku apram, un kooda pesuradhu, unna paakuradhu, Nampa love conversation and nampa romatic momemts elame ne ilama enala vazha mudiyathu Atha strong panuthu."
  },

  {
    date: "2025",
    title: "All The Little Moments",
    photo: "assets/p5.jpeg",
    text: "Namma share pannina every small moment-um enakku oru beautiful memory. Sirippu, teasing, conversations, small fights, care, Romance — idhellam serndhu dhaan namma love life story-a beautiful-a make pannudhu."
  },

  {
    date: "Today",
    title: "Still Choosing You",
    photo: "assets/p6.jpeg",
    text: "Innikum naan unna choose panren, naalaikum choose pannuven. Life-la enna nadandhalum ne tha enakku na tha unakku sethalum sava una vidu vazha mata, namma share panra indha bond enakku romba precious. Happy Birthday my love. ❤️"
  }
],
  // ---- Video memories (assets/video1.mp4, video2.mp4, video3.mp4) ----
  videoMemories: [
    { src: "assets/v1.mp4", title: "Our Random Moments", sub: "Just Us ❤️" },
    { src: "assets/v2.mp4", title: "One Of My Favorite Days", sub: "Forever A Memory" },
    { src: "assets/v3.mp4", title: "A Little Piece Of Us", sub: "Never Gets Old" }
  ],

  // ---- Scrapbook / polaroids ----
  scrapbook: [
    { src: "assets/p11.jpeg", caption: "my favorite person", rot: -6 },
    { src: "assets/p12.jpeg", caption: "that smile ❤️", rot: 4 },
    { src: "assets/p13.jpeg", caption: "one for the memories", rot: -3 },
    { src: "assets/p14.jpeg", caption: "just us", rot: 7 },
    { src: "assets/p15.jpeg", caption: "always you", rot: -5 }
  ],

  // ---- Reasons I love you ----
  reasons: [
    { title: "Your Smile", msg: "It's the first thing that made me want to know you better." },
    { title: "Your Voice", msg: "I could listen to you talk about nothing for hours." },
    { title: "Your Kindness", msg: "The way you treat people when you think no one's watching." },
    { title: "The Way You Care", msg: "You remember the small things, and that's never small to me." },
    { title: "The Way You Make Me Laugh", msg: "Even on my worst days, you find a way." },
    { title: "Your Presence", msg: "Everything just feels calmer when you're around." },
    { title: "Your Little Habits", msg: "The odd, specific things that are just so you." },
    { title: "Simply… You", msg: "No big reason needed. Just you, exactly as you are." }
  ],

  // ---- Final collage (assets/final1.jpg ... final5.jpg) ----
  finalCollage: ["assets/final1.jpg","assets/final2.jpg","assets/final3.jpg","assets/final4.jpg","assets/final5.jpg"]
};

document.addEventListener("DOMContentLoaded", () => {
  applyPersonalDetails();
  initIntro();
  initNav();
  initScrollReveal();
  initAmbientParticles();
  initHeroVideo();
  buildGallery();
  initLightbox();
  buildTimeline();
  buildVideoCards();
  initVideoModal();
  buildScrapbook();
  buildLoveCards();
  initEnvelope();
  initSurprise();
  buildFinalCollage();
  initMusicPlayer();
});

/* ---------------------------------------------------------
   Personal details injection
--------------------------------------------------------- */
function applyPersonalDetails(){
  const sig = document.getElementById("letter-signature");
  if (sig) sig.textContent = CONFIG.MY_NAME;
  const foot = document.getElementById("footer-name");
  if (foot) foot.textContent = CONFIG.MY_NAME;
  document.title = `Happy Birthday, ${CONFIG.BOYFRIEND_NAME} ❤️`;
}

/* ---------------------------------------------------------
   Helper: attach graceful fallback to any <img>
--------------------------------------------------------- */
function withImgFallback(img){
  img.addEventListener("error", () => {
    img.closest("[data-fallback-target]")?.classList.add("img-fallback");
    img.parentElement.classList.add("img-fallback");
  }, { once: true });
}

/* ---------------------------------------------------------
   INTRO
--------------------------------------------------------- */
function initIntro(){
  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enter-btn");
  const burstLayer = document.getElementById("heart-burst");

  enterBtn.addEventListener("click", () => {
    spawnHeartBurst(burstLayer);
    setTimeout(() => {
      intro.classList.add("hidden");
      document.getElementById("main-nav").classList.add("visible");
      startMusicAfterInteraction();
    }, 500);
  });
}

function spawnHeartBurst(layer){
  const count = 22;
  for (let i = 0; i < count; i++){
    const h = document.createElement("span");
    h.className = "burst-heart";
    h.textContent = "❤";
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
    const dist = 160 + Math.random() * 220;
    h.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
    h.style.setProperty("--ty", `${Math.sin(angle) * dist}px`);
    h.style.setProperty("--tr", `${(Math.random() * 360) | 0}deg`);
    h.style.animationDelay = `${Math.random() * 0.15}s`;
    layer.appendChild(h);
    setTimeout(() => h.remove(), 1600);
  }
}

/* ---------------------------------------------------------
   NAVIGATION
--------------------------------------------------------- */
function initNav(){
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", () => {
    const open = hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll("[data-nav]").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });
}

/* ---------------------------------------------------------
   SCROLL REVEAL (IntersectionObserver)
--------------------------------------------------------- */
function initScrollReveal(){
  const targets = document.querySelectorAll("[data-reveal], .fade-up, .fade-scale, [data-anim]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion){
    targets.forEach(t => t.classList.add("in-view"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        // stagger children with [data-reveal] inside hero for a cascading feel
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });

  targets.forEach(t => io.observe(t));
}

/* ---------------------------------------------------------
   AMBIENT PARTICLES (floating hearts + soft stars, whole page)
--------------------------------------------------------- */
function initAmbientParticles(){
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let particles = [];
  let width, height, dpr;

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.width = window.innerWidth * dpr;
    height = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
  }
  resize();
  window.addEventListener("resize", resize);

  const COUNT = window.innerWidth < 700 ? 14 : 26;
  function spawn(){
    return {
      x: Math.random() * width,
      y: height + Math.random() * height,
      size: (6 + Math.random() * 10) * dpr,
      speed: (0.15 + Math.random() * 0.35) * dpr,
      drift: (Math.random() - 0.5) * 0.3,
      opacity: 0.08 + Math.random() * 0.18,
      isHeart: Math.random() > 0.5
    };
  }
  particles = Array.from({ length: COUNT }, spawn);

  if (reduceMotion){
    canvas.style.display = "none";
    return;
  }

  function drawHeart(x, y, size, opacity){
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "#cba270";
    ctx.translate(x, y);
    ctx.scale(size / 20, size / 20);
    ctx.beginPath();
    ctx.moveTo(0, 4);
    ctx.bezierCurveTo(0, 0, -8, -2, -8, -6);
    ctx.bezierCurveTo(-8, -10, -3, -10, 0, -4);
    ctx.bezierCurveTo(3, -10, 8, -10, 8, -6);
    ctx.bezierCurveTo(8, -2, 0, 0, 0, 4);
    ctx.fill();
    ctx.restore();
  }

  let raf;
  function tick(){
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.y -= p.speed;
      p.x += p.drift;
      if (p.y < -20) Object.assign(p, spawn(), { y: height + 20 });
      if (p.isHeart){
        drawHeart(p.x, p.y, p.size, p.opacity);
      } else {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = "#fbf6f3";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });
    raf = requestAnimationFrame(tick);
  }
  tick();
}

/* ---------------------------------------------------------
   Generic custom video controls (used by hero video + modal)
--------------------------------------------------------- */
function wireVideoControls(video, { playBtn, track, fill, muteBtn, volumeInput }){
  function updatePlayIcon(){
    playBtn.textContent = video.paused ? "▶" : "❚❚";
    playBtn.setAttribute("aria-label", video.paused ? "Play video" : "Pause video");
  }
  playBtn.addEventListener("click", () => {
    if (video.paused) video.play(); else video.pause();
  });
  video.addEventListener("play", updatePlayIcon);
  video.addEventListener("pause", updatePlayIcon);

  video.addEventListener("timeupdate", () => {
    if (!video.duration) return;
    fill.style.width = `${(video.currentTime / video.duration) * 100}%`;
  });
  track.addEventListener("click", (e) => {
    const rect = track.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    if (video.duration) video.currentTime = ratio * video.duration;
  });

  function updateMuteIcon(){
    muteBtn.textContent = (video.muted || video.volume === 0) ? "🔇" : "🔊";
  }
  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    updateMuteIcon();
  });
  volumeInput.addEventListener("input", () => {
    video.volume = Number(volumeInput.value);
    video.muted = video.volume === 0;
    updateMuteIcon();
  });
  updatePlayIcon();
  updateMuteIcon();
}

/* ---------------------------------------------------------
   HERO VIDEO SECTION
--------------------------------------------------------- */
function initHeroVideo(){
  const section = document.getElementById("video-hero");
  const video = document.getElementById("hero-video");
  if (!video) return;

  wireVideoControls(video, {
    playBtn: document.getElementById("hero-play"),
    track: document.getElementById("hero-progress-track"),
    fill: document.getElementById("hero-progress-fill"),
    muteBtn: document.getElementById("hero-mute"),
    volumeInput: document.getElementById("hero-volume")
  });

  // fade/scale into view + soft autoplay (muted) once visible
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        video.muted = true;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.4 });
  io.observe(section);
}

/* ---------------------------------------------------------
   MEMORY GALLERY (masonry) + lightbox data
--------------------------------------------------------- */
let galleryState = { index: 0 };

function buildGallery(){
  const grid = document.getElementById("masonry-grid");
  CONFIG.galleryPhotos.forEach((photo, i) => {
    const fig = document.createElement("figure");
    fig.className = "masonry-item";
    fig.dataset.index = i;
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.caption || "";
    img.loading = "lazy";
    withImgFallback(img);
    const glow = document.createElement("div");
    glow.className = "m-glow";
    fig.appendChild(img);
    fig.appendChild(glow);
    fig.addEventListener("click", () => openLightbox(i));
    grid.appendChild(fig);
  });
}

function initLightbox(){
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lb-img");
  const caption = document.getElementById("lb-caption");
  const counter = document.getElementById("lb-counter");

  document.getElementById("lb-close").addEventListener("click", closeLightbox);
  document.querySelector(".lightbox-backdrop").addEventListener("click", closeLightbox);
  document.getElementById("lb-prev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lb-next").addEventListener("click", () => stepLightbox(1));

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  // swipe support
  let touchStartX = null;
  lightbox.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) stepLightbox(dx > 0 ? -1 : 1);
    touchStartX = null;
  }, { passive: true });

  function render(){
    const photo = CONFIG.galleryPhotos[galleryState.index];
    img.src = photo.src;
    img.alt = photo.caption || "";
    caption.textContent = photo.caption || "";
    counter.textContent = `${galleryState.index + 1} / ${CONFIG.galleryPhotos.length}`;
  }
  window._renderLightbox = render;
}

function openLightbox(index){
  galleryState.index = index;
  window._renderLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.getElementById("lightbox").setAttribute("aria-hidden", "false");
}
function closeLightbox(){
  document.getElementById("lightbox").classList.remove("open");
  document.getElementById("lightbox").setAttribute("aria-hidden", "true");
}
function stepLightbox(dir){
  const len = CONFIG.galleryPhotos.length;
  galleryState.index = (galleryState.index + dir + len) % len;
  window._renderLightbox();
}

/* ---------------------------------------------------------
   TIMELINE
--------------------------------------------------------- */
function buildTimeline(){
  const wrap = document.getElementById("timeline");
  CONFIG.timeline.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "timeline-item fade-up";
    el.innerHTML = `
      <div class="timeline-dot">${i + 1}</div>
      <div class="timeline-date">${item.date}</div>
      <h3 class="timeline-title">${item.title}</h3>
      <div class="timeline-media"><img src="${item.photo}" alt="" loading="lazy"></div>
      <p class="timeline-text">${item.text}</p>
    `;
    const img = el.querySelector("img");
    withImgFallback(img);
    wrap.appendChild(el);
  });
  // re-run reveal observer for the newly added nodes
  initScrollRevealFor(wrap.querySelectorAll(".fade-up"));
}

/* helper to observe dynamically injected nodes */
function initScrollRevealFor(nodeList){
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion){ nodeList.forEach(n => n.classList.add("in-view")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
  nodeList.forEach(n => io.observe(n));
}

/* ---------------------------------------------------------
   VIDEO MEMORY CARDS + MODAL (lazy loaded)
--------------------------------------------------------- */
function buildVideoCards(){
  const wrap = document.getElementById("video-cards");
  CONFIG.videoMemories.forEach((v, i) => {
    const card = document.createElement("div");
    card.className = "video-card fade-up";
    card.innerHTML = `
      <div class="vcard-fallback"></div>
      <div class="vcard-overlay"></div>
      <div class="vcard-play">▶</div>
      <div class="vcard-caption">
        <div class="vc-title">${v.title}</div>
        <div class="vc-sub">${v.sub}</div>
      </div>
    `;
    card.addEventListener("click", () => openVideoModal(v.src, v.title));
    wrap.appendChild(card);
  });
  initScrollRevealFor(wrap.querySelectorAll(".fade-up"));
}

function initVideoModal(){
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("vm-video");

  wireVideoControls(video, {
    playBtn: document.getElementById("vm-play"),
    track: document.getElementById("vm-progress-track"),
    fill: document.getElementById("vm-progress-fill"),
    muteBtn: document.getElementById("vm-mute"),
    volumeInput: document.getElementById("vm-volume")
  });

  document.getElementById("vm-close").addEventListener("click", closeVideoModal);
  document.querySelector(".vm-backdrop").addEventListener("click", closeVideoModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeVideoModal();
  });

  window._openVideoModal = (src, title) => {
    video.src = src; // lazy: only set src when actually opened
    video.muted = false;
    video.currentTime = 0;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    video.play().catch(() => {});
  };
  window._closeVideoModal = () => {
    video.pause();
    video.removeAttribute("src");
    video.load();
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };
}
function openVideoModal(src, title){ window._openVideoModal(src, title); }
function closeVideoModal(){ window._closeVideoModal(); }

/* ---------------------------------------------------------
   SCRAPBOOK / POLAROIDS
--------------------------------------------------------- */
function buildScrapbook(){
  const wrap = document.getElementById("scrapbook-grid");
  CONFIG.scrapbook.forEach(p => {
    const card = document.createElement("div");
    card.className = "polaroid fade-up";
    card.style.setProperty("--rot", `${p.rot}deg`);
    card.innerHTML = `
      <div class="tape"></div>
      <img src="${p.src}" alt="" loading="lazy">
      <div class="caption">${p.caption}</div>
    `;
    const img = card.querySelector("img");
    img.addEventListener("error", () => {
      img.replaceWith(Object.assign(document.createElement("div"), { className: "polaroid-fallback" }));
    }, { once: true });
    wrap.appendChild(card);
  });
  initScrollRevealFor(wrap.querySelectorAll(".fade-up"));
}

/* ---------------------------------------------------------
   REASONS I LOVE YOU — flip cards
--------------------------------------------------------- */
function buildLoveCards(){
  const wrap = document.getElementById("love-cards");
  CONFIG.reasons.forEach(r => {
    const card = document.createElement("div");
    card.className = "love-card fade-up";
    card.innerHTML = `
      <div class="love-card-inner">
        <div class="love-card-face love-card-front">${r.title}</div>
        <div class="love-card-face love-card-back">${r.msg}</div>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    wrap.appendChild(card);
  });
  initScrollRevealFor(wrap.querySelectorAll(".fade-up"));
}

/* ---------------------------------------------------------
   LETTER / ENVELOPE
--------------------------------------------------------- */
function initEnvelope(){
  const envelope = document.getElementById("envelope");
  const btn = document.getElementById("open-letter-btn");
  btn.addEventListener("click", () => {
    const opening = !envelope.classList.contains("open");
    envelope.classList.toggle("open");
    btn.textContent = opening ? "Close" : "Open My Heart";
    if (opening) floatHeartsAround(document.querySelector(".letter-section"));
  });
}

function floatHeartsAround(container){
  for (let i = 0; i < 10; i++){
    const h = document.createElement("span");
    h.textContent = "❤";
    h.style.position = "absolute";
    h.style.left = `${40 + Math.random() * 20}%`;
    h.style.bottom = "10%";
    h.style.color = "#cba270";
    h.style.fontSize = `${12 + Math.random() * 14}px`;
    h.style.opacity = "0.8";
    h.style.pointerEvents = "none";
    h.style.transition = "transform 2.2s ease-out, opacity 2.2s ease-out";
    container.style.position = "relative";
    container.appendChild(h);
    requestAnimationFrame(() => {
      h.style.transform = `translateY(-${180 + Math.random() * 140}px) translateX(${(Math.random() - 0.5) * 80}px)`;
      h.style.opacity = "0";
    });
    setTimeout(() => h.remove(), 2300);
  }
}

/* ---------------------------------------------------------
   FINAL SURPRISE
--------------------------------------------------------- */
function initSurprise(){
  const btn = document.getElementById("surprise-btn");
  const pre = document.getElementById("surprise-pre");
  const stage = document.getElementById("surprise-stage");
  const heartbeat = document.getElementById("heartbeat-glow");
  const bigHeart = document.getElementById("big-heart");
  const finalTextLines = document.querySelectorAll("#surprise-final-text p");
  const photosLayer = document.getElementById("surprise-photos");

  btn.addEventListener("click", () => {
    pre.style.transition = "opacity .5s ease";
    pre.style.opacity = "0";
    setTimeout(() => { pre.style.display = "none"; }, 500);

    stage.classList.add("active", "dark");
    heartbeat.classList.add("beat");

    setTimeout(() => {
      bigHeart.classList.add("pop");
    }, 600);

    setTimeout(() => {
      launchConfetti();
      scatterMemoryPhotos(photosLayer);
      stage.classList.remove("dark");
    }, 1400);

    finalTextLines.forEach((line, i) => {
      setTimeout(() => line.classList.add("in"), 2200 + i * 1000);
    });
  });
}

function scatterMemoryPhotos(layer){
  const pool = CONFIG.galleryPhotos.slice(0, 6);
  pool.forEach((p, i) => {
    const img = document.createElement("img");
    img.src = p.src;
    img.alt = "";
    img.style.left = `${8 + Math.random() * 78}%`;
    img.style.top = `${8 + Math.random() * 70}%`;
    img.style.setProperty("--r", `${(Math.random() - 0.5) * 20}deg`);
    img.style.animationDelay = `${i * 0.15}s`;
    img.addEventListener("error", () => img.remove(), { once: true });
    layer.appendChild(img);
    setTimeout(() => img.remove(), 3600 + i * 150);
  });
}

function launchConfetti(){
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  const colors = ["#cba270", "#b85c6b", "#f3c9c9", "#fbf6f3", "#6e1f2e"];
  const pieces = Array.from({ length: 130 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 * dpr,
    size: (4 + Math.random() * 6) * dpr,
    speedY: (2 + Math.random() * 3) * dpr,
    speedX: (Math.random() - 0.5) * 2 * dpr,
    rot: Math.random() * Math.PI,
    rotSpeed: (Math.random() - 0.5) * 0.2,
    color: colors[(Math.random() * colors.length) | 0]
  }));

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  let frame = 0;
  const maxFrames = 220;
  function tick(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rot += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    frame++;
    if (frame < maxFrames){
      requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  tick();
}

/* ---------------------------------------------------------
   FINAL PHOTO COLLAGE
--------------------------------------------------------- */
function buildFinalCollage(){
  const grid = document.getElementById("collage-grid");
  CONFIG.finalCollage.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.loading = "lazy";
    img.addEventListener("error", () => {
      img.replaceWith(Object.assign(document.createElement("div"), { className: "cg-fallback" }));
    }, { once: true });
    grid.appendChild(img);
  });
}

/* =========================================================
   BIRTHDAY WEBSITE - MUSIC PLAYER
   ========================================================= */

function initMusicPlayer() {

  const audio = document.getElementById("bg-music");
  const player = document.getElementById("music-player");
  const toggle = document.getElementById("music-toggle");
  const muteBtn = document.getElementById("music-mute");
  const volume = document.getElementById("music-volume");

  // If music elements don't exist, stop here
  if (!audio || !player || !toggle || !muteBtn || !volume) {
    return;
  }


  /* =======================================================
     INITIAL MUSIC SETTINGS
     ======================================================= */

  audio.volume = Number(volume.value);


  /* =======================================================
     MUSIC PLAY / PAUSE BUTTON
     ======================================================= */

  toggle.addEventListener("click", () => {

    if (audio.paused) {

      audio.play().catch(() => {});

    } else {

      audio.pause();

    }

  });


  /* =======================================================
     MUSIC PLAYING ANIMATION
     ======================================================= */

  audio.addEventListener("play", () => {

    player.classList.add("playing");

    toggle.setAttribute("aria-label", "Pause music");

  });


  audio.addEventListener("pause", () => {

    player.classList.remove("playing");

    toggle.setAttribute("aria-label", "Play music");

  });


  /* =======================================================
     MUTE / UNMUTE
     ======================================================= */

  muteBtn.addEventListener("click", () => {

    audio.muted = !audio.muted;

    if (audio.muted) {

      muteBtn.textContent = "🔇";
      muteBtn.setAttribute("aria-label", "Unmute music");

    } else {

      muteBtn.textContent = "🔊";
      muteBtn.setAttribute("aria-label", "Mute music");

    }

  });


  /* =======================================================
     VOLUME CONTROL
     ======================================================= */

  volume.addEventListener("input", () => {

    audio.volume = Number(volume.value);

    if (audio.volume === 0) {

      audio.muted = true;
      muteBtn.textContent = "🔇";

    } else {

      audio.muted = false;
      muteBtn.textContent = "🔊";

    }

  });


  /* =======================================================
     VIDEO + BACKGROUND MUSIC CONTROL
     ======================================================= */

  const videos = document.querySelectorAll("video");


  videos.forEach((video) => {


    /* -----------------------------------------------------
       WHEN VIDEO STARTS
       ----------------------------------------------------- */

    video.addEventListener("play", () => {

      /*
        Background music pause aagum.

        IMPORTANT:
        audio.currentTime change panna maatom.

        So song enga pause aacho,
        exactly anga dhaan remember aagum.
      */

      if (!audio.paused) {

        audio.pause();

      }

    });


    /* -----------------------------------------------------
       WHEN VIDEO IS PAUSED
       ----------------------------------------------------- */

    video.addEventListener("pause", () => {

      /*
        Video pause aana background music
        automatically resume aagum.
      */

      audio.play().catch(() => {});

    });


    /* -----------------------------------------------------
       WHEN VIDEO ENDS
       ----------------------------------------------------- */

    video.addEventListener("ended", () => {

      /*
        Video complete aana music resume.
      */

      audio.play().catch(() => {});

    });

  });


  /* =======================================================
     START MUSIC AFTER USER INTERACTION
     ======================================================= */

  window._startMusicAfterInteraction = () => {

    audio.play().catch(() => {

      /*
        Browser autoplay block pannina,
        user music button click pannalaam.
      */

    });

  };

}


/* =========================================================
   START MUSIC FUNCTION
   ========================================================= */

function startMusicAfterInteraction() {

  if (window._startMusicAfterInteraction) {

    window._startMusicAfterInteraction();

  }

}


/* =========================================================
   INITIALIZE MUSIC PLAYER
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initMusicPlayer();

});