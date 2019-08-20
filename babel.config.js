module.exports = {
  'presets': [
    ['@babel/preset-env', {
      'targets': {
        'browsers': ['android >= 4.4']
      },
      'modules': 'commonjs',
      'useBuiltIns': 'usage'
    }]
  ],
  'plugins': ['@babel/plugin-proposal-class-properties']
};
