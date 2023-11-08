document.addEventListener("DOMContentLoaded", function () {
  let birthdayYear = 2023; // Tahun ulang tahun awal
  let birthday = new Date(`${birthdayYear}-11-15T00:00:00`).getTime(); // Tanggal ulang tahun (tahun-bulan-tanggalTjam:menit:detik)

  const countdownElement = document.getElementById("countdown");
  const yearElement = document.getElementById("year");

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = birthday - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining < 0) {
      countdownElement.innerHTML =
        "<button id='refresh-buttonn' >Happy Birthday!!!</button>";
    }
  };

  const updateYear = () => {
    birthdayYear++;
    birthday = new Date(`${birthdayYear}-11-15T00:00:00`).getTime();
    yearElement.textContent = birthdayYear;
    updateCountdown();
  };

  // Tambahkan event listener untuk tombol "Refresh"
  const refreshButton = document.getElementById("refresh-button");
  refreshButton.addEventListener("click", updateYear);

  // Update countdown every second
  setInterval(updateCountdown, 1000);
});
