const messages = [
    "You are my favorite person 🤍",
    "In every universe , it's you for me.",
    "One day you and me will be real.",
    "mon ilyes à moi , you're only mine.",
    "With you, everything feels right.",
    "Tu es mon coeur."
];

const hearts = document.querySelectorAll(".heart");
const messageBox = document.getElementById("messageBox");
const loveMessage = document.getElementById("loveMessage");

hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        const id = heart.getAttribute("data-id");
        loveMessage.innerText = messages[id];
        messageBox.style.display = "block";

        heart.style.transform = "scale(1.6)";
        setTimeout(() => {
            heart.style.transform = "scale(1)";
        }, 300);
    });
});

/* LETTER */

const text = `My love,

You are my calm in chaos,
my soft place to land,
my favorite thought before I sleep.

If I could choose again,
I would still choose you.
Every single time. 🤍`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typedText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

function openLetter() {
    const envelope = document.getElementById("envelope");
    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        document.getElementById("typedText").innerHTML = "";
        i = 0;
        typeWriter();
    }
}

/* DISCOVER MEMORIES */

const memories = [
    {
        img: "images/1.jpg",
        text: "Moi et mon chéri chacun de son coté mais on pense qu'a être ensemble. "
    },
    {
        img: "images/7.jpg",
        text: "J'aime être dans tes bras cuz u are my safe place."
    },
    {
        img: "images/5.jpg",
        text: "On s'embrasse."
    },
    {
        img: "images/6.jpg",
        text: "Et on sembrasse encore et encore."
    },
        {
        img: "images/3.jpg",
        text: "How i want to hug youuu."
    },
        {
        img: "images/4.jpg",
        text: "I see us in the future."
    },
        {
        img: "images/2.jpg",
        text: "Nta habeltniiii bssah nbghik."
    },
        {
        img: "images/9.png",
        text: "LOVE YOU"
    }
];

let currentMemory = 0;
function nextMemory() {
    const card = document.querySelector(".discover-card");
    const image = document.getElementById("discoverImage");
    const text = document.getElementById("discoverText");

    // Affiche la carte si elle est cachée
    if (card.style.display === "none" || card.style.display === "") {
        card.style.display = "block";
    }

    // Met un petit effet fade
    card.style.opacity = 0;
    setTimeout(() => {
        image.src = memories[currentMemory].img;
        text.innerText = memories[currentMemory].text;
        card.style.opacity = 1;
    }, 100); // effet fade

    // Passe à la mémoire suivante
    currentMemory++;

    // Si on dépasse la dernière, on revient à la première
    if (currentMemory >= memories.length) {
        currentMemory = 0;
    }
}
