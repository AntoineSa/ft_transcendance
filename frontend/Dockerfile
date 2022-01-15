FROM	alpine:latest
RUN		apk add npm
RUN		npx create-react-app my_app
WORKDIR	my_app/
RUN		rm -rf src/*
RUN		npm i react-router-dom
COPY	index.css src/
COPY	index.js src/
COPY	Main.js src/
COPY	App.js src/
COPY	Game.js src/
COPY	SpectateSalon.js src/
COPY	SpectateGame.js src/
COPY	UserIndex.js src/
COPY	UserProfile.js src/
COPY	OwnUserProfile.js src/
COPY	Chat.js src/
COPY	LoginPage.js src/

CMD		["npm", "run", "start"]
