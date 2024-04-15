import HeaderImage from "../../assets/images/Header.png";
import "./style.css";
import List from "../Menu";
import ProfilerSetting from "../ProfilerSetting";

const Header = () => {
  return (
    <>
      <div
        className="header"
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundSize: "100.5%",
          backgroundPosition: "center",
          height: "198px",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <div className="header_content">
          <List />
          <p style={{color:'white'}}>Ton Kho TOKYOLIFE</p>
          <ProfilerSetting/>
        </div>
      </div>
    </>
  );
};

export default Header;
