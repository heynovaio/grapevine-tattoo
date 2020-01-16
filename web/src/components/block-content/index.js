import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Figure from './figure'

import typography from '../typography.module.css'

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {

        case 'h2':
          return <h2 className={typography.gridTitle}>{props.children}</h2>

        case 'h3':
          return <h3 className={typography.gridSubTitle}>{props.children}</h3>


        case 'blockquote':
          return <blockquote className={typography.blockQuote}>{props.children}</blockquote>

        default:
          return <p className={typography.paragraph}>{props.children}</p>
      }
    },
    figure (props) {
      return <Figure {...props.node} />
    },

  }
}

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent
