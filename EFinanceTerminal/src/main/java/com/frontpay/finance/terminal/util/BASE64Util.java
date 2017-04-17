package com.frontpay.finance.terminal.util;

import org.apache.commons.codec.binary.Base64;

public class BASE64Util {
	// 加密
	public static String encode(String str) {
		String s = null;
		try {
			s=new String(Base64.encodeBase64(str.getBytes("UTF-8")), "UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return s;
	}

	// 解密
	public static String decode(String s) {
		String result = null;
		if (s != null) {
			try {
				result = new String(Base64.decodeBase64(s.getBytes("UTF-8")), "UTF-8");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return result;
	}
	
	

}
