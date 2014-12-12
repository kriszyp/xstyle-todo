define(['./todo-model', 'dojo/router'], function(model, router) {
	// Setup the navigation router
	router.register('/:view', function(event){
		var view = event.params.view || 'all';
		model.tasksView = model[view];
	});
	router.startup();

	return {
		focusInput: function(taskElement){
			// focus on the input when we go into edit mode
			taskElement.querySelector('.edit').focus();
		}
	};
});