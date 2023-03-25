import { IConsProps } from "module/common/type";
import * as React from "react";

function SuccessSvg(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  return (
    <svg
      width="103"
      height="103"
      viewBox="0 0 103 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.5 99C64.6166 99 76.4917 93.6833 85.0875 85.0875C93.6833 76.4917 99 64.6166 99 51.5C99 38.3834 93.6833 26.5083 85.0875 17.9124C76.4917 9.31663 64.6166 4 51.5 4C38.3834 4 26.5083 9.31663 17.9124 17.9124C9.31663 26.5083 4 38.3834 4 51.5C4 64.6166 9.31663 76.4917 17.9124 85.0875C26.5083 93.6833 38.3834 99 51.5 99Z"
        fill="white"
        stroke="#63C476"
        stroke-width="7"
        stroke-linejoin="round"
      />
      <path
        d="M33.6143 50.9134L47.8349 64.9875L76.2763 36.8394"
        stroke="#63C476"
        stroke-width="7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SuccessSvg;
