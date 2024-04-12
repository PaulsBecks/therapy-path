import { Link } from "@mui/material";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MaxWidthParagraph from "../Styled/MaxWidthParagraph";
import ColumnCenteredDiv from "../Styled/ColumnCenteredDiv";

const Spacer = styled.div`
  height: 1rem;
`;

export default function ConsultationStep(): ReactNode {
  const { t } = useTranslation();
  return (
    <ColumnCenteredDiv>
      <h1>{t("CONSULTATION_STEP_TITLE")}</h1>
      <MaxWidthParagraph>{t("CONSULATION_STEP_EXPLANATION")}</MaxWidthParagraph>
      <MaxWidthParagraph>
        {t("CONSULATION_STEP_116117_EXPLANATION")}
      </MaxWidthParagraph>

      <Link href="https://eterminservice.de/terminservice">
        https://eterminservice.de/terminservice
      </Link>
      <Spacer />
    </ColumnCenteredDiv>
  );
}
