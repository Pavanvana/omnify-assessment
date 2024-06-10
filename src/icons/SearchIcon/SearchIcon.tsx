import { IconProps } from "@/types/iconTypes";
import * as React from "react";
const SearchIcon = (props: IconProps) => {
  const { height = 12, width = 12, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 10 10"
      {...rest}
    >
      <path
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 9.5 7.35 7.35M8.5 4.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  );
};
export { SearchIcon };
