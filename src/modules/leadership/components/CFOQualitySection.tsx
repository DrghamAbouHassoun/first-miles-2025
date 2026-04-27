import CfoBg from "../../../assets/images/backgrounds/cfo.jpg";
import Iso45001 from "../../../assets/icons/cfo/iso-45001.png";
import Iso9001 from "../../../assets/icons/cfo/iso-9001.png";
import Iso14001 from "../../../assets/icons/cfo/iso-14001.png";
import Iso22000 from "../../../assets/icons/cfo/iso-22000.png";
import Container from "../../common/components/Container/Container";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import { useLocale } from "../../common/hooks/useLocale";

interface StatItem {
  prefix?: string;
  number: string;
  label: string;
  desc?: string;
  highlight?: string;
}

interface QualitySectionData {
  tiny: string;
  subtitle: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  highlightsLabel: string;
  stats: {
    plants: StatItem & { desc: string };
    physicalTests: StatItem & { desc: string };
    trainingCourses: StatItem & { highlight: string };
    qualityTests: StatItem & { desc: string };
    employees: StatItem & { desc: string };
    safeHours: StatItem & { highlight: string };
    microbiological: StatItem & { highlight: string };
    chemicalTests: StatItem & { desc: string };
  };
}

interface Props {
  data: QualitySectionData;
}

