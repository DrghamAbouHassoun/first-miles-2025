import { useState, useRef, useContext } from "react";
import Container from "../../common/components/Container/Container";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";
import AccordionArrowGreen from "../../../assets/icons/accordion-arrow-green.svg";

interface StakeholderSection {
  title: string;
  bullets: string[];
}

interface StakeholderGroup {
  name: string;
  sections: StakeholderSection[];
}

function AccordionItem({
  title,
  bullets,
  isOpen,
  onToggle,
}: {
  title: string;
  bullets: string[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-t-2 border-fm-green/50 rounded-none">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-6 text-start bg-fm-yellow-100 hover:bg-fm-yellow-200 transition-colors duration-200"
      >
        <span className="text-fm-green font-bold text-lg">{title}</span>
        <span
          className={`text-fm-green transition-transform duration-300 ease-in-out shrink-0 ms-4 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <img src={AccordionArrowGreen} className="w-10 h-10" />
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{
          maxHeight: isOpen
            ? contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : "1000px"
            : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.4s ease-in-out, opacity 0.3s ease-in-out",
        }}
      >
        <ul className="px-6 pb-6 space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-fm-green/80">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-fm-green shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StakeholderGroupRow({ group }: { group: StakeholderGroup }) {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenSection((prev) => (prev === index ? null : index));
  };

  return (
    <div className=" even:bg-fm-yellow-100 py-8">
    <Container>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 border-b border-fm-green/10 last:border-b-0 min-h-screen">
        {/* Left: group label */}
        <div className="lg:w-75 shrink-0">
          <div className="px-6 py-6 font-semibold text-lg rounded-2xl border-gradient-reversed bg-linear-270 from-fm-yellow/20 to-fm-yellow/0 w-full lg:max-w-75">
            {group.name}
          </div>
        </div>

        {/* Right: accordion */}
        <div className="flex-1 overflow-hidden">
          {group.sections.map((section, i) => (
            <AccordionItem
              key={i}
              title={section.title}
              bullets={section.bullets}
              isOpen={openSection === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </Container>
    </div>
  );
}

const StakeholderEngagement = () => {
  const { t } = useTranslation("overview");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { lang, translations } = useContext(LangContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groups: StakeholderGroup[] =
    (translations as any)[lang]?.overview?.stakeholderEngagementContent
      ?.groups ?? [];

  return (
    <div className="min-h-screen">
      {/* Green intro section */}
      <div className="bg-fm-green py-32 text-white">
        <Container>
          <h2 className="text-lg text-fm-yellow font-semibold max-w-100 mb-4">
            {t("stakeholderEngagementContent.title")}
          </h2>
          <p className="max-w-180">
            {t("stakeholderEngagementContent.description")}
          </p>
        </Container>
      </div>

      {/* Stacked groups section */}
      {/* <div className="bg-fm-cream py-8"> */}
      {/* <Container> */}
      {groups.map((group, i) => (
        <StakeholderGroupRow key={i} group={group} />
      ))}
      {/* </Container> */}
      {/* </div> */}
    </div>
  );
};

export default StakeholderEngagement;
