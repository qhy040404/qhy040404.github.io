/**
 * 有损压缩
 * @param base64 输入值
 * @param w 新宽度
 * @param m 最大大小kb
 * @param callback 回调函数
 */
function dealImage(base64, w, m, callback) {
    const newImage = new Image();
    let quality = 0.6;
    newImage.src = base64;
    newImage.setAttribute("crossOrigin", 'Anonymous');
    let imgWidth, imgHeight;
    newImage.onload = function () {
        imgWidth = this.width;
        imgHeight = this.height;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (Math.max(imgWidth, imgHeight) > w) {
            if (imgWidth > imgHeight) {
                canvas.width = w;
                canvas.height = w * imgHeight / imgWidth;
            } else {
                canvas.height = w;
                canvas.width = w * imgWidth / imgHeight;
            }
        } else {
            canvas.width = imgWidth;
            canvas.height = imgHeight;
            quality = 0.6;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        let base64 = canvas.toDataURL("image/png", quality);
        while (base64.length / 1024 > m) {
            quality -= 0.01;
            base64 = canvas.toDataURL("image/png", quality);
        }
        callback(base64);
    }
}