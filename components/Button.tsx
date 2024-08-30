// import React from "react";

// interface Props {
//   title: string;
//   onClick?: () => void;
//   width?: string;
//   loading?: boolean;
//   padding?: string;
//   noIcon?: boolean;
// }

// function Button({ title, onClick, width, loading, padding, noIcon }: Props) {
//   return (
//     <button
//       className={`ease group relative z-10 box-border inline-flex ${
//         width ? width : "w-auto"
//       } ${padding} cursor-pointer items-center justify-center overflow-hidden border font-gothic text-[10px]  border-main bg-primary px-6 py-3 text-main hover:bg-primary-100/80 transition-all duration-300 focus:outline-none`}
//       onClick={onClick}
//     >
//       <span className="relative z-20 flex items-center">
//         {noIcon && (
//           <svg
//             className="relative mr-2 h-5 w-5 flex-shrink-0 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M13 10V3L4 14h7v7l9-11h-7z"
//             ></path>
//           </svg>
//         )}
//         {loading ? "Loading..." : title}
//       </span>
//     </button>
//   );
// }

// export default Button;

import React from "react";

interface Props {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  styleType?: "green" | "white"; // New prop to handle styling
}

function Button({ title, onClick, width, loading, padding, styleType = "green" }: Props) {
  const buttonStyles = styleType === "green"
    ? "bg-primary text-white border-[#038885]"
    : "bg-white text-[#038885] border-[#038885]";

  return (
    <button
      className={`relative box-border inline-flex ${
        width ? width : "w-auto"
      } ${padding} cursor-pointer items-center justify-center overflow-hidden border rounded-[20px] font-bold text-[18px] ${buttonStyles} px-6 py-3 transition-all duration-300 focus:outline-none shadow-2xl`}
      onClick={onClick}
    >
      {loading ? "Loading..." : title}
    </button>
  );
}

export default Button;
