import React from "react";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import { inputClass, labelClass } from "./styles";
import { errorMsgClass } from "./styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  dropDownList?: any;
  label?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  required?: boolean;
  errorMsg?: string | null;
  onBlur?: () => void;
  onFocus?: () => void;
}

const DropDown = (props: Props): React.ReactElement => {
  const {
    value,
    onChange,
    label,
    placeholder,
    errorMsg,
    className,
    onBlur,
    onFocus,
    dropDownList,
  } = props;
  return (
    <div className={cn(className, "mb-4 flex flex-col")}>
      {label && <label className={labelClass}>{label}</label>}
      <select
        id="dropdown"
        className={inputClass}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {dropDownList.map((item: any) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
      {errorMsg && <p className={errorMsgClass}>{errorMsg}</p>}
    </div>
  );
};
export default observer(DropDown);
