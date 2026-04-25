import { useState } from "react";
import Container from "../common/components/Container/Container";
import SlideTopAnimation from "../common/components/animations/SlideTopAnimation";
import { useTranslation } from "../common/hooks/useTranslation";

import AccordionArrow from "../../assets/icons/accordion-arrow.svg";

// Section header icons
import VisionIcon from "../../assets/icons/sustainability/vision.svg";
import EnhancingMarketIcon from "../../assets/icons/sustainability/enhancing-market.svg";
import StrategicFocusAreasIcon from "../../assets/icons/sustainability/strategic-focus-areas.svg";
import EnablersIcon from "../../assets/icons/sustainability/enablers.svg";

// Pillar icons
import ProtectingNatureIcon from "../../assets/icons/sustainability/protecting-our-nature.svg";
import SocialChangeIcon from "../../assets/icons/sustainability/social-change.svg";
import GovernanceIcon from "../../assets/icons/sustainability/governance.svg";
import ResponsibleGovernance from "../../assets/icons/sustainability/responsible-governance.svg";

// Focus area icons — List 0 (Environmental)
import ClimateChangeIcon from "../../assets/icons/sustainability/climate-change.svg";
import SustainablePackagingIcon from "../../assets/icons/sustainability/sustainable-packaging.svg";
import WasteManagementIcon from "../../assets/icons/sustainability/waste-management.svg";
import WaterManagementIcon from "../../assets/icons/sustainability/water-management.svg";
import SustainableAgricultureIcon from "../../assets/icons/sustainability/sustainable-agriculture.svg";

// Focus area icons — List 1 (Social)
import FoodQualityIcon from "../../assets/icons/sustainability/food-quality.svg";
import TalentManagementIcon from "../../assets/icons/sustainability/talent-management.svg";
import CommunitySupportIcon from "../../assets/icons/sustainability/community-support.svg";
import DiversityIcon from "../../assets/icons/sustainability/diversity.svg";
import OccupationalHealthIcon from "../../assets/icons/sustainability/occupational-health.svg";
import NutritionIcon from "../../assets/icons/sustainability/nutrition.svg";
import NationalizationIcon from "../../assets/icons/sustainability/nationalization.svg";

// Focus area icons — List 2 (Governance)
import BusinessEthicsIcon from "../../assets/icons/sustainability/business-ethics.svg";
import ResponsibleSourcingIcon from "../../assets/icons/sustainability/responsible-sourcing.svg";
import CustomerSatisfactionIcon from "../../assets/icons/sustainability/customer-satisfaction.svg";

const PILLAR_ICONS = [ProtectingNatureIcon, SocialChangeIcon, ResponsibleGovernance];

const FOCUS_ICONS: string[][] = [
  [ClimateChangeIcon, SustainablePackagingIcon, WasteManagementIcon, WaterManagementIcon, SustainableAgricultureIcon],
  [FoodQualityIcon, TalentManagementIcon, CommunitySupportIcon, DiversityIcon, OccupationalHealthIcon, NutritionIcon, NationalizationIcon],
  [GovernanceIcon, BusinessEthicsIcon, ResponsibleSourcingIcon, CustomerSatisfactionIcon],
];

interface Division {
  title: string;
  desc: string;
}

interface AccordionItemProps {
  id: string;
  open: boolean;
  onToggle: () => void;
  icon: string;
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ id, open, onToggle, icon, title, children }: AccordionItemProps) => (
  <div id={id} className=" mb-5">
    <button
      onClick={onToggle}
      className={`w-full bg-fm-green px-8 py-5 flex items-center justify-between gap-4 cursor-pointer ${open ? "rounded-t-lg" : "rounded-lg"}`}
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt="" className="w-7 h-7 shrink-0" />
        <span className="text-fm-yellow font-bold text-lg text-start">{title}</span>
      </div>
      <img
        src={AccordionArrow}
        alt=""
        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      />
    </button>
    <div
      className={`grid transition-all duration-500 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
    >
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  </div>
);

const Strategy = () => {
  const { t, tArray, tRaw } = useTranslation("sustainability-review");
  const [openTab, setOpenTab] = useState<string>("vision");

  const toggle = (id: string) => setOpenTab((prev) => (prev === id ? "" : id));

  const paragraphs = tArray("sustainabilityStrategy.paragraphs");
  const marketDivisions = tRaw<Division[]>("sustainabilityStrategy.marketSection.divisions") ?? [];
  const focusLists = tRaw<string[][]>("sustainabilityStrategy.foucsAreaSection.lists") ?? [];
  const enablers = tArray("sustainabilityStrategy.enablersSection.divisions");

  return (
    <div>
      {/* Intro Paragraphs */}
      <section className="py-16">
        <Container>
          <div className="max-w-220">
            {paragraphs.map((para, i) => (
              <SlideTopAnimation key={i}>
                <p className="mb-4" dangerouslySetInnerHTML={{ __html: para }} />
              </SlideTopAnimation>
            ))}
          </div>
        </Container>
      </section>

      {/* Accordion */}
      <section className="bg-white pb-16">
        <Container>
          <div className="overflow-hidden">

            {/* Vision */}
            <AccordionItem
              id="vision"
              open={openTab === "vision"}
              onToggle={() => toggle("vision")}
              icon={VisionIcon}
              title={t("sustainabilityStrategy.visionSection.title")}
            >
              <div className={`px-8 py-8 bg-fm-green text-white rounded-b-lg`}>
                <p className=" text-lg leading-relaxed">
                  {t("sustainabilityStrategy.visionSection.desc")}
                </p>
              </div>
            </AccordionItem>

            {/* Market / Pillars */}
            <AccordionItem
              id="market"
              open={openTab === "market"}
              onToggle={() => toggle("market")}
              icon={EnhancingMarketIcon}
              title={t("sustainabilityStrategy.marketSection.title")}
            >
              <div className="px-8 py-8 bg-fm-green text-white rounded-b-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {marketDivisions.map((div, i) => (
                    <div key={i} className="p-6">
                      <img src={PILLAR_ICONS[i]} alt="" className="w-10 h-10 mb-4" />
                      <h3 className=" font-bold text-lg mb-3">{div.title}</h3>
                      <p className="leading-relaxed">{div.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionItem>

            {/* Focus Areas */}
            <AccordionItem
              id="focus"
              open={openTab === "focus"}
              onToggle={() => toggle("focus")}
              icon={StrategicFocusAreasIcon}
              title={t("sustainabilityStrategy.foucsAreaSection.title")}
            >
              <div className="px-8 py-8 bg-fm-green text-white rounded-b-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {focusLists.map((list, li) => (
                    <ul key={li} className="space-y-4">
                      {list.map((item, ii) => (
                        <li key={ii} className="flex items-center gap-3">
                          <span className=" rounded-md p-1.5 shrink-0 flex items-center justify-center">
                            <img src={FOCUS_ICONS[li]?.[ii]} alt="" className="w-5 h-5" />
                          </span>
                          <span className="">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </AccordionItem>

            {/* Enablers */}
            <AccordionItem
              id="enablers"
              open={openTab === "enablers"}
              onToggle={() => toggle("enablers")}
              icon={EnablersIcon}
              title={t("sustainabilityStrategy.enablersSection.title")}
            >
              <div className="px-8 py-8 bg-fm-green text-white rounded-b-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {enablers.map((enabler, i) => (
                    <div key={i} className="bg-fm-green p-4 flex flex-col">
                      <p className=" leading-relaxed font-bold">{enabler}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionItem>

          </div>
        </Container>
      </section>
    </div>
  );
};

export default Strategy;
