import * as React from "react";

import { IconProps } from "@/types/iconTypes";

const InboxIcon = (props: IconProps) => {
  const { height = 22, width = 22, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <path
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.667 8h-4l-1.334 2H6.667L5.333 8h-4"
      />
      <path
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.633 3.407 1.333 8v4a1.333 1.333 0 0 0 1.334 1.333h10.666A1.334 1.334 0 0 0 14.667 12V8l-2.3-4.593a1.333 1.333 0 0 0-1.194-.74H4.827a1.333 1.333 0 0 0-1.194.74Z"
      />
    </svg>
  );
};
export { InboxIcon };
