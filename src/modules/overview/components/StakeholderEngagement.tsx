import { useState, useRef, useContext, useEffect } from "react";
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

const StakeholderEngagement = () => {
  const { t } = useTranslation("overview");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { lang, translations } = useContext(LangContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groups: StakeholderGroup[] =
    (translations as any)[lang]?.overview?.stakeholderEngagementContent
      ?.groups ?? [];

  const [activeGroup, setActiveGroup] = useState(0);
  const [openSection, setOpenSection] = useState<number | null>(0);

  useEffect(() => {
    setOpenSection(0);
  }, [activeGroup]);

  return (
    <div className="min-h-screen">
      {/* Green intro section */}
      <div className="bg-fm-green py-32 text-white">
        <Container>
          <h1 className="text-3xl font-bold text-white mb-4">
            {t("tabs.stakeholderEngagement")}
          </h1>
          <h2 className="text-lg text-fm-yellow font-semibold mb-4">
            {t("stakeholderEngagementContent.title")}
          </h2>
          <p className="">
            {t("stakeholderEngagementContent.description")}
          </p>
        </Container>
      </div>

      {/* Sticky side nav + content */}
      <Container>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Mobile: horizontal scrollable tab strip */}
        <div className="lg:hidden flex flex-row overflow-x-auto shrink-0 gap-3 p-4">
          {groups.map((group, i) => (
            <button
              key={i}
              onClick={() => setActiveGroup(i)}
              className={`shrink-0 px-5 py-4 text-sm font-semibold rounded-2xl transition-colors duration-200 whitespace-nowrap border-gradient-reversed
                ${activeGroup === i
                  ? "bg-linear-270 from-fm-yellow/60 to-fm-yellow/20"
                  : "bg-linear-270 from-fm-yellow/20 to-fm-yellow/0 hover:from-fm-yellow/40 hover:to-fm-yellow/10"
                }`}
            >
              {group.name}
            </button>
          ))}
        </div>

        {/* Desktop: sticky vertical sidebar */}
        <div className="hidden lg:flex sticky top-0 h-screen w-95 flex-col shrink-0 overflow-y-auto gap-3 p-6">
          {groups.map((group, i) => (
            <button
              key={i}
              onClick={() => setActiveGroup(i)}
              className={`w-full text-start px-6 py-6 font-semibold text-lg rounded-2xl border-gradient-reversed transition-colors duration-200
                ${activeGroup === i
                  ? "bg-linear-270 from-fm-yellow/60 to-fm-yellow/20"
                  : "bg-linear-270 from-fm-yellow/20 to-fm-yellow/0 hover:from-fm-yellow/40 hover:to-fm-yellow/10 hover:text-fm-green"
                }`}
            >
              {group.name}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          key={activeGroup}
          className={`flex-1 py-12 px-8 lg:px-16 transition-colors duration-300`}
        >
          <h3 className="text-fm-green font-bold text-2xl mb-8">
            {groups[activeGroup]?.name}
          </h3>
          {groups[activeGroup]?.sections.map((section, i) => (
            <AccordionItem
              key={i}
              title={section.title}
              bullets={section.bullets}
              isOpen={openSection === i}
              onToggle={() =>
                setOpenSection((prev) => (prev === i ? null : i))
              }
            />
          ))}
        </div>
      </div>
      </Container>
    </div>
  );
};

export default StakeholderEngagement;
