console.log('\n\n:::::::::DATADUMP:::::::::\n\n');
console.log(results);
results.forEach(function(item, i, array){
  // console.log(item);
  console.log(item.marketname);
});

console.log('\n\n:::::::::FUNCTIONS BELOW:::::::::\n\n');


results.forEach(function(item, i, array){
  // console.log(item);

  var splitted = item.marketname.split(' ');
  console.log(splitted);

  var spliced = splitted.splice(1);
  console.log(spliced);

  var joined = spliced.join(' ');
  console.log(joined);

  console.log(' ');

});



results.forEach(function(item, i, array){
  // console.log(item);

  var splitted = item.marketname.split(' ');
  console.log(splitted);

  if(Number(splitted[0]) <= 10 ) {
    var spliced = splitted.splice(1);
    console.log(spliced);

    var joined = spliced.join(' ');
    console.log(joined);
  }


  console.log(' ');

});

var contentArea = document.querySelector('.farmers-markets');
console.log(contentArea);

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
  console.log(name);
  contentArea.innerHTML += '<p>' + name + '</p>';
});
