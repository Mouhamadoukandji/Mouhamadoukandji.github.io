(function(){
  "use strict";

  // ==========================================================================
  // LIENS À COMPLÉTER
  // Ajoutez ici l'adresse GitHub de chaque projet quand le dépôt est public.
  // Laissé vide, le projet renvoie vers votre profil GitHub.
  // ==========================================================================
  var GITHUB = "https://github.com/Mouhamadoukandji";
  var REPOS = {
    etl:   "",
    kafka: "",
    pbi:   "",
    aws:   "",
    fayma: ""
  };

  // ==========================================================================
  // TEXTES (français / anglais)
  // ==========================================================================
  var T = {
    fr: {
      "skip":"Aller aux projets",
      "nav.projects":"Projets", "nav.skills":"Compétences", "nav.path":"Parcours", "nav.contact":"Contact",
      "hero.role":"Étudiant en Master 2 Science et Ingénierie des Données à Aix-Marseille Université. Je construis des pipelines qui amènent la donnée brute jusqu'aux tableaux de bord.",
      "hero.status":"Je recherche un stage de fin d'études en data engineering et visualisation, à partir de fin février 2027.",
      "hero.cv":"Télécharger mon CV",
      "hero.caption":"De la source au tableau de bord : les outils que j'utilise à chaque étape.",
      "projects.title":"Projets",
      "projects.lead":"Chaque projet est présenté avec son architecture : d'où vient la donnée, comment elle est traitée, où elle arrive.",
      "projects.code":"Voir le code sur GitHub",
      "projects.private":"Code non public pour l'instant",
      "skills.title":"Compétences",
      "skills.lead":"Rangées selon l'étape du pipeline où je les utilise.",
      "path.title":"Parcours",
      "contact.title":"Travaillons ensemble",
      "contact.lead":"Vous cherchez un stagiaire data engineer à partir de fin février 2027 ? Écrivez-moi, je réponds rapidement.",
      "foot":"Site fait main, hébergé sur GitHub Pages",
      "lang.btn":"EN", "lang.aria":"Switch to English",
      "diagram":"Schéma d'architecture"
    },
    en: {
      "skip":"Skip to projects",
      "nav.projects":"Projects", "nav.skills":"Skills", "nav.path":"Background", "nav.contact":"Contact",
      "hero.role":"Master's student in Data Science and Engineering at Aix-Marseille University. I build pipelines that take raw data all the way to dashboards.",
      "hero.status":"Looking for an end-of-studies internship in data engineering and visualisation, starting late February 2027.",
      "hero.cv":"Download my CV",
      "hero.caption":"From source to dashboard: the tools I use at each step.",
      "projects.title":"Projects",
      "projects.lead":"Each project comes with its architecture: where the data comes from, how it is processed, where it ends up.",
      "projects.code":"View the code on GitHub",
      "projects.private":"Code not public yet",
      "skills.title":"Skills",
      "skills.lead":"Grouped by the pipeline stage where I use them.",
      "path.title":"Background",
      "contact.title":"Let's work together",
      "contact.lead":"Looking for a data engineering intern from late February 2027? Send me an email, I reply quickly.",
      "foot":"Hand-built, hosted on GitHub Pages",
      "lang.btn":"FR", "lang.aria":"Passer en français",
      "diagram":"Architecture diagram"
    }
  };

  // ==========================================================================
  // CONTENU
  // Un libellé est soit un texte identique dans les deux langues,
  // soit { fr:"…", en:"…" }.
  // Nœuds de schéma : k = src (source), proc (traitement), store (stockage), out (sortie)
  // ==========================================================================
  var HERO = [
    [ { l:{ fr:"API météo", en:"Weather API" }, k:"src" }, { l:{ fr:"API vélos", en:"Bike API" }, k:"src" }, { l:"Géod'air", k:"src" } ],
    [ { l:"Airflow", k:"proc", s:{ fr:"orchestration", en:"orchestration" } } ],
    [ { l:"PostgreSQL", k:"store", s:{ fr:"entrepôt", en:"warehouse" } } ],
    [ { l:"Power BI", k:"out", s:{ fr:"pilotage", en:"reporting" } } ]
  ];

  var PROJECTS = [
    { id:"etl",
      title:{ fr:"Pipeline ETL et entrepôt de données", en:"ETL pipeline and data warehouse" },
      ctx:{ fr:"Aix-Marseille Université, sept.–oct. 2025", en:"Aix-Marseille University, Sep–Oct 2025" },
      desc:{ fr:"Collecte automatique de trois sources ouvertes (météo, stations de vélos, qualité de l'air) pour alimenter un entrepôt de données prêt à l'analyse.",
             en:"Automated collection from three open sources (weather, bike stations, air quality) feeding an analysis-ready data warehouse." },
      points:{ fr:["Extraction via les API en Python, dont l'API Géod'air", "Orchestration des tâches avec Apache Airflow", "Normalisation et contrôles qualité avant chargement", "Modélisation et stockage dans PostgreSQL, avec la traçabilité des flux sous Airflow"],
               en:["Python extraction from the APIs, including Géod'air", "Task orchestration with Apache Airflow", "Normalisation and quality checks before loading", "Modelling and storage in PostgreSQL, with flow traceability in Airflow"] },
      stack:["Python","Apache Airflow","PostgreSQL","SQL","API REST"],
      diagram:[
        [ { l:{ fr:"API météo", en:"Weather API" }, k:"src" }, { l:{ fr:"API vélos", en:"Bike API" }, k:"src" }, { l:"Géod'air", k:"src" } ],
        [ { l:{ fr:"Extraction", en:"Extract" }, k:"proc", s:"Python" } ],
        [ { l:"Airflow", k:"proc", s:{ fr:"nettoyage, qualité", en:"cleaning, checks" } } ],
        [ { l:"PostgreSQL", k:"store", s:{ fr:"entrepôt", en:"warehouse" } } ]
      ] },
    { id:"kafka",
      title:{ fr:"Streaming de paiements avec Kafka", en:"Payment streaming with Kafka" },
      ctx:{ fr:"Projet personnel, avr.–mai 2026", en:"Personal project, Apr–May 2026" },
      desc:{ fr:"Simulation d'un flux de transactions de paiement en temps réel pour comprendre le fonctionnement et les limites de Kafka sous charge.",
             en:"A simulated real-time stream of payment transactions, to understand how Kafka behaves and scales under load." },
      points:{ fr:["Producteurs Kafka en Java qui génèrent des transactions", "Messages structurés en JSON, gestion des erreurs et des relances", "Exploration des brokers, partitions et de la réplication", "Tests de performance et de montée en charge"],
               en:["Java Kafka producers generating transactions", "JSON-structured messages with error handling and retries", "Hands-on work with brokers, partitions and replication", "Performance and scalability testing"] },
      stack:["Apache Kafka","Java","Maven","JSON"],
      diagram:[
        [ { l:{ fr:"Producteurs", en:"Producers" }, k:"src", s:"Java" } ],
        [ { l:"Kafka", k:"proc", s:{ fr:"topics, partitions", en:"topics, partitions" } } ],
        [ { l:{ fr:"Traitement", en:"Processing" }, k:"out", s:{ fr:"analyse", en:"analysis" } } ]
      ] },
    { id:"pbi",
      title:{ fr:"Tableau de bord des tendances électorales", en:"Election trends dashboard" },
      ctx:{ fr:"Projet personnel, Power BI", en:"Personal project, Power BI" },
      desc:{ fr:"Un tableau de bord interactif pour comparer les résultats de l'élection présidentielle française par ville et par candidat.",
             en:"An interactive dashboard comparing French presidential election results by city and by candidate." },
      points:{ fr:["Collecte et nettoyage des résultats par ville", "Définition des indicateurs clés et modélisation des données", "Cartes et comparaisons interactives dans Power BI"],
               en:["Collection and cleaning of results by city", "Definition of key indicators and data modelling", "Interactive maps and comparisons in Power BI"] },
      stack:["Power BI","Modélisation","KPI"],
      diagram:[
        [ { l:{ fr:"Résultats", en:"Results" }, k:"src", s:{ fr:"par ville", en:"by city" } } ],
        [ { l:{ fr:"Nettoyage", en:"Cleaning" }, k:"proc" } ],
        [ { l:{ fr:"Modèle", en:"Model" }, k:"proc", s:"KPI" } ],
        [ { l:"Power BI", k:"out", s:{ fr:"tableau de bord", en:"dashboard" } } ]
      ] },
    { id:"aws",
      title:{ fr:"Automatisation serverless sur AWS", en:"Serverless automation on AWS" },
      ctx:{ fr:"Projet de formation, 2026", en:"Training project, 2026" },
      desc:{ fr:"Un script Python qui s'exécute dans le cloud sans serveur à gérer et dépose ses résultats dans un espace de stockage sécurisé.",
             en:"A Python script running in the cloud with no server to manage, writing its output to secured storage." },
      points:{ fr:["Création des utilisateurs et des droits avec IAM", "Script Python exécuté par une fonction Lambda", "Envoi automatique des fichiers générés vers un bucket S3"],
               en:["Users and permissions set up with IAM", "Python script run by a Lambda function", "Generated files sent automatically to an S3 bucket"] },
      stack:["AWS Lambda","Amazon S3","AWS IAM","Python"],
      diagram:[
        [ { l:"IAM", k:"src", s:{ fr:"droits d'accès", en:"permissions" } } ],
        [ { l:"Lambda", k:"proc", s:{ fr:"script Python", en:"Python script" } } ],
        [ { l:"S3", k:"store", s:{ fr:"fichiers", en:"files" } } ]
      ] },
    { id:"fayma",
      title:{ fr:"Fayma, une API de paiement panafricaine", en:"Fayma, a pan-African payment API" },
      ctx:{ fr:"Fondateur et développeur backend, projet entrepreneurial en équipe (en cours)", en:"Founder and backend developer, team venture (in progress)" },
      desc:{ fr:"Je conçois le backend d'une API qui permet aux entreprises d'accepter des paiements à travers l'Afrique. J'en ai défini l'architecture et les choix techniques.",
             en:"I'm building the backend of an API that lets businesses accept payments across Africa. I defined its architecture and technical choices." },
      points:{ fr:["Conception et développement du backend en Java", "Architecture du système et choix techniques en autonomie"],
               en:["Backend design and development in Java", "System architecture and technical decisions, end to end"] },
      stack:["Java","Maven","Git","CI/CD"],
      diagram:[
        [ { l:{ fr:"Marchands", en:"Merchants" }, k:"src" } ],
        [ { l:"API Fayma", k:"proc", s:"Java" } ],
        [ { l:{ fr:"Paiements", en:"Payments" }, k:"out", s:{ fr:"prestataires", en:"providers" } } ]
      ] }
  ];

  var STAGES = [
    { t:{ fr:"Collecte", en:"Ingest" }, d:{ fr:"API, flux temps réel", en:"APIs, real-time streams" }, items:["Python","Apache Kafka","JSON","API REST"] },
    { t:{ fr:"Orchestration", en:"Orchestrate" }, d:{ fr:"planifier, surveiller", en:"schedule, monitor" }, items:["Apache Airflow","CI/CD","Git, GitHub, GitLab"] },
    { t:{ fr:"Stockage", en:"Store" }, d:{ fr:"SQL, NoSQL, cloud", en:"SQL, NoSQL, cloud" }, items:["SQL","PostgreSQL","MongoDB","Amazon S3"] },
    { t:{ fr:"Traitement", en:"Process" }, d:{ fr:"transformer, modéliser", en:"transform, model" }, items:["Pandas, NumPy","Scikit-learn","AWS Lambda","Java, Maven"] },
    { t:{ fr:"Visualisation", en:"Visualise" }, d:{ fr:"indicateurs, tableaux de bord", en:"KPIs, dashboards" }, items:["Power BI","Matplotlib"] }
  ];

  var EXTRAS = [
    { t:{ fr:"Langues", en:"Languages" }, p:{ fr:"Français natif. Anglais B2 : lecture technique et documentation au quotidien.", en:"French, native. English B2: daily technical reading and documentation." } },
    { t:{ fr:"Façon de travailler", en:"How I work" }, p:{ fr:"Autonome, à l'aise en équipe, curieux et en veille technique régulière.", en:"Autonomous, comfortable in teams, curious, keeps up with the field." } },
    { t:{ fr:"En dehors", en:"Outside work" }, p:{ fr:"Basket et lecture.", en:"Basketball and reading." } }
  ];

  var TIMELINE = [
    { when:{ fr:"2025 – 2027", en:"2025 – 2027" },
      h:{ fr:"Master Informatique, parcours Science et Ingénierie des Données", en:"Master's in Computer Science, Data Science and Engineering track" },
      where:{ fr:"Aix-Marseille Université, Marseille", en:"Aix-Marseille University, Marseille" },
      items:{ fr:["Statistiques, probabilités, algèbre", "Python avancé et SQL", "Bases de données avancées et NoSQL", "Machine learning et deep learning", "Conception de pipelines de données", "Introduction au cloud AWS"],
              en:["Statistics, probability, algebra", "Advanced Python and SQL", "Advanced databases and NoSQL", "Machine learning and deep learning", "Data pipeline design", "Introduction to AWS cloud"] } },
    { when:{ fr:"En cours", en:"Ongoing" },
      h:{ fr:"Fondateur et développeur backend, Fayma", en:"Founder and backend developer, Fayma" },
      where:{ fr:"Projet entrepreneurial en équipe, Marseille", en:"Team venture, Marseille" },
      items:{ fr:["API de paiement panafricaine", "Architecture et développement backend en Java"], en:["Pan-African payment API", "Architecture and Java backend development"] } },
    { when:{ fr:"2020 – 2024", en:"2020 – 2024" },
      h:{ fr:"Licence Informatique", en:"Bachelor's in Computer Science" },
      where:{ fr:"Aix-Marseille Université, Marseille", en:"Aix-Marseille University, Marseille" },
      items:{ fr:["Python, Java, C, JavaScript, SQL", "Bases de données : Oracle, MySQL, PostgreSQL", "Algorithmique et structures de données", "Administration systèmes et réseaux"],
              en:["Python, Java, C, JavaScript, SQL", "Databases: Oracle, MySQL, PostgreSQL", "Algorithms and data structures", "Systems and network administration"] } },
    { when:{ fr:"En parallèle", en:"Alongside" },
      h:{ fr:"Vendeur polyvalent, Primark", en:"Sales associate, Primark" },
      where:{ fr:"Marseille", en:"Marseille" },
      items:{ fr:["Relation client et tenue de caisse"], en:["Customer service and till operation"] } }
  ];

  // ==========================================================================
  // OUTILS
  // ==========================================================================
  var lang = "fr";
  function tr(v){ return v == null ? "" : (typeof v === "string" || Array.isArray(v)) ? v : (v[lang] != null ? v[lang] : v.fr); }
  function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]; }); }
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SVGNS = "http://www.w3.org/2000/svg";

  // ==========================================================================
  // SCHÉMAS D'ARCHITECTURE (SVG)
  // Colonnes de nœuds reliées de gauche à droite ; en vertical sur écran étroit.
  // ==========================================================================
  function drawDiagram(host, cols, animate){
    var vertical = host.clientWidth < 460;
    var CH = 7.6, PADX = 14;
    var nodes = cols.map(function(col){
      return col.map(function(n){
        var label = tr(n.l), sub = n.s ? tr(n.s) : "";
        var big = host.id === "heroDiagram";
        var w = Math.max(label.length * (big ? 8.5 : CH), sub.length * (big ? 6.9 : 6.3)) + PADX * 2;
        return { label:label, sub:sub, k:n.k, w:Math.max(w, 78), h:sub ? (big ? 50 : 46) : (big ? 36 : 32) };
      });
    });
    var GAP = 14, W, H, place = [];
    if (!vertical){
      W = host.id === "heroDiagram" ? 560 : 620;
      var colW = nodes.map(function(c){ return Math.max.apply(null, c.map(function(n){ return n.w; })); });
      var totalNodes = colW.reduce(function(a, b){ return a + b; }, 0);
      var space = (W - totalNodes) / Math.max(1, cols.length - 1);
      var colH = nodes.map(function(c){ return c.reduce(function(s, n){ return s + n.h; }, 0) + GAP * (c.length - 1); });
      H = Math.max.apply(null, colH) + 16;
      var x = 0;
      nodes.forEach(function(c, i){
        var y = (H - colH[i]) / 2;
        place.push(c.map(function(n){ var p = { cx:x + colW[i] / 2, cy:y + n.h / 2, n:n }; y += n.h + GAP; return p; }));
        x += colW[i] + space;
      });
    } else {
      W = 340;
      var ROWGAP = 34, y = 4;
      nodes.forEach(function(c){
        var rowH = Math.max.apply(null, c.map(function(n){ return n.h; }));
        var rowW = c.reduce(function(s, n){ return s + n.w; }, 0) + GAP * (c.length - 1);
        var scale = rowW > W ? W / rowW : 1;
        var xx = (W - rowW * scale) / 2;
        place.push(c.map(function(n){ if (scale < 1) n.w *= scale; var p = { cx:xx + n.w / 2, cy:y + rowH / 2, n:n }; xx += n.w + GAP * scale; return p; }));
        y += rowH + ROWGAP;
      });
      H = y - ROWGAP + 6;
    }

    var svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("viewBox", (vertical ? "0" : "-6") + " 0 " + (W + (vertical ? 0 : 12)) + " " + H);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", T[lang].diagram + " : " + cols.map(function(c){ return c.map(function(n){ return tr(n.l); }).join(", "); }).join(" → "));
    var uid = "m" + Math.random().toString(36).slice(2, 7);
    var html = '<defs><marker id="' + uid + '" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z"/></marker></defs>';
    var paths = [];
    for (var i = 0; i < place.length - 1; i++){
      place[i].forEach(function(a){
        place[i + 1].forEach(function(b){
          var d;
          if (!vertical){
            var x1 = a.cx + a.n.w / 2, x2 = b.cx - b.n.w / 2 - 3, dx = (x2 - x1) * .5;
            d = "M" + x1 + "," + a.cy + " C" + (x1 + dx) + "," + a.cy + " " + (x2 - dx) + "," + b.cy + " " + x2 + "," + b.cy;
          } else {
            var y1 = a.cy + a.n.h / 2, y2 = b.cy - b.n.h / 2 - 3, dy = (y2 - y1) * .5;
            d = "M" + a.cx + "," + y1 + " C" + a.cx + "," + (y1 + dy) + " " + b.cx + "," + (y2 - dy) + " " + b.cx + "," + y2;
          }
          paths.push({ d:d, step:i });
          html += '<path class="edge" d="' + d + '" marker-end="url(#' + uid + ')"/>';
        });
      });
    }
    place.forEach(function(c){
      c.forEach(function(p){
        var n = p.n;
        html += '<g class="node n-' + n.k + '"><rect x="' + (p.cx - n.w / 2) + '" y="' + (p.cy - n.h / 2) + '" width="' + n.w + '" height="' + n.h + '" rx="9"/>';
        if (n.sub){
          html += '<text x="' + p.cx + '" y="' + (p.cy - 8) + '">' + esc(n.label) + '</text><text class="sub" x="' + p.cx + '" y="' + (p.cy + 10) + '">' + esc(n.sub) + '</text>';
        } else {
          html += '<text x="' + p.cx + '" y="' + p.cy + '">' + esc(n.label) + '</text>';
        }
        html += "</g>";
      });
    });
    if (animate && !reduceMotion){
      // Paquets de données : chaque étape part quand la précédente arrive, puis le cycle recommence.
      var STEP = 1.1, steps = place.length - 1, cycle = steps * STEP + 1.6;
      paths.forEach(function(p, k){
        html += '<circle class="packet" r="3.6" opacity="0"><animateMotion dur="' + cycle + 's" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;' + (p.step * STEP / cycle).toFixed(3) + ";" + ((p.step + 1) * STEP / cycle).toFixed(3) + ';1" calcMode="linear" path="' + p.d + '"/>' +
          '<animate attributeName="opacity" dur="' + cycle + 's" repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes="0;' + (p.step * STEP / cycle).toFixed(3) + ";" + ((p.step * STEP + .1) / cycle).toFixed(3) + ";" + (((p.step + 1) * STEP - .1) / cycle).toFixed(3) + ";" + ((p.step + 1) * STEP / cycle).toFixed(3) + ';1"/></circle>';
      });
    }
    svg.innerHTML = html;
    host.innerHTML = "";
    host.appendChild(svg);
    host.dataset.vertical = vertical ? "1" : "0";
  }

  // ==========================================================================
  // RENDU
  // ==========================================================================
  function renderProjects(){
    document.getElementById("projectList").innerHTML = PROJECTS.map(function(p){
      var repo = REPOS[p.id];
      return '<article class="project" id="p-' + p.id + '">' +
        '<div><h3>' + esc(tr(p.title)) + '</h3><p class="ctx">' + esc(tr(p.ctx)) + '</p>' +
        '<p class="desc">' + esc(tr(p.desc)) + '</p>' +
        '<ul>' + tr(p.points).map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + '</ul>' +
        '<ul class="stack" aria-label="Technologies">' + p.stack.map(function(s){ return "<li>" + esc(s) + "</li>"; }).join("") + '</ul>' +
        '<p class="links">' + (repo ? '<a href="' + esc(repo) + '" target="_blank" rel="noopener">' + T[lang]["projects.code"] + '</a>' : (p.id === "fayma" ? '<span>' + T[lang]["projects.private"] + '</span>' : '<a href="' + GITHUB + '" target="_blank" rel="noopener">' + T[lang]["projects.code"] + '</a>')) + '</p></div>' +
        '<div class="fig"><div class="diagram" data-p="' + p.id + '"></div></div></article>';
    }).join("");
  }
  function renderSkills(){
    document.getElementById("stages").innerHTML = STAGES.map(function(s){
      return '<li class="stage"><h3>' + esc(tr(s.t)) + '</h3><p>' + esc(tr(s.d)) + '</p><ul>' + s.items.map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + '</ul></li>';
    }).join("");
    document.getElementById("extras").innerHTML = EXTRAS.map(function(e){
      return '<div><h3>' + esc(tr(e.t)) + '</h3><p>' + esc(tr(e.p)) + '</p></div>';
    }).join("");
  }
  function renderTimeline(){
    document.getElementById("timeline").innerHTML = TIMELINE.map(function(t){
      return '<li class="tl"><div class="when">' + esc(tr(t.when)) + '</div><div><h3>' + esc(tr(t.h)) + '</h3><p class="where">' + esc(tr(t.where)) + '</p><ul>' + tr(t.items).map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + '</ul></div></li>';
    }).join("");
  }
  function renderDiagrams(){
    drawDiagram(document.getElementById("heroDiagram"), HERO, true);
    document.querySelectorAll(".diagram[data-p]").forEach(function(el){
      var p = PROJECTS.filter(function(x){ return x.id === el.dataset.p; })[0];
      if (p) drawDiagram(el, p.diagram, false);
    });
  }
  function applyLang(l){
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(function(el){ var v = T[l][el.dataset.i18n]; if (v != null) el.textContent = v; });
    var b = document.getElementById("lang");
    b.textContent = T[l]["lang.btn"];
    b.setAttribute("aria-label", T[l]["lang.aria"]);
    document.title = "Mouhamadou Falilou Kandji — " + (l === "fr" ? "Data engineer" : "Data engineer");
    renderProjects(); renderSkills(); renderTimeline(); renderDiagrams();
    try { localStorage.setItem("lang", l); } catch(e){}
  }

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch(e){}
  var initial = saved || ((navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en");
  applyLang(initial === "en" ? "en" : "fr");
  document.getElementById("lang").addEventListener("click", function(){ applyLang(lang === "fr" ? "en" : "fr"); });

  // Redessine les schémas quand ils changent d'orientation (rotation, redimensionnement)
  var rt = null;
  window.addEventListener("resize", function(){
    clearTimeout(rt);
    rt = setTimeout(function(){
      document.querySelectorAll(".diagram").forEach(function(el){
        var v = el.clientWidth < 460 ? "1" : "0";
        if (el.dataset.vertical !== v){
          if (el.id === "heroDiagram") drawDiagram(el, HERO, true);
          else { var p = PROJECTS.filter(function(x){ return x.id === el.dataset.p; })[0]; if (p) drawDiagram(el, p.diagram, false); }
        }
      });
    }, 150);
  });

  var nav = document.querySelector(".nav");
  window.addEventListener("scroll", function(){ nav.classList.toggle("scrolled", window.scrollY > 8); }, { passive:true });
})();
