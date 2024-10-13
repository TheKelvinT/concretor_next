import React from "react"

interface Props {
  title: string
  onClick?: () => void
  width?: string
  loading?: boolean
  padding?: string
  styleType?: "green" | "white" // Prop to handle styling
}

function Button({
  title,
  onClick,
  width = "w-full md:w-auto", // Default to full width on small screens
  loading = false, // Default to not loading
  padding = "", // Default padding if not specified
  styleType = "green", // Default style type
}: Props) {
  const buttonStyles =
    styleType === "green"
      ? "bg-primary text-white border-[#038885]"
      : "bg-white text-[#038885] border-[#038885]"

  return (
    <button
      className={`relative bg-primary inline-flex ${width} ${padding} cursor-pointer shadow-md  items-center justify-center overflow-hidden border rounded-[20px] font-bold text-[18px] ${buttonStyles} px-6 py-3 transition-all duration-300 focus:outline-none`}
      onClick={onClick}
      disabled={loading} // Disable button if loading
      aria-busy={loading} // Indicate loading state for accessibility
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white" // Add a spinner for loading
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      ) : null}
      {loading ? "Loading..." : title}
    </button>
  )
}

export default Button
