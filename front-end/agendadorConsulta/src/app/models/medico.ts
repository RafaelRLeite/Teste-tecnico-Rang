import { Endereco } from './endereco';
import { Telefone } from './telefone';

export interface Medico {
  id?: number;
  tx_nome: string;
  nr_cpf: string;
  nr_crm: string;
  tx_especialidade: string;
  dt_criacao_medico: string;
  unidade_saude: {
    tx_razao_social: string;
  };
  enderecos_medico?: Endereco[];
  telefones_medico?: Telefone[];
  expandido?: boolean;
}
