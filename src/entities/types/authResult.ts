export interface authResult {
    status: string
    message: string
    data: Data
  }
  
  export interface Data {
    token: string
    user: User
  }
  
  export interface User {
    id: number
    name: string
    email: string
    email_verified_at: string
    role: number
    created_at: string
    updated_at: string
    deleted_at: any
    role_id: number
  }
  