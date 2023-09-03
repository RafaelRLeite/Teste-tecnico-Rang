export interface Agendamento {
  id?: number
  dt_marcacao:string
  status: string
  dt_criacao_agendamento: string
  medico: {
    tx_nome:String
    tx_especialidade:String
  }
}
