---
sidebar_position: 1
---

# Introduction

This plugin try to propose a new UX/UI for Redmine with new tools like Stimulus/Turbo and Tailwindcss (one day Hotwire :-)).
The first version started almost from a blank page by replacing all Redmine pages. It worked but it's not enough progressive.
This version start from the original theme of Redmine so all pages works (normally) and the theme can be used now.

* Status : first version usable but need to be used and improved (feedback appreciated)
* Compatibility : work for Redmine >=6 (other versions not tested)



## Why?

Redmine is really powerful. Really. Many features and really customizables.
But I have to say that after 10 years of using it, the UX and the UI are now quite old and not as attractive as it used to be, well at least in my point of view.

So let's try to do something different! First version just a new version not a revolution, we'll see later how this could better.

Everything is open source and for the community. If it can help the core team to test new things it would be great.

## What?

A brand new theme whith a new layout and some principles
* should be clean and simple (only show main features first and then show other features on demand)
* should help to navigate really quickly
* should implement new features or integrate small ones from open-source plugins
* main features are : issue and projet
  * as a user I want to create a new project easily
  * as a user I want to create a new issus easily and update/delete it really quickly

## How?

* Plugin instead of a theme so that we can reorder items and add stimulus
* Tailwind css and sometimes flowbite
* Stimulus for interactivity, turbo for performances
* integration of small improvments seen in open sources plugins
* try to keep the compatibility with plugins when possible

## Rails and Hotwire

I think Hotwire is really great and really cool for progressive enhancement (see the article here : https://boringrails.com/articles/thinking-in-hotwire-progressive-enhancement/).

So here, the proposition is to improve Redmine
* Step 1 : improve UI with some css
* Step 2 : improve some UX with stimulus and Turbo for the navigation and performances
* Step 3 : go deeper in the UX improvment with some Hotwire stuff
* Step 4 : add some new features