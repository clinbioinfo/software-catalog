if (Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('projects-dashboard');	
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');	
	});
}


FlowRouter.triggers.enter([function(context, redirect){
	if (! Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name : 'home',
	action(){
		if (Meteor.userId()){
			FlowRouter.go('projects-dashboard');
		}
		//GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/projects-dashboard', {
	name : 'projects-dashboard',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"ProjectsDashboard"});
	}
});

FlowRouter.route('/project-details/:id', {
	name : 'project-details',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"ProjectDetails"});
	}
});