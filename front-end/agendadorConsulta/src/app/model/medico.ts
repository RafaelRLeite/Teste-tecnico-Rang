export interface Medico {
  id?: number;
  tx_nome: string;
  nr_cpf: string;
  nr_crm: string;
  tx_especialidade: string;
  dt_criacao_medico: string;
  enderecos_medico?: [
    {
      id: number;
    }
  ];
  telefones_medico?: [
    {
      id: number;
    }
  ];
}
