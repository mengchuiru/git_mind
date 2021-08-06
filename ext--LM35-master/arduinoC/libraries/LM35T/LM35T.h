/**、
 * 名称：LM35线性温度传感器头文件
 * 功能描述：
 * 
 * 作者：ski
 * 版本信息：0.01
 * 日期:2020.3.5
 * */
//代码的开头对该代码进行信息介绍。

#ifndef __LM35T_H
#define __LM35T_H
#include "Arduino.h"

class DFRobot_LM35
{
	public:
	DFRobot_LM35(){};//构造函数： 在创建类的对象时，进行初始化时候执行；
	~DFRobot_LM35(){};//析构函数	在删除对象的时候执行
	float getTemperature(uint32_t pin);
	private:

};

#endif