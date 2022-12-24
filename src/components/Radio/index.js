import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";
const variants = {
  OutlineBluegray500: "border border-bluegray_500 border-solid",
};
const shapes = { RoundedBorder8: "rounded-radius8" };
const sizes = { sm: "p-[2px]" };
const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      checked = false,
      errors = [],
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    React.useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${shapes[shape] || ""} ${
              variants[variant] || ""
            } ${sizes[size] || ""}`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
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
Radio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["OutlineBluegray500"]),
  size: PropTypes.oneOf(["sm"]),
};

Radio.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "",
  variant: "",
  size: "",
};

export { Radio };
