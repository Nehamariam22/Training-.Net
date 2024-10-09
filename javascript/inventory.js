class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    //  update quantity
    updateQuantity(amount) {
        this.quantity += amount;
    }

    
    displayProduct() {
        return `${this.name} - $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}


let inventory = [];


function displayInventory() {
    const inventoryTable = document.getElementById('inventory-table');
    const inventoryTableBody = inventoryTable.querySelector('tbody');
    inventoryTableBody.innerHTML = ''; 

    
    inventory.forEach(product => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const quantityCell = document.createElement('td');

        nameCell.textContent = product.name;
        priceCell.textContent = `$${product.price.toFixed(2)}`;
        quantityCell.textContent = product.quantity;

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(quantityCell);

        inventoryTableBody.appendChild(row);
    });

   
    if (inventory.length > 0) {
        inventoryTable.style.display = 'table';
    }
}

function addProduct() {
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

   
        const existingProduct = inventory.find(p => p.name.toLowerCase() === name.toLowerCase());
        if (existingProduct) {
            // If the product exists, update the quantity
            existingProduct.updateQuantity(quantity);
        } else {
            // If the product is new, add it to the inventory
            const newProduct = new Product(name, price, quantity);
            inventory.push(newProduct);
        }


        displayInventory();

        // Clear the input fields
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
    } 

   