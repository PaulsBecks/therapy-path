import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import ColumnCenteredDiv from "../Styled/ColumnCenteredDiv";
import MaxWidthParagraph from "../Styled/MaxWidthParagraph";

export default function FindingLongTermTherapyStep(): ReactNode {
  const { t } = useTranslation();
  return (
    <ColumnCenteredDiv>
      <h1>{t("FINDING_LONG_TERM_THERAPY_STEP_TITLE")}</h1>
      <MaxWidthParagraph>
        {t("FINDING_LONG_TERM_THERAPY_STEP_EXPLANATION")}
      </MaxWidthParagraph>
    </ColumnCenteredDiv>
  );
}
