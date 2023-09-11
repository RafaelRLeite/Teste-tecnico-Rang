export interface UnidadeSaude {
  id?: number;
  nr_cnpj: string;
  tx_nome_fantasia: string;
  tx_razao_social: string;
  dt_abertura: string;
  dt_criacao_unidade_saude: string;
  telefones_unidade_saude?: [
    {
      id: number;
    }
  ];
  enderecos_unidade_saude?: [
    {
      id: number;
    }
  ];
  medicos: [
    {
      id?: number;
    }
  ];
}
