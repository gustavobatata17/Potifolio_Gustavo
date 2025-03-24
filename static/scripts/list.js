let html = document.getElementById('html_text');
let css = document.getElementById('css_text');
let js = document.getElementById('js_text');
let py = document.getElementById('python_text');
let java = document.getElementById('java_text');
let git = document.getElementById('git_text');
let c = document.getElementById('c_text');
let node = document.getElementById('node_text');
let php = document.getElementById('php_text');

function html_descricao(){
  if(html.innerHTML === ""){
    html.innerHTML = "-> Criação de páginas web, formulários, gráficos e outros elementos visuais.";
  } else{
    html.innerHTML = "";
  }
}

function css_descricao(){
  if(css.innerHTML === ""){
    css.innerHTML = "-> Estilização de páginas web, incluindo responsividade e interações.";
  } else{
    css.innerHTML = "";
  }
}

function js_descricao(){
  if(js.innerHTML === ""){
    js.innerHTML = "-> Interações com páginas web e integração com backend e banco de dados.";
  } else{
    js.innerHTML = "";
  }
}

function python_descricao(){
  if(py.innerHTML === ""){
    py.innerHTML = "-> Desenvolvimento de sistemas servidores e automação.";
  } else{
    py.innerHTML = "";
  }
}

function java_descricao(){
  if(java.innerHTML === ""){
    java.innerHTML = "-> Conhecimento básico da linguagem.";
  } else{
    java.innerHTML = "";
  }
}

function git_descricao(){
  if(git.innerHTML === ""){
    git.innerHTML = "-> Sistema de versionamento de código.";
  } else{
    git.innerHTML = "";
  }
}

function c_descricao(){
  if(c.innerHTML === ""){
    c.innerHTML = "-> Conhecimento básico da linguagem.";
  } else{
    c.innerHTML = "";
  }
}

function node_descricao(){
  if(node.innerHTML === ""){
    node.innerHTML = "-> Desenvolvimento de aplicações completas, principalmente no backend.";
  } else{
    node.innerHTML = "";
  }
}

function php_descricao(){
  if(php.innerHTML === ""){
    php.innerHTML = "-> Início recente dos estudos, mas com domínio do básico da linguagem.";
  } else{
    php.innerHTML = "";
  }
}
