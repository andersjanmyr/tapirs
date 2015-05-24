
NAME=tapirs

.PHONY: build
build:
	docker build -t andersjanmyr/$(NAME) .


.PHONY: publish
publish: build
	docker push andersjanmyr/$(NAME)

.PHONY: run
run:
	docker run -it --rm --name $(NAME) -p 3000:80 andersjanmyr/$(NAME)
