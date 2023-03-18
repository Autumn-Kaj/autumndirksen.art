/*Back to top button*/
$(document).ready(function(){
    $('#backtop').click(function(){
        window.scroll({top: 0, duration: 4000, behavior: 'smooth'});
    });
});

/*Scroll Reveal*/
$(document).ready(function(){
    ScrollReveal().reveal('#title-reveal', { distance: '150%',
    origin: 'bottom', duration: 2000});
    ScrollReveal().reveal('#sub-reveal', { distance: '120%',
    origin: 'bottom', duration: 2000, delay: 500});
    ScrollReveal().reveal('#arrow-reveal', { distance: '110%',
    origin: 'bottom', duration: 2000, delay: 1000 });

    ScrollReveal().reveal('#creatures', { distance: '30px',
    origin: 'bottom', duration: 1000});
    ScrollReveal().reveal('#characters', { distance: '30px',
    origin: 'bottom', duration: 1000, delay: 400});
    ScrollReveal().reveal('#illustrations', { distance: '30px',
    origin: 'bottom', duration: 1000, delay: 800 });
    
    ScrollReveal().reveal('#title-slide', { distance: '30px',
    origin: 'right', duration: 2000, });

    ScrollReveal().reveal('.nav-reveal', {duration: 2000});

    ScrollReveal().reveal('.image-item', { distance: '30px',
    origin: 'bottom', duration: 2000, });
});

/*Load Screen*/
window.addEventListener("load", () =>{
    document.querySelector(".loader").classList.add("loader--hidden");

    document.querySelector(".loader").addEventListener("transitionend" , () =>{
        document.body.removeChild(document.querySelector(".loader"))});
});

//////*Carousel*//////

