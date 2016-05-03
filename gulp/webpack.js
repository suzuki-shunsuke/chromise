/**
 * $ gulp webpack.Chromise
 * ./src/Chromise.js => ./dist/Chromise.js
 *
 * $ gulp webpack.jquery
 * ./src/chromise.jquery.js => ./dist/chromise.jquery.js
 *
 * $ gulp webpack.mithril
 * ./src/chromise.mithril.js => ./dist/chromise.mithril.js
 *
 * $ gulp webpack.test.real.storage
 * ./test/real/storage/src/index.js => ./test/real/storage/dist/index.js
 *
 * $ gulp webpack.test.mock.storage
 * ./test/mock/storage/src/index.js => ./test/mock/storage/dist/index.js
 *
 * $ gulp webpack.test.mock
 * $ gulp webpack.test.real
 * $ gulp webpack.test
 * $ gulp webpack.src
 * $ gulp webpack
 */


var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    _ = require('underscore'),
    // webpack = require('webpack-stream');
    webpack = require('webpack'),
    webpackStream = require('webpack-stream');

configs = {
  'Chromise': {
    src: './src/**/*.js',
    dest: './dist',
    minified: false,
    webpack: {
      entry: {
        'Chromise': ['./src/Chromise.js']
      },
      output: {
        filename: '[name].js',
        library: 'Chromise',
        libraryTarget: 'umd'
      },
    }
  },
  'jquery': {
    src: './src/**/*.js',
    dest: './dist',
    minified: false,
    webpack: {
      entry: {
        'chromise.jquery': ['./src/chromise.jquery.js']
      },
      externals: {
        'jquery': 'jQuery',
      },
      output: {
        filename: '[name].js',
        library: 'chromise',
        libraryTarget: 'var'
      },
    }
  },
  'mithril': {
    src: './src/**/*.js',
    dest: './dist',
    minified: false,
    webpack: {
      entry: {
        'chromise.mithril': ['./src/chromise.mithril.js']
      },
      externals: {
        'mithril': 'm',
      },
      output: {
        filename: '[name].js',
        library: 'chromise',
        libraryTarget: 'umd'
      },
    }
  },
  'test.real.storage': {
    src: './test/real/storage/src/**/*.js',
    dest: './test/real/storage/dist',
    minified: false,
    webpack: {
      entry: {
        'index': ['./test/real/storage/src/index.js']
      },
      externals: {
        'jquery': 'jQuery',
        'mithril': 'm',
        'mocha': true,
        'chai': true
      },
      output: {
        filename: '[name].js',
      },
    }
  },
  'test.mock.storage': {
    src: './test/mock/storage/src/**/*.js',
    dest: './test/mock/storage/dist',
    minified: false,
    webpack: {
      entry: {
        'index': ['./test/mock/storage/src/index.js']
      },
      // externals: ['jquery', 'mithril'],
      output: {
        filename: '[name].js',
      },
    }
  },
};

_.each(configs, function(config, key) {
  config.webpack.resolve = {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'bower_components'],
  };
  config.webpack.plugins = [
    // new webpack.ContextReplacementPlugin(/sinon/, /^$/),
    new webpack.IgnorePlugin(/sinon/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ];
  config.webpack.module = {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  };

  gulp.task('webpack.' + key, function() {
    gulp.src(config.src)
    .pipe(webpackStream(config.webpack))
    .pipe(gulpif(config.minified, uglify()))
    .pipe(gulp.dest(config.dest)); 
  });
});

gulp.task(
  'webpack.src',
  ['webpack.Chromise', 'webpack.jquery', 'webpack.mithril']
)

gulp.task(
  'webpack',
  _.keys(configs).map(function(key) {
    return 'webpack.' + key;
  })
);
