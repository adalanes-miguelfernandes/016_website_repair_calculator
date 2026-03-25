/* ============================================
   iGeeks – Calculadora de Reparações
   ============================================ */

// ── Data ──────────────────────────────────────
// null = serviço não disponível para este modelo
const MODELS = [
  // SE / 5
  { group:'SE / 5', name:'5S',           ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:20,  bateriaOriginal:null, bateriaCompativel:20,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
  { group:'SE / 5', name:'5SE',          ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:20,  bateriaOriginal:null, bateriaCompativel:20,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
  { group:'SE / 5', name:'SE (2020)',    ecraoOriginal:195,   ecraoRecond:60,   ecraoCompativel:40,  bateriaOriginal:75,   bateriaCompativel:35,  vidroTraseiro:55,   flexCarga:35,  cameraTraseira:40,   auricular:50  },
  { group:'SE / 5', name:'SE (2022)',    ecraoOriginal:195,   ecraoRecond:60,   ecraoCompativel:40,  bateriaOriginal:75,   bateriaCompativel:35,  vidroTraseiro:55,   flexCarga:35,  cameraTraseira:40,   auricular:60  },
  // 6
  { group:'6',      name:'6',            ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:25,  bateriaOriginal:null, bateriaCompativel:20,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
  { group:'6',      name:'6 Plus',       ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:30,  bateriaOriginal:null, bateriaCompativel:25,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
  { group:'6',      name:'6S',           ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:30,  bateriaOriginal:null, bateriaCompativel:25,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
  { group:'6',      name:'6S Plus',      ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:35,  bateriaOriginal:null, bateriaCompativel:25,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
  // 7
  { group:'7',      name:'7',            ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:35,  bateriaOriginal:null, bateriaCompativel:25,  vidroTraseiro:null, flexCarga:35,  cameraTraseira:null, auricular:null },
  { group:'7',      name:'7 Plus',       ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:40,  bateriaOriginal:null, bateriaCompativel:25,  vidroTraseiro:null, flexCarga:35,  cameraTraseira:null, auricular:null },
  // 8
  { group:'8',      name:'8',            ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:40,  bateriaOriginal:null, bateriaCompativel:30,  vidroTraseiro:50,   flexCarga:35,  cameraTraseira:null, auricular:null },
  { group:'8',      name:'8 Plus',       ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:40,  bateriaOriginal:null, bateriaCompativel:30,  vidroTraseiro:50,   flexCarga:35,  cameraTraseira:null, auricular:null },
  // X / XR / XS
  { group:'X / XR / XS', name:'X',       ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:60,  bateriaOriginal:null, bateriaCompativel:40,  vidroTraseiro:55,   flexCarga:45,  cameraTraseira:40,   auricular:50  },
  { group:'X / XR / XS', name:'XR',      ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:60,  bateriaOriginal:null, bateriaCompativel:40,  vidroTraseiro:55,   flexCarga:45,  cameraTraseira:40,   auricular:50  },
  { group:'X / XR / XS', name:'XS',      ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:60,  bateriaOriginal:95,   bateriaCompativel:40,  vidroTraseiro:55,   flexCarga:45,  cameraTraseira:40,   auricular:50  },
  { group:'X / XR / XS', name:'XS Max',  ecraoOriginal:null, ecraoRecond:null,  ecraoCompativel:60,  bateriaOriginal:95,   bateriaCompativel:40,  vidroTraseiro:55,   flexCarga:45,  cameraTraseira:40,   auricular:50  },
  // 11
  { group:'11',     name:'11',           ecraoOriginal:249,   ecraoRecond:80,   ecraoCompativel:60,  bateriaOriginal:95,   bateriaCompativel:50,  vidroTraseiro:60,   flexCarga:65,  cameraTraseira:40,   auricular:50  },
  { group:'11',     name:'11 Pro',       ecraoOriginal:349,   ecraoRecond:90,   ecraoCompativel:60,  bateriaOriginal:95,   bateriaCompativel:50,  vidroTraseiro:60,   flexCarga:65,  cameraTraseira:55,   auricular:50  },
  { group:'11',     name:'11 Pro Max',   ecraoOriginal:419,   ecraoRecond:90,   ecraoCompativel:60,  bateriaOriginal:95,   bateriaCompativel:50,  vidroTraseiro:60,   flexCarga:65,  cameraTraseira:55,   auricular:50  },
  // 12
  { group:'12',     name:'12',           ecraoOriginal:349,  ecraoRecond:100,   ecraoCompativel:70,  bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:70,   flexCarga:80,  cameraTraseira:80,   auricular:60  },
  { group:'12',     name:'12 Mini',      ecraoOriginal:289,  ecraoRecond:100,   ecraoCompativel:70,  bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:70,   flexCarga:80,  cameraTraseira:90,   auricular:60  },
  { group:'12',     name:'12 Pro',       ecraoOriginal:349,  ecraoRecond:100,   ecraoCompativel:70,  bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:70,   flexCarga:80,  cameraTraseira:90,   auricular:60  },
  { group:'12',     name:'12 Pro Max',   ecraoOriginal:419,  ecraoRecond:140,   ecraoCompativel:75,  bateriaOriginal:95,   bateriaCompativel:65,  vidroTraseiro:70,   flexCarga:80,  cameraTraseira:90,   auricular:60  },
  // 13
  { group:'13',     name:'13',           ecraoOriginal:349,  ecraoRecond:120,   ecraoCompativel:75,  bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:70,   flexCarga:85,  cameraTraseira:80,   auricular:60  },
  { group:'13',     name:'13 Mini',      ecraoOriginal:289,  ecraoRecond:120,   ecraoCompativel:75,  bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:70,   flexCarga:85,  cameraTraseira:80,   auricular:60  },
  { group:'13',     name:'13 Pro',       ecraoOriginal:349,  ecraoRecond:160,   ecraoCompativel:100, bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:75,   flexCarga:85,  cameraTraseira:110,  auricular:60  },
  { group:'13',     name:'13 Pro Max',   ecraoOriginal:419,  ecraoRecond:160,   ecraoCompativel:100, bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:75,   flexCarga:85,  cameraTraseira:110,  auricular:60  },
  // 14
  { group:'14',     name:'14',           ecraoOriginal:349,  ecraoRecond:120,   ecraoCompativel:90,  bateriaOriginal:109,  bateriaCompativel:60,  vidroTraseiro:80,   flexCarga:90,  cameraTraseira:80,   auricular:60  },
  { group:'14',     name:'14 Plus',      ecraoOriginal:419,  ecraoRecond:140,   ecraoCompativel:90,  bateriaOriginal:109,  bateriaCompativel:60,  vidroTraseiro:80,   flexCarga:90,  cameraTraseira:80,   auricular:70  },
  { group:'14',     name:'14 Pro',       ecraoOriginal:419,  ecraoRecond:200,   ecraoCompativel:140, bateriaOriginal:109,  bateriaCompativel:60,  vidroTraseiro:90,   flexCarga:90,  cameraTraseira:110,  auricular:70  },
  { group:'14',     name:'14 Pro Max',   ecraoOriginal:509,  ecraoRecond:210,   ecraoCompativel:140, bateriaOriginal:109,  bateriaCompativel:60,  vidroTraseiro:90,   flexCarga:90,  cameraTraseira:110,  auricular:70  },
  // 15
  { group:'15',     name:'15',           ecraoOriginal:349,  ecraoRecond:200,   ecraoCompativel:130, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:90,   flexCarga:100, cameraTraseira:80,   auricular:70  },
  { group:'15',     name:'15 Plus',      ecraoOriginal:419,  ecraoRecond:200,   ecraoCompativel:130, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:90,   flexCarga:100, cameraTraseira:80,   auricular:70  },
  { group:'15',     name:'15 Pro',       ecraoOriginal:419,  ecraoRecond:250,   ecraoCompativel:170, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:110,  auricular:70  },
  { group:'15',     name:'15 Pro Max',   ecraoOriginal:499,  ecraoRecond:260,   ecraoCompativel:170, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:110,  auricular:70  },
  // 16
  { group:'16',     name:'16',           ecraoOriginal:359,  ecraoRecond:210,   ecraoCompativel:140, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:90,   auricular:70  },
  { group:'16',     name:'16 Plus',      ecraoOriginal:429,  ecraoRecond:210,   ecraoCompativel:140, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:90,   auricular:70  },
  { group:'16',     name:'16 Pro',       ecraoOriginal:429,  ecraoRecond:340,   ecraoCompativel:210, bateriaOriginal:135,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:130,  auricular:70  },
  { group:'16',     name:'16 Pro Max',   ecraoOriginal:519,  ecraoRecond:380,   ecraoCompativel:210, bateriaOriginal:135,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:130,  auricular:70  },
  { group:'16',     name:'16 E',         ecraoOriginal:299, ecraoRecond:null,   ecraoCompativel:140, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:null, auricular:null },
  // 17
  { group:'17',     name:'17',           ecraoOriginal:429, ecraoRecond:null,   ecraoCompativel:null, bateriaOriginal:109, bateriaCompativel:null, vidroTraseiro:140, flexCarga:150, cameraTraseira:null, auricular:null },
  { group:'17',     name:'17 Air',       ecraoOriginal:429, ecraoRecond:null,   ecraoCompativel:null, bateriaOriginal:109, bateriaCompativel:null, vidroTraseiro:140, flexCarga:150, cameraTraseira:null, auricular:null },
  { group:'17',     name:'17 Pro',       ecraoOriginal:429, ecraoRecond:null,   ecraoCompativel:null, bateriaOriginal:135, bateriaCompativel:null, vidroTraseiro:140, flexCarga:150, cameraTraseira:null, auricular:null },
  { group:'17',     name:'17 Pro Max',   ecraoOriginal:519, ecraoRecond:null,   ecraoCompativel:null, bateriaOriginal:135, bateriaCompativel:null, vidroTraseiro:140, flexCarga:150, cameraTraseira:null, auricular:null },
];

// Service definitions
// type:'radio'  → user picks one option (Original / Recond. / Compatível)
// type:'direct' → single price, click = select/deselect
const SERVICE_DEFS = [
  {
    key: 'ecrao',
    label: 'Ecrã',
    type: 'radio',
    options: [
      { label: 'Original',        priceKey: 'ecraoOriginal'    },
      { label: 'Recondicionado',  priceKey: 'ecraoRecond'      },
      { label: 'Compatível',      priceKey: 'ecraoCompativel'  },
    ]
  },
  {
    key: 'bateria',
    label: 'Bateria',
    type: 'radio',
    options: [
      { label: 'Original',    priceKey: 'bateriaOriginal'    },
      { label: 'Compatível',  priceKey: 'bateriaCompativel'  },
    ]
  },
  { key: 'vidroTraseiro',  label: 'Vidro Traseiro',  type: 'direct', priceKey: 'vidroTraseiro'  },
  { key: 'flexCarga',      label: 'Flex de Carga',   type: 'direct', priceKey: 'flexCarga'      },
  { key: 'cameraTraseira', label: 'Câmara Traseira', type: 'direct', priceKey: 'cameraTraseira' },
  { key: 'auricular',      label: 'Auricular',       type: 'direct', priceKey: 'auricular'      },
];

// ── State ──────────────────────────────────────
let selectedGen   = null;
let selectedModel = null;
// selections: { ecrao: { label:'Original', price:210 }, bateria: { label:'Compatível', price:65 }, ... }
let selections    = {};

// ── DOM refs ───────────────────────────────────
const genSelect      = document.getElementById('genSelect');
const variantBlock   = document.getElementById('variantBlock');
const variantChips   = document.getElementById('variantChips');
const cardServices   = document.getElementById('card-services');
const servicesList   = document.getElementById('servicesList');
const summaryModel   = document.getElementById('summaryModel');
const summaryEmpty   = document.getElementById('summaryEmpty');
const summaryLines   = document.getElementById('summaryLines');
const summaryTotal   = document.getElementById('summaryTotal');
const summaryNote    = document.getElementById('summaryNote');
const ctaBtn         = document.getElementById('ctaBtn');
const totalVal       = document.getElementById('totalVal');

// ── Init: populate generation select ──────────
(function init() {
  const groups = [...new Set(MODELS.map(m => m.group))];
  groups.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = `iPhone ${g}`;
    genSelect.appendChild(opt);
  });
})();

// ── Generation change ──────────────────────────
genSelect.addEventListener('change', () => {
  selectedGen   = genSelect.value || null;
  selectedModel = null;
  selections    = {};

  variantBlock.classList.toggle('hidden', !selectedGen);
  cardServices.classList.add('hidden');
  renderSummary();

  if (!selectedGen) return;

  // Build variant chips
  variantChips.innerHTML = '';
  const variants = MODELS.filter(m => m.group === selectedGen);
  variants.forEach(m => {
    const chip = document.createElement('button');
    chip.className = 'variant-chip';
    chip.textContent = `iPhone ${m.name}`;
    chip.addEventListener('click', () => selectVariant(m, chip));
    variantChips.appendChild(chip);
  });
});

// ── Variant selected ───────────────────────────
function selectVariant(model, chipEl) {
  selectedModel = model;
  selections    = {};

  document.querySelectorAll('.variant-chip').forEach(c => c.classList.remove('selected'));
  chipEl.classList.add('selected');

  cardServices.classList.remove('hidden');
  buildServices();
  renderSummary();

  cardServices.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── Build services accordion ───────────────────
function buildServices() {
  servicesList.innerHTML = '';

  SERVICE_DEFS.forEach(def => {
    // Check if at least one option has a price
    let hasAnyPrice = false;
    if (def.type === 'radio') {
      hasAnyPrice = def.options.some(o => selectedModel[o.priceKey] !== null);
    } else {
      hasAnyPrice = selectedModel[def.priceKey] !== null;
    }
    if (!hasAnyPrice) return; // Skip service entirely if no prices available

    const item = document.createElement('div');
    item.className = 'service-item';
    item.dataset.key = def.key;

    // Current selection for this service (if any)
    const sel = selections[def.key];

    // Header
    const header = document.createElement('div');
    header.className = 'service-header';
    header.innerHTML = `
      <div class="service-header-left">
        <div class="service-tick">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <span class="service-name">${def.label}</span>
      </div>
      <div class="service-header-right">
        <span class="service-selected-label">${sel ? sel.label + ' · ' + fmt(sel.price) : ''}</span>
        <svg class="service-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    `;

    if (sel) item.classList.add('has-selection');

    // Toggle accordion on header click
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.service-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });

    // Options panel
    const options = document.createElement('div');
    options.className = 'service-options';

    if (def.type === 'radio') {
      const row = document.createElement('div');
      row.className = 'options-radio';

      def.options.forEach(opt => {
        const price = selectedModel[opt.priceKey];
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (price === null) {
          btn.classList.add('disabled');
        }
        if (sel && sel.optionKey === opt.priceKey) {
          btn.classList.add('selected');
        }
        btn.innerHTML = `
          ${opt.label}
          <span class="option-price">${price !== null ? fmt(price) : 'N/D'}</span>
        `;
        if (price !== null) {
          btn.addEventListener('click', () => {
            // If clicking same option → deselect
            if (sel && sel.optionKey === opt.priceKey) {
              delete selections[def.key];
            } else {
              selections[def.key] = { label: def.label + ' ' + opt.label, optionKey: opt.priceKey, price };
            }
            buildServices();
            renderSummary();
          });
        }
        row.appendChild(btn);
      });

      options.appendChild(row);

    } else {
      // Direct: single price
      const price = selectedModel[def.priceKey];
      const isSelected = !!sel;
      const div = document.createElement('div');
      div.className = 'options-direct';
      div.innerHTML = `<span class="direct-price">${fmt(price)}</span>`;

      if (isSelected) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'direct-remove-btn';
        removeBtn.textContent = 'Remover';
        removeBtn.addEventListener('click', () => {
          delete selections[def.key];
          buildServices();
          renderSummary();
        });
        div.appendChild(removeBtn);
      } else {
        const addBtn = document.createElement('button');
        addBtn.className = 'direct-select-btn';
        addBtn.textContent = 'Adicionar';
        addBtn.addEventListener('click', () => {
          selections[def.key] = { label: def.label, price };
          buildServices();
          renderSummary();
        });
        div.appendChild(addBtn);
      }

      options.appendChild(div);
    }

    item.appendChild(header);
    item.appendChild(options);

    // Auto-open if no selection yet on this service
    if (!sel) item.classList.add('open');
    // If it has selection keep it closed (clean look)
    if (sel) item.classList.remove('open');

    servicesList.appendChild(item);
  });
}

// ── Render summary panel ───────────────────────
function renderSummary() {
  const keys = Object.keys(selections);
  const hasModel = !!selectedModel;
  const hasSelections = keys.length > 0;

  // Model name
  summaryModel.classList.toggle('hidden', !hasModel);
  summaryModel.textContent = hasModel ? `iPhone ${selectedModel.name}` : '';

  // Empty state
  summaryEmpty.classList.toggle('hidden', hasSelections);

  // Lines
  summaryLines.classList.toggle('hidden', !hasSelections);
  summaryLines.innerHTML = '';

  let total = 0;
  keys.forEach(k => {
    const s = selections[k];
    total += s.price;
    const row = document.createElement('div');
    row.className = 'summary-line';
    row.innerHTML = `
      <span class="summary-line-name">${s.label}</span>
      <span class="summary-line-price">${fmt(s.price)}</span>
    `;
    summaryLines.appendChild(row);
  });

  summaryTotal.classList.toggle('hidden', !hasSelections);
  summaryNote.classList.toggle('hidden', !hasSelections);
  ctaBtn.classList.toggle('hidden', !hasSelections);

  if (hasSelections) animatePrice(totalVal, total);
}

// ── Count-up animation ─────────────────────────
function animatePrice(el, target) {
  const duration = 380;
  const from = parseFloat(el.dataset.current || 0);
  el.dataset.current = target;
  const t0 = performance.now();
  function step(now) {
    const p = Math.min((now - t0) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(from + (target - from) * e);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function fmt(val) {
  return Number(val).toFixed(2).replace('.', ',') + ' €';
}

ctaBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const keys = Object.keys(selections);
  if (!keys.length) return;

  let lista = "";
  let total = 0;

  keys.forEach(k => {
    const s = selections[k];
    lista += `• ${s.label} - ${fmt(s.price)}\n`;
    total += s.price;
  });

const mensagem = encodeURIComponent(
`Olá,

Gostaria de solicitar um orçamento / agendamento de reparação.

Equipamento:
iPhone ${selectedModel.name}

Serviços pretendidos:
${keys.map(k => `• ${selections[k].label}`).join("\n")}

Aguardo o vosso contacto. Obrigado!`
);

  const numero = "351910372188"; // teu número

  window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
});
