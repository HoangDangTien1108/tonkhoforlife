import React, { useState } from "react";
import "./style.css";
import Menu from "../../assets/icons/Menu";
import MenuChildren from "./Menuchildren";
import Home from "../../assets/icons/Home";
import Support from "../../assets/icons/Support";
import Transport from "../../assets/icons/Transport";
import Administration from "../../assets/icons/Administration";
import Inventory from "../../assets/icons/Inventory";
import Profiler from "../Profiler.tsx";
import Close from "../../assets/icons/Close";

const List = (props: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          style={{
            border: "none",
            backgroundColor: "transparent",
            width: "20px",
            height: "12px",
          }}
        >
          {open ? <Close/> : <Menu/>}
        </button>
        <div className="menu" style={open ? {display:'flex'} : {display:'none'}}>
          <Profiler />
          <MenuChildren icons={<Home />} text={"Trang chủ"} />
          <MenuChildren icons={<Support />} text={"Hỗ trợ"} />
          <MenuChildren icons={<Transport />} text={"Vận chuyển"} />
          <MenuChildren icons={<Administration />} text={"Quản trị"} />
          <MenuChildren icons={<Inventory />} text={"Tồn kho"} />
        </div>
      </div>
    </>
  );
};

export default List;
