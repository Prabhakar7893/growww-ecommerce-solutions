import React from "react";
import { UpArrow } from "../svg";
import Image from "next/image";
import Link from "next/link";

const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/inner-project/portfolio-col-2/port-4.jpg",
    category: "Clothing & Jewellery",
    year: "2024",
    title: "Arya Collections",
    sitelink: "https://aryacollections.com/",
  },
  {
    id: 2,
    img: "/assets/img/inner-project/portfolio-col-2/port-4.jpg",
    category: "Booking",
    year: "2024",
    title: "Brham by Brahm",
    sitelink: "https://brham.com/",
  },
  {
    id: 3,
    img: "/assets/img/inner-project/portfolio-col-2/port-3.jpg",
    category: "Jewellery",
    year: "2025",
    title: "Raveendra Gold",
    sitelink: "https://raveendragoldcoveringworks.com/",
  },
  {
    id: 4,
    img: "/assets/img/inner-project/portfolio-col-2/port-2.jpg",
    category: "Fashion",
    year: "2025",
    title: "SLS Fashion World",
    sitelink: "https://slsfashionworld.com/",
  },
  {
    id: 5,
    img: "/assets/img/inner-project/portfolio-col-2/port-1.jpg",
    category: "Clothing",
    year: "2025",
    title: "Madhurika Attires",
    sitelink: "https://madhurikaattires.com/",
  },
  {
    id: 6,
    img: "/assets/img/inner-project/portfolio-col-2/port-5.jpg",
    category: "Food Delivery",
    year: "2025",
    title: "My Indian Store",
    sitelink: "https://myindianstore.com.au/",
  },
  {
    id: 7,
    img: "/assets/img/inner-project/portfolio-col-2/port-6.jpg",
    category: "Gifts",
    year: "2025",
    title: "Subhkriti",
    sitelink: "https://subhkriti.com/",
  },
  {
    id: 8,
    img: "/assets/img/inner-project/portfolio-col-2/port-7.jpg",
    category: "Booking",
    year: "2024",
    title: "Brham by Brahm",
    sitelink: "https://brham.com/",
  },
];

// prop type 
type IProps = {
  style_2?: boolean;
}

export default function PortfolioGridFourColArea({style_2=false}:IProps) {
  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className={`container container-${style_2?'1800':'1530'}`}>
        <div className="row">
          {portfolio_data.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor" data-cursor="View<br>Demo">
                <Link href={item.sitelink} className="tp_img_reveal cursor-hide" target="_blank">
                  <div className="tp_img_reveal">
                    <Image
                      src={item.img}
                      alt="prd-img"
                      width={style_2?426:359}
                      height={style_2?504:424}
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  href="" style={{display: "none"}}
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
