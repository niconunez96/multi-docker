start-dev:
	docker-compose up

test-client-app:
	docker build -t clientapp-test -f ./client/Dockerfile.dev ./client >> /dev/null;
	docker run -it clientapp-test npm run test;