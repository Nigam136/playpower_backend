FROM node:slim
WORKDIR /docker_image
COPY . /docker_image/
RUN npm install
EXPOSE 5000
CMD npm start