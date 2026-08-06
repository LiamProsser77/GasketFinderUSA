const companies = [

{
name: "Example Gasket Company",

state: "Wisconsin",

products: "Industrial gaskets, seals, packing",

website: "https://example.com"

},


{
name: "Sample Seal Manufacturer",

state: "Texas",

products: "Rubber gaskets, custom seals",

website: "https://example.com"

}

];



const companyContainer =
document.getElementById("companies");


const searchBox =
document.getElementById("searchBox");



function displayCompanies(list){


companyContainer.innerHTML = "";


list.forEach(company => {


companyContainer.innerHTML += `

<div class="card">

<h2>${company.name}</h2>

<p>
<strong>Location:</strong>
${company.state}
</p>


<p>
<strong>Products:</strong>
${company.products}
</p>


<a href="${company.website}" target="_blank">
Visit Website
</a>


</div>

`;

});


}



searchBox.addEventListener(
"input",
function(){


let search =
searchBox.value.toLowerCase();


let filtered =
companies.filter(company =>


company.name.toLowerCase().includes(search) ||

company.state.toLowerCase().includes(search) ||

company.products.toLowerCase().includes(search)


);


displayCompanies(filtered);


});



displayCompanies(companies);
