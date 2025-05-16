// Change this test string if you want to check the functionality
const testString = `
  user@example.com, firstname.lastname@company.co.uk
  Visit https://www.example.com or https://subdomain.example.org/page
  Call us at (123) 456-7890, 123-456-7890, or 123.456.7890
  Credit cards: 1234 5678 9012 3456, 1234-5678-9012-3456
  Time examples: 14:30, 2:30 PM
  HTML: <p><div class="example"><img src="image.jpg" alt="description">
  Tags: #example #ThisIsAHashtag
  Prices: $19.99, $1,234.56
`;


const emailPattern = /\S+@\S+\.\S+/g;
const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/gi;
const phonePattern = /(?:\(\d{3}\)|\d{3})[ .-]?\d{3}[ .-]?\d{4}/g;
const cardPattern = /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g;
const timePattern = /\b\d{1,2}:\d{2}(\s?[AP]M)?\b/gi
const htmlPattern = /<[^>]+>/g;
const hashtagPattern = /#[A-Za-z0-9_]+/g;
const currencyPattern = /\$\d+(\.\d{2})?/g;


const patterns = [
  ["Emails", emailPattern],
  ["URLs", urlPattern],
  ["Phone Numbers", phonePattern],
  ["Credit Cards", cardPattern],
  ["Times", timePattern],
  ["HTML Tags", htmlPattern],
  ["Hashtags", hashtagPattern],
  ["Prices", currencyPattern]
];


for (let i = 0; i < patterns.length; i++) {
  const label = patterns[i][0];
  const pattern = patterns[i][1];
  const matches = testString.match(pattern) || [];
  console.log("\n" + label );
  console.log(matches.join("\n"));
}
