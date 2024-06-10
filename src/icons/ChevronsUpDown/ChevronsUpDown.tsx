import * as React from "react";
import { IconProps } from "@/types/iconTypes";

const ChevronsUpDown = (props: IconProps) => {
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
        strokeWidth={0.667}
        d="M4.667 10 8 13.333 11.333 10M4.667 6 8 2.667 11.333 6"
      />
    </svg>
  );
};
export { ChevronsUpDown };
