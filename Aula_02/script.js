window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        if(window.scrollY > 50) {
            header.classList.add('encolher')
        } else {
            header.classList.remove('encolher')
        }
    }
);

const cidades = {
    sp: ["São Paulo", "Campinas", "Santos"],
    rj: ["Rio de Janeiro", "Niterói", "Angra dos Reis"],
    es: ["Vitória", "Vila Velha", "Guarapari"],
    mg: ["Belo Horizonte", "Barbacena", "Capela Nova", "Juiz de Fora", "Contagem"],
};

// Elementos
const modal = document.getElementById("modal");
const btnAbrir = document.getElementById("escolherCidade");
const btnFechar = document.querySelector(".close");
const btnConfirmar = document.getElementById("confirmar");
const estadoSelect = document.getElementById("estado");
const cidadeSelect = document.getElementById("cidade");

// Abrir modal
btnAbrir.addEventListener("click", () => {
    modal.style.display = "block";
});

// Fechar modal no X
btnFechar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar modal clicando fora
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Popular cidades ao escolher estado
estadoSelect.addEventListener("change", () => {
    const estado = estadoSelect.value;
    cidadeSelect.innerHTML = "<option value=''>Selecione a cidade</option>";

    if (estado && cidades[estado]) {
        cidades[estado].forEach(cidade => {
            const option = document.createElement("option");
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
        cidadeSelect.disabled = false;
    } else {
        cidadeSelect.disabled = true;
    }
});

// Confirmar escolha e atualizar botão
btnConfirmar.addEventListener("click", () => {
    const cidade = cidadeSelect.value;
    if (cidade) {
        btnAbrir.textContent = cidade + " ▾";
        modal.style.display = "none";
    } else {
        alert("Por favor, selecione uma cidade.");
    }
});
