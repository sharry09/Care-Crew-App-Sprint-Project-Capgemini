package com.healthassist.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.healthassist.dao.OrderDao;
import com.healthassist.entities.Orders;
import com.healthassist.exception.OrderHistoryUnavailableException;
@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
    private OrderDao orderDao=null;
	
	@Override
	public void addOrders(Orders orders) {
		orderDao.save(orders);
	}
	
	@Override
	public Optional<Orders> viewOrderHistory(int orderId)throws OrderHistoryUnavailableException {
		if(orderDao.existsById(orderId)) {
		return orderDao.findById(orderId);
	}
		throw new OrderHistoryUnavailableException(orderId+" history is  unavailabe !");
	}

	@Override
	public String deliverOrders(int orderId, String medicineName) {
		
		return orderDao.deliverOrders(orderId, medicineName);
	}
	

}
