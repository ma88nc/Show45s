function myFunction() {
    var table = document.getElementById("myTable");

    records = records.sort((a, b) => {
      console.log(`comparing ${a.releaseDate} and ${b.releaseDate}`)

    if (a.releaseDate < b.releaseDate) {
        return -1;
    }
    if (a.releaseDate > b.releaseDate) {
        return 1;
    }
    return 0;
      //return a.releaseDate - b.releaseDate;
    });

    records.forEach(iterate)

    function iterate(item, index, array) {
         console.log(item.artist + ' ' + item.title + ' at index='+index);
         if (index > 0) {
         //  console.log('   previous is: '+ array[index-1].artist)
         }
         console.log()
         if ((index+1) % 4 == 0 || (index+1) == array.length) {
            // insert row          
            var row = table.insertRow(table.length);
            var cellDesc1 = row.insertCell(0);
            var cellImg1 = row.insertCell(1);
            var cellImg2 = row.insertCell(2);
            var cellImg3 = row.insertCell(3);
            var cellImg4 = row.insertCell(4);         
            var cellDesc2 = row.insertCell(5);

            cellImg1.innerHTML = "<img src=" + array[index-3].coverArt + " width=150px height=150px>";
            cellImg2.innerHTML = "<img src=" + array[index-2].coverArt + " width=150px height=150px>"; 
            cellImg3.innerHTML = "<img src=" + array[index-1].coverArt + " width=150px height=150px>"; 
            cellImg4.innerHTML = "<img src=" + array[index].coverArt + " width=150px height=150px>";  

            cellDesc1.innerHTML = array[index-3].artist + ': '+ array[index-3].title + '<br>(' + array[index-3].releaseDate + ')';
            cellDesc1.innerHTML += '<br><br>' + array[index-2].artist + ': '+ array[index-2].title + '<br>(' + array[index-2].releaseDate + ')';
           
            cellDesc2.innerHTML = array[index-1].artist + ': '+ array[index-1].title + '<br>(' + array[index-1].releaseDate + ')';
            cellDesc2.innerHTML += '<br><br>' + array[index].artist + ': '+ array[index].title + '<br>(' + array[index].releaseDate + ')';
         }
    }
  }