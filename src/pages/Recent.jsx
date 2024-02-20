import { useEffect } from "react";

const Recent = () => {
  useEffect(() => {
    document.title = "Rcent";
  }, []);

  return <div>Recent page</div>;
};

export default Recent;
