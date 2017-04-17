package com.frontpay.finance.terminal.util;

import java.math.BigDecimal;
import java.text.DecimalFormat;


/** 
 * BigDecimal反序列化工具类(去掉末尾0)
 *@author <a href="mailto:hang.chen@frontpay.cn">陈航</a>
 * @version 创建时间：2016年11月17日 下午12:45:26
 * @Copyright (c) 2016, frontpay.cn
 */  
public class BigDecimalUtils{  

	public static String format(BigDecimal value){  
		if(value == null) return "0";
		DecimalFormat usFormat = new DecimalFormat("#,##0.####");   
        return usFormat.format(value);  
	}   
}  
