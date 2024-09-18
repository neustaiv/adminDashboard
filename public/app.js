
// Fonction pour récupérer les produits depuis l'API
function fetchProducts() {
    axios.get('/api/products')
      .then(response => {
        const products = response.data; // Les produits sont récupérés depuis l'API
        displayProducts(products); // Appelle une fonction pour afficher les produits
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits :', error);
      });
  };

  // Fonction pour afficher les produits dans l'interface utilisateur
function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Vider le container avant d'ajouter les produits
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'bg-white p-4 rounded-lg shadow-md mb-4';
  
      productCard.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
        <p class="text-gray-700">Prix : ${product.price} €</p>
      `;
  
      productsContainer.appendChild(productCard);
    });
  }
  
  // Appeler la fonction pour récupérer les produits au chargement de la page
document.addEventListener('DOMContentLoaded', fetchProducts);

// Assurer que le DOM est chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    // Gérer la soumission du formulaire
    document.getElementById('product-form').addEventListener('submit', function(event) {
        console.log(event)
      event.preventDefault(); // Empêche le rechargement de la page
  
      // Récupérer les valeurs du formulaire
      const name = document.getElementById('product-name').value;
      const price = document.getElementById('product-price').value;
  
      // Envoyer les données à l'API pour ajouter un nouveau produit
      axios.post('/api/products', { name, price })
        .then(response => {
          console.log('Produit ajouté', response.data);
          fetchProducts(); // Actualiser la liste des produits après l'ajout
        })
        .catch(error => {
          console.error('Erreur lors de l\'ajout du produit :', error);
        });
    });
  
    // Charger la liste des produits au démarrage
    fetchProducts();
  });
  
  