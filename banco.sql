CREATE DATABASE agendador_consulta;

CREATE TABLE unidade_saude(
	id bigint AUTO_INCREMENT PRIMARY KEY,
	nr_cnpj varchar(255) NOT NULL,
	tx_razao_social varchar(255) NOT NULL,
	tx_nome_fantasia varchar(255),
	dt_abertura date,
	dt_criacao_unidade_saude datetime(6) NOT NULL
);

CREATE TABLE medico(
	id bigint AUTO_INCREMENT PRIMARY KEY,
	tx_nome varchar(255) NOT NULL,
	tx_especialidade varchar(255) NOT NULL,
	nr_cpf varchar(255) NOT NULL,
	nr_crm varchar(255) NOT NULL,
	dt_criacao_medico datetime(6) NOT NULL,
	unidade_saude bigint,
	CONSTRAINT FK_unidade_saude_medico FOREIGN KEY (unidade_saude) REFERENCES unidade_saude(id) ON DELETE CASCADE
);

CREATE TABLE agendamento(
	id bigint AUTO_INCREMENT PRIMARY KEY,
	dt_marcacao datetime(6) NOT NULL,
	status tinyint NOT NULL,
	medico bigint NOT NULL,
	dt_criacao_agendamento datetime(6),
	CONSTRAINT FK_medico_agendamento FOREIGN KEY (medico) REFERENCES medico(id) ON DELETE CASCADE
);

CREATE TABLE endereco(
	id bigint AUTO_INCREMENT PRIMARY KEY,
	nr_cep varchar(255),
  	tx_logradouro varchar(255) ,
  	tx_complemento varchar(255),
  	tx_bairro varchar(255),
  	tx_localidade varchar(255),
  	tx_uf varchar(255),
  	unidade_saude bigint,
  	medico bigint,
  	CONSTRAINT FK_endereco_unidade_saude FOREIGN KEY (unidade_saude) REFERENCES unidade_saude(id) ON DELETE CASCADE,
  	CONSTRAINT FK_endereco_medico FOREIGN KEY (medico) REFERENCES medico(id) ON DELETE CASCADE
);

CREATE TABLE telefone(
	id bigint AUTO_INCREMENT PRIMARY KEY,
	nr_ddd_telefone int,
	nr_telefone int,
	nr_ddd_celular int,
	nr_celular int,
	unidade_saude bigint,
	medico bigint,
	CONSTRAINT FK_telefone_unidade_saude FOREIGN KEY (unidade_saude) REFERENCES unidade_saude(id) ON DELETE CASCADE,
	CONSTRAINT FK_telefone_medico FOREIGN KEY (medico) REFERENCES medico(id) ON DELETE CASCADE
);

CREATE TABLE users(
	id bigint AUTO_INCREMENT PRIMARY KEY,
	login varchar(255) NOT NULL UNIQUE,
	password varchar(255) NOT NULL,
	role tinyint(255) NOT null
);


INSERT INTO unidade_saude (nr_cnpj, tx_razao_social, tx_nome_fantasia, dt_abertura, dt_criacao_unidade_saude)
VALUES
    ("05.500.000/0000-51", "Empresa Fictícia 5", "EF5 Empreendimentos", DATE(NOW()), NOW()),
    ("06.600.000/0000-51", "Empresa Fictícia 6", "EF6 Empreendimentos", DATE(NOW() + INTERVAL 5 YEAR), NOW());

INSERT INTO medico (tx_nome, tx_especialidade, nr_cpf, nr_crm, dt_criacao_medico, unidade_saude)
VALUES
    ("Marina Ferreira Santos", "Ginecologista", "033.248.596-72", "987654321", NOW(), 1),
    ("Carlos Silva Junior", "Dermatologista", "044.356.789-03", "543210987", NOW(), 1),
    ("Amanda Costa Pereira", "Oftalmologista", "055.467.890-14", "456789012", NOW(), 1),
    ("Luciana Oliveira Souza", "Clínico Geral", "066.578.902-14", "567890123", NOW(), 1),
    ("Fernando Santos Silva", "Ortopedista", "077.689.013-25", "678901234", NOW(), 2),
    ("Beatriz Gonçalves Lima", "Psiquiatra", "088.790.124-36", "789012345", NOW(), 2),
    ("Gustavo Pereira Almeida", "Cardiologista", "099.801.235-47", "890123456", NOW(), 2),
    ("Patricia Ferreira Costa", "Neurologista", "100.912.365-78", "901234567", NOW(), 2);


