import styles from "@/app/page.module.css";
import { useTranslations } from "next-intl";
export default function VacancyPage() {
  const t = useTranslations("Header");
  return (
    <div className={styles.page}>
      <main className={styles.main}>{t("vacancy")}</main>
    </div>
  );
}
