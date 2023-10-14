package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Equipment;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Integer>{
    
//    @Query("select equip from Equipment where equip.category like concat('%',:cate,'%')")
	public List<Equipment> getAllEquipmentByCategory(String cate);

}
