import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode,
  onClick: ()=>void,
  style?: React.CSSProperties

};

function Button({children, onClick, style}:ButtonProps)
{

  const onBtnClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>
  {
    event.stopPropagation();
    onClick();
  }, [onClick]);

  return (
    <button
    className={styles.container}
    style={style}
    onClick={(event)=>onBtnClick(event)}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);
