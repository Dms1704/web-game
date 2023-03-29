module.exports = {
	root: true,
	globals: {
		// 声明 jQuery 对象为全局变量
		$: false, // true表示该变量为 writeable，而 false 表示 readonly
		jQuery: false,
	},
	env: {
		node: true,
	},
	extends: [
		'google',
		'eslint:recommended', // 官方拓展
		'plugin:prettier/recommended',
	],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
};
