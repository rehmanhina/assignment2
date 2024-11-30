

//    question2
var mobiles = {
    iphone: {
      iphone7: {
        processor: "Snapdragon 8 Gen 2",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: 200,
            ultrawide: 12,
            telephoto: 10,
            telephotoPeriscope: 10,
          },
          front: 10,
        },
        brand: "iphone",
        battery: 5000,
        operatingSystem: "Android 13",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone8: {
        processor: "Snapdragon 12 Gen 5",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand: "iphone",
        camera: {
          rear: {
            main: 180,
            ultrawide: 15,
            telephoto: 10,
            telephotoPeriscope: 20,
          },
          front: 12,
        },
        battery: 8000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone8plus: {
        processor: "Snapdragon 5 Gen 6",
        memory: {
          ram: 8,
          storage: 128,
        },
        brand: "iphone",
        camera: {
          rear: {
            main: 160,
            ultrawide: 18,
            telephoto: 10,
            telephotoPeriscope: 8,
          },
          front: 16,
        },
        battery: 5000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphoneX: {
        processor: "Snapdragon 5 Gen 4",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand: "iphone",
        camera: {
          rear: {
            main: 130,
            ultrawide: 16,
            telephoto: 10,
            telephotoPeriscope: 18,
          },
          front: 14,
        },
        battery: 6000,
        operatingSystem: "iphone X",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone11: {
        processor: "Snapdragon 7 Gen 9",
        memory: {
          ram: 16,
          storage: 512,
        },
        camera: {
          rear: {
            main: 150,
            ultrawide: 24,
            telephoto: 16,
            telephotoPeriscope: 10,
          },
          front: 20,
        },
        brand: "iphone",
        battery: 10000,
        operatingSystem: "iphone 11",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
    },
    xiomi: {
      redmiA2: {
        modelName: "Mi 12 Pro",
        display: {
          size: 6.73,
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 120,
        },
        brand: "xiomi",
        processor: "Snapdragon 8 Gen 1",
        memory: {
          ram: 8,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 4600,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
      redmi10: {
        modelName: "Mi 8 Pro",
        display: {
          size: 5.73,
          resolution: "3000 x 1320",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        brand: "xiomi",
        processor: "Snapdragon 7 Gen 5",
        memory: {
          ram: 12,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 5000,
        operatingSystem: "Android 11",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
      redmi11: {
        modelName: "Mi 14 Pro",
        display: {
          size: 6.0,
          resolution: "3000 x 1240",
          panelType: "AMOLED",
          refreshRate: 150,
        },
        brand: "xiomi",
        processor: "Snapdragon 8 Gen 4",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 8000,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
      redmi12: {
        modelName: "Mi 12 Pro",
        display: {
          size: 7.4,
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 180,
        },
        brand: "xiomi",
        processor: "Snapdragon 12 Gen 1",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 8000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
      redmi13: {
        modelName: "Mi 14 Pro",
        display: {
          size: 8.03,
          resolution: "4200 x 1540",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        brand: "xiomi",
        processor: "Snapdragon 8 Gen 6",
        memory: {
          ram: 12,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 10000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
    },
    samsung: {
      samsungGalaxyS24: {
        brand: "Samsung",
        model: "Galaxy S24 Ultra",
        display: {
          size: "6.8 inches",
          resolution: "3088x1440",
          type: "AMOLED",
        },
        processor: "Snapdragon 8 Gen 2",
        memory: {
          ram: "12GB",
          storage: "512GB",
        },
        camera: {
          rear: {
            resolution: "108MP",
            features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
          },
          front: {
            resolution: "40MP",
          },
        },
        battery: {
          capacity: "5000mAh",
          fastCharging: "45W Super Fast Charging",
        },
        operatingSystem: "Android 14",
        specialFeatures: [
          "Fingerprint sensor",
          "Water resistance (IP68)",
          "No expandable storage",
        ],
      },
    },
  };
  function populateModels() {
    const brand = document.getElementById('brand').value;
    console.log(brand);
    const modelSelect = document.getElementById('model');
    modelSelect.innerHTML = '<option value="">Select Model</option>'; 

    if (brand) {
        const models = Object.keys(mobiles[brand]);
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
}

function displayPhoneDetails() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const resultDiv = document.getElementById('result');
    
    if (brand && model) {
        const phone = mobiles[brand][model];
        resultDiv.style.display = "block";
        
      
        
        resultDiv.innerHTML = `
            <div class="phone-details">
               
                <div class="phone-specs">
                    <h3>${brand} ${model}</h3>
                    <div class="spec"><strong>Processor:</strong> ${phone.processor}</div>
                    <div class="spec"><strong>RAM:</strong> ${phone.memory.ram}GB</div>
                    <div class="spec"><strong>Storage:</strong> ${phone.memory.storage}GB</div>
                    <div class="spec"><strong>Battery:</strong> ${phone.battery}mAh</div>
                    <div class="spec"><strong>Operating System:</strong> ${phone.operatingSystem}</div>
                    <div class="spec"><strong>Rear Camera:</strong> Main: ${phone.camera.rear.main}MP, Ultrawide: ${phone.camera.rear.ultrawide}MP, Telephoto: ${phone.camera.rear.telephoto}MP</div>
                    <div class="spec"><strong>Front Camera:</strong> ${phone.camera.front}MP</div>
                    <div class="spec"><strong>Special Features:</strong> ${phone.specialFeatures.join(", ")}</div>
                </div>
            </div>
        `;
    } else {
        resultDiv.innerHTML = "<p>Please select both a brand and a model.</p>";
    }
}
  