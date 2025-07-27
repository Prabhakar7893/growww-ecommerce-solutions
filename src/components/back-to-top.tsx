'use client';
import React, { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import React, { CSSProperties } from 'react';
import whatsapp_png from '@/assets/img/home-04/footer/whatsapp.png';


const footer_images = [
  whatsapp_png
] 

const imgStyle:CSSProperties = {height: "50px" };

export default function BackToTop() {

  function backToTop() {
    const result = document.querySelector(".back-to-top-wrapper");
    if (result) {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          result.classList.add("back-to-top-btn-show");
        } else {
          result.classList.remove("back-to-top-btn-show");
        }
      });
      result.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }
  useEffect(() => {
    backToTop();
    return () => {
      window.removeEventListener("scroll", backToTop);
    }
  },[])
  return (
    <div className="back-to-top-wrapper">
      <div className='gw-footer-whatsapp'>
                          <div className='gw-footer-wap'>
                              <a href="https://api.whatsapp.com/send?phone=919866662226&text=Hi%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20talk%20to%20your%20team%20about%20my%20eCommerce%20project." target='_blank'>
                              {footer_images.map((g, i) => (
                                  <div key={i}>
                                      <div className="tp-gallery-item">
                                                      <Image src={g} alt="whatsapp" style={{ height: 'auto' }} />
                                                    </div>
                                                  </div>
                                                ))}</a>  
                          </div>
                      </div>
      {/* <button id="back_to_top" type="button" className="back-to-top-btn">
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 6L6 1L1 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button> */}
    </div>
  );
}
