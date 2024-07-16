FROM ubuntu:latest

## user, uid, group, gid
#ARG USER="ubuntu"
#ARG UID="1000"
#ARG GROUP="ubuntu"
#ARG GID="1000"
ARG USER="ytani"
ARG UID="649"
ARG GROUP="yt"
ARG GID="121"

## base apt
RUN apt update && apt install -y sudo curl tzdata

## set timezone
ENV TZ=Asia/Tokyo
RUN echo $TZ > /etc/timezone
RUN ln -sf /usr/share/zoneinfo/Aisa/Tokyo /etc/localtime

## user passwd
# RUN echo USER=${USER}:${UID}, GROUP=${GROUP}:${GID}
RUN groupadd -g $GID $GROUP -f && useradd -m -s /bin/bash -u $UID -g $GID $USER
RUN echo "${USER}:${USER}" | chpasswd
RUN echo "${USER} ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/010-${USER}

RUN echo 'root:root' | chpasswd

USER $USER

## volta
RUN curl https://get.volta.sh | /usr/bin/bash

## node
RUN $HOME/.volta/bin/volta install node
RUN $HOME/.volta/bin/volta install corepack
RUN $HOME/.volta/bin/corepack enable pnpm
RUN yes | $HOME/.volta/bin/pnpm -v
