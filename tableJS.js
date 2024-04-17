
var products = [
  {
    category: "Indoor Plant",
    name: "Monstera",
    priceGross: 48.0,
    priceNet: 30.02,
    vat: 2.9,
    stockSEPSE: "A/22",
    availableStock: "10 pcs",
    sold: "10 pcs",
    expireDate: "10-09-2019",
  },
  {
    category: "Outdoor Plant",
    name: "Rose",
    priceGross: 35.0,
    priceNet: 25.5,
    vat: 2.0,
    stockSEPSE: "B/10",
    availableStock: "15 pcs",
    sold: "5 pcs",
    expireDate: "15-10-2020",
  },
  {
    category: "Herb",
    name: "Basil",
    priceGross: 12.5,
    priceNet: 8.75,
    vat: 0.75,
    stockSEPSE: "C/5",
    availableStock: "20 pcs",
    sold: "10 pcs",
    expireDate: "05-06-2022",
  },
];

function addRowsToTable() {
  var tableBody = document.getElementById("product-table-body");

  products.forEach(function (product, index) {
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.category}</td>
      <td>${product.name}</td>
      <td>${product.priceGross}</td>
      <td>${product.priceNet}</td>
      <td>${product.vat}</td>
      <td>${product.stockSEPSE}</td>
      <td>${product.availableStock}</td>
      <td>${product.sold}</td>
      <td>${product.expireDate}</td>
      <td><i class="fa-solid fa-pen-to-square fa-xl update btn"  style="color: #74C0FC;"></i> <i class="fa-solid fa-trash fa-xl delete-icon" style="color: #fe4078; cursor: pointer;"></i></td>
    `;
    tableBody.appendChild(row);

    // Add event listener to delete icon
    var deleteIcon = row.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", function () {
      deleteProduct(index);
    });

    var updateproduct = row.querySelector(".update");
    updateproduct.addEventListener("click", function () {
      update(index);
    });
  });
}

function deleteProduct(index) {
  products.splice(index, 1);
  renderTable();
}

function update(index) {
  var product = products[index];

  document.getElementById("f1").value = product.category;
  document.getElementById("f2").value = product.name;
  document.getElementById("f3").value = product.priceGross;
  document.getElementById("f4").value = product.priceNet;
  document.getElementById("f5").value = product.vat;
  document.getElementById("f6").value = product.stockSEPSE;
  document.getElementById("f7").value = product.availableStock;
  document.getElementById("f8").value = product.sold;
  document.getElementById("f9").value = product.expireDate;

  document.querySelector(".popup-container").style.display = "flex";
}

function renderTable() {
  var tableBody = document.getElementById("product-table-body");
  tableBody.innerHTML = "";
  addRowsToTable();
}

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".popup-container").style.display = "none";
  
});

document.querySelector(".close-popup-btn").addEventListener("click", function () {
  document.querySelector(".popup-container").style.display = "none";
  
});

document.querySelector(".close-btn-add").addEventListener("click", function () {
  document.querySelector(".popup-containeradd").style.display = "none";
  
});

document.querySelector(".close-popup-btn-add").addEventListener("click", function () {
  document.querySelector(".popup-containeradd").style.display = "none";
  
});



document.getElementById("updateclick").addEventListener("click", function () {
  var index = parseInt(document.getElementById("update").value);
  var category = document.getElementById("f1").value;
  var name = document.getElementById("f2").value;
  var priceGross = document.getElementById("f3").value;
  var priceNet = document.getElementById("f4").value;
  var vat = document.getElementById("f5").value;
  var stockSEPSE = document.getElementById("f6").value;
  var availableStock = document.getElementById("f7").value;
  var sold = document.getElementById("f8").value;
  var expireDate = document.getElementById("f9").value;

  products[index] = {
    category: category,
    name: name,
    priceGross: priceGross,
    priceNet: priceNet,
    vat: vat,
    stockSEPSE: stockSEPSE,
    availableStock: availableStock,
    sold: sold,
    expireDate: expireDate
  };

  renderTable();
  document.querySelector(".popup-container").style.display = "none";
});

document.getElementById("addpro").addEventListener("click", function () {
  document.querySelector(".popup-containeradd").style.display = "flex";
});

document.getElementById("addprobutton").addEventListener("click", function () {
  var category = document.getElementById("add-f1").value;
  var name = document.getElementById("add-f2").value;
  var priceGross = document.getElementById("add-f3").value;
  var priceNet = document.getElementById("add-f4").value;
  var vat = document.getElementById("add-f5").value;
  var stockSEPSE = document.getElementById("add-f6").value;
  var availableStock = document.getElementById("add-f7").value;
  var sold = document.getElementById("add-f8").value;
  var expireDate = document.getElementById("add-f9").value;

  var newProduct = {
    category: category,
    name: name,
    priceGross: priceGross,
    priceNet: priceNet,
    vat: vat,
    stockSEPSE: stockSEPSE,
    availableStock: availableStock,
    sold: sold,
    expireDate: expireDate
  };

  products.push(newProduct);
  renderTable();
  document.querySelector(".popup-containeradd").style.display = "none";
});

addRowsToTable();
