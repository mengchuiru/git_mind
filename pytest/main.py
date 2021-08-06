from pyb import LED

for i in range(5):
    LED(4).toggle()
    print('-----',i,'-----')
    pyb.delay(350)