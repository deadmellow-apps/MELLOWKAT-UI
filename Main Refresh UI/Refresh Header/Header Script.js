// Make the whole top nav tab clickable, not just its label.
// Scoped in an IIFE so its names cannot clash with other injected scripts.
;(() => {
  document.addEventListener("click", (event) => {
    const clickedElement = event.target.closest("._7AlhCx3XGzBeIrQaCneUD")
    if (!clickedElement) return
    const elementToActivate = clickedElement.querySelector("._19axKcqYRuaJ8vdYKYmtTQ")
    if (elementToActivate && elementToActivate !== event.target && !elementToActivate.contains(event.target)) {
      elementToActivate.click()
    }
  })
})()
