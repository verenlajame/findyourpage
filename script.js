// Ambil parameter URL
function getParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Load file HTML sesuai parameter
function loadPage(page) {
  fetch(page + ".html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    })
    .catch(() => {
      document.getElementById("content").innerHTML =
        "<p style='padding:4rem;text-align:center;color:#8B4A4A;'>Halaman tidak ditemukan.</p>";
    });
}

// Set menu aktif
function setActiveMenu(page) {
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "index.html?p=" + page) {
      link.classList.add("active");
    }
  });
}

// Hamburger menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("open");
}

function closeMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.remove("open");
}

// Saat pertama kali load
window.onload = function () {
  let page = getParameter("p");
  if (!page) {
    page = "home";
  }
  loadPage(page);
  setActiveMenu(page);
};