import {any, bool, string} from "prop-types";

function Button({ children, textOnly, className, ...props }) {
  let cssClassName = textOnly ? "text-button" : "button";
  cssClassName += " " + className;
  return (
    <button className={cssClassName} {...props}>
      {children}
    </button>
  );
}
export default Button;

Button.propTypes = {
    textOnly: bool,
    children: any,
    className: string,
}