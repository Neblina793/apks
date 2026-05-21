const STORAGE_KEY = "dnd2024.characters.v1";
const CONTENT_KEY = "dnd2024.content.v1";

const ABILITIES = [
  ["str", "Força"],
  ["dex", "Destreza"],
  ["con", "Constituição"],
  ["int", "Inteligência"],
  ["wis", "Sabedoria"],
  ["cha", "Carisma"],
];

const SKILLS = [
  ["Acrobacia", "dex"],
  ["Arcanismo", "int"],
  ["Atletismo", "str"],
  ["Atuação", "cha"],
  ["Enganação", "cha"],
  ["Furtividade", "dex"],
  ["História", "int"],
  ["Intimidação", "cha"],
  ["Intuição", "wis"],
  ["Investigação", "int"],
  ["Lidar com Animais", "wis"],
  ["Medicina", "wis"],
  ["Natureza", "int"],
  ["Percepção", "wis"],
  ["Persuasão", "cha"],
  ["Prestidigitação", "dex"],
  ["Religião", "int"],
  ["Sobrevivência", "wis"],
];

const FORM_FIELDS = [
  "name",
  "player",
  "level",
  "hp",
  "maxHp",
  "tempHp",
  "ac",
  "speed",
  "alignment",
  "xp",
  "hitDice",
  "proficiencies",
  "equipment",
  "notes",
  "heroicInspiration",
  "exhaustion",
  "currency",
  "resources",
  "conditions",
  "languagesTools",
];

