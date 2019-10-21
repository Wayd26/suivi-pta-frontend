
  export interface Link {
    rel: string;
    href: string;
  }

  export interface Ministere {
    id: number;
    code: string;
    denomination: string;
    po_box: string;
    abbreviation: string;
    email: string;
    website: string;
    url_logo: string;
    cellphone: string;
    _town?: any;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    links: Link[];
  }

  export interface MinistereExport {
    identifiant: number;
    code: string;
    denomination: string;
    sigle: string;
    bp: string;
    email: string;
    telephone: string;
    site_web: string;
    _departement: string;
    _ville: string;
  }

  export interface Links {
    next: string;
  }

  export interface ListMinistereResponse {
    data: Ministere[];
  }

  export interface MinistereResponse {
    data: Ministere;
  }



