import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  const blogDir = path.resolve(process.cwd(), 'content/blog');
  const articles = [];

  try {
    const files = fs.readdirSync(blogDir);
    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const metadata = extractMetadata(fileContent);
        articles.push(metadata);
      }
    }
    return articles;
  } catch (error) {
    console.error('Erreur lors de la lecture des fichiers du blog:', error);
    return [];
  }
});

function extractMetadata(content) {
  const metadata = {};
  const metadataRegex = /---\n([\s\S]+?)\n---/;
  const match = content.match(metadataRegex);

  if (match) {
    const lines = match[1].split('\n');
    for (const line of lines) {
      const [key, ...rest] = line.split(':');
      metadata[key.trim()] = rest.join(':').trim();
    }
  }
  return metadata;
}
