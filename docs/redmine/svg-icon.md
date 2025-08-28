---
sidebar_position: 4
---

# Add SVG Icon

You can now add some icons directly in your plugin. The core team added some rake task to download and install easyly the icons.
All icons are from this website : https://tabler.io/icons

## Configuration

In the folder `config`of your plugin, create a file `icon_source.yml`.
Then add your icon, for example, here is a file with 3 news icons

```
- name: my-page
  svg: layout-dashboard
- name: logout
  svg: logout
- name: info-circle
  svg: info-circle
```

## Download

```
bundle exec rake icons:plugin:generate NAME=redmine_plugin_name
```

## Display icon

```
<%= sprite_icon('logout', plugin: 'redmine_plugin_name', size: 24, css_class: 'icon') %>
```