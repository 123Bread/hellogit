/**
 * 
 */
package com.frontpay.finance.terminal.base;

import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

/**
 * 多数据源
 * @author 王东鸿
 * @Copyright (c) 2016, frontpay.cn
 * @date 2016年10月8日 上午9:23:21 
 */
public class MultipleDataSource extends AbstractRoutingDataSource{
	private static final ThreadLocal<String> dataSourceKey = new InheritableThreadLocal<String>();
	
	public static void setDataSourceKey(String dataSource) {
        dataSourceKey.set(dataSource);
    }

	@Override
	protected Object determineCurrentLookupKey() {
		 return dataSourceKey.get();
	}
}
