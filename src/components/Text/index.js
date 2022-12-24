import React from "react";
const variantClasses = {
  h1: "sm:text-[20px] md:text-[22px] text-[24px]",
  h2: "text-[18px]",
  h3: "text-[16px]",
  h4: "text-[14px]",
  h5: "text-[12px]",
  h6: "font-normal text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
