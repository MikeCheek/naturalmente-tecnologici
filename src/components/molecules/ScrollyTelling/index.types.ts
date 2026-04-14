import { IGatsbyImageData } from 'gatsby-plugin-image'
import EdizioniData from '../../../templates/Edizioni/index.types'

type FileEdge = {
  node: {
    name?: string
    publicURL?: string
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export type EditionMediaData = {
  allFile?: {
    edges: FileEdge[]
  }
}

export default interface ScrollyTellingProps extends EdizioniData {
  data: EditionMediaData
}
