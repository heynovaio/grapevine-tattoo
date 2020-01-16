import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'

const hiddenDocTypes = listItem =>
  !['category', 'companyInfo', 'page', 'person', 'artist', 'guestArtist','post', 'project', 'siteSettings'].includes(listItem.getId())

export default () =>
S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.listItem()
        .title('Tattoo Projects')
        .schemaType('project')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('News')
        .schemaType('post')
        .child(S.documentTypeList('post').title('News')),
      S.listItem()
        .title('Artists')
        .schemaType('artist')
        .child(S.documentTypeList('artist').title('Artists')),
      S.listItem()
        .title('Guest Artists')
        .schemaType('guestArtist')
        .child(S.documentTypeList('guestArtist').title('Guest Artists')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FaFile),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaFile),
              S.listItem()
                .title('FAQ')
                .child(
                  S.editor()
                    .id('faqPage')
                    .schemaType('page')
                    .documentId('faq')
                )
                .icon(FaFile)
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
