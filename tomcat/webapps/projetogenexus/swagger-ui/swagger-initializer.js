window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {url: "../static/apivalidacao.yaml", name: "Autenticação - Requisitos Específicos"},
      {url: "../static/apiservidorefetivo.yaml", name: "CRUD Servidor Efetivo - Requisitos Específicos"},
      {url: "../static/apiservidortemporario.yaml", name: "CRUD Servidor Temporário - Requisitos Específicos"},
      {url: "../static/apiunidade.yaml", name: "CRUD Unidade - Requisitos Específicos"},
      {url: "../static/apilotacao.yaml", name: "CRUD Lotação - Requisitos Específicos"},
      {url: "../static/apiefetivoslotadosunidades.yaml", name: "EndPoint Servidor Efetivo Lotado - Requisitos Específicos"},
      {url: "../static/apienderecofuncional.yaml", name: "EndPoint Endereço Funcional - Requisitos Específicos"},
      {url: "../static/apifotopessoa.yaml", name: "Upload Foto Pessoa - Requisitos Específicos"},
      {url: "../static/apipessoa.yaml", name: "CRUD Pessoa"},
      {url: "../static/apiendereco.yaml", name: "CRUD Endereço"},
      {url: "../static/apicidade.yaml", name: "CRUD Cidade"}
    ],    
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
