"use client";
import NavigationTabs from "@/components/NavegationTabs";
import BtnIcon from "@/components/footer/Btn.icon";

export default function MoreProductDetail() {
  const tabs = ["Description", "Review", "Shipping", "Return Policies"];

  return (
    <div className="w-full flex justify-center items-center my-20">
      <div className="w-[90%] flex flex-col justify-center items-center gap-10 border py-4 px-10 ">
        <div className="w-full flex items-start justify-start border-b">
          <NavigationTabs tabs={tabs} />
        </div>

        <div className="w-full flex flex-col text-sm gap-10">
          <p className="leading-6">{`Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZINGTMM ECOVEROM Viscose - responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.`}</p>

          <div className="w-full flex  justify-start items-start gap-32">
            <div className="flex flex-col justify-start items-start gap-10">
              <div className="flex flex-col gap-5 justify-start items-start  font-light">
                <h2 className="text-lg font-medium">Features</h2>
                <ul className="list-disc pl-5 text-neutral-400 flex flex-col gap-4 ">
                  <li>Front button placket</li>
                  <li>Adjustable sleeve tabs</li>
                  <li>Babaton embroidered crest at placket and hem</li>
                </ul>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start  font-light">
                <h2 className="text-lg font-medium">Materials Care</h2>
                <ul className="list-disc pl-5 text-neutral-400 flex flex-col gap-4 ">
                  <li>Content: 100% LENZINGTM ECOVEROTM Viscose</li>
                  <li>Care: Hand wash</li>
                  <li>Imported</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-start items-start  font-light">
              <h2 className="text-lg font-medium">Materials Care</h2>
              <div className="flex flex-col gap-5 justify-start items-start">
                <BtnIcon
                  icon="bx-water"
                  color="#a3a3a3"
                  isButton={false}
                  text="Machine wash max. 30°C. Short spin."
                />
                <BtnIcon
                  icon="bx-box"
                  color="#a3a3a3"
                  isButton={false}
                  text="Iron maximum 110°C."
                />
                <BtnIcon
                  icon="bx-x-circle"
                  color="#a3a3a3"
                  isButton={false}
                  text="Do not bleach/bleach."
                />
                <BtnIcon
                  icon="bx-x-circle"
                  color="#a3a3a3"
                  isButton={false}
                  text="Do not dry clean."
                />
                <BtnIcon
                  icon="bx-wind"
                  color="#a3a3a3"
                  isButton={false}
                  text="Tumble dry, medium hear."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
