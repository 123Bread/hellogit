package com.frontpay.finance.terminal.test;

public class School {
	private String schoolName;
	private String age;
	public String getSchoolName() {
		return schoolName;
	}
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "School [schoolName=" + schoolName + ", age=" + age + "]";
	}
	
	
	
	

}
