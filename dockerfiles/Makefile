app-container = infoenter
db-container = dynamodb

init:
	$(MAKE) build
	$(MAKE) up

build:
	$(MAKE) stop
	docker-compose build

up:
	docker-compose up -d ${db-container}
	$(MAKE) migrate
	docker-compose up -d ${app-container}

stop:
	docker-compose rm -vsf
	docker-compose down -v --remove-orphans

migrate:
	./init.sh
