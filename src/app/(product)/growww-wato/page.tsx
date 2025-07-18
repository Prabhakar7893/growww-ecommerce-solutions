import React from "react";
import { Metadata } from "next";
import GrowwwWatoMain from "@/pages/product/growww-wato-main";

export const metadata: Metadata = {
  title: "Growww Wato Page",
};

const GrowwwwatoPage = () => {
    return(
        <GrowwwWatoMain />
    );
};

export default GrowwwwatoPage;