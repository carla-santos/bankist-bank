const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// Javascript
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const terser = require('gulp-terser');

const css = function (start) {
  src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'));
  start();
};

const jsFiles = function () {
  const files = [
    'src/js/db.js',
    'src/js/moeda-data.js',
    'src/js/movimentos-conta.js',
    'src/js/calc-balanco.js',
    'src/js/calc-sumario.js',
    'src/js/cria-usuarios.js',
    'src/js/cronometro.js',
    'src/js/login.js',
    'src/js/encerrar-sessao.js',
    'src/js/transferencia.js',
    'src/js/emprestimo.js',
    'src/js/eliminar-conta.js',
    'src/js/init-listeners.js',
  ];
  return files;
};

const javascript = function (start) {
  src(jsFiles())
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(concat('script.js'))
    .pipe(dest('build/js'))
    .pipe(rename('script.min.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'));
  start();
};

const dev = function (start) {
  watch('src/scss/**/*.scss', css);
  watch('src/js/**/*.js', javascript);
  start();
};

exports.css = css;
exports.js = javascript;
exports.dev = parallel(javascript, dev);
