/* ============================================
   iGeeks – Calculadora de Reparações
   Todos os dispositivos: iPhone, MacBook, Apple Watch, iPad
   ============================================ */

// ══════════════════════════════════════════════
// DATA POR DISPOSITIVO
// ══════════════════════════════════════════════

const DEVICE_DATA = {

  // ── iPHONE ────────────────────────────────
  iphone: {
    label: 'iPhone',
    step1Label: 'Escolhe o teu iPhone',
    genPrefix: 'iPhone',
    ctaDevice: 'iPhone',
    models: [
      { group:'SE / 5', name:'5S',         ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:20,  bateriaOriginal:null, bateriaCompativel:20,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
      { group:'SE / 5', name:'5SE',        ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:20,  bateriaOriginal:null, bateriaCompativel:20,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
      { group:'SE / 5', name:'SE (2020)',  ecraoOriginal:195,  ecraoRecond:60,   ecraoCompativel:40,  bateriaOriginal:75,   bateriaCompativel:35,  vidroTraseiro:55,   flexCarga:35,  cameraTraseira:40,   auricular:50  },
      { group:'SE / 5', name:'SE (2022)',  ecraoOriginal:195,  ecraoRecond:60,   ecraoCompativel:40,  bateriaOriginal:75,   bateriaCompativel:35,  vidroTraseiro:55,   flexCarga:35,  cameraTraseira:40,   auricular:60  },
      { group:'6',      name:'6',          ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:25,  bateriaOriginal:null, bateriaCompativel:20,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
      { group:'6',      name:'6 Plus',     ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:30,  bateriaOriginal:null, bateriaCompativel:25,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
      { group:'6',      name:'6S',         ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:30,  bateriaOriginal:null, bateriaCompativel:25,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
      { group:'6',      name:'6S Plus',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:35,  bateriaOriginal:null, bateriaCompativel:25,  vidroTraseiro:null, flexCarga:25,  cameraTraseira:null, auricular:null },
      { group:'7',      name:'7',          ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:35,  bateriaOriginal:null, bateriaCompativel:25,  vidroTraseiro:null, flexCarga:35,  cameraTraseira:null, auricular:null },
      { group:'7',      name:'7 Plus',     ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:40,  bateriaOriginal:null, bateriaCompativel:25,  vidroTraseiro:null, flexCarga:35,  cameraTraseira:null, auricular:null },
      { group:'8',      name:'8',          ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:40,  bateriaOriginal:null, bateriaCompativel:30,  vidroTraseiro:50,   flexCarga:35,  cameraTraseira:null, auricular:null },
      { group:'8',      name:'8 Plus',     ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:40,  bateriaOriginal:null, bateriaCompativel:30,  vidroTraseiro:50,   flexCarga:35,  cameraTraseira:null, auricular:null },
      { group:'X / XR / XS', name:'X',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:60,  bateriaOriginal:null, bateriaCompativel:40,  vidroTraseiro:55,   flexCarga:45,  cameraTraseira:40,   auricular:50  },
      { group:'X / XR / XS', name:'XR',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:60,  bateriaOriginal:null, bateriaCompativel:40,  vidroTraseiro:55,   flexCarga:45,  cameraTraseira:40,   auricular:50  },
      { group:'X / XR / XS', name:'XS',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:60,  bateriaOriginal:95,   bateriaCompativel:40,  vidroTraseiro:55,   flexCarga:45,  cameraTraseira:40,   auricular:50  },
      { group:'X / XR / XS', name:'XS Max',ecraoOriginal:null,ecraoRecond:null, ecraoCompativel:60,  bateriaOriginal:95,   bateriaCompativel:40,  vidroTraseiro:55,   flexCarga:45,  cameraTraseira:40,   auricular:50  },
      { group:'11',     name:'11',         ecraoOriginal:249,  ecraoRecond:80,   ecraoCompativel:60,  bateriaOriginal:95,   bateriaCompativel:50,  vidroTraseiro:60,   flexCarga:65,  cameraTraseira:40,   auricular:50  },
      { group:'11',     name:'11 Pro',     ecraoOriginal:349,  ecraoRecond:90,   ecraoCompativel:60,  bateriaOriginal:95,   bateriaCompativel:50,  vidroTraseiro:60,   flexCarga:65,  cameraTraseira:55,   auricular:50  },
      { group:'11',     name:'11 Pro Max', ecraoOriginal:419,  ecraoRecond:90,   ecraoCompativel:60,  bateriaOriginal:95,   bateriaCompativel:50,  vidroTraseiro:60,   flexCarga:65,  cameraTraseira:55,   auricular:50  },
      { group:'12',     name:'12',         ecraoOriginal:349,  ecraoRecond:100,  ecraoCompativel:70,  bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:70,   flexCarga:80,  cameraTraseira:80,   auricular:60  },
      { group:'12',     name:'12 Mini',    ecraoOriginal:289,  ecraoRecond:100,  ecraoCompativel:70,  bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:70,   flexCarga:80,  cameraTraseira:90,   auricular:60  },
      { group:'12',     name:'12 Pro',     ecraoOriginal:349,  ecraoRecond:100,  ecraoCompativel:70,  bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:70,   flexCarga:80,  cameraTraseira:90,   auricular:60  },
      { group:'12',     name:'12 Pro Max', ecraoOriginal:419,  ecraoRecond:140,  ecraoCompativel:75,  bateriaOriginal:95,   bateriaCompativel:65,  vidroTraseiro:70,   flexCarga:80,  cameraTraseira:90,   auricular:60  },
      { group:'13',     name:'13',         ecraoOriginal:349,  ecraoRecond:120,  ecraoCompativel:75,  bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:70,   flexCarga:85,  cameraTraseira:80,   auricular:60  },
      { group:'13',     name:'13 Mini',    ecraoOriginal:289,  ecraoRecond:120,  ecraoCompativel:75,  bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:70,   flexCarga:85,  cameraTraseira:80,   auricular:60  },
      { group:'13',     name:'13 Pro',     ecraoOriginal:349,  ecraoRecond:160,  ecraoCompativel:100, bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:75,   flexCarga:85,  cameraTraseira:110,  auricular:60  },
      { group:'13',     name:'13 Pro Max', ecraoOriginal:419,  ecraoRecond:160,  ecraoCompativel:100, bateriaOriginal:95,   bateriaCompativel:60,  vidroTraseiro:75,   flexCarga:85,  cameraTraseira:110,  auricular:60  },
      { group:'14',     name:'14',         ecraoOriginal:349,  ecraoRecond:120,  ecraoCompativel:90,  bateriaOriginal:109,  bateriaCompativel:60,  vidroTraseiro:80,   flexCarga:90,  cameraTraseira:80,   auricular:60  },
      { group:'14',     name:'14 Plus',    ecraoOriginal:419,  ecraoRecond:140,  ecraoCompativel:90,  bateriaOriginal:109,  bateriaCompativel:60,  vidroTraseiro:80,   flexCarga:90,  cameraTraseira:80,   auricular:70  },
      { group:'14',     name:'14 Pro',     ecraoOriginal:419,  ecraoRecond:200,  ecraoCompativel:140, bateriaOriginal:109,  bateriaCompativel:60,  vidroTraseiro:90,   flexCarga:90,  cameraTraseira:110,  auricular:70  },
      { group:'14',     name:'14 Pro Max', ecraoOriginal:509,  ecraoRecond:210,  ecraoCompativel:140, bateriaOriginal:109,  bateriaCompativel:60,  vidroTraseiro:90,   flexCarga:90,  cameraTraseira:110,  auricular:70  },
      { group:'15',     name:'15',         ecraoOriginal:349,  ecraoRecond:200,  ecraoCompativel:130, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:90,   flexCarga:100, cameraTraseira:80,   auricular:70  },
      { group:'15',     name:'15 Plus',    ecraoOriginal:419,  ecraoRecond:200,  ecraoCompativel:130, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:90,   flexCarga:100, cameraTraseira:80,   auricular:70  },
      { group:'15',     name:'15 Pro',     ecraoOriginal:419,  ecraoRecond:250,  ecraoCompativel:170, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:110,  auricular:70  },
      { group:'15',     name:'15 Pro Max', ecraoOriginal:499,  ecraoRecond:260,  ecraoCompativel:170, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:110,  auricular:70  },
      { group:'16',     name:'16',         ecraoOriginal:359,  ecraoRecond:210,  ecraoCompativel:140, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:90,   auricular:70  },
      { group:'16',     name:'16 Plus',    ecraoOriginal:429,  ecraoRecond:210,  ecraoCompativel:140, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:90,   auricular:70  },
      { group:'16',     name:'16 Pro',     ecraoOriginal:429,  ecraoRecond:340,  ecraoCompativel:210, bateriaOriginal:135,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:130,  auricular:70  },
      { group:'16',     name:'16 Pro Max', ecraoOriginal:519,  ecraoRecond:380,  ecraoCompativel:210, bateriaOriginal:135,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:130,  auricular:70  },
      { group:'16',     name:'16 E',       ecraoOriginal:299,  ecraoRecond:null, ecraoCompativel:140, bateriaOriginal:109,  bateriaCompativel:65,  vidroTraseiro:100,  flexCarga:100, cameraTraseira:null, auricular:null },
      { group:'17',     name:'17',         ecraoOriginal:429,  ecraoRecond:null, ecraoCompativel:null,bateriaOriginal:109,  bateriaCompativel:null,vidroTraseiro:140,  flexCarga:150, cameraTraseira:null, auricular:null },
      { group:'17',     name:'17 Air',     ecraoOriginal:429,  ecraoRecond:null, ecraoCompativel:null,bateriaOriginal:109,  bateriaCompativel:null,vidroTraseiro:140,  flexCarga:150, cameraTraseira:null, auricular:null },
      { group:'17',     name:'17 Pro',     ecraoOriginal:429,  ecraoRecond:null, ecraoCompativel:null,bateriaOriginal:135,  bateriaCompativel:null,vidroTraseiro:140,  flexCarga:150, cameraTraseira:null, auricular:null },
      { group:'17',     name:'17 Pro Max', ecraoOriginal:519,  ecraoRecond:null, ecraoCompativel:null,bateriaOriginal:135,  bateriaCompativel:null,vidroTraseiro:140,  flexCarga:150, cameraTraseira:null, auricular:null },
    ],
    services: [
      { key:'ecrao',         label:'Ecrã',           type:'radio',
        options:[
          { label:'Original',       priceKey:'ecraoOriginal'   },
          { label:'Recondicionado', priceKey:'ecraoRecond'     },
          { label:'Compatível',     priceKey:'ecraoCompativel' },
        ]
      },
      { key:'bateria',       label:'Bateria',         type:'radio',
        options:[
          { label:'Original',   priceKey:'bateriaOriginal'   },
          { label:'Compatível', priceKey:'bateriaCompativel' },
        ]
      },
      { key:'vidroTraseiro',  label:'Vidro Traseiro',  type:'direct', priceKey:'vidroTraseiro'  },
      { key:'flexCarga',      label:'Flex de Carga',   type:'direct', priceKey:'flexCarga'      },
      { key:'cameraTraseira', label:'Câmara Traseira', type:'direct', priceKey:'cameraTraseira' },
      { key:'auricular',      label:'Auricular',       type:'direct', priceKey:'auricular'      },
    ],
  },

  // ── MacBook ────────────────────────────────
  macbook: {
    label: 'MacBook',
    step1Label: 'Escolhe o teu MacBook',
    genPrefix: 'MacBook',
    ctaDevice: 'MacBook',
    models: [
      // MacBook Air
      { group:'Air (Intel)', name:'Air 2018',     ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:120, bateriaCompativel:80,  vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Air (Intel)', name:'Air 2019',     ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:120, bateriaCompativel:80,  vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Air (Intel)', name:'Air 2020',     ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:120, bateriaCompativel:80,  vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Air (M1/M2/M3)', name:'Air M1',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:150, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Air (M1/M2/M3)', name:'Air M2',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:150, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Air (M1/M2/M3)', name:'Air M3',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:150, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      // MacBook Pro
      { group:'Pro 13"',    name:'Pro 13" 2019',  ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:140, bateriaCompativel:90,  vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Pro 13"',    name:'Pro 13" 2020',  ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:140, bateriaCompativel:90,  vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Pro 13"',    name:'Pro 13" M1',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:150, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Pro 13"',    name:'Pro 13" M2',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:150, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Pro 14"',    name:'Pro 14" M1',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:160, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Pro 14"',    name:'Pro 14" M2',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:160, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Pro 14"',    name:'Pro 14" M3',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:160, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Pro 16"',    name:'Pro 16" M1',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:180, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Pro 16"',    name:'Pro 16" M2',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:180, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Pro 16"',    name:'Pro 16" M3',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:null, bateriaOriginal:180, bateriaCompativel:null,vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
    ],
    services: [
      { key:'bateria', label:'Bateria', type:'radio',
        options:[
          { label:'Original',   priceKey:'bateriaOriginal'   },
          { label:'Compatível', priceKey:'bateriaCompativel' },
        ]
      },
    ],
  },

  // ── APPLE WATCH ────────────────────────────
  applewatch: {
    label: 'Apple Watch',
    step1Label: 'Escolhe o teu Apple Watch',
    genPrefix: 'Apple Watch',
    ctaDevice: 'Apple Watch',
    models: [
      { group:'Series 3 / 4 / 5', name:'Series 3',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:60, bateriaOriginal:null, bateriaCompativel:40, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Series 3 / 4 / 5', name:'Series 4',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:80, bateriaOriginal:null, bateriaCompativel:40, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Series 3 / 4 / 5', name:'Series 5',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:80, bateriaOriginal:null, bateriaCompativel:40, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Series 6 / SE',    name:'Series 6',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:90, bateriaOriginal:null, bateriaCompativel:45, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Series 6 / SE',    name:'SE (1ª Gen)',ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:90, bateriaOriginal:null, bateriaCompativel:45, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Series 7 / 8 / 9', name:'Series 7',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:100,bateriaOriginal:null, bateriaCompativel:50, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Series 7 / 8 / 9', name:'Series 8',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:100,bateriaOriginal:null, bateriaCompativel:50, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Series 7 / 8 / 9', name:'Series 9',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:100,bateriaOriginal:null, bateriaCompativel:50, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Series 7 / 8 / 9', name:'SE (2ª Gen)',ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:100,bateriaOriginal:null, bateriaCompativel:50, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Series 10 / Ultra', name:'Series 10',  ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:120,bateriaOriginal:null, bateriaCompativel:55, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'Series 10 / Ultra', name:'Ultra 2',    ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:150,bateriaOriginal:null, bateriaCompativel:65, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
    ],
    services: [
      { key:'ecrao',   label:'Ecrã',    type:'radio',
        options:[
          { label:'Compatível', priceKey:'ecraoCompativel' },
        ]
      },
      { key:'bateria', label:'Bateria', type:'radio',
        options:[
          { label:'Compatível', priceKey:'bateriaCompativel' },
        ]
      },
    ],
  },

  // ── iPAD ──────────────────────────────────
  ipad: {
    label: 'iPad',
    step1Label: 'Escolhe o teu iPad',
    genPrefix: 'iPad',
    ctaDevice: 'iPad',
    models: [
      { group:'iPad (base)',  name:'iPad 9ª Gen',  ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:80,  bateriaOriginal:null, bateriaCompativel:60, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad (base)',  name:'iPad 10ª Gen', ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:100, bateriaOriginal:null, bateriaCompativel:70, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad mini',    name:'mini 5',       ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:90,  bateriaOriginal:null, bateriaCompativel:60, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad mini',    name:'mini 6',       ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:100, bateriaOriginal:null, bateriaCompativel:65, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad Air',     name:'Air 4',        ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:110, bateriaOriginal:null, bateriaCompativel:70, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad Air',     name:'Air 5',        ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:110, bateriaOriginal:null, bateriaCompativel:70, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad Air',     name:'Air M2',       ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:120, bateriaOriginal:null, bateriaCompativel:75, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad Pro 11"', name:'Pro 11" M1',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:130, bateriaOriginal:null, bateriaCompativel:80, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad Pro 11"', name:'Pro 11" M2',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:130, bateriaOriginal:null, bateriaCompativel:80, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad Pro 11"', name:'Pro 11" M4',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:150, bateriaOriginal:null, bateriaCompativel:85, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad Pro 13"', name:'Pro 13" M1',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:160, bateriaOriginal:null, bateriaCompativel:90, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad Pro 13"', name:'Pro 13" M2',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:160, bateriaOriginal:null, bateriaCompativel:90, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
      { group:'iPad Pro 13"', name:'Pro 13" M4',   ecraoOriginal:null, ecraoRecond:null, ecraoCompativel:180, bateriaOriginal:null, bateriaCompativel:95, vidroTraseiro:null, flexCarga:null, cameraTraseira:null, auricular:null },
    ],
    services: [
      { key:'ecrao',   label:'Ecrã',    type:'radio',
        options:[
          { label:'Compatível', priceKey:'ecraoCompativel' },
        ]
      },
      { key:'bateria', label:'Bateria', type:'radio',
        options:[
          { label:'Compatível', priceKey:'bateriaCompativel' },
        ]
      },
    ],
  },
};

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
let currentDevice = null;
let selectedGen   = null;
let selectedModel = null;
let selections    = {};

// ══════════════════════════════════════════════
// DOM REFS
// ══════════════════════════════════════════════
const devicePicker      = document.getElementById('devicePicker');
const calculatorSection = document.getElementById('calculatorSection');
const backBtn           = document.getElementById('backBtn');
const calcTitle         = document.getElementById('calcTitle');
const step1Label        = document.getElementById('step1Label');
const genSelect         = document.getElementById('genSelect');
const variantBlock      = document.getElementById('variantBlock');
const variantChips      = document.getElementById('variantChips');
const cardServices      = document.getElementById('card-services');
const servicesList      = document.getElementById('servicesList');
const summaryModel      = document.getElementById('summaryModel');
const summaryEmpty      = document.getElementById('summaryEmpty');
const summaryLines      = document.getElementById('summaryLines');
const summaryTotal      = document.getElementById('summaryTotal');
const summaryNote       = document.getElementById('summaryNote');
const ctaBtn            = document.getElementById('ctaBtn');
const totalVal          = document.getElementById('totalVal');

// ══════════════════════════════════════════════
// DEVICE PICKER
// ══════════════════════════════════════════════
document.querySelectorAll('.device-card').forEach(card => {
  card.addEventListener('click', () => {
    const deviceKey = card.dataset.device;
    loadDevice(deviceKey);
  });
});

function loadDevice(deviceKey) {
  currentDevice = DEVICE_DATA[deviceKey];
  if (!currentDevice) return;

  // Reset state
  selectedGen   = null;
  selectedModel = null;
  selections    = {};

  // Update titles
  calcTitle.textContent   = `Calculadora de Reparações – ${currentDevice.label}`;
  step1Label.textContent  = currentDevice.step1Label;

  // Populate gen select
  genSelect.innerHTML = `<option value="">Seleciona a geração...</option>`;
  const groups = [...new Set(currentDevice.models.map(m => m.group))];
  groups.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = `${currentDevice.genPrefix} ${g}`;
    genSelect.appendChild(opt);
  });

  // Reset UI
  variantBlock.classList.add('hidden');
  cardServices.classList.add('hidden');
  variantChips.innerHTML = '';
  servicesList.innerHTML = '';
  renderSummary();

  // Switch screens
  devicePicker.classList.add('hidden');
  calculatorSection.classList.remove('hidden');
}

// ── Back button ──
backBtn.addEventListener('click', () => {
  calculatorSection.classList.add('hidden');
  devicePicker.classList.remove('hidden');
  currentDevice = null;
  selectedGen = null;
  selectedModel = null;
  selections = {};
});

// ══════════════════════════════════════════════
// GENERATION SELECT
// ══════════════════════════════════════════════
genSelect.addEventListener('change', () => {
  selectedGen   = genSelect.value || null;
  selectedModel = null;
  selections    = {};

  variantBlock.classList.toggle('hidden', !selectedGen);
  cardServices.classList.add('hidden');
  renderSummary();

  if (!selectedGen) return;

  variantChips.innerHTML = '';
  const variants = currentDevice.models.filter(m => m.group === selectedGen);
  variants.forEach(m => {
    const chip = document.createElement('button');
    chip.className = 'variant-chip';
    chip.textContent = `${currentDevice.genPrefix} ${m.name}`;
    chip.addEventListener('click', () => selectVariant(m, chip));
    variantChips.appendChild(chip);
  });
});

// ══════════════════════════════════════════════
// VARIANT SELECTED
// ══════════════════════════════════════════════
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

// ══════════════════════════════════════════════
// BUILD SERVICES
// ══════════════════════════════════════════════
function buildServices() {
  servicesList.innerHTML = '';

  currentDevice.services.forEach(def => {
    // Check availability
    let hasAnyPrice = false;
    if (def.type === 'radio') {
      hasAnyPrice = def.options.some(o => selectedModel[o.priceKey] !== null && selectedModel[o.priceKey] !== undefined);
    } else {
      hasAnyPrice = selectedModel[def.priceKey] !== null && selectedModel[def.priceKey] !== undefined;
    }
    if (!hasAnyPrice) return;

    const sel  = selections[def.key];
    const item = document.createElement('div');
    item.className = 'service-item';
    if (sel) item.classList.add('has-selection');
    item.dataset.key = def.key;

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
        <span class="service-selected-label">${sel ? sel.optionLabel + ' · ' + fmt(sel.price) : ''}</span>
        <svg class="service-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    `;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.service-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });

    // Options panel
    const optionsPanel = document.createElement('div');
    optionsPanel.className = 'service-options';

    if (def.type === 'radio') {
      const row = document.createElement('div');
      row.className = 'options-radio';

      def.options.forEach(opt => {
        const price = selectedModel[opt.priceKey];
        const btn   = document.createElement('button');
        btn.className = 'option-btn';
        if (price === null || price === undefined) {
          btn.classList.add('disabled');
        }
        if (sel && sel.optionKey === opt.priceKey) btn.classList.add('selected');

        btn.innerHTML = `
          ${opt.label}
          <span class="option-price">${price != null ? fmt(price) : 'N/D'}</span>
        `;

        if (price != null) {
          btn.addEventListener('click', () => {
            if (sel && sel.optionKey === opt.priceKey) {
              delete selections[def.key];
            } else {
              selections[def.key] = { label: def.label, optionLabel: opt.label, optionKey: opt.priceKey, price };
            }
            buildServices();
            renderSummary();
          });
        }
        row.appendChild(btn);
      });

      optionsPanel.appendChild(row);

    } else {
      // Direct
      const price      = selectedModel[def.priceKey];
      const isSelected = !!sel;
      const div        = document.createElement('div');
      div.className    = 'options-direct';
      div.innerHTML    = `<span class="direct-price">${fmt(price)}</span>`;

      if (isSelected) {
        const removeBtn = document.createElement('button');
        removeBtn.className   = 'direct-remove-btn';
        removeBtn.textContent = 'Remover';
        removeBtn.addEventListener('click', () => {
          delete selections[def.key];
          buildServices();
          renderSummary();
        });
        div.appendChild(removeBtn);
      } else {
        const addBtn = document.createElement('button');
        addBtn.className   = 'direct-select-btn';
        addBtn.textContent = 'Adicionar';
        addBtn.addEventListener('click', () => {
          selections[def.key] = { label: def.label, optionLabel: def.label, price };
          buildServices();
          renderSummary();
        });
        div.appendChild(addBtn);
      }

      optionsPanel.appendChild(div);
    }

    item.appendChild(header);
    item.appendChild(optionsPanel);

    if (!sel) item.classList.add('open');

    servicesList.appendChild(item);
  });
}

// ══════════════════════════════════════════════
// RENDER SUMMARY
// ══════════════════════════════════════════════
function renderSummary() {
  const keys          = Object.keys(selections);
  const hasModel      = !!selectedModel;
  const hasSelections = keys.length > 0;

  summaryModel.classList.toggle('hidden', !hasModel);
  summaryModel.textContent = hasModel
    ? `${currentDevice ? currentDevice.genPrefix : ''} ${selectedModel.name}`
    : '';

  summaryEmpty.classList.toggle('hidden', hasSelections);
  summaryLines.classList.toggle('hidden', !hasSelections);
  summaryLines.innerHTML = '';

  let total = 0;
  keys.forEach(k => {
    const s = selections[k];
    total += s.price;
    const row = document.createElement('div');
    row.className = 'summary-line';
    row.innerHTML = `
      <span class="summary-line-name">${s.label} ${s.optionLabel !== s.label ? '· ' + s.optionLabel : ''}</span>
      <span class="summary-line-price">${fmt(s.price)}</span>
    `;
    summaryLines.appendChild(row);
  });

  summaryTotal.classList.toggle('hidden', !hasSelections);
  summaryNote.classList.toggle('hidden', !hasSelections);
  ctaBtn.classList.toggle('hidden', !hasSelections);

  if (hasSelections) animatePrice(totalVal, total);
}

// ══════════════════════════════════════════════
// CTA → WhatsApp
// ══════════════════════════════════════════════
ctaBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const keys = Object.keys(selections);
  if (!keys.length) return;

  const deviceLabel = currentDevice ? currentDevice.genPrefix : 'Dispositivo';
  const modelName   = selectedModel ? selectedModel.name : '';

  const mensagem = encodeURIComponent(
`Olá,

Gostaria de solicitar um orçamento / agendamento de reparação.

Equipamento:
${deviceLabel} ${modelName}

Serviços pretendidos:
${keys.map(k => `• ${selections[k].label}${selections[k].optionLabel !== selections[k].label ? ' ' + selections[k].optionLabel : ''}`).join('\n')}

Aguardo o vosso contacto. Obrigado!`
  );

  const numero = "351xxxxxxxxx"; // ← substitui pelo número real
  window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
});

// ══════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════
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
