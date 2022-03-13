import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

i18next.use(LanguageDetector).init({
  resources: {
    en: {
      translation: {
        "key": "Tetris game"
      }
    },
    fr: {
        translation: {
          "key": "Jeu Tetris"
        }
      }
    },
    'fr': {
        translation: {
            "key": "Jeu Tetris"
        }
    }
});
i18next.on('languageChanged', (lng) => { document.documentElement.setAttribute('lang', lng); });

document.documentElement.lang = i18next.language;

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = i18next.t('key');
  
    return element;
  }
  
  document.getElementById('mainContent').appendChild(component());