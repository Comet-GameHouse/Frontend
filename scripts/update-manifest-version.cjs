const fs = require('fs');
const path = require('path');

function updateManifestVersion() {
  try {
    // Paths to files
    const rootDir = process.cwd();
    const packageJsonPath = path.join(rootDir, 'package.json');
    const manifestPath = path.join(rootDir, 'platforms/extension/manifest.json');
    
    // Read package.json
    if (!fs.existsSync(packageJsonPath)) {
      console.error('❌ package.json not found');
      process.exit(1);
    }
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const packageVersion = packageJson.version;
    
    if (!packageVersion) {
      console.error('❌ No version found in package.json');
      process.exit(1);
    }
    
    console.log(`📦 Package version: ${packageVersion}`);
    
    // Read and update manifest.json
    if (!fs.existsSync(manifestPath)) {
      console.error('❌ manifest.json not found at platforms/extension/manifest.json');
      process.exit(1);
    }
    
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    const oldVersion = manifest.version;
    
    // Update manifest version
    manifest.version = packageVersion;
    
    // Write updated manifest back
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    
    console.log(`✅ Updated manifest.json version from ${oldVersion} to ${packageVersion}`);
    console.log(`📁 Updated file: ${manifestPath}`);
    
  } catch (error) {
    console.error('❌ Error updating manifest version:', error.message);
    process.exit(1);
  }
}

// Run the function
updateManifestVersion();