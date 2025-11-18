function init() {
    navUl = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user) {
        navUl.inner.HTML += `
            <li><h2>Usuário: ${user.name}</h2></li>
            <li><button>Sair</button></li>
        `
        
        return
    }

    navUl.innerHTML += `
        <li>
            <a href="./pages/logi./login.html">Login</a>
        </li>
    `
}

init()

// para deslogar o usuario, basta remover suas informações do session storage
