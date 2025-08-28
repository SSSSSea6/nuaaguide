// scripts/push-to-algolia.js
const algoliasearch = require('algoliasearch');
const fs = require('fs');

const APP_ID = process.env.ALGOLIA_APP_ID;
const ADMIN_KEY = process.env.ALGOLIA_ADMIN_API_KEY;
const INDEX_NAME = process.env.ALGOLIA_INDEX_NAME || 'nuaaguide';

if (!APP_ID || !ADMIN_KEY) {
  console.error("ALGOLIA env not set. Please set ALGOLIA_APP_ID and ALGOLIA_ADMIN_API_KEY in GitHub Secrets.");
  process.exit(1);
}

const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex(INDEX_NAME);

const records = JSON.parse(fs.readFileSync('public/index.json', 'utf8'));

index.replaceAllObjects(records, { safe: true })
  .then(() => console.log('Pushed to Algolia'))
  .catch(err => { console.error(err); process.exit(1); });
