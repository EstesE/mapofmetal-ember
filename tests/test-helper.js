import Application from 'mapofmetal-ember/app';
import config from 'mapofmetal-ember/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
