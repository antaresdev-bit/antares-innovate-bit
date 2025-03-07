import BannerForm from "@/components/formContactComponents/BannerForm";
import ContactForm from "@/components/formContactComponents/ContactForm";
import TextContact from "@/components/formContactComponents/TextContact";
import Footer from "@/components/header/Footer";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';

function FormPage() {
  return (
    <>
      <div className="relative">
        <BannerForm />

        <div className="max-w-[1500px] mx-auto">
          <div
            className="relative mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]  rounded-b-[48px] overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at center, #22379A 0%, #0E051C 40%)",
              backgroundPosition: "50% -50%",
              backgroundSize: "250% 150%",
            }}
          >
            <div className="flex flex-col lg:flex-row-reverse justify-center mt-[200px] mb-[50px] gap-6">
              <div className="h-auto w-full flex justify-center">
                <ContactForm />
              </div>
              <div className="h-auto w-full flex justify-center">
                <TextContact />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default FormPage;
