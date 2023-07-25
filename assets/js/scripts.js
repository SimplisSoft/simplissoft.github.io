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
  