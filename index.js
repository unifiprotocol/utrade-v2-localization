const locales = require("./locales");

const bridgeTranslations = {
  en: {
    translation: require('./bridge/en/en.json')
  }
}

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
      translation: require("./languages/nl/nl.json"),
    },
    ru: {
      translation: require("./languages/ru/ru.json"),
    },
    en: {
      translation: { ...require("./languages/en/en.json"), ...addAppPrefix('bridge', bridgeTranslations.en.translation) },
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

function addAppPrefix(appName, obj) {
  return Object.entries(obj).map(([key, value]) => ({ [`${appName}.${key}`]: value }))
}

module.exports = { i18n, availableLanguages };
