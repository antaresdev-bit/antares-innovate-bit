"use client";
import Image from "next/image";
import { handleHomeContactSubmit } from "@/utils/handleSubmit";
import { useTranslations } from "next-intl";

function ContactForm() {
  const t = useTranslations("form");
  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedServices = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    const formData = {
      company: e.target.company.value,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      services: selectedServices,
      message: e.target.message.value,
    };

    const resetForm = () => {
      e.target.reset();

      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          checkbox.checked = false;
        });
    };

    handleHomeContactSubmit(
      formData,
      {
        setSubmitting: () => {},
        resetForm: resetForm,
      },
      "Gracias por contactarnos",
      "Error al enviar el formulario"
    );
  };

  return (
    <div className="w-full max-w-[648px] min-h-[925px] bg-[#1C5DE9] rounded-[24px] flex flex-col items-center relative overflow-visible px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-40">
        <Image
          src="/assets/images/form-contact/Formulario.png"
          alt="Astronauta"
          width={302}
          height={304}
        />
      </div>
      <div className="w-full max-w-[618px] min-h-[752px] bg-[#3874F5] pt-8 pb-8 px-6 rounded-[24px] shadow-md mt-32 text-white">
        <h2
          className="text-2xl font-bold text-left sm:text-[28px] md:text-[28px] lg:text-[35px]"
          style={{ fontFamily: "HandelGothic" }}
        >
          {t("formText8")}
        </h2>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="company"
              placeholder={t("formText9")}
              className="w-full h-[48px] p-3 rounded-[32px] bg-[#3874F5] border border-white placeholder:text-white"
              style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
              required
            />
            <input
              type="text"
              name="name"
              placeholder={t("formText10")}
              className="w-full h-[48px] p-3 rounded-[32px] bg-[#3874F5] border border-white placeholder:text-white"
              style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("formText11")}
              className="w-full h-[48px] p-3 rounded-[32px] bg-[#3874F5] border border-white placeholder:text-white"
              style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t("formText12")}
              pattern="[0-9+\s\-()]*"
              inputMode="numeric"
              className="w-full h-[48px] p-3 rounded-[32px] bg-[#3874F5] border border-white placeholder:text-white"
              style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
              required
            />
          </div>

          <div className="mt-4">
            <p
              className="font-semibold"
              style={{ fontFamily: "HandelGothic", fontSize: "20px" }}
            >
              {t("formText13")}
            </p>
          </div>

          <div
            className="space-y-2"
            style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
          >
            {[
              t("formText14"),
              t("formText15"),
              t("formText16"),
              t("formText17"),
              t("formText18"),
            ].map((service, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={service}
                  className="w-5 h-5 appearance-none border border-white bg-[#3874F5] 
                             checked:bg-[#3874F5] checked:border-white 
                             relative checked:before:content-['✔'] checked:before:text-green-500 checked:before:font-bold checked:before:text-xl checked:before:flex checked:before:items-center checked:before:justify-center checked:before:w-full checked:before:h-full"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>

          <textarea
            name="message"
            placeholder= {t("formText19")}
            className="w-full p-3 rounded-[24px] bg-[#3874F5] border border-white text-white min-h-[157px] placeholder:text-white"
            required
            style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
          ></textarea>

          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <div className="hidden sm:block mr-4">
              <Image
                src="/assets/images/Gif Avion.gif"
                alt="Avión"
                width={48}
                height={48}
                className="rounded-[20px]"
                unoptimized={true}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white text-[#02021E] text-lg sm:text-xl rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold"
              style={{ fontFamily: "HandelGothic" }}
            >
              {t("formText20")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
