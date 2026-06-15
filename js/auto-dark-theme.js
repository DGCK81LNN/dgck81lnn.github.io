const darkMq = matchMedia("(prefers-color-scheme: dark)")
;(darkMq.onchange = function () {
  document.documentElement.setAttribute("data-bs-theme", darkMq.matches ? "dark" : "light")
})()
