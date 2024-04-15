import React from "react";
import Profile from "../../assets/icons/Profile";

const ProfilerSetting = () => {
  return (
    <>
      <div className="profiler">
        <button style={{
            width:'21px',
            height:'21px',
            backgroundColor:'transparent',
            border:'none'
        }}>{<Profile/>}</button>
      </div>
    </>
  );
};

export default ProfilerSetting;
