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
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ghoste.AI — Chat & Images</title>
<style>
body {font-family: Arial; text-align:center; padding:20px; background:#111; color:#eee;}
#chat {width:80%; max-width:700px; margin:auto; text-align:left; background:#222; padding:15px; border-radius:10px; min-height:200px; overflow-y:auto;}
#images {display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:20px;}
input, textarea {width:80%; padding:10px; border-radius:5px; border:none; margin-top:10px;}
button {padding:10px 20px; margin:10px; border:none; border-radius:5px; cursor:pointer;}
</style>
</head>
<body>

<h1>Ghoste.AI — Chat & Images</h1>

<!-- Chat -->
<div id="chat"></div>
<textarea id="input" placeholder="Pose ta question à Ghoste..."></textarea><br>
<button onclick="send()">Envoyer</button>

<hr>

<!-- Génération d'images gratuite -->
<h2>Générateur d’images (gratuit)</h2>
<input id="imgPrompt" placeholder="Décris l’image que tu veux...">
<button onclick="generateImage()">Générer Image</button>

<div id="images"></div>

<!-- Option payante -->
<p><a href="https://huggingface.co/stabilityai/stable-diffusion" target="_blank" style="color:#4caf50;">Premium pour images illimitées (~5€)</a></p>

<script src="assets/script.js"></script>
</body>
</html>
// Chat simple
function addMessage(text, from="ai") {
    let chat = document.getElementById("chat");
    let div = document.createElement("div");
    div.style.margin="5px 0";
    div.innerHTML = from==="user" ? "<b>🧑 Toi :</b> "+text : "<b>👻 Ghoste.AI :</b> "+text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function send(){
    let input=document.getElementById("input");
    let text=input.value.trim();
    input.value="";
    if(!text) return;
    addMessage(text,"user");
    let réponse="";
    if(text.includes("bonjour")||text.includes("salut")) réponse="Salut ! Je suis Ghoste.AI, ton assistant gratuit.";
    else if(text.includes("tu fais quoi")) réponse="Je peux répondre, t’aider et générer des images !";
    else if(text.includes("qui es tu")) réponse="Je suis Ghoste.AI, IA gratuite côté navigateur.";
    else réponse="Je ne comprends pas encore ça, mais tu peux m’apprendre !";
    setTimeout(()=>{addMessage(réponse)},300);
}

// Génération d’image gratuite (stub WASM)
async function generateImage(){
    let prompt=document.getElementById("imgPrompt").value.trim();
    if(!prompt){alert("Écris d'abord une description !"); return;}
    let imagesDiv=document.getElementById("images");

    // Placeholder image gratuite
    let img=document.createElement("img");
    img.src="https://via.placeholder.com/256?text="+encodeURIComponent(prompt);
    img.width=256; img.height=256;
    imagesDiv.prepend(img);

    // TODO : remplacer par WASM / modèle local pour Stable Diffusion
    // Exemple : llama-cpp-wasm ou sd-webui-wasm côté client
}
