package com.model;

import java.util.List;

import com.model.Address;
import com.model.EquipmentBookingRequest;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;


@Entity
public class User {
	@Id
	private int id;
//	private String username;
	private String name;
	private String email;
	private String password;
	private String phone;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Address address;
//	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name ="userId")
	private List<EquipmentBookingRequest> registeredEquipmentList ;
	public User() {
		// TODO Auto-generated constructor stub
		
		
	}
//	public User(String username, String name, String email, String password, String role, String phone, Address address,
//			List<EquipmentBooking> registeredEquipmentList) {
//		super();
//		this.username = username;
//		this.name = name;
//		this.email = email;
//		this.password = password;
//		this.role = role;
//		this.phone = phone;
//		this.address = address;
//		this.registeredEquipmentList = registeredEquipmentList;
//	}
	
	public int getId() {
		return id;
	}
	public User(int uid,String name, String email, String password,  String phone,Address address,List<EquipmentBookingRequest> registeredEquipmentList ){
	super();
	this.id=uid;
//	this.username = username;
	this.name = name;
	this.email = email;
	this.password = password;
	this.phone = phone;
	this.address=address;
	this.registeredEquipmentList = registeredEquipmentList;
}
	public void setId(int id) {
		this.id = id;
	}
//	public String getUsername() {
//		return username;
//	}
//	public void setUsername(String username) {
//		this.username = username;
//	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public List<EquipmentBookingRequest> getRegisteredEquipmentList() {
		return registeredEquipmentList;
	}
	public void setRegisteredEquipmentList(List<EquipmentBookingRequest> registeredEquipmentList) {
		this.registeredEquipmentList = registeredEquipmentList;
	}
//	@Override
//	public String toString() {
//		return "User [id=" + id + ", username=" + username + ", name=" + name + ", email=" + email + ", password="
//				+ password + ", role=" + role + ", phone=" + phone + ", address=" + address
//				+ ", registeredEquipmentList=" + registeredEquipmentList + "]";
//	}
    
	
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password="
				+ password  + ", phone=" + phone + "]";
	}
	
	
}
