export interface Post {
  id: number
  title: { rendered: string }
  excerpt: { rendered: string }
  link: string
  featured_media: number
}

export interface Media {
  id: number
  source_url: string
}
