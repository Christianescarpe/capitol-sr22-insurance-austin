import http from 'http';

function checkPage(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          hasLogo: data.includes('logo.png'),
          hasMap: data.includes('maps/embed?pb=!1m18!1m12!1m3!1d263824.0544036639'),
          hasPhoneLink: data.includes('tel:+17373094205'),
          hasContactForm: data.includes('<form'),
          hasInternalAnchor: data.includes('href="/non-owner-sr22-insurance-austin-tx"'),
          hasExternalAnchor: data.includes('https://www.tdi.texas.gov/pubs/consumer/cb020.html'),
        });
      });
    });
  });
}

const result = await checkPage('http://localhost:3000/');
console.log('Homepage verification:', result);

const blogResult = await checkPage('http://localhost:3000/blog/how-long-do-you-need-sr22-in-texas');
console.log('Blog post verification:', {
  status: blogResult.status,
  hasPhoneLink: blogResult.hasPhoneLink,
  hasContactForm: blogResult.hasContactForm,
  hasMap: blogResult.hasMap,
});
