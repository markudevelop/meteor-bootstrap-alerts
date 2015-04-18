Template.bootstrapAlerts.helpers({
  alerts: function () {
    return Alerts.collection.find();
  },
  topOrBottom: function () {
    return (Alerts.Options.position.indexOf("top") > -1) ? 'bs-alerts-top' : 'bs-alerts-bottom';
  }
});

Template.bootstrapAlert.onRendered(function () {
  var alert = this.data;
  var $node = $(this.firstNode);
  
  Meteor.defer(function () {
    Alerts.collection.update(alert._id, {
      $set: { seen: true }
    });
  });
  
  $node.removeClass('hide').hide().fadeIn(alert.options.fadeIn, function () {
  
    if (alert.options.autoHide) {
      Meteor.setTimeout(function () {
        $node.fadeOut(alert.options.fadeOut, function(){
          Alerts.clear(alert._id);
        });
      }, alert.options.autoHide);
    }
  });
});

// Show icons
Template.bootstrapAlert.helpers({
  alertImage: function(){
    var m = this.type;
    switch (m)
    {
      case 'danger':
        return {icon: 'glyphicon glyphicon-exclamation-sign', label:'Error:'};
        case 'success':
        return {icon: 'glyphicon glyphicon-ok-sign', label:'Success:'};
        case 'info':
        return {icon: 'glyphicon glyphicon-info-sign', label:'Info:'};
        case 'warning':
        return {icon: 'glyphicon glyphicon-alert', label:'Warning:'};
        default:
        return {icon: 'glyphicon glyphicon-exclamation-sign', label:'Error:'};
    } 
  }
});

