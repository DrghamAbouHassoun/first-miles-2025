import MainHeader from "../modules/common/components/MainHeader/MainHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import AtAGlanceImage from "../assets/images/headers/at-a-glance.jpg";
import Container from "../modules/common/components/Container/Container";
import FinancialHighlights from "../modules/atAGlance/components/FinancialHighlights";
import OperationalHighlights from "../modules/atAGlance/components/OperationalHighlights";
import AwardsCertifications from "../modules/atAGlance/components/AwardsCertifications";
import SlideTopAnimation from "../modules/common/components/animations/SlideTopAnimation";

const AtAGlancePage = () => {
  const { t } = useTranslation("at-a-glance");
  return (
    <div className="min-h-screen">
      <MainHeader
        image={AtAGlanceImage}
        title={t("header.title")}
        subtitle={""}
      />
      <Container className=" text-fm-green font-bold">
        <SlideTopAnimation level="50">
          <p className="max-w-165 py-24">{t("intro.text")}</p>
        </SlideTopAnimation>
        <FinancialHighlights />
      </Container>
      <OperationalHighlights />
      <AwardsCertifications />
    </div>
  );
};

export default AtAGlancePage;
