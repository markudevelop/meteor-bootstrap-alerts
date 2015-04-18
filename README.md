# Simple Practical Bootstrap 3 Alerts

Display alerts using bootstrap 3 styling and Halflings icons

# Demo


http://bootstrap-alerts-voidale.meteor.com
````
Play around on demo:
show alerts:
Alerts.success('test'); <-- browser console
over write options for test:
Alerts.Options.autoHide = false; etc...
````

# Dependencies

the latest bootstrap package

```
meteor add twbs:bootstrap
```

# Installation
```
meteor add voidale:bootstrap-alerts
```
# Options 

```
// Show Halflings or Font Awesome (Soon)
showIcons: true,

// Position 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'
position: 'bottom-center', 

// Alert width
alertWidth: '250px',

// Button with cross icon to hide (close) alert
dismissable: true,

// CSS classes to be appended on each alert DIV (use space for separator)
classes: '',

// Hide alert after delay in ms or false
autoHide: true,

// Time in ms before alert fully appears
fadeIn: 200,

// If autoHide enabled then fadeOut is time in ms before alert disappears 
fadeOut: 8000,

// Maximum amount of alerts displayed at once
alertsLimit : 3,

// Clear alerts on page navigation
clearRouter: true
```
#Change config
On client side:
```
Meteor.startup(function () {
    Alerts.config({
        position: 'top-center',
        fadeOut: 2000
    });
});

```


# Adding Alerts

```
  Alerts.type(msg, skip, options);
```

type: success, info, warning, danger.
skip: true if you want to show message after redirect.
options: overwrite options for alert.

# Clearing Alerts

```
  Alerts.clearAll()
  Alerts.clear(id)
```

# Alerts template

```
 {{> bootstrapAlerts}}
```

# License
MIT
