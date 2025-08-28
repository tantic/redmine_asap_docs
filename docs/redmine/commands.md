---
sidebar_position: 2
---

# Commands Cheatsheet

redmine_asap_pilot is the name of a plugin which is use to show real examples in the cheatsheet. You'll need to adapt to your plugin.

## Rails

https://gist.github.com/iangreenleaf/b206d09c587e8fc6399e

## Plugin

```
# Set the RAILS_ENV variable
export RAILS_ENV="development"

# Create plugin
bundle exec rails generate redmine_plugin <plugin_name>
bundle exec rails generate redmine_plugin redmine_asap_pilot

# Model
bundle exec rails generate redmine_plugin_model <plugin_name> <model_name> [field[:type][:index] field[:type][:index] ...]
bundle exec rails generate redmine_plugin_model redmine_asap_pilot Space name:string description:text user_id:integer visibility:string

# Migration
bundle exec rails generate redmine_plugin_migration <plugin_name> add_new_column_to_table

# Execute migration
bundle exec rake redmine:plugins:migrate RAILS_ENV=development

# Rollback migration
bundle exec rake redmine:plugins:rollback STEP=1

# Controller
bundle exec rails generate redmine_plugin_controller <plugin_name> <controller_name> [<actions>]
bundle exec rails generate redmine_plugin_controller redmine_asap_pilot spaces index show

# Uninstall plugin
bundle exec rake redmine:plugins:migrate NAME=<plugin_name> VERSION=0
bundle exec rake redmine:plugins:migrate NAME=redmine_asap_pilot VERSION=0
```

## Misc

```
# Generate icon from a config/icon_source.yml file
bundle exec rake icons:plugin:generate NAME=redmine_plugin_name
```

## Administration

```
# Launch puma server
rails s

# Clear cache
bundle exec rake tmp:cache:clear RAILS_ENV=production

# Generate secret (sign and verify cookies, especially session cookies, and other encrypted data => If you change the token, all existing signed cookies/sessions become invalid, users will be logged out
bundle exec rake generate_secret_token
```

