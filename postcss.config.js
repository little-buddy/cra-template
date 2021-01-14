module.exports = {
	plugins: [
		// 'autoprefixer',
		'postcss-aspect-ratio-mini',
		['postcss-write-svg', { utf8: false }],
		[
			'postcss-px-to-viewport',
			{
				unitToConvert: 'px',
				viewportWidth: 750,
				viewportHeight: 1334,
				viewportUnit: 'vw',
				unitPrecision: 3,
				fontViewportUnit: 'vw',
				minPixelValue: 1,
				mediaQuery: false,
				replace: true,
				exclude: [],
				landscape: false,
				landscapeUnit: 'vw',
				landscapeWidth: 568,
			},
		],
		'postcss-viewport-units',
		// TODO cssnano 本身包含 autoprefixer
		[
			'cssnano',
			{
				// cssnano-preset-*
				preset: 'advanced',
			},
		],
	],
};
