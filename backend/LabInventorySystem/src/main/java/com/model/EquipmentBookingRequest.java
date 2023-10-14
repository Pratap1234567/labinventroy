package com.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class EquipmentBookingRequest {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int requestId;
//	private int userId;
	private String userName;
	private int equipmentId;
	private String equipmentName;
	private int quantityNeeded;
	private String status;
	
	
	public EquipmentBookingRequest() {
		// TODO Auto-generated constructor stub
	}


	public EquipmentBookingRequest(int userId, String userName, int equipmentId, String equipmentName,
			String status,int quantityNeeded) {
		super();
		
//		this.userId = userId;
		this.userName = userName;
		this.equipmentId = equipmentId;
		this.equipmentName = equipmentName;
		this.quantityNeeded = quantityNeeded;
		this.status = status;
	}


	public int getId() {
		return requestId;
	}


	public void setId(int id) {
		this.requestId = id;
	}


//	public int getUserId() {
//		return userId;
//	}


//	public void setUserId(int userId) {
//		this.userId = userId;
//	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public int getEquipmentId() {
		return equipmentId;
	}


	public void setEquipmentId(int equipmentId) {
		this.equipmentId = equipmentId;
	}


	public String getEquipmentName() {
		return equipmentName;
	}


	public void setEquipmentName(String equipmentName) {
		this.equipmentName = equipmentName;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}
    
	

	public int getRequestId() {
		return requestId;
	}


	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}


	public int getQuantityNeeded() {
		return quantityNeeded;
	}


	public void setQuantityNeeded(int quantityNeeded) {
		this.quantityNeeded = quantityNeeded;
	}


	@Override
	public String toString() {
		return "EquipmentBookingRequest [requestId=" + requestId + ", userName=" + userName + ", equipmentId="
				+ equipmentId + ", equipmentName=" + equipmentName + ", quantityNeeded=" + quantityNeeded + ", status="
				+ status + "]";
	}


    


	
	

}
