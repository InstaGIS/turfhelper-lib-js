VERSION = $(shell cat package.json | sed -n 's/.*"version": "\([^"]*\)",/\1/p')

SHELL = /usr/bin/env bash

default: build
.PHONY: test build build_unminified build_minified build_utils


version:
	@echo $(VERSION)

install: 
	npm install
	jspm install

test:
	grunt karma

docs:
	grunt jsdoc2md	

build_unminified:
	jspm build src/ig_turfhelper.js dist/ig_turfhelper.js      --global-name turfHelper --global-deps '{"gmaps": "gmaps"}' --skip-source-maps

build_minified:
	jspm build src/ig_turfhelper.js dist/ig_turfhelper.min.js  --global-name turfHelper --global-deps '{"gmaps": "gmaps"}' -m

build_utils:
	jspm build src/components/utils.js dist/utils.min.js  --global-name turfUtils --global-deps '{"gmaps": "gmaps"}' -m

build: build_unminified build_minified build_utils
	
	
	


update_version:
ifeq ($(v),)
	$(error v is undefined)
else ifeq ($(v),${VERSION})
	$(error that version is already the current version)
endif
	@echo "Current version is " ${VERSION}
	@echo "Next version is " $(v)
	sed -i s/"$(VERSION)"/"$(v)"/g package.json


tag_and_push:
		git add --all
		git commit -a -m "Tag v $(v) $(m)"
		git tag v$(v)
		git push
		git push --tags


tag:  build docs update_version tag_and_push		
release: update_version  tag_and_push		
	
