package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.EquipmentBookingRequest;
import java.util.List;

@Repository
public interface RequestRepository extends JpaRepository<EquipmentBookingRequest, Integer>{

//	List<EquipmentBookingRequest> getAllEquipmentBookingRequestByUserId(int userid);

}
