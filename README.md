# PROCESSO SELETIVO SIMPLIFICADO #
# Nº 002/2025/SEPLAG #

- Numero da Inscricao: 8693
- Anderson Mayer da Penha
- ANALISTA DE TI - Desenvolvedor GENEXUS

## PROJETO PRÁTICO IMPLEMENTAÇÃO BACK-END GENEXUS

## Introdução
Esta documentação descreve a API Rest desenvolvida para gerenciar informações de servidores, unidades e endereços, baseada no diagrama de banco de dados fornecido. A API foi implementada utilizando GeneXus 18 com backend Java e PostgreSQL como banco de dados.

### **Objetivo**  
<p align="justify">
Este projeto consiste na implementação de uma **API REST** para gerenciamento de servidores temporários e sevidores efetivos, unidades de lotação, seguindo um **diagrama de banco de dados predefinido**. A solução foi desenvolvida utilizando **containers Docker** para PostgreSQL (banco de dados) e MinIO (armazenamento de objetos), com orquestração via **Docker Compose**, garantindo portabilidade e facilidade de implantação.  
</p>

---
## Tecnologias Utilizadas
- **GeneXus 18** para a geração da API Rest
- **Tomcat 11.0.5** servidor web
- **Java** como backend
- **PostgreSQL** (em container)
- **Min.IO** para armazenamento de imagens (em container)
- **Docker Compose** para orquestração dos containers
- **JWT** para autenticação e segurança
- **Swagger UI** para analisar e testar APIs

## Arquitetura da API
A API está estruturada em pastas separadas para cada CRUD:
- **Servidor Efetivo**
- **Servidor Temporário**
- **Unidade**
- **Lotação**

### **Funcionalidades Principais**  
1. **Gerenciamento de Servidores Temporários e Efetivos**  
   - CRUD (Create, Read, Update, Delete).  
   - Atribuição de dados pessoais, endereço, vínculos de lotação.  

2. **Gerenciamento de Unidades**  
   - CRUD (Create, Read, Update, Delete).  
   - Atribuição das informções da unidade e endereço.  

3. **Gerenciamento de Lotação**  
   - Associação de servidores a unidades.  
   - Atribuição das informções da lotação dos servidores.  

4. **Integração com MinIO**  
   - Armazenamento de arquivos (ex.: upload de fotografias) no MinIO (S3-compatible).  


### Autenticação
A API utiliza **JWT** para autenticação dos usuários. O token tem validade de **5 minutos** e pode ser renovado através de uma API de geração.

### Padrão de URLs
Os endpoints seguem a estrutura RESTful:
- `POST /apiservidorefetivo`
- `PUT /apiservidorefetivo`
- `GET /apiservidorefetivo?{pesid}pagina=X&qtdregistro=Y`
- `POST /apifotopessoa`
- `GET /apienderecofuncional?{pesnome}pagina=X&qtdregistro=Y`
- `GET /apiefetivoslotadosunidades?{unidid}pagina=X&qtdregistro=Y`

---

### **Estrutura do Projeto**  
```plaintext
├── api                                      # Armazenamento dos arquivos *.yaml  
│   └── api/apivalidacao.yaml                # API Autorização e Autenticação 
│   └── api/apicidade.yaml                   # API CRUD Cidade 
│   └── api/apiendereco.yaml                 # API CRUD Endereco 
│   └── api/apifotopessoa.yaml               # API CRUD Fotografia 
│   └── api/apilotacao.yaml                  # API CRUD Lotacao
│   └── api/apipessoa.yaml                   # API CRUD Pessoa
│   └── api/apiservidorefetivo.yaml          # API CRUD Servidor Efetivo
│   └── api/apiservidortemporario.yaml       # API CRUD Servidor Temporario
│   └── api/apiunidade.yaml                  # API CRUD Unidade
│   └── api/apiefetivoslotadosunidades.yaml  # API EndPoint Endereço Funcional Servidor Efetivo
│   └── api/apienderecofuncional.yaml        # API EndPoint Servidores Efetivos Lotados na Unidade
├── arquivos                                 # Arquivos   
│   ├── authorization.png                    # Imagem exemplo de Autenticação
│   └── repositorio.png                      # Imagem execução do comando
├── init-db                                  # Inicializa o locale padrão do cluster de banco de dados  
│   └── init.sql                             # Script SQL para criação do banco de dados 
├── kb                                       # Arquivo da KB
│   ├── projetogenexus.zip                   # Arquivo zip da pasta “Knowledge Base(KB)” com código fonte
│   └── projetogenexus.war                   # WAR para deploy da aplicação
├── tomcat                                   # Pasta do tomcat
│   ├── conf                                 # Arquivo context.xml
│   └── webapps                              # WAR descompactado da aplicação
├── docker-compose.yml                       # Configuração dos containers (PostgreSQL, MinIO, API)
└── README.md                                # Instruções de implantação
```

