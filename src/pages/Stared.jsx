import { useEffect } from "react";

const Stared = () => {
  useEffect(() => {
    document.title = "Stared";
  }, []);

  return <div>Starred</div>;
};

export default Stared;
