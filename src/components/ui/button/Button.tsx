import React from 'react';

type ButtonProps = {
  children: React.ReactNode,
  styles?: React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, 
HTMLButtonElement>

};

function Button({children, styles}:ButtonProps)
{
  return (
    <button styles={styles}>
      {children}
    </button>
  );
}

export default React.memo(Button);
