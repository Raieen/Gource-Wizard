# Use this base image for OpenGL support inside a Docker container
FROM utensils/opengl:stable

# Setup dependencies
RUN apk add --no-cache git gource ffmpeg aws-cli npm

# Compile and run code
WORKDIR /worker/
ADD package*.json /worker/
ADD tsconfig*.json /worker/
RUN npm install && npm install typescript -g
COPY .env /worker
COPY . /worker
RUN chmod +x /worker/src/render/gource.sh
RUN npm run compile

RUN npm install -g nodemon ts-node

CMD [ "npx", "nodemon", "/worker/src/index.ts" ]