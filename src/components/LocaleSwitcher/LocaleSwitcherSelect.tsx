import { useTransition, useState } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import styles from "./LocaleSwitcherSelect.module.css";
import Image from "next/image";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  function onChange(value: string) {
    const locale = value as Locale;
    setSelectedValue(value);
    setIsOpen(false);
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className={styles.wrapper}>
      <button
        aria-label={label}
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.button} ${isPending ? styles.buttonDisabled : ""}`}
      >
        <span className={styles.buttonText}>{selectedValue.toUpperCase()}</span>
        <Image
          src="/icons/dropdown-arrow.svg"
          alt="dropdown-arrow"
          width={20}
          height={20}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {items.map((item) => (
            <div
              key={item.value}
              className={styles.dropdownItem}
              onClick={() => onChange(item.value)}
            >
              <div className={styles.selectedIcon}>
                {item.value === selectedValue && (
                  <Image
                    src="/icons/check.svg"
                    alt="check"
                    width={16}
                    height={16}
                  />
                )}
              </div>
              <span className={styles.itemLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