const BASE_CONTENT = {
  species: [
    { name: "Humano", summary: "Versatilidade, uma pericia extra e talento de origem." },
    { name: "Elfo", summary: "Sentidos aguçados, herança feérica e afinidade mística." },
    { name: "Anao", summary: "Resistência, tradição de pedra e vigor físico." },
    { name: "Halfling", summary: "Sorte, coragem discreta e agilidade social." },
    { name: "Draconato", summary: "Ancestralidade dracônica e sopro elemental." },
    { name: "Gnomo", summary: "Astúcia, mente viva e tradição mágica." },
    { name: "Orc", summary: "Força implacável e resistência em combate." },
    { name: "Golias", summary: "Poder de gigantes, porte físico e resiliência." },
    { name: "Tiefling", summary: "Legado planar, resistência e magia inata." },
  ],
  classes: [
    { name: "Barbaro", summary: "Fúria, resistência e presença feroz no corpo a corpo.", hitDie: "d12" },
    { name: "Bardo", summary: "Magia, inspiração e perícia social.", hitDie: "d8" },
    { name: "Bruxo", summary: "Pacto sobrenatural, truques fortes e invocações.", hitDie: "d8" },
    { name: "Clerigo", summary: "Magia divina, cura e domínio sagrado.", hitDie: "d8" },
    { name: "Druida", summary: "Magia natural, formas selvagens e vínculo com ciclos.", hitDie: "d8" },
    { name: "Feiticeiro", summary: "Magia inata, metamagia e poder instintivo.", hitDie: "d6" },
    { name: "Guerreiro", summary: "Técnica marcial, muitas armas e ação decisiva.", hitDie: "d10" },
    { name: "Ladino", summary: "Precisão, furtividade e especialização em perícias.", hitDie: "d8" },
    { name: "Mago", summary: "Livro de magias, estudo arcano e versatilidade.", hitDie: "d6" },
    { name: "Monge", summary: "Disciplina corporal, foco e mobilidade.", hitDie: "d8" },
    { name: "Paladino", summary: "Juramento, proteção, cura e impacto divino.", hitDie: "d10" },
    { name: "Patrulheiro", summary: "Exploração, caça, magia natural e precisão.", hitDie: "d10" },
  ],
  backgrounds: [
    { name: "Acolito", summary: "Educação religiosa, ritos e contatos espirituais." },
    { name: "Artesao", summary: "Ofício, ferramentas e comércio prático." },
    { name: "Charlatao", summary: "Disfarce, lábia e truques sociais." },
    { name: "Criminoso", summary: "Submundo, furtividade e contatos ilegais." },
    { name: "Erudito", summary: "Pesquisa, línguas e conhecimento acadêmico." },
    { name: "Guarda", summary: "Vigilância, autoridade e treino urbano." },
    { name: "Guia", summary: "Sobrevivência, rotas e leitura do terreno." },
    { name: "Marinheiro", summary: "Navios, cordas, clima e vida no mar." },
    { name: "Nobre", summary: "Etiqueta, influência e recursos familiares." },
    { name: "Soldado", summary: "Disciplina militar, armas e hierarquia." },
  ],
  spells: [
    { name: "Luz", level: 0, summary: "Cria iluminação mágica em um objeto." },
    { name: "Maos Magicas", level: 0, summary: "Manipula objetos pequenos à distância." },
    { name: "Raio de Fogo", level: 0, summary: "Ataque mágico de fogo à distância." },
    { name: "Curar Ferimentos", level: 1, summary: "Restaura pontos de vida por toque." },
    { name: "Escudo Arcano", level: 1, summary: "Defesa reativa contra ataques." },
    { name: "Misseis Magicos", level: 1, summary: "Projéteis de energia que atingem automaticamente." },
    { name: "Sono", level: 1, summary: "Induz criaturas a adormecerem." },
    { name: "Passo Nebuloso", level: 2, summary: "Teleporte curto envolto em névoa." },
    { name: "Restauracao Menor", level: 2, summary: "Remove uma condição debilitante simples." },
    { name: "Bola de Fogo", level: 3, summary: "Explosão de fogo em área." },
    { name: "Contramagica", level: 3, summary: "Interrompe uma magia sendo conjurada." },
    { name: "Banimento", level: 4, summary: "Expulsa temporariamente uma criatura para outro plano." },
    { name: "Muralha de Pedra", level: 5, summary: "Ergue uma barreira sólida de pedra." },
  ],
  features: [
    { name: "Inspiração Heroica", summary: "Recurso narrativo para reforçar uma jogada importante." },
    { name: "Ataque Extra", summary: "Permite atacar mais de uma vez ao realizar a ação de ataque." },
    { name: "Canalizar Divindade", summary: "Expressa poder sagrado em efeitos especiais." },
    { name: "Fúria", summary: "Estado de combate que amplia força e resistência." },
    { name: "Inspiração Bárdica", summary: "Concede dado de apoio a um aliado." },
    { name: "Forma Selvagem", summary: "Assume aspectos ou formas ligadas à natureza." },
    { name: "Ataque Furtivo", summary: "Causa dano extra quando há vantagem tática." },
    { name: "Metamagia", summary: "Modifica o funcionamento de magias conjuradas." },
    { name: "Invocações", summary: "Dons recebidos por pacto sobrenatural." },
    { name: "Estilo de Luta", summary: "Especialização marcial em uma abordagem de combate." },
    { name: "Ação Ardilosa", summary: "Opções rápidas de mobilidade e furtividade." },
    { name: "Ação Súbita", summary: "Explosão de ação em um momento decisivo." },
    { name: "Defesa sem Armadura", summary: "Cálculo alternativo de defesa sem armadura." },
    { name: "Destruição Divina", summary: "Canaliza energia sagrada em um golpe." },
    { name: "Especialização", summary: "Aprimora uma ou mais perícias escolhidas." },
    { name: "Evasão", summary: "Reduz ou evita dano em efeitos de área." },
    { name: "Foco Arcano", summary: "Canaliza magia por um foco de conjuração." },
    { name: "Imposição das Mãos", summary: "Reserva de cura por toque." },
    { name: "Livro de Magias", summary: "Registro de magias estudadas e preparadas." },
    { name: "Magias Preparadas", summary: "Lista de magias disponíveis para conjuração." },
    { name: "Pacto", summary: "Vínculo sobrenatural que concede poderes." },
    { name: "Recuperação Arcana", summary: "Recupera parte do poder mágico após descanso." },
    { name: "Sentido Divino", summary: "Percebe presenças sagradas ou profanas." },
    { name: "Talento de Origem", summary: "Talento recebido no início da criação." },
  ],
};

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}

function $(id) {
  return document.getElementById(id);
}

