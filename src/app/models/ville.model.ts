

  export interface Link {
      rel: string;
      href: string;
  }

  export interface Ville {
      identifiant: number;
      code: string;
      denomination: string;
      _departement: string;
      _user: string;
      created_at: string;
      updated_at: string;
      links: Link[];
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


