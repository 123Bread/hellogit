package com.frontpay.finance.terminal.util;

import java.io.IOException;
import java.util.ResourceBundle;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 读取config.properties配置 
 * @description <br>
 * @author <a href="mailto:zhiqiang.wang@frontpay.cn">汪志强</a>
 * @version 创建时间：2016年10月10日 下午3:15:17
 * @Copyright (c) 2016, frontpay.cn
 */
public class Parameters {
	private static Logger logger = LoggerFactory.getLogger(Parameters.class);
	private static ResourceBundle rb = null;
	static{
		rb = ResourceBundle.getBundle("config");
	}

	public static String getProperty(String key, String defaultValue) {
		try{
			String tmp = rb.getString(key);
			return StringUtils.isBlank(tmp)?defaultValue:tmp.trim();
		}catch(Exception e){
			logger.error("配置文件解析[{}]失败,取默认值：{}",key,defaultValue);
			return defaultValue;
		}
	}

	public static int getProperty(String key, int defaultValue) {
		try{
			String tmp = rb.getString(key);
			return StringUtils.isBlank(tmp)?defaultValue:Integer.parseInt(tmp);
		}catch(Exception e){
			logger.error("配置文件解析[{}]失败,取默认值：{}",key,defaultValue);
			return defaultValue;
		}
	}

	public static boolean getProperty(String key, boolean defaultValue) {
		try{
			String tmp = rb.getString(key);
			return StringUtils.isBlank(tmp)?defaultValue:Boolean.parseBoolean(tmp);
		}catch(Exception e){
			logger.error("配置文件解析[{}]失败,取默认值：{}",key,defaultValue);
			return defaultValue;
		}
	}
	
	public static void main(String[] args) throws IOException {
		System.out.println(Parameters.getProperty("sms.send", "1234"));
		System.out.println(Parameters.getProperty("sms.send2", true));
	}
	
}
