import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ChainedBackend from 'i18next-chained-backend';
import HttpBackend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './navbar';
import TetrisGame from './tetris';

/**
 * Initialize i18next.
 */
i18next
  .use(LanguageDetector)
  .use(ChainedBackend)
  .init({
    lng: 'fr-FR',
    fallbackLng: 'en-US',
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend((lng, ns, clb) => {
          import(`../public/locales/${lng}/${ns}.json`)
                .then((resources) => clb(null, resources))
                .catch(clb)
        })
      ],
      backendOptions: [{
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }]
    }
  });

/**
 * Handle i18n update
 * 
 * @param lng Langage code
 */
i18next.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

window.addEventListener("DOMContentLoaded", (event) => {
  var currentGame = new TetrisGame(document.getElementById('localGame'));
  document.getElementById('btnStartGame').addEventListener('click', function() {
    currentGame.start();
  });
  document.getElementById('btnStopGame').addEventListener('click', function() {
    currentGame.stop();
  });
});