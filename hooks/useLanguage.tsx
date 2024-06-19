import { useRouter } from "next/router";
import en from "../locales/en";
import id from "../locales/id";

export const useLanguage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : id;
  return { t, locale };
};
