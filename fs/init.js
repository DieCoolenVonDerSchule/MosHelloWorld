load('api_config.js');
load('api_gpio.js');
load('api_mqtt.js');
load('api_sys.js');
load('api_timer.js');
load("api_esp32.js");
load('api_http.js');
load('api_gpio.js');

//***********************************************





// set your LED pin here
let led = 14;
GPIO.set_mode(led, GPIO.MODE_OUTPUT);

// set your feed name here
let feedName = 'HelloWorld';

//some millisecond settings. adjust to your needs

//***********************************************

//
Timer.set(1000, Timer.REPEAT, function() {
    
    print('LED TOGGLED');
    GPIO.toggle(led);
}, null);



