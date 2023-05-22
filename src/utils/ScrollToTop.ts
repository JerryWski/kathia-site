/* eslint-disable react/prop-types */
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
  const element = document.documentElement || document.body;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
export default scrollToTop
