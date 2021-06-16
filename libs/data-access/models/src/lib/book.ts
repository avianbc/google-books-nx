export interface Book {
  kind?: string;
  id: string;
  etag?: string;
  selfLink?: string;
  volumeInfo: VolumeInfo;
  saleInfo?: SaleInfo;
  accessInfo?: AccessInfo;
  searchInfo: SearchInfo;
}

export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: Epub;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface Epub {
  isAvailable: boolean;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}

export interface SearchInfo {
  textSnippet: string;
}

export interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes?: ReadingModes;
  pageCount?: number;
  printType?: string;
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: PanelizationSummary;
  imageLinks: ImageLinks;
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

export function generateMockBook(): Book {
  return {
    id: '1',
    volumeInfo: {
      title: 'title',
      subtitle: 'subtitle',
      authors: ['author1', 'author2'],
      publisher: 'publisher',
      publishedDate: 'publishedDate',
      description: 'description',
      imageLinks: {
        thumbnail: 'thumbnail',
        smallThumbnail: 'smallThumbnail',
      },
    },
    searchInfo: {
      textSnippet: 'textSnippet',
    }
  };
}
