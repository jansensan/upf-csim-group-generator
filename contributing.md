# Contributing

## Technical Requirements

Ensure you install these modules globally on your development machine:

- [Node](https://nodejs.org/): This runs a JavaScript server locally which fetches the libraries necessary to build this project.
- [Webpack](https://webpack.js.org/): This bundler compiles the JavaScript libraries and classes, as well as the CSS, into a single file for web deployment.
- You also need to set up an environment that can run a PHP script. [MAMP](https://www.mamp.info/) was used for this current version, but it is not a prescription.


## Installation

Once you checked out this project, run this command in a Terminal window:

    npm install


## Local development

- Open a Terminal instance
- Go to the root directory of the project
- Run `webpack -d`
- Load the `www` directory in a browser


## Contributions

- All contributions must be made via [pull requests](https://help.github.com/articles/about-pull-requests/).
- Commits must be written in past tense, and in sentence format:

    ````
    # good examples
    Added list component
    Removed superfluous style declaration
    Fixed typo in label
    
    # bad
    update
    New Thing
    remove the style declaration
    ````
