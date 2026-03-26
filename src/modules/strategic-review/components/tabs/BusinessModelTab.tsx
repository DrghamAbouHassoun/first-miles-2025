import { useState } from "react";
import Container from "../../../common/components/Container/Container";
import { useTranslation } from "../../../common/hooks/useTranslation";
import BusinessModelBg from "../../../../assets/images/backgrounds/business-model.jpg";
import { SITE_NAME } from "../../../../config/constants";

import StackholdersIcon from "../../../../assets/icons/business-model/stackholder.svg";
import EmployeesIcon from "../../../../assets/icons/business-model/employees.svg";
import RegulatoryIcon from "../../../../assets/icons/business-model/regulatory.svg";
import CustomersIcon from "../../../../assets/icons/business-model/customers.svg";
import CommunitiesIcon from "../../../../assets/icons/business-model/communities.svg";
import PartnersIcon from "../../../../assets/icons/business-model/partners.svg";
import AccordionArrow from "../../../../assets/icons/accordion-arrow.svg";

const stackholdersIcons = [
  {
    key: "stackholders",
    icon: StackholdersIcon,
  },
  {
    key: "employees",
    icon: EmployeesIcon,
  },
  {
    key: "regulatory",
    icon: RegulatoryIcon,
  },
  {
    key: "customers",
    icon: CustomersIcon,
  },
  {
    key: "communities",
    icon: CommunitiesIcon,
  },
  {
    key: "partners",
    icon: PartnersIcon,
  },
];

