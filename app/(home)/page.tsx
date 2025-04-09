'use client'

import { ContentSection } from "@/components/common/content-section";
import FAQ from "@/components/common/faq";
import { Footer } from "@/components/common/footer";
import { FormMembership } from "@/components/common/form-membership";
import Header from "@/components/common/header";
import HeroBanner from "@/components/common/hero-banner";
import { HomeLayout } from "@/components/layouts/home-layout";

export default function HomePage() {
  return (
    <HomeLayout>
      <Header />
      <HeroBanner />
      <ContentSection backgroundImage="/assets/home/content-1.jpg" backgroundPosition="right">
        <div className="flex flex-col text-left space-y-5">
          <h2 className="text-4xl md:text-[50px] font-bold">Enjoy on your TV.</h2>
          <p className="text-lg md:text-[26px] font-medium">Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
      </ContentSection>
      <ContentSection backgroundImage="/assets/home/content-2.png" backgroundPosition="left">
        <div className="flex flex-col text-left space-y-5">
          <h2 className="text-4xl md:text-[50px] font-bold">Download your shows to watch offline.</h2>
          <p className="text-lg md:text-[26px] font-medium">Save your favorites easily and always have something to watch.</p>
        </div>
      </ContentSection>
      <ContentSection backgroundImage="/assets/home/content-3.png" backgroundPosition="right">
        <div className="flex flex-col text-left space-y-5">
          <h2 className="text-4xl md:text-[50px] font-bold">Watch everywhere.</h2>
          <p className="text-lg md:text-[26px] font-medium">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
      </ContentSection>
      <ContentSection backgroundImage="/assets/home/content-4.png" backgroundPosition="left">
        <div className="flex flex-col text-left space-y-5">
          <h2 className="text-4xl md:text-[50px] font-bold">Create profiles for kids.</h2>
          <p className="text-lg md:text-[26px] font-medium">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
      </ContentSection>
      <ContentSection>
        <div className="flex flex-col items-center justify-center w-full space-y-5">
          <FAQ />
          <FormMembership />
        </div>
      </ContentSection>
      <Footer />
    </HomeLayout>
  );
}
