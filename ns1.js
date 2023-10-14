const config = require('config')
class Ns1 {
  createDomain(domainName) {
    let status;
    fetch(`https://api.nsone.net/v1/zones/${domainName}`, {
      method: 'PUT',
      body: JSON.stringify({"zone": domainName, "networks": [5]}),
      headers: {
        'X-NSONE-Key': config.get('apiKey')
      }
    })
      .then((res) => {
        status = res.status;
        return res.json()
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        console.log(`status: ${status}`);
      })
      .catch((err) => {
        // handle error
        console.error(err);
      });
  }
}

exports.Ns1 = Ns1
