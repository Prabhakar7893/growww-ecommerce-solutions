"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
//import { ArrowBg, RightArrowTwo } from '../../../public/assets/img/svg/arow.svg';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
import Image from "next/image";
import { Search, UpArrow } from "@/components/svg";
//import faq_banner from '@/assets/img/inner-faq/faq/banner-faq.jpg';
import faq_banner from '@/assets/img/allimages/Growww Logo - wato.jpg';
import growww_wato_logo from '@/assets/img/allimages/Growww Logo Varation (1).jpg';
import FaqItem from "@/components/faq/faq-item";
import award_img from "@/assets/img/home-02/award/award-1.png";


// internal imports
import Wrapper from "@/layouts/wrapper";

// animation
import { hoverBtn } from "@/utils/hover-btn";
import {charAnimation,fadeAnimation,titleAnimation} from "@/utils/title-animation";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";
import FooterFour from "@/layouts/footers/footer-four";
import { ArrowBg, RightArrowTwo } from "@/components/svg";
import HeaderFour from "@/layouts/headers/header-four";


// type 
type IFaq = {
  id: number;
  question: string;
  answer: string;
}
// faq data
export const faq_data:IFaq[] = [
  {
    id: 1,
    question: "✅ No-Code Chatbot Builder",
    answer:
      "Create multilingual, flow-based chatbots with drag-and-drop interface—no coding needed",
  },
  {
    id: 2,
    question: "📣 Broadcast & Retarget Campaigns",
    answer:
      "Send templated messages with CTAs to unlimited contacts. Track reads & clicks to retarget audiences for 3× higher conversion",
  },
  {
    id: 3,
    question: "🔔 Automated Notifications",
    answer:
      "Automate delivery updates, order confirmations, abandoned cart reminders, payments, appointment alerts, etc",
  },
  {
    id: 4,
    question: "👥 Multi‑Agent Chat Inbox",
    answer:
      "Enable team collaboration with chat assignment, tagging, and live agent handoff using the same number .",
  },
  {
    id: 5,
    question: "📲 Click‑to‑WhatsApp Ads",
    answer:
      "Run Facebook/Instagram ads that lead directly into WhatsApp. Lower CPL and drive 5× more leads",
  },
  {
    id: 6,
    question: "📊 Real‑Time Analytics",
    answer:
      "Monitor delivery rates, opens, clicks, responses, and chat response times—optimize campaigns in real time",
  },
  {
    id: 7,
    question: "🔗 3rd‑Party Integrations",
    answer:
      "Seamlessly connect to Shopify, WooCommerce, HubSpot, Razorpay, Zapier, custom CRMs & more",
  },
];


