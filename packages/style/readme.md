# glacier-style
- normalize style in scss file

## using
in your project

### type sass

```
@import './node_modules/glacier-style/glacier.scss';
```

### type css
```
@import './node_modules/glacier-style/glacier.css';
```

### with gulp.js@4.0

convert with node-scss

```
// gulpfile.js example
const sass = require('gulp-sass') // css pre-processor

function css () {
  return src([
      'node_modules/glacier/glacier.scss',
      'path/to/your/css/**.scss'
    ])
    .pipe(sass())
    .pipe(dest(path.dist))
}

export.css = css
```
