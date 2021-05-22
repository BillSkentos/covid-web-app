import {useState,useEffect} from 'react';


export default function ScrollTop() {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
      const toggleVisibility = () => {
        if (window.pageYOffset > 150) {

          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", toggleVisibility);

      return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible 
          && 
       (
        <div onClick={scrollToTop} id="return-to-top"><span className="arrow-up"></span></div>
       )

      }
    </>
  )
}
