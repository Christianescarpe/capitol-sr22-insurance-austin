import http from 'http';

function test(path) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + path, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        console.log(path, 'Status:', res.statusCode);
        console.log('- Has Hero 30+ years badge:', data.includes('Years Combined Texas Insurance Experience'));
        console.log('- Has What We Are Offering:', data.includes("What We're Offering") || data.includes("What We&#x27;re Offering"));
        console.log('- Has Satisfied Dark Banner:', data.includes('Get Satisfied with Our Austin SR22 Insurance Services'));
        console.log('- Has Blue Testimonials:', data.includes('What Texas Drivers Say About Our Fast Filing'));
        console.log('- Has Feature Bar:', data.includes('Texas DPS Certified'));
        console.log('- Has Gallery:', data.includes('gallery-1.webp'));
        console.log('- Has Yellow CTA:', data.includes('Get Started with Your Free Quote'));
        console.log('- Has Map in Footer:', data.includes('maps/embed?pb=!1m18!1m12!1m3!1d263824.0544036639'));
        console.log('- Has Contact Form:', data.includes('<form'));
        resolve();
      });
    });
  });
}

console.log('--- Testing Service Page ---');
await test('/non-owner-sr22-insurance-austin-tx');
console.log('\n--- Testing Location Page ---');
await test('/sr22-insurance-pasadena-tx');
