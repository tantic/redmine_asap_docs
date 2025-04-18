---
sidebar_position: 2
---

# Installation

This plugin has been tested with Redmine 5.1.x

```
cd $REDMINE_ROOT
git clone https://github.com/tantic/redmine_asap_theme.git plugins/redmine_asap_theme
bundle install
bundle exec rake redmine:plugins:migrate RAILS_ENV=production
```

# Test it quickly with Docker

I'v prepare a docker version of redmine with the plugin installed.

## Download the source

```
git clone https://github.com/tantic/redmine_asap_docker.git
cd redmine_asap_docker
```

As you can see, the plugin folder is empty. We need to fetch it from his repo.

```
git submodule init
git submodule update
git submodule update --recursive --remote
```

## Configuration

First you need to prepare the .env file with all the variables

```
cp .env.example .env
```

You can change the redmine version here and some other stuffs

```
# REDMINE
REDMINE_VERSION=6.0.4
# .tar.gz from https://redmine.org/projects/redmine/wiki/Download
REDMINE_DOWNLOAD_SHA256=bebf8acb4fd1843f88e5f4285ff0b497fab43320c33e780a5c34e1124c5e177a
REDMINE_PLUGINS_MIGRATE=true
REDMINE_PORT=3000
```

## Start

```
docker compose up -d
```

Go to the url http://localhost:3000