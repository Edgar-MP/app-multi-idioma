import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";
import i18n from './i18n';

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  const { t } = useTranslation();
  return (
    <div className='a'>
      <button onClick={() => changeLanguage('cat')}>{t("cat")}</button>
      <button onClick={() => changeLanguage('es')}>{t("es")}</button>
      <button onClick={() => changeLanguage('en')}>{t("en")}</button>
      <button onClick={() => changeLanguage('eu')}>{t("eu")}</button>
      <h1>{t('Welcome to React')}</h1>
    </div>
  )
}

export default App;
