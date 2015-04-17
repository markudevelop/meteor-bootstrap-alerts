# bootstrap-alerts

Display alerts using bootstrap 3 styling and Halflings icons. Auto cleared with IronRouter/FlowRouter on navigation.

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
Options: {

        showIcons: true,
        dismissable: true,
        classes: '',
        autoHide: false,
        fadeIn: 200,
        fadeOut: 600,
        alertsLimit : 5,
        html: false
    }
```

# Adding Alerts

```
  Alert.add(msg, type);

```

Types: success, info, warning, danger

msg can be text or an Error object.  If Error object it will display Error.reason

# Clearing Alerts

```
  Alerts.clear()
```

# Handlebars

```
 {{> alerts}}
```

# License
MIT
