import { useEffect } from "react";
import MainHeader from "../modules/common/components/MainHeader/MainHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import DownloadCenterHeader from "../assets/images/headers/download-center.jpg";
import DownloadCenterContent from "../modules/download-center/components/DownloadCenterContent";
import GroupOfSpikes from "../modules/leadership/components/GroupOfSpikes";
import { useTabNavigation } from "../modules/common/hooks/useTabNavigation";

const DownloadCenter = () => {
  const { t } = useTranslation("download-center");
  const { registerPageTabs } = useTabNavigation();

  useEffect(() => {
    registerPageTabs([], "");
  }, [registerPageTabs]);
  return (
    <div>
      <MainHeader
        image={DownloadCenterHeader}
        title={t("title")}
        subtitle={""}
      />
      <DownloadCenterContent />
      <div className="flex justify-end w-full h-auto bottom-0 right-0 z-10">
        <GroupOfSpikes />
      </div>
    </div>
  );
};

export default DownloadCenter;