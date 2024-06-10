import * as React from "react";
import { IconProps } from "@/types/iconTypes";

const CircleDotIcon = (props: IconProps) => {
  const { height = 12, width = 12, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <g
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#a)"
      >
        <path d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10Z" />
        <path d="M6 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export { CircleDotIcon };
