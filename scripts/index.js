const html = document.querySelector("html");
const modeButton = document.querySelector(".mode");

modeButton.addEventListener("click", () => {
  console.log(html.className);
  if (html.className === "dark") {
    html.classList.replace("dark", "light");
    localStorage.setItem("modes", "light");
  } else {
    html.classList.replace("light", "dark");
    localStorage.setItem("modes", "dark");
  }
});

const mode = localStorage.getItem("modes");

console.log(mode);

if (mode) {
  html.className = mode;
}
