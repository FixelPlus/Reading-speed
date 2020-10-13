document.addEventListener('DOMContentLoaded', () => {

let book = [
    {
    name: 'page1',
    img: 'img/page1.png'
    },
    {
    name: 'page2',
    img: 'img/page2.png'
    },
    {
    name: 'page3',
    img: 'img/page3.png'
    }
] 

let main_page = document.querySelector('.main_page');// with this variable I have conttrol of
                                                    // div with class .main_page


//main_page.appendChild(finish);
//document.body.insertBefore(finish,picture);
//document.body.appendChild(finish);
let mainImg = document.getElementById('myImage') // similar to HTML tag <img>. this var-ble creates <img> tag in HTML Document
mainImg.setAttribute('src', book[0].img) // making attribute to <img> tag through JavaScript    
//main_page.appendChild(mainImg);// appending <img> tag to the div with class main_page

let next = document.getElementById('next');
let start = document.getElementById('start');
let finish = document.getElementById('finish');
let paragraph = document.getElementById("pageCount");// taking <p> tag to control
//let pages = document.getElementById('pages');
let count = 0;
let pageCount = 1; // need it to keep track of pages' numbers
paragraph.innerHTML = "Page: " + pageCount;// before we click anything we see this is the first page
  // event to turn the page back to the first one
start.addEventListener('click', () => {
pageCount = 1;
count = 0;
paragraph.innerHTML = "Page: " + pageCount;
//if (pageCount == book.length) paragraph.innerHTML = "Page: " + 1;
if(mainImg.getAttribute('src') != book[count]){
    mainImg.src = book[count].img
}})

// event of what will happen if click to the "next" button
next.addEventListener('click', () => {
    if((count+1) < book.length ){
        turnPage(count);
        count++;
    }
    if (pageCount < book.length) paragraph.innerHTML = "Page: " + ++pageCount; // if no more pages it stops counting
})

    finish.addEventListener('click', () => {
        if((count+1) < book.length ){
            turnPage(count);
            count++;
        }})

// this function changes the image  
const turnPage = (count) =>{
    if (mainImg.getAttribute("src") == book[count].img) {
            mainImg.src = book[count + 1].img
    }
    }

// populating the pre tag
document.getElementById('filechoice').addEventListener('change',function () {
    var fr = new FileReader();
    fr.onload = function () {
        document.getElementById('contents').textContent = this.result;
    };
    fr.readAsText(this.files[0], 'ISO-8859-4');
    }
);

let userArray = window.prompt("Enter your name: ");
let testArray = [5,2,7,3,9,4,1];
let i;
let key;
function insertionSort(arr){
  for(let j = 1; j< arr.length; j++){
    key = arr[j];
    i = j-1;
    while (i>=0 && arr[i] > key){
        arr[i+1] = arr[i];
        i = i-1;
        arr[i+1] = key;
    }
  }
  return arr;
}
let unsorted = document.getElementById("unsorted");
unsorted.innerHTML = "Unsorted array: [" + testArray + "]";

let sorted = insertionSort(testArray);
document.getElementById("sortDiv").innerHTML = "Sorted array: [" + sorted + "]";
})

