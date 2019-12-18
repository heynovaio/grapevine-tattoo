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
                  buildHookId: '5df9d42dfb22ac6a3d601807',
                  title: 'Sanity Studio',
                  name: 'grapevine-tattoo-studio',
                  apiId: 'cbc916e6-2dbf-48b9-b3f6-2b2cb7d8ee33'
                },
                {
                  buildHookId: '5df9d42d4787b756e024a9fe',
                  title: 'Portfolio Website',
                  name: 'grapevine-tattoo',
                  apiId: '1d255ead-b65e-4000-9646-c8d841c623b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kirstenjvd/grapevine-tattoo',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://grapevine-tattoo.netlify.com',
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
