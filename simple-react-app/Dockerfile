FROM node:14-alpine as builder

RUN npm install pnpm -g

WORKDIR /code

# 单独分离 package.json，是为了安装依赖可最大限度利用缓存

ADD . /code/

RUN pnpm install

RUN pnpm run build

# 选择更小体积的基础镜像
FROM nginx:alpine

COPY --from=builder code/build /usr/share/nginx/html