package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.User;
import com.service.RequestService;
import com.service.UserService;

@RestController
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private RequestService requestService;
	
	//for register a new user
	@PostMapping(value="register")
	public User registerUser(@RequestBody User user) throws Exception{
		return userService.registerUser(user);
		
	}
	
	//for login we are sending user object to store it in front end so that we donot have to get user again
	@GetMapping(value="login/{uid}/{password}")
	public ResponseEntity<?> LoginUser(@PathVariable ("uid") int uid ,@PathVariable ("password") String password){
//		 User user =  us.checkCredential(uid, password);
//		 if(user!=null) {
//			 return ResponseEntity.ok(user);
//		 }
//		 else {
//			 return ResponseEntity.badRequest().body("you have entered wrong id or password");
//		 }
		
		return userService.checkCredential(uid, password);
		
	}
	
	//this method will update user address and its profile
	@PutMapping(value="/updateProfile")
	public ResponseEntity<String> updateUser(@RequestBody User user ) throws Exception {
		return userService.updateUser(user);
	
		
	}
	
	//this method will give user by its id
	@GetMapping(value="getUserById/{uid}")
	public ResponseEntity<?> getUserById(@PathVariable ("uid") int uid){
		return  userService.getUserById(uid);
		
		
	}
	
	//for changing password
	@PutMapping(value="updatePassword")
	public ResponseEntity<Object> updatePassword(@RequestBody User user) {
		String message = userService.updatePassword(user);
		return ResponseEntity.ok().body("{\"message\":\""+message+"\"}");
	}
	
	

	
}
