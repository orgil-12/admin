"use client";

import Image from "next/image";
import "./style.css";

export default function Home() {
  let counter = 0;

  const handleClick = () => {
    counter++;
  }
    return (
      <div>
        {counter}

        <button
          onClick={handleClick}
          style={{ width: 50, height: 30, border: "1px solid black" }}
        >
          click
        </button>
      </div>
    );
}
