export const validation = function (data) {
  const dataCheck = Object.fromEntries(data);
  return {
    name: verificarDatos(dataCheck.name),
    phone: verificarDatos(dataCheck.phone),
    email: verificarDatos(dataCheck.email),
    message: verificarDatos(dataCheck.message),
  };

  function verificarDatos(input) {
    if (!input.trim()) {
      return false;
    } else return input;
  }
};

export const formError = function () {
  const btn = document.querySelector(".btn-message");

  btn.classList.add("shake");
  btn.disabled = true;

  setTimeout(() => {
    btn.classList.remove("shake");
    btn.disabled = false;
  }, 1000);
};
