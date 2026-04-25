import TimeLineArrow from "../../../../assets/icons/coo/timeline/arrow.png";
import { useLocale } from "../../../common/hooks/useLocale";
import { useTranslation } from "../../../common/hooks/useTranslation";

interface Item {
  value: string;
  description: string;
}

interface TimelineItemProps {
  year: string;
  isEven: boolean;
  items: Item[];
}

const TimelineItem = ({ year, items, isEven }: TimelineItemProps) => {
  const { lang } = useLocale();
  return (
    <div className="relative flex items-start">
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 top-5 w-2 h-2 bg-fm-green rounded-full shadow-md z-10" />

      {/* Content container */}
      <div
        className={`w-full flex relative ${isEven ? "justify-end" : "justify-start"}`}
      >
        <img
          src={TimeLineArrow}
          alt="COO"
          className="w-5 h-5 object-contain absolute -top-4 left-1/2 -translate-x-1/2"
        />
        <div
          className={`${isEven ? "self-start" : "self-end"} w-1/2 flex flex-col px-8`}
        >
          {/* Year badge */}
          <div
            className={`w-fit px-6 py-2 rounded-full font-bold text-lg tracking-wide ${
              isEven
                ? "bg-fm-green text-fm-yellow"
                : "bg-fm-green text-fm-yellow self-end"
            }`}
          >
            {year}
          </div>

          {/* Items list */}
          <div
            className={`mt-4 space-y-3 ${isEven ? "text-start" : "text-end"}`}
          >
            {items.map((item, idx) => (
              <div key={idx} className="text-sm">
                <div className="font-semibold text-slate-900">{item.value}</div>
                <div
                  className="text-slate-900 text-xs"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connecting line to center */}
      <div
        className={`absolute top-6 h-0 border border-dashed border-fm-green z-0 ${
          !isEven
            ? `${lang === "ar" ? "right-1/2 translate-x-full" : "left-1/2 -translate-x-full"}  w-8`
            : `${lang === "ar" ? "left-1/2 -translate-x-full" : "right-1/2 translate-x-full"} w-8`
        }`}
      />
    </div>
  );
};

interface TimelineEntry {
  year: string;
  isEven: boolean;
  items: Item[];
}

export default function Timeline() {
  const { t, tRaw } = useTranslation("operating-review");
  const timelineData = tRaw<TimelineEntry[]>("cooContent.timeline.items") ?? [];

  return (
    <div className="min-h-screen bg-fm-yellow-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {t("cooContent.timeline.title")}
          </h1>
          <p className="text-slate-600">{t("cooContent.timeline.subtitle")}</p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.1 h-full border border-dashed" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((timelineItem, idx) => (
              <div key={idx} className="relative">
                <TimelineItem
                  year={timelineItem.year}
                  items={timelineItem.items}
                  isEven={timelineItem.isEven}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
