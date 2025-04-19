// components/TrailerCard.tsx
import React from "react";
import { TrailerInfo } from "@/types";
import "./TrailerCard.css"; // подключаем CSS
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  data: TrailerInfo;
}

const TrailerCard: React.FC<Props> = ({ data }) => {
  const t = useTranslations("TrailerCard");
  return (
    <div className="trailer-card">
      <Image
        width={1200}
        height={800}
        src={data.imageUrl}
        alt={data.title}
        className="trailer-image"
      />
      <div className="trailer-content">
        <h2 className="trailer-title">{data.title}</h2>
        <p className="trailer-subtitle">{t(data.subtitle)}</p>

        <div className="trailer-badges">
          <span className="badge">
            {data.axles} {data.axles > 4 ? t("axles5+") : t("axles4")}
          </span>
          <span className="badge">
            {t("up to")} {data.capacity} {t("t")}
          </span>
        </div>

        <div className="trailer-specs">
          <div className="spec-row">
            <span>{t("length")}</span>
            <span>
              {data.length} {t("m")}
            </span>
          </div>
          <div className="spec-row">
            <span>{t("extension")}</span>
            <span>
              {data.extension} {t("m")}
            </span>
          </div>
          <div className="spec-row">
            <span>{t("working area")}</span>
            <span>
              {data.workingArea} {t("m")}
            </span>
          </div>
          <div className="spec-row">
            <span>{t("loading height")}</span>
            <span>
              {data.loadingHeight} {t("mm")}
            </span>
          </div>
        </div>

        <button className="details-button">
          {t("view details")}
          <ChevronRight size={20} strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default TrailerCard;
