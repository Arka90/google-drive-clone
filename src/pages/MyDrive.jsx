import { useEffect } from "react";

const MyDrive = () => {
  useEffect(() => {
    document.title = "My Drive";
  }, []);

  return <div>My Drive</div>;
};

export default MyDrive;
