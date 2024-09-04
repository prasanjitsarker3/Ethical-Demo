import Banner from "@/components/FrontPage/Home/Banner";

import About from "@/components/FrontPage/Pages/About";
import ClientInformation from "@/components/FrontPage/Pages/ClientInformation";
import Company from "@/components/FrontPage/Pages/Company";
import GoogleMeet from "@/components/FrontPage/Pages/GoogleMeet";
import Testimonial from "@/components/FrontPage/Pages/Testimonial";
import VideoTestmonials from "@/components/FrontPage/Pages/VideoTestmonials";
import WeekSection from "@/components/FrontPage/Pages/WeekSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <Company />
      <About />
      <VideoTestmonials />
      <WeekSection />
      <ClientInformation />
      <Testimonial />
      <GoogleMeet />
    </div>
  );
}
