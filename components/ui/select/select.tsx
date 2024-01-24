"use client";

import {ChangeEvent, useState} from "react";

type props = {
  name: string;
  values: string[];
};

const Select = ({name, values}: props) => {
  const [current, setCurrent] = useState<string>(() => values[0]);

  const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCurrent(e.target.value);
  };

  return (
    <select
      name={name}
      id={name}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e)}
      value={current}
      className={"hover:cursor-pointer"}
    >
      {values.map(value => (
        <option
          key={value}
          className={"text-xl text-[--gray] hover:bg-black"}
          style={{
            boxShadow: `0 0 10px 100px #1882A8 inset`
          }}
          value={value}
        >
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;