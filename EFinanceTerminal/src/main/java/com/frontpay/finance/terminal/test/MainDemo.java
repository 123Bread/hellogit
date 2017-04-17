package com.frontpay.finance.terminal.test;

import com.frontpay.base.utils.BeanConverter;

public class MainDemo {
	public static void main(String[] args) {
		Person p = new Person();
		School school = new School();
		school.setAge("10");
		school.setSchoolName("zhongda");
		p.setAge(10);
		p.setName("zhang");
		p.setSex("man");
		p.setSchool(school);
		PersonDto copy = BeanConverter.copy(p, PersonDto.class);
		System.out.println(copy.toString());
		
	}

}