/*Creatures Page*/
$(document).ready(function(){
    $(".x").click(function(){
        $(".dark-overlay").css({"visibility":"hidden", "opacity":"0"});
        $(".carousel-container").css({"visibility":"hidden", "opacity":"0"});
    });
    $("#creatureimage1").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mOtzMN089Y_uZlmxBgvxRcZP5-gcAU6BqBqAzSBVIw4whwR-iGyuaFMWtLQuehK19gBUsZLTTf0kZIMneW7lpwJr4bo2ViaLkg4jdFDYmrfQGpK8qHrJ-dEpjJaYE1MehI6c-SJwHD7OVV0AXVYtVeM2BFJzrc42zkcdvmI_wb13H3u8RN8Iu3a_yMPYz-a95?width=2480&height=1748&cropmode=none)" , });
    });
    $("#creatureimage2").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mJSPUh3MBvIUROmqCJbvvX5peS6GzNmSqhkO-pfPhjaW_CKRkKrosvIz1zhGkW05FTTaZHIUNsHUGrnSmNKFlDc5F_Yjgdpo4_EXyHWBYj50-xiTAPHsai1RjCHjIL2-DDQ28dkvoB3qrroCn_WZ9ej38uzHrG2NMCft2XGTKPYZul6xpbo183gkDixFBrn0k?width=2480&height=1748&cropmode=none)" , });
    });
    $("#creatureimage3").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mLvYVFhm74OgP7mFu4k3jf7FEEh_xFkbPXDT2gwKy3ahuP8wFHg9G74NwcsfaDFU4lLev8Rd4PA1axqRT93oevOJMFoP8Fz29yUDZvveC3pW4UP71kpFcn6H63lL6AfkxPjVKZaOQigUE_bEl5oUguif9Ic57us-IUnj0N1ZFgT4cSN3dTzgAE7fLLKLTKHVv?width=2480&height=1748&cropmode=none)" , });
    });
    $("#creatureimage4").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mWk_qHdeeaYTm0rda9DViismgovf5GPGVBudLaDTIedJFUzwvYoFtP_UDL1gPtU_SL6kMrcKrerF1fSJC_yk7Ay6F80q82ziMcfGX8-w9Zvot9mloOJ1p-CjRWua0IbXlhHQrgs-xzqZmncaET_00nGZ4BDCwNoosdqT9FiqY3Ke-a3mUUXp25uMYS2kXuwqr?width=2480&height=1748&cropmode=none)" , });
    });
    $("#creatureimage5").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mRKTT8JKCDEU5yRPy9klckJceVphqJ2SBUyz4Xfl8uPZO3bxMwruRduFV0MDm3hs553AErdGpMvCoWjJ1C7qih_X_VPOrQgon5D7o9RBl8zp7N-_wc-0y-uE4nzzgK_5h6sycdC-l8Van3eOiMmXkw3YCzeOYj6TXVigkF-fi7jWc5NQi719AJQeyY-fyeuPQ?width=2480&height=1748&cropmode=none)" , });
    });
    $("#creatureimage6").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mvZG7FfE25ro233eODS_IPwe3WDCXkLtDUnHuf9VaVGHF6WdZan24syHzGQi-Gs2DQRkrWa66fs2OiGggX2TtMVpijY-QANLTrd5KC1J4A4yxxUiEY050drdxyYjY_UKofsnblaGJCU5NWMHb-uCZtOrCpEzm89PrpYr4H15LJ3EDpAigX2OPgPsFJisfgqUs?width=2481&height=1749&cropmode=none)" , });
    });
    $("#creatureimage7").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mmF9pf-r5i93rvNwK393nZDCYt6QXQ0reYu4F3yGJVySWlXCAHcI1Nk_58KGrRAel5M5GeQXxOQ12hrakTCOTeQTZu_J6f8LVs_pgemVH1gF19SDd3NwAGvq77B_0bg4IyR1y7AG0hWJJgrZN-Jg8ibvCI1jyhmVjiy_L6ibkdRITEpoog5-H_hj8CDcam2VG?width=3300&height=2550&cropmode=none)" , });
    });
    $("#creatureimage8").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mCm6OUnBKldlNFlml8W7owLjPuopgDJXZbWOpljMMj9D_07ljl2fUm-AKDVi1JrPYdiWyY7IEYw4Qr-PcdYMuNTiHoXj2hvrHgBKeOuvRrzSZS7J-YOKSMdnDbScqa2kdohsgH_t9jiUPt8mhkSoIoD8FNghL64S0DUhrZbwqFDBsydkI9hTT1qEQrDC0twH6?width=1200&height=1000&cropmode=none)" , });
    });
});

