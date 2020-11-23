/*
811. Subdomain Visit Count

Example:
Input:
["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]

Output:
["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
*/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

//1st method
//  time: O(n) + O(n) + O(3) = O(3n) ===> O(n) linear time.
//BEST solution
var subdomainVisits = function(cpdomains) {
  let res = [], m = new Map();

  for (let cpdomain of cpdomains) { //O(n)
    let values = cpdomain.split(' ');
    let domains = values[1];
    let count = Number(values[0]);

    while (domains) { // O(3) - constant bc each domain will have max of two '.'
      let total = count;
      if (m.has(domains)) {
        total += m.get(domains);
      }
      m.set(domains, total);
      domains = domains.indexOf('.') == -1
        ? null
        : domains.substring(domains.indexOf('.')+1, domains.length);
    }
  }
  for (let [subdomain, visits] of m) { //O(n)
    res.push(visits + ' ' + subdomain);
  }
  return res;
};

//2nd method:
//time: O(6n) worser than 1st method
var subdomainVisits = function(cpdomains) {
  let res = [], map = new Map();
  for (let el of cpdomains) { //O(n)
      let spaceIdx = el.indexOf(' ');
      let visits = Number(el.slice(0, spaceIdx)); //900
      let domain = el.slice(spaceIdx+1); //"google.mail.com"
      let subdomains = [domain]; //always put every original domain first
      //then we manipulate it's children and also add it in there
      for (let i = 0; i < domain.length; i++) { //O(3)
          if (domain[i] == '.') subdomains.push(domain.slice(i+1));
      }
      for (let subdomain of subdomains) {//O(3) bc every subdomains arr only have MAX of 3 subdomins
          if (!map.has(subdomain)) map.set(subdomain, visits);
          else map.set(subdomain, map.get(subdomain) + visits);
      }
  }
  for (let [domain, count] of map) {//O(n)
      res.push(count + ' ' + domain);
  }
  return res;
}