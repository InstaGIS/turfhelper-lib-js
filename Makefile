VERSION = $(shell cat package.json | sed -n 's/.*"version": "\([^"]*\)",/\1/p')

SHELL = /usr/bin/env bash

default: build
.PHONY: test build


version:
	@echo $(VERSION)

install: 
	npm install
	jspm install

test:
	grunt karma
	
build:
	jspm build src/ig_turfhelper.js dist/ig_turfhelper.js      --global-name turfHelper --global-deps '{"gmaps": "gmaps"}' --skip-source-maps
	jspm build src/ig_turfhelper.js dist/ig_turfhelper.min.js  --global-name turfHelper --global-deps '{"gmaps": "gmaps"}' -m



update_version:
	@echo "Current version is " ${VERSION}
	@echo "Next version is " $(v)
	sed -i s/"$(VERSION)"/"$(v)"/g package.json

tag_and_push:
		git add --all
		git commit -a -m "Tag v $(v) $(m)"
		git tag v$(v)
		git push
		git push --tags


tag: update_version build tag_and_push		
release: update_version  tag_and_push		
	
