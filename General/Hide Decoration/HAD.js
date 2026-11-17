// Hide avatar decorations (frames). Scoped in an IIFE so its names cannot
// clash with other scripts injected into the same window.
;(() => {
  const selectorsConfig = [
    { selector: ".X_mJE4BYV5StDPwZhSiAu.avatarFrame", classes: ["X_mJE4BYV5StDPwZhSiAu", "avatarFrame"] },
    { selector: "._3fM0F85j3aWVzr4RJM9-eu", classes: ["_3fM0F85j3aWVzr4RJM9-eu"] },
    { selector: "._2nPONxDUmK4rQXzK4Y3vG2", classes: ["_2nPONxDUmK4rQXzK4Y3vG2"] },
  ]

  let timeout

  function cleanUp() {
    // Pause the observer while we edit the DOM so we don't retrigger ourselves
    observer.disconnect()

    selectorsConfig.forEach(({ selector, classes }) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.querySelectorAll("img").forEach((img) => img.remove())
        el.classList.remove(...classes)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })
  }

  function debouncedCleanUp() {
    clearTimeout(timeout)
    timeout = setTimeout(cleanUp, 10)
  }

  const observer = new MutationObserver(debouncedCleanUp)

  // The script can be injected before <body> exists
  if (document.body) {
    cleanUp()
  } else {
    document.addEventListener("DOMContentLoaded", cleanUp, { once: true })
  }
})()
