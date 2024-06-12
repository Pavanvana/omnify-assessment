import React from "react";
import cn from "classnames";

import { inputClass, labelClass, errorMsgClass } from "./styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  required?: boolean;
  errorMsg?: string | null;
  onBlur?: () => void;
  onFocus?: () => void;
}

const PasswordField = (props: Props): React.ReactElement => {
  const {
    value,
    onChange,
    label,
    placeholder,
    errorMsg,
    className,
    onBlur,
    onFocus,
  } = props;
  return (
    <div className={cn(className, "mb-4 flex flex-col")}>
      {label && <label className={labelClass}>{label}</label>}
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
        data-placeholder="MM/DD/YYYY"
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {errorMsg && <p className={errorMsgClass}>{errorMsg}</p>}
    </div>
  );
};
export default PasswordField;
