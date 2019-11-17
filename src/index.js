import angular from 'angular';
import AppComponent from './app';

import './css/base.css';
import './css/todo.css';
import TodoComponent from './app/todo';

angular.module('app', [])
.component('app', AppComponent)
.component('todo', TodoComponent);

angular.bootstrap(
  document.body,
  ['app']
)