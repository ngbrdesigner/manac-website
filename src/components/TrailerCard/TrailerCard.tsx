// components/TrailerCard.tsx
import React from "react";
import { TrailerInfo } from "@/types";
import "./TrailerCard.css"; // подключаем CSS

interface Props {
  data: TrailerInfo;
}

const TrailerCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="trailer-card">
      <img src={data.imageUrl} alt={data.title} className="trailer-image" />
      <div className="trailer-content">
        <h2 className="trailer-title">{data.title}</h2>
        <p className="trailer-subtitle">{data.subtitle}</p>

        <div className="trailer-badges">
          <span className="badge">{data.axles} осей</span>
          <span className="badge">до {data.capacity}</span>
        </div>

        <div className="trailer-specs">
          <div className="spec-row">
            <span>Длина</span>
            <span>{data.length}</span>
          </div>
          <div className="spec-row">
            <span>Развижка</span>
            <span>{data.extension}</span>
          </div>
          <div className="spec-row">
            <span>Рабочая площадка</span>
            <span>{data.workingArea}</span>
          </div>
          <div className="spec-row">
            <span>Погрузочная высота</span>
            <span>{data.loadingHeight}</span>
          </div>
        </div>

        <button className="details-button">ПОСМОТРЕТЬ ДЕТАЛИ →</button>
      </div>
    </div>
  );
};

export default TrailerCard;
