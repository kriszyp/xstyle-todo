define(['dstore/Memory', 'dstore/Trackable'], function(Memory, Trackable){
	var tasks = new (Memory.createSubclass(Trackable))({data:[
		{id:'one', title:'One', completed: false},
		{id:'two', title:'Two', completed: false},
		{id:'three', title:'Three', completed: false}
	]});
	var activeTasks = tasks.filter({completed: false});
	var completedTasks = tasks.filter({completed: true});
	var model = {
		tasks: tasks,
		tasksView: tasks,
		all: tasks,
		completed: completedTasks,
		active: activeTasks,
		newItem: '',
		addItem: function(event){
			event.preventDefault();// don't submit the form
			tasks.add({title: model.newItem, completed: false});
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
		todoCount: 3,
		completedCount: 0
	};
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