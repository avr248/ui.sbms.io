import { useEffect } from "react";

export interface ScrollToTopProps {pathname?:string}

const ScrollToTop: React.FC<ScrollToTopProps> = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.pathname]);

  return null;
};

export default ScrollToTop;
