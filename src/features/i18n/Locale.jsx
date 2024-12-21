import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const onChangeLanguage = useCallback(
    (lang) => {
      i18n.changeLanguage(lang);
      setSelectedLang(lang);
    },
    [i18n]
  );

  return (
    <select
      className="rounded-lg bg-black text-white cursor-pointer focus:border-none transition duration-200"
      value={selectedLang}
      onChange={(e) => onChangeLanguage(e.target.value)}
    >
      <option value="en" className='cursor-pointer'>EN</option>
      <option value="ru" className='cursor-pointer'>РУ</option>
    </select>
  );
};

export default LanguageSwitcher;
