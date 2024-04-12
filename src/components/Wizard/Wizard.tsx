import { Step, StepLabel, Stepper } from "@mui/material";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface WizardProps {
  activeStep: number;
}

const steps = [
  "FIND_THERAPY_STEP_TITLE",
  "CONSULTATION_STEP_TITLE",
  "RETURN_WITH_FINAL_REPORT_STEP_TITLE",
  "FINDING_LONG_TERM_THERAPY_STEP_TITLE",
];

export default function Wizard({ activeStep }: WizardProps): ReactNode {
  const { t } = useTranslation();
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps
          .filter((_, i) => i <= activeStep)
          .map((label) => (
            <Step key={label}>
              <StepLabel>{t(label)}</StepLabel>
            </Step>
          ))}
      </Stepper>
    </div>
  );
}
