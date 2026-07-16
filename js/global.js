async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) {
      throw new Error(`Cannot load ${file}`);
    }

    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function initHeader() {
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("header", "components/navbar.html");

  initHeader();
});
