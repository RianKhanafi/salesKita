import { IConsProps } from "module/common/type";
import * as React from "react";

function SvgPlus(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { fill = "#7C7C7A", width = 26, height = 26 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_30_2141)">
        <path
          d="M20.1667 13.6667H13.6667V20.1667H11.5V13.6667H5V11.5H11.5V5H13.6667V11.5H20.1667V13.6667Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_30_2141">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPlus;
