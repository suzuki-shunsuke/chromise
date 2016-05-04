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


var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var _ = require('underscore');
// webpack = require('webpack-stream');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
// var path = require('path');


var configs = {
  'Chromise': {
    src: './src/Chromise.js',
    dest: './dist',
    minified: false,
    webpack: {
      entry: ['./src/Chromise.js'],
      externals: {
        'sinon-chrome': 'chrome',
      },
      output: {
        filename: 'Chromise.js',
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
        'sinon-chrome': 'chrome',
      },
      output: {
        filename: '[name].js',
        library: 'chromise',
        libraryTarget: 'umd'
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
        'sinon-chrome': 'chrome',
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
        'eventPage': ['./test/real/storage/src/eventPage.js'],
        'test': ['./test/real/storage/src/test.js']
      },
      externals: {
        'jquery': 'jQuery',
        'mithril': 'm',
        'mocha': true,
        'chai': true,
        'sinon-chrome': 'chrome',
      },
      output: {
        filename: '[name].js',
      },
    }
  },
  'test.mock.storage': {
    src: '**/*.js',
    dest: './test/mock/storage/dist',
    minified: false,
    webpack: {
      entry: {
        'index': ['./test/mock/storage/src/index.js']
      },
      externals: [{
        'jquery': 'jQuery',
        'mocha': true,
        'chai': true,
        'sinon-chrome': 'chrome'
      }],
      output: {
        filename: '[name].js',
      },
      // target: 'node',
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
);

gulp.task(
  'webpack',
  _.keys(configs).map(function(key) {
    return 'webpack.' + key;
  })
);
