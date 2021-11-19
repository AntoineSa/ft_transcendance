FROM	alpine:latest
RUN		apk add npm
RUN		npm i -g @nestjs/cli
RUN		nest new app-project
WORKDIR	./app-project/
RUN		mkdir src/items
RUN		mkdir src/common
COPY	./package.json ./
RUN		npm install -G
COPY	./main.ts src/
COPY	./app.module.ts src/
COPY	./items.controller.ts src/items/
COPY	./items.service.ts src/items/
COPY	./items.interface.ts src/items/
COPY	./spectate.controller.ts src/items/
COPY	./spectate.service.ts src/items/
COPY	./spectate.interface.ts src/items/
COPY	./user.interface.ts src/items/
COPY	./create-item.dto.ts src/items/
COPY	./validation.pipe.ts src/common/
COPY	./admin.guard.ts src/common/


CMD		["npm", "run", "start"]
