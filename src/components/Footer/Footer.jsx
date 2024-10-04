import React from "react";
import FooterLinkUnderline from "../Links/FooterLinks/FooterLinkUnderline";
import FooterLinkNoUnderline from "../Links/FooterLinks/FooterLinkNoUnderline";

const Footer = () => {
  return (
    <footer>
      <div className=" py-[30px] px-0 text-[12px] leading-[130%] font-light">
        {/* footer-top */}
        <div className="mb-[27px] border-b-[1px] border-footer-border-color">
          <p className="pb-[12px] text-footer-text-color">
            2. Qualified Purchasers receive an Apple Gift Card when they
            purchase an eligible Mac or iPad at a Qualifying Location. Only one
            Apple Gift Card per eligible Mac or iPad per Qualified Purchaser.
            Offer subject to availability. While supplies last. View full terms
            and conditions of offer <FooterLinkUnderline link="/" text="here" />
            .
          </p>
          <p className="pb-[12px] text-footer-text-color">
            Apple Vision Pro has not been authorized as required by the rules of
            the Federal Communications Commission. This device is not, and may
            not be, offered for sale or lease, or sold or leased, until
            authorization is obtained.
          </p>
          <p className="pb-[12px] text-footer-text-color">
            Apple Vision Pro will be available early next year on{" "}
            <FooterLinkUnderline link="/" text="apple.com" /> and at Apple
            retail stores in the U.S.
          </p>
          <p className="pb-[12px] text-footer-text-color">
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p className="pb-[12px] text-footer-text-color">
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.
          </p>
          <p className="pb-[12px] text-footer-text-color">
            Learn more about how Apple Card applications are evaluated at{" "}
            <FooterLinkUnderline
              link="/"
              text="support.apple.com/kb/HT209218"
            />
            .
          </p>
          <p className="pb-[12px] text-footer-text-color">
            A subscription is required for Apple TV+.
          </p>
          <p className="pb-[12px] mb-[15px] text-footer-text-color">
            Major League Baseball trademarks and copyrights are used with
            permission of MLB Advanced Media, L.P. All rights reserved.
          </p>
        </div>

        {/* footer-middle */}
        <div className="flex">
          <div className="w-[20%]">
            <div className="mb-[27px]">
              <p className="p-0 font-semibold mr-[20px] mb-[0.8rem] outline-none text-footer-directory-title-color">
                Shop and Learn
              </p>
              <ul className="mr-[20px]">
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Phone " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Laptop" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Computer" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text=" Tablet " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Headphone " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Earphones " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Watch " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Vision" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="TV & Home " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Accessories " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Support" />
                </li>
              </ul>
            </div>
            <div className="mb-[27px]">
              <p className="p-0 font-semibold mr-[20px] mb-[0.8rem] outline-none text-footer-directory-title-color">
                Apple Wallet
              </p>
              <ul className="mr-[20px]">
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Wallet " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Card " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Pay" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Cash " />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="mb-[27px]">
              <p className="p-0 font-semibold mr-[20px] mb-[0.8rem] outline-none text-footer-directory-title-color">
                Account
              </p>
              <ul className="mr-[20px]">
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Manage Your Apple ID" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Store Account" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="iCloud.com" />
                </li>
              </ul>
            </div>
            <div className="mb-[27px]">
              <p className="p-0 font-semibold mr-[20px] mb-[0.8rem] outline-none text-footer-directory-title-color">
                Entertainment
              </p>
              <ul className="mr-[20px]">
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple One" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple TV+ " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Music" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Arcade " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Fitness+ " />
                </li>{" "}
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple News+ " />
                </li>{" "}
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Podcasts " />
                </li>{" "}
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Books " />
                </li>{" "}
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Store " />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="mb-[27px]">
              <p className="p-0 font-semibold mr-[20px] mb-[0.8rem] outline-none text-footer-directory-title-color">
                Apple Store
              </p>
              <ul className="mr-[20px]">
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Phone" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Laptop" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Computer" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text=" Tablet " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Headphone " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Earphones " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Watch " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Vision" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="TV & Home " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Accessories " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Support" />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="mb-[27px]">
              <p className="p-0 font-semibold mr-[20px] mb-[0.8rem] outline-none text-footer-directory-title-color">
                Shop and Learn
              </p>
              <ul className="mr-[20px]">
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Phone" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Laptop" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Computer" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text=" Tablet " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Headphone " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Earphones " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Watch " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Vision" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="TV & Home " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Accessories " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Support" />
                </li>
              </ul>
            </div>
            <div className="mb-[27px]">
              <p className="p-0 font-semibold mr-[20px] mb-[0.8rem] outline-none text-footer-directory-title-color">
                Apple Wallet
              </p>
              <ul className="mr-[20px]">
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Wallet " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Card " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Pay" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Cash " />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="mb-[27px]">
              <p className="p-0 font-semibold mr-[20px] mb-[0.8rem] outline-none text-footer-directory-title-color">
                Shop and Learn
              </p>
              <ul className="mr-[20px]">
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Phone" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Laptop" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Computer" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text=" Tablet " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Headphone " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Earphones " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Watch " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Vision" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="TV & Home " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Accessories " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Support" />
                </li>
              </ul>
            </div>
            <div className="mb-[27px]">
              <p className="p-0 font-semibold mr-[20px] mb-[0.8rem] outline-none text-footer-directory-title-color">
                Apple Wallet
              </p>
              <ul className="mr-[20px]">
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Wallet " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Card " />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Pay" />
                </li>
                <li className="mb-[10px]">
                  <FooterLinkNoUnderline link="/" text="Apple Cash " />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="pb-[12px] mb-[15px] text-footer-text-color">
          More ways to shop:{" "}
          <FooterLinkUnderline
            link="/"
            text="Find an Apple Store"
            color={true}
          />{" "}
          or <FooterLinkUnderline link="/" text="other retailer" color={true} />{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>

        {/* footer bottom */}
        <div className="pt-[10px] flex items-center justify-between mb-[27px] border-t-[1px] border-footer-border-color">
          <p className="p-0 text-footer-text-color">
            Copyright © 2023 Apple Inc. All rights reserved.
          </p>
          <ul className="flex justify-start items-center w-[60%]">
            <li className="py-0 px-[10px] border-r-[1px] border-footer-directory-title-color">
              <FooterLinkNoUnderline link="/" text="Privacy Policy" />
            </li>
            <li className="py-0 px-[10px] border-r-[1px] border-footer-directory-title-color">
              <FooterLinkNoUnderline link="/" text="Terms of Use" />
            </li>
            <li className="py-0 px-[10px] border-r-[1px] border-footer-directory-title-color">
              <FooterLinkNoUnderline link="/" text="Sales and Refunds" />
            </li>
            <li className="py-0 px-[10px] border-r-[1px] border-footer-directory-title-color">
              <FooterLinkNoUnderline link="/" text="Legal " />
            </li>
            <li className="py-0 px-[10px] border-none">
              <FooterLinkNoUnderline link="/" text="Site Map " />
            </li>
          </ul>
          <FooterLinkNoUnderline link="/" text="United States " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
