import styles from "./page.module.css";
import EmblaCarousel from "@/components/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {};
  const IMAGES = [
    "/images/zavod/zavod01.jpg",
    "/images/zavod/zavod02.jpg",
    "/images/zavod/zavod03.jpg",
    "/images/zavod/zavod04.jpg",
    "/images/zavod/zavod05.jpg",
  ];

  return (
    <div className={styles.page}>
      <EmblaCarousel slides={IMAGES} options={OPTIONS} />
    </div>
  );
}
