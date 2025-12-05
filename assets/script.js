// Mini chat intelligent côté navigateur
function addMessage(text, from="ai") {
    let chat = document.getElementById("chat");
    let div = document.createElement("div");
    div.style.margin="5px 0";
    div.innerHTML = from==="user" ? "<b>🧑 Toi :</b> "+text : "<b>👻 Ghoste.AI :</b> "+text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function send(){
    let input = document.getElementById("input");
    let text=input.value.trim();
    input.value="";
    if(!text) return;
    addMessage(text,"user");

    // Réponses simples mais plus intelligentes
    let réponse = "Hmm… je réfléchis 🤔";
    const prompt = text.toLowerCase();

    if(prompt.includes("bonjour")||prompt.includes("salut")) réponse="Salut ! Je suis Ghoste.AI, ton assistant intelligent gratuit.";
    else if(prompt.includes("tu fais quoi")) réponse="Je peux répondre à tes questions, discuter, et générer des images gratuites !";
    else if(prompt.includes("qui es tu")) réponse="Je suis Ghoste.AI, une IA gratuite, côté navigateur.";
    else if(prompt.includes("aide")) réponse="Bien sûr ! Pose-moi n'importe quelle question, je vais essayer de t'aider !";
    else if(prompt.includes("image")) réponse="Tu peux utiliser la section Générateur d’images ci-dessous pour créer des images gratuites.";
    else réponse="Je ne comprends pas encore ça, mais je peux apprendre plus si tu m'entraînes !";

    setTimeout(()=>{addMessage(réponse)},300);
}

// Génération d’image gratuite (placeholder)
async function generateImage(){
    let prompt=document.getElementById("imgPrompt").value.trim();
    if(!prompt){alert("Écris d'abord une description !"); return;}
    let imagesDiv=document.getElementById("images");
    let img=document.createElement("img");
    img.src="https://via.placeholder.com/256?text="+encodeURIComponent(prompt);
    img.width=256; img.height=256;
    imagesDiv.prepend(img);
}

