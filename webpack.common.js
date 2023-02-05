import path from 'path';

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'wds.js',
    path: path.resolve('.', 'src', 'docs', 'themes', 'wds', 'static', 'js'),
    clean: true
  },
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};