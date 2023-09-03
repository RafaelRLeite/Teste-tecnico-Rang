# Sistema de Gerenciamento de Consultas Médicas

| É um sistema de gerenciamento de consultas desenvolvido em Java, que utiliza a arquitetura de microserviços com Spring e o banco MySQL. Ele possui uma interface de usuário web utilizando Angular, HTML5 e CSS3 com visualização dos horários disponiveis dos médicos no formato de calendário. Além disso, o projeto é gerenciado pelo GIT e hospedado no GitHub. O objetivo do Gerenciamento de Consultas é lidar com agendamentos em unidades de saúde, sendo que cada unidade de saúde pode ter vários médicos, e cada médico pode ter vários horários disponíveis para agendamento. O paciente poderá selecionar uma unidade de saúde, escolher um médico e agendar um horário disponível.|
| --- |

## Entidades
	* Unidade de Saude
	* Medico
	* Agendamento
	* Telefone
	* Endereco
	* User

## Funcionalidades
	* Cadastro, consulta, alteração e exclusão de médicos, seus telefones e endereços.
	* Cadastro, consulta, alteração e exclusão de unidades de saúde, seus telefones e endereços.
	* Agendamento, alteração e exclusão de consultas médicas.
	* Utilização de HTML5, CSS3 e Angular para a interface do usuário
	* Calendário de visualização dos horários disponiveis dos médicos.
	* Controle de versão utilizando Git e GitHub para gerenciamento de projetos.  
---
## Tecnologias utilizadas
	* Java
	* Spring
	* MySQL
	* HTML5
	* CSS3
	* Angular
	* GIT
	* GitHub
---
## Como executar
Para executar o sistema, é necessário ter instalado as seguintes tecnologias:

- Backend: **[Java](https://openjdk.java.net/install/)**
- Gerenciador de Depêndencias: **[Maven](https://maven.apache.org/download.cgi)**
- Frontend: **[Node](https://nodejs.org/en/download)**
- Banco: **[MySQL](https://dev.mysql.com/downloads/installer/)**

Com as tecnologias instaladas, siga os seguintes passos:

---
## Clone o repositório do GitHub:

```
git clone https://github.com/RafaelRleite/Teste-tecnico-rang.git
```

## Navegue para o diretório do projeto:

```
cd back-end/
```

## Construa o projeto Java com o Maven:

```
mvn clean install
```

## Suba o servidor Spring:

```
mvn spring-boot:run
```

## Navegue para o diretório do projeto:

```
cd front-end/
```

## Instale o CLIN do Angular:

```
npm install -g @angular/cli
```

## Construa o projeto Angular com o CLIN:

```
npm install
```

## Suba o servidor Angular:

```
ng serve --open
```

---
