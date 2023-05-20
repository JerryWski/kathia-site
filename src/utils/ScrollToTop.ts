const scrollToTop = (): void => {
  const element = document.documentElement || document.body;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default scrollToTop;
