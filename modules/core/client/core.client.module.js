'use strict';

// Use Applicaion configuration module to register a new module
// ApplicationConfiguration is declared inside the app folder
ApplicationConfiguration.registerModule('core');
ApplicationConfiguration.registerModule('core.admin', ['core']);
ApplicationConfiguration.registerModule('core.admin.routes', ['ui.router']);
