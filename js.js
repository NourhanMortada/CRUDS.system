
let title =document.getElementById("title");
let price =document.getElementById("price");
let taxes =document.getElementById("tax");
let ads =document.getElementById("ads");
let discount=document.getElementById("discount");
let total =document.getElementById("total");
let count =document.getElementById("count");
let category =document.getElementById("category");
let submit=document.getElementById("submit");

let mood = "create";
let tmp;






if(localStorage.getItem('product') == null){
    var dataProd = [];
  
  }else
  {
    var dataProd = JSON.parse( localStorage.getItem('product') );
   
    display();
  
  }


 //let dataProd;
 //if(localStorage.product == null){
   // dataProd=JSON.parse(localStorage.product);
 //}
 //else{
   //  dataProd=[];
 //}


    
   





//submit.onclick = 
function addProduct(){
  //object
    let newProduct = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,

       

    }

    if(mood === "create"){

    if(newProduct.count > 0){
        for(let i=0; i<newProduct.count; i++){
        dataProd.push(newProduct);
        }
    }else{
        dataProd.push(newProduct);
    }
}else{
    dataProd[ tmp ]= newProduct;
    mood ="create";
    submit.innerHTML="create";
    count.style.display='block';
}
    



    let x= JSON.stringify(dataProd);


    localStorage.getItem('prouduct', x);

    console.log(newProduct);

    console.log(dataProd);

    
    display();
    clearData();
   
}




function getTotal(){
    if(price.value != ''){
        let totals = (+price.value + +taxes.value + +ads.value)
        - +discount.value;
        total.innerHTML=totals;
        
    }
}

function clearData(){
    title.value="";
    price.value="";
    taxes.value="";
    ads.value="";
    total.innerHtml="";
    count.value="";
    category.value="";
}
 
function display()
{
getTotal();
    let table ="";
    for(let i=0; i<dataProd.length; i++){
    table +=`
    <tr>
    <td>${[i]}</td>
    <td>${dataProd[i].title}</td>
    <td>${dataProd[i].price}</td>
    <td>${dataProd[i].taxes}</td>
    <td>${dataProd[i].ads}</td>
    <td>${dataProd[i].total}</td>
    <td>${dataProd[i].count}</td>
    <td>${dataProd[i].category}</td>
    
    <td><button onclick="update(${i});"  id="update">update</button></td>
    <td><button onclick="Delete(${i});"id="delete">delete</button></td>
</tr>`
}
tbody.innerHTML=table;
}

display()

function Delete(index){

    dataProd.splice(index,1);
    localStorage.setItem("product" , JSON.stringify(dataProd));
    display();

}

function update(i){
    title.value = dataProd[i].title;
    price.value = dataProd[i].price;
    taxes.value = dataProd[i].taxes;
    ads.value = dataProd[i].ads;
    discount.value=dataProd[i].discount;
    getTotal()
    count.style.display = 'none';
    category.value = dataProd[i].category;
    submit.innerHTML = 'update';

    mood ="update";
    tmp=i;
    scroll({
        top:0,
        behavior:'smooth',
    })
}

//let searchMood = "title";
function getSearchMood(id)
{
    let search=document.getElementById('search');
   if (id == 'searchtitle'){
   searchMood='title';
   search.placeholder='search by title'



} else {
    searchMood='category';
    search.placeholder='search by category'
}
search.focus()
}



function searchData(value){

    let table= '';
        
    if(searchMood == 'title'){

        for(let i=0; i<dataProd.length; i++){
            if(dataProd[i].title.includes(value)){
                table +=`
                <tr>
                <td>${[i]}</td>
                <td>${dataProd[i].title}</td>
                <td>${dataProd[i].price}</td>
                <td>${dataProd[i].taxes}</td>
                <td>${dataProd[i].ads}</td>
                <td>${dataProd[i].total}</td>
                <td>${dataProd[i].count}</td>
                <td>${dataProd[i].category}</td>
                
                <td><button onclick="update(${i});"  id="update">update</button></td>
                <td><button onclick="Delete(${i});"id="delete">delete</button></td>
            </tr>`
                
            }
        }

    }else
    {
        for(let i=0; i<dataProd.length; i++){
            if(dataProd[i].category.includes(value)){
                table +=`
                <tr>
                <td>${[i]}</td>
                <td>${dataProd[i].title}</td>
                <td>${dataProd[i].price}</td>
                <td>${dataProd[i].taxes}</td>
                <td>${dataProd[i].ads}</td>
                <td>${dataProd[i].total}</td>
                <td>${dataProd[i].count}</td>
                <td>${dataProd[i].category}</td>
                
                <td><button onclick="update(${i});"  id="update">update</button></td>
                <td><button onclick="Delete(${i});"id="delete">delete</button></td>
            </tr>`
            }

    }
   
}
tbody.innerHTML=table;
}

    

   
            

    







 









