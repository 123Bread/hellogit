package com.frontpay.finance.terminal.base;

import tk.mybatis.mapper.common.ExampleMapper;
import tk.mybatis.mapper.common.Marker;
import tk.mybatis.mapper.common.RowBoundsMapper;
import tk.mybatis.mapper.common.base.BaseDeleteMapper;
import tk.mybatis.mapper.common.base.BaseInsertMapper;
import tk.mybatis.mapper.common.base.BaseSelectMapper;
import tk.mybatis.mapper.common.base.BaseUpdateMapper;
import tk.mybatis.mapper.common.sqlserver.InsertMapper;
import tk.mybatis.mapper.common.sqlserver.InsertSelectiveMapper;

/**
*  通用SqlServer mapper
* @author <a href="mailto:zhiqiang.wang@frontpay.cn">汪志强</a>
* @version 创建时间：2016年9月29日 下午7:47:26
* @Copyright (c) 2016, frontpay.cn
*/
public interface MSSQLMapper<T> extends 
	InsertMapper<T>,
	InsertSelectiveMapper<T>,
	BaseSelectMapper<T>,
	BaseUpdateMapper<T>,
	BaseDeleteMapper<T>,
    ExampleMapper<T>,
    RowBoundsMapper<T>,
    Marker  {

}
