import React from "react";

const MenuChildren = (props: any) => {
  return (
    <>
      <div style={{backgroundColor:'white'}}>
        <div>{props.icons}</div>
        <div>{props.text}</div>
      </div>
    </>
  );
};

export default MenuChildren;
