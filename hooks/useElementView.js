import react, { useState, useEffect } from "react";

const useElementView = (targetRef) => {
  const [isVisible, setisVisible] = useState(false);

  const CallbackFunction = (entries) => {
    const [entry] = entries;
    setisVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(CallbackFunction, {
      threshold: 0.3
    });

    const currentRef = targetRef ? targetRef.current : null;

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [targetRef]);
  return isVisible;
};

export default useElementView;
