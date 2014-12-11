This is a demonstration of the TodoMVC application built on xstyle and dstore. 

## Installation

You can install the dependencies by running `bower install`

## Explanation

The main view, and starting point for this demonstration is the [todo.css](todo.css) xstyle stylesheet. This stylesheet uses [xstyle](https://github.com/kriszyp/xstyle) extensions to load the model and controller modules, create elements, and bind the data sources to the elements, as well as wire up the event handlers.

The data model is based on [dstore](https://github.com/SitePen/dstore) collections, using different filtered collections for the "Completed" and "Active" views.