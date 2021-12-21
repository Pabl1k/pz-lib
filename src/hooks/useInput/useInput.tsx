import React, {ChangeEvent, useState} from "react";

export const useInput = (initialValue: string, validator: any) => {
    const [value, setValue] = useState(initialValue);
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
