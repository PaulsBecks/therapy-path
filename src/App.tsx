import "./App.css";
import Funnel from "./components/Funnel/Funnel";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import CssBaseline from "@mui/material/CssBaseline";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translation: {
        FIND_THERAPY_STEP_BUTTON_TEXT: "start to find therapy",
        FIND_THERAPY_STEP_TITLE: "Find therapy",
        CONSULTATION_STEP_TITLE: "Find Consultation Session",
        SUCCESS_BUTTON: "success",
        HELP_BUTTON: "help",
        RETURN_WITH_FINAL_REPORT_STEP_TITLE: "Return with final report",
        FIND_THERAPY_STEP_EXPLANATION:
          "This page will help you find the right therapy for you.",
        FIND_THERAPY_RETURN_IF_YOU_NEED_MORE_HELP_PARAGRAPH:
          "Come back to this page when ever you feel lost. We will try to guide you to the next step.",
        CONSULATION_STEP_EXPLANATION:
          "The next step is to find a consultation session. During this session you will talk to a therapist and they will help you find the right therapy for you.",
        CONSULATION_STEP_116117_EXPLANATION:
          "Go to the following page to find a consultation session:",
        STEP_BACK_BUTTON: "back",
        FINAL_RESULT_STEP_TITLE: "Final Result",
        FINAL_RESULT_STEP_EXPLANATION:
          "Once you finished your consultation session your therapist will give you a final report. Take this report back home. ",
        FINDING_LONG_TERM_THERAPY_STEP_TITLE: "Find Long Term Therapy",
        FINDING_LONG_TERM_THERAPY_STEP_EXPLANATION:
          "Now with your report you can go find a long term therapist. To do so you can do the following:",
      },
    },
    de: {
      translation: {
        FIND_THERAPY_STEP_TITLE: "Therapie finden",
        FIND_THERAPY_STEP_BUTTON_TEXT: "Los geht's",
        CONSULTATION_STEP_TITLE: "Sprechstunde Vereinbaren",
        SUCCESS_BUTTON: "Geschafft",
        HELP_BUTTON: "Hilfe",
        RETURN_WITH_FINAL_REPORT_STEP_TITLE: "Abschlussbericht zurückbringen",
        FIND_THERAPY_STEP_EXPLANATION:
          "Diese Seite will dir dabei helfen dem Prozess zu folgen, um einen Therapieplatz zu finden.",
        FIND_THERAPY_RETURN_IF_YOU_NEED_MORE_HELP_PARAGRAPH:
          "Komm zurück auf diese Seite, wenn du nicht weißt was du als nächstes machen musst. Wir werden versuchen dich zum nächsten Schritt zu führen.",
        CONSULATION_STEP_EXPLANATION:
          "Der nächste Schritt ist eine Sprechstunde zu vereinbaren. Während dieser Sprechstunde wirst du mit einem Therapeuten über deine Themen sprechen und sie werden dir helfen die richtige Therapie für dich zu finden.",
        CONSULATION_STEP_116117_EXPLANATION:
          "Gehe auf die folgende Seite um eine Sprechstunde zu vereinbaren:",
        STEP_BACK_BUTTON: "zurück",
        FINAL_RESULT_STEP_TITLE: "Abschlussbericht Mitbringen",
        FINAL_RESULT_STEP_EXPLANATION:
          "Nach deiner Sprechstunde wird dir dein Therapeut einen Abschlussbericht geben. Nimm diesen Bericht mit nach Hause.",
        FINDING_LONG_TERM_THERAPY_STEP_TITLE: "Langzeittherapie finden",
        FINDING_LONG_TERM_THERAPY_STEP_EXPLANATION:
          "Mit deinem Bericht kannst du jetzt eine Langzeittherapie finden. Dafür kannst du folgendes tun:",
      },
    },
  },
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        <Funnel />
      </I18nextProvider>
    </>
  );
}

export default App;
