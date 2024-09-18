
const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;
/*Detectando cliques no botão com addEventListener() */
/* Para definir a ação que ocorrerá, inserimos dois valores,um evento outro açãoa ser executada */
botaoSalvarItem.addEventListener("click", adicionarItem);

/* funcao que especificar o que dever acontecer*/
/* evento.preventDefault() mais (evento)  impedir a atualização da tela ao click*/

function adicionarItem(evento) {
  evento.preventDefault();

  const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("item-lista-container");

  const containerNomeDoItem = document.createElement("div");

  /*codigo do DOM para implemeentar checkbox*/
  const containerCheckbox = document.createElement("div");
  containerCheckbox.classList.add("checkbox-container");

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("checkbox-input");
  checkboxInput.id = "checkbox-" + contador++;

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", checkboxInput.id);

  checkboxLabel.addEventListener("click", function (evento) {
    const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
    const checkboxCustomizado = evento.currentTarget.querySelector(
      ".checkbox-customizado"
    );
    const itemTitulo = evento.currentTarget
      .closest("li")
      .querySelector("#item-titulo");

    if (checkboxInput.checked) {
      checkboxCustomizado.classList.add("checked");
      itemTitulo.style.textDecoration = "line-through";
      listaComprados.appendChild(itemDaLista);  /* Basicamente, estamos movendo o itemDaLista para dentro do elemento listaComprados.*/ 
      checkboxCustomizado.classList.remove("checked");
      itemTitulo.style.textDecoration = "none";
      listaDeCompras.appendChild(itemDaLista); /* Portanto, estamos movendo o itemDaLista para dentro do elemento listaDeCompras.*/ /*Basicamente, estamos transferindo o itemDaLista de uma lista para outra. Ele sai de listaComprados e entra em listaDeCompras.*/ 
    }
  });

  const checkboxCustomizado = document.createElement("div");
  checkboxCustomizado.classList.add("checkbox-customizado");

  containerCheckbox.appendChild(checkboxLabel);
  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkboxCustomizado);
  containerNomeDoItem.appendChild(containerCheckbox);
  /*termino do codigo do checkbox*/

  const NomeDoItem = document.createElement("p");
  NomeDoItem.id = "item-titulo";
  NomeDoItem.innerText = item.value;
  containerNomeDoItem.appendChild(NomeDoItem);

  /* primeiro botao */
  const containerBotoes = document.createElement("div");
  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-acao");

  /*imagen do botão*/
  const imagenRemover = document.createElement("img");
  imagenRemover.src = "img/delete.svg";
  imagenRemover.alt = "icone de lixeira";
  botaoRemover.appendChild(imagenRemover);
  containerBotoes.appendChild(botaoRemover);

  /*  SEGUNDO BOTAO */
  /* const containerBotaoEdit = document.createElement("div");*/ /* nao precisava criar outra, const container, era so colocar o segunto botao dentro const containerbotoes, a div , assim ficando tudo dentro do containerBotoes*/
  const botaoEdit = document.createElement("button");
  botaoEdit.classList.add("botao-acao");

  /*imagen do botoes*/
  const editImagen = document.createElement("img");
  editImagen.src = "img/edit.svg";
  editImagen.alt = "icone de edit";
  botaoEdit.appendChild(editImagen);
  containerBotoes.appendChild(botaoEdit);

  /*TERMINO DO CODIGO*/
  itemDaLista.appendChild(containerItemLista);
  containerItemLista.appendChild(containerNomeDoItem);
  containerItemLista.appendChild(containerBotoes);
  /*containerItemLista.appendChild(containerBotaoEdit);*/
  listaDeCompras.appendChild(itemDaLista);
}

