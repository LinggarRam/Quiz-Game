const QUESTIONS = {
    sains: {
        name: "Sains",
        icon: "🔬",
        easy: [
            { q: "Apa rumus kimia untuk air?", opts: ["H2O","CO2","O2","H2SO4"], ans: 0 },
            { q: "Planet terbesar di tata surya kita adalah?", opts: ["Bumi","Mars","Jupiter","Saturnus"], ans: 2 },
            { q: "Berapa jumlah tulang dalam tubuh manusia dewasa?", opts: ["186","206","226","246"], ans: 1 },
            { q: "Apa nama gas yang paling banyak di atmosfer bumi?", opts: ["Oksigen","Karbon dioksida","Nitrogen","Hidrogen"], ans: 2 },
            { q: "Kecepatan cahaya di ruang hampa adalah?", opts: ["300.000 km/s","150.000 km/s","450.000 km/s","200.000 km/s"], ans: 0 },
        ],
        medium: [
            { q: "Proses pembuatan makanan oleh tumbuhan menggunakan sinar matahari disebut?", opts: ["Respirasi","Fotosintesis","Fermentasi","Transpirasi"], ans: 1 },
            { q: "Apa satuan ukuran arus listrik?", opts: ["Volt","Watt","Ampere","Ohm"], ans: 2 },
            { q: "DNA tersusun dari basa nitrogen. Pasangan basa Guanin adalah?", opts: ["Adenin","Timin","Sitosin","Urasil"], ans: 2 },
            { q: "Hukum gravitasi universal dirumuskan oleh?", opts: ["Einstein","Newton","Galileo","Kepler"], ans: 1 },
            { q: "Sel prokariotik berbeda dari sel eukariotik karena?", opts: ["Memiliki dinding sel","Tidak memiliki nukleus bermembran","Memiliki mitokondria","Lebih besar"], ans: 1 },
        ],
        hard: [
            { q: "Konstanta Planck memiliki satuan?", opts: ["J/s","J·s","kg·m/s","kg/m·s"], ans: 1 },
            { q: "Neutrino memiliki sifat?", opts: ["Bermuatan positif","Bermassa sangat besar","Hampir tidak berinteraksi","Bergerak lebih lambat dari cahaya dan sangat berat"], ans: 2 },
            { q: "Fenomena apa yang menjelaskan pergeseran spektrum cahaya bintang yang menjauh?", opts: ["Efek Compton","Efek Doppler","Difraksi","Interferensi"], ans: 1 },
            { q: "Bilangan Avogadro mendekati?", opts: ["3.14 × 10²³","6.02 × 10²³","9.11 × 10²³","1.67 × 10²³"], ans: 1 },
            { q: "Senyawa organik benzena pertama kali ditemukan oleh?", opts: ["Dalton","Faraday","Kekulé","Pasteur"], ans: 2 },
        ]
    },
    geografi: {
        name: "Geografi",
        icon: "🌍",
        easy: [
            { q: "Ibukota Indonesia adalah?", opts: ["Surabaya","Bandung","Jakarta","Medan"], ans: 2 },
            { q: "Gunung tertinggi di dunia adalah?", opts: ["K2","Kilimanjaro","Everest","Mont Blanc"], ans: 2 },
            { q: "Benua terluas di dunia adalah?", opts: ["Afrika","Amerika","Asia","Eropa"], ans: 2 },
            { q: "Sungai terpanjang di dunia adalah?", opts: ["Amazon","Nil","Yangtze","Mississippi"], ans: 1 },
            { q: "Negara dengan jumlah pulau terbanyak di dunia adalah?", opts: ["Filipina","Jepang","Swedia","Indonesia"], ans: 3 },
        ],
        medium: [
            { q: "Laut mana yang merupakan yang paling asin di dunia?", opts: ["Laut Merah","Laut Mati","Laut Kaspia","Samudra Atlantik"], ans: 1 },
            { q: "Selat yang memisahkan pulau Jawa dan Sumatera adalah?", opts: ["Selat Malaka","Selat Sunda","Selat Bali","Selat Makassar"], ans: 1 },
            { q: "Ibukota Australia adalah?", opts: ["Sydney","Melbourne","Brisbane","Canberra"], ans: 3 },
            { q: "Pegunungan Andes terletak di benua?", opts: ["Afrika","Eropa","Asia","Amerika Selatan"], ans: 3 },
            { q: "Kota mana yang dikenal sebagai 'Kota Seribu Menara'?", opts: ["Dubai","Kairo","Istanbul","Marrakesh"], ans: 1 },
        ],
        hard: [
            { q: "Titik terendah di permukaan bumi terletak di?", opts: ["Palung Mariana","Danau Baikal","Laut Mati","Palung Puerto Rico"], ans: 0 },
            { q: "Garis bujur 0° melewati kota?", opts: ["London","Paris","Greenwich","Berlin"], ans: 2 },
            { q: "Negara mana yang memiliki garis pantai terpanjang?", opts: ["Rusia","Australia","Kanada","Indonesia"], ans: 2 },
            { q: "Delta terbesar di dunia dibentuk oleh sungai?", opts: ["Amazon","Nil","Gangga-Brahmaputra","Mekong"], ans: 2 },
            { q: "Negara landlocked (terkurung daratan) manakah terbesar di dunia?", opts: ["Mongolia","Kazakhstan","Bolivia","Afghanistan"], ans: 1 },
        ]
    },
    sejarah: {
        name: "Sejarah",
        icon: "📜",
        easy: [
            { q: "Indonesia merdeka pada tahun?", opts: ["1942","1945","1949","1950"], ans: 1 },
            { q: "Siapa proklamator kemerdekaan Indonesia?", opts: ["Soekarno & Hatta","Sudirman & Soekarno","Hatta & Syahrir","Soekarno & Syahrir"], ans: 0 },
            { q: "Perang Dunia II berakhir pada tahun?", opts: ["1943","1944","1945","1946"], ans: 2 },
            { q: "Tembok Berlin runtuh pada tahun?", opts: ["1987","1988","1989","1990"], ans: 2 },
            { q: "Revolusi Industri pertama kali terjadi di negara?", opts: ["Prancis","Inggris","Jerman","Amerika"], ans: 1 },
        ],
        medium: [
            { q: "Kerajaan Majapahit mencapai puncak kejayaan di bawah pimpinan?", opts: ["Ken Arok","Raden Wijaya","Hayam Wuruk","Brawijaya"], ans: 2 },
            { q: "Perjanjian apa yang mengakhiri Perang Dunia I?", opts: ["Perjanjian Paris","Perjanjian Versailles","Perjanjian Genewa","Perjanjian Berlin"], ans: 1 },
            { q: "Masa Penjajahan Belanda di Indonesia berlangsung sekitar?", opts: ["150 tahun","250 tahun","350 tahun","100 tahun"], ans: 2 },
            { q: "Sumpah Pemuda diikrarkan pada tanggal?", opts: ["17 Agustus","20 Mei","28 Oktober","2 Mei"], ans: 2 },
            { q: "Imperium Romawi Barat jatuh pada tahun?", opts: ["376 M","410 M","455 M","476 M"], ans: 3 },
        ],
        hard: [
            { q: "Pertempuran Thermopylae melibatkan orang-orang Sparta melawan?", opts: ["Romawi","Macedonia","Persia","Athena"], ans: 2 },
            { q: "Konferensi Asia-Afrika di Bandung diselenggarakan pada tahun?", opts: ["1953","1954","1955","1956"], ans: 2 },
            { q: "Siapakah arsitek utama Uni Eropa modern melalui Deklarasi Schuman?", opts: ["Robert Schuman","Jean Monnet","Konrad Adenauer","Alcide De Gasperi"], ans: 0 },
            { q: "Pemberontakan Boxer di China terjadi pada tahun?", opts: ["1895","1898","1900","1905"], ans: 2 },
            { q: "Dinasti mana yang membangun Taj Mahal?", opts: ["Dinasti Gupta","Kekaisaran Mughal","Kesultanan Delhi","Dinasti Maurya"], ans: 1 },
        ]
    },
    teknologi: {
        name: "Teknologi",
        icon: "💻",
        easy: [
            { q: "HTML singkatan dari?", opts: ["Hyper Text Markup Language","High Tech Modern Language","Hyper Transfer Method Link","High Text Meta Language"], ans: 0 },
            { q: "Siapa pendiri Microsoft?", opts: ["Steve Jobs","Elon Musk","Bill Gates","Mark Zuckerberg"], ans: 2 },
            { q: "CPU singkatan dari?", opts: ["Central Programming Unit","Computer Power Unit","Central Processing Unit","Core Processing Utility"], ans: 2 },
            { q: "WWW diciptakan oleh?", opts: ["Steve Jobs","Tim Berners-Lee","Bill Gates","Linus Torvalds"], ans: 1 },
            { q: "RAM adalah singkatan dari?", opts: ["Random Access Memory","Read All Memory","Rapid Access Module","Random Array Module"], ans: 0 },
        ],
        medium: [
            { q: "Protokol HTTPS menggunakan port default nomor?", opts: ["80","8080","443","22"], ans: 2 },
            { q: "Dalam pemrograman, fungsi rekursif adalah fungsi yang?", opts: ["Berjalan terus-menerus","Memanggil dirinya sendiri","Menerima banyak parameter","Tidak punya return value"], ans: 1 },
            { q: "Apa kepanjangan dari SQL?", opts: ["Structured Query Language","Simple Query Language","System Query Loop","Standard Query Logic"], ans: 0 },
            { q: "Git merupakan alat untuk?", opts: ["Database management","Version control","Web server","Code compilation"], ans: 1 },
            { q: "IPv6 menggunakan berapa bit untuk alamat?", opts: ["32 bit","64 bit","128 bit","256 bit"], ans: 2 },
        ],
        hard: [
            { q: "Algoritma Dijkstra digunakan untuk mencari?", opts: ["Jalur terpendek","Pengurutan data","Pencarian biner","Kompresi data"], ans: 0 },
            { q: "Big-O notation O(log n) menggambarkan kompleksitas?", opts: ["Linear","Logaritmik","Kuadratik","Eksponensial"], ans: 1 },
            { q: "Dalam arsitektur RISC vs CISC, RISC berarti?", opts: ["Reduced Instruction Set Computing","Rapid Integrated System Computing","Redundant Instruction Set Control","Reduced Integrated System Circuit"], ans: 0 },
            { q: "Apa itu race condition dalam pemrograman konkuren?", opts: ["Program berjalan terlalu cepat","Hasil bergantung pada urutan eksekusi thread","Memori habis","Loop tak terbatas"], ans: 1 },
            { q: "CAP Theorem menyatakan bahwa sistem terdistribusi tidak bisa menjamin ketiganya sekaligus, kecuali?", opts: ["Consistency, Availability, Partition","Semua bisa dijamin","Hanya dua dari tiga","Tergantung platform"], ans: 2 },
        ]
    }
};

