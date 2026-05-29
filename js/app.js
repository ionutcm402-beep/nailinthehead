/* =============================================
   NAIL IN THE HEAD — Main JavaScript
   ============================================= */

const CATS = {
  all:      "All",
  work:     "Work",
  money:    "Money",
  letters:  "Letters & Complaints",
  everyday: "Everyday Life",
  business: "Small Business",
  writing:  "Writing"
};

let currentCat = "all";
let currentSearch = "";

/* ---- NAVIGATION ---- */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));

  const page = document.getElementById("page-" + pageId);
  if (page) page.classList.add("active");

  const link = document.querySelector(`[data-page="${pageId}"]`);
  if (link) link.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageId === "prompts") renderPrompts();
}

/* ---- CATEGORY FILTER ---- */
function setCategory(cat, btn) {
  currentCat = cat;
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderPrompts();
}

/* ---- SEARCH ---- */
function handleSearch() {
  currentSearch = document.getElementById("searchInput").value.toLowerCase().trim();
  renderPrompts();
}

/* ---- RENDER PROMPT CARDS ---- */
function renderPrompts() {
  const grid = document.getElementById("promptGrid");
  if (!grid) return;

  const filtered = PROMPTS.filter(p => {
    const matchCat = currentCat === "all" || p.cat === currentCat;
    const matchSearch = !currentSearch ||
      p.title.toLowerCase().includes(currentSearch) ||
      p.desc.toLowerCase().includes(currentSearch) ||
      CATS[p.cat].toLowerCase().includes(currentSearch);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results">No prompts found for "<strong>${currentSearch}</strong>". Try something else.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="prompt-card">
      <div class="card-cat">${CATS[p.cat]}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.desc}</div>
      <div class="prompt-preview">${p.preview}</div>
      <div class="card-footer">
        <button class="copy-btn" id="copy-${p.id}" onclick="quickCopy(${p.id})">Copy prompt</button>
        <button class="expand-btn" onclick="openModal(${p.id})">View full ↗</button>
      </div>
    </div>
  `).join("");
}

/* ---- QUICK COPY (from card) ---- */
function quickCopy(id) {
  const p = PROMPTS.find(x => x.id === id);
  if (!p) return;
  navigator.clipboard.writeText(p.prompt).then(() => {
    const btn = document.getElementById("copy-" + id);
    if (btn) {
      btn.textContent = "Copied ✓";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "Copy prompt";
        btn.classList.remove("copied");
      }, 2000);
    }
    showToast("Prompt copied to clipboard!");
  });
}

/* ---- MODAL ---- */
function openModal(id) {
  const p = PROMPTS.find(x => x.id === id);
  if (!p) return;

  document.getElementById("modalCat").textContent = CATS[p.cat];
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalPrompt").textContent = p.prompt;
  document.getElementById("modalTip").textContent = p.tip;

  const copyBtn = document.getElementById("modalCopyBtn");
  copyBtn.textContent = "Copy prompt to clipboard";
  copyBtn.classList.remove("copied");
  copyBtn._promptId = id;

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (!e || e.target === document.getElementById("modalOverlay")) {
    document.getElementById("modalOverlay").classList.remove("open");
    document.body.style.overflow = "";
  }
}

function copyModalPrompt() {
  const text = document.getElementById("modalPrompt").textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("modalCopyBtn");
    btn.textContent = "Copied ✓";
    btn.classList.add("copied");
    showToast("Prompt copied to clipboard!");
    setTimeout(() => {
      btn.textContent = "Copy prompt to clipboard";
      btn.classList.remove("copied");
    }, 2500);
  });
}

/* ---- SUBMIT FORM ---- */
function handleSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("submitTitle").value.trim();
  const cat   = document.getElementById("submitCat").value;
  const desc  = document.getElementById("submitDesc").value.trim();
  const prompt = document.getElementById("submitPrompt").value.trim();

  if (!title || !cat || !desc || !prompt) {
    showToast("Please fill in all fields before submitting.");
    return;
  }

  /* In a real deployment, you'd POST this to a backend or Formspree.
     For now we show a success message and log it. */
  console.log("Submitted prompt:", { title, cat, desc, prompt });

  document.getElementById("submitSuccess").style.display = "block";
  document.getElementById("submitForm").reset();
  document.getElementById("submitSuccess").scrollIntoView({ behavior: "smooth" });
}

/* ---- TOAST ---- */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

/* ---- KEYBOARD ---- */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

/* ---- INIT ---- */
document.addEventListener("DOMContentLoaded", () => {
  renderPrompts();

  /* Search on enter key */
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") handleSearch();
    });
  }

  /* Submit form */
  const form = document.getElementById("submitForm");
  if (form) form.addEventListener("submit", handleSubmit);
});


/* ---- PREMIUM / WAITLIST ---- */
function scrollToWaitlist() {
  const el = document.getElementById("waitlistSection");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
}

/* Waitlist form handler */
document.addEventListener("DOMContentLoaded", () => {
  const waitlistForm = document.getElementById("waitlistForm");
  if (waitlistForm) {
    waitlistForm.addEventListener("submit", e => {
      e.preventDefault();
      const name  = document.getElementById("waitlistName").value.trim();
      const email = document.getElementById("waitlistEmail").value.trim();
      if (!name || !email) {
        showToast("Please enter your name and email.");
        return;
      }
      if (!email.includes("@")) {
        showToast("Please enter a valid email address.");
        return;
      }
      /* In production: POST to Formspree, Mailchimp, ConvertKit etc.
         For now we store locally and show success. */
      const waitlist = JSON.parse(localStorage.getItem("nitwaitlist") || "[]");
      waitlist.push({ name, email, date: new Date().toISOString() });
      localStorage.setItem("nitwaitlist", JSON.stringify(waitlist));
      console.log("Waitlist signup:", { name, email });
      document.getElementById("waitlistSuccess").style.display = "block";
      waitlistForm.reset();
      showToast("You're on the waitlist!");
    });
  }
});
