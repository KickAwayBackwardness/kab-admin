import React from "react";
import hackyText from "../../utils/hacky-text";
import { useSelector } from "react-redux";
import CloseIcon from "./svg/CloseIcon";
import MusicWaveIcon from "./MusicWaveIcon";
import LogoIcon from "./LogoIcon";

const SideMenu = () => {
  const { isOpen } = useSelector((state) => state.humburgerSlice);

  const handleHover = (event, text) => {
    hackyText(event.target, text);
  };
  return (
    <>
      <div
        className={`
        fixed z-[20] top-[var(--padding-outer)] left-[var(--padding-outer)] 
        w-0 h-sidebar bg-black 
        transition-all  ease-in-out 
        overflow-hidden  uppercase 
        rounded-side_menu
        flex justify-between text-white
        ${
          isOpen
            ? " w-side_menu_width duration-500 delay-150"
            : "w-0 bg-transparent duration-150"
        }`}
      >
        <div className="w-side_menu_main_column_width h-full flex flex-col justify-between border-line-light border-r-side_menu">
          <div className="flex text-white px-[16px] pt-[25px] pb-[16px] w-full">
            <div className="w-[25%] text-ibm text-small_text">
              <p onMouseEnter={(event) => handleHover(event, "discovery")}>
                discovery
              </p>
            </div>
            <div className="w-[75%]">
              <div className="text-whyteInktrap w-fit relative text-[40px] font-bold leading-[1.3] text-black">
                <p>story</p>
                <div className="absolute h-[42px] w-[155px]  bg-green -z-[1] -top-[3.5px] -left-[12px] rounded-[2px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 20 21"
                    className="absolute w-[15px] right-0 -bottom-[3px]"
                  >
                    <path
                      fill="#000"
                      d="M3.81 19.181c-.756.69-2.123 1.009-3.81 1.009h20V.226c0 1.029-1.085 2.527-1.652 3.09-.566.565-13.631 15.038-14.538 15.865Z"
                    ></path>
                  </svg>
                </div>
                <p className="absolute text-ibm text-small_text font-normal text-green -right-[30px] top-0">
                  page <br />
                  001
                </p>
              </div>
              <div className="relative w-fit text-black cursor-pointer group">
                <p
                  className="text-whyteInktrap w-fit relative text-[40px] font-bold leading-[1.3] text-white group-hover:text-black"
                  onMouseEnter={(event) => handleHover(event, "protocol")}
                >
                  protocol
                </p>

                <div className="absolute h-[42px] w-[251.38px] opacity-0 text-white bg-white -z-[1]  -top-[3.5px] -left-[12px] rounded-[2px] group-hover:opacity-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 20 21"
                    className="absolute w-[15px] right-0 -bottom-[3px]"
                  >
                    <path
                      fill="#000"
                      d="M3.81 19.181c-.756.69-2.123 1.009-3.81 1.009h20V.226c0 1.029-1.085 2.527-1.652 3.09-.566.565-13.631 15.038-14.538 15.865Z"
                    ></path>
                  </svg>
                  <p className="absolute text-ibm text-small_text font-normal text-white -right-[20px] top-0">
                    page <br />
                    002
                  </p>
                </div>
              </div>
              <div className="relative w-fit text-black cursor-pointer group">
                <p
                  className="text-whyteInktrap w-fit relative text-[40px] font-bold leading-[1.3] text-white group-hover:text-black"
                  onMouseEnter={(event) => handleHover(event, "journal")}
                >
                  journal
                </p>

                <div className="absolute h-[42px] w-[225px] opacity-0 text-white bg-white -z-[1]  -top-[3.5px] -left-[12px] rounded-[2px] group-hover:opacity-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 20 21"
                    className="absolute w-[15px] right-0 -bottom-[3px]"
                  >
                    <path
                      fill="#000"
                      d="M3.81 19.181c-.756.69-2.123 1.009-3.81 1.009h20V.226c0 1.029-1.085 2.527-1.652 3.09-.566.565-13.631 15.038-14.538 15.865Z"
                    ></path>
                  </svg>
                  <p className="absolute text-ibm text-small_text font-normal text-white -right-[20px] top-0">
                    page <br />
                    003
                  </p>
                </div>
              </div>

              <div className="relative w-fit text-black cursor-pointer group">
                <p
                  className="text-whyteInktrap w-fit relative text-[40px] font-bold leading-[1.3] text-white group-hover:text-black"
                  onMouseEnter={(event) => handleHover(event, "media")}
                >
                  media
                </p>

                <div className="absolute h-[42px] w-[163px] opacity-0 text-white bg-white -z-[1]  -top-[3.5px] -left-[12px] rounded-[2px] group-hover:opacity-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 20 21"
                    className="absolute w-[15px] right-0 -bottom-[3px]"
                  >
                    <path
                      fill="#000"
                      d="M3.81 19.181c-.756.69-2.123 1.009-3.81 1.009h20V.226c0 1.029-1.085 2.527-1.652 3.09-.566.565-13.631 15.038-14.538 15.865Z"
                    ></path>
                  </svg>
                  <p className="absolute text-ibm text-small_text font-normal text-white -right-[20px] top-0">
                    page <br />
                    004
                  </p>
                </div>
              </div>

              <div className="relative w-fit text-black cursor-pointer group">
                <p
                  className="text-whyteInktrap w-fit relative text-[40px] font-bold leading-[1.3] text-white group-hover:text-black"
                  onMouseEnter={(event) => handleHover(event, "gallery")}
                >
                  gallery
                </p>

                <div className="absolute h-[42px] w-[212px] opacity-0 text-white bg-white -z-[1]  -top-[3.5px] -left-[12px] rounded-[2px] group-hover:opacity-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 20 21"
                    className="absolute w-[15px] right-0 -bottom-[3px]"
                  >
                    <path
                      fill="#000"
                      d="M3.81 19.181c-.756.69-2.123 1.009-3.81 1.009h20V.226c0 1.029-1.085 2.527-1.652 3.09-.566.565-13.631 15.038-14.538 15.865Z"
                    ></path>
                  </svg>
                  <p className="absolute text-ibm text-small_text font-normal text-white -right-[20px] top-0">
                    page <br />
                    005
                  </p>
                </div>
              </div>

              <div className="relative w-fit text-black cursor-pointer group">
                <p
                  className="text-whyteInktrap w-fit relative text-[40px] font-bold leading-[1.3] text-white group-hover:text-black"
                  onMouseEnter={(event) => handleHover(event, "about")}
                >
                  about
                </p>

                <div className="absolute h-[42px] w-[170px] opacity-0 text-white bg-white -z-[1]  -top-[3.5px] -left-[12px] rounded-[2px] group-hover:opacity-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 20 21"
                    className="absolute w-[15px] right-0 -bottom-[3px]"
                  >
                    <path
                      fill="#000"
                      d="M3.81 19.181c-.756.69-2.123 1.009-3.81 1.009h20V.226c0 1.029-1.085 2.527-1.652 3.09-.566.565-13.631 15.038-14.538 15.865Z"
                    ></path>
                  </svg>
                  <p className="absolute text-ibm text-small_text font-normal text-white -right-[20px] top-0">
                    page <br />
                    006
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-ibm w-full">
            <div className="p-[16px] flex border-t-[1px] border-line-light ">
              <p
                className="w-[25%] text-small_text"
                onMouseEnter={(event) => handleHover(event, "connect")}
              >
                connect
              </p>
              <div className="w-[75%] text-[7.9px]">
                <p
                  className="mb-[3px]"
                  onMouseEnter={(event) => handleHover(event, "TWITTER")}
                >
                  TWITTER
                </p>
                <p onMouseEnter={(event) => handleHover(event, "discord")}>
                  discord
                </p>
              </div>
            </div>
            <div className="p-[16px] flex border-t-[1px] border-line-light ">
              <p
                className="w-[25%] text-small_text"
                onMouseEnter={(event) => handleHover(event, "buy on")}
              >
                buy on
              </p>

              <div className="w-[75%] text-[7.9px] flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 17 15"
                  className="w-[16px] mr-2"
                >
                  <path d="m.982 8.619.054-.08 3.463-5.408c.053-.08.16-.08.213.027.586 1.305 1.065 2.904.852 3.916-.106.426-.373.985-.692 1.492a.58.58 0 0 1-.133.213c-.027.026-.054.053-.107.053h-3.57c-.08-.027-.133-.133-.08-.213Z"></path>
                  <path d="M16.41 9.633v.852c0 .054-.027.08-.08.107-.266.106-1.199.533-1.572 1.065-.985 1.359-1.731 3.304-3.383 3.304H4.449C1.998 14.96 0 12.963 0 10.485v-.08c0-.053.053-.106.107-.106h3.889c.08 0 .133.08.133.133-.027.24.027.506.133.746.24.48.72.746 1.226.746h1.918v-1.492H5.514c-.106 0-.16-.107-.106-.187a.377.377 0 0 0 .08-.106c.186-.266.426-.64.692-1.092.187-.293.347-.64.48-.96.026-.053.053-.106.08-.186.026-.106.08-.213.106-.293l.08-.24a4.43 4.43 0 0 0 .08-.879c0-.106 0-.24-.026-.373 0-.133-.027-.266-.027-.4 0-.106-.027-.239-.053-.346a3.772 3.772 0 0 0-.107-.532l-.027-.054c-.026-.106-.053-.24-.106-.346a9.942 9.942 0 0 0-.373-1.065l-.16-.4c-.08-.187-.16-.373-.24-.533-.026-.08-.08-.133-.106-.213-.027-.08-.08-.16-.107-.24l-.08-.16-.24-.426c-.026-.053.027-.133.08-.106l1.466.4.186.052.213.054.08.026V.948c0-.426.346-.772.746-.772.213 0 .4.08.533.213s.213.32.213.533V2.2l.16.054s.026 0 .026.026c.027.027.08.08.16.133.053.054.107.107.187.16.133.107.32.267.506.427.053.053.106.08.133.133.24.213.506.48.773.772.08.08.133.16.213.24.08.08.133.187.213.266.08.107.186.24.266.347.027.053.08.106.107.186.106.16.186.32.293.48.026.08.08.16.106.24.107.213.187.426.213.665a.29.29 0 0 1 .027.134.52.52 0 0 1 .027.213c.026.24 0 .453-.027.692-.027.107-.053.187-.08.293-.026.08-.053.187-.106.293-.08.187-.187.373-.293.56-.027.053-.08.133-.134.213-.053.08-.106.133-.133.213-.053.08-.133.16-.186.24-.054.08-.107.16-.187.24-.08.106-.186.213-.266.32-.053.053-.107.133-.187.186-.053.053-.106.133-.186.186-.08.08-.16.16-.24.213l-.16.134c-.026.026-.053.026-.08.026H8.844v1.492h1.465c.32 0 .64-.107.88-.32.08-.08.452-.4.905-.879.027-.026.027-.026.054-.026L16.276 9.5c.08-.027.133.053.133.133Z"></path>
                </svg>
                <p onMouseEnter={(event) => handleHover(event, "openea")}>
                  openea
                </p>
              </div>
            </div>
            <div className="p-[16px] flex border-t-[1px] border-line-light ">
              <p
                className="w-[25%] text-small_text"
                onMouseEnter={(event) => handleHover(event, "US-EN")}
              >
                US-EN
              </p>
              <p className="w-[75%] text-small_text text-gray-500">© 2023</p>
            </div>
          </div>
        </div>
        <div className="w-[var(--sidebar-column-width)] h-full flex flex-col justify-between">
          <CloseIcon />
          <LogoIcon />
          <MusicWaveIcon />
        </div>
      </div>
    </>
  );
};

export default SideMenu;
