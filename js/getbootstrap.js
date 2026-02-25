!function () {
  function error(msg) {
    var $alert = document.createElement("div")
    $alert.setAttribute("class", "alert alert-danger")
    $alert.setAttribute("role", "alert")
    $alert.innerHTML = '<span class="visually-hidden">【错误】</span>' + message
    document.body.insertBefore($alert, document.body.firstChild)
  }

  try {
    new Function("let{..._}={...async(_=_)=>class{}}**``")
  } catch (_) {
    error("您的浏览器版本过旧，页面可能无法正常显示，请使用较新的浏览器访问本站。")
    return
  }

  var $script = document.currentScript
  var used = $script.getAttribute("data-use").split(/\s+/)

  function uses(id) {
    return used.indexOf(id) !== -1
  }

  if (uses("vue")) {
    window.addEventListener("load", function () {
      var libsLoaded =
        typeof Vue !== "undefined" &&
        parseInt(Vue.version) === 3 &&
        typeof BootstrapVue3 !== "undefined" &&
        typeof BootstrapVue3.install === "function"
      if (!libsLoaded)
        error("脚本加载失败，页面可能无法正常显示，请稍后刷新重试。")
    })
  }

  function insert($el) {
    $script.parentNode.insertBefore($el, $script.nextSibling)
  }

  function addMeta(name, content) {
    var $el = document.createElement("meta")
    $el.setAttribute("name", name)
    $el.setAttribute("content", content)
    insert($el)
  }

  function requireStylesheet(href) {
    var $el = document.createElement("link")
    $el.setAttribute("rel", "stylesheet")
    $el.setAttribute("href", href)
    insert($el)
  }

  function requireScript(src) {
    var $el = document.createElement("script")
    $el.setAttribute("defer", "")
    $el.setAttribute("src", src)
    insert($el)
  }

  addMeta("viewport", "width=device-width, initial-scale=1, shrink-to-fit=no")
  addMeta("format-detection", "telephone=no")

  requireStylesheet("/bootstrap-lnn/dist/bootstrap-lnn.min.css")
  //requireScript("https://cdn.polyfill.io/v3/polyfill.min.js?features=es2019,es2020,es2021,es2022")

  if (uses("vue")) {
    requireStylesheet("/bootstrap-lnn/dist/bootstrap-vue-3-lnn.min.css")
    requireScript("https://unpkg.zhimg.com/vue@3.2.35/dist/vue.global.js")
    requireScript("/bootstrap-lnn/dist/bootstrap-vue-3.min.js")
  } else {
    requireScript("/bootstrap-lnn/dist/bootstrap.bundle.min.js")
  }

  if (uses("icons")) {
    requireStylesheet("https://unpkg.zhimg.com/bootstrap-icons@1.8.2/font/bootstrap-icons.css")
  }
}()