INSERT INTO agendamento
(dt_marcacao, status, medico, dt_criacao_agendamento)
VALUES
	(NOW(), 0, 1, NOW()),
	(NOW() + INTERVAL 1 HOUR, 1, 1, NOW()),
	(NOW() + INTERVAL 2 HOUR, 2, 1, NOW()),
    (NOW() + INTERVAL 3 HOUR, 3, 1, NOW()),
    (NOW(), 0, 2, NOW()),
    (NOW() + INTERVAL 2 HOUR, 1, 2, NOW()),
    (NOW() + INTERVAL 3 HOUR, 2, 2, NOW()),
    (NOW() + INTERVAL 4 HOUR, 3, 2, NOW()),
    (NOW(), 0, 3, NOW()),
    (NOW() + INTERVAL 1 HOUR, 1, 3, NOW()),
    (NOW() + INTERVAL 2 HOUR, 2, 3, NOW()),
    (NOW() + INTERVAL 3 HOUR, 3, 3, NOW()),
    (NOW(), 0, 4, NOW()),
    (NOW() + INTERVAL 1 HOUR, 1, 4, NOW()),
    (NOW() + INTERVAL 2 HOUR, 2, 4, NOW()),
    (NOW() + INTERVAL 3 HOUR, 3, 4, NOW()),
    (NOW(), 0, 5, NOW()),
    (NOW() + INTERVAL 1 HOUR, 1, 5, NOW()),
    (NOW() + INTERVAL 2 HOUR, 2, 5, NOW()),
    (NOW() + INTERVAL 3 HOUR, 3, 5, NOW()),
    (NOW(), 0, 6, NOW()),
    (NOW() + INTERVAL 1 HOUR, 1, 6, NOW()),
    (NOW() + INTERVAL 2 HOUR, 2, 6, NOW()),
    (NOW() + INTERVAL 3 HOUR, 3, 6, NOW()),
	(NOW(), 0, 7, NOW()),
    (NOW() + INTERVAL 1 HOUR, 1, 7, NOW()),
    (NOW() + INTERVAL 2 HOUR, 2, 7, NOW()),
    (NOW() + INTERVAL 3 HOUR, 3, 7, NOW()),
    (NOW(), 0, 8, NOW()),
    (NOW() + INTERVAL 1 HOUR, 1, 8, NOW()),
    (NOW() + INTERVAL 2 HOUR, 2, 8, NOW()),
    (NOW() + INTERVAL 3 HOUR, 3, 8, NOW());

INSERT INTO telefone (nr_ddd_telefone, nr_telefone, nr_ddd_celular, nr_celular, unidade_saude, medico)
VALUES
    (61, 986380933, 61, 986380933, 1, NULL),
    (62, 987654321, 62, 987654321, 1, NULL),
    (63, 988765432, 63, 988765432, 2, NULL),
    (64, 989876543, 64, 989876543, 2, NULL),
    (65, 981234567, 65, 981234567, NULL, 1),
    (66, 982345678, 66, 982345678, NULL, 1),
    (67, 983456789, 67, 983456789, NULL, 2),
    (68, 984567890, 68, 984567890, NULL, 2),
    (69, 985678901, 69, 985678901, NULL, 3),
    (70, 986789012, 70, 986789012, NULL, 3),
    (71, 987654321, 71, 987654321, NULL, 4),
    (72, 988765432, 72, 988765432, NULL, 5),
    (73, 989876543, 73, 989876543, NULL, 6),
    (74, 981234567, 74, 981234567, NULL, 7),
    (75, 982345678, 75, 982345678, NULL, 8);


INSERT INTO endereco (nr_cep, tx_logradouro, tx_complemento, tx_bairro, tx_localidade, tx_uf, unidade_saude, medico)
VALUES
    (70658298, "Rua fulano de tal", NULL, "Cruzeiro", "Brasília", "DF", 1, NULL),
    (70750210, "Avenida Qualquer 123", NULL, "Asa Sul", "Brasília", "DF", 1, NULL),
    (70820230, "Quadra Qualquer 456", "Bloco B", "Asa Norte", "Brasília", "DF", 2, NULL),
    (70990250, "Praça Fictícia 789", NULL, "Centro", "São Paulo", "SP", 2, NULL),
    (71050270, "Rua Fictícia 456", "Apto 101", "Jardim", "Rio de Janeiro", "RJ", NULL, 1),
    (71180290, "Avenida Imaginária 987", "Sala 101", "Vila Nova", "Porto Alegre", "RS", NULL, 1),
    (71250310, "Alameda dos Sonhos 654", NULL, "Setor Oeste", "Goiânia", "GO", NULL, 2),
    (71320350, "Travessa Sem Nome 123", NULL, "Bairro X", "Belo Horizonte", "MG", NULL, 2),
    (71490370, "Avenida Fictícia 567", "Andar 5", "Vila Y", "Curitiba", "PR", NULL, 3),
    (71550490, "Praça da Liberdade 987", NULL, "Liberdade", "Salvador", "BA", NULL, 3),
    (71630480, "Rua da Imaginação 789", "Bloco C", "Bairro Y", "Florianópolis", "SC", NULL, 4),
    (71710510, "Avenida Fictícia 987", "Sala 202", "Vila X", "Campinas", "SP", NULL, 5),
    (71850540, "Travessa dos Sonhos 456", NULL, "Setor Leste", "Porto Velho", "RO", NULL, 6),
    (71980670, "Praça Fictícia 654", NULL, "Centro", "Maceió", "AL", NULL, 7),
    (72050790, "Rua da Liberdade 123", NULL, "Liberdade", "Recife", "PE", NULL, 8);

INSERT INTO users
(login, password, `role`)
VALUES("rafael", "$2a$10$3.ahAZgRd8SWD/Pv5ZoHKOVRuyuEd7VyBAzUBBRLn9m6Btj6kuXTW", 0);
