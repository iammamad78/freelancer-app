import React from "react";
import useUser from "../features/authentication/useUser";

function Home() {
  const { data } = useUser();
  console.log(data);

  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div>صفحه اصلی</div>
      </div>
    </div>
  );
}

export default Home;
