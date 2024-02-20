import { useEffect } from "react";

const Bin = () => {
  useEffect(() => {
    document.title = "Bin";
  }, []);

  return <div>Bin</div>;
};

export default Bin;
