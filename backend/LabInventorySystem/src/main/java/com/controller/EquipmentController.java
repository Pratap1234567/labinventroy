package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.model.Equipment;
import com.service.EquipmentService;

@RestController
@CrossOrigin
public class EquipmentController {
	
	@Autowired
	private EquipmentService equipmentService;
	
	//this method is used for getting all equipment available in inventory
	@GetMapping(value="getAllEquipment")
	public List<Equipment> getAllEquipment(){
		return equipmentService.getAllEquipment();
	}
	
	//this method is used for getting equipment by category
	@GetMapping(value="getAllEquipmentByCategory/{category}")
	public List<Equipment> getAllEquipmentByCategory(@PathVariable ("category") String category){
		return equipmentService.getAllEquipmentByCategory(category);
	}
}
