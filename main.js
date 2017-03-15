// console.log('\n\n:::::::::DATADUMP:::::::::\n\n');
// console.log('\n\n:::::::::FUNCTIONS BELOW:::::::::\n\n');
var contentArea = document.querySelector('.market-list');
// console.log(contentArea);

var filtered = results.filter(function(item, i, array){
  return ( item.marketname.split(' ')[0] <= 10 );
});

filtered.forEach(function(item, i, array){
  // var name = item.marketname;
  // name = name.split(' '); // split full name into array, separated by spaces
  // name = name.splice(1); // drop off the first item in the array (the first word)
  // name = name.join(' '); // recombines the array into a single string again

  // split full name into array, separated by spaces
  // drop off the first item in the array (the first word)
  // recombines the array into a single string again
  var name = item.marketname.split(' ').splice(1).join(' ');
  // console.log(name);
  contentArea.innerHTML += '<li>' + name + '</li>';
});


// cat gifs
var catContentArea = document.querySelector('.cat-gifs');

cat_results.data.forEach(function(item, i, array){
  catContentArea.innerHTML += '<img src="' + item.images.original.url + '">';
});
