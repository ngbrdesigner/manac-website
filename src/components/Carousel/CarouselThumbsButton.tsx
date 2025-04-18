"use client";
import React from "react";
import styles from "./Carousel.module.css";
import clsx from "clsx";
type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props;

  return (
    <div
      className={clsx(
        styles.thumbsSlide,
        selected && styles.thumbsSlideSelected
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className={styles.thumbsSlideNumber}
      >
        {index + 1}
      </button>
    </div>
  );
};
