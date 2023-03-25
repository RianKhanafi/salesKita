import { IConsProps } from "module/common/type";
import * as React from "react";

function ArrowLeft(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 32, height = 32, fill = "#6AC553" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_19_1806)">
        <path
          d="M28 14.6667H9.10667L13.88 9.88L12 8L4 16L12 24L13.88 22.12L9.10667 17.3333H28V14.6667Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_19_1806">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowLeft;
