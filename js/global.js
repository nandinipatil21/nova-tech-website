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
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("header", "components/navbar.html");

  initHeader();
});