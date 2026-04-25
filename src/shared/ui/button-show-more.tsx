"use client";

import { useState } from "react";

export const ButtonShowMore = ({
  text,
  limited = 150,
}: {
  text: string;
  limited?: number;
}) => {
  const [isExpand, setIsExpand] = useState(false);
  const displayText = isExpand ? text : text.slice(0, limited);

  return (
    <>
      {displayText}
      {text.length > limited && (
        <button
          onClick={() => setIsExpand((prev) => !prev)}
          className="pl-1 font-semibold cursor-pointer hover:text-neutral-300 text-white"
        >
          {isExpand ? "Show less" : "...Show more"}
        </button>
      )}
    </>
  );
};
