import Prismic from 'prismic-javascript';
// import { Document as PrismicDocument } from 'prismic-javascript/types/documents'
import { PrismicDocument } from 'prismic-reactjs';

const apiEndpoint = 'https://hvl-tests.prismic.io/api/v2';

// -- Links resolution rules
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes
export const linkResolver = (doc: PrismicDocument) => {
  console.log({ doc })
  switch (doc.type) {
    case ('page'): return `/${doc.uid}`
    case ('about'): return '/about'
    case ('quoteslist'): return '/quotes'
    default: return '/'
  }
}

export const client = Prismic.client(apiEndpoint);
