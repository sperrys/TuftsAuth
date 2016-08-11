
var ldap = require('ldapjs');
var base = "ou=people,dc=tufts,dc=edu";


module.exports = function(tuftsauth) { 

	this.auth = function(login, password) {
	
    	var filter = "uid="+login; 
    	var success = false;
   
    	var parameters = {
    		filter: filter,
    		scope: 'sub',
    	};
    
    	var options = {
    		url: 'ldaps://ldap.tufts.edu:',
    		reconnect: true
    	};

    	var client = ldap.createClient(options);
    
    	client.search(base, parameters, function(err, result) {    
    		assert.ifError(err);
			
    		result.on('searchEntry', function(entry) {
    			dn = entry.object.dn;
    			console.log("dn", dn);
        
    			result.on('end', function(bind) {
    				client.bind(dn, secret, function(err, solution) {    
    					if(err) {
                    		res.send("Whoops, Error with your password!")
                		}
						else {
                    		return true; 
						}         
					});
				});
			});
		});
	}
}