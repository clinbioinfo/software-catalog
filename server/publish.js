import {Meteor} from 'meteor/mongo'

Meteor.publish('projects', function (){
	return Projects.find({});
})