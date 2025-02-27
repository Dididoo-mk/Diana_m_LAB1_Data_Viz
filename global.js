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
