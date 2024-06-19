import { useRouter } from "next/router";
import en from "../locales/en";
import fa from "../locales/id";

export const useLanguage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;
  return { t, locale };
};
