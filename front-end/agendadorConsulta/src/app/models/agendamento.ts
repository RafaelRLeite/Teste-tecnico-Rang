export interface Agendamento {
  id?: number;
  dtMarcacaoControl?: Date;
  hrMarcacaoControl?: string;
  dt_marcacao: string;
  status: number;
  dt_criacao_agendamento: string;
  medico: {
    tx_nome: String;
    tx_especialidade: String;
  };
}
