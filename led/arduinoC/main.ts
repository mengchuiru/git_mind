/*
enum BTN {
    //% block="ON"
    HIGH,
    //% block="OFF"
    LOW,

}
*/


//% color="#AA278D" iconWidth=40 iconHeight=40
namespace led {
    //% block="set digital pin [PINX] LED turn [BUTTON]" blockType="command"
    //% BUTTON.shadow="dropdown" BUTTON.options="BTN" BUTTON.defl="BTN.ON"
    //% PINX.shadow="dropdown" PINX.options="DIG" PINX.defl="DIG.6"
    export function led_dig(parameter: any, block: any) {
        let button = parameter.BUTTON.code
        let pinx = parameter.PINX.code
        if(Generator.board === 'arduino'){
            Generator.addCode(`digitalWrite(${pinx}, ${button});`);
        }
    }

    //% block="Set analog [LINE] LED bringhtness[BLN] " blockType="command"
    //% LINE.shadow="dropdown" LINE.options="PWM" LINE.defl="PWM.3"
    //% BLN.shadow="range" BLN.defl=666 BLN.params.min=0 BLN.params.max=255
    
    export function led_pwm(parameter: any, block: any) {
        let str = parameter.STR.code
        let line = parameter.LINE.code
        Generator.addInclude('oled12864', '#include <oled12864.h>');
        Generator.addObject(`myoled`, `OLED_12864`, `myoled;`);
        Generator.addSetup(`myoled.begin`, `myoled.begin();`);
        Generator.addCode(`myoled.setCursorLine(${line});\n\tmyoled.printLine(${str});`);
    }
}
