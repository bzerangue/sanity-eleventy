export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5dfe554dde05106bdf4bc4fa',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-studio-nk1sfhjo',
                  apiId: '6d12ee85-2095-4b03-9807-1ff4a2aa0bae'
                },
                {
                  buildHookId: '5dfe554d213993211babc95c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-web',
                  apiId: '4fc34292-40e6-4ea7-922c-2d62ef277152'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bzerangue/sanity-eleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
