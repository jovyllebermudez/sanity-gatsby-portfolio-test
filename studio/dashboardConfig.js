export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60223ee1cf53668bd5e8f3f9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-test-studio-5six86j5',
                  apiId: '7676bfef-5bb2-444a-bf0c-5c3b1f929855'
                },
                {
                  buildHookId: '60223ee1fb90119f11fedc7b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-test-web-3ka7b8k6',
                  apiId: 'f2dfc011-9814-490e-8586-2996ce171316'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jovyllebermudez/sanity-gatsby-portfolio-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-test-web-3ka7b8k6.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
