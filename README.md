## HideMyAss Proxylist Scraper

A proxylist scraper depends on phantomjs, **it's prety hacky but it works.**

### Installation

Install [PhantomJS](http://phantomjs.org/download.html) on your server:

	apt install phantomjs

Run the following command to install [jsonv](https://gist.github.com/julionc/7476620):

	curl -Ls https://raw.github.com/archan937/jsonv.sh/master/install.sh | bash

Download this repo:

	git clone https://github.com/knowlet/hma-proxylist-scraper.git
	cd hma-proxylist-scraper

### Run once

	phantomjs main.js
	
### Run evey half an hour

	bash loop.sh


	
	

