;(() => {
// KAT-UI: scoped so its top-level names cannot clash with other injected scripts
// ============================================================================
// STYLES
// ============================================================================
const BADGE_STYLES = `
  .nevko-badge {
    display: inline-flex;
    align-items: center;
    margin-left: 6px;
    vertical-align: middle;
    margin-top: -4px;
  }
  .nevko-badge svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
  }
  .nevko-badge-mini {
    display: inline-flex;
    align-items: center;
    margin-left: 4px;
    vertical-align: middle;
    margin-top: -4px;
  }
  .nevko-badge-mini svg {
    width: 16px;
    height: 16px;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.3));
  }
  /* Global tooltip - one for the whole page */
  #nevko-tooltip {
    position: fixed;
    background-color: #696773;
    color: #E0E1E6;
    padding: 6px 10px;
    border-radius: 2px;
    font-size: 13px;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    opacity: 0;
    transition: opacity 0.2s;
    box-shadow: 1px 1px 8px rgba(0,0,0,0.3), 2px 2px 16px 1px rgba(0,0,0,0.3);
    z-index: 999999;
  }
  #nevko-tooltip.visible {
    opacity: 1;
  }
`

// ============================================================================
// GLOBAL TOOLTIP
// ============================================================================
let globalTooltip = null

function initTooltip() {
  globalTooltip = document.createElement("div")
  globalTooltip.id = "nevko-tooltip"
  document.body.appendChild(globalTooltip)
}

function showTooltip(element, text) {
  if (!globalTooltip) return
  const rect = element.getBoundingClientRect()
  globalTooltip.textContent = text
  globalTooltip.style.left = rect.left + rect.width / 2 + "px"
  globalTooltip.style.top = rect.top - 8 + "px"
  globalTooltip.style.transform = "translate(-50%, -100%)"
  globalTooltip.classList.add("visible")
}

function hideTooltip() {
  if (!globalTooltip) return
  globalTooltip.classList.remove("visible")
}

// ============================================================================
// MAIN LOGIC
// ============================================================================

function init() {
  // Add styles
  const style = document.createElement("style")
  style.textContent = BADGE_STYLES
  document.head.appendChild(style)

  // Create global tooltip
  initTooltip()
}

// Startup
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}
})()
