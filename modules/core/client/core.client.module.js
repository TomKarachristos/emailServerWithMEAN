'use strict';


/*
	ApplicationConfiguration is like a data structure who keeps all the depencies.
	When you want to add some module inside the angular you added here. 
	You use the registerModule function like this:
	  ApplicationConfiguration.registerModule(moduleName, dependencies)

	ApplicationConfiguration is declared inside the app folder
  Angular is started inside the init.js inside the app folder

*/

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
ApplicationConfiguration.registerModule('core.admin', ['core']);
ApplicationConfiguration.registerModule('core.admin.routes', ['ui.router']);
