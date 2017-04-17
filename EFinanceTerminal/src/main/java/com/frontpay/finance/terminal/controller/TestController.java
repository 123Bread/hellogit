package com.frontpay.finance.terminal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TestController {

	@RequestMapping(value = "/osService", method = { RequestMethod.POST })
	@ResponseBody
	public ModelAndView osService() {
		System.out.println("osService");
		return new ModelAndView("redirect:/saveOsUser.do");
	}

	@RequestMapping(value = "/saveOsUser")
	@ResponseBody
	public String saveOsUser() {
		System.out.println("dddddddd");
		return "hello";
	}

}
