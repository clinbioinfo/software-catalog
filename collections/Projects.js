import {Meteor} from 'meteor/mongo';


Projects = new Mongo.Collection('projects');

Tracker.autorun(() => {

	Meteor.subscribe('projects');
});



Projects.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc, fieldNames, modified){
		return !!userId;
	}
});

ScreenshotsSchema = new SimpleSchema({
	id : {
		type : String,
		label : "ID"
	},
	caption : {
		type : String,
		label : 'Caption',
		optional : true
	},
	desc : {
		type : String,
		label : 'Description',
		optional : true
	},
	path : {
		type : String,
		label : 'File path'
	}
});

VideoTutorialsSchema = new SimpleSchema({
	id : {
		type : String,
		label : "ID"
	},
	caption : {
		type : String,
		label : 'Caption',
		optional : true
	},
	desc : {
		type : String,
		label : 'Description',
		optional : true
	},
	path : {
		type : String,
		label : 'File path'
	}
});

LinksSchema = new SimpleSchema({
	label : {
		type : String,
		label : "Label"
	},
	url : {
		type : String,
		label : 'URL'
	},
	type : {
		type : String,
		label : 'Type',
		optional : true
	},
	desc : {
		type : String,
		label : 'Description',
		optional : true
	}
});


PointOfContactsSchema = new SimpleSchema({
	"first_name" : {
		type : String,
		label : "First name"
	},
	"last_name" : {
		type : String,
		label : "Last name"
	},
	"email" : {
		type : String,
		label : 'Email'
	},
	"role" : {
		type : String,
		label : 'Role',
		optional : true
	}
});


AuthorizationSchemesSchema = new SimpleSchema({
	"type" : {
		type : String,
		label : "Authorization Type"
	},
	"desc" : {
		type : String,
		label : "Authorization Description"
	}
});

ProjectsSchema = new SimpleSchema({
	"uuid": {
		type : String,
		label : 'Unique Identifier'
	},
	"name": {
		type : String,
		label : 'Name'
	},
	"version": {
		type : String,
		label : 'Version'
	},
	"desc": {
		type : String,
		label : 'Description'
	},
	"logo_path": {
		type: String,
		optional: true
	},
	"screenshots" : {
		type : [ScreenshotsSchema],
		optional : true
	},
	"video_tutorials" : {
		type : [VideoTutorialsSchema],
		optional : true
	},
	"intended_usage" : {
		type : [String],
		optional : true
	},
	"tags" : {
		type : [String],
		optional : true
	},
	"authorization_scheme" : {
		type : AuthorizationSchemesSchema,
		optional: true
	},
	"links" : {
		type : [LinksSchema],
		optional : true
	},
	"points_of_contact" : {
		type : [PointOfContactsSchema],
		optional : true
	}
});

Projects.attachSchema( ProjectsSchema );