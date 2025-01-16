import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  newClass1: DS.belongsTo('i-i-s-test555555-new-class1', { inverse: null, async: false })
});

export let ValidationRules = {
  newClass1: {
    descriptionKey: 'models.i-i-s-test555555-new-class2.validations.newClass1.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass2E', 'i-i-s-test555555-new-class2', {
    newClass1: belongsTo('i-i-s-test555555-new-class1', 'New class1', {

    }, { index: 0 })
  });

  modelClass.defineProjection('NewClass2L', 'i-i-s-test555555-new-class2', {
    
  });
};
