package com.frontpay.finance.terminal.util;

import java.io.File;
import java.util.HashMap;

/**
 *上传文件信息
 * @description <br>
 * @author <a href="mailto:zhiqiang.wang@frontpay.cn">汪志强</a>
 * @version 创建时间：2016年10月11日 下午12:07:05
 * @Copyright (c) 2016, frontpay.cn
 */
public class UploadFile {

	/* 文件web访问全路径 */
	private String url;
	/* 名称 */
	private String filename;

	/* 后缀名 */
	private String suffix;

	/* 上传文件目录 */
	private String dir;

	/* 上传名称 */
	private String original;

	/* 文件字节数 */
	private long size;


	/**
	 * 文件路径
	 */
	public String getFileUrl() {
		if ( dir == null || filename == null ) {
			return null;
		} else {
			return dir + File.separator + filename;
		}
	}


	/**
	 * 上传文件
	 */
	public File getFile() {
		if ( dir == null || filename == null ) {
			return null;
		} else {
			return new File(dir + File.separator + filename);
		}
	}


	/**
	 * 删除上传文件
	 */
	public boolean delFile() {
		File file = getFile();
		if ( file != null ) {
			return file.delete();
		}
		return false;
	}

	public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}


	public String getFilesystemName() {
		return filename;
	}

	public String getOriginalFileName() {
		return original;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename( String filename ) {
		this.filename = filename;
	}

	public String getSuffix() {
		return suffix;
	}

	public void setSuffix( String suffix ) {
		this.suffix = suffix;
	}

	public String getDir() {
		return dir;
	}

	public void setDir( String dir ) {
		this.dir = dir;
	}

	public String getOriginal() {
		return original;
	}

	public void setOriginal( String original ) {
		this.original = original;
	}


	public long getSize() {
		return size;
	}

	public void setSize( long size ) {
		this.size = size;
	}

}
