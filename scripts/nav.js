(function () {
  var MQ = "(max-width: 800px)";

  function mobile() {
    return window.matchMedia(MQ).matches;
  }

  function setOpen(open) {
    var btn = document.getElementById("nav-toggle");
    var nav = document.getElementById("site-nav");
    var backdrop = document.getElementById("nav-backdrop");
    if (!btn || !nav || !backdrop) return;

    if (!mobile()) {
      document.body.classList.remove("nav-open");
      document.body.style.overflow = "";
      nav.removeAttribute("aria-hidden");
      backdrop.setAttribute("hidden", "");
      backdrop.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Open menu");
      return;
    }

    if (open) {
      document.body.classList.add("nav-open");
      document.body.style.overflow = "hidden";
      nav.setAttribute("aria-hidden", "false");
      backdrop.removeAttribute("hidden");
      backdrop.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-label", "Close menu");
    } else {
      document.body.classList.remove("nav-open");
      document.body.style.overflow = "";
      nav.setAttribute("aria-hidden", "true");
      backdrop.setAttribute("hidden", "");
      backdrop.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Open menu");
    }
  }

  function syncFromViewport() {
    if (!mobile()) {
      setOpen(false);
    } else {
      var open = document.body.classList.contains("nav-open");
      setOpen(open);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("nav-toggle");
    var nav = document.getElementById("site-nav");
    var backdrop = document.getElementById("nav-backdrop");
    if (!btn || !nav || !backdrop) return;

    btn.addEventListener("click", function () {
      setOpen(!document.body.classList.contains("nav-open"));
    });

    backdrop.addEventListener("click", function () {
      setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        setOpen(false);
      }
    });

    var mq = window.matchMedia(MQ);
    mq.addEventListener("change", syncFromViewport);

    syncFromViewport();
  });
})();
