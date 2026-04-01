import MainHeader from "../modules/common/components/MainHeader/MainHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import DownloadCenterHeader from "../assets/images/headers/download-center.jpg";
import DownloadCenterContent from "../modules/download-center/components/DownloadCenterContent";

const DownloadCenter = () => {
  const { t } = useTranslation("download-center");
  return (
    <div>
      <MainHeader
        image={DownloadCenterHeader}
        title={t("title")}
        subtitle={""}
      />
      <DownloadCenterContent />
    </div>
  );
};

export default DownloadCenter;