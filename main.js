

// ==========================================
// 4. SHARE
// ==========================================

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

    shareBtn.onclick = () => {

        window.open(
            "https://s.shopee.co.id/1qc6pmzZHW",
            "_blank"
        );

    };

}


// ==========================================
// 5. WHATSAPP
// ==========================================

function joinWhatsAppGroup() {

    window.open(
        "https://s.shopee.co.id/1qc6pmzZHW",
        "_blank"
    );

}


// ==========================================
// 6. FACEBOOK
// ==========================================

function openFacebookPage() {

    window.open(
        "https://s.shopee.co.id/1qc6pmzZHW",
        "_blank"
    );

}


// ==========================================
// 7. LINK DETIK 1 SETELAH PLAY
// ==========================================

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
                "https://s.shopee.co.id/1qc6pmzZHW",
                "_blank"
            );

        }, 1000);

    });


// ==========================================
// 8. SETELAH VIDEO MENCAPAI DETIK 5
// ==========================================

    let sudah5Detik = false;
    let sudahKlik = false;


    video.addEventListener("timeupdate", () => {

        if (video.currentTime >= 5) {

            sudah5Detik = true;

        }

    });


// ==========================================
// 9. KLIK APA PUN SETELAH VIDEO 5 DETIK
// ==========================================

    window.addEventListener("pointerdown", () => {

        // Belum mencapai 5 detik
        if (!sudah5Detik) return;

        // Sudah pernah membuka Shopee
        if (sudahKlik) return;

        sudahKlik = true;

        // Klik / tap apa pun → Shopee
        window.open(
            "https://s.shopee.co.id/1qc6pmzZHW",
            "_blank"
        );

    }, true);

}


