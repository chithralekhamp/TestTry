import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray500: "border border-bluegray_500 border-solid",
};
const shapes = { RoundedBorder2: "rounded-radius2" };
const sizes = {
  sm: "p-[4px]",
  md: "sm:pb-[3px] md:pb-[4px] pb-[7px] pt-[4px] px-[4px]",
  lg: "pb-[1px]",
};

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${shapes[shape] || ""} ${
              variants[variant] || ""
            } ${sizes[size] || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder2"]),
  variant: PropTypes.oneOf(["OutlineBluegray500"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "RoundedBorder2",
  variant: "OutlineBluegray500",
  size: "",
};

export { CheckBox };
