function mostrarModal(url) {
    var modal = document.getElementById('modal');
    var iframeModal = document.getElementById('iframeModal');
    iframeModal.src = url;
    modal.style.display = 'block';
  }

  function cerrarModal() {
    var modal = document.getElementById('modal');
    var iframeModal = document.getElementById('iframeModal');
    iframeModal.src = '';
    modal.style.display = 'none';
  }


  // Obtener la fecha actual
  const currentDate = new Date();

  // Obtener día, mes y año
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  // Mostrar la fecha completa en el pie de página
  document.getElementById("currentDate").textContent = `${day} de ${month} de ${year}`;

