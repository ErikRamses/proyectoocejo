Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                alert('Usuario o contraseña incorrectos.');
            } else {
                Router.go('/');
            }
        });
    },
    'click #facebook-login': function(event) {
        event.preventDefault();
        Meteor.loginWithFacebook({ requestPermissions: ['email']}, function(err){
            if (err) {
                throw new Meteor.Error(err);
            }
            else
            {
              Router.go('/');      
            }
        });
    }
});