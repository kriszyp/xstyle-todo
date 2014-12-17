define(['dstore/Memory', 'dstore/Trackable'], function(Memory, Trackable){
	// Create a trackable memory store to hold the collection of tasks.
	// We start it with some sample data.
	var tasks = new (Memory.createSubclass(Trackable))({data:[
		{id: 'xstyle', title: 'Try out xstyle', completed: false},
		{id: 'dstore', title: 'Learn about dstore', completed: false}
	]});
	
	// Filtered collections for the different views
	var activeTasks = tasks.filter({completed: false});
	var completedTasks = tasks.filter({completed: true});

	// the model object that is accessed by the xstyle template/stylesheet
	var model = {
		tasks: tasks,
		tasksView: tasks,
		all: tasks,
		completed: completedTasks,
		active: activeTasks,
		newItem: '',
		addItem: function(event){
			event.preventDefault(); // don't submit the form
			tasks.add({title: model.newItem, completed: false});
			// reset the new item textbox
			model.newItem = '';
		},
		clearCompleted: function(){
			completedTasks.forEach(function(task){
				tasks.remove(task.id);
			});
		},
		completeAll: function(element){
			var completed = element.checked;
			tasks.forEach(function(task){
				task.completed = completed;
				tasks.put(task);
			});
		},
		destroy: function(item){
			tasks.remove(item.id);
		},
		todoCount: 2,
		completedCount: 0
	};

	// listen for any changes to the data and update the data totals
	tasks.on('add,update,delete', function(){
		activeTasks.fetch().totalLength.then(function(totalLength){
			model.todoCount = totalLength;
		});
		completedTasks.fetch().totalLength.then(function(totalLength){
			model.completedCount = totalLength;
		});
	});

	return model;
});