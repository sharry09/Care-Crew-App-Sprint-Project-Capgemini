package com.healthassist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Entity
@Scope(scopeName="prototype")
@Table(name="ORDERS")
public class Orders {
@Id
@Column(name="ORDER_ID")
 @GeneratedValue(strategy=GenerationType.IDENTITY)
 private int orderId;
@Column(name="PATIENT_NAME")
private String patientName;
	  @Column(name="MEDICINE_NAME")
private String medicineName;
	  @Column(name="DATE_OF_ORDER")
private String dateOfOrder;
	  @Column(name="ORDER_STATUS")
private boolean orderStatus;
public int getOrderId() {
	return orderId;
}
public void setOrderId(int orderId) {
	this.orderId = orderId;
}
public String getPatientName() {
	return patientName;
}
public void setPatientName(String patientName) {
	this.patientName = patientName;
}
public String getMedicineName() {
	return medicineName;
}
public void setMedicineName(String medicineName) {
	this.medicineName = medicineName;
}
public String getDateOfOrder() {
	return dateOfOrder;
}
public void setDateOfOrder(String dateOfOrder) {
	this.dateOfOrder = dateOfOrder;
}
public boolean isOrderStatus() {
	return orderStatus;
}
public void setOrderStatus(boolean orderStatus) {
	this.orderStatus = orderStatus;
}
public Orders() {
	super();
	
}
public Orders(int orderId, String patientName, String medicineName, String dateOfOrder, boolean orderStatus) {
	super();
	this.orderId = orderId;
	this.patientName = patientName;
	this.medicineName = medicineName;
	this.dateOfOrder = dateOfOrder;
	this.orderStatus = orderStatus;
}
@Override
public String toString() {
	return "Orders [orderId=" + orderId + ", patientName=" + patientName + ", medicineName=" + medicineName
			+ ", dateOfOrder=" + dateOfOrder + ", orderStatus=" + orderStatus + "]";
}

}
