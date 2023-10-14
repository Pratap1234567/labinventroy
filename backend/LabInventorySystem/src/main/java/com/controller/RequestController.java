package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.EquipmentBookingRequest;
import com.service.UserService;

@RestController
@CrossOrigin
public class RequestController {
	
	
	@Autowired
	private UserService userService;
	
	//for storing request
	@PutMapping(value="/equipmentBooking/{uid}")
	public ResponseEntity<Object> handleRequest(@PathVariable ("uid") int uid, @RequestBody EquipmentBookingRequest equipmentRequest) {
		String message = userService.handleRequest(uid,equipmentRequest);
		return ResponseEntity.ok().body("{\"message\":\""+message+"\"}");
	}
	
	
}
