
// import { useEffect } from 'react';
// import { useLocation } from 'react-router';

// const ScrollToTop = (props) => {
//   const location = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   return <>{props.children}</>;
// };

// export default ScrollToTop;

const scrollToTop = (): void => {
  const intervalId = setInterval(() => {
    const element = document.documentElement || document.body;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    clearInterval(intervalId);
  }, 10);
};

export default scrollToTop;
