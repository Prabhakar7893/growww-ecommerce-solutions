import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo/logo-white.png';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';
import { CSSProperties } from 'react';
import whatsapp_png from '@/assets/img/home-04/footer/whatsapp.png';


const footer_images = [
  whatsapp_png
]

const imgStyle:CSSProperties = {height: "50px" };



export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120" id='grw-ftr-012'>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Quick Links</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/service">Services</a></li>
                      <li><a href="/growww-wato">Product</a></li>
                      <li><a href="/portfolio-grid-col-4">Portfolio</a></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget test" style={{display: 'none',}}>
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2"> 
                        <SvgBgSm/>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    Drop us a line but it always brings a smile to the face.
                  </p>
                  <Link className="tp-footer-3-logo p-relative gw-logo" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    {new Date().getFullYear()} Growww <br /> © All rights reserved
                  </p>    
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a href="https://g.page/r/CeDUh5jhTvDHEBM"
                      target="_blank">Opp. Hotel Sea-e-pearl, Near Beanboard, Dayal Nagar Colony, Vishalakshi Nagar, Visakhapatnam, Andhra Pradesh, 530043.</a>
                      </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span><a href="tel:+919866662226">+91 9866662226</a></span>
                    <span><a href="mailto:contact@growww.in">contact@growww.in</a></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <a href="https://g.page/r/CeDUh5jhTvDHEBM"><i className="fa-brands fa-google"></i></a>
                    <a href="https://www.youtube.com/channel/UC2CCtqNw62HM1HCaoU9y5hg"><i className="fa-brands fa-youtube"></i></a>
                    <a href="https://www.instagram.com/growww_ecommerce/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/growww-official"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div> 
              </div>  
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
