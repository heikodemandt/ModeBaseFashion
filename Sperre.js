const correctCode = "6767";
    const input = document.getElementById("codeInput");
    const message = document.getElementById("message");
    const button = document.getElementById("checkButton");

    function checkCode() {
      if (input.value === correctCode) {
        message.textContent = "✅ Code korrekt! Weiterleitung...";
        message.style.color = "green";
        // Beispiel: Weiterleitung
        window.location.href = "ModeBase.html";
      } else {
        message.textContent = "❌ Falscher Code!";
        message.style.color = "red";
      }
    }

    button.addEventListener("click", checkCode);
    input.addEventListener("keypress", e => {
      if (e.key === "Enter") checkCode();
    });