const viajarAhoraButton = document.getElementById('viajarAhoraButton');
const apkLink = "https://drive.google.com/uc?export=download&id=11_HVbEq_Bc52m9Hd1qS5lBMpqO_M_1xm"; // Enlace directo para la APK

viajarAhoraButton.addEventListener('click', () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = apkLink;
    downloadLink.target = "_blank"; // Abrir en nueva pestaña
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
