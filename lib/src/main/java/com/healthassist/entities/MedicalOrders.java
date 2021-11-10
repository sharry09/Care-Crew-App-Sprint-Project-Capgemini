package com.healthassist.entities;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Entity
@Scope(scopeName="prototype")
@Table(name="MEDICAL_ORDERS")
public class MedicalOrders 
{
	@Id
	@Column(name="ORDER_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private int orderId;
	@Column(name="ORDEREDBY",nullable = false,length = 50)
private String orderedBy;
	@Temporal(TemporalType.DATE)	
	@Column(name="ORDER_DATE")
private Date orderDate;
	@Column(name="ORDER_STATUS",nullable = false,length = 25)
private OrderStatus orderStatus;
	
	@ManyToOne
	@JoinColumn(name="ORDER_NUMBER")
	private MedicalStore medicalStore;
	
public int getOrderId() {
	return orderId;
}
public void setOrderId(int orderId) {
	this.orderId = orderId;
}
public String getOrderedBy() {
	return orderedBy;
}
public void setOrderedBy(String orderedBy) {
	this.orderedBy = orderedBy;
}

public Date getOrderDate() {
	return orderDate;
}
public void setOrderDate(Date orderDate) {
	this.orderDate = orderDate;
}
public OrderStatus getOrderStatus() {
	return orderStatus;
}
public void setOrderStatus(OrderStatus orderStatus) {
	this.orderStatus = orderStatus;
}

public MedicalStore getMedicalStore() {
	return medicalStore;
}
public void setMedicalStore(MedicalStore medicalStore) {
	this.medicalStore = medicalStore;
}

public MedicalOrders() {
	super();
}

public MedicalOrders(int orderId, String orderedBy, Date orderDate, OrderStatus orderStatus,
		MedicalStore medicalStore) {
	super();
	this.orderId = orderId;
	this.orderedBy = orderedBy;
	this.orderDate = orderDate;
	this.orderStatus = orderStatus;
	this.medicalStore = medicalStore;
}
@Override
public String toString() {
	return "MedicalOrders [orderId=" + orderId + ", orderedBy=" + orderedBy + ", orderDate=" + orderDate
			+ ", orderStatus=" + orderStatus + ", medicalStore=" + medicalStore + "]";
}


}