### **Pré-requisitos para Implantação**  
1. Docker Desktop e Docker Compose instalados.  
2. Baixar o repositorio seletivo-seplag-genexus no github.

### **Como Executar**  

- Executar o comando dentro da pasta do repositorio.
   [repositorio.png](arquivos/repositorio.png)
- A API estará disponível em `http://localhost:8080`.  
- O MinIO pode ser acessado via console web na porta `9000`.  
- Deploy do war no tomcat.
- URL API: 
```url  
http://localhost:8080/projetogenexus/swagger-ui/
```

### **Testando a API**

1. Autorizacao/Autenticação**  

```[apivalidacao.yaml POST]```
   [http://localhost:8080/projetogenexus/static/apivalidacao.yaml](http://localhost:8080/projetogenexus/swagger-ui/?urls.primaryName=Autentica%C3%A7%C3%A3o+-+Requisitos+Espec%C3%ADficos)

```json
   {
    "Login": "admin",
    "Password": "admin"
   }
```

- Após a geração do token copiar e colar "Auth Type: Bearer Token" para autorização de acesso da api que será utilizada conforme imagem abaixo. 
   [authorization.png](arquivos/authorization.png)

- Copiar o token gerado
   [token.png](arquivos/token.png)

- Colar token gerado conforme imagem abaixo
   [autorizacao-com-token.png](arquivos/autorizacao-com-token.png)


2. Teste prático CRUD Unidade  


```[apiunidade.yaml POST]``` [http://localhost:8080/projetogenexus/apiunidade](http://localhost:8080/projetogenexus/swagger-ui/?urls.primaryName=CRUD+Unidade+-+Requisitos+Espec%C3%ADficos) 

```json
   {
      "crud_unidade_post_sdt": { 
         "unid_nome": "Unidade Principal",
         "unid_sigla": "UNIDPRI",
         "end_tipo_endereco": "Avenida",
         "end_logradouro": "Brasil",
         "end_numero": 77,
         "end_bairro": "Centro",
         "cid_nome": "CUIABA",
         "cid_uf": "MT"
      }
   }
```

```[apiunidade.yaml PUT]```
```json
   {
      "crud_unidade_put_sdt": {
         "unid_id": 1,
         "unid_nome": "Unidade Secundária",
         "unid_sigla": "UNIDSEC",
         "end_id": 2
      }
   }
```

```[apiunidade.yaml DEL]``` 
http://localhost:8080/projetogenexus/apiunidade/:unid_id

```[apiunidade.yaml GET]``` 
http://localhost:8080/projetogenexus/apiunidade/?unidnome=nomeunidade&Pagina=1&Qtdregistro=10


3. Teste prático Upload de Fotos

   3.1. **Metodo POST Upload a binary for apifotopessoa**
   
   ```[apifotopessoa.yaml POST]``` 
  [ http://localhost:8080/projetogenexus/gxobject](http://localhost:8080/projetogenexus/swagger-ui/?urls.primaryName=Upload+Foto+Pessoa+-+Requisitos+Espec%C3%ADficos)

   POST Upload a binary for apifotopessoa
   ```json
   {
      "object_id": "gxupload:f363b9e0958f4063925751d68b51f7b1"
   }
   ```

   3.2. **Metodo POST para fazer upload da foto**
   Exemplo: gxupload:f363b9e0958f4063925751d68b51f7b1
   ```json
   {
   "crud_foto_pessoa_post_sdt": 
      {
         "pes_id": 1,
         "fp_foto": "gxupload:f363b9e0958f4063925751d68b51f7b1"
      }
   }
   ```

   3.3. **Metodo GET para consultar foto da pessoa**

   ```[apifotopessoa.yaml GET]``` 
   http://localhost:8080/projetogenexus/apiunidade/?pesid=1

   Será gerado o link para download da imagem armazenada no MinIO.
   - Exemplo:
   ```json
   {
      "fotografialink": "http://localhost:9000/seletivo-seplag/%2FContent/foto_pessoa/fp_foto/5d445320-131d-4107-be17-d2e859fe528a_3647c70b-9f45-4aed-8d8c-c3971dedaf75.tmp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250401T041614Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=5VZkoaXNHJgRpgtml65k%2F20250401%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3575f17cda30f2b6e1c74d2d664a3276766a6d69718559135f17777b2615d219"
   }   
```

   - Armazenamento no MinIO
   - Geração de links temporários com expiração
   - Metadados armazenados no PostgreSQL


### **Entregáveis**  
1. Código-fonte da API.  
2. Arquivos de configuração Docker (`docker-compose.yaml`).  
3. Documentação técnica (endpoints, exemplos de requisições/respostas).  
4. Script SQL para criação do banco de dados.  


---

### **Observações Finais**  
- A solução foi projetada para ser modular, escalável e de fácil manutenção.  
- O uso de containers garante compatibilidade entre ambientes (dev, staging, produção).  


---  
*Entrega concluída conforme especificado no escopo do projeto.*



-----------------------------------------------------------------------------------------------------------------------------------


