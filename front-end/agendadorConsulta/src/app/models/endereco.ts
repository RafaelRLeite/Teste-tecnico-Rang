export interface Endereco {
  id?: number;
  nr_cep: string;
  tx_bairro: string;
  tx_complemento?: string;
  tx_localidade: string;
  tx_logradouro: string;
  tx_uf: string;
  long_medico: number;
  long_unidade_saude: number;
}
