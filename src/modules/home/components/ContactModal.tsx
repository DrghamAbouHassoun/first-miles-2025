import { useTranslation } from "../../common/hooks/useTranslation";
import {
  ADDRESS,
  EMAIL,
  PHONE_NUMBER,
  PHONE_NUMBER_DISPLAY,
  PO_BOX,
} from "../../../config/constants";
import { X } from "lucide-react";
import { useContext } from "react";
import { ContactModalContext } from "../contexts/ContactModalProvider";
import { useLocale } from "../../common/hooks/useLocale";

const ContactModal = () => {
  const { isOpen, toggleModel } = useContext(ContactModalContext);
  const { t } = useTranslation("common");
  const { lang } = useLocale();
  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 bg-black/25 z-40 flex justify-start items-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-500`}
    >
      <div className="w-full h-fit max-w-90 py-12 p-4 bg-fm-yellow relative">
        <button
          onClick={() => toggleModel(false)}
          className={`absolute top-4 ${lang === "ar" ? "left-4" : "right-4"} p-1`}
        >
          <X size={24} />
        </button>
        <p className="mb-2">
          <b>{t("contact.investors")}</b>
        </p>
        <p className="mb-2">
          <b>{t("contact.address")}:</b> {ADDRESS}
        </p>

        <p className="mb-2">
          <b>{t("contact.phone")}:</b>{" "}
          <a
            href={`tel:${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fm-gray-400"
            dir={lang === "ar" ? "ltr" : "ltr"}
          >
            {PHONE_NUMBER_DISPLAY}
          </a>
        </p>

        <p className="mb-2">
          <b>{t("contact.po_box")}:</b> {PO_BOX}
        </p>

        <p>
          <b>{t("contact.email")}:</b>{" "}
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fm-gray-400"
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactModal;
