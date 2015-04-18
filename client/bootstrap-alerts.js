Template.bootstrap-alerts.helpers({
  alerts: function () {
    return Alerts.collection.find();
  },
});

Template.bootstrap-alert.onRendered(function () {
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
          Alerts.removeById(alert._id);
        });
      }, alert.options.autoHide);
    }
  });
});

// Show icons
Template.bootstrap-alert.helpers({
  alertImage: function(){
    var m = this.mode;
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
  },
  topOrBottom: function () {
    return (this.options.position.indexOf("top") > -1) ? 'bs-alerts-top' : 'bs-alerts-top';
  }
});

