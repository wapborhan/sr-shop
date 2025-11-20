"use client";
import { useEffect } from "react";

export default function Tooltips() {
  useEffect(() => {
    const createTooltipEl = (text, className) => {
      const span = document.createElement("span");
      span.className = className;
      span.textContent = text;
      span.style.opacity = "0";
      span.style.transition = "opacity 150ms ease";
      span.style.display = "inline";
      return span;
    };

    const onPointerOver = (ev) => {
      const el = ev.target.closest("[data-tooltip], [data-tooltip-bottom]");
      if (!el || el.__tooltipActive) return;

      const title = el.getAttribute("title");
      if (!title) return;

      el.dataset.tooltipTitle = title;
      el.removeAttribute("title");

      const isBottom = el.hasAttribute("data-tooltip-bottom");
      const className = isBottom ? "custom-tooltip-bottom" : "custom-tooltip";

      const tooltip = createTooltipEl(title, className);
      el.__tooltipActive = tooltip;

      el.appendChild(tooltip);

      requestAnimationFrame(() => {
        tooltip.style.opacity = "1";
      });
    };

    const onPointerOut = (ev) => {
      const el = ev.target.closest("[data-tooltip], [data-tooltip-bottom]");
      if (!el) return;

      const related = ev.relatedTarget;
      if (related && el.contains(related)) return;

      const tooltip = el.__tooltipActive;
      if (!tooltip) return;

      tooltip.style.opacity = "0";

      const prevTitle = el.dataset.tooltipTitle;
      if (prevTitle) el.setAttribute("title", prevTitle);

      delete el.dataset.tooltipTitle;
      delete el.__tooltipActive;

      setTimeout(() => {
        if (tooltip.parentNode) tooltip.remove();
      }, 180);
    };

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document
        .querySelectorAll(".custom-tooltip, .custom-tooltip-bottom")
        .forEach((t) => t.remove());
    };
  }, []);

  return null;
}
