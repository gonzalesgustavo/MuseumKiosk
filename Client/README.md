# MuseumKiosk

This project was created with Angular version 7.3.0. This is a demo project for a museum kiosk displaying data about fossils. This uses the fossil API. For testing purposes I suggest using the static server which does not require a mongolab url. The static server is included (ClientwithFossilAPIStatic). Should the actual API be necessary download the TheFossilAPI and follow the instructions there.

## Start the Application

Instructions for the ClientwithTestServer:

```bash
	npm run start
```

Instructions for the client:

```bash
	ng serve
```

Both commands serves the angular and node projects in development and is not produciton ready. This is for demonstration purposes only. 

## Interface

Below is the single page app the visitor would see. The project requirements were, a basic UI with minimal use of color and design. 

![mainui](http://www.gdurl.com/k5toQ)

When the visitor/user hovers over the image with the cursor the car would flip and display information on the fossil. Below is an image displaying what it looks like. 

 ![cardinfo](http://www.gdurl.com/QWd3) 
