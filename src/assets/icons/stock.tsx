import { IConsProps } from "module/common/type";
import * as React from "react";

function StockSvg(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 24, height = 24, fill = "#7C7C7A" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 5H11V14H8V17H6V14H3V5H6V2H8V5ZM18 10H21V19H18V22H16V19H13V10H16V7H18V10Z"
        fill={fill}
      />
    </svg>
  );
}

export default StockSvg;
