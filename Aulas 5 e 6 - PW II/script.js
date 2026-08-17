const loginContainer = document.querySelector("#loginContainer");
const loginForm = document.querySelector("#loginForm");
const loginUsuario = document.querySelector("#loginUsuario");
const loginSenha = document.querySelector("#loginSenha");
const mensagemLogin = document.querySelector("#mensagemLogin");

const usuarioCorreto = "admin";
const senhaCorreta = "0104";

const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');

const sNome = document.querySelector('#m-nome');
const sSetor = document.querySelector('#m-setor');
const sFuncao = document.querySelector('#m-funcao');
const sSalario = document.querySelector('#m-salario');

const btnSalvar = document.querySelector('#btnSalvar');


let itens = getItensBD(); 
let id;


loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const usuario = loginUsuario.value.trim();
    const senha = loginSenha.value;

    if (
        usuario === usuarioCorreto &&
        senha === senhaCorreta
    ) {

        loginContainer.classList.remove("active");

        loginUsuario.value = "";
        loginSenha.value = "";

        mensagemLogin.textContent = "";

    } else {

        mensagemLogin.textContent = "Usuário ou senha incorretos.";

        loginSenha.value = "";

        loginSenha.focus();

    }

});

function logout() {

    loginContainer.classList.add("active");

    loginUsuario.value = "";
    loginSenha.value = "";

    mensagemLogin.textContent = "";

    loginUsuario.focus();

}

function openModal(edit = false, index = 0){ 

    modal.classList.add("active"); 

    if(edit){ 

        sNome.value = itens[index].nome; 
        sSetor.value = itens[index].setor; 
        sFuncao.value = itens[index].funcao; 
        sSalario.value = itens[index].salario; 

        id = index; 

    }else{ 

        sNome.value = ""; 
        sSetor.value = ""; 
        sFuncao.value = ""; 
        sSalario.value = ""; 

        id = undefined; 

    } 

}

function editItem(index) {  
  
    openModal(true, index);

}

function deleteItem(index) {  

    itens.splice(index, 1);

    setItensBD();

    loadItens();

}

function insertItem(item, index){ 

    let tr = document.createElement("tr"); 

    tr.innerHTML = ` 
        <td>${item.nome}</td> 

        <td>${item.setor}</td> 

        <td>${item.funcao}</td> 

        <td>R$ ${Number(item.salario).toFixed(2)}</td> 

        <td class="acao"> 

            <button 
                class="edit" 
                onclick="editItem(${index})"> 

                <i class='bx bx-edit'></i> 

            </button> 

        </td> 

        <td class="acao"> 

            <button 
                class="delete" 
                onclick="deleteItem(${index})"> 

                <i class='bx bx-trash'></i> 

            </button> 

        </td> 
    `; 

    tbody.appendChild(tr); 

}


btnSalvar.addEventListener("click", function(e){ 

    e.preventDefault(); 

    if( 
        sNome.value === "" || 
        sSetor.value === "" || 
        sFuncao.value === "" || 
        sSalario.value === "" 
    ){ 

        alert("Preencha todos os campos."); 

        return; 

    } 

    if(id !== undefined){ 

        itens[id].nome = sNome.value; 
        itens[id].setor = sSetor.value; 
        itens[id].funcao = sFuncao.value; 
        itens[id].salario = sSalario.value; 

    } 

    else{ 

        itens.push({ 

            nome: sNome.value, 
            setor: sSetor.value, 
            funcao: sFuncao.value, 
            salario: sSalario.value 

        }); 

    } 


    setItensBD(); 

    modal.classList.remove("active"); 

    loadItens(); 

    id = undefined; 

}); 

function getItensBD() { 

    return JSON.parse(
        localStorage.getItem("dbfunc")
    ) ?? []; 

} 

function setItensBD() { 

    localStorage.setItem(
        "dbfunc", 
        JSON.stringify(itens)
    ); 

} 

function loadItens(){ 

    tbody.innerHTML = ""; 

    itens.forEach((item,index)=>{ 

        insertItem(item,index); 

    }); 

} 

loadItens();