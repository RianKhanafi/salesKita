import { IConsProps } from "module/common/type";
import * as React from "react";

function SvgEmailConfirm(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  return (
    <svg
      width="143"
      height="143"
      viewBox="0 0 143 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="143"
        height="143"
        rx="71.5"
        fill="#F86061"
        fill-opacity="0.25"
      />
      <rect
        x="11"
        y="11"
        width="121"
        height="121"
        rx="60.5"
        fill="#F86061"
        fill-opacity="0.5"
      />
      <path
        d="M71.5 119C84.6166 119 96.4917 113.683 105.087 105.087C113.683 96.4917 119 84.6166 119 71.5C119 58.3834 113.683 46.5083 105.087 37.9124C96.4917 29.3166 84.6166 24 71.5 24C58.3834 24 46.5083 29.3166 37.9124 37.9124C29.3166 46.5083 24 58.3834 24 71.5C24 84.6166 29.3166 96.4917 37.9124 105.087C46.5083 113.683 58.3834 119 71.5 119Z"
        fill="white"
        stroke="#F86061"
        stroke-width="7"
        stroke-linejoin="round"
      />
      <path
        d="M53.6143 70.9134L67.8349 84.9875L96.2763 56.8394"
        stroke="#F86061"
        stroke-width="7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SvgEmailConfirm;
