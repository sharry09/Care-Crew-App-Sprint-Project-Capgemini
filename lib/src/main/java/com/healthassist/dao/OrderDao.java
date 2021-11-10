package com.healthassist.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.Orders;


@Repository
public interface OrderDao extends JpaRepository<Orders, Integer>{
	
	@Query(value="Select s.orderId From Orders s")
	public Optional<Orders> getOrderHistory(int orderId);

	public default String deliverOrders(int orderId, String medicineName) {
		String str="";
		if(orderId !=0) {
			if(medicineName.equals("DOLO") || medicineName.equals("Acyclovir") || medicineName.equals("Amikacin") || medicineName.equals("Amoxicillin") 
					 || medicineName.equals("Calcium") || medicineName.equals("Dapsone") || medicineName.equals("Enalapril")) {
				str="Medicine delivery success for Order with ID " + orderId;
			}
			else {
				str="Medicine unavailable for Order with ID " + orderId;
			}
		}
		else {
			str="Order ID invalid";
		}
		return str;
	}
}
