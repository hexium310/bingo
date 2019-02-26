import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const loaders = {
  babel: {
    loader: 'babel-loader',
  },
  typescript: {
    loader: 'awesome-typescript-loader',
  },
}

export default {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: loaders.babel,
      },
      {
        test: /.tsx?$/,
        use: loaders.typescript,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
}
