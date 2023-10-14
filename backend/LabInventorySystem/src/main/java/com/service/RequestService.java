package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.model.EquipmentBookingRequest;
import java.util.*;
import com.repository.RequestRepository;

@Service
public class RequestService{
	
	@Autowired
	RequestRepository requestRepository;
	
//	public List<EquipmentBookingRequest> getAllRequestByUserId(int userid){
//		return requestRepository.getAllEquipmentBookingRequestByUserId(userid);
//	}
	
	 
}