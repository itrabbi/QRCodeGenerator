const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".input");
const generateBtn = wrapper.querySelector(".generate-btn");
const downloadBtn = wrapper.querySelector(".download-btn");
const qrCanvas = document.getElementById("qr-canvas");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;

    const qr = new QRious({
        element: qrCanvas,
        size: 200,
        value: qrValue
    });

    wrapper.classList.add("active");
    downloadBtn.style.display = "block";
});

downloadBtn.addEventListener("click", () => {
    const dataURL = qrCanvas.toDataURL("image/png");
    downloadBtn.href = dataURL;
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
        downloadBtn.style.display = "none";
    }
});