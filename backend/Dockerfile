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
COPY	./spectate/spectate.controller.ts src/spectate/
COPY	./spectate/spectate.service.ts src/spectate/
COPY	./spectate/spectate.entity.ts src/spectate/
COPY	./spectate/spectate.module.ts src/spectate/
COPY	./spectate/create-game.dto.ts src/spectate/
COPY	./spectate/update-game.dto.ts src/spectate/
#COPY	./spectate/spectate.interface.ts src/spectate/
#COPY	./user/user.interface.ts src/user/
COPY	./user/user.entity.ts src/user/
COPY	./database.module.ts src/
COPY	./validation.pipe.ts src/common/
COPY	./admin.guard.ts src/common/
COPY	./backend.env .env

CMD		["npm", "run", "start"]
