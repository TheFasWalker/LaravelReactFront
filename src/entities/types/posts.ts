export interface Iposts {
    data: Daum[]
    links: Links
    meta: Meta
  }
  
  export interface Daum {
    id: number
    title: string
    content: string
    image: string
    is_published: number
    deleted_at: any
    created_at: string
    updated_at: string
    category_id: number
  }
  
  export interface Links {
    first: string
    last: string
    prev: any
    next: string
  }
  
  export interface Meta {
    current_page: number
    from: number
    last_page: number
    links: Link[]
    path: string
    per_page: number
    to: number
    total: number
  }
  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }
  

  export interface iPost {
    
  }