const GrowwwWatoMain = () => {
    useScrollSmooth();
    
      useEffect(() => {
        document.body.classList.add("tp-magic-cursor");
        return () => {
          document.body.classList.remove("tp-magic-cursor");
        }
      }, []);
    
      useEffect(() => {
        if(typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
          cursorAnimation(); 
        }
      },[]);
    
      useGSAP(() => {
        const timer = setTimeout(() => {
          charAnimation();
          titleAnimation();
          hoverBtn();
          imageRevealAnimation();
          fadeAnimation();
        }, 100);
        return () => clearTimeout(timer);
      });
        return(
            <Wrapper>
                <div id="magic-cursor">
                    <div id="ball"></div>
                </div>
                {/* Header Starts Here */}
                <HeaderFour />
                {/* Header ends Here */}

                <div id="smooth-wrapper" className="growww-wrapper">
                        <div id="smooth-content"> 
                          <main>
                            {/* portfolio hero */}
                            <div className="tm-hero-area tm-hero-ptb growww-wato-hero">
                              <div className="container">
                                <div className="row">
                                  <div className="col-xl-12">
                                    <div className="tm-hero-content">
                                      <span className="tm-hero-subtitle">Growww Wato</span>
                                      <h4 className="tm-hero-title fs-100 tp-char-animation">
                                        WhatsApp Automation
                                      </h4>
                                      <h4 className="tm-hero-title fs-20 tp-char-animation growww-wato-desc">
                                        Power Up Your Customer Engagement
                                      </h4>
                                    </div>
                                    <div className="tm-hero-text tp_title_anim">
                                      <p>
                                        Automate support, marketing & sales messaging with a fully branded WhatsApp solution built on Official WhatsApp Business API. 
                                      </p>
                                      <ul style={{listStyleType: "none" }}>
                                        <li><p>✅ 24/7 Smart Chatbots</p></li>
                                        <li><p>✅ Bulk Broadcasting</p></li>
                                        <li><p>✅ Order, Cart & Payment Notifications</p></li>
                                      </ul>
                                    </div>
                                    <Link className="tp-btn-black-2 grow-wato-cta" href="https://api.whatsapp.com/send?phone=919866662226&text=Hi%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20talk%20to%20your%20team%20about%20WhatsApp%20Automation%20to%20my%20Business.">
                                      Get Started for Free{" "}
                                      <span className="p-relative">
                                        <RightArrowTwo />
                                       <ArrowBg />
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* portfolio hero */}

                            {/* Growww wato Area starts here */}

                            <div className="fq-faq-area fq-faq-bdr pt-80 pb-140 growww-faq-area">
                              <div className="container">
                                <div className="row">
                                  <div className="col-xl-8 col-lg-8">
                                    <div className="fq-faq-wrapper">
                                      <h4 className="growww-core-ftrs">Core Features</h4>
                                      <div className="tp-service-2-accordion-box growww-wato-acc-box">
                                        <div className="accordion" id="accordionExample">
                                          {faq_data.map((item) => (
                                            <FaqItem key={item.id} item={item} />
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4 col-lg-4">
                                    <div className="fq-faq-sidebar">
                                      <div className="fq-faq-sidebar-content">
                                        <p>
                                          Ready to Scale Your Business with WhatsApp Automation?
                                        </p>
                                      </div>
                                      <div className="fq-faq-sidebar-thumb growww-wato-sidebar-thumb">
                                        <Image
                                          className="w-100"
                                          src={growww_wato_logo}
                                          alt="faq-banner"
                                          style={{height:'auto'}}
                                        />
                                      </div>
                                      <Link className="tp-btn-black-2 grow-wato-cta" href="https://api.whatsapp.com/send?phone=919866662226&text=Hi%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20talk%20to%20your%20team%20about%20WhatsApp%20Automation%20to%20my%20Business.">
                                      Get Started for Free{" "}
                                      <span className="p-relative">
                                        <RightArrowTwo />
                                       <ArrowBg />
                                      </span>
                                    </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Growww wato area ends here */}
                
                            <div className="tp-award-2-area tpaward tp-award-2-space p-relative fix growww-wato-why">
                              <div className="tp-award-2-shape">
                                <span className="tp-award-2-circle"></span>
                                <span className="tp-award-2-img">
                                  <Image src={award_img} alt="award-img" />
                                </span>
                              </div>
                              <div className="container container-1650">
                                <div className="row">
                                  <div className="col-xl-12">
                                    <div className="tp-award-2-title-box p-relative">
                                      <span className="tp-award-2-subtitle">WhatsApp Automation</span>
                                      <h2 className="tp-award-2-title tp-award-title-1">Why</h2>
                                      <h2 className="tp-award-2-title tp-award-title-2">
                                        <span>Growww Wato ?</span>
                                      </h2>
                                      <p style={{color: "#F5F7F5" }}>
                                        ⚡ Boost Conversions – Recover 45–60% of abandoned carts. Increase click-throughs to 45–60%, compared to 5–10% elsewhere
                                      </p>
                                    </div>
                                    <div className="tp-award-2-btn-box">
                                      <div className="tp-projct-5-2-btn-box d-flex justify-content-end">
                                        <div className="tp-hover-btn-wrapper">
                                          <Link
                                            className="tp-btn-circle tp-hover-btn-item tp-hover-btn"
                                            href="https://api.whatsapp.com/send?phone=919866662226&text=Hi%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20talk%20to%20your%20team%20about%20WhatsApp%20Automation%20to%20my%20Business." style={{display: "none" }}
                                          >
                                            <span className="tp-btn-circle-text">
                                              See Our <br /> Portfolio
                                            </span>
                                            <span className="tp-btn-circle-icon">
                                              <UpArrow />
                                            </span>
                                            <i className="tp-btn-circle-dot"></i>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="tp-award-2-title-box p-relative">
                                      <p style={{color: "#F5F7F5" }}>
                                        🤖 Save Time & Scale – Automate common queries, send reminders, run chatbots—eliminating repetitive work and operating around the clock
                                      </p>
                                    </div>
                                    <div className="tp-award-2-title-box p-relative growww-wato-y">
                                      <p style={{color: "#F5F7F5" }}>
                                        Lower Cost Per Lead — Click-to-WhatsApp ads reduce CPL by ~60%
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                
                            {/* big text */}
                            {/* <BigText /> */}
                            {/* big text */}
                          </main>
                
                          {/* footer area */}
                          {/* <FooterTwo topCls="" /> */}
                          {<FooterFour />}
                          {/* footer area */}
                        </div>
                      </div>
            </Wrapper>
        );
};

export default GrowwwWatoMain; 