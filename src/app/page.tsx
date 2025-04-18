import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import EmblaCarousel from "@/components/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { TrailerInfo } from "@/types";
import TrailerCard from "@/components/TrailerCard/TrailerCard";

export default function Home() {
  const t = useTranslations("Header");
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const IMAGES = [
    "/images/zavod/zavod01.jpg",
    "/images/zavod/zavod02.jpg",
    "/images/zavod/zavod03.jpg",
    "/images/zavod/zavod04.jpg",
    "/images/zavod/zavod05.jpg",
    // добавьте столько изображений, сколько вам нужно
  ];

  const trailer: TrailerInfo = {
    title: "TSR 5SOU2N",
    subtitle: "Раздвижной полуприцеп",
    axles: 5,
    capacity: "64,5 т",
    length: "16,6 – 24,6 м",
    extension: "8 м",
    workingArea: "11,8 – 19,8 м",
    loadingHeight: "895 мм",
    imageUrl: "/images/zavod/zavod05.jpg", // укажи путь к изображению
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>{t("main")}</main>
      <EmblaCarousel slides={IMAGES} options={OPTIONS} />
      <div style={{ marginTop: 100 }}>
        <TrailerCard data={trailer} />
      </div>
    </div>
  );
}
