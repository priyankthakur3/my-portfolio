import React, { useEffect, useState } from "react";

export default function Toast() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {}, []);
  return (
    <div
      id="myToast"
      className="fixed  hidden right-10 bottom-10 px-5 py-4 border-r-8 border-blue-500 bg-white drop-shadow-lg"
    >
      <p className="text-sm">
        <span className="mr-2 inline-block px-3 py-1 rounded-full bg-blue-500 text-white font-extrabold">
          i
        </span>
        This is a toast. Welcome to SlingAcademy.com
      </p>
    </div>
  );
}
