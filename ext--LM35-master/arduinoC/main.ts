
enum SIZE {
    //% block="29*29"
    1,
    //% block="58*58"
    2
}

enum LINE {
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4
}

enum BTN {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="A+B"
    AB
}


//% color="#AA278D" iconWidth=50 iconHeight=40
namespace LM35TemperatureSensor {
    //% block="Read_LM35 [PINX]" blockType="reporter"
    //% PINX.shadow="dropdown" PINX.options="PINX" 
    export function LM35GetTemperature(parameter: any, block: any) {
        let p = parameter.PINX.code;
        Generator.addInclude('LM35_GetTerperatureinclude',"#include <LM35T.h>");
        Generator.addObject('LM35_GetTerperatureobject',"DFRobot_LM35","LM35");
        Generator.addCode([`LM35.getTemperature(${p})`, Generator.ORDER_UNARY_POSTFIX]);
    }
}
