import { useEffect } from "react";

const Storage = () => {
  useEffect(() => {
    document.title = "Storage";
  }, []);

  return <div>Storage</div>;
};

export default Storage;
