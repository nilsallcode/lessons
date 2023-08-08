let shoppingLists = [
    ['apples', 'meat', 'drinks'],
    ['cables', 'screens', 'keyboards']
];

for (let i = 0; i < shoppingLists.length; i++) {
    console.log('List ' + (i + 1));
    for (let y = 0; y < shoppingLists[i].length; y++) {
        console.log('- ' + shoppingLists[i][y]);
    }
}