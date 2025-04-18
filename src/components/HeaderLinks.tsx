import Link from "next/link";
import styles from "@/app/page.module.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface HeaderLinksProps {
  onClick?: () => void;
}

const HeaderLinks = ({ onClick }: HeaderLinksProps) => {
  const pathname = usePathname();
  const t = useTranslations("Header");
  return (
    <>
      <Link
        className={clsx(styles.navLink, pathname === "/about" && styles.active)}
        href="/about"
        onClick={() => onClick?.()}
      >
        {t("about")}
      </Link>
      <Link
        className={clsx(
          styles.navLink,
          pathname === "/production" && styles.active
        )}
        href="/production"
        onClick={() => onClick?.()}
      >
        {t("production")}
      </Link>
      <Link
        className={clsx(styles.navLink, pathname === "/news" && styles.active)}
        href="/news"
        onClick={() => onClick?.()}
      >
        {t("news")}
      </Link>
      <Link
        className={clsx(
          styles.navLink,
          pathname === "/service" && styles.active
        )}
        href="/service"
        onClick={() => onClick?.()}
      >
        {t("service")}
      </Link>
      <Link
        className={clsx(
          styles.navLink,
          pathname === "/vacancy" && styles.active
        )}
        href="/vacancy"
        onClick={() => onClick?.()}
      >
        {t("vacancy")}
      </Link>
      <Link
        className={clsx(
          styles.navLink,
          pathname === "/contact" && styles.active
        )}
        href="/contact"
        onClick={() => onClick?.()}
      >
        {t("contact")}
      </Link>
    </>
  );
};
export default HeaderLinks;
