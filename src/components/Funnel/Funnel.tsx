import { Button } from "@mui/material";
import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import ConsultationStep from "../ConsultationStep/ConsultationStep";
import styled from "styled-components";
import Wizard from "../Wizard/Wizard";
import MaxWidthParagraph from "../Styled/MaxWidthParagraph";
import FinalResultStep from "../FinalResultStep/FinalResultStep";
import FindingLongTermTherapyStep from "../FindingLongTermTherapyStep/FindingLongTermTherapyStep";

const FullPageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

const RowCenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

export default function Funnel(): ReactNode {
  const [step, setStep] = useState(0);
  const { t } = useTranslation();

  const nextStep = () => setStep(step + 1);

  const previousStep = () => setStep(step - 1);

  return (
    <FullPageDiv>
      <Wizard activeStep={step} />
      {step === 0 && (
        <>
          <h1>{t("FIND_THERAPY_STEP_TITLE")}</h1>
          <MaxWidthParagraph>
            {t("FIND_THERAPY_STEP_EXPLANATION")}
          </MaxWidthParagraph>
          <MaxWidthParagraph>
            {t("FIND_THERAPY_RETURN_IF_YOU_NEED_MORE_HELP_PARAGRAPH")}
          </MaxWidthParagraph>
          <Button color="primary" variant="outlined" onClick={nextStep}>
            {t("FIND_THERAPY_STEP_BUTTON_TEXT")}
          </Button>
        </>
      )}
      {step === 1 && <ConsultationStep />}
      {step === 2 && <FinalResultStep />}
      {step === 3 && <FindingLongTermTherapyStep />}
      {step >= 1 && (
        <RowCenteredDiv>
          <Button variant="outlined" onClick={previousStep}>
            {t("STEP_BACK_BUTTON")}
          </Button>
          <Button variant="outlined" onClick={nextStep} color="secondary">
            {t("HELP_BUTTON")}
          </Button>
          <Button variant="outlined" onClick={nextStep}>
            {t("SUCCESS_BUTTON")}
          </Button>
        </RowCenteredDiv>
      )}
    </FullPageDiv>
  );
}
