import React from 'react';

type BtnTypes = 'button' | 'submit' | 'reset' | undefined;

export declare interface ButtonProps {
  type?: BtnTypes;
  href?: string;
  children: React.ReactNode;
  secondary?: boolean;
  primary?: boolean;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  size?: string;
}

export default function Button(props: ButtonProps) {
  if (props.href) {
    return (
      <a
        className={`btn btn--${props.size || 'default'} ${
          props.primary && 'btn--primary'
        } ${props.secondary && 'btn--secondary'}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      className={`btn btn--${props.size || 'default'} ${
        props.primary && 'btn--primary'
      } ${props.secondary && 'btn--secondary'}`}
      type={props.type}
      onClick={props.onClickHandler}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
