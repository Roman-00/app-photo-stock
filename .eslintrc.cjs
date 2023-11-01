module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 2021,
    },
    rules: {
        'no-console':                        process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger':                       process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent':                            ['error', 4],
        'semi':                              ['error', 'always'],
        'quotes':                            ['error', 'single'],
        'key-spacing':                       [
            'error',
            {
                'align': 'value',
            }
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 2,
            },
        ],
        'import/prefer-default-export': ['off'],
    },
    overrides: [
        {
            files: [
                '**/*.{ts,tsx,vue}',
            ],
            rules: {
                'no-undef':             'off',
                'import/no-unresolved': 'off',
            },
        },
        {
            files: [
                '**/*.vue',
            ],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
    },
};
