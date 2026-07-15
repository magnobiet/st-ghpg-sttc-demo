function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(() => {
  const loader = document.querySelector("#loader");

  setTimeout(() => {
    loader.classList.toggle("hidden");
  }, 3000);
});
