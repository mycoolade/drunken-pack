const { src, dest, series, parallel, watch } = require('gulp')

const sass = require('gulp-sass')                               // css pre-processor
const autoprefixer = require('gulp-autoprefixer')               // for cross browsing
const sourcemaps = require('gulp-sourcemaps')                   // source tracking

function cssSourcemap () {
  return src('index.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
      .on('error', function (err) {
        console.log(err.toString());
        this.emit('end');
      })
    )
    .pipe(autoprefixer({
      grid: 'autoplace',
      flexbox : true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./'))
}

function css () {
  return src('index.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    .pipe(autoprefixer({
      grid: 'autoplace',
      flexbox : true
    }))
    .pipe(dest('./'))
}

// ------------------------------------------------------------
// watch
// ------------------------------------------------------------
function watchChange () {
  watch('./**/*.{scss,sass}',cssSourcemap)
}

// ------------------------------------------------------------
// run task
// ------------------------------------------------------------
exports.dev = series(
  cssSourcemap,
  watchChange
)

exports.build = css
