import * as React from "react";
import { IconProps } from "@/types/iconTypes";
const DownloadIcon = (props: IconProps) => {
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
        d="M14 10v2.667A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V10m2.667-3.333L8 10m0 0 3.333-3.333M8 10V2"
      />
    </svg>
  );
};
export { DownloadIcon };
