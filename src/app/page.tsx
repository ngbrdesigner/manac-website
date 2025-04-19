import styles from "./page.module.css";
import EmblaCarousel from "@/components/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { TrailerInfo } from "@/types";
import TrailerCard from "@/components/TrailerCard/TrailerCard";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {};
  const IMAGES = [
    "/images/zavod/zavod01.jpg",
    "/images/zavod/zavod02.jpg",
    "/images/zavod/zavod03.jpg",
    "/images/zavod/zavod04.jpg",
    "/images/zavod/zavod05.jpg",
  ];

  const trailer: TrailerInfo = {
    title: "TSR 5SOU2N",
    subtitle: "extendable semi-trailer",
    axles: 5,
    capacity: "64,5",
    length: "16,6 – 24,6",
    extension: "8",
    workingArea: "11,8 – 19,8",
    loadingHeight: "895",
    imageUrl: "/images/5osei/01.webp",
  };

  return (
    <div className={styles.page}>
      <EmblaCarousel slides={IMAGES} options={OPTIONS} />

      <TrailerCard data={trailer} />
    </div>
  );
}
