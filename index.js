const locales = require("./locales");
/* auto generated file, do not touch */
const i18n = {
  resources: {
    es: {
      translation: require("./languages/es/es.json"),
    },

    kr: {
      translation: require("./languages/kr/kr.json"),
    },
    cn: {
      translation: require("./languages/cn/cn.json"),
    },
    nl: {
      translation: require("./languages/nkl/nkl.json"),
    },
    ru: {
      translation: require("./languages/ru/ru.json"),
    },
    en: {
      translation: require("./languages/en/en.json"),
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
