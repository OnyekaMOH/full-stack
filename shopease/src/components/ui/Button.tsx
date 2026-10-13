import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700",
  secondary: "bg-gray-900 text-white shadow-sm hover:bg-gray-800",
  outline:
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400",
  ghost: "text-gray-700 hover:bg-gray-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3 text-base sm:text-lg",
};

function Button({
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;

// import type { ButtonHTMLAttributes } from "react";

// type Variant = "primary" | "secondary" | "outline" | "ghost";

// type Size = "sm" | "md" | "lg";

// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: Variant;
//   size?: Size;
// }

// const variantClasses: Record<Variant, string> = {
//   primary: "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700",

//   secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",

//   outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",

//   ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
// };

// const sizeClasses: Record<Size, string> = {
//   sm: "min-h-11 px-3 py-2 text-sm",

//   md: "min-h-11 px-4 py-2.5 text-sm",

//   lg: "min-h-12 px-6 py-3 text-base",
// };

// const baseClasses =
//   "inline-flex items-center justify-center gap-2 rounded-lg " +
//   "font-medium transition-colors duration-200 " +
//   "focus-visible:outline-none focus-visible:ring-2 " +
//   "focus-visible:ring-indigo-500 focus-visible:ring-offset-2 " +
//   "disabled:cursor-not-allowed disabled:opacity-50";

// export default function Button({
//   variant = "primary",
//   size = "md",
//   type = "button",
//   className = "",
//   children,
//   ...props
// }: ButtonProps) {
//   return (
//     <button
//       type={type}
//       className={[
//         baseClasses,
//         variantClasses[variant],
//         sizeClasses[size],
//         className,
//       ]
//         .filter(Boolean)
//         .join(" ")}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }
