package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Equipment;
import com.repository.EquipmentRepository;

@Service
public class EquipmentService {
	
	@Autowired
	EquipmentRepository equipmentRepository;
	
	public List<Equipment> getAllEquipment(){
		return equipmentRepository.findAll();
	}

	//storing image 
	public String setImageUrl(int equipid, String imageUrl)  {
		// TODO Auto-generated method stub
	       System.out.println("in service ");
			Equipment equip1 = equipmentRepository.getById(equipid);
			if(equip1!=null)
			{
				equip1.setImageUrl(imageUrl);
				return "Image saved successfully";
			}
		   	return "Image does not saved successfullly";
         	
	
	}

	public Equipment setEquipment(Equipment equipment) {
		// TODO Auto-generated method stub
		equipmentRepository.save(equipment);
		return equipment;
	}

	public List<Equipment> getAllEquipmentByCategory(String category) {
		// TODO Auto-generated method stub
		return equipmentRepository.getAllEquipmentByCategory(category);
	}
}
