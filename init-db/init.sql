

-- DROP SEQUENCE cid_id;

CREATE SEQUENCE cid_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE cid_id OWNER TO postgres;
GRANT ALL ON SEQUENCE cid_id TO postgres;

-- DROP SEQUENCE end_id;

CREATE SEQUENCE end_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE end_id OWNER TO postgres;
GRANT ALL ON SEQUENCE end_id TO postgres;

-- DROP SEQUENCE fp_id;

CREATE SEQUENCE fp_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE fp_id OWNER TO postgres;
GRANT ALL ON SEQUENCE fp_id TO postgres;

-- DROP SEQUENCE lot_id;

CREATE SEQUENCE lot_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE lot_id OWNER TO postgres;
GRANT ALL ON SEQUENCE lot_id TO postgres;

-- DROP SEQUENCE pes_id;

CREATE SEQUENCE pes_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE pes_id OWNER TO postgres;
GRANT ALL ON SEQUENCE pes_id TO postgres;

-- DROP SEQUENCE unid_id;

CREATE SEQUENCE unid_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE unid_id OWNER TO postgres;
GRANT ALL ON SEQUENCE unid_id TO postgres;
-- cidade definição

-- Drop table

-- DROP TABLE cidade;

CREATE TABLE cidade (
	cid_id int8 DEFAULT nextval('cid_id'::regclass) NOT NULL,
	cid_nome varchar(200) NULL,
	cid_uf bpchar(2) NULL,
	CONSTRAINT cidade_pkey PRIMARY KEY (cid_id)
);

-- Permissions

ALTER TABLE cidade OWNER TO postgres;
GRANT ALL ON TABLE cidade TO postgres;


-- pessoa definição

-- Drop table

-- DROP TABLE pessoa;

CREATE TABLE pessoa (
	pes_id int8 DEFAULT nextval('pes_id'::regclass) NOT NULL,
	pes_nome varchar(200) NULL,
	pes_data_nascimento date NULL,
	pes_mae varchar(200) NULL,
	pes_pai varchar(200) NULL,
	pes_sexo varchar(9) NULL,
	CONSTRAINT pessoa_pkey PRIMARY KEY (pes_id)
);

-- Permissions

ALTER TABLE pessoa OWNER TO postgres;
GRANT ALL ON TABLE pessoa TO postgres;


-- unidade definição

-- Drop table

-- DROP TABLE unidade;

CREATE TABLE unidade (
	unid_id int8 DEFAULT nextval('unid_id'::regclass) NOT NULL,
	unid_nome varchar(200) NULL,
	unid_sigla varchar(20) NULL,
	CONSTRAINT unidade_pkey PRIMARY KEY (unid_id)
);

-- Permissions

ALTER TABLE unidade OWNER TO postgres;
GRANT ALL ON TABLE unidade TO postgres;


-- endereco definição

-- Drop table

-- DROP TABLE endereco;

CREATE TABLE endereco (
	end_id int8 DEFAULT nextval('end_id'::regclass) NOT NULL,
	end_tipo_endereco varchar(20) NULL,
	end_logradouro varchar(200) NULL,
	end_numero int8 NULL,
	end_bairro varchar(100) NULL,
	cid_id int8 NULL,
	CONSTRAINT endereco_pkey PRIMARY KEY (end_id),
	CONSTRAINT iendereco1 FOREIGN KEY (cid_id) REFERENCES cidade(cid_id)
);
CREATE INDEX iendereco1 ON endereco USING btree (cid_id);

-- Permissions

ALTER TABLE endereco OWNER TO postgres;
GRANT ALL ON TABLE endereco TO postgres;


-- foto_pessoa definição

-- Drop table

-- DROP TABLE foto_pessoa;

CREATE TABLE foto_pessoa (
	fp_id int8 DEFAULT nextval('fp_id'::regclass) NOT NULL,
	pes_id int8 NOT NULL,
	fp_data date NULL,
	fp_bucket varchar(50) NULL,
	fp_hash varchar(50) NULL,
	fp_foto     BYTEA,
	fp_foto_GXI VARCHAR(2048),	
	CONSTRAINT foto_pessoa_pkey PRIMARY KEY (fp_id),
	CONSTRAINT ifoto_pessoa1 FOREIGN KEY (pes_id) REFERENCES pessoa(pes_id)
);
CREATE INDEX ifoto_pessoa1 ON foto_pessoa USING btree (pes_id);

