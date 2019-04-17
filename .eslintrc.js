module.exports = {
	extends: ['eslint:recommended', 'airbnb'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'no-tabs': 0,
		indent: [2, 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'max-len': ['error', {
			code: 120,
			tabWidth: 4
		}],
	}
}