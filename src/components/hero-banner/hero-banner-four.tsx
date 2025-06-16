'use client';
import React from 'react';
import { ArrowBg, RightArrowTwo } from '../svg';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const HeroBannerFour = () => {
  const { theme } = useTheme();

  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('grw-ftr-012');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">{'Grow'} Your <br /></span>
                <span className="tp-reveal-line">Online Store</span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim">
                ux/ui design / motion design / branding / development <br /> A house for everything you need to launch, grow & scale a successful online Store.
              </span>
              <Link
                className="tp-btn-black-2"
                href="#grw-ftr-012"
                onClick={handleScroll}
              >
                Say Hello{' '}
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
  );
};

export default HeroBannerFour;
// 'use client';
// import React from "react";
// import { ArrowBg, RightArrowTwo } from "../svg";
// import Link from "next/link";
// import FooterFour from "@/layouts/footers/footer-four";


// export default function HeroBannerFour() {
//   return (
//     <div className="tp-hero-3-area tp-hero-3-ptb fix">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-12">
//             <div className="tp-hero-3-content-box text-center p-relative">
//               <div className="tp-hero-3-circle-shape">
//                 <span></span>
//               </div>
//               <h4 className="tp-hero-3-title tp_reveal_anim">
//                 <span className="tp-reveal-line">{"Grow"} Your <br /></span>
//                 <span className="tp-reveal-line">Online Store</span> 
//               </h4>
//               <span className="tp-hero-3-category tp_reveal_anim">
//                 ux/ui design / motion design / branding / development <br /> A house for everything you need to launch, grow & scale a successful online Store.
//               </span>
//               <Link className="tp-btn-black-2" href={<FooterFour />}>
//                 Say Hello{" "}
//                 <span className="p-relative">
//                   <RightArrowTwo />
//                   <ArrowBg />
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
