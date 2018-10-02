module.exports = function () {
  var projectDir = process.env.PWD = process.cwd() + '/',
    srcDir = 'src/',

  distDir = 'www/',
    distScriptsDir = distDir + 'scripts/',
    distStylesDir = distDir + 'styles/';

  var pipelines = {
    styles: {
      src: [srcDir + 'styles/csim-group-generator.scss'],
      dest: distStylesDir
    },
  };
  return pipelines;
};
