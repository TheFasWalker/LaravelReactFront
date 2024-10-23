export interface Itags {
    data: Array<tagData>
    links: Links
    meta: Meta
  }

  export interface tagData {
    id: number
    title: string
    created_at: string
    updated_at: string
    deleted_at: any
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


export interface Itag {
    data:Array<tagData>
    id:number,
    title:string,
    created_at: string,
    updated_at:  string,
    deleted_at: null | string
}
