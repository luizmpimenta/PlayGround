// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/alura-node$1.0.0/src/app/views/livros/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>Cadastro de livros</h1><form action=\"/livros\" method=\"post\">");

  if (data.livro.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" name=\"id\"" +
      marko_attr("value", "" + data.livro.id) +
      "></div>");
  }

  out.w("<div><label for=\"titulo\">Titulo:</label><input type=\"text\" id=\"titulo\" name=\"titulo\"" +
    marko_attr("value", "" + data.livro.titulo) +
    "></div><div><label for=\"capa\">Capa:</label><input type=\"file\" id=\"capa\" name=\"capa\" placeholder=\"imagem de capa\"></div><div><label for=\"preco\">Preço:</label><input type=\"text\" id=\"preco\" name=\"preco\" placeholder=\"150.25\"" +
    marko_attr("value", "" + data.livro.preco) +
    "></div><div><label for=\"descricao\">Descrição:</label><textarea cols=\"20\" rows=\"10\" id=\"descricao\" name=\"descricao\" placeholder=\"fale sobre o livro\">" +
    marko_escapeXml(data.livro.descricao) +
    "</textarea></div><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/alura-node$1.0.0/src/app/views/livros/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
