import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import MainLogo from "../Logos/MainLogo";

const Header = () => {
  return (
    <header className="h-[72px] flex items-center justify-between">
      {/* logo */}
      <MainLogo />

      {/* SearchBar */}
      <SearchBar />
      <div className=" flex items-center justify-end ml-[20px]">
        <div className="mr-[10px] min-w-[32px] flex text-nowrap ">
          {/* login-out  */}
          <p className=" text-nowrap font-semibold text-[14px] cursor-pointer">
            Đăng nhập
          </p>
          <p className="text-nowrap font-semibold text-[14px] ml-[20px] cursor-pointer">
            Đăng ký
          </p>
        </div>

        {/* chinh sua sau */}
        <div className="ml-[8px] flex items-center">
          <button className="button bg-black text-white ">Phim Đã Lưu</button>
          <button className="button bg-transparent  ml-[8px] text-black ">
            Lịch Sử
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
