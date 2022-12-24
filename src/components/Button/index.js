import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder4: "rounded-radius4" };
const variants = {
  FillWhiteA700: "bg-white_A700",
  FillIndigoA200: "bg-indigo_A200 text-gray_51",
  OutlineIndigoA200: "border border-indigo_A200 border-solid text-indigo_A200",
  OutlineBluegray400:
    "bg-bluegray_100_4c border border-bluegray_400 border-solid text-bluegray_400",
};
const sizes = {
  sm: "sm:p-[4px] md:p-[5px] p-[8px]",
  md: "p-[13px] sm:p-[6px] md:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "FillIndigoA200",
    "OutlineIndigoA200",
    "OutlineBluegray400",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillWhiteA700",
  size: "md",
};

export { Button };
