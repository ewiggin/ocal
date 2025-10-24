#!/usr/bin/env bash
# Exit immediately if a command exits with a non-zero status
set -e

# --------------------------
# Configuration
# --------------------------
APP_NAME="ocal"  # Your CLI application name
INSTALL_DIR="/usr/local/bin"
GITHUB_REPO="ewiggin/ocal"  # Replace with your GitHub repo
RELEASE_BASE="https://github.com/$GITHUB_REPO/releases/latest/download"

# --------------------------
# Detect OS and architecture
# --------------------------
OS="$(uname | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

# Map common architecture names
if [ "$ARCH" = "x86_64" ]; then
  ARCH="x86_64"
elif [[ "$ARCH" == "arm64" || "$ARCH" == "aarch64" ]]; then
  ARCH="arm64"
else
  echo "Unsupported architecture: $ARCH"
  exit 1
fi

BINARY_NAME="${APP_NAME}-${OS}-${ARCH}"

# Full download URL
BINARY_URL="${RELEASE_BASE}/${BINARY_NAME}"

# --------------------------
# Download and install
# --------------------------
echo "Downloading ${APP_NAME} binary from ${BINARY_URL}..."
curl -L "$BINARY_URL" -o "$INSTALL_DIR/$APP_NAME"

echo "Setting executable permissions..."
chmod +x "$INSTALL_DIR/$APP_NAME"

echo "Installation complete!"
echo "You can now run '$APP_NAME' from anywhere in your terminal."
