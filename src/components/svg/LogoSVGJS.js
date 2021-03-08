import React from 'react';

const LogoSVGJS = () => {
    return (
        <svg 
  version="1.1" 
//   xmlns="http://www.w3.org/20000/svg" 
  width="100%" 
  height="100%" 
  viewBox="0 0 500 500"
  >


  <defs>
      <linearGradient id="skyGradient" x1="100%" y1="100%">
      <stop offset="0%" stop-color="lightblue" stop-opacity=".5">
        <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="14s" repeatCount="indefinite" />
      </stop>
      <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
        <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="14s" repeatCount="indefinite" />
        <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />    
      </stop>
    </linearGradient>
  </defs>

  <rect fill= "transparent" stroke-width="0" width="500" height="500" x="0" y="0" />
  <path 
  fill="url(#skyGradient)"
    stroke-width="0" 
    d="M0 0 H75 V300 H265 V425 H500 V500 H0, M140 0 H500 V125 H265 V250 H140, M325 175 H500 V375 H325 V300 H425 V250 H325 Z"
    />
</svg>

    )
}
export default LogoSVGJS;