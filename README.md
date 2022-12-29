# mapofmetal-ember

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd mapofmetal-ember`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Create Image Files from Large Image
* `vips dzsave somefile.png directory`

  Test Image:

  * user:~/pics$ vips dzsave sample.jpeg x
  * user:~/pics$ cd x_files/
  * user:~/pics/x_files$ ls
  * 0  1  10  11  12  13  2  3  4  5  6  7  8  9
  * user:~/pics/x_files$ cd 13
  * user:~/pics/x_files/13$ ls ... 10_0.jpeg   11_22.jpeg  2_1.jpeg   4_14.jpeg  5_9.jpeg   7_3.jpeg ...
  * user:~/pics/x_files/13$ vips arrayjoin "$(ls *.jpeg | sort -t_ -k2g -k1g)" x.jpg --across 12

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
