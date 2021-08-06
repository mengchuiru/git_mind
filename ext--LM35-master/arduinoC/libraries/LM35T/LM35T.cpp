/**、
 * 名称：LM35线性温度传感器头文件
 * 功能描述：
 * 
 * 作者：ski
 * 版本信息：0.01
 * 日期:2020.3.5
 * */
//代码的开头对该代码进行信息介绍。

#include "LM35T.h"
#include "Arduino.h"

float DFRobot_LM35::getTemperature(uint32_t pin){//::域操作符  
	float val;
#if defined(NRF5)
	val= (float)(analogRead(pin))*(3.1/1024);
#elif defined(ESP_PLATFORM)
	val= (float)(analogRead(pin))*(3.1/1024);
#else 
	val= (float)(analogRead(pin))*(5.5/1024);
#endif
	return val;
}