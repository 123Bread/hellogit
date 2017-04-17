package com.frontpay.finance.terminal.test;

public class PersonDto {
	private String name;
	private String sex;
	private School school;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}

	public School getSchool() {
		return school;
	}
	public void setSchool(School school) {
		this.school = school;
	}
	@Override
	public String toString() {
		return "PersonDto [name=" + name + ", sex=" + sex + ", school=" + school + "]";
	}
	
	
	
}
