package com.frontpay.finance.terminal.base;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;

import com.frontpay.base.utils.json.JsonUtils;

public abstract class BaseController {
	protected static final Logger log = LoggerFactory.getLogger(BaseController.class);
	@Autowired
	protected Validator validator; 
	@Autowired
	protected HttpSession session;
	
	@InitBinder
	protected void initBinder(HttpServletRequest request,
			ServletRequestDataBinder binder) throws Exception {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

		dateFormat.setLenient(false);
		binder.registerCustomEditor(java.util.Date.class, new CustomDateEditor(dateFormat, true));

		DateFormat fmt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		CustomDateEditor dateEditor = new CustomDateEditor(fmt, true);
		binder.registerCustomEditor(Date.class, dateEditor);
		binder.registerCustomEditor(java.sql.Timestamp.class,new CustomDateEditor(fmt, true));
	}

	/**
	 * 输出JSON字符串
	 */
	protected String renderJSON(Object object, HttpServletResponse response) {
		return renderText(JsonUtils.toJson(object), response);
	}

	/**
	 * 直接输出字符串.
	 */
	protected String renderText(String text, HttpServletResponse response) {
		return render(text, "text/html;charset=UTF-8", response);
	}

	/**
	 * 绕过Template,直接输出内容的简便函数.
	 */
	protected String render(String text, String contentType,
			HttpServletResponse response) {
		try {
			response.setContentType(contentType);
			response.getWriter().write(text);
		} catch (IOException e) {
			log.error(e.getMessage(), e);
		}
		return null;
	}

	protected Map getReturnMap(Integer code, String message, Map data) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("code", code);
		map.put("message", message);
		map.put("data", data);
		return map;
	}
	

}
