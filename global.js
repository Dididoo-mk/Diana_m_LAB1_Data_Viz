console.log("Step 3: Automatic Navigation Menu");
let pages = [
  { url: "", title: "Home" },
  { url: "projects/", title: "Projects" },
  { url: "contact/", title: "Contact" },
  { url: "resume/", title: "Resume" },
  { url: "https://github.com/Dididoo-mk", title: "GitHub" }
];
const ARE_WE_HOME = document.documentElement.classList.contains("home");
let nav = document.createElement("nav");
document.body.prepend(nav);
for (let p of pages) {
  let url = p.url;
  let title = p.title;
  if (!ARE_WE_HOME && !url.startsWith("http")) {
    url = (url === "" ? "../index.html" : "../" + url);
  }
  let a = document.createElement("a");
  a.href = url;
  a.textContent = title;
  if (a.host === location.host && a.pathname === location.pathname) {
    a.classList.add("current");
  }
  if (a.host !== location.host && url.startsWith("http")) {
    a.target = "_blank";
  }
  nav.append(a);
}

document.body.insertAdjacentHTML("afterbegin", `
  <label class="color-scheme">
    Theme:
    <select id="colorSchemeSelect">
      <option value="light dark">Automatic</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </label>
`);

let colorSchemeSelect = document.querySelector("#colorSchemeSelect");

function setColorScheme(scheme) {
  document.documentElement.style.setProperty("color-scheme", scheme);
  localStorage.colorScheme = scheme;
  console.log("color scheme changed to", scheme);
}

if (localStorage.colorScheme) {
  setColorScheme(localStorage.colorScheme);
  colorSchemeSelect.value = localStorage.colorScheme;
} else {
  setColorScheme("light dark");
  colorSchemeSelect.value = "light dark";
}

colorSchemeSelect.addEventListener("input", function(event) {
  let newScheme = event.target.value;
  setColorScheme(newScheme);
});