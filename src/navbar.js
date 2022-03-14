import i18next from 'i18next';

/**
 * Handle i18n update
 * 
 * @param lng Langage code
 */
i18next.on('languageChanged', (lng) => {
    document.getElementById('apptitle').innerText = i18next.t('maintitle');
});

/**
 * Add event handler after document is loaded
 */
window.addEventListener('DOMContentLoaded', function(event) {
});