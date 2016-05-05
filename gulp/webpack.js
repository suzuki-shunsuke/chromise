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


let gulp = require('gulp');
let gulpif = require('gulp-if');
let uglify = require('gulp-uglify');
let _ = require('underscore');
// webpack = require('webpack-stream');
let webpack = require('webpack');
let webpackStream = require('webpack-stream');
// let path = require('path');


let configs = {
  'Chromise': {
    src: './src/base.js',
    dest: './dist',
    minified: false,
    webpack: {
      entry: ['./src/base.js'],
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

_.each(configs, (config, key) => {
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

  gulp.task('webpack.' + key, () => {
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

gulp.task('webpack', _.keys(configs).map(key => 'webpack.' + key));
