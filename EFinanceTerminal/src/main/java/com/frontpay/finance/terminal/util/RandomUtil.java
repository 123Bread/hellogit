package com.frontpay.finance.terminal.util;

import java.util.Random;

/** 
 *  
 * @ClassName: RandomUtil 
 * @Description: 获取随机变量工具类 
 * @author chenhang 
 * @date 2016-11-15 下午5:28:08 
 *  
 */  
public class RandomUtil {
	public static final String letters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	//获取随机大写字母
	public static char getUpperCase(){
		Random rand = new Random();
		int i = rand.nextInt(letters.length());
		return letters.charAt(i);
	}
}
