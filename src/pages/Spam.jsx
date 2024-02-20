import { useEffect } from "react";

const Spam = () => {
  useEffect(() => {
    document.title = "Spam";
  }, []);

  return <div>Spam</div>;
};

export default Spam;
