const { isDev } = require('../common/webpack.helpers');
const SveltePreprocess = require('svelte-preprocess');

module.exports = [
    // {
    //     test: /\.svelte$/,
    //     loader: 'svelte-loader',
    //     options: {
    //       compilerOptions: {
    //         dev: isDev()
    //       },

    //       emitCss: true,
    //       hotReload: isDev(),
    //       preprocess: require('svelte-preprocess')({})
    //     }
    //   },
    {
      test: /\.svelte$/,
      use: {
        loader: 'svelte-loader',
        options: {
          compilerOptions: {
            // Dev mode must be enabled for HMR to work!
            dev: isDev()
          },
          emitCss: !isDev(),
          hotReload: isDev(),
          hotOptions: {
            // List of options and defaults: https://www.npmjs.com/package/svelte-loader-hot#usage
            noPreserveState: false,
            optimistic: true,
          },
          preprocess: SveltePreprocess({
            scss: true,
            sass: true,
          })
        }
      }
    },
];
