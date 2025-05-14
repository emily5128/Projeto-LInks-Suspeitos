function verificarLink() {
    let link = document.getElementById("linkInput").value;
    let resultado = document.getElementById("resultado");
    if (link === "") {
        resultado.innerHTML = "⚠ Por favor, insira um link.";
        resultado.className = "resultado unsafe";
        return;
    }
    let regex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!regex.test(link)) {
        resultado.innerHTML = "🚫 Link incorreto ou inválido. Verifique e tente novamente.";
        resultado.className = "resultado unsafe";
        return;
    }
    let palavrasSuspeitas = ["free", "promo", "login", "secure", "verify", "click", "win", "prize", "bonus"];
    let suspeito = palavrasSuspeitas.some(palavra => link.toLowerCase().includes(palavra));
    if (suspeito) {
        resultado.innerHTML = "🚨 Este link pode ser suspeito! Verifique antes de clicar.";
        resultado.className = "resultado unsafe";
    } else {
        resultado.innerHTML = "✅ O link parece seguro, mas sempre verifique a fonte.";
        resultado.className = "resultado safe";
    }
}

function encurtarLink() {
    const link = document.getElementById("linkInput").value;
    if (!link) return alert("Insira um link primeiro.");
    alert("🔗 Função de encurtar link chamada para: " + link);
    // Aqui você pode usar uma API de encurtamento, como Bitly.
}

function resumirSite() {
    const link = document.getElementById("linkInput").value;
    if (!link) return alert("Insira um link primeiro.");
    alert("📝 Função de resumo chamada para: " + link);
    // Use um serviço ou IA para obter resumo do conteúdo do site.
}

function verificarSeguranca() {
    const link = document.getElementById("linkInput").value;
    if (!link) return alert("Insira um link primeiro.");
    alert("🛡 Analisando segurança do site: " + link);
    // Aqui entraria uma análise com APIs como Google Safe Browsing.
}

function verEmpresa() {
    const link = document.getElementById("linkInput").value;
    if (!link) return alert("Insira um link primeiro.");
    alert("🏢 Buscando informações do domínio: " + link);
    // Use um serviço WHOIS ou consulta de CNPJ, por exemplo.
}
