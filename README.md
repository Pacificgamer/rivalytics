<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        // Replace this with your own screenshot handler
        processScreenshot(img); // You may need to define this or call the existing one
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }}
/>

 
