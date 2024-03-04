const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNDlWyWatG3uhUryLSVrPzcHqVNxy9PiAko030wrqBKZZpS3-2zE04e7fdA7ABKMNhf6oqioEYReQz/pub?gid=0&single=true&output=tsv';


// Function to fetch the CSV file
const fetchCSV = async () => {
 try {
   const response = await fetch(csvUrl);
   if (!response.ok) {
     throw new Error('Failed to fetch CSV');
   }
   const csvData = await response.text();
  
   // Process the CSV data here (e.g., parse it, display it, etc.)
   process(csvData);
   // Now you can work with the CSV data as needed
  
 } catch (error) {
   console.error('Error fetching CSV:', error);
 }
};

allArticles = []
function process(csvData) {
   rowsSplit = csvData.split("\n")
   first = rowsSplit[0].split("\t")
   for (y = 1; y < rowsSplit.length; y++) {
    allArticles.push(rowsSplit[y].split("\t")[1])
    document.getElementById("content").innerHTML += `<h2>${rowsSplit[y].split("\t")[0]}</h2><button onclick='loadArticle("${rowsSplit[y].split("\t")[0]}", "${y-1}")'>Read</button>`
   }
}
fetchCSV()

function loadArticle(title, index) {
    document.getElementById("artitle").innerText = title
    document.getElementById("artext").innerText = allArticles[index].replaceAll("\\n", "\n\n")
    document.getElementById("article").style.top = "50%"
}
function dismissArticle() {
    document.getElementById("article").style.top = ""
}