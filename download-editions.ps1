# Download edition images script
Write-Host "=== Downloading Edition Gallery Images ===" -ForegroundColor Green

# 2023 images
Write-Host "`n[2023 Edition]" -ForegroundColor Cyan
$baseUrl2023_crew = "https://raw.githubusercontent.com/MikeCheek/naturalmente-tecnologici/0a0a75b518f1103dc9da468c5cfc65f669c8debd/src/images/crew"
$baseUrl2023_guests = "https://raw.githubusercontent.com/MikeCheek/naturalmente-tecnologici/0a0a75b518f1103dc9da468c5cfc65f669c8debd/src/images/guests/talk"
$baseUrl2023_activity = "https://raw.githubusercontent.com/MikeCheek/naturalmente-tecnologici/0a0a75b518f1103dc9da468c5cfc65f669c8debd/src/images/guests/activity"
$targetPath2023 = "c:\Users\miche\Developing\naturalmente-tecnologici\src\images\editions\2023\gallery"

$downloads2023 = @(
    @{url="$baseUrl2023_crew/0.png"; name="crew_0.png"},
    @{url="$baseUrl2023_crew/1.jpg"; name="crew_1.jpg"},
    @{url="$baseUrl2023_crew/becci.JPG"; name="crew_becci.JPG"},
    @{url="$baseUrl2023_guests/anna_albanese.jpg"; name="guest_anna_albanese.jpg"},
    @{url="$baseUrl2023_guests/marina_berardi.jpg"; name="guest_marina_berardi.jpg"},
    @{url="$baseUrl2023_guests/donato_montesano.jpg"; name="guest_donato_montesano.jpg"},
    @{url="$baseUrl2023_guests/giuseppe_sassano.jpg"; name="guest_giuseppe_sassano.jpg"},
    @{url="$baseUrl2023_activity/barbara_siebenlist.jpg"; name="activity_barbara_siebenlist.jpg"},
    @{url="$baseUrl2023_activity/giacomo_castana.jpg"; name="activity_giacomo_castana.jpg"},
    @{url="$baseUrl2023_activity/sara_cricenti.jpg"; name="activity_sara_cricenti.jpg"}
)

foreach ($item in $downloads2023) {
    $outPath = Join-Path $targetPath2023 $item.name
    try {
        Invoke-WebRequest -Uri $item.url -OutFile $outPath -ErrorAction Stop
        Write-Host "  ✓ $($item.name)"
    } catch {
        Write-Host "  ✗ $($item.name) - FAILED" -ForegroundColor Red
    }
}

# 2024 images
Write-Host "`n[2024 Edition]" -ForegroundColor Cyan
$baseUrl2024_crew = "https://raw.githubusercontent.com/MikeCheek/naturalmente-tecnologici/b59fa8f06c8a700410f83a770aecae1fdc34663b/src/images/crew"
$baseUrl2024_guests_music = "https://raw.githubusercontent.com/MikeCheek/naturalmente-tecnologici/b59fa8f06c8a700410f83a770aecae1fdc34663b/src/images/guests/music"
$baseUrl2024_guests_talk = "https://raw.githubusercontent.com/MikeCheek/naturalmente-tecnologici/b59fa8f06c8a700410f83a770aecae1fdc34663b/src/images/guests/talk"
$targetPath2024 = "c:\Users\miche\Developing\naturalmente-tecnologici\src\images\editions\2024\gallery"

$downloads2024 = @(
    @{url="$baseUrl2024_crew/0.png"; name="crew_0.png"},
    @{url="$baseUrl2024_crew/1.jpg"; name="crew_1.jpg"},
    @{url="$baseUrl2024_guests_music/paolo_baldini.jpg"; name="guest_music_paolo_baldini.jpg"},
    @{url="$baseUrl2024_guests_music/davide_shorty.jpg"; name="guest_music_davide_shorty.jpg"},
    @{url="$baseUrl2024_guests_music/dj_lugi.jpeg"; name="guest_music_dj_lugi.jpeg"},
    @{url="$baseUrl2024_guests_music/pneumatix.jpg"; name="guest_music_pneumatix.jpg"},
    @{url="$baseUrl2024_guests_talk/anna_albanese.jpg"; name="guest_talk_anna_albanese.jpg"},
    @{url="$baseUrl2024_guests_talk/marina_berardi.jpg"; name="guest_talk_marina_berardi.jpg"},
    @{url="$baseUrl2024_guests_talk/donato_montesano.jpg"; name="guest_talk_donato_montesano.jpg"},
    @{url="$baseUrl2024_guests_talk/enzo_sansone.jpg"; name="guest_talk_enzo_sansone.jpg"}
)

foreach ($item in $downloads2024) {
    $outPath = Join-Path $targetPath2024 $item.name
    try {
        Invoke-WebRequest -Uri $item.url -OutFile $outPath -ErrorAction Stop
        Write-Host "  ✓ $($item.name)"
    } catch {
        Write-Host "  ✗ $($item.name) - FAILED" -ForegroundColor Red
    }
}

Write-Host "`n=== Download Summary ===" -ForegroundColor Green
$count2022 = (Get-ChildItem "c:\Users\miche\Developing\naturalmente-tecnologici\src\images\editions\2022\gallery" | Measure-Object).Count
$count2023 = (Get-ChildItem "c:\Users\miche\Developing\naturalmente-tecnologici\src\images\editions\2023\gallery" | Measure-Object).Count
$count2024 = (Get-ChildItem "c:\Users\miche\Developing\naturalmente-tecnologici\src\images\editions\2024\gallery" | Measure-Object).Count

Write-Host "2022: $count2022 images"
Write-Host "2023: $count2023 images"
Write-Host "2024: $count2024 images"
Write-Host "Total: $($count2022 + $count2023 + $count2024) images" -ForegroundColor Green
