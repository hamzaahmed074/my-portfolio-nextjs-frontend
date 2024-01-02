import { ElementType, ButtonHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  as?: ElementType;
  variant?: 'primary' | 'secondary'
}

const ButtonComponent = forwardRef(
  (
    {
      active = false,
      as: Component = "button",
      className,
      variant = 'primary',
      ...rest
    }: ButtonProps,
    ref
  ) => (
    <Component
      {...rest}
      ref={ref}
      className={classNames(styles.button, className, variant === "primary" ? styles["button-primary"]:styles["button-secondary"])}
    />
  )
);

ButtonComponent.displayName = "ButtonComponent";

export default ButtonComponent;
