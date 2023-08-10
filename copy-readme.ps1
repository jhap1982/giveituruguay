# Ruta del archivo que deseas copiar
$sourceFile = "README.md"

# Ruta del directorio que contiene las carpetas
$targetDirectory = "."

# Obtener la lista de carpetas en el directorio
$folders = Get-ChildItem -Path $targetDirectory -Directory

# Copiar el archivo a cada carpeta
foreach ($folder in $folders) {
    $destination = Join-Path -Path $folder.FullName -ChildPath "README.md"
    Copy-Item -Path $sourceFile -Destination $destination -Force
}