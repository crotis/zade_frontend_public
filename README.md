# zade_frontend_public
Web Application for Zade (Financial Web Application)

**NOTE: I have a private repository fit for building the project, this repository is availible to demonstraight the code and is missing
API access keys and other key features**

**This project is still undergoing development and is by no means complete, please visit http://46.101.8.127:3000/ to see the current version hosted on on Digital Ocean**

## Overview 
The project aims to make financial information availible on the Zade Web Application such as the current price of financial assets, todays high, low, open, close and also provides candlestick graphs so that the data can be seen in the context of trends in the market.

This repoisitory contains Web Application components of the project built in Javascript (React) and retreives data from the API server as can be seen in the zade_backend_public repository.

## Project Structure - Main Components

### components/Asset.js & components/Crypto.js 
These classes provide each instance of the tiles that make up the heatmap of financial assets. 
They are styled in style/Wrapper.js

## CandleStickChart.js
Requests the Time Series Data and returns the functioning candlestick Chart. 

## Home.js
Requests Asset data from API and presents the Information in the Heatmap and CandleStick chart with the use of the above 3 classes. 
