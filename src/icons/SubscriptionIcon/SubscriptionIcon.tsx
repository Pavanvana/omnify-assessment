import * as React from "react";
import { IconProps } from "@/types/iconTypes";

const SubscriptionIcon = (props: IconProps) => {
  const { height = 16, width = 16, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <g
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#a)"
      >
        <path d="M11.5 5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Z" />
        <path d="M4 3h9.5a.5.5 0 0 1 .5.5V11" />
        <path d="m4.688 8.625 1.5 1.5 3-3" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export { SubscriptionIcon };