const state = {
    category: null,
    difficulty: "easy",
    questions: [],
    currentIdx: 0,
    score: 0,
    answers: [],
    timeTaken: [],
    timerInterval: null,
    timeLeft: 20,
    answered: false,
    totalTime: 0,
};

const TIMER_MAX = 20;
const CIRCUMFERENCE = 2 * Math.PI * 22;

function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function showScreenId(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function getHighscores() {
    return JSON.parse(localStorage.getItem("quizmaster_scores") || "[]");
}

function renderHome() {
    const grid = document.getElementById("category-grid");

    grid.innerHTML = "";
    Object.entries(QUESTIONS).forEach(([key, cat]) => {
        const total = cat[state.difficulty].length;

        const card = document.createElement("div");
        card.className = "category-card" + (state.category === key ? "selected" : "");
        card.innerHTML = `
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-name">${cat.name}</span>
            <span class="cat-count">${total} soal</span>
        `;
        card.addEventListener("click", () => {
            state.category = key;
            document.querySelectorAll(".category-card").forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            updateStartBtn();
        });
        grid.appendChild(card);
    });

    renderHighscores();
    updateStartBtn();
}

function renderHighscores() {
    const list = document.getElementById("highscore-list");
    const hs = getHighscores();
    if(!hs.length) {
        list.innerHTML = `<div class="hs-empty">Belum ada skor yang tersimpan</div>`;
        return;
    }
    list.innerHTML = hs.map((h, i) => 
        `<div class="hs-row">
            <span class="hs-name">${i+1}.${h.name} <span style="color:var(--muted);font-size:0.8rem">(${h.cat}, ${h.diff})</span></span>
            <span class="hs-score">${h.score} pts</span>
        </div>`
    ).join("");
}

renderHome();