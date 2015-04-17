Package.describe({
  name: 'voidale:bootstrap-alerts',
  version: '0.1.5',
  summary: 'Bootstrap styled alerts with halflings',
  git: 'https://github.com/voidale/bootstrap-alerts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');  

  api.use(['templating', 'mongo', 'jquery'], ['client']);

  api.addFiles([
    'client/alerts.js',
    'client/alerts-template.html',
    'client/alerts-template.js',
    'client/alerts-template.css'
  ], 'client');
  
  api.export('Alerts', ['client']);
});
