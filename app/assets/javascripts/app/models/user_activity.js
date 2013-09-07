app.models.UserActivity = Backbone.Model.extend({
  defaults: {
    "keypress": null
  }
});

var __UserActivity = new app.models.UserActivity;

// console.log(__UserActivity.get('keypress'));
// alert('testing');
// __UserActivity.set({ keypress : 10 });
// console.log(__UserActivity.get('keypress'));
// console.log(__UserActivity);