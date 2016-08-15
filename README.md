# Particle

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## General Notes on Project

I decided to use both the Cloud API and the JavaScript SDK so I could show examples of using an Ember adapter (Cloud API) as well as an Ember service (JavaScript SDK)

The Cloud API is used on the `/devices` route and hits the following endpoints:

- https://docs.particle.io/reference/api/#list­devices
- https://docs.particle.io/reference/api/#get­device­information

The JavaScript SDK is used on the `/console` route and hits the following endpoints:

- https://docs.particle.io/reference/javascript/#list-devices
- https://docs.particle.io/reference/javascript/#getattributes
- https://docs.particle.io/reference/javascript/#callfunction
- https://docs.particle.io/reference/javascript/#getvariable
- https://docs.particle.io/reference/javascript/#signaldevice

The Console  on the `/console` route has the following commands:

- help - lists the available console commands

  `help`

- devices - lists the available devices

  `devices`

- details DEVICE_ID - lists the details of a device

  `details 2a002c000a47343232363230`

- functions DEVICE_ID - lists the functions a device can execute

  `functions 2a002c000a47343232363230`
- execute FUNCTION DEVICE_ID - execute a function on a device and returns a value

  `execute len 2a002c000a47343232363230`

- variables DEVICE_ID - lists the variables a device stores

  `variables 2a002c000a47343232363230`

- value VARIABLE DEVICE_ID - retrieves the value of a variable stored on a device

  `value rssi 2a002c000a47343232363230`

- signal SIGNAL DEVICE_ID - Send a signal to the device to shout rainbows<br/>

  `signal true 2a002c000a47343232363230`

I know one of the products particle.io makes is the web based IDE. With that in mind, I thought it would be cool to create
a terminal emulator to enter SDK commands into.

## Notes on Architecture

I decided to wrap the Particle JavaScript SDK with an Ember service to call the endpoints.

## Notes on Styling

I did my best to adhere to the style guide. Only after finishing the project did I see there are downloadable stylesheets.

I used the style guide colors and fonts. Additionally I tried to style the devices section based on the Particle.io console web application.

## Areas of Improvement

These are areas that need improvement but I wanted to stick as close to the 2 hour allotted time as possible.

- The console part of the application needs additional error handling. I am aware there are issues with certain arguments for commands.

- The console code in the route file really should be refactored into an Ember component.

- The design is currently not responsive.
