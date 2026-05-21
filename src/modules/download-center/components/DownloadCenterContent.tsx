import { useState, useEffect, useContext } from "react";
import { PDFDocument } from "pdf-lib";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";

type Chapter = {
  title: string;
  sections: string[];
  hiddenSectionIndices?: number[];
  chapterPdf?: boolean;
};

type DownloadCenterTranslations = {
  description: string;
  downloadSelected: string;
  downloadFull: string;
  preparingMessage: string;
  chapters: Chapter[];
};

const URL_ENDPOINT = "./download-center";

const COMPANY = "first-mills";

function getLanguageFolder(isAr: boolean) {
  return isAr ? "arabic" : "english";
}

function getSectionPdfName(chapterIndex: number, sectionIndex: number) {
  return `chapter_${chapterIndex + 1}_section_${sectionIndex + 1}.pdf`;
}

function getChapterPdfName(chapterIndex: number) {
  return `chapter_${chapterIndex + 1}_full.pdf`;
}

function atLeastOneSelected(checked: boolean[][]): boolean {
  return checked.some((chapter) => chapter.some(Boolean));
}

const DownloadCenterContent = () => {
  const { lang, translations } = useContext(LangContext);
  const isAr = lang === "ar";

  const dict = (
    (translations as unknown as Record<string, Record<string, DownloadCenterTranslations>>)
  )[lang]["download-center"];

  const chapters: Chapter[] = dict.chapters ?? [];

  const [checkedChapters, setCheckedChapters] = useState<boolean[][]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const buildInitialState = (chs: Chapter[]) =>
    chs.map((ch) =>
      ch.sections.length > 0
        ? new Array(ch.sections.length).fill(false)
        : [false]
    );

  useEffect(() => {
    setCheckedChapters(buildInitialState(chapters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const resetChecked = () => setCheckedChapters(buildInitialState(chapters));

  const handleChapterToggle = (chapterIdx: number) => {
    setCheckedChapters((prev) => {
      const next = prev.map((ch) => [...ch]);
      const allSelected = next[chapterIdx].every(Boolean);
      next[chapterIdx] = next[chapterIdx].map(() => !allSelected);
      return next;
    });
  };

  const handleSectionToggle = (chapterIdx: number, sectionIdx: number) => {
    setCheckedChapters((prev) => {
      const next = prev.map((ch) => [...ch]);
      next[chapterIdx][sectionIdx] = !next[chapterIdx][sectionIdx];
      return next;
    });
  };

  const handleDownloadSelected = async () => {
    setIsLoading(true);
    const urls: string[] = [];
    const langFolder = getLanguageFolder(isAr);

    checkedChapters.forEach((chapter, ci) => {
      const chapterDef = chapters[ci];
      const hidden = new Set(chapterDef.hiddenSectionIndices ?? []);
      const visibleIndices = chapter.map((_, i) => i).filter((i) => !hidden.has(i));
      const allVisibleSelected =
        visibleIndices.length > 0 && visibleIndices.every((i) => chapter[i]);
      const wholeChapterSelected =
        chapterDef.sections.length === 0 && chapter[0];

      if (chapterDef.chapterPdf && (allVisibleSelected || wholeChapterSelected)) {
        urls.push(`${URL_ENDPOINT}/${langFolder}/${getChapterPdfName(ci)}`);
      } else {
        chapter.forEach((selected, si) => {
          if (selected) {
            urls.push(`${URL_ENDPOINT}/${langFolder}/${getSectionPdfName(ci, si)}`);
          }
        });
      }
    });

    try {
      const buffers = await Promise.all(
        urls.map((url) =>
          fetch(url, { headers: { "Content-Type": "application/pdf" } }).then(
            (r) => r.arrayBuffer()
          )
        )
      );

      const docs = await Promise.all(
        buffers.map((buf) => PDFDocument.load(buf))
      );

      const merged = await PDFDocument.create();
      for (const doc of docs) {
        const pages = await merged.copyPages(doc, doc.getPageIndices());
        pages.forEach((p) => merged.addPage(p));
      }

      const bytes = await merged.save();
      const blob = new Blob([new Uint8Array(bytes)], {
        type: "application/pdf",
      });
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = isAr
        ? `${COMPANY}_Partial_Report_AR.pdf`
        : `${COMPANY}_Partial_Report_EN.pdf`;
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(objectUrl);
      document.body.removeChild(link);
    } finally {
      setIsLoading(false);
      resetChecked();
    }
  };

  const handleDownloadFull = () => {
    const lang_folder = getLanguageFolder(isAr);
    const link = document.createElement("a");
    link.href = `${URL_ENDPOINT}/${lang_folder}/${COMPANY}_${lang_folder}.pdf`;
    link.download = isAr
      ? `${COMPANY}_Full_Report_AR.pdf`
      : `${COMPANY}_Full_Report_EN.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (checkedChapters.length === 0) return null;

  return (
    <div className={isAr ? "text-right" : "text-left"}>
      <Container className="py-12">
        {/* Description + Buttons row */}
        <SlideTopAnimation>
          <div
            className={""}
          >
            <div>
              {/* Description */}
              <p className="text-fm-gray-400 flex-1 leading-relaxed text-base">
                {dict.description}
              </p>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row justify-end gap-3 shrink-0 w-full mt-8 mb-4 `}
            >
              <button
                onClick={handleDownloadSelected}
                disabled={!atLeastOneSelected(checkedChapters) || isLoading}
                className="px-6 py-2.5 rounded-full bg-fm-yellow text-white font-semibold text-sm whitespace-nowrap
                  hover:bg-fm-yellow/80 transition-colors duration-200
                  disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {dict.downloadSelected}
              </button>
              <button
                onClick={handleDownloadFull}
                disabled={isLoading}
                className="px-6 py-2.5 rounded-full bg-fm-yellow text-white font-semibold text-sm whitespace-nowrap
                  hover:bg-fm-yellow/80 transition-colors duration-200
                  disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {dict.downloadFull}
              </button>
            </div>
          </div>
        </SlideTopAnimation>

        {/* Loading message */}
        {isLoading && (
          <div className="mt-6 flex items-center gap-4 bg-fm-yellow-100 border border-fm-yellow/40 rounded-xl px-5 py-3 w-fit">
            <svg
              className="animate-spin h-5 w-5 text-fm-yellow shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            <span className="text-fm-gray-400 text-sm">{dict.preparingMessage}</span>
          </div>
        )}

        {/* Chapters grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {chapters.map((chapter, ci) => {
            const hasSubSections = chapter.sections.length > 0;
            const chapterChecked = checkedChapters[ci] ?? [];
            const hidden = new Set(chapter.hiddenSectionIndices ?? []);
            const visibleIndices = chapter.sections
              .map((_, i) => i)
              .filter((i) => !hidden.has(i));
            const allSelected =
              visibleIndices.length > 0 &&
              visibleIndices.every((i) => chapterChecked[i]);

            return (
              <div key={ci}>
                {/* Chapter header checkbox */}
                {chapter.title && (
                  <label
                    className={`flex items-center gap-2.5 cursor-pointer group`}
                  >
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={() => handleChapterToggle(ci)}
                      className="w-4 h-4 rounded accent-fm-yellow cursor-pointer shrink-0"
                    />
                    <span className="font-bold text-fm-green text-lg group-hover:text-fm-yellow transition-colors duration-150">
                      {chapter.title}
                    </span>
                  </label>
                )}

                {/* Sub-sections */}
                {hasSubSections && (
                  <ul className={`mt-3 flex flex-col gap-2`}>
                    {chapter.sections.map((section, si) => hidden.has(si) ? null : (
                      <li key={si}>
                        <label
                          className={`flex items-start gap-2.5 cursor-pointer group`}
                        >
                          <input
                            type="checkbox"
                            checked={chapterChecked[si] ?? false}
                            onChange={() => handleSectionToggle(ci, si)}
                            className="mt-0.5 w-4 h-4 rounded accent-fm-yellow cursor-pointer shrink-0"
                          />
                          <span className="text-fm-gray-400 text-sm leading-snug group-hover:text-fm-green transition-colors duration-150">
                            {section}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default DownloadCenterContent;
