import * as React from "react";
import { IconProps } from "@/types/iconTypes";
const RefreshIcon = (props: IconProps) => {
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
        d="M2 1.333v4h4"
      />
      <path
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 8A6 6 0 0 0 4 3.533l-2 1.8M14 14.667v-4h-4"
      />
      <path
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 8a6 6 0 0 0 10 4.467l2-1.8"
      />
    </svg>
  );
};
export { RefreshIcon };
