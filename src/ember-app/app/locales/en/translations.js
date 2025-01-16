import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...',
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu',
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings',
          },
          'show-menu': {
            caption: 'Show menu',
          },
          'hide-menu': {
            caption: 'Hide menu',
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language',
          },
        },
        login: {
          caption: 'Login',
        },
        logout: {
          caption: 'Logout',
        },
      },

      footer: {
        'application-name': 'Test555555',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Test555555',
          title: 'Test555555',
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed',
    },
    'i-i-s-test555555-new-class1-l': IISTest555555NewClass1LForm,
    'i-i-s-test555555-new-class2-l': IISTest555555NewClass2LForm,
    'i-i-s-test555555-new-class1-e': IISTest555555NewClass1EForm,
    'i-i-s-test555555-new-class2-e': IISTest555555NewClass2EForm,
  },

});

export default translations;
