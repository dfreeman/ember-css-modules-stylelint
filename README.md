# ember-css-modules-stylelint [![Build Status](https://travis-ci.org/dfreeman/ember-css-modules-stylelint.svg?branch=master)](https://travis-ci.org/dfreeman/ember-css-modules-stylelint)

This [ember-css-modules](https://github.com/salsify/ember-css-modules) plugin incorporates [Stylelint](https://stylelint.io/) into the CSS Modules build pipeline. You can configure it using standard `.stylelintrc.js` files in your repo.

*Note*: you'll generally want to use this plugin in concert with another, like [ember-css-modules-reporter](https://github.com/dfreeman/ember-css-modules-reporter), in order to have the warnings that Stylelint produces actually go somewhere. Together, they can provide a developer experience similar to that of e.g. ember-cli-eslint, providing warnings on rebuild and generating lint tests to flag failures.

<img src="https://user-images.githubusercontent.com/108688/27017203-b6ef4420-4ef4-11e7-88c8-34101713ab6d.png" width="371">
