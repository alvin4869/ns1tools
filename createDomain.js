const {Ns1} = require('./ns1')

let domainName = process.argv[2];
if (domainName) {
  let ns1 = new Ns1()
  ns1.createDomain(domainName)
} else {
  console.log(domainName);
}

