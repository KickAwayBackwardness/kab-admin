import React from "react";

const ThemText = ({ color }) => {
  return (
    <svg
      width="402"
      height="120"
      viewBox="0 0 402 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[20px] w-auto"
    >
      <path
        d="M33.1348 120V43.084H0.974766V26.2H85.6628V43.084H53.5028V120H33.1348ZM98.3048 120V26.2H118.673V63.318H158.873V26.2H179.241V120H158.873V80.202H118.673V120H98.3048ZM201.815 120V26.2H272.701V43.084H222.183V63.452H260.373V80.068H222.183V103.116H272.701V120H201.815ZM208.247 17.356L224.461 0.0699946H249.787L266.001 17.356H248.045L237.191 7.842L226.203 17.356H208.247ZM290.276 120V26.2H323.642L339.052 71.894C341.106 78.326 342.223 88.5993 342.402 102.714H349.638C349.816 88.6887 351.022 78.4153 353.256 71.894L368.934 26.2H401.094V120H380.726V82.748C380.726 69.5267 383.986 55.278 390.508 40.002L383.004 37.054L354.596 120H336.506L308.5 37.054L300.996 40.002C307.428 55.0993 310.644 69.348 310.644 82.748V120H290.276Z"
        style={{ fill: color }}
      />
    </svg>
  );
};

export default ThemText;
