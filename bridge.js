const locales = require("./locales");
/* auto generated file, do not touch */
const i18n = {
  resources: {
    en: {
      translation: require("./bridge/en/en.json"),
    },
  },
};

const availableLanguages = Object.keys(i18n.resources).reduce(
  (langs, langCode) => ({
    ...langs,
    [langCode]: {
      locale: langCode,
      name: locales[langCode].nativeName,
    },
  }),
  {}
);

module.exports = { i18n, availableLanguages };
