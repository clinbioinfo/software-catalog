Template.ProjectDetails.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('projects');
	});

	// Session.set('newAnnotation', false);
	// Session.set('newDescription', false);
	// Session.set('newComment', false);
});

Template.ProjectDetails.helpers({
	project: () => {

		var id = FlowRouter.getParam('id');
		// alert(id);

		var currentProject = Projects.findOne({uuid:id});

		Session.set('currentProject', currentProject);
		// console.log("basename of current project is " + currentProject.basename);

		return currentProject;
	}
});

Template.ProjectDetails.events({
	'click #newAnnotationButton'(event){

		event.preventDefault();

		/* Open the New Annotation form */
		Session.set('newAnnotation', true);

		/* Close the other forms */
		Session.set('newDescription', false);
		Session.set('newComment', false);

	},
	'click #newDescriptionButton'(event){

		event.preventDefault();

		/* Open the New Description form */
		Session.set('newDescription', true);	

		/* Close the other forms */
		Session.set('newAnnotation', false);
		Session.set('newComment', false);
	},
	'click #newCommentButton'(event, template){

		event.preventDefault();

		/* Open the New Comment form */
		Session.set('newComment', true);	

		/* Close the other forms */
		Session.set('newDescription', false);
		Session.set('newAnnotation', false);

	}
});