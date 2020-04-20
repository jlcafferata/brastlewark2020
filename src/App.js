import React, {useEffect} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {withLocalize} from 'react-localize-redux';
import {ToastContainer} from 'react-toastify';

import Wrapper from './components/wrapper/Wrapper';
// Import Translations
import englishTranslations from './translations/en.translations.json';
import frenchTranslations from './translations/fr.translations.json';
import 'react-toastify/dist/ReactToastify.min.css';
import './styles/responsive.css';
import './styles/style.css';
import './App.css';
import franceImg from './utils/images/FR.svg';
import englishImg from './utils/images/GB.svg';

const App = ({initialize, addTranslationForLanguage}) => {
  useEffect(
    () => {
      initialize({
        languages: [
          {name: 'English', code: 'en', src: englishImg},
          {name: 'French', code: 'fr', src: franceImg},
        ],
        translation: englishTranslations,
        options: {
          renderToStaticMarkup,
        },
      });
      addTranslationForLanguage(frenchTranslations, 'fr');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Wrapper />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
};

export default withLocalize(App);
