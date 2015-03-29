class DamerauLevenshteinDistance {
  constructor(config) {
    this.weights = {
      transposition: 1,
      insertion: 1,
      deletion: 1,
      substitution: 1
    }

    if(config) {
      Object.keys(config).forEach((key) => {
        if(typeof config[key] === 'number' && this.weights.hasOwnProperty(key)) {
          this.weights[key] = config[key]
        }
      })
    }
  }

  calculate(s1, s2) {
    if(!(typeof s1 === 'string' && typeof s2 === 'string')) {
      throw new Error('expected string');
    }

    if(!s1) {
      return s2.length;
    }
    if(!s2) {
      return s1.length;
    }

    var distance = [], i, j;

    for(i = 0; i <= s1.length; i++) {
      distance[i] = [i];
    }
    for(j = 0; j <= s2.length; j++) {
      distance[0][j] = j;
    }

    for(i = 1; i <= s1.length; i++) {
      for(j = 1; j <= s2.length; j++) {
        distance[i][j] = Math.min(
          distance[i - 1][j - 1] +(s1[i - 1] === s2[j - 1] ? 0 : this.weights.substitution),
          distance[i][j - 1] + this.weights.insertion,
          distance[i - 1][j] + this.weights.deletion);
        if(i > 1 && j > 1 && s1[i - 1] === s2[j - 2] && s1[i - 2] === s2[j - 1]) {
            distance[i][j] = Math.min(distance[i][j], distance[i - 2][j - 2] + this.weights.transposition);
        }
      }
    }

    return distance[s1.length][s2.length];
  }
}

export default DamerauLevenshteinDistance;