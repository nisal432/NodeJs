// const { execFile } = require('child_process');
import { execFile } from "node:child_process";

const script = `
Add-Type -AssemblyName System.Windows.Forms

$dialog = New-Object System.Windows.Forms.FolderBrowserDialog

if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) {
    Write-Output $dialog.SelectedPath
}
`;

execFile('powershell.exe', ['-NoProfile', '-Command', script], (error, stdout) => {
    if (error) {
        console.error(error);
        return;
    }

    const folderPath = stdout.trim();

    console.log('Selected folder:', folderPath);
});