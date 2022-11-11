import React from "react";

interface InputProps {
  element: string;
  type: string;
  label?: string;
  id?: string;
  name: string;
  placeholder: string;
  initialValue?: string;
  className: string;
  onInput: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const element =
    props.element === 'input' ? (
      <input
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        type={props.type}
        value={props.initialValue}
        className={props.className}
        onChange={props.onInput}
      />
    ) : (
      <h2>The input type is not supported!</h2>
    );

  return (
    <div className='form-control'>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      {element}
    </div>
  );
}
