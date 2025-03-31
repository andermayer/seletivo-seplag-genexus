# PROCESSO SELETIVO SIMPLIFICADO Nº 002/2025/SEPLAG

## PROJETO PRÁTICO IMPLEMENTAÇÃO BACK-END GENEXUS

### **Objetivo**  
<p align="justify">
Este projeto consiste na implementação de uma **API REST** para gerenciamento de servidores temporários e sevidores efetivos, unidades de lotação, seguindo um **diagrama de banco de dados predefinido**. A solução foi desenvolvida utilizando **containers Docker** para PostgreSQL (banco de dados) e MinIO (armazenamento de objetos), com orquestração via **Docker Compose**, garantindo portabilidade e facilidade de implantação.  
</p>

---

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

---

### **Tecnologias e Componentes**  
- **Backend**: Genexus 18 UP8, Java jdk-17.0.12, API REST RESTful com paginação.  
- **Banco de Dados**: PostgreSQL em container Docker.  
- **Armazenamento**: MinIO para objetos (documentos, imagens, etc.).  
- **Orquestração**: Docker Compose para gerenciamento dos serviços.  
- **Autenticação**: [JWT/OAuth2/Basic Auth].  
- **Documentação**: OpenAPI/Swagger (opcional).  

---

### **Estrutura do Projeto**  
```plaintext
├── docker-compose.yml          # Configuração dos containers (PostgreSQL, MinIO, API)
├── api/                        # Código-fonte da API
│   ├── models/                 # Modelos do banco de dados
│   ├── controllers/            # Lógica de negócio
│   ├── routes/                 # Rotas da API
│   └── Dockerfile              # Build da aplicação
├── scripts/                    # SQL de inicialização ou migrações
└── README.md                   # Instruções de implantação
```

---

### **Pré-requisitos para Implantação**  
1. Docker e Docker Compose instalados.  
2. Arquivo `.env` configurado (variáveis de ambiente para conexões).  

### **Como Executar**  
```bash
docker-compose up -d  # Inicia os containers em background
```
- A API estará disponível em `http://localhost:[PORTA]`.  
- O MinIO pode ser acessado via console web (normalmente na porta `9000`).  

---

### **Entregáveis**  
1. Código-fonte da API.  
2. Arquivos de configuração Docker (`Dockerfile`, `docker-compose.yml`).  
3. Documentação técnica (endpoints, exemplos de requisições/respostas).  
4. Scripts SQL para criação do banco de dados (se necessário).  

---

### **Observações Finais**  
- A solução foi projetada para ser modular, escalável e de fácil manutenção.  
- O uso de containers garante compatibilidade entre ambientes (dev, staging, produção).  

**Anexos**:  
- Diagrama do banco de dados.  
- Coleção do Postman/Insomnia (opcional).  

---  
*Entrega concluída conforme especificado no escopo do projeto.*









-----------------------------------------------------------------------------------------------------------------------------------


