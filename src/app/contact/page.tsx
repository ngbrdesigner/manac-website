import styles from "@/app/page.module.css";
import { useTranslations } from "next-intl";
export default function ContactPage() {
  const t = useTranslations("Header");
  return (
    <div className={styles.page}>
      <main className={styles.main}>{t("contact")}</main>
    </div>
  );
}
