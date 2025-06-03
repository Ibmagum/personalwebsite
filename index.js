// Toggle bio visibility on button click
function toggleBio() {
  const bio = document.getElementById('bio');
  bio.style.display = (bio.style.display === 'none' || bio.style.display === '') ? 'block' : 'none';
}