const BusinessModelTab = () => {
  const { t } = useTranslation("strategic-review");
  const [openTab, setOpenTab] = useState<string>("inputs");

  const toggle = (id: string) => setOpenTab((prev) => (prev === id ? "" : id));

  return (
    <div>
      <div className="bg-fm-yellow-100 py-24">
        <Container>
          <h2 className="text-fm-yellow mb-2 font-bold text-2xl max-w-160">
            {t("businessModelContent.title")}
          </h2>
          <p className="max-w-200">{t("businessModelContent.description")}</p>
        </Container>
      </div>
      <div className="relative">
        <div className="sticky top-0 h-screen w-full inset-0 -z-10">
          <img
            src={BusinessModelBg}
            alt={SITE_NAME}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-fm-green/0 top-0 left-0 w-full z-20 text-white">
          <Container className="py-24">
            <div id="tabs" className="flex flex-col">
              {/* Inputs */}
              <div id="inputs">
                <button
                  onClick={() => toggle("inputs")}
                  className="bg-linear-90 from-fm-yellow/0 to-fm-yellow/80 w-full p-8 text-start cursor-pointer flex items-center justify-between"
                >
                  <h4 className="text-fm-yellow font-bold text-xl">
                    {t("businessModelContent.inputs.title")}
                  </h4>
                  <img src={AccordionArrow} alt="" className={`w-6 h-6 transition-transform duration-300 ${openTab === "inputs" ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${openTab === "inputs" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <ul className="max-w-160 mt-4 list-disc list-inside px-4 pt-8 pb-4">
                      <li>{t("businessModelContent.inputs.items.0")}</li>
                      <li>{t("businessModelContent.inputs.items.1")}</li>
                      <li>{t("businessModelContent.inputs.items.2")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Strengths */}
              <div id="strengths" className="mt-8">
                <button
                  onClick={() => toggle("strengths")}
                  className="bg-linear-90 from-fm-yellow/0 to-fm-yellow/80 w-full p-8 text-start cursor-pointer flex items-center justify-between"
                >
                  <h4 className="text-fm-yellow font-bold text-xl">
                    {t("businessModelContent.strengths.title")}
                  </h4>
                  <img src={AccordionArrow} alt="" className={`w-6 h-6 transition-transform duration-300 ${openTab === "strengths" ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${openTab === "strengths" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <ul className="max-w-160 mt-4 list-disc list-inside px-4 pt-8 pb-4">
                      <li>{t("businessModelContent.strengths.items.0")}</li>
                      <li>{t("businessModelContent.strengths.items.1")}</li>
                      <li>{t("businessModelContent.strengths.items.2")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Added Value */}
              <div id="addedValue" className="mt-8">
                <button
                  onClick={() => toggle("addedValue")}
                  className="bg-linear-90 from-fm-yellow/0 to-fm-yellow/80 w-full p-8 text-start cursor-pointer flex items-center justify-between"
                >
                  <h4 className="text-fm-yellow font-bold text-xl">
                    {t("businessModelContent.addedValue.title")}
                  </h4>
                  <img src={AccordionArrow} alt="" className={`w-6 h-6 transition-transform duration-300 ${openTab === "addedValue" ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${openTab === "addedValue" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <ul className="mt-4 list-disc list-outside px-8 pt-8 pb-4">
                      <li>{t("businessModelContent.addedValue.items.0")}</li>
                      <li>{t("businessModelContent.addedValue.items.1")}</li>
                      <li>{t("businessModelContent.addedValue.items.2")}</li>
                      <li>{t("businessModelContent.addedValue.items.3")}</li>
                      <li>{t("businessModelContent.addedValue.items.4")}</li>
                      <li>{t("businessModelContent.addedValue.items.5")}</li>
                      <li>{t("businessModelContent.addedValue.items.6")}</li>
                      <li>{t("businessModelContent.addedValue.items.7")}</li>
                      <li>{t("businessModelContent.addedValue.items.8")}</li>
                      <li>{t("businessModelContent.addedValue.items.9")}</li>
                      <li>{t("businessModelContent.addedValue.items.10")}</li>
                      <li>{t("businessModelContent.addedValue.items.11")}</li>
                      <li>{t("businessModelContent.addedValue.items.12")}</li>
                      <li>{t("businessModelContent.addedValue.items.13")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Outputs */}
              <div id="outputs" className="mt-4">
                <button
                  onClick={() => toggle("outputs")}
                  className="bg-linear-90 from-fm-yellow/0 to-fm-yellow/80 w-full p-8 text-start cursor-pointer flex items-center justify-between"
                >
                  <h4 className="text-fm-yellow font-bold text-xl">
                    {t("businessModelContent.outputs.title")}
                  </h4>
                  <img src={AccordionArrow} alt="" className={`w-6 h-6 transition-transform duration-300 ${openTab === "outputs" ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${openTab === "outputs" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <ul className="mt-4 list-disc list-outside px-8 pt-8">
                      <li>{t("businessModelContent.outputs.items.0")}</li>
                      <li>{t("businessModelContent.outputs.items.1")}</li>
                      <li>{t("businessModelContent.outputs.items.2")}</li>
                      <li>{t("businessModelContent.outputs.items.3")}</li>
                      <li>{t("businessModelContent.outputs.items.4")}</li>
                      <li>{t("businessModelContent.outputs.items.5")}</li>
                      <li>{t("businessModelContent.outputs.items.6")}</li>
                      <li>{t("businessModelContent.outputs.items.7")}</li>
                      <li>{t("businessModelContent.outputs.items.8")}</li>
                      <li>{t("businessModelContent.outputs.items.9")}</li>
                      <li>{t("businessModelContent.outputs.items.10")}</li>
                      <li>{t("businessModelContent.outputs.items.11")}</li>
                      <li>{t("businessModelContent.outputs.items.12")}</li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-4 pb-4">
                      {stackholdersIcons.map((icon, i) => {
                        const itemKey = `businessModelContent.outputs.stakeholders.${i}`;
                        return (
                          <div
                            key={i}
                            className="p-4 rounded-2xl border-gradient"
                          >
                            <div className="flex gap-4 items-center text-fm-yellow font-bold">
                              <div>
                                <img
                                  src={icon.icon}
                                  alt={SITE_NAME}
                                  className="w-16 h-16 mb-2"
                                />
                              </div>
                              {t(`${itemKey}.title`)}
                            </div>
                            <p className="mt-2 text-sm">
                              {t(`${itemKey}.description`)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelTab;
