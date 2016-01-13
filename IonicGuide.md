## STEP 1.
Make sure your operating system is at least Yosemite. You should have node. If not $brew install node.

## STEP 2.
Since ionic is based on “cordova” you need to install it. FYI cordova is what makes JS, HTML, CSS work on mobile.  Type in the terminal $npm -g install cordova ionic. This will install Cordova and Ionic. 

## STEP 3.
To make sure ionic has installed correctly run "ionic info" in the terminal.

It should print out something like...
Your system information:
Cordova CLI: 5.0.0
Gulp version: CLI version 3.8.11
Gulp local: Local version 3.9.0
Ionic Version: 1.0.1
Ionic CLI Version: 1.6.1
Ionic App Lib Version: 0.3.3
ios-deploy version: 1.4.0
ios-sim version: 3.0.0
OS: Mac OS X Yosemite
Node Version: v0.12.2
Xcode version: Xcode 6.4 Build version 6E35b

--Note you may have a dependency warning, for stuff like  ios-sim and ios-deploy. To install those do npm install -g ios-sim and npm install -g ios-deploy. (You may have to use sudo)

## STEP 4.
You should have Xcode install on your computer. You should all have it. If you don't. You can download and install Xcode from the Mac App Store by searchingfor xcode.

## STEP 5.
As well as the Xcode IDE you will also need to install the command line tools, this will allow ionic to build our ios application from the terminal. The first time ionic will try to run any of the required command line tools a window will popup asking for you to install them. If for some reason it doesn’t open a popup type this into the terminal:
$ xcode-select --install

## STEP 6.
It is required to run ios applications in an emulator on an iphone connected to your computer, install them now.
$ npm install -g ios-sim ios-deploy

//STARTING A PROJECT

Type in the terminal: ionic start myproject. You can now cd in myproject and it should look like...

├── bower.json 
├── config.xml // cordova -- Don't worry about it
├── gulpfile.js
├── hooks // cordova commands
├── ionic.project // ionic configuration
├── package.json  
├── platforms // iOS/Android builds, depending on which one you pick
├── plugins // where your cordova/ionic plugins will be installed
├── scss // scss code, which will output to www/css/
└── www // the app you will be working on

## Notes:
— If you go to the url, play.ionic.io, it allows you to play around with ionic without downloading it. 

—- Ionic deploy, allows you to update the app on the users phone. 

— if you CD into my app and type ionic serve it will load the app in your web browser. It is also a live reload server so if you change something, it will automatically reload. 


Ionic help lists out all the commands and descriptions. You can also type ionic help <aSpecificCommandHere> to learn more about what specific command you typed it.

## SOME COOL COMMANDS
R in the terminal, it will reload the page. 
C in the terminal, it enable or disable console logs. 
Q in the terminal, it allows you to quit. 
G in the terminal, it allows you to go to a specific URL.
ionic emulate iOS, running the app on an emulator(aka your phone) 
ionic emulate iOS --target=<aThePhoneYouWanttoEmulateOn>
You can also type -cls at the end of that command. C stands for "show me console logs", l stands for "live reload", and s for "server logs"
ionic serve --lab in the terminal, it allows you see side by side, the android and IOS versions of the app.  BIG difference between android and IOS is that iOS usually has tabs at the bottom while Android has tabs at the top. 

## ANOTHER WAY TO VIEW AN IONIC APP
Go to Plaforms -> iOS -> then <whateverYourAppIsCalled.xcodeproj>
This will open up xCode. Look it the top left corner, there will be a Bulldozer button. Which will allow you to select which 


Command that registers your app with the ionic platform
ionic io init 
It gives you and app ID and api key. This can be found at .io.config.json file. You can also find your app id in the ionic.project file.


<ion-pane> is the canvass
<ion-header-bar> is the header bar
<ion content> holds the content
<ion list> creates a list
<ion avatar> makes the icon smaller
ionic.Platform.ready(callback function)

show-delete="whatever the scope"
show-reorder="whatever in the scope"

ionic plugin add cordova-plugin-media
scoll allows the image to be draggable
padding class adds a small amount of padding as a default


REFRESH LOOP

<ion refresher
	pulling-text="Refresh..."
	on-refresh="doRefresh()">
</ion-refresher>


INFINITE SCROLL

<ion-infinite-scroll
 	immediate-check="false"
	on-infinite="loadMore()">
</ion-infinite-scroll>


SIMILAR TO NG-VIEW
<ion-nav-view> </ion-nav-view>


STANDARD NAV BAR
<ion-nav-bar class="bar-positive">
	<ion-nav-back-button></ion-nav-back-button>
</ion-nav-bar>


class="list-card"


