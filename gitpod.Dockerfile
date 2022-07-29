FROM gitpod/workspace-ruby-3.1

RUN curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

RUN sudo apt-get update

RUN sudo apt-get install -y git-core zlib1g-dev build-essential libssl-dev \
libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev \
libcurl4-openssl-dev software-properties-common libffi-dev nodejs yarn \
redis-server

RUN sudo rm -rf /var/lib/apt/lists/*
