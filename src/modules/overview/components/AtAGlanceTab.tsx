import Container from "../../common/components/Container/Container";
import FinancialHighlights from "../../atAGlance/components/FinancialHighlights";
import OperationalHighlights from "../../atAGlance/components/OperationalHighlights";
import ESGHighlights from "../../atAGlance/components/ESGHighlights";
import AwardsCertifications from "../../atAGlance/components/AwardsCertifications";
import { useTranslation } from "../../common/hooks/useTranslation";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import { useLocale } from "../../common/hooks/useLocale";

const AtAGlanceTab = () => {
  const { t } = useTranslation("at-a-glance");
  const { lang } = useLocale();
  return (
    <>
      <Container className="text-fm-green font-bold">
        <SlideTopAnimation level="50">
          <h3 className="max-w-165 py-16 text-4xl">
            {lang === "ar" ? t("header.subtitle") : t("header.title")}
          </h3>
        </SlideTopAnimation>
        <FinancialHighlights />
      </Container>
      <OperationalHighlights />
      <ESGHighlights />
      <AwardsCertifications />
    </>
  );
};

export default AtAGlanceTab;
