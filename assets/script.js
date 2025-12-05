function addMessage(text, from = "ai") {
    let chat = document.getElementById("chat");
    let div = document.createElement("div");
    div.style.margin = "10px 0";

    if (from === "user") {
        div.innerHTML = "<b>🧑 Toi :</b> " + text;
    } else {
        div.innerHTML = "<b>👻 Ghoste.AI :</b> " + text;
    }

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function send() {
    let input = document.getElementById("input");
    let text = input.value;
    input.value = "";

    if (!text.trim()) return;

    addMessage(text, "user");

    // IA simple gratuite (pas d'API)
    let réponse = "";

    if (text.includes("bonjour") || text.includes("salut")) {
        réponse = "Salut ! Je suis Ghoste.AI, ton assistant gratuit.";
    }
    else if (text.includes("tu fais quoi")) {
        réponse = "Je peux répondre à des questions, t’aider, parler, et être améliorée plus tard.";
    }
    else if (text.includes("aide")) {
        réponse = "Bien sûr ! Dis-moi ce dont tu as besoin. 💡";
    }
    else if (text.includes("qui es tu")) {
        réponse = "Je suis Ghoste.AI, une IA hébergée gratuitement sur GitHub Pages.";
    }
    else {
        réponse = "Je ne comprends pas encore ça, mais tu peux m’améliorer plus tard !";
    }

    setTimeout(() => {
        addMessage(réponse);
    }, 500);
}
function addMessage(text, from = "ai") {
    let chat = document.getElementById("chat");
    let div = document.createElement("div");
    div.style.margin = "10px 0";

    if (from === "user") {
        div.innerHTML = "<b>🧑 Toi :</b> " + text;
    } else {
        div.innerHTML = "<b>👻 Ghoste.AI :</b> " + text;
    }

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function send() {
    let input = document.getElementById("input");
    let text = input.value;
    input.value = "";

    if (!text.trim()) return;

    addMessage(text, "user");

    // IA simple gratuite (pas d'API)
    let réponse = "";

    if (text.includes("bonjour") || text.includes("salut")) {
        réponse = "Salut ! Je suis Ghoste.AI, ton assistant gratuit.";
    }
    else if (text.includes("tu fais quoi")) {
        réponse = "Je peux répondre à des questions, t’aider, parler, et être améliorée plus tard.";
    }
    else if (text.includes("aide")) {
        réponse = "Bien sûr ! Dis-moi ce dont tu as besoin. 💡";
    }
    else if (text.includes("qui es tu")) {
        réponse = "Je suis Ghoste.AI, une IA hébergée gratuitement sur GitHub Pages.";
    }
    else {
        réponse = "Je ne comprends pas encore ça, mais tu peux m’améliorer plus tard !";
    }

    setTimeout(() => {
        addMessage(réponse);
    }, 500);
}
