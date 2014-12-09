define(['./todo-model', 'dojo/router', 'dojo/on', 'xstyle/core/elemental'], function(model, router, on, elemental) {
	router.register('/:view', function(event){
		var view = event.params.view || 'all';
		model.tasksView = model[view];
	});
	router.startup();
	// use dojo's event handling
	elemental.on = on;
	return {
		focusInput: function(taskElement){
			taskElement.querySelector('.edit').focus();
		}
	};
});