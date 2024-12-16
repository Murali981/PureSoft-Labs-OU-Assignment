import { Inter } from "next/font/google";
import Image from "next/image";
import MainBar from "../_components/MainBar";

const inter = Inter({ subsets: ["latin"] });

export default function page() {
  return (
    <div className="min-h-screen p-8">
      <div className="w-full min-h-[calc(100vh-64px)]  rounded-3xl flex">
        {/* Left sidebar section */}
        <div className="w-[230px]  rounded-3xl bg-[#FFFFFF]  mt-4">
          {" "}
          {/* White background only for sidebar */}
          <div className="flex  flex-col  items-center h-full ">
            <div className=" mt-4 ">
              {" "}
              {/* Logo container without white background */}
              <div className="flex  justify-between">
                <svg
                  width="138"
                  height="17"
                  viewBox="0 0 138 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M117.939 6.7438V17H121.406V10.1625H134.087V17H137.554V6.7438H117.939ZM121.01 3.41873H134.384C136.266 3.09091 137.604 1.49862 138 0H117.394C117.79 1.49862 119.177 3.04408 121.01 3.41873ZM107.388 17C109.122 16.2975 110.063 15.0799 110.459 13.6749H94.8564V0.046832H91.3395V17H107.388ZM65.3344 3.3719H77.7178C79.6001 2.85675 81.1356 1.49862 81.5319 0.046832H61.9166V10.0689H77.9655V13.5813H65.384C63.4026 14.0964 61.7185 15.3609 60.8764 17H81.4328V6.7438H65.384L65.3344 3.3719ZM34.8218 3.41873H48.1959C50.0781 3.09091 51.4651 1.49862 51.8118 0H31.1564C31.5526 1.49862 32.9396 3.04408 34.8218 3.41873ZM34.8218 10.1157H48.1959C50.0781 9.78788 51.4651 8.19559 51.8118 6.69697H31.1564C31.5526 8.19559 32.9396 9.74105 34.8218 10.1157ZM34.8218 17H48.1959C50.0781 16.6722 51.4651 15.0799 51.8118 13.5813H31.1564C31.5526 15.0799 32.9396 16.6722 34.8218 17Z"
                    fill="#E51837"
                  />
                  <path
                    d="M0 0.0468319C0.396268 1.54545 1.7832 3.04408 3.61594 3.41873H9.26276L9.55996 3.5124V16.9532H13.0768V3.5124L13.374 3.41873H19.0208C20.9031 2.95041 22.2405 1.54545 22.6368 0.0468319V0L0 0.0468319Z"
                    fill="#E51837"
                  />
                </svg>
              </div>
              {/* SVG paths */}
            </div>
            <div className="flex space-y-4 flex-col ">
              <div className="flex mt-8 relative  justify-center items-center">
                <svg
                  width="193"
                  height="46"
                  viewBox="0 0 193 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="193"
                    height="46"
                    rx="10"
                    fill="#1B59F8"
                    fill-opacity="0.1"
                  />
                </svg>
                <div className="absolute w-[188px] h-[46px]  left-4 top-0 flex items-center space-x-3   ">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6656 0.85L17.2058 2.29L11.9863 7.17L8.46745 3.88C8.05032 3.49 7.37649 3.49 6.95936 3.88L0.541974 9.89C0.124843 10.28 0.124843 10.91 0.541974 11.3C0.959104 11.69 1.63293 11.69 2.05006 11.3L7.70806 6L11.2269 9.29C11.6441 9.68 12.3179 9.68 12.735 9.29L18.7139 3.71L20.2541 5.15C20.5856 5.46 21.1632 5.24 21.1632 4.8V0.5C21.1739 0.22 20.9386 0 20.6391 0H16.0507C15.5694 0 15.3341 0.54 15.6656 0.85Z"
                      fill="#1B59F8"
                    />
                  </svg>

                  <div
                    className={` ${inter.className} text-[#1B59F8] font-medium text-[14px]`}
                  >
                    Reports
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 w-[193px]  h-[46px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0475 20.2647V14.2085H7.42968C6.92645 14.2085 6.58643 13.6234 6.83124 13.1406L11.8363 2.65189C12.1491 1.96435 13.1148 2.21304 13.1148 2.98835V9.11774H16.5694C17.0726 9.11774 17.399 9.68826 17.1814 10.171L12.3396 20.5866C12.0131 21.2887 11.0475 21.0401 11.0475 20.2647Z"
                    fill="black"
                    fill-opacity="0.7"
                  />
                </svg>

                <div
                  className={` ${inter.className} text-[#000000] font-medium text-[14px]`}
                >
                  Library
                </div>
              </div>
              <div className=" flex items-center h-[46px] space-x-3 w-[193px]  ">
                <svg
                  width="27"
                  height="24"
                  viewBox="0 0 27 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.337 8C12.337 9.66 10.8914 11 9.08703 11C7.28268 11 5.82616 9.66 5.82616 8C5.82616 6.34 7.28268 5 9.08703 5C10.8914 5 12.337 6.34 12.337 8ZM21.0327 8C21.0327 9.66 19.587 11 17.7827 11C15.9783 11 14.5218 9.66 14.5218 8C14.5218 6.34 15.9783 5 17.7827 5C19.587 5 21.0327 6.34 21.0327 8ZM9.08703 13C6.55442 13 1.47833 14.17 1.47833 16.5V18C1.47833 18.55 1.96746 19 2.56529 19H15.6088C16.2066 19 16.6957 18.55 16.6957 18V16.5C16.6957 14.17 11.6196 13 9.08703 13ZM16.7283 13.05C17.1088 13.02 17.4675 13 17.7827 13C20.3153 13 25.3914 14.17 25.3914 16.5V18C25.3914 18.55 24.9022 19 24.3044 19H18.674C18.7936 18.69 18.8696 18.35 18.8696 18V16.5C18.8696 15.03 18.0109 13.92 16.7718 13.09C16.7685 13.087 16.7652 13.083 16.7616 13.0787C16.7534 13.0688 16.7435 13.057 16.7283 13.05Z"
                    fill="#4D4D4D"
                  />
                </svg>

                <div
                  className={` ${inter.className} text-[#000000] font-medium text-[14px]`}
                >
                  People
                </div>
              </div>

              <div className=" flex items-center space-x-3 w-[193px]  h-[46px]">
                <svg
                  width="27"
                  height="24"
                  viewBox="0 0 27 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.1305 3H4.73916C3.54351 3 2.56525 3.9 2.56525 5V19C2.56525 20.1 3.54351 21 4.73916 21H22.1305C23.3261 21 24.3044 20.1 24.3044 19V5C24.3044 3.9 23.3261 3 22.1305 3ZM10.1739 17H6.91307C6.31525 17 5.82612 16.55 5.82612 16C5.82612 15.45 6.31525 15 6.91307 15H10.1739C10.7718 15 11.2609 15.45 11.2609 16C11.2609 16.55 10.7718 17 10.1739 17ZM10.1739 13H6.91307C6.31525 13 5.82612 12.55 5.82612 12C5.82612 11.45 6.31525 11 6.91307 11H10.1739C10.7718 11 11.2609 11.45 11.2609 12C11.2609 12.55 10.7718 13 10.1739 13ZM10.1739 9H6.91307C6.31525 9 5.82612 8.55 5.82612 8C5.82612 7.45 6.31525 7 6.91307 7H10.1739C10.7718 7 11.2609 7.45 11.2609 8C11.2609 8.55 10.7718 9 10.1739 9ZM20.7174 11.12L17.2718 14.29C16.8479 14.68 16.1522 14.68 15.7283 14.29L14.1957 12.87C13.7718 12.48 13.7718 11.85 14.1957 11.46C14.6196 11.07 15.3044 11.07 15.7283 11.46L16.5 12.17L19.1848 9.7C19.6087 9.31 20.2935 9.31 20.7174 9.7L20.7283 9.71C21.1413 10.1 21.1413 10.74 20.7174 11.12Z"
                    fill="black"
                    fill-opacity="0.7"
                  />
                </svg>

                <div
                  className={` ${inter.className} text-[#000000] font-medium text-[14px]`}
                >
                  Activities
                </div>
              </div>
            </div>
            <div className="mt-6 w-[193px]">Support</div>
            <div className="flex flex-col justify-between grow   ">
              <div className="mt-4 flex flex-col gap-2 h-[96px]">
                <div className=" flex items-center space-x-3 w-[193px]  h-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C11.54 3 11.07 3.04 10.6 3.14C7.84001 3.67 5.64001 5.9 5.12001 8.66C4.64001 11.27 5.60001 13.67 7.34001 15.22C7.77001 15.6 8.00001 16.13 8.00001 16.69V19C8.00001 20.1 8.90001 21 10 21H10.28C10.63 21.6 11.26 22 12 22C12.74 22 13.38 21.6 13.72 21H14C15.1 21 16 20.1 16 19V16.69C16 16.14 16.22 15.6 16.64 15.23C18.09 13.95 19 12.08 19 10C19 6.13 15.87 3 12 3ZM12.5 14H11.5V11.41L9.67001 9.59L10.38 8.88L12 10.5L13.62 8.88L14.33 9.59L12.5 11.42V14ZM13.5 19C13.49 19 13.48 18.99 13.47 18.99V19H10.53V18.99C10.52 18.99 10.51 19 10.5 19C10.22 19 10 18.78 10 18.5C10 18.22 10.22 18 10.5 18C10.51 18 10.52 18.01 10.53 18.01V18H13.47V18.01C13.48 18.01 13.49 18 13.5 18C13.78 18 14 18.22 14 18.5C14 18.78 13.78 19 13.5 19ZM13.5 17H10.5C10.22 17 10 16.78 10 16.5C10 16.22 10.22 16 10.5 16H13.5C13.78 16 14 16.22 14 16.5C14 16.78 13.78 17 13.5 17Z"
                      fill="black"
                      fill-opacity="0.7"
                    />
                  </svg>

                  <div
                    className={` ${inter.className} text-[#000000] font-medium text-[14px]`}
                  >
                    Get Started
                  </div>
                </div>

                <div className=" flex items-center space-x-3 w-[193px]  h-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6209_555)">
                      <path
                        d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75002 2 9.54002 2.18 9.51002 2.42L9.13002 5.07C8.52002 5.32 7.96002 5.66 7.44002 6.05L4.95002 5.05C4.72002 4.96 4.46002 5.05 4.34002 5.27L2.34002 8.73C2.21002 8.95 2.27002 9.22 2.46002 9.37L4.57002 11.02C4.53002 11.34 4.50002 11.67 4.50002 12C4.50002 12.33 4.53002 12.66 4.57002 12.98L2.46002 14.63C2.27002 14.78 2.22002 15.05 2.34002 15.27L4.34002 18.73C4.46002 18.95 4.73002 19.03 4.95002 18.95L7.44002 17.95C7.96002 18.35 8.52002 18.68 9.13002 18.93L9.51002 21.58C9.54002 21.82 9.75002 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.50002 13.93 8.50002 12C8.50002 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                        fill="black"
                        fill-opacity="0.7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6209_555">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div
                    className={` ${inter.className} text-[#000000] font-medium text-[14px]`}
                  >
                    Settings
                  </div>
                </div>
              </div>
              <div className=" space-y-2  flex flex-col">
                <svg
                  width="210"
                  height="1"
                  viewBox="0 0 210 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="4.37114e-08"
                    y1="0.5"
                    x2="210"
                    y2="0.500018"
                    stroke="#E5E5E5"
                  />
                </svg>
                <div className="w-[34px] h-[34px] rounded-full border-[#E2E2EA]">
                  <Image
                    src="/SamWheeler.png"
                    alt="sam wheeler"
                    width={34}
                    height={34}
                  />
                </div>
                <div
                  className={`${inter.className} font-semibold text-[14px] text-[#000000]`}
                >
                  Sam Wheeler
                </div>
                <div
                  className={`${inter.className} font-normal text-[12px] text-[#000000] text-opacity-50`}
                >
                  samwheeler@example.com
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main content area */}
        <div className="flex-1">
          <MainBar />
        </div>
      </div>
    </div>
  );
}
