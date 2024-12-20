import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['Particles', 'Hamburger', 'Awards', 'Introduction', 'Passion', 'Tools']
        }
      ]
    }
  }
];
