Template.ProjectsDashboard.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('projects');
	});

	Session.set('currentProject', null);
});

Template.ProjectsDashboard.helpers({
	projects: () => {
		console.log("A1");
		const project_list = Projects.find({}, {'name': 1, 'logo_path' : 1, 'desc': 1, 'uuid': 1});
		console.log("Projects are: " + project_list);
		return project_list;
	},
  	projectCount() {
  		console.log("A2");
    	const count = Projects.find({}).count();
    	console.log("Count is :" + count);
    	return count;
  	},
});


Template.ProjectsDashboard.events({
	'click .new-project': function (){
		Session.set('newProject', true);
	}
});
