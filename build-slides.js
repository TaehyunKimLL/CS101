#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 빌드할 폴더 설정
const folders = [
  { source: 'Common/Slides', output: 'dist/Common' },
  { source: 'C/Slides', output: 'dist/C' },
  { source: 'Python/Slides', output: 'dist/Python' }
];

console.log('📚 Building slides to PDF...\n');

folders.forEach(({ source, output }) => {
  const sourceDir = path.join(__dirname, source);
  const outputDir = path.join(__dirname, output);

  // 소스 폴더 확인
  if (!fs.existsSync(sourceDir)) {
    console.log(`⚠️  Skipping ${source} (directory not found)`);
    return;
  }

  // 출력 폴더 생성
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`✅ Created ${output}`);
  }

  // .md 파일 찾기
  const allFiles = fs.readdirSync(sourceDir)
    .filter(file => file.endsWith('.md'));

  if (allFiles.length === 0) {
    console.log(`⚠️  No markdown files found in ${source}`);
    return;
  }

  console.log(`📂 Processing ${source} (${allFiles.length} files)...`);

  allFiles.forEach(file => {
    const inputPath = path.join(sourceDir, file);
    const outputPath = path.join(outputDir, file.replace('.md', '.pdf'));

    try {
      console.log(`   Converting ${file}...`);
      execSync(
        `npx -y @marp-team/marp-cli "${inputPath}" --pdf --output "${outputPath}" --allow-local-files`,
        { stdio: 'pipe' }
      );
      console.log(`   ✓ ${file} -> ${path.basename(outputPath)}`);
    } catch (error) {
      console.error(`   ✗ Failed to convert ${file}`);
      console.error(`     ${error.message}`);
    }
  });

  console.log(`✅ Completed ${source}\n`);
});

console.log('🎉 All slides built successfully!');
