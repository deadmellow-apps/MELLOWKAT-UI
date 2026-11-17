// Compact Buttons - Simply. Dark. - Shadow | Fixed Script
;(() => {
  const TITLE_BAR_SELECTOR = "._3cykd-VfN_xBxf3Qxriccm"
  const BOTTOM_BAR_SELECTOR = "._1_yS5UP7el0aN4vntx3dx"
  // Gap (px) between the moved buttons and the first visible title bar button
  const GAP = 5

  let currentTitleBar = null
  let currentBottomBar = null
  let titleBarObserver = null
  let bottomBarObserver = null
  let resizeObserver = null

  // Left edge of the leftmost visible control inside the title bar.
  // Steam keeps adding components to TitleBarControls (some render empty or
  // hidden by the theme), so measuring the container's width plus a fixed
  // window-button offset no longer lands next to the notification bell.
  // Only the bar's own in-flow buttons count. Hover tooltips/popups that
  // Steam mounts inside the bar are absolutely/fixed positioned (often
  // off-screen while measuring) and must be ignored, or the moved buttons
  // get pushed off-screen whenever you hover e.g. the account avatar.
  function leftmostVisibleEdge(container) {
    const box = container.getBoundingClientRect()
    let left = Infinity
    for (const child of container.children) {
      const style = getComputedStyle(child)
      if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") continue
      if (style.position === "absolute" || style.position === "fixed") continue
      const rect = child.getBoundingClientRect()
      if (rect.width < 1 || rect.height < 1) continue
      if (rect.left < box.left - 1 || rect.right > box.right + 1) continue
      left = Math.min(left, rect.left)
    }
    return left === Infinity ? box.left : left
  }

  function applyPosition() {
    if (!currentTitleBar || !currentBottomBar) return

    const parent = currentBottomBar.offsetParent || document.documentElement
    const parentBox = parent.getBoundingClientRect()
    // Never push the buttons past the left edge of the window
    const maxRight = Math.max(0, parentBox.width - currentBottomBar.offsetWidth)
    const right = Math.min(maxRight, Math.max(0, Math.round(parentBox.right - leftmostVisibleEdge(currentTitleBar) + GAP)))

    currentBottomBar.style.setProperty("position", "absolute", "important")
    currentBottomBar.style.setProperty("left", "auto", "important")
    // Position is measured, so the per-option margin compensations
    // (Main Window Buttons/*.css, Top Bar Reverse.css) must not stack on top.
    currentBottomBar.style.setProperty("margin-right", "0", "important")
    currentBottomBar.style.setProperty("right", `${right}px`, "important")
  }

  function cleanup() {
    if (titleBarObserver) {
      titleBarObserver.disconnect()
      titleBarObserver = null
    }
    if (bottomBarObserver) {
      bottomBarObserver.disconnect()
      bottomBarObserver = null
    }
    if (resizeObserver) {
      resizeObserver.disconnect()
      resizeObserver = null
    }
  }

  function setupObservers() {
    cleanup()

    titleBarObserver = new MutationObserver(() => {
      requestAnimationFrame(applyPosition)
    })
    titleBarObserver.observe(currentTitleBar, {
      attributes: true,
      childList: true,
      subtree: true,
    })

    bottomBarObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "style") {
          requestAnimationFrame(applyPosition)
        }
      }
    })
    bottomBarObserver.observe(currentBottomBar, {
      attributes: true,
      attributeFilter: ["style", "class"],
    })

    resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(applyPosition)
    })
    resizeObserver.observe(currentTitleBar)
  }

  function init() {
    const titleBar = document.querySelector(TITLE_BAR_SELECTOR)
    const bottomBar = document.querySelector(BOTTOM_BAR_SELECTOR)

    if (!titleBar || !bottomBar) return false

    const elementsChanged = titleBar !== currentTitleBar || bottomBar !== currentBottomBar

    currentTitleBar = titleBar
    currentBottomBar = bottomBar

    if (elementsChanged) {
      setupObservers()
    }

    applyPosition()
    return true
  }

  const bodyObserver = new MutationObserver(() => {
    init()
  })

  function startWatching() {
    init()

    if (document.body) {
      bodyObserver.observe(document.body, {
        childList: true,
        subtree: true,
      })
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startWatching)
  } else {
    startWatching()
  }

  window.addEventListener("load", init)
  window.addEventListener("resize", () => requestAnimationFrame(applyPosition))

  setInterval(init, 2000)
})()
