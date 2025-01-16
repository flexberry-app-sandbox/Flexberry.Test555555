import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTest555555NewClass1LForm from './forms/i-i-s-test555555-new-class1-l';
import IISTest555555NewClass2LForm from './forms/i-i-s-test555555-new-class2-l';
import IISTest555555NewClass1EForm from './forms/i-i-s-test555555-new-class1-e';
import IISTest555555NewClass2EForm from './forms/i-i-s-test555555-new-class2-e';
import IISTest555555NewClass1Model from './models/i-i-s-test555555-new-class1';
import IISTest555555NewClass2Model from './models/i-i-s-test555555-new-class2';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test555555-new-class1': IISTest555555NewClass1Model,
    'i-i-s-test555555-new-class2': IISTest555555NewClass2Model,
  },

  'application-name': 'Test555555',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...',
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню',
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек',
          },
          'show-menu': {
            caption: 'Показать меню',
          },
          'hide-menu': {
            caption: 'Скрыть меню',
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык',
          },
        },
        login: {
          caption: 'Вход',
        },
        logout: {
          caption: 'Выход',
        },
      },

      footer: {
        'application-name': 'Test555555',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Test555555',
          title: 'Test555555',
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
        index: {
          caption: 'Главная',
          title: '',
        },
        test555555: {
          caption: 'Test555555',
          title: 'Test555555',
          'i-i-s-test555555-new-class1-l': {
            caption: 'New class1',
            title: '',
          },
          'i-i-s-test555555-new-class2-l': {
            caption: 'New class2',
            title: '',
          },
        },
      },
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления',
    },
    'i-i-s-test555555-new-class1-l': IISTest555555NewClass1LForm,
    'i-i-s-test555555-new-class2-l': IISTest555555NewClass2LForm,
    'i-i-s-test555555-new-class1-e': IISTest555555NewClass1EForm,
    'i-i-s-test555555-new-class2-e': IISTest555555NewClass2EForm,
  },

});

export default translations;
