export function getHeaderHeight(): number {
  const header = document.querySelector("header");
  return header?.getBoundingClientRect().height ?? 56;
}

export function unlockBodyScroll(): void {
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
}

export function hideMobileMenuForScroll(): void {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;

  menu.style.transition = "opacity 180ms ease-out, transform 180ms ease-out";
  menu.style.opacity = "0";
  menu.style.transform = "translateY(-8px)";
  menu.style.pointerEvents = "none";
}

function getScrollTopForSection(id: string): number | null {
  if (id === "beranda") return 0;

  const target = document.getElementById(id);
  if (!target) return null;

  const headerHeight = getHeaderHeight();
  return Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - headerHeight,
  );
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

let activeScrollFrame = 0;

function animateScrollTo(targetY: number): void {
  const startY = window.scrollY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) return;

  const duration = Math.min(900, Math.max(450, Math.abs(distance) * 0.55));
  const startTime = performance.now();
  const frameId = ++activeScrollFrame;

  const step = (currentTime: number) => {
    if (frameId !== activeScrollFrame) return;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

type ScrollOptions = {
  behavior?: ScrollBehavior;
  fromMobileMenu?: boolean;
};

export function scrollToSection(
  id: string,
  options: ScrollOptions = {},
): void {
  if (options.fromMobileMenu) {
    hideMobileMenuForScroll();
  }

  unlockBodyScroll();

  const useInstant =
    options.behavior === "auto" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const performScroll = () => {
    const top = getScrollTopForSection(id);
    if (top === null) return;

    if (useInstant) {
      activeScrollFrame++;
      window.scrollTo(0, top);
      return;
    }

    animateScrollTo(top);
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(performScroll);
  });
}
