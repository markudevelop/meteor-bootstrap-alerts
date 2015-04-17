if (typeof Alerts === "undefined") {
  Alerts = {};
}

Alerts = {
     // Default options. Can be overwritten
    Options: {
        // Show Halflings or Font Awesome (Soon)
        showIcons: true,
		
        // Button with cross icon to hide (close) alert
        dismissable: true,
		
        // CSS classes to be appended on each alert DIV (use space for separator)
        classes: '',
		
        // Hide alert after delay in ms or false
        autoHide: true
		
        // Time in ms before alert fully appears
        fadeIn: 200,
		
        // If autoHide enabled then fadeOut is time in ms before alert disappears 
        fadeOut: 5000,
		
        // Maximum amount of alerts displayed at once
        alertsLimit : 3,

		// Allow html in alerts
        html: false
    },

    // Add an alert
    // message (String) Text to display.
    // mode (String) One of bootstrap alerts types: success, info, warning, danger
    // options (Object) Options if required to override some of default ones.
    // See Alerts.defaultOptions for all values.
	 
    add: function (message, mode) {
        mode = mode || 'danger';
        var options = Alerts.Options;

        // Handle alertsLimit
        var count = Alerts.collection.find({}).count();

        if (count >= options.alertsLimit) {
            Alerts.collection.find({}, {
                sort : {created: -1},
                skip : options.alertsLimit - 1
            }).forEach(function(row) {
                    Alerts.collection.remove(row._id);
                });
        }
        Alerts.collection.insert({message: message, mode: mode, options: options, seen: false, created: +new Date()});
    },

    // Clear seen errors, useful after page navigation
    clear: function () {
        Alerts.collection.remove({ seen: true });
    },

	// Remove specific error
    removeById: function (id) {
        Alerts.collection.remove(id);
    },

    collection = new Meteor.Collection(null)
};

// Clear message after router navigation IronRouter/FlowRouter
Meteor.startup(function () {
    if (typeof Iron !== 'undefined' && typeof Router !== 'undefined') {
        Router.onBeforeAction(function () {
            Alerts.collection.clear();
            this.next();
        });
    }
    if (typeof FlowRouter !== 'undefined') {
        FlowRouter.middleware(function (path, next) {
            Alerts.collection.clear();
            next();
        });
    }
});
