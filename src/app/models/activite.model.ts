
  export interface Link {
      rel: string;
      href: string;
  }

  export interface Activite {
      identifiant: number;
      code: string;
      date_debut: string;
      date_fin: string;
      activite_pip: boolean;
      mode: string;
      montant: number;
      poids: number;
      _exercice: string;
      _action: string;
      _structure_executant: string;
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

  export interface ListActiviteResponse {
      data: Activite[];
      meta: Meta;
  }


