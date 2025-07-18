import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube } from "../svg";

// images
import logo from "@/assets/img/logo/logo.png";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({openOffcanvas,setOpenOffcanvas}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="#">
                <Image src={logo} alt="logo" />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>From website design to marketing strategies, Growww offers genuine effort, expertise, and end-to-end e-commerce solutions for brand owners to thrive & grow online. </p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus/>
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <a href="#">
                        <Image src={item} alt="gallery-img" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <a href="tel:9866662226">9866662226</a>
                </li>
                <li>
                  <a href="mailto:contact@growww.in">contact@growww.in</a>
                </li>
                <li>
                  <a href="https://g.page/r/CeDUh5jhTvDHEBM">Opp. Hotel Sea-e-pearl, Near Beanboard, Dayal Nagar Colony, Vishalakshi Nagar, Visakhapatnam, Andhra Pradesh, 530043.</a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a href="https://www.instagram.com/growww_ecommerce/"><InstagramTwo /></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC2CCtqNw62HM1HCaoU9y5hg"><Youtube /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