/*Characters Page*/
$(document).ready(function(){
    $("#characterimage1").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mhRVj-53wtXFVRuKzJ7yB6m-N8YNBMiVw2kRNyQ8boDj1IqiOjcqB-7-QD_3jHlZxlTPc1K-jc9bYCrdhx72vF3HXJM6QdzzMkci6N8SqnbWhGRoqiuOfzXpgCuD91a5aV1og5gx-JWfBSpirDqkKuhiwyhdz3BNyIA7O3cHklZlVmz_WBklyWmrCulDh3ZJ2?width=1080&height=1080&cropmode=none)" , });
    });
    $("#characterimage2").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mEWxblskA1YSggO_xZCLkeeIQ-R6QzDvqAoKfIt4j1B_RUh5KrrLa6GnhouWfzh5YykK-F7kCPeJDZdGQygElb7M71NqSaljMSUymjpz0RROX2k-QAvmRbEXTfghv2Zb7z5Xk1tL0l4Vdcc8K041MZY-9YlP1soOKTOkx_eJYcW75fOHZ7K4cAQTAuWDhmPtf?width=3300&height=2550&cropmode=none)" , });
    });
    $("#characterimage3").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mYGpq8OPQd45Rg95xaiVic77gpAnZimX7S7Y8wjLLo3u364SuapmIdrjJuJVNaVShH3di2dEzdfj2WN8Ce03ew0rLf1L2rX7Plai34XNvhvWMftPPbII0HuAhh71nNiVdf5VuLbP8K43BPdWh72teJGQZLvKj8ouxa1B9gB3vZRQ_yLj88da5hfGRMYIZ6m1b?width=2480&height=1748&cropmode=none)" , });
    });
    $("#characterimage4").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mbGWTfdxrnGOwRFIi7pFOzOBvzqCx7saYM8wC-WP3tqO9LodVjRIvE2aHqd3xS-3gj5UxbCHoDbna72ebMKGJtJ_zUy5Ke8NTjN7UUS443a6jW_s_HQjDGRodIwZNsyUYd-SmNFUM2SDhjo0SWWxFbjRx-0cqrke6Zl6h1IxCDkSIwLF3jlexKd7qc5w1A8Az?width=2480&height=1748&cropmode=none)" , });
    });
    $("#characterimage5").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mpGfnuEDqTsmPSgCQOFudBeNSPz2WRssQsFdrZqcgV8lbl5nWoqDZUYWp4lhcuYryZuDtjO_JN29PQuuXd02-X2L4aY_5Ekk7wqkVeSKUdhRtfHZTxzObSMGJVzhnmOebSwIix_PAkWG-vh1bKx2_Bp3szK_PGsUtxDEHhD3pfH0jtomGDqJaq-g9YyjebFaT?width=3300&height=2550&cropmode=none)" , });
    });
    $("#characterimage6").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4ma8KVKMfod6T9jiNkT8stizq_3_JrF_W4G4oD4dB5Ixhv2csTasAu_kOenzC17s9uYiHwCSvBuTLZMo1dUeFF0A8Rj3Ze5EEKs99vdcYTNKgBit9eecinCP3kfq6oEK0grYmWwVUjQXPNda0IukTWyLdLko2mOZaHOTfuSlp2HKwGQ3D9Hj28NZX7ohh2eVYJ?width=2480&height=1748&cropmode=none)" , });
    });
    $("#characterimage7").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4myW4GzbuTSaQAIrtkv9xO2Bc1IaiQY-XkWaFkfAhflP9JwKwD4yJ65q_6T_vSR-wNaJpNAvlfp_jkGGhAHN0BeIY98qf4lHLifiR5-b9Vo1ch_ifItU5XJ5iPjR7bE9A_Fxf4pSlxtp1pJ2DS8_uRp9GSbI9-22zR6E2cCpf3WVk6DkVTw80jg4j_KsWNy530?width=3000&height=3300&cropmode=none)" , });
    });
    $("#characterimage8").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mJ_eI6oW8ccffglqY_fDCRq0BChQgSRS1Vtu0ABCQkATzKKJDBVth39qpSOX-fEQx_uf3auZbq3RiNbmMDbSqA3A98LhKdvI8XnIiwienrEBtL4DKovCKY4yCvG9kw0OMZ-1UGOkd0B4UziGMr4syJVgku2t72w-cypPp4x2dWEQHy6y00ZuLTQO-Slq1P4Gg?width=1640&height=2360&cropmode=none)" , });
    });
});

