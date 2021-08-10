
enum LINE {
    //% block="white"
    0,
    //% block="black"
    1
}

//% color="#FFA800" iconWidth=40 iconHeight=40
namespace Line_Sensor {
    //% block="get pin [PIN] grayscale" blockType="reporter"
    //% PIN.shadow="dropdown" PIN.options="PIN_Analog" 
    
    export function getGrayscale(parameter: any, block: any) {
        let pin = parameter.PIN.code;
        Generator.addSetup( `pinMode_D`,`pinMode(${pin},INPUT);`);
        Generator.addCode(`analogRead(${pin})`);
    }


    //% block="pin [PIN] detected [COL]" blockType="boolean"
    //% PIN.shadow="dropdown" PIN.options="PIN_Digital" 
    //% COL.shadow="dropdown"  COL.options="LINE"  COL.defl="LINE.white"
    export function whiteBlack(parameter: any, block: any) {
        let pin = parameter.PIN.code;
        let col = parameter.COL.code;
        Generator.addSetup( `pinMode_A`,`pinMode(${pin},INPUT);`);
        Generator.addCode(`digitalRead(${pin})==${col}`);
    }

}
