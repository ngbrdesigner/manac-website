import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale, getTranslations } from "next-intl/server";
import Header from "@/components/Header";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Layout");

  return {
    title: t("manac"),
    description: t("production of semi-trailers"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