function on(id, event, handler) {
  const el = $(id);
  if (el) el.addEventListener(event, handler);
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

let content = loadContent();
let characters = loadCharacters();
let currentId = null;
let state = freshCharacter();

function makeId() {
  return `char-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function freshCharacter() {
  return {
    id: makeId(),
    name: "",
    player: "",
    level: 1,
    hp: 10,
    maxHp: 10,
    tempHp: 0,
    ac: 10,
    speed: "9 m",
    alignment: "",
    xp: 0,
    species: "",
    className: "",
    background: "",
    hitDice: "",
    proficiencies: "",
    equipment: "",
    notes: "",
    heroicInspiration: "Não",
    exhaustion: 0,
    currency: "",
    resources: "",
    conditions: "",
    languagesTools: "",
    abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    saves: Object.fromEntries(ABILITIES.map(([key]) => [key, false])),
    skills: Object.fromEntries(SKILLS.map(([name]) => [name, 0])),
    attacks: [],
    spells: [],
    features: [],
    updatedAt: new Date().toISOString(),
  };
}

function loadContent() {
  const base = cloneData(BASE_CONTENT);
  if (Array.isArray(window.DND2024_SPELLS)) {
    base.spells = window.DND2024_SPELLS;
  }
  const saved = readStorage(CONTENT_KEY, null);
  return saved ? mergeContent(base, saved) : base;
}

function mergeContent(base, extra) {
  const merged = cloneData(base);
  for (const key of Object.keys(BASE_CONTENT)) {
    merged[key] = dedupeByName([...(base[key] || []), ...(extra[key] || [])]);
  }
  return merged;
}

function saveContent() {
  try {
    localStorage.setItem(CONTENT_KEY, JSON.stringify(content));
  } catch {
    alert("Não consegui salvar o conteúdo no armazenamento do navegador.");
  }
}

function loadCharacters() {
  return readStorage(STORAGE_KEY, []).map(normalizeCharacter);
}

function saveCharacters() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
  } catch {
    alert("Não consegui salvar a ficha no armazenamento do navegador.");
  }
}

function normalizeCharacter(character) {
  const base = freshCharacter();
  const merged = { ...base, ...character };
  merged.abilities = { ...base.abilities, ...(character.abilities || {}) };
  merged.saves = { ...base.saves, ...(character.saves || {}) };
  merged.skills = { ...base.skills, ...(character.skills || {}) };
  merged.attacks = character.attacks || [];
  merged.spells = character.spells || [];
  merged.features = character.features || [];
  return merged;
}

function dedupeByName(items) {
  const map = new Map();
  items.forEach((item) => map.set(item.name.toLowerCase(), item));
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function mod(score) {
  return Math.floor((Number(score) - 10) / 2);
}

function signed(value) {
  return value >= 0 ? `+${value}` : `${value}`;
}

function profBonus(level) {
  return 2 + Math.floor((Math.max(1, Number(level)) - 1) / 4);
}

function spellAbilityKey(className) {
  const map = {
    Bardo: "cha",
    Bruxo: "cha",
    Clerigo: "wis",
    Clérigo: "wis",
    Druida: "wis",
    Feiticeiro: "cha",
    Mago: "int",
    Paladino: "cha",
    Patrulheiro: "wis",
  };
  return map[className] || "int";
}

function getFormValues() {
  FORM_FIELDS.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    state[id] = el.type === "number" ? Number(el.value) : el.value;
  });
  state.updatedAt = new Date().toISOString();
}

function setFormValues() {
  FORM_FIELDS.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = state[id] ?? "";
  });
  document.getElementById("builderTitle").textContent = state.name || "Nova ficha";
}

function renderAll() {
  setFormValues();
  renderOptions("speciesOptions", content.species, "species");
  renderOptions("classOptions", content.classes, "className");
  renderOptions("backgroundOptions", content.backgrounds, "background");
  renderAbilities();
  renderSaves();
  renderAttacks();
  renderSkills();
  renderSpells();
  renderFeatures();
  renderSavedList();
  renderCharacterViewer();
  renderDerived();
}

function renderOptions(containerId, options, key) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `option-card ${state[key] === option.name ? "selected" : ""}`;
    btn.innerHTML = `<strong>${option.name}</strong><span>${option.summary || ""}</span>`;
    btn.addEventListener("click", () => {
      state[key] = option.name;
      if (key === "className" && option.hitDie) {
        state.hitDice = `${state.level}${option.hitDie}`;
      }
      renderAll();
    });
    container.appendChild(btn);
  });
}

function renderAbilities() {
  const container = document.getElementById("abilityGrid");
  container.innerHTML = "";
  ABILITIES.forEach(([key, label]) => {
    const card = document.createElement("div");
    card.className = "ability-card";
    card.innerHTML = `
      <strong>${label}</strong>
      <input type="number" min="1" max="30" value="${state.abilities[key]}" data-ability="${key}">
      <span class="mod">${signed(mod(state.abilities[key]))}</span>
    `;
    container.appendChild(card);
  });
  container.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      state.abilities[input.dataset.ability] = Number(input.value);
      renderAbilities();
      renderSaves();
      renderSkills();
      renderDerived();
    });
  });
}

function renderSaves() {
  const container = document.getElementById("savesGrid");
  if (!container) return;
  container.innerHTML = "";
  const pb = profBonus(state.level);
  ABILITIES.forEach(([key, label]) => {
    const proficient = Boolean(state.saves[key]);
    const total = mod(state.abilities[key]) + (proficient ? pb : 0);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `save-card ${proficient ? "selected" : ""}`;
    btn.innerHTML = `<span>${label}</span><strong>${signed(total)}</strong>`;
    btn.addEventListener("click", () => {
      state.saves[key] = !proficient;
      renderSaves();
    });
    container.appendChild(btn);
  });
}

function renderAttacks() {
  const container = document.getElementById("attacksList");
  if (!container) return;
  container.innerHTML = "";
  if (!state.attacks.length) {
    container.innerHTML = `<p class="hint">Nenhum ataque adicionado ainda.</p>`;
    return;
  }
  state.attacks.forEach((attack, index) => {
    const row = document.createElement("div");
    row.className = "selected-item attack-row";
    row.innerHTML = `<div><strong>${attack.name}</strong><span>${attack.bonus || "Sem bônus"} - ${attack.damage || "Sem dano/efeito"}</span></div>`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "danger";
    btn.textContent = "Remover";
    btn.addEventListener("click", () => {
      state.attacks.splice(index, 1);
      renderAttacks();
    });
    row.appendChild(btn);
    container.appendChild(row);
  });
}

function renderSkills() {
  const container = document.getElementById("skillsGrid");
  container.innerHTML = "";
  const pb = profBonus(state.level);
  SKILLS.forEach(([name, ability]) => {
    const rank = state.skills[name] || 0;
    const total = mod(state.abilities[ability]) + rank * pb;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "skill-card";
    btn.dataset.rank = rank;
    btn.innerHTML = `<span>${name} <small>(${ability.toUpperCase()})</small></span><span class="rank">${rank === 2 ? "Exp" : rank === 1 ? "Prof" : " - "} ${signed(total)}</span>`;
    btn.addEventListener("click", () => {
      state.skills[name] = (rank + 1) % 3;
      renderSkills();
      renderDerived();
    });
    container.appendChild(btn);
  });
}

function renderSpells() {
  const select = document.getElementById("spellLevelFilter");
  if (!select.dataset.ready) {
    for (let i = 0; i <= 9; i++) {
      const option = document.createElement("option");
      option.value = String(i);
      option.textContent = i === 0 ? "Truques" : `${i}º círculo`;
      select.appendChild(option);
    }
    select.dataset.ready = "true";
  }

  const search = document.getElementById("spellSearch").value.toLowerCase();
  const level = document.getElementById("spellLevelFilter").value;
  const container = document.getElementById("spellOptions");
  container.innerHTML = "";
  content.spells
    .filter((spell) => !search || spell.name.toLowerCase().includes(search))
    .filter((spell) => level === "" || String(spell.level ?? 0) === level)
    .forEach((spell) => {
      const card = document.createElement("div");
      card.className = "catalog-card";
      card.innerHTML = `<div><strong>${spell.name}</strong><span>${spell.level === 0 ? "Truque" : `${spell.level}º círculo`} - ${spell.summary || ""}</span></div>`;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ghost";
      btn.textContent = "Adicionar";
      btn.addEventListener("click", () => addSpell(spell));
      card.appendChild(btn);
      container.appendChild(card);
    });

  renderSelected("selectedSpells", state.spells, (name) => {
    state.spells = state.spells.filter((item) => item.name !== name);
    renderSpells();
  });
}

function renderFeatures() {
  const container = document.getElementById("featureOptions");
  container.innerHTML = "";
  content.features.forEach((feature) => {
    const card = document.createElement("div");
    card.className = "catalog-card";
    card.innerHTML = `<div><strong>${feature.name}</strong><span>${feature.summary || ""}</span></div>`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ghost";
    btn.textContent = "Adicionar";
    btn.addEventListener("click", () => addFeature(feature));
    card.appendChild(btn);
    container.appendChild(card);
  });
  renderSelected("selectedFeatures", state.features, (name) => {
    state.features = state.features.filter((item) => item.name !== name);
    renderFeatures();
  });
}

function renderSelected(containerId, items, remove) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  if (!items.length) {
    container.innerHTML = `<p class="hint">Nada adicionado ainda.</p>`;
    return;
  }
  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "selected-item";
    row.innerHTML = `<div><strong>${item.name}</strong><span>${item.level !== undefined ? (item.level === 0 ? "Truque" : `${item.level}º círculo`) : ""} ${item.summary || ""}</span></div>`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "danger";
    btn.textContent = "Remover";
    btn.addEventListener("click", () => remove(item.name));
    row.appendChild(btn);
    container.appendChild(row);
  });
}

function addSpell(spell) {
  if (!state.spells.some((item) => item.name === spell.name)) {
    state.spells.push(spell);
    renderSpells();
  }
}

function addFeature(feature) {
  if (!state.features.some((item) => item.name === feature.name)) {
    state.features.push(feature);
    renderFeatures();
  }
}

function renderDerived() {
  getFormValues();
  const pb = profBonus(state.level);
  const perceptionRank = state.skills.Percepção || state.skills.Percepcao || 0;
  const spellAbility = spellAbilityKey(state.className);
  const spellAttack = pb + mod(state.abilities[spellAbility]);
  setText("profBonus", signed(pb));
  setText("initiative", signed(mod(state.abilities.dex)));
  setText("passivePerception", 10 + mod(state.abilities.wis) + perceptionRank * pb);
  setText("spellDc", 8 + spellAttack);
  setText("spellAttack", signed(spellAttack));
}

function saveCurrent() {
  getFormValues();
  if (!state.name.trim()) {
    alert("Dê um nome ao personagem antes de salvar.");
    return;
  }
  const existing = characters.findIndex((item) => item.id === state.id);
  if (existing >= 0) characters[existing] = cloneData(state);
  else characters.unshift(cloneData(state));
  currentId = state.id;
  saveCharacters();
  renderAll();
}

function renderSavedList() {
  const query = document.getElementById("searchSaved").value.toLowerCase();
  const container = document.getElementById("savedList");
  container.innerHTML = "";
  const filtered = characters.filter((char) => char.name.toLowerCase().includes(query));
  if (!filtered.length) {
    container.innerHTML = `<p class="hint">Nenhuma ficha salva.</p>`;
    return;
  }
  filtered.forEach((char) => {
    const card = document.createElement("article");
    card.className = `saved-card ${currentId === char.id ? "open" : ""}`;
    card.innerHTML = `
      <div class="saved-summary">
        <div>
          <strong>${char.name}</strong>
          <div class="saved-meta">Nível ${char.level} - ${char.species || "sem espécie"} - ${char.className || "sem classe"}</div>
        </div>
        <span>${char.background || ""}</span>
      </div>
      <div class="saved-details">
        <p><b>PV</b> ${char.hp}/${char.maxHp} (+${char.tempHp || 0}) | <b>CA</b> ${char.ac} | <b>Desloc.</b> ${char.speed}</p>
        <p><b>Ataques:</b> ${(char.attacks || []).map((a) => a.name).join(", ") || "nenhum"}</p>
        <p><b>Magias:</b> ${char.spells.map((s) => s.name).join(", ") || "nenhuma"}</p>
        <p><b>Habilidades:</b> ${char.features.map((f) => f.name).join(", ") || "nenhuma"}</p>
        <div class="saved-actions">
          <button type="button" class="ghost" data-action="edit">Editar</button>
          <button type="button" class="ghost" data-action="pdf">PDF</button>
          <button type="button" class="danger" data-action="delete">Excluir</button>
        </div>
      </div>
    `;
    card.addEventListener("click", (event) => {
      const action = event.target.dataset.action;
      if (action === "delete") {
        characters = characters.filter((item) => item.id !== char.id);
        if (currentId === char.id) currentId = null;
        saveCharacters();
        renderAll();
        return;
      }
      if (action === "pdf") {
        exportPdf(char);
        return;
      }
      currentId = char.id;
      state = cloneData(char);
      renderAll();
    });
    container.appendChild(card);
  });
}

function renderCharacterViewer() {
  const container = $("viewerContent");
  if (!container) return;
  const char = currentId ? characters.find((item) => item.id === currentId) : null;
  if (!char) {
    container.innerHTML = `<p class="hint">Clique em um personagem salvo para visualizar a ficha aqui.</p>`;
    return;
  }
  const c = normalizeCharacter(char);
  const pb = profBonus(c.level);
  const spellAbility = spellAbilityKey(c.className);
  const spellAttack = pb + mod(c.abilities[spellAbility]);
  const trainedSkills = SKILLS.filter(([name]) => c.skills[name])
    .map(([name]) => `${name} (${c.skills[name] === 2 ? "especialização" : "proficiência"})`)
    .join(", ");
  container.innerHTML = `
    <div class="viewer-hero">
      <strong>${c.name}</strong>
      <span>Nível ${c.level} - ${c.species || "Espécie"} - ${c.className || "Classe"}</span>
    </div>
    <div class="viewer-grid">
      <div><span>PV</span><b>${c.hp}/${c.maxHp}</b></div>
      <div><span>Temp</span><b>${c.tempHp || 0}</b></div>
      <div><span>CA</span><b>${c.ac}</b></div>
      <div><span>Prof.</span><b>${signed(pb)}</b></div>
      <div><span>Inic.</span><b>${signed(mod(c.abilities.dex))}</b></div>
      <div><span>CD</span><b>${8 + spellAttack}</b></div>
    </div>
    <details open>
      <summary>Atributos</summary>
      <p>${ABILITIES.map(([key, label]) => `${label}: ${c.abilities[key]} (${signed(mod(c.abilities[key]))})`).join(" | ")}</p>
    </details>
    <details>
      <summary>Perícias</summary>
      <p>${trainedSkills || "Nenhuma perícia marcada."}</p>
    </details>
    <details>
      <summary>Ataques</summary>
      <p>${c.attacks.map((a) => `${a.name}: ${a.bonus || "-"} / ${a.damage || "-"}`).join("<br>") || "Nenhum ataque."}</p>
    </details>
    <details>
      <summary>Magias (${c.spells.length})</summary>
      <p>${c.spells.map((s) => `${s.name}${s.level !== undefined ? ` (${s.level === 0 ? "Truque" : `${s.level}º`})` : ""}`).join("<br>") || "Nenhuma magia."}</p>
    </details>
    <details>
      <summary>Habilidades (${c.features.length})</summary>
      <p>${c.features.map((f) => f.name).join("<br>") || "Nenhuma habilidade."}</p>
    </details>
    <details>
      <summary>Equipamento e notas</summary>
      <p><b>Equipamento:</b> ${c.equipment || "-"}</p>
      <p><b>Notas:</b> ${c.notes || "-"}</p>
    </details>
    <button type="button" class="ghost full" id="viewerPdfBtn">Salvar esta ficha como PDF</button>
  `;
  on("viewerPdfBtn", "click", () => exportPdf(c));
}

function exportPdf(character = state) {
  getFormValues();
  const char = character.id === state.id ? state : character;
  const sheet = document.getElementById("printSheet");
  const abilityHtml = ABILITIES.map(([key, label]) => `<li>${label}: ${char.abilities[key]} (${signed(mod(char.abilities[key]))})</li>`).join("");
  const skillHtml = SKILLS.filter(([name]) => char.skills[name]).map(([name]) => `<li>${name}: ${char.skills[name] === 2 ? "Especialização" : "Proficiência"}</li>`).join("");
  sheet.innerHTML = `
    <div class="sheet-page">
      <div class="sheet-title">
        <h1>${char.name || "Personagem"}</h1>
        <p>Nível ${char.level} - ${char.species || "Espécie"} - ${char.className || "Classe"} - ${char.background || "Antecedente"}</p>
      </div>
      <div class="sheet-grid">
        <section class="sheet-box"><h2>Combate</h2><p>PV: ${char.hp}</p><p>CA: ${char.ac}</p><p>Deslocamento: ${char.speed}</p><p>Proficiência: ${signed(profBonus(char.level))}</p></section>
        <section class="sheet-box"><h2>Atributos</h2><ul>${abilityHtml}</ul></section>
        <section class="sheet-box"><h2>Perícias</h2><ul>${skillHtml || "<li>Nenhuma marcada</li>"}</ul></section>
        <section class="sheet-box sheet-wide"><h2>Magias</h2><p>${char.spells.map((s) => `${s.name}${s.level !== undefined ? ` (${s.level === 0 ? "Truque" : `${s.level}º`})` : ""}`).join(", ") || "Nenhuma"}</p></section>
        <section class="sheet-box sheet-wide"><h2>Habilidades</h2><p>${char.features.map((f) => f.name).join(", ") || "Nenhuma"}</p></section>
        <section class="sheet-box sheet-wide"><h2>Equipamento</h2><p>${char.equipment || "-"}</p></section>
        <section class="sheet-box sheet-wide"><h2>Anotações</h2><p>${char.notes || "-"}</p></section>
      </div>
    </div>
  `;
  window.print();
}

function addContent() {
  const type = document.getElementById("contentType").value;
  const name = document.getElementById("contentName").value.trim();
  const summary = document.getElementById("contentText").value.trim();
  if (!name) return;
  const item = type === "spells" ? { name, level: 0, summary } : { name, summary };
  content[type] = dedupeByName([...(content[type] || []), item]);
  saveContent();
  document.getElementById("contentName").value = "";
  document.getElementById("contentText").value = "";
  renderAll();
}

function importJson() {
  try {
    const incoming = JSON.parse(document.getElementById("importJson").value);
    content = mergeContent(content, incoming);
    saveContent();
    document.getElementById("importJson").value = "";
    renderAll();
  } catch {
    alert("JSON inválido. Confira o texto colado.");
  }
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
  });
});

FORM_FIELDS.forEach((id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const updateFromField = () => {
    getFormValues();
    renderSaves();
    renderSkills();
    renderDerived();
    document.getElementById("builderTitle").textContent = state.name || "Nova ficha";
  };
  el.addEventListener("input", updateFromField);
  el.addEventListener("change", updateFromField);
});

on("saveCharacterBtn", "click", saveCurrent);
on("newCharacterBtn", "click", () => {
  state = freshCharacter();
  currentId = null;
  renderAll();
});
on("exportPdfBtn", "click", () => exportPdf(state));
on("searchSaved", "input", renderSavedList);
on("addAttackBtn", "click", () => {
  const name = $("attackName").value.trim();
  const bonus = $("attackBonus").value.trim();
  const damage = $("attackDamage").value.trim();
  if (!name) return;
  state.attacks.push({ name, bonus, damage });
  $("attackName").value = "";
  $("attackBonus").value = "";
  $("attackDamage").value = "";
  renderAttacks();
});
on("spellSearch", "input", renderSpells);
on("spellLevelFilter", "change", renderSpells);
on("addCustomSpell", "click", () => {
  const name = $("customSpellName").value.trim();
  const level = Number($("customSpellLevel").value);
  if (!name) return;
  addSpell({ name, level, summary: "Magia adicionada manualmente." });
  $("customSpellName").value = "";
});
on("addCustomFeature", "click", () => {
  const name = $("customFeatureName").value.trim();
  if (!name) return;
  addFeature({ name, summary: "Habilidade adicionada manualmente." });
  $("customFeatureName").value = "";
});
on("addContentBtn", "click", addContent);
on("importJsonBtn", "click", importJson);

exportPdf = function (character = state) {
  getFormValues();
  const char = normalizeCharacter(character.id === state.id ? state : character);
  const pb = profBonus(char.level);
  const sheet = document.getElementById("printSheet");
  const abilityHtml = ABILITIES.map(([key, label]) => `<li>${label}: ${char.abilities[key]} (${signed(mod(char.abilities[key]))})</li>`).join("");
  const savesHtml = ABILITIES.map(([key, label]) => {
    const total = mod(char.abilities[key]) + (char.saves[key] ? pb : 0);
    return `<li>${label}: ${signed(total)}${char.saves[key] ? " prof." : ""}</li>`;
  }).join("");
  const skillHtml = SKILLS.filter(([name]) => char.skills[name]).map(([name]) => `<li>${name}: ${char.skills[name] === 2 ? "Especialização" : "Proficiência"}</li>`).join("");
  const attacksHtml = char.attacks.map((attack) => `<li>${attack.name}: ${attack.bonus || "-"} / ${attack.damage || "-"}</li>`).join("");
  const spellAbility = spellAbilityKey(char.className);
  const spellAttack = pb + mod(char.abilities[spellAbility]);

  sheet.innerHTML = `
    <div class="sheet-page">
      <div class="sheet-title">
        <h1>${char.name || "Personagem"}</h1>
        <p>Nível ${char.level} - ${char.species || "Espécie"} - ${char.className || "Classe"} - ${char.background || "Antecedente"}</p>
        <p>${char.alignment || ""} ${char.xp ? `- ${char.xp} XP` : ""}</p>
      </div>
      <div class="sheet-grid">
        <section class="sheet-box"><h2>Combate</h2><p>PV: ${char.hp}/${char.maxHp}</p><p>Temp: ${char.tempHp || 0}</p><p>CA: ${char.ac}</p><p>Deslocamento: ${char.speed}</p><p>Proficiência: ${signed(pb)}</p></section>
        <section class="sheet-box"><h2>Magia</h2><p>Atributo: ${spellAbility.toUpperCase()}</p><p>CD: ${8 + spellAttack}</p><p>Ataque: ${signed(spellAttack)}</p></section>
        <section class="sheet-box"><h2>Atributos</h2><ul>${abilityHtml}</ul></section>
        <section class="sheet-box sheet-wide"><h2>Resistências</h2><ul>${savesHtml}</ul></section>
        <section class="sheet-box sheet-wide"><h2>Ataques</h2><ul>${attacksHtml || "<li>Nenhum</li>"}</ul></section>
        <section class="sheet-box sheet-wide"><h2>Perícias</h2><ul>${skillHtml || "<li>Nenhuma marcada</li>"}</ul></section>
        <section class="sheet-box sheet-wide"><h2>Magias</h2><p>${char.spells.map((s) => `${s.name}${s.level !== undefined ? ` (${s.level === 0 ? "Truque" : `${s.level}º`})` : ""}`).join(", ") || "Nenhuma"}</p></section>
        <section class="sheet-box sheet-wide"><h2>Habilidades</h2><p>${char.features.map((f) => f.name).join(", ") || "Nenhuma"}</p></section>
        <section class="sheet-box sheet-wide"><h2>Recursos e estado</h2><p>Inspiração: ${char.heroicInspiration || "Não"} | Exaustão: ${char.exhaustion || 0}</p><p>${char.resources || "-"}</p><p>${char.conditions || ""}</p></section>
        <section class="sheet-box sheet-wide"><h2>Equipamento</h2><p>${char.equipment || "-"}</p></section>
        <section class="sheet-box sheet-wide"><h2>Moedas, idiomas e ferramentas</h2><p>${char.currency || "-"}</p><p>${char.languagesTools || "-"}</p></section>
        <section class="sheet-box sheet-wide"><h2>Anotações</h2><p>${char.notes || "-"}</p></section>
      </div>
    </div>
  `;
  window.print();
};

try {
  renderAll();
} catch (error) {
  console.error(error);
  const box = document.createElement("div");
  box.className = "notice";
  box.style.margin = "16px";
  box.style.color = "#ffd9d9";
  box.textContent = "O app encontrou um erro ao carregar. Recarregue a página; se continuar, limpe os dados salvos do site.";
  document.body.prepend(box);
}