/*Illustrations Page*/
$(document).ready(function(){
    $("#illustrationimage1").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mwvb-x6NzZj-SjViIn-qQacq5GKn-mCrKwY9Na5iHIToXFCzNNVc9OkJ5F5YQJTj8oGKJT1dmG311ZJDWSrU83PJzqHKpo4cP-ixFoljqsNG1hYZaFFfktVv6j-6WpayCaFE-1A8A6MIeJRnzKKc9fOdRWBY9Ro-VCgdqJDDEQ3TTvQPFvofmdMJ6tsiVtnyt?width=1429&height=1586&cropmode=none)" , });
    });
    $("#illustrationimage2").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mJTF4EwkGqhOfCdKDUtTxWZCotaPb0e7zcqpNvx7Zp5UVhBE6lhe2t8XmVU5GW8Ff-4nQO0dqDIPgxCcll6ID-lgtmm1WctQ1_WjDpsp6nVndwbMxaOek8H8tp4kv1LkSOuarFh6TEkwn-N4sUMbOitVzgJ1YI6b8wXsBmTFLqxJZ1phgE76qCc3xbnbZuZtV?width=2400&height=2400&cropmode=none)" , });
    });
    $("#illustrationimage3").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mbBgQ5NBE0AnAtZT4_wzdA_2Pp4Km5hobIbkilbY7_0ux2gtxyOW6II_fgu90J-CajtkoycUeLkH_cp0baYC7fZcq3ficQi40sB9APMbzYBzoDsfcNuAUhER16CIaOmPlPdZW8XnmV1tZvQH2tMmk6PoN4ePvgXu8HTwSyNN7-G8pyNvCXyxtKMNTh7WJR0AT?width=1849&height=1748&cropmode=none)" , });
    });
    $("#illustrationimage4").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mQ7G2dfMTWE25nWyIfShX9DIz1UTkZV2raCePHTDnEnBTzwgfIOR9d1CVprr4OLbB_sh_mphZJ1MIMinXZjswGltqX-wsr8tptTyrNwCu_fcjZHCrPwC_VG2DcsiLMq3Q5NmcgP3N8wxFHqF2-TygKKIR8x9PsarEmUT3huX9ifCZwZIUIXsAimBdp9i0-65z?width=1296&height=1896&cropmode=none)" , });
    });
    $("#illustrationimage5").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4m4wyYWOo-CkXVKC0Xlqf0jOJKGAqJzHFOzKSYjubEMe34WXnsN3y0-CF7f2jI5HNO5IW1tJzgC0vjsZAC6nA58egaPDadD2GIPnUHO735UAOzm-Z7Qlvq_CkbeLdoBkLf-2GEiRNRdLj_PhKcIzGYeCdZ4dGt2HII4PLaP7rh-dgQj1yGvegiLHb1KuhOK8Mm?width=3000&height=3000&cropmode=none)" , });
    });
    $("#illustrationimage6").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mvgCt_nWi4RpomKV6UeokNt-wDGmvFk-rsLEnKzckDjdEwgttRNgcoT1SWP1YiUy--ownRD05eFuXZZCfnq7UmBBaRp9nfOUR88f8QeBporvuPfXEzIcIlm4tJyq57czL8lChxrulCRCUJmKnodcbhs8JV3MUdiZyeVfSZ8n9fv1QI88_pbfDUibKYBsO0r_H?width=1352&height=1691&cropmode=none)" , });
    });
    $("#illustrationimage7").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4m4bVl3POeXiuvNWvAABIR7Z8oni7F0Wy5Ct1mOw7Bj2H6NMYiHfv3X2fUBEktMmIjKyI38OSNzQCpSSPSwxruwIysqeH5Lv-0rj1hxsoTv80Py6Qu7R-reKP4Y3OoqZZO2KXa7XnPj2bSzskFT4nz0IKGmw9HLmUC6EwowMU7i5l08rj561L25rlpqTBgwq6j?width=1352&height=1691&cropmode=none)" , });
    });
    $("#illustrationimage8").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mqgD0sdWAkZDRs7DMT2xAxTXGnMLhcg2C-K2OgRsHIJkS4UnzXFDzlDIbeimLNMGu6CGTFmUkg9Ap5V7wkz5IekjeDsGoLJ7sr-s2N1stwQ2FeSdDLawvrRdotpWpGaQOcJ1LkTD0aUihsjEAa-rgPBXgFLbx2AAwxCq_kgO22L7ah3AnJH4RFtKWGDzJTt9m?width=3000&height=3000&cropmode=none)" , });
    });
    $("#illustrationimage9").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mAFLu9htns-Ih32gSQbVDOTD6B8LQN0N6AFmV40wgW_L-SST2FMr5blkdEcf4UxuChPhellK8-bogenPilmTK3VmbO2SSEmV6YU29EIZp945H165lCWNjTDw52Qcx09NreAblh2quekQvsnx4PMt2unToFbUAATkCSy17YZMn1skjuELaLtNTfSdRaTgUF6V_?width=2360&height=1640&cropmode=none)" , });
    });
    $("#illustrationimage10").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mcd9imnX9_OI3bvvIzo27-WR2Doeh9KNOZDFdJtYhJ4vfuTXm4roG9XMuZc7aNTnREouovbyQqZBQvz8rOip94hVxYqUNJ1DltneaJY6d-nLc3cGqLXcRJO5YfFdtGYpLT8p9DxTlfQG-0O9Q-AJ0am52xHxK3a9MsFeMwFZm0wDbdxfJInVqpL8HU-OO5m_T?width=1600&height=1200&cropmode=none)" , });
    });
    $("#illustrationimage11").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mtwvZx5Kv5x2Rba4qEmJdiAMFQeqhHJ9bvN1YN4scyDffB-nfUFUconqJ0rav1dnGTaqPc2V_wIk6ZcOExcwp9shJtp1xigRa2mds4zKbggl73FndSNA4qNRUHmq5dQ5sHmt9jLuF-C3JtcvwCKuj-ipgA0o0QArb1wICHbnmsHm86gFH_YiBaGiNH2AWriSQ?width=1357&height=1724&cropmode=none)" , });
    });
    $("#illustrationimage12").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4moF8RUm6lgAUckSE7EG52BZebzFjdbTH6j5gE6NB_5OgXH2OcnkizE1gBD9kEBjc0DsEmTpPU8hgwCd53cQGHgI-gmSmNYYSD5uJF3kVlqgMuNmZuK48ly9zv_zQ5Jm8MXS-qIBmrckNShs01RdW8knuA5k8CmTAS3cnnYjWMF5Vw_gkC-kI-5iSwhbnbqskR?width=2480&height=1748&cropmode=none)" , });
    });
    $("#illustrationimage13").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mHlVzWmR0PABV7Ge9oN-0dEEk5hvupySAbbyj-5UQA1_pHKaZZ_9RR6xddvxTXOhZRCfM_zgD06NLg5ft1p0H5ZoUbNGx_Dc89B7q2dYWSEyAprNIrkoCSS2APNYEwIJ2UHwD4LbGuyk5sC8hw6ciWEJH0coDv0G53L8gYECE9C-sN3fk-Ggeip2_KEoB5riC?width=1297&height=1895&cropmode=none)" , });
    });
    $("#illustrationimage14").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mKAfYz6eDXDLqBE6dulmx8FLZUb-TkaFdW4aclwU07tWwbpoEs8nVeOdhC39uWMeOaVR6Hn61KKBckPjYalyQL0wnbGVzKiaGm-06Z6Ow--nTVti557g0503X3T-Y1sKowSsgaFZ8IGlAki3SgdHKjKXqHMSbhPszu-YJ8Dog208dGy0AXRY8PBwD3YwJPp0g?width=2360&height=1640&cropmode=none)" , });
    });
    $("#illustrationimage15").click(function(){
        $(".dark-overlay").css({"visibility":"visible", "opacity":".7"});
        $(".carousel-container").css({"visibility":"visible", "opacity":"1"});
        $(".carousel-picture").css({"background-image": "url(https://dsm01pap009files.storage.live.com/y4mUM-fh8gjjTCaBOAiDoKJRK3oJBI_rizmM37RNoCeQ9K4ZC3h7fDoegbznY0_CwpzvzpDr1DceaKh6qIPBpOha8bPZkzBuXGCJZ45NxWX8oriYvwOsjRioscn25r_D6aASNAIshAwhK2UHlARb66HbcFnKQBKVm9m_d9-OrtLai3DaEeuEwfzBKTpKAUx7YJT?width=3300&height=2550&cropmode=none)" , });
    });
});
