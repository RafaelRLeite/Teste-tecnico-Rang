export interface Page {
  content: Array<Content>;
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};

export interface Content {
  id?: number
  dt_marcacao:string
  status: string
  dt_criacao_agendamento: string
  medico: {
    tx_nome:String
    tx_especialidade:String
  }
};

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export interface Sort2 {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};
