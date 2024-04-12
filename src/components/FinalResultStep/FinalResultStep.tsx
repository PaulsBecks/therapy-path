import { useTranslation } from "react-i18next";
import ColumnCenteredDiv from "../Styled/ColumnCenteredDiv";
import MaxWidthParagraph from "../Styled/MaxWidthParagraph";

export default function FinalResultStep() {
  const { t } = useTranslation();
  return (
    <ColumnCenteredDiv>
      <h1>{t("FINAL_RESULT_STEP_TITLE")}</h1>
      <MaxWidthParagraph>
        {t("FINAL_RESULT_STEP_EXPLANATION")}
      </MaxWidthParagraph>
    </ColumnCenteredDiv>
  );
}
