document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user-message");
        getBotResponse(userInput);
        document.getElementById("user-input").value = "";
    }
});

function addMessage(text, className) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    const botMessage = generateBotResponse(userInput);
    setTimeout(function() {
        addMessage(botMessage, "bot-message");
    }, 1000); // Simula un pequeño retraso en la respuesta
}

function generateBotResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes("diferencia entre una democracia y una dictadura")) {
        return "Una democracia es un sistema político donde los ciudadanos tienen el poder de tomar decisiones políticas a través del voto, mientras que en una dictadura, el poder está concentrado en una sola persona o un grupo pequeño, sin procesos democráticos.";
    } else if (lowerCaseInput.includes("relaciones internacionales")) {
        return "Las relaciones internacionales son cruciales para la paz y la cooperación global. ¿Hay algún tema específico que te interese?";
    } else if (lowerCaseInput.includes("soberanía nacional")) {
        return "La soberanía nacional es el principio de que cada Estado tiene el control total sobre su territorio y asuntos internos, sin interferencia externa.";
    } else if (lowerCaseInput.includes("poder blando")) {
        return "El poder blando se refiere a la capacidad de influir en otros países a través de la atracción y la persuasión, utilizando la cultura, los valores políticos y las políticas exteriores, en lugar de la coerción o el poder militar.";
    } else if (lowerCaseInput.includes("globalización")) {
        return "La globalización es el proceso de integración creciente entre las economías, culturas y poblaciones del mundo, impulsado por el comercio, la inversión, la tecnología y la migración.";
    } else if (lowerCaseInput.includes("teoría realista")) {
        return "El realismo es una teoría que sostiene que los Estados son los actores principales en un sistema internacional anárquico y actúan principalmente en función de su propio interés y la búsqueda de poder.";
    } else if (lowerCaseInput.includes("carta de las naciones unidas")) {
        return "La Carta de las Naciones Unidas es el tratado fundacional de la ONU, firmado en 1945, que establece los principios de la organización y sus objetivos principales, como el mantenimiento de la paz y la seguridad internacional, el desarrollo económico y social, y la promoción de los derechos humanos.";
    } else {
        return "Es un tema interesante. ¿Podrías darme más detalles o preguntar sobre política o relaciones internacionales?";
    }
}
