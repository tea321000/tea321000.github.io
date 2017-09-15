# -*- coding: utf-8 -*-
"""
Created on Fri Aug 04 14:26:31 2017

@author: Administrator
"""
xmldir='E:\\zhouziqi\\regression\\OK_label'
picsdir='E:\\zhouziqi\\regression\\OK_FIVE'
modelxml='model.xml'
import xml.etree.ElementTree as ET
import os
import shutil

picslist=os.listdir(picsdir)
for i in range(0,len(picslist)):#遍历文件夹内所有文件
    pic=os.path.join(picsdir,picslist[i])
    if os.path.isfile(pic) and (pic.endswith(".JPG") or pic.endswith(".jpg")):#假如是JPG文件时操作
        (shortname,extension)=os.path.splitext(picslist[i])#分割文件名和扩展名
        modifyxml=os.path.join(xmldir,shortname+'.xml')#需要批量生成并修改的xml路径及文件名
        if os.path.isfile(modifyxml):#不存在同名XML时直接复制,存在同名时先将同名文件删除再复制
            os.remove(modifyxml)
        shutil.copy(os.path.join(xmldir,modelxml),modifyxml)#复制
        tree = ET.parse(modifyxml)#解析XML文件
        root = tree.getroot()#获取父节点
        for filename in root.iter('filename'):
            filename.text=str(picslist[i])#更改子节点filename内容
        for path in root.iter('path'):#更改子节点path内容
            pathdir=path.text
            path.text=pathdir[:pathdir.rfind('/')+1]+picslist[i]#对路径字符串从右往左查找/截取在此之前的这一段字符串，替换路径中的文件名为对应的.jpg
        tree.write(modifyxml)