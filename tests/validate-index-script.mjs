import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const match = html.match(/<script>([\s\S]*)<\/script>/);

if (!match) {
  console.error('No inline script found in index.html');
  process.exit(1);
}

try {
  new vm.Script(match[1], { filename: 'index-inline-script.js' });
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

const requiredMarkers = [
  'id="advance-next-label"',
  'id="advance-next-title"',
  'function updateAdvanceIndicator()',
  'https://www.youtube.com/iframe_api',
  'function ensureYouTubeApi(',
  'function handlePlayerStateChange('
];

for (const marker of requiredMarkers) {
  if (!html.includes(marker)) {
    console.error(`Missing expected marker: ${marker}`);
    process.exit(1);
  }
}

console.log('index.html inline script parses successfully');
