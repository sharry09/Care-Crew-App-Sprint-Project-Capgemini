package com.healthassist.service;

import java.util.Optional;

import com.healthassist.entities.Orders;
import com.healthassist.exception.OrderHistoryUnavailableException;

public interface OrderService {
	//Adding Order Details
	public void addOrders(Orders orders);
	
	//view order History
    public Optional<Orders> viewOrderHistory(int orderId) throws OrderHistoryUnavailableException;
    
    //Deliver Orders
    public String deliverOrders(int orderId,String medicineName);
}
