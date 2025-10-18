// Code dupliqué
function calculateTotal1(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

function calculateTotal2(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

// Complexité cyclomatique élevée
function processData(data) {
  if (data.type === 'A') {
    if (data.status === 'active') {
      if (data.value > 100) {
        if (data.user.role === 'admin') {
          return 'case1';
        }
      }
    }
  }
  // ... 20+ niveaux de if imbriqués
}

// Variables non utilisées
const unused1 = 'test';
const unused2 = 42;