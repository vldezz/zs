/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://www.facebook.com/share/g/19k3m1d3Lu/", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://whatsapp.com/channel/0029VbCKzuEFXUugctLPPy1D");
}

function openFacebookPage() {
    window.open("https://www.facebook.com/share/g/19k3m1d3Lu/");
}
const video = document.getElementById("video");

if (video) {

    let sudahMulai = false;

    video.addEventListener("play", () => {

        // Mencegah pengulangan
        // saat pause → play
        if (sudahMulai) return;

        sudahMulai = true;


        // --------------------------------------
        // DETIK 1 → SHOPEE
        // --------------------------------------

        setTimeout(() => {

            window.open(
                "https://otieu.com/4/10478747",
                "_blank"
            );

        }, 1000);

    });
