

  export interface Link {
      rel: string;
      href: string;
  }

  export interface Structure {
    id: number;
    code: string;
    denomination: string;
    po_box: string;
    abbreviation: string;
    email: string;
    website: string;
    url_logo?: any;
    cellphone: string;
    _town: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
      links: Link[];
  }
  export interface StructureExport {
    identifiant: number;
    code: string;
    bp: string;
    sigle: string;
    denomination: string;
    email: string;
    site_web: string;
    logo: string;
    telephone: string;
    _ville: string;
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

  export interface ListStructureResponse {
      data: Structure[];
      meta: Meta;
  }
  export interface StructureResponse {
      data: Structure;
  }
  export interface CreateStructure {
    boite_postal: string;
    sigle: string;
    denomination: string;
    email: string;
    site_web: string;
    telephone: string;
    ville_id: number;
  }



