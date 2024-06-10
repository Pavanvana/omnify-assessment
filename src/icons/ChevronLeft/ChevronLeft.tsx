import * as React from "react";
import { IconProps } from "@/types/iconTypes";

const ChevronLeft = (props: IconProps) => {
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
        d="M10 12 6 8l4-4"
      />
    </svg>
  );
};
export { ChevronLeft };
