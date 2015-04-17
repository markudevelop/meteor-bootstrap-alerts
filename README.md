# voidale:bootstrap-alerts

Display alerts using bootstrap 3 styling and Halflings icons. Auto cleared with IronRouter/FlowRouter on navigation.

# Demo

```
soon
```

# Dependencies

the latest bootstrap package

```
meteor add twbs:bootstrap
```

# Installation
```
meteor add voidale:bootstrap-alerts
```
# Default Options 

```
Options: {
// Show Halflings or Font Awesome (Soon)
showIcons: true,
	
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

// Allow html in alerts
html: false
}
```

# Adding Alerts

```
  Alert.add(msg, type, skip); or Alert.type(msg, skip) (Soon) 

```

Types: success, info, warning, danger

msg can be text or an Error object.  If Error object it will display Error.reason

skip optional: true if you want to show message after redirect
# Clearing Alerts

Clear all alerts
```
  Alerts.clear()
```
Clear specific alerts
```
  Alerts.removeById(id)
```

# Template helper for alerts container

```
 {{> alerts}}
```

# License
MIT
