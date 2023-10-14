package com.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Equipment {
	   @Id
	   @GeneratedValue(strategy=GenerationType.IDENTITY)
	   private int id;
	   private String name;
	   private String category;
	   private int quantity;
	   private String imageUrl;
	   
	   
	   
	   public Equipment() {
			super();
			// TODO Auto-generated constructor stub
		}
	
	
	
	  public Equipment(int id, String name, String category, int quantity,String imageUrl) {
			super();
			this.id = id;
			this.name = name;
			this.category = category;
			this.quantity = quantity;
			this.imageUrl=imageUrl;
	   }



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getCategory() {
		return category;
	}



	public void setCategory(String category) {
		this.category = category;
	}



	public int getQuantity() {
		return quantity;
	}



	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

   

	public String getImageUrl() {
		return imageUrl;
	}
    


	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}



	@Override
	public String toString() {
		return "Equipment [id=" + id + ", name=" + name + ", category=" + category + ", quantity=" + quantity + "]";
	}
	   
    
 
}
