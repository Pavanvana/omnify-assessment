import * as React from "react";
import { IconProps } from "@/types/iconTypes";
const FilterIcon = (props: IconProps) => {
  const { height = 16, width = 16, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.667 2H1.333l5.334 6.307v4.36L9.333 14V8.307L14.667 2Z"
      />
    </svg>
  );
};
export { FilterIcon };
