const images = ["Download Grand Canyon Sunset graphy wallpaper in Nature wallpapers.jpg", "Grand Canyon USA Ultra HD wallpaper UHD WallpapersNet.jpeg", "macOS-Big-Sur-Daylight-Wallpaper-iDownloadBlog.jpg", "Vacation Savings on Attractions Dining Tours Recreation More.jpg", "wallpaperflare.com_wallpaper.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.id = "bgImage";
bgImage.src = `img/${chosenImage}`; // insert img src to javascript
document.body.appendChild(bgImage); // insert img tag to body tag
