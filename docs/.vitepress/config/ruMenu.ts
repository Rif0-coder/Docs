export default [
  {
    text: 'Компоненты',
    collapsed: false,
    items: [
      { text: 'ABTest', link: '/components/abtest' },
      { text: 'AjaxForm', link: '/components/ajaxform' },
      {
        text: 'AjaxFormItLogin',
        collapsed: true,
        items: [
          {
            text: 'Общие сведения',
            link: '/components/ajaxformItlogin/general-information/index',
            collapsed: true,
            items: [
              { text: 'Системные настройки', link: '/components/ajaxformItlogin/general-information/system-settings' },
              { text: 'Скрипты и Стили', link: '/components/ajaxformItlogin/general-information/scripts-and-styles' },
              { text: 'Системные события', link: '/components/ajaxformItlogin/general-information/system-events' },
            ],
          },
          {
            text: 'Сниппеты',
            collapsed: true,
            items: [
              { text: 'aflActivateUser', link: '/components/ajaxformItlogin/snippets/ajaxformitlogin' },
              { text: 'AjaxFormitLogin', link: '/components/ajaxformItlogin/snippets/aflactivateuser' },
              { text: 'Кастомные сниппеты', link: '/components/ajaxformItlogin/snippets/custom-snippets' },
            ],
          },
          {
            text: 'Хуки',
            collapsed: true,
            items: [
              { text: 'AjaxIdentification', link: '/components/ajaxformItlogin/hooks/ajaxidentification' },
            ],
          },
          {
            text: 'Валидаторы',
            collapsed: true,
            items: [
              { text: 'aflCheckPassLength', link: '/components/ajaxformItlogin/validators/aflcheckpasslength' },
              { text: 'aflPasswordConfirm', link: '/components/ajaxformItlogin/validators/aflpasswordconfirm' },
              { text: 'aflRequiredIf', link: '/components/ajaxformItlogin/validators/aflrequiredif' },
              { text: 'aflUserExists', link: '/components/ajaxformItlogin/validators/afluserexists' },
              { text: 'aflUserNotExists', link: '/components/ajaxformItlogin/validators/aflusernotexists' },
            ],
          },
        ],
      },
      { text: 'AjaxSnippet', link: '/components/ajaxsnippet' },
      {
        text: 'amoCRM',
        collapsed: true,
        items: [
          {
            text: 'Возможности и быстрый старт',
            link: '/components/amocrm/fast-start',
          },
          {
            text: 'Установка и настройка',
            link: '/components/amocrm/basic-setup',
          },
          {
            text: 'Отправка данных из форм',
            link: '/components/amocrm/submitting-forms',
          },
          {
            text: 'Webhook',
            link: '/components/amocrm/webhook',
          },
          {
            text: 'События',
            link: '/components/amocrm/events',
          },
          {
            text: 'Распространенные ошибки',
            link: '/components/amocrm/common-mistakes',
          },
        ],
      },
      { text: 'autoRedirector', link: '/components/autoredirector' },
      { text: 'CallBack', link: '/components/callback' },
      { text: 'CitySelect', link: '/components/cityselect' },
      { text: 'ClickToCall', link: '/components/clicktocall' },
      {
        text: 'Comparison',
        collapsed: true,
        link: '/components/comparison/index',
        items: [
          { text: 'addComparison', link: '/components/comparison/addcomparison' },
          { text: 'CompareList', link: '/components/comparison/comparelist' },
          { text: 'getComparison', link: '/components/comparison/getcomparison' },
        ],
      },
      { text: 'CurrencyRate', link: '/components/currencyrate' },
      { text: 'customExtra', link: '/components/customextra' },
      { text: 'DebugParser', link: '/components/debugparser' },
      { text: 'DigitalSignage', link: '/components/digitalsignage' },
      { text: 'ePochta', link: '/components/epochta' },
      { text: 'FileAttach', link: '/components/fileattach' },
      { text: 'FrontendEditor', link: '/components/frontendeditor' },
      { text: 'frontTabs', link: '/components/fronttabs' },
      { text: 'Ideas', link: '/components/ideas' },
      {
        text: 'Localizator',
        link: '/components/localizator/index',
        collapsed: true,
        items: [
          { text: 'Сниппет Localizator', link: '/components/localizator/snippet-localizator' },
          { text: 'Переключение языков', link: '/components/localizator/switch-languages' },
          { text: 'События', link: '/components/localizator/events' },
          { text: 'Формирование sitemap', link: '/components/localizator/sitemap-formation' },
          { text: 'Импорт в локализации', link: '/components/localizator/import-in-localization' },
          { text: 'seoTemplates', link: '/components/localizator/seotemplates' },
          { text: 'Атрибут hreflang', link: '/components/localizator/hreflang-attribute' },
        ],
      },
      { text: 'mapex2', link: '/components/mapex2' },
      { text: 'mdDocs', link: '/components/mddocs' },
      { text: 'MinifyX', link: '/components/minifyx' },
      { text: 'mixedImage', link: '/components/mixedimage' },
      { text: 'modDevTools', link: '/components/moddevtools' },
      { text: 'modTree', link: '/components/modtree' },
      { text: 'modVkMarket', link: '/components/modvkmarket' },
      {
        text: 'msFavorites',
        link: '/components/msfavorites/index',
        collapsed: true,
        items: [
          { text: 'Обновление', link: '/components/msfavorites/update' },
          { text: 'Быстрый старт', link: '/components/msfavorites/fast-start' },
        ],
      },
      {
        text: 'msImportExport',
        collapsed: true,
        items: [
          { text: 'Параметры', link: '/components/msimportexport/msimportexport-1.0' },
          { text: 'Шаблоны', link: '/components/msimportexport/msimportexport-2.0' },
        ],
      },
      { text: 'NotFoundParamAlert', link: '/components/notfoundparamalert' },
      {
        text: 'orderPrint',
        collapsed: true,
        items: [
          { text: 'Параметры', link: '/components/orderprint/settings' },
          { text: 'Шаблоны', link: '/components/orderprint/templates' },
        ],
      },
      { text: 'OrphoMan', link: '/components/orphoman' },
      {
        text: 'PageBreaker',
        collapsed: true,
        link: '/components/pagebreaker/index',
        items: [
          { text: 'Настройки', link: '/components/pagebreaker/settings' },
          { text: 'Поддержка TinyMCE', link: '/components/pagebreaker/tinymce-support' },
        ],
      },
      { text: 'PageSpeed', link: '/components/pagespeed' },
      {
        text: 'PdoTools',
        collapsed: true,
        items: [
          {
            text: 'Сниппеты',
            link: '/components/pdotools/general-information/index',
            collapsed: true,
            items: [
              { text: 'pdoResources', link: '/components/pdotools/snippets/pdoresources' },
              { text: 'pdoMenu', link: '/components/pdotools/snippets/pdomenu' },
              { text: 'pdoPage', link: '/components/pdotools/snippets/pdopage' },
              { text: 'pdoCrumbs', link: '/components/pdotools/snippets/pdocrumbs' },
              { text: 'pdoUsers', link: '/components/pdotools/snippets/pdousers' },
              { text: 'pdoSitemap', link: '/components/pdotools/snippets/pdositemap' },
              { text: 'pdoNeighbors', link: '/components/pdotools/snippets/pdoneighbors' },
              { text: 'pdoField', link: '/components/pdotools/snippets/pdofield' },
              { text: 'pdotitle', link: '/components/pdotools/snippets/pdotitle' },
              { text: 'pdoArchive', link: '/components/pdotools/snippets/pdoarchive' },
            ],
          },
          {
            text: 'Классы',
            link: '/components/pdotools/classes/index',
            collapsed: true,
            items: [
              { text: 'pdoResources', link: '/components/pdotools/classes/pdotools' },
              { text: 'pdoFetch', link: '/components/pdotools/classes/pdofetch' },
              { text: 'pdoParser', link: '/components/pdotools/classes/pdoparser' },
            ],
          },
          { text: 'Общие параметры', link: '/components/pdotools/general-parameters' },
          { text: 'Файловые элементы', link: '/components/pdotools/file-elements' },
          { text: 'Парсер', link: '/components/pdotools/parser' },
        ],
      },
      { text: 'PromoDs', link: '/components/promods' },
      { text: 'ReachGoal', link: '/components/reachgoal' },
      { text: 'Save2Page', link: '/components/save2page' },
      { text: 'SEODomains', link: '/components/seodomains' },
      { text: 'SEO Suite', link: '/components/seosuite' },
      {
        text: 'SEOtabs',
        collapsed: true,
        items: [
          { text: 'Быстрый старт', link: '/components/seotabs/fast-start' },
          { text: 'Сниппет seoTabs', link: '/components/seotabs/snippet-seotabs' },
        ],
      },
      { text: 'simpleQueue', link: '/components/simplequeue' },
      {
        text: 'Scheduler',
        link: '/components/scheduler/index',
        collapsed: true,
        items: [
          { text: 'Установка', link: '/components/scheduler/installation' },
          { text: 'Создание задания', link: '/components/scheduler/create-a-task' },
          { text: 'Планирование задания', link: '/components/scheduler/job-scheduling' },
          { text: 'Разработка заданий', link: '/components/scheduler/task-development' },
        ],
      },
      { text: 'ShoppingCart', link: '/components/shoppingcart' },
      {
        text: 'textAdvs',
        collapsed: true,
        link: '/components/textadvs/index',
        items: [
          { text: 'Как добавить тег', link: '/components/textadvs/how-to-add-a-tag' },
        ],
      },
      { text: 'StaticSaver', link: '/components/staticsaver' },
      { text: 'ViewsOnline', link: '/components/viewsonline' },
      { text: 'VoteForms', link: '/components/voteforms' },
      { text: 'YandexMaps', link: '/components/ajaxsnippet' },
      { text: 'WebDAV', link: '/components/webdav' },
      { text: 'userMarker', link: '/components/usermarker' },
      { text: 'UsersOnline', link: '/components/usersonline' }
    ],
  },
]
