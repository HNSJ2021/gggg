document.addEventListener("DOMContentLoaded", function() {
    const selectedDateInput = document.getElementById("selectedDate");
    const slAdultInput = document.getElementById("slAdult");
    const slChildInput = document.getElementById("slChild");
    const foreignAdultInput = document.getElementById("Foreign Adult");
    const foreignChildInput = document.getElementById("Foreign Child");
    const InfantInput = document.getElementById("Infant");
    const durationSelect = document.getElementById("duration");
    const summaryDiv = document.getElementById("summary");
    const purchaseButton = document.getElementById("purchaseButton");
  
    const timeSlots = [
      "07.00 am - 08.00 am",
      "08.00 am - 09.00 am",
      "09.00 am - 10.00 am",
      "10.00 am - 11.00 am",
      "11.00 am - 12.00 pm",
      "12.00 pm - 01.00 pm",
      "01.00 pm - 02.00 pm",
      "02.00 pm - 03.00 pm",
      "03.00 pm - 04.00 pm",
      "04.00 pm - 05.00 pm",
    
      
    ];
    timeSlots.forEach(slot => {
      const option = document.createElement("option");
      option.value = slot;
      option.textContent = slot;
      durationSelect.appendChild(option);
    });
  
    const charges = {
      "SL Adult": { normal: 4, peak: 6 },
      "slChild": { normal: 2, peak: 3 },
      "Foreign Adult": { normal: 10, peak: 13 },
      "Foreign Child": { normal: 5, peak: 8 },
      "Infant": { normal: 0, peak: 0 },
      
    };
  
    function updateSummary() {
      const selectedDate = selectedDateInput.value;
      const selectedTime = durationSelect.value;
      const slAdultCount = parseInt(slAdultInput.value);
      const slChildCount = parseInt(slChildInput.value);
      const foreignAdultCount = parseInt(foreignAdultInput.value);
      const foreignChildCount = parseInt(foreignChildInput.value);
      const InfantCount = parseInt(InfantInput.value);
  
      const selectedTimeType = selectedTime.includes("Peak") ? "peak" : "normal";
      const totalCharges = slAdultCount * charges["SL Adult"][selectedTimeType];
      const totalCcharges = slChildCount * charges["slChild"][selectedTimeType];
      const totalCccharges = foreignAdultCount * charges["Foreign Adult"][selectedTimeType];
      const total = foreignChildCount * charges["Foreign Child"][selectedTimeType];
      const totalCcccharges =InfantCount * charges["Infant"][selectedTimeType];
    
  
      const totalPayable = totalCharges + totalCcharges + totalCccharges +  total+ totalCcccharges;
      
      summaryDiv.innerHTML = `
        <table>
          <tr><td>Date</td><td>${selectedDate}</td></tr>
          <tr><td>Time</td><td>${selectedTime}</td></tr>
          <tr>
          <th>Duration</th>
          <td id="selectedDuration">1 hr ( 01 Normal : 00 Peak)</td>
      </tr>
          <tr><td>Tickets</td><td>Charges</td></tr>
          <tr><td>${slAdultCount} SL Adult</td><td>$${totalCharges}</td></tr>
          <tr><td>${slChildCount} slChild</td><td>$${totalCcharges}</td></tr>
          <tr><td>${foreignAdultCount} Foreign Adult</td><td>$${totalCccharges}</td></tr>
          <tr><td>${foreignChildCount} Foreign Child</td><td>$${total}</td></tr>
          <tr><td>${InfantCount} Infant</td><td>$${totalCcccharges}</td></tr>
          <!-- Add rows for other ticket categories -->
          <tr><td>Total Payable</td><td>$${totalPayable}</td></tr>
        </table>
      `;
      localStorage.setItem("scdate",selectedDate);
      localStorage.setItem("sctime",selectedTime);
      localStorage.setItem("scsla",totalCharges);
      localStorage.setItem("scslc",totalCcharges);
      localStorage.setItem("scfa",totalCccharges);
      localStorage.setItem("scfc",total);
      localStorage.setItem("sci",totalCcccharges);
      localStorage.setItem("sctp",totalPayable);

      
    }
   
   
    function validateInputs() {
      const isInputsValid = true; 
      purchaseButton.disabled = !isInputsValid;
    }
  
    selectedDateInput.addEventListener("change", () => {
      updateSummary();
      validateInputs();
      updatelost();
    });
  

    slAdultInput.addEventListener("input", () => {
      updateSummary();
      validateInputs();
    });
  
    slChildInput.addEventListener("input", () => {
      updateSummary();
      validateInputs();
    });
  
    foreignAdultInput.addEventListener("input", () => {
      updateSummary();
      validateInputs();
    });
  
    foreignChildInput.addEventListener("input", () => {
      updateSummary();
      validateInputs();
    });

    InfantInput.addEventListener("input", () => {
        updateSummary();
        validateInputs();
      });
  
    durationSelect.addEventListener("change", () => {
      updateSummary();
    });
  
    
    updateSummary();
  });
  





//peak hours//



  document.addEventListener("DOMContentLoaded", function () {
  
    const durationSelect = document.getElementById("duration");
   
    const timeSlots = [
      "07.00 am - 08.00 am",
      "08.00 am - 09.00 am",
      "09.00 am - 10.00 am",
      "10.00 am - 11.00 am (Peak)",
      "11.00 am - 12.00 pm (Peak)",
      "12.00 pm - 01.00 pm (Peak)",
      "01.00 pm - 02.00 pm",
      "02.00 pm - 03.00 pm (Peak)",
      "03.00 pm - 04.00 pm (Peak)",
      "05.00 pm - 06.00 pm (Peak)",
     
    ];
  
    timeSlots.forEach((slot) => {
      const option = document.createElement("option");
      option.value = slot;
      option.textContent = slot;
      durationSelect.appendChild(option);
    });
  
    const charges = {
      "SL Adult": { normal: 4, peak: 6 },
      "slChild": { normal: 2, peak: 3 },
      "Foreign Adult": { normal: 10, peak: 13 },
      "Foreign Child": { normal: 5, peak: 8 },
      "Infant": { normal: 0, peak: 0 },
    
    };
  
    function updateSummary() {
      
    }
  
    function validateInputs() {
  
    }
  
    selectedDateInput.addEventListener("change", () => {
      updateSummary();
      validateInputs();
    });
  
    slAdultInput.addEventListener("input", () => {
      updateSummary();
      validateInputs();
    });
  
    slChildInput.addEventListener("input", () => {
      updateSummary();
      validateInputs();
    });
  
    
  
    durationSelect.addEventListener("change", () => {
      updateSummary();
    });
  
    updateSummary();
  });
  




