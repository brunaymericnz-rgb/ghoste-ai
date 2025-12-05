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
}

