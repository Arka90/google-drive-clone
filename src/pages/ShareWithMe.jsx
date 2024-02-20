import { useEffect } from "react";

const ShareWithMe = () => {
  useEffect(() => {
    document.title = "Shared with me";
  }, []);
  return <div>Share with me</div>;
};

export default ShareWithMe;
