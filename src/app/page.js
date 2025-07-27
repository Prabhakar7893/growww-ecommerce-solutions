import { Metadata } from "next";
//import HomeOnePage from "./(homes)/home-1/page";
import HomeFourMain from '@/pages/homes/home-4';
//import HomeFourMain from "src/app/(homes)/home-4";

export const metadata: Metadata = {
  title: "Growww - Home",
};

export default function Home() {
  return (
    <>
      <HomeFourMain />
    </>
  );
}
