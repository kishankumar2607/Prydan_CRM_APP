import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
import en from '../locales/en.json';
import es from '../locales/en.json';

I18n.fallbacks = true;

I18n.translations = {
  en,
  es
};
const currentLocale = I18n.currentLocale();

export const isRTL = currentLocale.indexOf('en') === 0 || currentLocale.indexOf('es') === 0;

ReactNative.I18nManager.allowRTL(isRTL);

export function strings(name, params = {}) {
  return I18n.translations(name, params);
}

export default I18n;