const CFOQualitySection = ({ data }: Props) => {
  const { lang } = useLocale();
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src={CfoBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-fm-green/85" />
      </div>
      {/* Dark background section with cfo.jpg */}
      <div className="relative overflow-hidden">
        <Container>
          <div className="relative z-10 py-16 md:py-20">
            <SlideTopAnimation>
              <h5 className="text-sm font-bold text-fm-yellow mb-3">
                {data.tiny}
              </h5>
            </SlideTopAnimation>
            {lang === "ar" ? (
              <>
                <SlideTopAnimation>
                  <h2 className="text-fm-yellow font-bold text-4xl md:text-5xl leading-tight mb-1">
                    {data.title}
                  </h2>
                </SlideTopAnimation>
                <SlideTopAnimation>
                  <p className="text-white text-lg mb-8 tracking-wide">
                    {data.subtitle}
                  </p>
                </SlideTopAnimation>
              </>
            ) : (
              <>
                <SlideTopAnimation>
                  <p className="text-white text-lg mb-1 tracking-wide">
                    {data.subtitle}
                  </p>
                </SlideTopAnimation>
                <SlideTopAnimation>
                  <h2 className="text-fm-yellow font-bold text-4xl md:text-5xl leading-tight mb-8">
                    {data.title}
                  </h2>
                </SlideTopAnimation>
              </>
            )}

            <SlideTopAnimation>
              <p className="text-white/85 text-sm leading-relaxed mb-4 max-w-4xl">
                {data.paragraph1}
              </p>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="text-white/85 text-sm leading-relaxed max-w-4xl">
                {data.paragraph2}
              </p>
            </SlideTopAnimation>
          </div>
        </Container>
      </div>

      {/* Yellow stats panel */}
      <Container className="pb-16">
        <div className="bg-fm-yellow">
          <Container>
            <div className="py-10 md:py-12">
              <SlideTopAnimation>
                <p className="text-black font-semibold text-sm mb-8">
                  {data.highlightsLabel}
                </p>
              </SlideTopAnimation>

              {/* 3-column grid: first item spans 2 rows */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
                {/* 05 plants certified — spans 2 rows on md+ */}
                <SlideTopAnimation className="md:row-span-3 pb-6 md:pb-0 md:pe-8">
                  {data.stats.plants.prefix && (
                    <p className="font-bold">{data.stats.plants.prefix}</p>
                  )}
                  <p className="text-white font-bold text-6xl md:text-7xl leading-none mb-2">
                    {data.stats.plants.number}
                  </p>
                  <p className="font-bold text-base text-black mb-1">
                    {data.stats.plants.label}
                  </p>
                  <p
                    className="text-sm text-black leading-relaxed mb-5"
                    dangerouslySetInnerHTML={{ __html: data.stats.plants.desc }}
                  />
                  <div className="grid grid-cols-2 gap-2 w-36">
                    <img src={Iso45001} alt="ISO 45001" className="w-full" />
                    <img src={Iso9001} alt="ISO 9001" className="w-full" />
                    <img src={Iso14001} alt="ISO 14001" className="w-full" />
                    <img src={Iso22000} alt="ISO 22000" className="w-full" />
                  </div>
                </SlideTopAnimation>

                {/* 598 physical tests */}
                <SlideTopAnimation className=" pb-6 md:pb-0 md:pe-8">
                  {data.stats.physicalTests.prefix && (
                    <p className="font-bold">
                      {data.stats.physicalTests.prefix}
                    </p>
                  )}
                  <p className="text-black font-bold text-5xl leading-none mb-2">
                    {data.stats.physicalTests.number}
                  </p>
                  <p className=" text-black leading-snug">
                    <span className="font-bold">
                      {data.stats.physicalTests.label}
                    </span>{" "}
                    <span className="black/70">
                      {data.stats.physicalTests.desc}
                    </span>
                  </p>
                </SlideTopAnimation>

                {/* 09 training courses */}
                <SlideTopAnimation className="pb-6 md:pb-0">
                  {data.stats.trainingCourses.prefix && (
                    <p className="font-bold">
                      {data.stats.trainingCourses.prefix}
                    </p>
                  )}
                  <p className="text-white font-bold text-5xl leading-none mb-2">
                    {data.stats.trainingCourses.number}
                  </p>
                  <p className="font-bold black leading-snug">
                    {data.stats.trainingCourses.label}
                  </p>
                  <p className="font-bold text-xl text-white">
                    {data.stats.trainingCourses.highlight}
                  </p>
                </SlideTopAnimation>

                {/* 893,520 quality tests */}
                <SlideTopAnimation className=" pb-6 md:pb-0 md:pe-8">
                  {data.stats.qualityTests.prefix && (
                    <p className="font-bold">
                      {data.stats.qualityTests.prefix}
                    </p>
                  )}
                  <p className="text-white font-bold text-4xl leading-none mb-2">
                    {data.stats.qualityTests.number}
                  </p>
                  <p className="leading-snug font-bold">
                    {data.stats.qualityTests.label}
                  </p>
                  <p className="black/70">{data.stats.qualityTests.desc}</p>
                </SlideTopAnimation>

                {/* 171 employees */}
                <SlideTopAnimation className="pb-6 md:pb-0">
                  {data.stats.employees.prefix && (
                    <p className="font-bold">{data.stats.employees.prefix}</p>
                  )}
                  <p className="black font-bold text-5xl leading-none mb-2">
                    {data.stats.employees.number}
                  </p>
                  <p className="font-bold text-base black">
                    {data.stats.employees.label}
                  </p>
                  <p className=" black/70 leading-snug">
                    {data.stats.employees.desc}
                  </p>
                </SlideTopAnimation>

                {/* Bottom row divider */}
                <div className="md:col-span-3 hidden md:block" />

                {/* 1,200,728 safe hours */}
                <SlideTopAnimation className=" pb-6 md:pb-0 md:pe-8">
                  {data.stats.safeHours.prefix && (
                    <p className="font-bold text-white">{data.stats.safeHours.prefix}</p>
                  )}
                  <p className="black font-bold text-4xl md:text-5xl leading-none mb-2">
                    {data.stats.safeHours.number}
                  </p>
                  <p className="font-bold text-xl text-white leading-snug mb-1">
                    {data.stats.safeHours.label}
                  </p>
                  <p className="black/70 leading-relaxed">
                    {data.stats.safeHours.highlight}
                  </p>
                </SlideTopAnimation>

                {/* ONE HUNDRED microbiological */}
                <SlideTopAnimation className=" pb-6 md:pb-0 md:pe-8">
                  {data.stats.microbiological.prefix && (
                    <p className="font-bold">
                      {data.stats.microbiological.prefix}
                    </p>
                  )}
                  <p className="black font-bold text-4xl md:text-5xl leading-tight mb-2 whitespace-pre-line">
                    {data.stats.microbiological.number}
                  </p>
                  <p className="font-bold text-white leading-snug">
                    {data.stats.microbiological.label}
                  </p>
                  <p className=" text-white">
                    {data.stats.microbiological.highlight}
                  </p>
                </SlideTopAnimation>

                {/* 1,750 chemical tests */}
                <SlideTopAnimation>
                  {data.stats.chemicalTests.prefix && (
                    <p className="font-bold">
                      {data.stats.chemicalTests.prefix}
                    </p>
                  )}
                  <p className="text-white font-bold text-5xl leading-none mb-2">
                    {data.stats.chemicalTests.number}
                  </p>
                  <p className="black/70 leading-snug">
                    <span className="font-bold ">
                      {data.stats.chemicalTests.label}
                    </span>{" "}
                    <span className="black/70">
                      {data.stats.chemicalTests.desc}
                    </span>
                  </p>
                </SlideTopAnimation>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default CFOQualitySection;
