import React, { ChangeEvent, useState } from "react";

export const useInput = (
  initialValue: string,
  validator?: (value: string) => boolean
): {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function UseInputExample() {
  /**
   *
   * @param value the length on the name field can be up to 15 symbols
   */
  const maxLength = (value: string) => value.length <= 15;
  /**
   * @param value hash cannot be entered in the field
   */
  const checkAt = (value: string) => !value.includes("#");
  const name = useInput("Mr.", maxLength);
  const email = useInput("", checkAt);

  return (
    <div>
      <input placeholder="Name" {...name} />
      <input placeholder="Email" {...email} />
    </div>
  );
}
