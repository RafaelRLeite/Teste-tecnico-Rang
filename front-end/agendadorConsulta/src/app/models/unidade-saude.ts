import { Endereco } from './endereco';
import { Medico } from './medico';
import { Telefone } from './telefone';

export interface UnidadeSaude {
  id?: number;
  nr_cnpj: string;
  tx_nome_fantasia: string;
  tx_razao_social: string;
  dt_abertura: string;
  dt_criacao_unidade_saude: string;
  telefones_unidade_saude?: Telefone[];
  enderecos_unidade_saude?: Endereco[];
  medicos: Medico[];
}
