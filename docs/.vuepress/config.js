const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Inventory API',
  base: '/inventory-docs/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  theme: 'yuu',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#800000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
      'meta',
      {
        name: 'og:image',
        content: 'https://www.itmerida.mx/imagenes/tec.png'
      }
    ],
    [
      'link',
      {
        href: 'https://www.itmerida.mx/imagenes/tec.png',
        rel: 'shortcut icon'
      }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Alvarez-P',
    editLinks: false,
    logo: 'https://www.itmerida.mx/imagenes/tec.png',
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Configuración',
        link: '/setup/',
      },
      {
        text: 'Base de Datos',
        link: '/models/'
      },
      {
        text: 'Rutas',
        link: '/routes/'
      }
    ],
    sidebar: {
      '/setup/': [
        {
          title: 'Configuración',
          collapsable: false,
          children: [
            'requirements',
            'installations',
            'configuration',
          ]
        }
      ],
      '/routes/': [
        {
          title: 'Rutas',
          collapsable: false,
          children: [
            '',
            'auth',
            'profile',
            'category',
            'provider',
            'product',
            'inventory',
            'buy',
            'sale',
            'expense'
          ]
        }
      ],
      '/models/': [
        {
          title: 'Base de Datos',
          collapsable: false,
          children: [
            '',
            'models'
          ]
        }
      ],
    },
    yuu: {
			defaultDarkTheme: true,
      colorThemes: ['red','blue','cyan'],
      defaultColorTheme: 'cyan'
		},
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
