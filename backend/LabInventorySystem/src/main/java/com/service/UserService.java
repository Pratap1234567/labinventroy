package com.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.model.EquipmentBookingRequest;
import com.model.User;
import com.repository.AddressRepository;
import com.repository.RequestRepository;
import com.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	RequestRepository requestRepository;
	
	@Autowired
	AddressRepository addressRepository;
	
	public User registerUser(User user) throws Exception{
		System.out.println(user);
		if(user==null ) {
			throw new Exception("user object should not be empty");
		}
		else {
			User u1 = userRepo.findByEmail(user.getEmail());
//			System.out.println(u1);
			Optional<User>  u2 = userRepo.findById(user.getId());
//			System.out.println(u2.isPresent());
			if(u2 .isPresent()  || u1!=null) {
				throw new Exception("User already exist");
			}
			else {
				return userRepo.save(user);
			}
		}
	}
	
	
	public ResponseEntity<?> getUserById(int uid) {
	
		Optional<User> op = userRepo.findById(uid);
		if(op.isPresent()) {
			User user= op.get();
			return ResponseEntity.ok(user);
		}
		else {
			return ResponseEntity.badRequest().body("user with this id not exist");
		}
	}
	

	
	public ResponseEntity<?>checkCredential(int uid,String password) {
		Optional<User> op = userRepo.findById(uid);
		if(op.isPresent()) {
			User user = op.get();
			if(user.getPassword().equals(password)) {
				return ResponseEntity.ok(user);
			}
			else {
				return ResponseEntity.badRequest().body("invalid credential");
			}
		}
		else {
			return ResponseEntity.badRequest().body(" user does not exist");
		}
	}

	public String handleRequest(int uid,EquipmentBookingRequest req) {
		// TODO Auto-generated method stub
		 try {
			 User user = userRepo.getById(uid);
			 if(user !=null) {
				 List<EquipmentBookingRequest> equipmentBookingRequestList = user.getRegisteredEquipmentList();
				 if(equipmentBookingRequestList==null) {
					 equipmentBookingRequestList = new ArrayList<>();
				 }
				 equipmentBookingRequestList.add(req);
				 user.setRegisteredEquipmentList(equipmentBookingRequestList);
				 requestRepository.save(req);
				 userRepo.save(user);
			 }
			 else {
				 return "user does not exist";
			 }
		 }
		 catch(Exception e){
			 return "exception occur";
		 }
		return "user found";
		 
	}
    
	public ResponseEntity<String> updateUser(User tempUser) throws Exception {
		
		User user = userRepo.getById(tempUser.getId());
		 if(user !=null) {
			 user.setName(tempUser.getName());
			 user.setPhone(tempUser.getPhone());
			 user.setPassword(tempUser.getPassword());
			 System.out.println("in update service ");
			 System.out.println(tempUser.getAddress());
			 user.setAddress(tempUser.getAddress());
			 userRepo.save(user);
			 return ResponseEntity.ok().body("{\"message\":\"User Profile Updated Successfully\"}");
	
		 }
		 else {
			 throw new Exception("user does not exist");
		 }
	
		
	} 
	
	public String updatePassword(User tempUser) {
		 User user = userRepo.getById(tempUser.getId());
		 if(user !=null) {
			 userRepo.save(tempUser);
			 return "user updated successfully";
		 }
		 else {
			 return "unable to change password";
		 }
		
	}
}
