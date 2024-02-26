import type { ButtonHTMLAttributes } from "react"
import clsx from "clsx"
import "./Button.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "default"
  children: string | React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "default", children, ...restProps } = props

  return (
    <button
      className={clsx("Button", {
        "variant-primary": variant === "primary",
        "variant-default": variant === "default",
      })}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
