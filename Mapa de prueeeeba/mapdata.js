var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "blue",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "fd342b",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_hover_color: ""
  },
  state_specific: {
    ARA: {
      hover_color: "fd342b",
      name: "Salta",
      description: " ",
      color: "#4393c4"
    },
    ARB: {
      hover_color: "fd342b",
      name: "Buenos Aires",
      description: " ",
      color: "#e17c78"
    },
    ARD: {
      hover_color: "fd342b",
      name: "San Luis",
      description: " ",
      color: "#b09f20"
    },
    ARE: {
      hover_color: "fd342b",
      name: "Entre Ríos",
      description: " ",
      color: "#e17c78"
    },
    ARF: {
      hover_color: "fd342b",
      name: "La Rioja",
      description: " ",
      color: "#b09f20"
    },
    ARG: {
      hover_color: "fd342b",
      name: "Santiago del Estero",
      description: " ",
      color: "#4393c4"
    },
    ARH: {
      hover_color: "fd342b",
      name: "Chaco",
      description: " ",
      color: "#93d4c4"
    },
    ARJ: {
      hover_color: "fd342b",
      name: "San Juan",
      description: " ",
      color: "#b09f20"
    },
    ARK: {
      hover_color: "fd342b",
      name: "Catamarca",
      description: " ",
      color: "#4393c4"
    },
    ARL: {
      hover_color: "fd342b",
      name: "La Pampa",
      description: " ",
      color: "#e17c78"
    },
    ARM: {
      hover_color: "fd342b",
      name: "Mendoza",
      description: " ",
      color: "#b09f20"
    },
    ARN: {
      hover_color: "fd342b",
      name: "Misiones",
      description: " ",
      color: "#93d4c4"
    },
    ARP: {
      hover_color: "fd342b",
      name: "Formosa",
      description: " ",
      color: "#93d4c4"
    },
    ARQ: {
      hover_color: "fd342b",
      name: "Neuquén",
      description: " ",
      color: "#fdc696"
    },
    ARR: {
      hover_color: "fd342b",
      name: "Río Negro",
      description: " ",
      color: "#fdc696"
    },
    ARS: {
      hover_color: "fd342b",
      name: "Santa Fe",
      description: " ",
      color: "#e17c78"
    },
    ART: {
      hover_color: "fd342b",
      name: "Tucumán",
      description: " ",
      color: "#4393c4"
    },
    ARU: {
      hover_color: "fd342b",
      name: "Chubut",
      description: " ",
      color: "#fdc696"
    },
    ARV: {
      hover_color: "fd342b",
      name: "Tierra del Fuego",
      description: " ",
      color: "#fdc696"
    },
    ARW: {
      hover_color: "fd342b",
      name: "Corrientes",
      description: " ",
      color: "#93d4c4"
    },
    ARX: {
      hover_color: "fd342b",
      name: "Córdoba",
      description: " ",
      color: "#e17c78"
    },
    ARY: {
      hover_color: "fd342b",
      name: "Jujuy",
      description: " ",
      color: "#4393c4"
    },
    ARZ: {
      hover_color: "fd342b",
      name: "Santa Cruz",
      description: " ",
      color: "#fdc696"
    }
  },
  locations: {},
  labels: {
    ARA: {
      name: "Salta",
      parent_id: "ARA"
    },
    ARB: {
      name: "Buenos Aires",
      parent_id: "ARB"
    },
    ARD: {
      name: "San Luis",
      parent_id: "ARD"
    },
    ARE: {
      name: "Entre Ríos",
      parent_id: "ARE"
    },
    ARF: {
      name: "La Rioja",
      parent_id: "ARF"
    },
    ARG: {
      name: "Santiago del Estero",
      parent_id: "ARG"
    },
    ARH: {
      name: "Chaco",
      parent_id: "ARH"
    },
    ARJ: {
      name: "San Juan",
      parent_id: "ARJ"
    },
    ARK: {
      name: "Catamarca",
      parent_id: "ARK"
    },
    ARL: {
      name: "La Pampa",
      parent_id: "ARL"
    },
    ARM: {
      name: "Mendoza",
      parent_id: "ARM"
    },
    ARN: {
      name: "Misiones",
      parent_id: "ARN"
    },
    ARP: {
      name: "Formosa",
      parent_id: "ARP"
    },
    ARQ: {
      name: "Neuquén",
      parent_id: "ARQ"
    },
    ARR: {
      name: "Río Negro",
      parent_id: "ARR"
    },
    ARS: {
      name: "Santa Fe",
      parent_id: "ARS"
    },
    ART: {
      name: "Tucumán",
      parent_id: "ART"
    },
    ARU: {
      name: "Chubut",
      parent_id: "ARU"
    },
    ARV: {
      name: "Tierra del Fuego",
      parent_id: "ARV"
    },
    ARW: {
      name: "Corrientes",
      parent_id: "ARW"
    },
    ARX: {
      name: "Córdoba",
      parent_id: "ARX"
    },
    ARY: {
      name: "Jujuy",
      parent_id: "ARY"
    },
    ARZ: {
      name: "Santa Cruz",
      parent_id: "ARZ"
    }
  },
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [
        "Neuquén",
        "Río Negro",
        "Chubut",
        "Santa Cruz",
        "Tierra del Fuego"
      ],
      name: "Reg. Patagónica",
      color: "#fdc696"
    },
    "1": {
      states: [
        "La Rioja",
        "San Juan",
        "Mendoza",
        "San Luis"
      ],
      name: "Reg. Cuyo",
      color: "#b09f20"
    },
    "2": {
      states: [
        "Chaco",
        "Formosa",
        "Corrientes",
        "Misiones"
      ],
      name: "Reg. Nordeste",
      color: "#93d4c4"
    },
    "3": {
      states: [
        "Jujuy",
        "Salta",
        "Catamarca",
        "Tucumán",
        "Santiago del Est."
      ],
      name: "Reg. Noreste",
      color: "#4393c4"
    },
    "4": {
      states: [
        "Santa Fe",
        "Entre Ríos",
        "Buenos Aires",
        "La Pampa",
        "Córdoba"
      ],
      name: "Reg. Pampeana",
      color: "#e17c78"
    }
  }
};