"use client";
import styles from "@/app/production/production.module.css";
import TrailerCard from "@/components/TrailerCard/TrailerCard";
import { trailers } from "@/TrailersData";
import { useEffect, useRef, useState } from "react";
import { Icon4Axles } from "../../../public/icons/4axles";
import { SlidersHorizontal } from "lucide-react";

export default function ProductionPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false); // Состояние для отображения фильтров на мобильных
  const filterBarRef = useRef<HTMLDivElement>(null); // Реф для отслеживания кликов

  useEffect(() => {
    if (!showFilters) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterBarRef.current &&
        !filterBarRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(`.${styles.mobileFilterButton}`)
      ) {
        setShowFilters(false);
        console.log("MIMO");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilters]);

  // Получаем все уникальные значения sort из данных
  const filterOptions = [
    "all",
    ...Array.from(new Set(trailers.map((trailer) => trailer.sort))).filter(
      Boolean
    ),
  ];

  // Фильтруем трейлеры в зависимости от выбранного фильтра
  const filteredTrailers =
    activeFilter === "all"
      ? trailers
      : trailers.filter((trailer) => trailer.sort === activeFilter);
  const formatFilterName = (filter: string) => {
    return filter === "all" ? "All Trailers" : filter.replace("-", " ");
  };
  return (
    <div>
      {/* Кнопка для мобильных */}
      <div className={styles.mobileFilterButton}>
        <button onClick={() => setShowFilters(!showFilters)}>
          <SlidersHorizontal size={16} />
          <span>FILTERS</span>
        </button>
        <div className={styles.selectedFilter}>
          {formatFilterName(activeFilter)}
        </div>
      </div>

      {/* Полоска фильтров */}
      <div
        ref={filterBarRef}
        className={`${styles.filterBar} ${showFilters ? styles.show : ""}`}
      >
        {filterOptions.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterButton} ${
              activeFilter === filter ? styles.active : ""
            }`}
            onClick={() => {
              setActiveFilter(filter);
              setShowFilters(false); // Закрываем фильтры после выбора
            }}
          >
            {filter === "all" ? "All Trailers" : filter.replace("-", " ")}
            <Icon4Axles width={140} />
          </button>
        ))}
      </div>

      {/* Контейнер с карточками */}
      <div className={styles.container}>
        {filteredTrailers.map((trailerData) => (
          <TrailerCard key={trailerData.title} data={trailerData} />
        ))}
      </div>
    </div>
  );
}
