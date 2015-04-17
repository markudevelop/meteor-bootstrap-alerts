Package.describe({
  name: 'voidale:bootstrap-alerts',
  version: '0.1.0',
  summary: 'Bootstrap styled alerts with halflings',
  git: 'https://github.com/voidale/bootstrap-alerts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');  

  api.use(['templating'], 'client');

  //js
  api.addFiles('client/alerts.js', 'client');
  
  //templates
  api.addFiles('client/alerts-template.html', 'client'); 
  api.addFiles('client/alerts-template.js', 'client');
  
  //object
  if(api.export) {
    api.export('Alerts', 'client')
  }
});