-- Permissions

ALTER TABLE foto_pessoa OWNER TO postgres;
GRANT ALL ON TABLE foto_pessoa TO postgres;


-- lotacao definição

-- Drop table

-- DROP TABLE lotacao;

CREATE TABLE lotacao (
	lot_id int8 DEFAULT nextval('lot_id'::regclass) NOT NULL,
	pes_id int8 NOT NULL,
	unid_id int8 NOT NULL,
	lot_data_lotacao date NULL,
	lot_data_remocao date NULL,
	lot_portaria varchar(100) NULL,
	CONSTRAINT lotacao_pkey PRIMARY KEY (lot_id),
	CONSTRAINT ilotacao1 FOREIGN KEY (unid_id) REFERENCES unidade(unid_id),
	CONSTRAINT ilotacao2 FOREIGN KEY (pes_id) REFERENCES pessoa(pes_id)
);
CREATE INDEX ilotacao1 ON lotacao USING btree (unid_id);
CREATE INDEX ilotacao2 ON lotacao USING btree (pes_id);

-- Permissions

ALTER TABLE lotacao OWNER TO postgres;
GRANT ALL ON TABLE lotacao TO postgres;


-- pessoa_endereco definição

-- Drop table

-- DROP TABLE pessoa_endereco;

CREATE TABLE pessoa_endereco (
	pes_id int8 NOT NULL,
	end_id int8 NOT NULL,
	CONSTRAINT pessoa_endereco_pkey PRIMARY KEY (pes_id, end_id),
	CONSTRAINT ipessoa_endereco1 FOREIGN KEY (end_id) REFERENCES endereco(end_id),
	CONSTRAINT ipessoa_endereco2 FOREIGN KEY (pes_id) REFERENCES pessoa(pes_id)
);
CREATE INDEX ipessoa_endereco1 ON pessoa_endereco USING btree (end_id);

-- Permissions

ALTER TABLE pessoa_endereco OWNER TO postgres;
GRANT ALL ON TABLE pessoa_endereco TO postgres;


-- servidor_efetivo definição

-- Drop table

-- DROP TABLE servidor_efetivo;

CREATE TABLE servidor_efetivo (
	se_pes_id int8 NOT NULL,
	se_matricula varchar(20) NOT NULL,
	CONSTRAINT servidor_efetivo_pkey PRIMARY KEY (se_pes_id),
	CONSTRAINT iservidor_efetivo FOREIGN KEY (se_pes_id) REFERENCES pessoa(pes_id)
);

-- Permissions

ALTER TABLE servidor_efetivo OWNER TO postgres;
GRANT ALL ON TABLE servidor_efetivo TO postgres;


-- servidor_temporario definição

-- Drop table

-- DROP TABLE servidor_temporario;

CREATE TABLE servidor_temporario (
	st_pes_id int8 NOT NULL,
	st_data_admissao date NULL,
	st_data_demissao date NULL,
	CONSTRAINT servidor_temporario_pkey PRIMARY KEY (st_pes_id),
	CONSTRAINT iservidor_temporario FOREIGN KEY (st_pes_id) REFERENCES pessoa(pes_id)
);

-- Permissions

ALTER TABLE servidor_temporario OWNER TO postgres;
GRANT ALL ON TABLE servidor_temporario TO postgres;


-- unidade_endereco definição

-- Drop table

-- DROP TABLE unidade_endereco;

CREATE TABLE unidade_endereco (
	unid_id int8 NOT NULL,
	end_id int8 NOT NULL,
	CONSTRAINT unidade_endereco_pkey PRIMARY KEY (unid_id, end_id),
	CONSTRAINT iunidade_endereco1 FOREIGN KEY (end_id) REFERENCES endereco(end_id),
	CONSTRAINT iunidade_endereco2 FOREIGN KEY (unid_id) REFERENCES unidade(unid_id)
);
CREATE INDEX iunidade_endereco1 ON unidade_endereco USING btree (end_id);

-- Permissions

ALTER TABLE unidade_endereco OWNER TO postgres;
GRANT ALL ON TABLE unidade_endereco TO postgres;




-- Permissions;