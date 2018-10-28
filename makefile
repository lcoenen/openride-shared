NODE = node
TSC = node_modules/.bin/tsc

ENTRY_POINT = js/main.js
TS_FILES = $(shell find ts/ -type f -name '*.ts') 
#
# Phonies target
.PHONY: publish

# Generate the main entrypoint
$(ENTRY_POINT): $(TS_FILES) 
	@echo "Compiling the shared"
	$(TSC)

publish:
	@echo "Pulishing the module"
	npm version patch
	npm publish

clean:
	rm js/* -fr
