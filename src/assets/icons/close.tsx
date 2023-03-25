import { IConsProps } from "module/common/type";
import * as React from "react";

function SvgClose(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 24, height = 24, fill = "#C5C7CD" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8369 22.1606L22.1614 4.16357"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.00219 12.8377L17.5 13.0811"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.1275 5.96497L18.0002 13.09L10.8752 19.9627"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SvgClose;
