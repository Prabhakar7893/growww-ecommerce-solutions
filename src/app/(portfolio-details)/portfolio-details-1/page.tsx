import React from "react";
import { Metadata } from "next";
import PortfolioDetailsOneMain from "@/pages/portfolio/details/portfolio-details-1-main";
import AgriVrudhi from "@/pages/portfolio/projects/agri-vrudhi";


export const metadata: Metadata = {
  title: "Liko - Portfolio Details 1 page",
};

const PortfolioDetailsOnePage = () => {
  return (
    <AgriVrudhi />
    // <PortfolioDetailsOneMain/>
  );
};

export default PortfolioDetailsOnePage;
