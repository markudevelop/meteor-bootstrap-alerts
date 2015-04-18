if (typeof Alerts === "undefined") {
  Alerts = {};
}

Alerts = {
     // Default options. Can be overwritten
    Options: {
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
    },
	
	info: function (msg, options, skip) {
	  addAlert(msg, 'info', options, skip);
	},
	
	error: function (msg, options, skip) {
	  addAlert(msg, 'danger', options, skip);
	},
	
	success: function (msg, options, skip) {
	  addAlert(msg, 'success', options, skip);
	},
	
	warning: function (msg, options, skip) {
	  addAlert(msg, 'warning', options, skip);
	},
	
    // Clear Seen Alerts
    clearAll: function () {
        Alerts.collection.remove({ seen: true, skip: false });
    },

	// Remove Specific Alert
    clear: function (id) {
        Alerts.collection.remove(id);
    },

	// Client Side Collection
    collection: new Meteor.Collection(null)
};

// msg (String)
// type (String) One of bootstrap alerts types: success, info, warning, danger
// options (Object) if you're looking to overwrite the options. not globally.
// skip (Boolean) true if to show after route navigation for specific alert.
var addAlert = function (msg, type, options, skip) {
  var type = type || 'danger';
  var options = options || Alerts.Options;
  var skip = skip || false;

  // Handle alertsLimit
  var count = Alerts.collection.find({}).count();

  if (count >= options.alertsLimit) {
    Alerts.collection.find({}, {
      sort: {
        created: -1
      },
      skip: options.alertsLimit - 1
    }).forEach(function (row) {
      Alerts.collection.remove(row._id);
    });
  }
  Alerts.collection.insert({
    message: msg,
    mode: mode,
    options: options,
    seen: false,
    skip: skip,
    created: +new Date()
  });
}

// Clear messages after router navigation IronRouter/FlowRouter
Meteor.startup(function () {
    if (typeof Iron !== 'undefined' && typeof Router !== 'undefined' && Alerts.clearRouter) {
        Router.onBeforeAction(function () {
            Alerts.clearAll();
            this.next();
        });
    }
    if (typeof FlowRouter !== 'undefined' && Alerts.clearRouter) {
        FlowRouter.middleware(function (path, next) {
            Alerts.clearAll();
            next();
        });
    }
});
