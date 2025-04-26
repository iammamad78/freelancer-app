import React from "react";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="flex justify-center items-center md:min-h-screen mt-28 md:mt-0">
      <div className="flex flex-col items-center gap-y-8">
        <div className=" flex justify-center w-60 h-60 sm:w-80 sm:h-80">
          <img
            className="rounded-full"
            src="../../public/webserver-errors copy.webp"
            alt="NotFound"
          />
        </div>
        <h2 className="text-secondary-600">صفحه مورد نظر یافت نشد</h2>
        <button onClick={moveBack} className="btn btn--primary w-full">
          بازگشت
        </button>
      </div>
    </div>
  );
}

export default NotFound;
