const scrollToTop = (): void => {
  const scrollStep = -window.scrollY / (100 / 55);
  const scrollInterval = setInterval(() => {
    window.scrollBy(0, scrollStep);
    if (window.scrollY === 0) clearInterval(scrollInterval);
  }, 100);
};

export default scrollToTop;
