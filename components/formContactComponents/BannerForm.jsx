import Image from "next/image";

function BannerForm() {
  return (
    <div className="w-full max-w-[1500px] mx-auto">
      <Image
        src="/assets/images/form-contact/Banner.svg"
        alt="Banner"
        width={1440}
        height={524}
        className="w-full h-[auto] object-cover"
        priority
      />
    </div>
  );
}

export default BannerForm;
