const phoneCodes = {
  Россия: "+7",
  США: "+1",
  Великобритания: "+44",
  Германия: "+49",
  // Добавьте другие страны и их коды
};

function updatePhoneCode() {
  const countrySelect = document.getElementById("country");
  const phoneCodeInput = document.getElementById("phoneCode");
  const selectedCountry =
    countrySelect.options[countrySelect.selectedIndex].value;
  phoneCodeInput.value = phoneCodes[selectedCountry] || "";
}
