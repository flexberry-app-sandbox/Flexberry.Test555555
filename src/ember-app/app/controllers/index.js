import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test555555.caption'),
          title: i18n.t('forms.application.sitemap.test555555.title'),
          children: [{
            link: 'i-i-s-test555555-new-class1-l',
            caption: i18n.t('forms.application.sitemap.test555555.i-i-s-test555555-new-class1-l.caption'),
            title: i18n.t('forms.application.sitemap.test555555.i-i-s-test555555-new-class1-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-test555555-new-class2-l',
            caption: i18n.t('forms.application.sitemap.test555555.i-i-s-test555555-new-class2-l.caption'),
            title: i18n.t('forms.application.sitemap.test555555.i-i-s-test555555-new-class2-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})