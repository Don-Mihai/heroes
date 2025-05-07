# Путь к директории с проектом
$projectDirectory = "C:\build-tablet"

# Переход в нужную директорию
Set-Location -Path $projectDirectory

# Запуск serve
Start-Process "cmd.exe" "/c serve -s -l 3001"

# Ожидание некоторое время (например, 5 секунд), чтобы сервер успел запуститься
Start-Sleep -Seconds 5

# Запуск браузера с указанным адресом
Start-Process "C:\Users\<ВашеИмяПользователя>\AppData\Local\Yandex\YandexBrowser\Application\browser.exe" "--autoplay-policy=no-user-gesture-required --app=http://localhost:3001/"
