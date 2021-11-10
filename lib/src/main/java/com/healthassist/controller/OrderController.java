package com.healthassist.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthassist.entities.Orders;
import com.healthassist.exception.OrderHistoryUnavailableException;
import com.healthassist.service.OrderService;

@RestController
@RequestMapping(path="LIFELINE")
public class OrderController {
	@Autowired
	private OrderService service=null;

	//	 http://localhost:9090/LIFELINE-api/LIFELINE/saveOrders
	@PostMapping(path="saveOrders")
	public ResponseEntity<String> saveAppointmentDetails(@RequestBody Orders orders) {
		ResponseEntity<String> response=null;
		service.addOrders(orders);
		if(orders.getOrderId() != 0) {
			response=new ResponseEntity<String>("Order with ID  "+orders.getOrderId() +" is registered in LIFE LINE database", 
					HttpStatus.CREATED);
		}
		return response;
	}



	//	 http://localhost:9090/LIFELINE-api/LIFELINE/getOrderHistory/1

	@GetMapping(path = "/getOrderHistory/{orderId}")
	public Optional<Orders> getOrderHistory(@PathVariable("orderId") int orderId)throws OrderHistoryUnavailableException {
		return service.viewOrderHistory(orderId);
	}	

	//http://localhost:9090/LIFELINE-api/LIFELINE/deliverOrders/1/DOLO

	@GetMapping(path="deliverOrders/{orderId}/{medicineName}")
	public String deliverOrders(@PathVariable("orderId")  int orderId,@PathVariable("medicineName")  String medicineName) {
		return service.deliverOrders(orderId,medicineName);
	}
}
