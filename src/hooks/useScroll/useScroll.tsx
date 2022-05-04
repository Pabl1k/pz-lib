export const useScroll = (
  ref: HTMLDivElement,
  behavior: "smooth" | "auto" = "smooth"
): void => {
  window.scrollTo({
    top: ref.offsetTop,
    behavior,
  });
};
