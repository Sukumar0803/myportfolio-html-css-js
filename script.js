function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function viewCertificate(certificatePath) {
  // Open the certificate image in a new tab
  window.open(certificatePath, '_blank');
}

function download(Path, fileName) {
  // Create an anchor element for download
  const downloadLink = document.createElement('a');
  downloadLink.href = Path;
  downloadLink.download = fileName;

  // Append the link to the body and simulate a click to trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Remove the link from the body
  document.body.removeChild(downloadLink);
}
