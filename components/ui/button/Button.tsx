import {forwardRef} from "react";
import {cn} from "@/utils/tw-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
                                                             className,
                                                             children,
                                                             disabled,
                                                             type = "button",
                                                             ...props
                                                           }, ref) => {
  return (
    <button ref={ref} {...props} className={cn(
      `w-full max-w-[400px] rounded-md border-[--salad] text-[--salad] text-2xl border-2 py-[15px]
             transition-all
             hover:border-[--brown] hover:text-[--brown]
      `,
      className)}>
      {children}
    </button>
  )
});

Button.displayName = "Button";

export default Button;