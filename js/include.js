async function loadSection(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadSection("hero", "sections/hero.html");
loadSection("frame", "sections/frame.html");
loadSection("sobre", "sections/sobre.html");
loadSection("about-benefits", "sections/about_beneficios.html");
