import BtnViewMore from "@/components/Btn.viewmore";

export default function Map() {
  return (
    <div className="w-full h-[90vh]  relative flex justify-center items-center my-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977202935!2d-79.54286819463744!3d43.71837095827245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses-419!2sco!4v1724850775084!5m2!1ses-419!2sco"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[90%] h-full absolute"
      ></iframe>
      <div className="z-10 absolute bg-white py-7 px-10 pr-32 left-44 text-xs flex flex-col  justify-start items-start gap-6 text-neutral-500 ">
        <h3 className="text-lg text-neutral-800">Toronto Store</h3>
        <p>
          301 Front St W Toronto, Canada <br /> support@ecomus.com <br /> (08)
          8942 1299
        </p>
        <p>
          Mon - Fri, 8:30am - 10:30pm
          <br /> Saturday, 8:30am - 10:30pm
          <br />
          Sunday Closed
        </p>
       
        <BtnViewMore text="Get Directions" color="neutral-900" />
      </div>
    </div>
  );
}
