import * as yup from "yup";
import { useTranslations } from "next-intl";
import { nameRegex, phoneRegex } from "./regex";

export const CallBackValidation = () => {
  const t = useTranslations("Errors");

  const callBackFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t("nameMinMaxSymbols"))
      .max(30, t("nameMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols"))
      .required(t("required")),
    phone: yup
      .string()
      .matches(phoneRegex, t("wrongPhone"))
      .required(t("required")),
  });

  return callBackFormValidationSchema;
};
