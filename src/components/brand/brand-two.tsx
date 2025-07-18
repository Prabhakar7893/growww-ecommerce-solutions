import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
// images
import b_1 from "@/assets/img/home-04/brand/brand-1.png";
import b_2 from "@/assets/img/home-04/brand/brand-2.png";
import b_3 from "@/assets/img/home-04/brand/brand-3.png";
import b_4 from "@/assets/img/home-04/brand/brand-4.png";
import b_5 from "@/assets/img/home-04/brand/brand-5.png";
import b_6 from "@/assets/img/home-04/brand/brand-6.png";
import b_7 from "@/assets/img/home-04/brand/brand-7.png";
import b_8 from "@/assets/img/home-04/brand/brand-8.png";
import gr_1 from "@/assets/img/allimages/3-1.png.webp";
import gr_2 from "@/assets/img/allimages/4-1.png.webp";
import gr_3 from "@/assets/img/allimages/5-1.png.webp";
import gr_4 from "@/assets/img/allimages/6-1.png.webp";
import gr_5 from "@/assets/img/allimages/7-1.png.webp";
import gr_6 from "@/assets/img/allimages/8-1.png.webp";
import { div } from "three/examples/jsm/nodes/Nodes.js";


// brand_data
const brand_data = [
  {
    id: 1,
    brand: gr_1,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 2,
    brand: gr_2,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 3,
    brand: gr_3,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 4,
    brand: gr_4,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 5,
    brand: gr_5,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 6,
    brand: gr_6,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 7,
    brand: gr_1,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
  {
    id: 8,
    brand: gr_2,
    texts: [
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
      "TopoChico.com",
    ],
  },
];


// brand items
export function BrandItems() {
  return (
    <>
      {brand_data.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 growww-size-3">
          <div className="tp-brand-4-item p-relative growww-brand-item">
            <Image src={item.brand} alt="brand" style={{ height: "auto" }} className="growww-serv-featured-clients" />
            {/* <div className="tp-brand-4-line-text d-flex align-items-center">
              {item.texts.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
}

const BrandTwo = () => {
  return (
    <div
      className="tp-brand-4-area mt-20 pt-120 pb-120 grey-bg-3"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-4-title-box tp_fade_bottom mb-65">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Our Clients
              </span>
              <h4 className="tp-section-title-40 font-style-2">
                We love to work with clients to develop unique, innovative
                websites.
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <BrandItems />
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
