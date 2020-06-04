const houseData = [
  {
    name: "Manors",
    model: "Louisa",
    lot: "96 sqm.",
    floor: "62 sqm.",
    bed: "3",
    shower: "2",
    photo: "../images/manors1.jpg",
    type: "House & Lot",
    dateConstructed: "2021"
  },
  {
    name: "Manors",
    model: "Cecilia",
    lot: "96 sqm.",
    floor: "62 sqm.",
    bed: "3",
    shower: "2",
    photo: "..images/manors1.jpg",
    type: "House & Lot",
    dateConstructed: "2015"
  },
  {
    name: "Acropolis",
    model: "Sofia",
    lot: "125 sqm.",
    floor: "110 sqm.",
    bed: "4",
    shower: "2",
    photo: "https://github.com/nsacristan77/marajcrealty-website-project/blob/master/images/accropolis2.jpeg",
    type: "House & Lot",
    dateConstructed: "2015"
  },
  {
    name: "Acropolis",
    model: "Samantha",
    lot: "125 sqm.",
    floor: "110 sqm.",
    bed: "4",
    shower: "2",
    photo: "images/acropolis.jpg",
    type: "House & Lot",
    dateConstructed: "2020"
  }
];


function age(dateConstructed) {
  let calculatedAge = new Date().getFullYear() - dateConstructed;
  if (calculatedAge == 2) {
    return 'New'
  } else if (calculatedAge == 0) {
    return 'Pre-selling'
  } else {
    return `New`
  }
}


function houseTemplate(house) {
  return `
  <div class="col-4">
  <div class="house-data">
    <img class="house-photo" src"${house.photo}">
    <h2>${house.name}<span class="type">(${house.type})</span></h2>
    <p><strong>Condition:</strong>${age(house.dateConstructed)}</p>
  </div>
  </div>
  `
}

document.getElementById("house").innerHTML = `
<div class="house-title">
<h1>${houseData.length} New Properties</h1>
</div>
${houseData.map(houseTemplate).join('')}
<div class="footer-house">
These ${houseData.length} house were added recently. Check back soon for updates.
</div>
`
