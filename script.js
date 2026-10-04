const FARE = 35; // R35 per person

document.querySelectorAll('[id^="row-"]').forEach((row) => {
  const passengers = Number(row.querySelector(".passengers").textContent);
  const input = row.querySelector(".paid");
  const changeBox = row.querySelector(".change");

  const taxiFare = passengers * FARE;

  input.addEventListener("input", () => {
    const paid = Number(input.value);

    if (!paid) {
      changeBox.textContent = "";
      return;
    }

    const change = paid - taxiFare;
    changeBox.textContent = `R${change.toFixed(2)}`;
  });
});
