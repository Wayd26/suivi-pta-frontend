


export interface Link {
      rel: string;
      href: string;
  }

  export interface Ville {
    id: number;
    code: string;
    denomination: string;
    _department: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
      links: Link[];
  }
  export interface VilleExport {
    identifiant: number;
    code: string;
    denomination: string;
    _departement: string;
}

  export interface Links {
      next: string;
  }

  export interface Pagination {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
      links: Links;
  }

  export interface Meta {
      pagination: Pagination;
  }

  export interface ListVilleResponse {
      data: Ville[];
      meta: Meta;
  }


export interface VilleResponse {
  data: Ville;
}
