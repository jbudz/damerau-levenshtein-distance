# damerau-levenshtein-distance
> Calculate the distance between two strings.

### Usage
```javascript
var distance = new DamerauLevenshteinDistance({
  //Weights default to 1
  substitution: 1,
  transposition: 1,
  insertion: 2,
  deletion: 0.3
});

distance.calculate('hello', 'hi')
```

### Build es5
```
git clone https://github.com/jbudz/damerau-levenshtein-distance.git
cd damerau-levenshtein-distance
npm install
grunt
```
