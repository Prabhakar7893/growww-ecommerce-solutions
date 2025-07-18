import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Web Services",
    title: "Website Development", 
    text: "We build fast, responsive, and user-focused websites tailored to your business goals. Whether it's a portfolio, company website, or landing page — we make your online presence count.",
    lists: [
      "Custom layout & UI",
      "Responsive for all devices",
      "SEO-friendly structure",
      "CMS or static builds",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Shopify Experts",
    title: "Shopify Development",
    text: "Power your eCommerce journey with custom Shopify solutions. From theme design to checkout customizations — we create fast, beautiful, and high-converting stores.",
    lists: [
      "Custom Theme Development",
      "Shopify App Integrations",
      "Product & Inventory Setup",
      "Checkout Customization",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Digital Commerce",
    title: "E-commerce Development",
    text: "We create scalable, secure eCommerce platforms using the latest technologies. Whether it’s Shopify, WooCommerce, or custom solutions — we build to sell.",
    lists: [
      "Shopping Cart Integration",
      "Product Catalogs",
      "Payment & Shipping Setup",
      "Mobile-Optimized Stores",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "CMS Solutions",
    title: "WordPress Development",
    text: "From lightweight blogs to advanced business sites, our WordPress services give you flexibility, control, and a beautiful front end — all powered by a strong backend.",
    lists: [
      "Theme Development",
      "Plugin Customization",
      "Elementor & Gutenberg Support",
      "SEO Optimization",
    ],
  },
  {
    id: 5,
    img: ser_img_4,
    subtitle: "Secure Transactions",
    title: "Payment Gateway Integrations",
    text: "Integrate secure, multi-platform payment gateways into your website or app — supporting Stripe, Razorpay,and more.",
    lists: [
      "Seamless Checkout Integration",
      "Multi-Currency Support",
      "UPI, Cards, Wallets",
      "Secure",
    ],
  },
   {
    id: 6,
    img: ser_img_2,
    subtitle: "Smart Checkout UX",
    title: "Simple & Magic Checkouts",
    text: "We design checkout flows that reduce cart abandonment and boost conversions — frictionless, fast, and tailored to your audience.",
    lists: [
      "One-Step Checkout",
      "Auto-apply Coupons & Offers",
      "Custom Payment UI",
      "Lightning Fast Load Times",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
