FROM ubuntu:18.04

ENV DEBIAN_FRONTEND noninteractive
ENV USER root

RUN apt-get update && \
    apt-get install -y --no-install-recommends ubuntu-desktop && \
    apt-get install -y gnome-panel gnome-settings-daemon metacity nautilus gnome-terminal && \
    apt-get install -y tightvncserver && \
    mkdir /root/.vnc

ADD xstartup /root/.vnc/xstartup

RUN touch /root/.vnc/passwd
RUN /bin/bash -c "echo -e 'password\npassword\nn' | vncpasswd" > /root/.vnc/passwd
RUN chmod 600 /root/.vnc/passwd

CMD /usr/bin/vncserver :1 -geometry 1280x800 -depth 24 && tail -f /root/.vnc/*:1.log

EXPOSE 5901