const fuelEfficiency = {
    car: 0.12, 
    motorcycle: 0.08,
    bus: 0.2
  };
  
  document.getElementById('emissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const vehicleType = document.getElementById('vehicleType').value;
    const distance = parseFloat(document.getElementById('distance').value);
  
    const fuelConsumption = distance * fuelEfficiency[vehicleType];
    const emissionAmount = fuelConsumption * 2.3; // 1 ลิตรของเบนซินทำให้ปล่อยประมาณ 2.3 กิโลกรัม/ CO2

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Estimated Emission: ${emissionAmount.toFixed(2)} kg CO2</p>`;
  });
  