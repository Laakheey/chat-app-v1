"use client";

import ReactSelect, { OptionsOrGroups } from "react-select";

type SelectProps = {
  disabled?: boolean;
  label: string;
  options: OptionsOrGroups<Record<string, any>, any>;
  onChange: (value: Record<string, any>) => void;
  value?: Record<string, any>;
};

const Select = ({ disabled, label, options, onChange, value }: SelectProps) => {
  return (
    <div className="z-[100]">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 999,
            }),
          }}
          classNames={{ control: () => "text-sm" }}
        />
      </div>
    </div>
  );
};

export default Select;
