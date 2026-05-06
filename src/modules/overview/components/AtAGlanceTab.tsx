import Container from "../../common/components/Container/Container";
import FinancialHighlights from "../../atAGlance/components/FinancialHighlights";
import OperationalHighlights from "../../atAGlance/components/OperationalHighlights";
import ESGHighlights from "../../atAGlance/components/ESGHighlights";
import AwardsCertifications from "../../atAGlance/components/AwardsCertifications";
import { useTranslation } from "../../common/hooks/useTranslation";
import { useLocale } from "../../common/hooks/useLocale";
import PageTitle from "../../common/components/typography/PageTitle";

const AtAGlanceTab = () => {
  const { t } = useTranslation("at-a-glance");
  const { lang } = useLocale();
  return (
    <>
      <Container className="text-fm-green font-bold">
        <PageTitle className="py-16">
          {lang === "ar" ? t("header.subtitle") : t("header.title")}
        </PageTitle>
        <FinancialHighlights />
      </Container>
      <OperationalHighlights />
      <ESGHighlights />
      <AwardsCertifications />
    </>
  );
};

export default AtAGlanceTab;
