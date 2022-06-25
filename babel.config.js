/** @type {import('@babel/core').TransformOptions} */
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: 16,
                },
                useBuiltIns: "entry",
                corejs: 3,
            },
        ],
        [
            "@babel/preset-typescript",
            {
                isTSX: true,
                allExtensions: true,
                allowDeclareFields: true,
            },
        ],
    ],
};
