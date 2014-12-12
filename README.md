This is a demonstration of the TodoMVC application built on xstyle and dstore, showing how expressive xstyle bindings can be used to define the presentation in conjunction with dstore data models.

## Installation

You can install the dependencies by running `bower install`

## Explanation

The main view, and starting point for this demonstration is the [todo.css](todo.css) xstyle stylesheet. This stylesheet uses [xstyle](https://github.com/kriszyp/xstyle) extensions to load the model and controller modules, create elements, and bind the data sources to the elements and their style and presentation, as well as defining the event handlers.

The [data model](todo-model.js) is based on [dstore](https://github.com/SitePen/dstore) collections, and uses different filtered collections for the "Completed" and "Active" views, as well as the the store APIs for creating and updating objects. The [controller](todo-controller.js) uses dojo/router for handling navigation.