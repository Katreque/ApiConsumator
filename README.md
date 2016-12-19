# ApiConsumator
How to Consume an API with AngularJS 1.*

Using npm Aliv and proxy to consume my own API.

File Organization Pattern used >>>

```
app
 +- scripts
  +- views
   +- a_view.html
  +- controllers
   +- a_controller.js
   +- b_controller.js
   +- c_controller.js
  +- services
   +- a_service.js
   +- b_service.js
   +- c_service.js
  +- directives
   +- a-directive.js
  +- includes
   +- a_include.html
  +- models
   +- a_model.js
  +- managers  
   +- a_manager.js
  app.js
  app.config.js
  app.constant.js
  app.acessos.js
  
 +- styles
  +- style.css
  +- position.css // sempre criar layout para mobile primeiro
  +- events.css
  +- media_queries.css // sempre criar layout para mobile primeiro
 +- images
  +- logo.png
  
 index.html 
 
test
 +- unit
  +- controllers
   +- a_controller_test.js
  ... 
  +- app_test.js
 +- e2e
  +- carregamento_produtos_test.js

readme.md 
karma.conf.js 
protractor.conf.js
bower.json 
package.json
.gitignore
 ______ .idea
 ______ .vscode
 ______ node_modules
 ______ bower_components
```