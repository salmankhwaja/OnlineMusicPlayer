// ---------------------------------------------------------------------------
// Yaadon Ka Radio — station & podcast catalog
// ---------------------------------------------------------------------------
// Every `stream` is a live public internet radio stream, played back directly
// in an <audio> tag — this app doesn't host or distribute any audio files.
// `verified: true` means this exact URL was tested and produced playable
// audio (Sep 2026). `verified: false` means it either timed out, errored, or
// is a plain http:// stream that most browsers will refuse to load from an
// https:// page (mixed content) — kept in the list per your source file, but
// don't be surprised if it doesn't play. Streams move/die without notice;
// this is a snapshot, not a guarantee.
// ---------------------------------------------------------------------------

const CATALOG = {
  pakistan: {
    label: "Pakistan",
    flag: "🇵🇰",
    groups: [
      {
        name: "Popular & independent FM",
        stations: [
          { id: "citymfm89", name: "City FM 89", stream: "https://radio.cityfm89.com/stream", verified: true },
          { id: "radioone91", name: "Radio One FM 91", stream: "https://cc.vmakerhost.com/proxy/karachi?mp=/stream", verified: true },
          { id: "humfm1062", name: "Hum FM 106.2", stream: "https://server.mediacast4u.stream/8002/stream", verified: true },
          { id: "samaamera1074", name: "Samaa / Mera FM 107.4", stream: "https://samaakhi107-itelservices.radioca.st/stream", verified: true },
          { id: "merafm1074lhr", name: "Mera FM 107.4 Lahore", stream: "https://samaalhr107-itelservices.radioca.st/stream", verified: true },
          { id: "aladin", name: "Aladin Radio Network", stream: "https://cc.vmakerhost.com/proxy/magic?mp=/live", verified: true },
          { id: "hotfmnawabshah", name: "Hot FM Nawabshah", stream: "https://stream.zeno.fm/t961q1d0vp6vv/", verified: true },
          { id: "ilmrenala", name: "ILM Radio Renala FM 92", stream: "https://stream.zeno.fm/7wre21u7xa0uv", verified: false, note: "stream errored on test — mount may have moved" },
          { id: "hotfm105", name: "Hot FM 105", stream: "http://172.93.237.106:8000/listen.mp3", verified: false, note: "plain http:// — blocked on an https:// page by most browsers" },
          { id: "fm100pk", name: "FM 100 Pakistan", stream: "http://162.244.80.118:4900/;stream.mp3", verified: false, note: "plain http:// — blocked on an https:// page by most browsers" },
          { id: "fm100khi", name: "FM 100 Karachi", stream: "http://162.244.80.118:3024/stream.mp3?ver=349829", verified: false, note: "plain http:// — blocked on an https:// page by most browsers" },
          { id: "pakfilmi_src", name: "Radio Pak Filmi (source: ssl-stream)", stream: "http://s17.ssl-stream.com:8214/stream", verified: false, note: "timed out on test — try the Zeno relay below instead" },
          { id: "pakfilmi_zeno", name: "Radio Pak Filmi (Zeno relay)", stream: "https://stream.zeno.fm/qeg64k977f8uv", verified: true }
        ]
      },
      {
        name: "PBC — Radio Pakistan (govt. FM/MW network)",
        stations: [
          { id: "fm101isb", name: "FM 101 Islamabad", stream: "https://whmsonic.radio.gov.pk:7008/stream", verified: true },
          { id: "fm101khi", name: "FM 101 Karachi", stream: "https://whmsonic.radio.gov.pk:8048/stream", verified: true },
          { id: "fm101khp", name: "FM 101 Khairpur", stream: "https://whmsonic.radio.gov.pk:8054/stream", verified: true },
          { id: "fm101lrk", name: "FM 101 Larkana", stream: "https://whmsonic.radio.gov.pk:8050/stream", verified: true },
          { id: "fm101mth", name: "FM 101 Mithi", stream: "https://whmsonic.radio.gov.pk:8052/stream", verified: true },
          { id: "fm101sgd", name: "FM 101 Sargodha", stream: "https://whmsonic.radio.gov.pk:8040/relay", verified: true },
          { id: "fm101psh", name: "FM 101 Peshawar", stream: "https://whmsonic.radio.gov.pk:8070/relay?type=mp3&nocache=9", verified: true },
          { id: "fm93khi", name: "FM 93 Karachi", stream: "https://whmsonic.radio.gov.pk:7022/stream", verified: true },
          { id: "fm93lhr", name: "FM 93 Lahore", stream: "https://whmsonic.radio.gov.pk:8088/stream", verified: true },
          { id: "fm93rwp", name: "FM 93 Rawalpindi", stream: "https://whmsonic.radio.gov.pk:8036/relay", verified: true },
          { id: "fm93fsd", name: "FM 93 Faisalabad", stream: "https://whmsonic.radio.gov.pk:8022/relay", verified: true },
          { id: "fm93mul", name: "FM 93 Multan", stream: "https://whmsonic.radio.gov.pk:8032/stream", verified: true },
          { id: "fm93mnw", name: "FM 93 Mianwali", stream: "https://whmsonic.radio.gov.pk:8028/relay", verified: true },
          { id: "fm93cht", name: "FM 93 Chitral", stream: "https://whmsonic.radio.gov.pk:8066/relay", verified: true },
          { id: "rp_ncac", name: "News & Current Affairs Channel (NCAC)", stream: "https://whmsonic.radio.gov.pk:7004/stream", verified: true, tag: "news & talk" },
          { id: "rp_isb", name: "Radio Pakistan Islamabad", stream: "https://whmsonic.radio.gov.pk:7003/stream", verified: true, tag: "news & talk" },
          { id: "rp_hyd_mw", name: "Radio Pakistan Hyderabad MW 1008", stream: "https://whmsonic.radio.gov.pk:8042/stream", verified: true, tag: "news & talk" },
          { id: "rp_mul_mw", name: "Radio Pakistan Multan MW", stream: "https://whmsonic.radio.gov.pk:8034/stream", verified: true, tag: "news & talk" },
          { id: "rp_khi_mw", name: "Radio Pakistan Karachi MW 639", stream: "https://whmsonic.radio.gov.pk:7000/MW639khi", verified: true, tag: "news & talk" },
          { id: "rp_dik_mw", name: "Radio Pakistan D.I. Khan MW 711", stream: "https://whmsonic.radio.gov.pk:7000/Dikhan", verified: true, tag: "news & talk" },
          { id: "rp_psh_mw", name: "Radio Pakistan Peshawar MW", stream: "https://whmsonic.radio.gov.pk:8072/relay", verified: true, tag: "news & talk" },
          { id: "rp_qta_mw", name: "Radio Pakistan Quetta MW", stream: "https://whmsonic.radio.gov.pk:8060/relay", verified: true, tag: "news & talk" },
          { id: "rp_world", name: "Radio Pakistan World Service", stream: "https://whmsonic.radio.gov.pk:7005/stream", verified: true, tag: "news & talk" }
        ]
      },
      {
        name: "Religious",
        stations: [
          { id: "sautulquran", name: "Saut-ul-Quran — PBC FM 93.4 Islamabad", stream: "https://whmsonic.radio.gov.pk:7002/stream?type=mp3&nocache=12", verified: true },
          { id: "loveislam", name: "Love Islam Radio", stream: "https://stream-52.zeno.fm/f9h69cgbu68uv", verified: true },
          { id: "abdulbasit", name: "Abdul Basit Abdul Samad — Quran recitation", stream: "https://radio.mp3islam.com/listen/abdulbasit/radio.mp3", verified: true }
        ]
      },
      {
        name: "Health & community",
        stations: [
          { id: "uhr_urdu", name: "Universal Health Radio — Urdu", stream: "https://radio.universalhealthradio.org/uhr-ur.mp3", verified: true }
        ]
      }
    ]
  },

  news: {
    label: "News",
    flag: "📰",
    groups: [
      {
        name: "International",
        stations: [
          { id: "bbc_world_service", name: "BBC World Service", stream: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service", verified: true },
          { id: "dw_english", name: "Deutsche Welle — English", stream: "https://stream.zeno.fm/559kz4atuy8uv", verified: true }
        ]
      },
      {
        name: "Pakistan — news & talk",
        stations: [
          { id: "rp_ncac_news", name: "News & Current Affairs Channel (NCAC)", stream: "https://whmsonic.radio.gov.pk:7004/stream", verified: true, note: "PBC's dedicated news & current affairs network — breaking news, hourly bulletins, talk shows" },
          { id: "rp_isb_news", name: "Radio Pakistan Islamabad", stream: "https://whmsonic.radio.gov.pk:7003/stream", verified: true },
          { id: "rp_world_news", name: "Radio Pakistan World Service", stream: "https://whmsonic.radio.gov.pk:7005/stream", verified: true },
          { id: "rp_hyd_mw_news", name: "Radio Pakistan Hyderabad MW 1008", stream: "https://whmsonic.radio.gov.pk:8042/stream", verified: true },
          { id: "rp_mul_mw_news", name: "Radio Pakistan Multan MW", stream: "https://whmsonic.radio.gov.pk:8034/stream", verified: true },
          { id: "rp_psh_mw_news", name: "Radio Pakistan Peshawar MW", stream: "https://whmsonic.radio.gov.pk:8072/relay", verified: true },
          { id: "rp_qta_mw_news", name: "Radio Pakistan Quetta MW", stream: "https://whmsonic.radio.gov.pk:8060/relay", verified: true },
          { id: "rp_khi_mw_news", name: "Radio Pakistan Karachi MW 639", stream: "https://whmsonic.radio.gov.pk:7000/MW639khi", verified: true },
          { id: "rp_dik_mw_news", name: "Radio Pakistan D.I. Khan MW 711", stream: "https://whmsonic.radio.gov.pk:7000/Dikhan", verified: true }
        ]
      }
    ]
  },

  india: {
    label: "India",
    flag: "🇮🇳",
    groups: [
      {
        name: "Bollywood",
        stations: [
          { id: "nostalgic90s", name: "Nostalgic Bollywood 90s (DesiZone Radio)", stream: "https://stream.zeno.fm/4gfevnscvp8uv", verified: true, tag: "90s only" }
        ]
      }
    ]
  },

  singapore: {
    label: "Singapore",
    flag: "🇸🇬",
    groups: [
      {
        name: "Oldies",
        stations: [
          { id: "gold905", name: "Gold 905 (Mediacorp)", stream: "https://playerservices.streamtheworld.com/api/livestream-redirect/GOLD905AAC.aac", verified: true, tag: "English oldies" }
        ]
      }
    ]
  },

  arabic: {
    label: "Arabic",
    flag: "🌙",
    groups: [
      {
        name: "Mixed hits",
        stations: [
          { id: "arabmixfm", name: "Arab Mix FM", stream: "https://stream.zeno.fm/efx5psd00qruv", verified: true }
        ]
      }
    ]
  },

  // World: flagship stations across 4 regions, researched Sep 2026. Every
  // entry here is `verified: false` — unlike the rest of the catalog, none
  // of these have actually been loaded and played yet (no live browser was
  // available when this batch was built). The `note` on each one carries
  // how confident the sourcing was: "high" = an explicit direct stream URL
  // stated on the broadcaster's own site or a reliable technical source;
  // "medium" = a third-party host whose domain matches the station's own
  // brand; "low" = a single unconfirmed source — try these last. Several
  // are HLS (.m3u8) streams, which need the hls.js library (loaded in
  // index.html) rather than plain <audio> playback — see loadAudioSource()
  // below. Run a real playback pass on this batch before trusting it.
  world: {
    label: "World",
    flag: "🌍",
    groups: [
      {
        name: "Americas",
        stations: [
          { id: "kexp903", name: "KEXP 90.3 FM (Seattle)", stream: "https://kexp.streamguys1.com/kexp160.aac", verified: false, note: "high confidence, sourced from kexp.org — not yet playback-tested" },
          { id: "wypr881", name: "WYPR 88.1 FM (Baltimore, NPR)", stream: "https://wtmd-ice.streamguys1.com/wypr-1-mp3", verified: false, note: "high confidence, sourced from wypr.org — not yet playback-tested" },
          { id: "kuow949", name: "KUOW 94.9 FM (Seattle, NPR)", stream: "https://playerservices.streamtheworld.com/api/livestream-redirect/KUOWFM_HIGH_MP3.mp3", verified: false, note: "high confidence, sourced from kuow.org — not yet playback-tested" },
          { id: "cbc_r1_tor", name: "CBC Radio One (Toronto)", stream: "https://cbcradiolive.akamaized.net/hls/live/2041036/ES_R1ETR/master.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — single community source, not official CBC — not yet playback-tested, may not work" },
          { id: "reactor1057_mx", name: "Reactor 105.7 FM (IMER, Mexico City)", stream: "https://s2.mexside.net/8002/stream", verified: false, note: "high confidence, corroborated by IMER's own site — not yet playback-tested" },
          { id: "caracol_co", name: "Caracol Radio (Colombia)", stream: "https://playerservices.streamtheworld.com/api/livestream-redirect/CARACOL_RADIOAAC.aac", verified: false, note: "high confidence — not yet playback-tested" },
          { id: "rcn_co", name: "RCN Radio (Colombia)", stream: "https://mdstrm.com/audio/627c1c39637d89088290f64d/icecast.audio", verified: false, note: "high confidence — not yet playback-tested" },
          { id: "mitre_ar", name: "Radio Mitre AM 790 (Argentina)", stream: "https://playerservices.streamtheworld.com/api/livestream-redirect/AM790_56AAC.aac", verified: false, note: "high confidence, corroborated by 2 independent sources — not yet playback-tested" },
          { id: "rockpop_ar", name: "Rock & Pop FM 95.9 (Argentina)", stream: "https://playerservices.streamtheworld.com/api/livestream-redirect/ROCKANDPOPAAC.aac", verified: false, note: "low confidence, single source — not yet playback-tested, may not work" },
          { id: "lra1_ar", name: "Radio Nacional LRA1 AM 870 (Argentina)", stream: "https://sa.mp3.icecast.magma.edge-access.net/sc_rad1", verified: false, note: "low confidence, 2 community sources agree but not official — not yet playback-tested, may not work" },
          { id: "cooperativa_cl", name: "Radio Cooperativa 93.3 FM (Chile)", stream: "https://unlimited4-us.dps.live/cooperativa/gotardis/audio/now/livestream1.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence — not yet playback-tested" },
          { id: "jovempan_br", name: "Jovem Pan FM (Brazil)", stream: "https://stream-144.zeno.fm/c45wbq2us3buv?zt=eyJhbGciOiJIUzI1NiJ9", verified: false, note: "low confidence — Zeno.fm URL includes a token that may expire — not yet playback-tested, may not work" }
        ]
      },
      {
        name: "Europe",
        stations: [
          { id: "bbc_radio1", name: "BBC Radio 1 (UK)", stream: "https://lsn.lv/bbcradio.m3u8?station=bbc_radio_one&bitrate=320000", verified: false, note: "HLS stream (needs hls.js, included) — high confidence — not yet playback-tested" },
          { id: "franceinter_fr", name: "France Inter (France)", stream: "https://icecast.radiofrance.fr/franceinter-hifi.aac?id=radiofrance", verified: false, note: "high confidence, official Radio France domain — not yet playback-tested" },
          { id: "fip_fr", name: "FIP (France)", stream: "https://icecast.radiofrance.fr/fip-hifi.aac?id=radiofrance", verified: false, note: "high confidence, official Radio France domain — not yet playback-tested" },
          { id: "dlf_de", name: "Deutschlandfunk (Germany)", stream: "https://st01.dlf.de/dlf/01/128/mp3/stream.mp3", verified: false, note: "medium confidence — not yet playback-tested" },
          { id: "rai1_it", name: "RAI Radio 1 (Italy)", stream: "https://icestreaming.rai.it/1.mp3", verified: false, note: "high confidence, corroborated by 2 sources — not yet playback-tested" },
          { id: "rai3_it", name: "RAI Radio 3 (Italy)", stream: "https://icestreaming.rai.it/3.mp3", verified: false, note: "high confidence, corroborated by 2 sources — not yet playback-tested" },
          { id: "rne_es", name: "RNE Radio Nacional (Spain)", stream: "https://rtvelivestream.rtve.es/rtvesec/rne/rne_r1_main.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence, official RTVE domain — not yet playback-tested" },
          { id: "cadenaser_es", name: "Cadena SER (Spain)", stream: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENASER.mp3", verified: false, note: "high confidence — not yet playback-tested" },
          { id: "npo1_nl", name: "NPO Radio 1 (Netherlands)", stream: "http://icecast.omroep.nl/radio1-bb-mp3", verified: false, note: "high confidence — plain http:// (may be blocked as mixed content on an https:// page) — not yet playback-tested" },
          { id: "npo3fm_nl", name: "NPO 3FM (Netherlands)", stream: "http://icecast.omroep.nl/3fm-bb-mp3", verified: false, note: "high confidence — plain http:// (may be blocked as mixed content on an https:// page) — not yet playback-tested" },
          { id: "srp1_se", name: "Sveriges Radio P1 (Sweden)", stream: "https://live1.sr.se/p1-mp3-96", verified: false, note: "high confidence, official SR domain — not yet playback-tested" },
          { id: "pr1_pl", name: "Polskie Radio Jedynka (Poland)", stream: "https://stream11.polskieradio.pl/pr1/pr1.sdp/playlist.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence, official domain — not yet playback-tested" },
          { id: "nrkp1_no", name: "NRK P1 Trøndelag (Norway)", stream: "http://lyd.nrk.no/nrk_radio_p1_trondelag_mp3_h", verified: false, note: "low confidence, single source, plain http:// — not yet playback-tested, may not work" },
          { id: "mnm_be", name: "VRT MNM (Belgium)", stream: "http://icecast.vrtcdn.be/mnm-high.mp3", verified: false, note: "high confidence — plain http:// (may be blocked as mixed content on an https:// page) — not yet playback-tested" }
        ]
      },
      {
        name: "Asia-Pacific",
        stations: [
          { id: "abc_newsradio_au", name: "ABC NewsRadio (Australia)", stream: "https://mediaserviceslive.akamaized.net/hls/live/2038311/newsradio/master.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence, cross-validated — not yet playback-tested" },
          { id: "abc_rn_au", name: "ABC Radio National (Australia)", stream: "https://mediaserviceslive.akamaized.net/hls/live/2038318/rnnsw/master.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence — not yet playback-tested" },
          { id: "abc_doublej_au", name: "ABC Double J (Australia)", stream: "https://mediaserviceslive.akamaized.net/hls/live/2038315/doublejnsw/index.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence — not yet playback-tested" },
          { id: "rnz_national_nz", name: "RNZ National (New Zealand)", stream: "http://radionz-ice.streamguys.com/national.mp3", verified: false, note: "high confidence, sourced from rnz.co.nz — plain http:// — not yet playback-tested" },
          { id: "rnz_concert_nz", name: "RNZ Concert (New Zealand)", stream: "http://radionz-ice.streamguys.com/concert.mp3", verified: false, note: "high confidence, sourced from rnz.co.nz — plain http:// — not yet playback-tested" },
          { id: "icrt_tw", name: "ICRT (Taiwan)", stream: "https://stream.rcs.revma.com/x27mfpztxp3vv", verified: false, note: "high confidence, sourced from icrt.com.tw — not yet playback-tested" },
          { id: "rri_pro1_id", name: "RRI Pro 1 Jakarta (Indonesia)", stream: "https://stream-node1.rri.co.id/streaming/25/9025/rrijakartapro1.mp3", verified: false, note: "high confidence, official rri.co.id domain — not yet playback-tested" },
          { id: "vov1_vn", name: "VOV1 (Vietnam)", stream: "https://str.vov.gov.vn/vovlive/vov1vov5Vietnamese.sdp_aac/playlist.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence, official vov.gov.vn domain — not yet playback-tested" },
          { id: "nhk_world_jp", name: "NHK World Radio Japan", stream: "https://nhkworld.webcdn.stream.ne.jp/www11/radiojapan/all/263949/live_s.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — low confidence, third-party directory — not yet playback-tested, may not work" },
          { id: "mcot_th", name: "MCOT FM 100.5 News (Thailand)", stream: "http://rstream.mcot.net:8000/fm1005", verified: false, note: "high confidence, official mcot.net domain — plain http:// — not yet playback-tested" },
          { id: "bomboradyo_ph", name: "Bombo Radyo (Philippines)", stream: "https://stream.zenolive.com/wp3e88sqtuquv", verified: false, note: "low confidence, third-party host — not yet playback-tested, may not work" },
          { id: "wish1075_ph", name: "Wish 107.5 FM (Philippines)", stream: "https://radio.wish1075.com/web/stream/wish.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence, official wish1075.com domain — not yet playback-tested" },
          { id: "ytn_kr", name: "YTN Radio (South Korea)", stream: "https://radiolive.ytn.co.kr/radio/_definst_/20211118_fmlive/playlist.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence, official ytn.co.kr domain — not yet playback-tested" }
        ]
      },
      {
        name: "Africa & Middle East",
        stations: [
          { id: "safm_za", name: "SAfm (South Africa)", stream: "http://proradiocloud.antfarm.co.za/ant-lre-sabc/620e01258f5b49568546ff239ff2a32f/playlist.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence, corroborated against SABC's own host — not yet playback-tested" },
          { id: "fivefm_za", name: "5FM (South Africa)", stream: "http://proradiocloud.antfarm.co.za/ant-lre-sabc/9f38102608b345dcb53c1db0bd57f2d3/chunklist_w221898416.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — points at a variant playlist, not the master — not yet playback-tested, may not work" },
          { id: "wazobia_lagos_ng", name: "Wazobia FM 95.1 (Lagos, Nigeria)", stream: "http://icestream.coolwazobiainfo.com:8000/wazobia-lagos", verified: false, note: "medium confidence, CDN matches station's media group — plain http:// — not yet playback-tested" },
          { id: "nginfo_lagos_ng", name: "Nigeria Info FM 99.3 (Lagos, Nigeria)", stream: "http://icestream.coolwazobiainfo.com:8000/niginfo-lagos", verified: false, note: "medium confidence — plain http:// — not yet playback-tested" },
          { id: "citifm_gh", name: "Citi 97.3 FM (Ghana)", stream: "http://38.96.175.97:4242/;stream.mp3", verified: false, note: "low confidence, numeric-IP host, single source — not yet playback-tested, may not work" },
          { id: "adomfm_gh", name: "Adom FM 106.3 (Ghana)", stream: "http://bc-node-zeno-ovh-05.radiojar.com/c342hbt4wewtv", verified: false, note: "low confidence, third-party CDN — not yet playback-tested, may not work" },
          { id: "kassfm_ke", name: "Kass FM (Kenya)", stream: "http://media.kassfm.co.ke:8006/live", verified: false, note: "high confidence, official kassfm.co.ke domain — plain http:// — not yet playback-tested" },
          { id: "capitalfm_ug", name: "Capital FM 91.3 (Kampala, Uganda)", stream: "http://capitalradio-ug.com:8000/capital", verified: false, note: "medium confidence, official domain — plain http:// — not yet playback-tested" },
          { id: "trtfm_tr", name: "TRT FM (Turkey)", stream: "https://radio-trtfm.live.trt.com.tr/master.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence, official trt.com.tr domain — not yet playback-tested" },
          { id: "trtradyo1_tr", name: "TRT Radyo 1 (Turkey)", stream: "http://trtcanlifm-lh.akamaihd.net/i/RADYO1_1@182345/master.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence — plain http:// — not yet playback-tested" },
          { id: "kanbet_il", name: "Kan Bet / Reshet Bet (Israel)", stream: "http://kanlivep2event-i.akamaihd.net/hls/live/749624/749624/playlist.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence, corroborated by 2 sources — plain http:// — not yet playback-tested" },
          { id: "galgalatz_il", name: "Galgalatz (Israel)", stream: "http://glzwizzlv.bynetcdn.com/glglz_mp3", verified: false, note: "high confidence, corroborated by 3 sources — plain http:// — not yet playback-tested" },
          { id: "radiotehran_ir", name: "Radio Tehran / IRIB (Iran)", stream: "http://cdn1.live.irib.ir:1935/channel-live/smil:r-tehran/playlist.m3u8", verified: false, note: "HLS stream (needs hls.js, included) — high confidence, official irib.ir domain — plain http:// — not yet playback-tested" },
          { id: "cybc_r1_cy", name: "CyBC Radio 1 (Cyprus)", stream: "http://r1.cloudskep.com/cybcr/cybc1/icecast.audio", verified: false, note: "low confidence, third-party CDN, not confirmed on CyBC's own site — plain http:// — not yet playback-tested, may not work" }
        ]
      }
    ]
  }
};

// Podcast library: your Pocket Casts OPML export, categorized into groups —
// shown by default in the Podcasts tab. Every show here has no hardcoded
// episodes; clicking one fetches its RSS feed live (fetch() + the browser's
// built-in DOMParser) the exact same way search results do, so the library
// and live search share one code path. A separate keyword search (Enter in
// the search box) queries Apple's iTunes Search API on top of this library
// for shows you haven't subscribed to. To add/remove a show here, edit this
// list — `feedUrl` is the only required field.
const PODCAST_LIBRARY = [
  {
    name: "Security & privacy",
    shows: [
      { name: "We Hack Purple Podcast", feedUrl: "https://feeds.buzzsprout.com/1308235.rss" },
      { name: "The Secure Developer", feedUrl: "https://feeds.simplecast.com/47yfLpm0" },
      { name: "The Official OffSec Podcast", feedUrl: "https://anchor.fm/s/532bea14/podcast/rss" },
      { name: "Cloud Security Podcast", feedUrl: "https://anchor.fm/s/10fb9928/podcast/rss" },
      { name: "The OSINT Curious Project", feedUrl: "https://anchor.fm/s/8992df4/podcast/rss" },
      { name: "Coffee with the Council (PCI Security Standards Council)", feedUrl: "https://anchor.fm/s/849a7df4/podcast/rss" },
      { name: "Security Now (Audio)", feedUrl: "https://feeds.twit.tv/sn.xml" },
      { name: "Troy Hunt's Weekly Update Podcast", feedUrl: "https://www.omnycontent.com/d/playlist/1439345f-6152-486d-a9c2-a6bf0067f2b7/3ba9af7f-3bfb-48fd-aae7-a6bf00689c10/fde26e49-9fb8-457d-8f16-a6bf00696676/podcast.rss" },
      { name: "Surveillance Report: Weekly News for Digital Freedom", feedUrl: "https://feeds.transistor.fm/techlore-surveillance-report" },
      { name: "Application Security Weekly (Audio)", feedUrl: "https://rss.libsyn.com/shows/112257/destinations/626765.xml" },
      { name: "The OWASP Podcast Series", feedUrl: "https://feeds.soundcloud.com/users/soundcloud:users:63303345/sounds.rss" },
      { name: "The Application Security Podcast", feedUrl: "https://rss.buzzsprout.com/1730684.rss" },
      { name: "The Privacy, Security, & OSINT Show", feedUrl: "https://feeds.soundcloud.com/users/soundcloud:users:261098918/sounds.rss" }
    ]
  },
  {
    name: "Business & finance",
    shows: [
      { name: "2 Minute Money Manager", feedUrl: "https://feeds.redcircle.com/7b571c92-17c0-4d66-bd29-e5a26706b3c8" },
      { name: "BaKhabar | Macro Pakistani x Investors Lounge", feedUrl: "https://anchor.fm/s/5e1d6b3c/podcast/rss" },
      { name: "All the Hacks: Money, Points & Life", feedUrl: "https://feeds.transistor.fm/all-the-hacks" },
      { name: "Sarmaaya.pk", feedUrl: "https://anchor.fm/s/b5422d08/podcast/rss" },
      { name: "The Smart Passive Income Online Business and Blogging Podcast", feedUrl: "https://rss.art19.com/smart-passive-income-podcast" },
      { name: "It's Not Magic. It's Marketing.", feedUrl: "https://anchor.fm/s/114978b4/podcast/rss" },
      { name: "Money Talks from The Economist", feedUrl: "https://access.acast.com/rss/39fc4a99-8861-437d-81e2-684d13e48f92" },
      { name: "Wamda", feedUrl: "https://feed.podbean.com/wamda/feed.xml" },
      { name: "Guy Kawasaki's Remarkable People", feedUrl: "https://feeds.captivate.fm/guy-kawasakis-remarkable/" },
      { name: "The GaryVee Audio Experience", feedUrl: "https://anchor.fm/s/f39a864/podcast/rss" }
    ]
  },
  {
    name: "Mindset & self-improvement",
    shows: [
      { name: "How to Be a Better Human", feedUrl: "https://feeds.acast.com/public/shows/67572b3b2dd88df13220eb3b" },
      { name: "10% Happier with Dan Harris", feedUrl: "https://rss.libsyn.com/shows/570160/destinations/4933335.xml" },
      { name: "Fixable", feedUrl: "https://feeds.acast.com/public/shows/67572068d59c6635eea1c5fc" },
      { name: "Thought Behind Things", feedUrl: "https://anchor.fm/s/36c5ffa4/podcast/rss" },
      { name: "On Purpose with Jay Shetty", feedUrl: "https://feeds.megaphone.fm/on-purpose" },
      { name: "Good Inside with Dr. Becky", feedUrl: "https://feeds.simplecast.com/Y5N0xWWZ" }
    ]
  },
  {
    name: "Pakistani & Urdu",
    shows: [
      { name: "BBC Urdu", feedUrl: "https://audioboom.com/channels/2477304.rss" },
      { name: "The Pakistan Experience", feedUrl: "https://anchor.fm/s/d124a00/podcast/rss" },
      { name: "Jashn-e-Rekhta", feedUrl: "https://anchor.fm/s/ec95805c/podcast/rss" },
      { name: "بات سرحد پار", feedUrl: "https://podcasts.files.bbci.co.uk/p0clc9zw.rss" },
      { name: "Urdunama", feedUrl: "https://feeds.megaphone.fm/ISP1112733809" },
      { name: "ڈرامہ کوئین (Drama Queen)", feedUrl: "https://podcasts.files.bbci.co.uk/p0c04t7w.rss" }
    ]
  },
  {
    name: "Tech & dev",
    shows: [
      { name: "Hanselminutes with Scott Hanselman", feedUrl: "https://feeds.simplecast.com/gvtxUiIf" },
      { name: "Software Engineering Unlocked", feedUrl: "https://feeds.simplecast.com/K1_mv0CJ" },
      { name: "Karachi Wala Developer", feedUrl: "https://anchor.fm/s/22de9c80/podcast/rss" },
      { name: "Accidental Tech Podcast", feedUrl: "https://cdn.atp.fm/rss/public?wtvryzdm" }
    ]
  },
  {
    name: "Ideas & talks",
    shows: [
      { name: "TED Talks Daily", feedUrl: "https://feeds.acast.com/public/shows/67587e77c705e441797aff96" },
      { name: "Talks at Google", feedUrl: "https://rss.libsyn.com/shows/127538/destinations/765869.xml" },
      { name: "TED Radio Hour", feedUrl: "https://feeds.npr.org/510298/podcast.xml" }
    ]
  },
  {
    name: "News & current affairs",
    shows: [
      { name: "NPR News Now", feedUrl: "https://feeds.npr.org/500005/podcast.xml" },
      { name: "The Daily", feedUrl: "https://feeds.simplecast.com/Sl5CSM3S" }
    ]
  },
  {
    name: "Language learning",
    shows: [
      { name: "6 Minute English", feedUrl: "https://podcasts.files.bbci.co.uk/p02pc9tn.rss" },
      { name: "Learning English Vocabulary", feedUrl: "https://podcasts.files.bbci.co.uk/p02pc9xz.rss" }
    ]
  },
];

// ---------------------------------------------------------------------------
// Flatten catalog into a lookup + ordered play list per region
// ---------------------------------------------------------------------------
const REGION_IDS = Object.keys(CATALOG);
const STATION_INDEX = {}; // id -> { station, regionId, groupName }
const REGION_ORDER = {}; // regionId -> [stationId,...] in display order

REGION_IDS.forEach((regionId) => {
  REGION_ORDER[regionId] = [];
  CATALOG[regionId].groups.forEach((group) => {
    group.stations.forEach((station) => {
      STATION_INDEX[station.id] = { station, regionId, groupName: group.name };
      REGION_ORDER[regionId].push(station.id);
    });
  });
});

const STORAGE_KEY_REGION = "ykr_region";
const STORAGE_KEY_STATION = "ykr_station";
const STORAGE_KEY_VOLUME = "ykr_volume";
const STORAGE_KEY_THEME = "ykr_theme";
const STORAGE_KEY_SPEED = "ykr_speed";
// Podcast Index credentials (for the 🌍 World Podcasts browse list) — stored
// only in this browser's localStorage, never anywhere else. See the
// settings popover (⚙ icon, top right) and podcastIndexAuthHeaders() below.
const STORAGE_KEY_PI_KEY = "ykr_pi_key";
const STORAGE_KEY_PI_SECRET = "ykr_pi_secret";

// Playback speed — podcast episodes only. Live radio streams have no
// meaningful "speed": there's no future content to fast-forward into, so
// the control is hidden whenever a live station is loaded.
const SPEEDS = [0.5, 1, 1.5, 2];

// Six selectable color themes — see the matching :root[data-theme="…"]
// blocks at the top of style.css for each palette's actual color values.
const THEMES = [
  { id: "terminal", label: "Terminal" },
  { id: "black", label: "Black" },
  { id: "red", label: "Red" },
  { id: "blue", label: "Blue" },
  { id: "gray", label: "Gray" },
  { id: "white", label: "White" }
];

// ---------------------------------------------------------------------------
// DOM refs
// ---------------------------------------------------------------------------
const $ = (sel) => document.querySelector(sel);

const audio = $("#audio");
const regionTabs = $("#regionTabs");
const searchInput = $("#searchInput");
const searchHint = $("#searchHint");
const stationList = $("#stationList");
const playBtn = $("#playBtn");
const iconPlay = $("#iconPlay");
const iconPause = $("#iconPause");
const iconLoad = $("#iconLoad");
const npFlag = $("#npFlag");
const npStation = $("#npStation");
const npStatus = $("#npStatus");
const playerTitle = $("#playerTitle");
const playerSub = $("#playerSub");
const volumeSlider = $("#volume");
const clockEl = $("#clock");
const listenerCountEl = $("#listenerCount");
const fullscreenBtn = $("#fullscreenBtn");
const themeBtn = $("#themeBtn");
const themeMenu = $("#themeMenu");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const speedSwitcher = $("#speedSwitcher");
const speedBtn = $("#speedBtn");
const speedMenu = $("#speedMenu");
const settingsBtn = $("#settingsBtn");
const settingsPanel = $("#settingsPanel");
const piKeyInput = $("#piKeyInput");
const piSecretInput = $("#piSecretInput");
const piSaveBtn = $("#piSaveBtn");
const piClearBtn = $("#piClearBtn");
const piStatus = $("#piStatus");
const speedLabel = $("#speedLabel");
const progressWrap = $("#progressWrap");
const progressBar = $("#progressBar");
const progressFill = $("#progressFill");
const timeCurrent = $("#timeCurrent");
const timeTotal = $("#timeTotal");
const liveTag = $("#liveTag");

let mode = "radio"; // "radio" | "podcast"
let currentRegion = "pakistan";
let currentStationId = null;
let isPlaying = false;
let isLoading = false;
let currentSpeed = 1;

// Podcast state
let podcastView = "library"; // "library" | "searching" | "results" | "loading-episodes" | "episodes" | "error"
let podcastReturnView = "library"; // where "← back" goes from an episode list: "library" or "results"
let podcastResults = []; // shows from iTunes search: {name, artist, feedUrl, genre}
let podcastActiveShow = null; // the show whose episodes are currently listed
let podcastEpisodes = []; // [{title, date, url}] for podcastActiveShow
let podcastError = "";
let podcastCurrentEpisode = null; // {title, date, url, showName} of whatever's loaded in the player

// World Podcasts state (Podcast Index-backed browse list, reachable from
// the podcast library via a pinned row). podcastView === "world" is its
// own screen, sharing the show/episode machinery below with the rest of
// the podcast tab.
let worldStatus = "idle"; // "idle" | "no-key" | "loading" | "loaded" | "error"
let worldPodcasts = []; // shows from Podcast Index: {name, artist, feedUrl, genre}
let worldError = "";

// ---------------------------------------------------------------------------
// Rendering: region tabs
// ---------------------------------------------------------------------------
function buildRegionTabs() {
  const tabs = [...REGION_IDS.map((id) => ({ id, label: `${CATALOG[id].flag} ${CATALOG[id].label}` })), { id: "podcasts", label: "🎙 Podcasts" }];

  tabs.forEach((tab) => {
    const btn = document.createElement("button");
    btn.className = "tab";
    btn.type = "button";
    btn.dataset.tab = tab.id;
    btn.textContent = tab.label;
    btn.addEventListener("click", () => {
      if (tab.id === "podcasts") {
        mode = "podcast";
        podcastView = "library";
        podcastActiveShow = null;
        podcastError = "";
      } else {
        mode = "radio";
        currentRegion = tab.id;
        localStorage.setItem(STORAGE_KEY_REGION, currentRegion);
      }
      searchInput.value = "";
      renderList();
      updateTabHighlight();
      updateSearchHint();
    });
    regionTabs.appendChild(btn);
  });
}

function updateTabHighlight() {
  const activeId = mode === "podcast" ? "podcasts" : currentRegion;
  regionTabs.querySelectorAll(".tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === activeId);
  });
}

// ---------------------------------------------------------------------------
// Rendering: station / episode list
// ---------------------------------------------------------------------------
function renderList() {
  stationList.innerHTML = "";
  const query = searchInput.value.trim().toLowerCase();

  if (mode === "podcast") {
    renderPodcastList(query);
    return;
  }

  const region = CATALOG[currentRegion];
  region.groups.forEach((group) => {
    const matches = group.stations.filter((s) => s.name.toLowerCase().includes(query));
    if (matches.length === 0) return;

    const heading = document.createElement("div");
    heading.className = "group-heading";
    heading.textContent = `# ${group.name}`;
    stationList.appendChild(heading);

    matches.forEach((station) => {
      stationList.appendChild(buildStationRow(station));
    });
  });

  if (stationList.children.length === 0) {
    stationList.appendChild(buildEmptyState("no stations match that search"));
  }
}

function buildStationRow(station) {
  const row = document.createElement("button");
  row.type = "button";
  row.className = "row";
  row.dataset.id = station.id;
  row.classList.toggle("row-active", mode === "radio" && station.id === currentStationId);
  row.classList.toggle("row-unverified", station.verified === false);

  const dot = document.createElement("span");
  dot.className = "row-dot";

  const name = document.createElement("span");
  name.className = "row-name";
  name.textContent = station.name;

  const tags = document.createElement("span");
  tags.className = "row-tags";
  if (station.tag) {
    const t = document.createElement("span");
    t.className = "tag tag-blue";
    t.textContent = station.tag;
    tags.appendChild(t);
  }
  if (station.verified === false) {
    const t = document.createElement("span");
    t.className = "tag tag-red";
    t.textContent = "unverified";
    t.title = station.note || "could not confirm this stream is live";
    tags.appendChild(t);
  }

  row.appendChild(dot);
  row.appendChild(name);
  row.appendChild(tags);
  row.addEventListener("click", () => selectStation(station.id, { autoplay: true }));
  return row;
}

function renderPodcastList(query) {
  if (podcastView === "episodes" || podcastView === "loading-episodes") {
    renderBackRow(podcastView === "episodes" ? `# ${podcastActiveShow.name}` : "# loading…");
    if (podcastView === "loading-episodes") {
      stationList.appendChild(buildEmptyState("fetching episodes…"));
      return;
    }
    if (podcastError) {
      stationList.appendChild(buildEmptyState(podcastError));
      return;
    }
    const matches = podcastEpisodes.filter((ep) => ep.title.toLowerCase().includes(query));
    matches.forEach((ep) => stationList.appendChild(buildEpisodeRow(ep, podcastActiveShow.name)));
    if (matches.length === 0) stationList.appendChild(buildEmptyState("no episodes match that search"));
    return;
  }

  if (podcastView === "searching") {
    stationList.appendChild(buildEmptyState("searching podcasts…"));
    return;
  }

  if (podcastView === "error" && podcastResults.length === 0) {
    stationList.appendChild(buildEmptyState(podcastError));
    return;
  }

  if (podcastView === "results") {
    const heading = document.createElement("div");
    heading.className = "group-heading";
    heading.textContent = "# search results";
    stationList.appendChild(heading);

    const matches = podcastResults.filter((s) => (s.name + " " + s.artist).toLowerCase().includes(query));
    matches.forEach((show) => stationList.appendChild(buildShowRow(show, "results")));
    if (matches.length === 0) stationList.appendChild(buildEmptyState("no shows match that search"));
    return;
  }

  if (podcastView === "world") {
    const back = document.createElement("button");
    back.type = "button";
    back.className = "row row-back";
    back.textContent = "← back to your podcasts";
    back.addEventListener("click", () => {
      podcastView = "library";
      renderList();
      updateSearchHint();
    });
    stationList.appendChild(back);

    const heading = document.createElement("div");
    heading.className = "group-heading";
    heading.textContent = "# 🌍 world podcasts — trending (via Podcast Index)";
    stationList.appendChild(heading);

    if (worldStatus === "no-key") {
      stationList.appendChild(buildEmptyState("add a free Podcast Index API key in Settings (⚙ icon, top right) to browse this"));
      return;
    }
    if (worldStatus === "loading") {
      stationList.appendChild(buildEmptyState("loading trending podcasts from Podcast Index…"));
      return;
    }
    if (worldStatus === "error") {
      stationList.appendChild(buildEmptyState(worldError));
      return;
    }
    const matches = worldPodcasts.filter((s) => (s.name + " " + s.artist).toLowerCase().includes(query));
    matches.forEach((show) => stationList.appendChild(buildShowRow(show, "world")));
    if (matches.length === 0) stationList.appendChild(buildEmptyState("no shows match that search"));
    return;
  }

  // library — your subscriptions, categorized
  if (!query) stationList.appendChild(buildWorldEntryRow());
  PODCAST_LIBRARY.forEach((group) => {
    const matches = group.shows.filter((s) => s.name.toLowerCase().includes(query));
    if (matches.length === 0) return;

    const heading = document.createElement("div");
    heading.className = "group-heading";
    heading.textContent = `# ${group.name}`;
    stationList.appendChild(heading);

    matches.forEach((show) => stationList.appendChild(buildShowRow(show, "library")));
  });

  if (stationList.children.length === 0) {
    stationList.appendChild(buildEmptyState("no shows match that search — try Enter to search all podcasts"));
  }
}

function renderBackRow(headingText) {
  const back = document.createElement("button");
  back.type = "button";
  back.className = "row row-back";
  back.textContent =
    podcastReturnView === "results" ? "← back to search results" :
    podcastReturnView === "world" ? "← back to world podcasts" :
    "← back to your podcasts";
  back.addEventListener("click", () => {
    podcastView = podcastReturnView;
    podcastActiveShow = null;
    podcastError = "";
    renderList();
    updateSearchHint();
  });
  stationList.appendChild(back);

  const heading = document.createElement("div");
  heading.className = "group-heading";
  heading.textContent = headingText;
  stationList.appendChild(heading);
}

function buildShowRow(show, fromView) {
  const row = document.createElement("button");
  row.type = "button";
  row.className = "row";
  const dot = document.createElement("span");
  dot.className = "row-dot";
  const name = document.createElement("span");
  name.className = "row-name";
  name.textContent = show.artist ? `${show.name} — ${show.artist}` : show.name;
  const tags = document.createElement("span");
  tags.className = "row-tags";
  if (show.genre) {
    const t = document.createElement("span");
    t.className = "tag tag-grey";
    t.textContent = show.genre;
    tags.appendChild(t);
  }
  row.appendChild(dot);
  row.appendChild(name);
  row.appendChild(tags);
  row.addEventListener("click", () => openShow(show, fromView));
  return row;
}

function buildWorldEntryRow() {
  const row = document.createElement("button");
  row.type = "button";
  row.className = "row row-world";
  const dot = document.createElement("span");
  dot.className = "row-dot";
  const name = document.createElement("span");
  name.className = "row-name";
  name.textContent = "🌍 Browse World Podcasts (Podcast Index)";
  const tags = document.createElement("span");
  tags.className = "row-tags";
  if (!hasPodcastIndexKey()) {
    const t = document.createElement("span");
    t.className = "tag tag-grey";
    t.textContent = "needs API key";
    tags.appendChild(t);
  }
  row.appendChild(dot);
  row.appendChild(name);
  row.appendChild(tags);
  row.addEventListener("click", openWorldPodcasts);
  return row;
}

function buildEpisodeRow(ep, showName) {
  const row = document.createElement("button");
  row.type = "button";
  row.className = "row";
  const isActive = mode === "podcast" && podcastCurrentEpisode && podcastCurrentEpisode.url === ep.url;
  row.classList.toggle("row-active", isActive);

  const dot = document.createElement("span");
  dot.className = "row-dot";
  const name = document.createElement("span");
  name.className = "row-name";
  name.textContent = ep.title;
  const tags = document.createElement("span");
  tags.className = "row-tags";
  if (ep.date) {
    const t = document.createElement("span");
    t.className = "tag tag-grey";
    t.textContent = ep.date;
    tags.appendChild(t);
  }

  row.appendChild(dot);
  row.appendChild(name);
  row.appendChild(tags);
  row.addEventListener("click", () => selectPodcastEpisode(ep, showName, { autoplay: true }));
  return row;
}

function buildEmptyState(text) {
  const el = document.createElement("div");
  el.className = "empty-state";
  el.textContent = `// ${text}`;
  return el;
}

// ---------------------------------------------------------------------------
// Playback state helpers
// ---------------------------------------------------------------------------
function setLoadingState(loading) {
  isLoading = loading;
  iconLoad.style.display = loading ? "block" : "none";
  iconPlay.style.display = loading || isPlaying ? "none" : "block";
  iconPause.style.display = !loading && isPlaying ? "block" : "none";
}

function setPlayingState(playing) {
  isPlaying = playing;
  liveTag.classList.toggle("blink", playing);
  setLoadingState(false);
  if (navigator.mediaSession) {
    navigator.mediaSession.playbackState = playing ? "playing" : "paused";
  }
}

// ---------------------------------------------------------------------------
// HLS (.m3u8) playback support
// ---------------------------------------------------------------------------
// Plain <audio src="…"> only plays HLS natively in Safari. Everywhere else
// (Chrome, Firefox, Edge) needs the hls.js library, loaded in index.html
// before this file. loadAudioSource() is the one place that sets what the
// <audio> element plays — every station/episode selection should call this
// instead of touching audio.src directly.
let hls = null; // the current Hls.js instance, if one is attached

function isHlsUrl(url) {
  return /\.m3u8(\?|$)/i.test(url);
}

function loadAudioSource(url) {
  if (hls) {
    hls.destroy();
    hls = null;
  }
  audio.removeAttribute("src");

  if (isHlsUrl(url)) {
    if (window.Hls && window.Hls.isSupported()) {
      hls = new window.Hls();
      hls.on(window.Hls.Events.ERROR, (_evt, data) => {
        if (data && data.fatal) {
          setPlayingState(false);
          setLoadingState(false);
          npStatus.textContent = "stream unavailable — try another";
        }
      });
      hls.loadSource(url);
      hls.attachMedia(audio);
      return;
    }
    if (audio.canPlayType("application/vnd.apple.mpegurl")) {
      audio.src = url; // Safari: native HLS, no library needed
      return;
    }
    // Neither hls.js nor native HLS support (very old browser) — fall
    // through so the browser's own error event reports it as unplayable.
  }
  audio.src = url;
}

// ---------------------------------------------------------------------------
// Radio station selection
// ---------------------------------------------------------------------------
function selectStation(id, { autoplay = false } = {}) {
  const entry = STATION_INDEX[id];
  if (!entry) return;
  const { station, regionId } = entry;

  mode = "radio";
  currentRegion = regionId;
  currentStationId = id;
  localStorage.setItem(STORAGE_KEY_STATION, id);
  localStorage.setItem(STORAGE_KEY_REGION, regionId);

  progressWrap.hidden = true;
  speedSwitcher.hidden = true;
  liveTag.hidden = false;
  npFlag.textContent = CATALOG[regionId].flag;
  npStation.textContent = station.name;
  playerTitle.textContent = station.name;
  playerSub.textContent = `${CATALOG[regionId].label}${station.tag ? " · " + station.tag : ""}`;
  npStatus.textContent = autoplay ? "connecting…" : "press play to tune in";

  updateMediaSessionMetadata(station.name, CATALOG[regionId].label);
  renderList();
  updateTabHighlight();

  audio.pause();
  loadAudioSource(station.stream);
  audio.playbackRate = 1; // live radio always plays at normal speed
  if (autoplay) {
    tunePlay();
  } else {
    setPlayingState(false);
  }
}

// ---------------------------------------------------------------------------
// Podcast episode selection
// ---------------------------------------------------------------------------
function selectPodcastEpisode(episode, showName, { autoplay = false } = {}) {
  mode = "podcast";
  currentStationId = null;
  podcastCurrentEpisode = { ...episode, showName };

  progressWrap.hidden = false;
  speedSwitcher.hidden = false;
  liveTag.hidden = true;
  npFlag.textContent = "🎙";
  npStation.textContent = episode.title;
  playerTitle.textContent = episode.title;
  playerSub.textContent = episode.date ? `${showName} · ${episode.date}` : showName;
  npStatus.textContent = autoplay ? "loading episode…" : "press play";

  updateMediaSessionMetadata(episode.title, showName);
  renderList();

  audio.pause();
  loadAudioSource(episode.url);
  audio.playbackRate = currentSpeed;
  if (autoplay) {
    tunePlay();
  } else {
    setPlayingState(false);
  }
}

// ---------------------------------------------------------------------------
// Podcast search (client-side: iTunes Search API + direct RSS fetch)
// ---------------------------------------------------------------------------
async function doPodcastSearch(term) {
  if (!term) {
    podcastView = "library";
    renderList();
    return;
  }
  podcastView = "searching";
  renderList();

  try {
    const res = await fetch(`https://itunes.apple.com/search?media=podcast&limit=20&term=${encodeURIComponent(term)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    podcastResults = (data.results || [])
      .filter((r) => r.feedUrl)
      .map((r) => ({
        id: String(r.collectionId),
        name: r.collectionName || r.trackName || "Untitled show",
        artist: r.artistName || "",
        feedUrl: r.feedUrl,
        genre: (r.genres && r.genres[0]) || ""
      }));
    podcastView = podcastResults.length ? "results" : "error";
    podcastError = podcastResults.length ? "" : "no shows found for that search";
  } catch (err) {
    podcastView = "error";
    podcastError = "search failed — network error or the search API is unreachable right now";
  }
  renderList();
  updateSearchHint();
}

async function openShow(show, fromView) {
  podcastActiveShow = show;
  podcastReturnView = fromView || "library";
  podcastView = "loading-episodes";
  podcastError = "";
  renderList();

  try {
    const res = await fetch(show.feedUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    podcastEpisodes = parseRssEpisodes(text).slice(0, 20);
    if (podcastEpisodes.length === 0) {
      podcastError = "this feed loaded but no playable episodes were found in it";
    }
  } catch (err) {
    podcastEpisodes = [];
    podcastError = "couldn't load this show's episodes — its feed may block cross-origin browser fetches. try another show.";
  }
  podcastView = "episodes";
  renderList();
  updateSearchHint();
}

// ---------------------------------------------------------------------------
// World Podcasts (Podcast Index — https://podcastindex.org/developer)
// ---------------------------------------------------------------------------
// Podcast Index requires a free API key + secret, entered via the Settings
// popover (⚙ icon, top right) and kept only in this browser's localStorage.
// Their auth scheme is documented as sha1(apiKey + apiSecret + unixTime) —
// see podcastindex-org.github.io/docs-api. Their docs give only server-side
// (PHP/.NET) examples and don't mention CORS, so whether a direct browser
// fetch() to their API is actually allowed is unconfirmed as of this build;
// if it isn't, the fetch below fails and openWorldPodcasts() reports that
// plainly instead of silently breaking.
function hasPodcastIndexKey() {
  try {
    return !!(localStorage.getItem(STORAGE_KEY_PI_KEY) && localStorage.getItem(STORAGE_KEY_PI_SECRET));
  } catch (e) {
    return false;
  }
}

async function podcastIndexAuthHeaders() {
  const key = localStorage.getItem(STORAGE_KEY_PI_KEY) || "";
  const secret = localStorage.getItem(STORAGE_KEY_PI_SECRET) || "";
  const apiHeaderTime = Math.floor(Date.now() / 1000);
  const toHash = key + secret + apiHeaderTime;
  const digest = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(toHash));
  const authHash = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return {
    "X-Auth-Key": key,
    "X-Auth-Date": String(apiHeaderTime),
    "Authorization": authHash
    // Podcast Index's docs also ask for a User-Agent header, but browsers
    // block scripts from setting that on fetch() (it's a forbidden header
    // name) — the browser sends its own instead. Not something we can fix
    // client-side, and Podcast Index doesn't document it as required.
  };
}

async function openWorldPodcasts() {
  podcastView = "world";

  if (!hasPodcastIndexKey()) {
    worldStatus = "no-key";
    renderList();
    updateSearchHint();
    return;
  }

  // Already loaded this session — just show it, no need to re-fetch.
  if (worldStatus === "loaded" && worldPodcasts.length) {
    renderList();
    updateSearchHint();
    return;
  }

  worldStatus = "loading";
  renderList();
  updateSearchHint();

  try {
    const headers = await podcastIndexAuthHeaders();
    const res = await fetch("https://api.podcastindex.org/api/1.0/podcasts/trending?max=30&lang=en", { headers });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    worldPodcasts = (data.feeds || [])
      .filter((f) => f.url)
      .map((f) => ({
        id: String(f.id),
        name: f.title || "Untitled show",
        artist: f.author || "",
        feedUrl: f.url,
        genre: (f.categories && Object.values(f.categories)[0]) || ""
      }));
    worldStatus = worldPodcasts.length ? "loaded" : "error";
    worldError = worldPodcasts.length ? "" : "Podcast Index returned no trending shows right now — try again later";
  } catch (err) {
    worldStatus = "error";
    worldError = "couldn't reach Podcast Index — this may be a CORS restriction, an invalid key, or a network error. Check the key in Settings, or try again later.";
  }
  renderList();
  updateSearchHint();
}

function parseRssEpisodes(xmlText) {
  let doc;
  try {
    doc = new DOMParser().parseFromString(xmlText, "text/xml");
    if (doc.querySelector("parsererror")) return [];
  } catch {
    return [];
  }
  const items = Array.from(doc.querySelectorAll("item"));
  return items
    .map((item) => {
      const enclosure = item.getElementsByTagName("enclosure")[0];
      const url = enclosure ? enclosure.getAttribute("url") : null;
      if (!url) return null;
      const titleEl = item.getElementsByTagName("title")[0];
      const pubDateEl = item.getElementsByTagName("pubDate")[0];
      let date = "";
      if (pubDateEl && pubDateEl.textContent) {
        const d = new Date(pubDateEl.textContent);
        if (!Number.isNaN(d.getTime())) date = d.toISOString().slice(0, 10);
      }
      return {
        title: titleEl ? titleEl.textContent.trim() : "Untitled episode",
        date,
        url
      };
    })
    .filter(Boolean);
}

function updateSearchHint() {
  if (mode !== "podcast") {
    searchHint.textContent = "";
    return;
  }
  if (podcastView === "episodes" || podcastView === "loading-episodes") {
    searchHint.textContent = "filtering this show's episodes — back out to browse or search a different show";
  } else if (podcastView === "results") {
    searchHint.textContent = "filtering search results — clear the box + Enter to return to your podcasts";
  } else if (podcastView === "world") {
    searchHint.textContent = "filtering world podcasts — back out to return to your podcasts";
  } else {
    searchHint.textContent = "filtering your podcasts — type a show name or topic + Enter to search all podcasts";
  }
}

function updateMediaSessionMetadata(title, subtitle) {
  if (!("mediaSession" in navigator)) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title,
    artist: subtitle,
    album: "Yaadon Ka Radio"
  });
}

function tunePlay() {
  setLoadingState(true);
  npStatus.textContent = mode === "podcast" ? "loading episode…" : "connecting…";
  audio.play().catch(() => {
    npStatus.textContent = "tap play again";
    setLoadingState(false);
  });
}

function togglePlay() {
  if (isLoading) return;
  // hls.js assigns audio.src (a MediaSource blob: URL) asynchronously after
  // attachMedia(), so `hls` being set counts as "a source is loaded" too.
  if (!audio.src && !hls) return;
  if (isPlaying) {
    audio.pause();
    npStatus.textContent = "paused";
  } else {
    tunePlay();
  }
}

// ---------------------------------------------------------------------------
// Audio element events
// ---------------------------------------------------------------------------
audio.addEventListener("playing", () => {
  setPlayingState(true);
  npStatus.textContent = mode === "podcast" ? "playing" : "on air";
  // Some browsers reset playbackRate when a new source starts playing —
  // re-assert it here so a chosen podcast speed always sticks.
  audio.playbackRate = mode === "podcast" ? currentSpeed : 1;
});
audio.addEventListener("waiting", () => setLoadingState(true));
audio.addEventListener("pause", () => {
  if (!isLoading) setPlayingState(false);
});
audio.addEventListener("ended", () => {
  setPlayingState(false);
  npStatus.textContent = "ended";
});
audio.addEventListener("error", () => {
  setPlayingState(false);
  setLoadingState(false);
  npStatus.textContent = "stream unavailable — try another";
});
audio.addEventListener("timeupdate", () => {
  if (mode !== "podcast" || !audio.duration || Number.isNaN(audio.duration)) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${pct}%`;
  timeCurrent.textContent = formatTime(audio.currentTime);
  timeTotal.textContent = formatTime(audio.duration);
});
progressBar.addEventListener("click", (e) => {
  if (mode !== "podcast" || !audio.duration) return;
  const rect = progressBar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pct * audio.duration;
});

function formatTime(sec) {
  if (!Number.isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

playBtn.addEventListener("click", togglePlay);
searchInput.addEventListener("input", renderList);
searchInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  if (mode !== "podcast") return;
  if (podcastView === "episodes" || podcastView === "loading-episodes" || podcastView === "world") return;
  e.preventDefault();
  doPodcastSearch(searchInput.value.trim());
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && document.activeElement.tagName !== "BUTTON" && document.activeElement.tagName !== "INPUT") {
    e.preventDefault();
    togglePlay();
  }
});

// Volume
(function initVolume() {
  const saved = parseFloat(localStorage.getItem(STORAGE_KEY_VOLUME));
  const initial = Number.isFinite(saved) ? saved : 0.8;
  audio.volume = initial;
  volumeSlider.value = String(initial);
})();
volumeSlider.addEventListener("input", () => {
  const v = parseFloat(volumeSlider.value);
  audio.volume = v;
  localStorage.setItem(STORAGE_KEY_VOLUME, String(v));
});

// Media session controls (lock screen / OS media keys)
if ("mediaSession" in navigator) {
  navigator.mediaSession.setActionHandler("play", () => tunePlay());
  navigator.mediaSession.setActionHandler("pause", () => audio.pause());
  navigator.mediaSession.setActionHandler("nexttrack", () => stepStation(1));
  navigator.mediaSession.setActionHandler("previoustrack", () => stepStation(-1));
}

function stepStation(delta) {
  if (mode === "radio" && currentStationId) {
    const order = REGION_ORDER[currentRegion];
    const i = order.indexOf(currentStationId);
    const next = order[(i + delta + order.length) % order.length];
    selectStation(next, { autoplay: isPlaying });
  } else if (mode === "podcast" && podcastCurrentEpisode && podcastEpisodes.length) {
    // Steps through whichever show's episode list is currently loaded.
    const i = podcastEpisodes.findIndex((ep) => ep.url === podcastCurrentEpisode.url);
    if (i === -1) return;
    const next = podcastEpisodes[(i + delta + podcastEpisodes.length) % podcastEpisodes.length];
    selectPodcastEpisode(next, podcastCurrentEpisode.showName, { autoplay: isPlaying });
  }
}

// Fullscreen
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
});

// ---------------------------------------------------------------------------
// Theme switcher — six selectable palettes (terminal/black/red/blue/gray/
// white), all driven by the CSS custom properties in style.css. Switching
// just sets data-theme on <html>; every color in the app is var(--x)-based,
// so nothing else needs to change per theme.
// ---------------------------------------------------------------------------
function buildThemeMenu() {
  THEMES.forEach((theme) => {
    const opt = document.createElement("button");
    opt.type = "button";
    opt.className = "theme-opt";
    opt.dataset.theme = theme.id;
    opt.setAttribute("role", "menuitemradio");

    const swatch = document.createElement("span");
    swatch.className = `swatch swatch-${theme.id}`;
    const label = document.createElement("span");
    label.textContent = theme.label;

    opt.appendChild(swatch);
    opt.appendChild(label);
    opt.addEventListener("click", () => {
      applyTheme(theme.id);
      closeThemeMenu();
    });
    themeMenu.appendChild(opt);
  });
}

function applyTheme(themeId) {
  const valid = THEMES.some((t) => t.id === themeId) ? themeId : "terminal";
  document.documentElement.setAttribute("data-theme", valid);
  try {
    localStorage.setItem(STORAGE_KEY_THEME, valid);
  } catch (e) {}

  themeMenu.querySelectorAll(".theme-opt").forEach((opt) => {
    const isActive = opt.dataset.theme === valid;
    opt.classList.toggle("active", isActive);
    opt.setAttribute("aria-checked", String(isActive));
  });

  if (themeColorMeta) {
    const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
    if (bg) themeColorMeta.setAttribute("content", bg);
  }
}

function openThemeMenu() {
  themeMenu.hidden = false;
  themeBtn.setAttribute("aria-expanded", "true");
}
function closeThemeMenu() {
  themeMenu.hidden = true;
  themeBtn.setAttribute("aria-expanded", "false");
}

themeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (themeMenu.hidden) openThemeMenu();
  else closeThemeMenu();
});
document.addEventListener("click", (e) => {
  if (!themeMenu.hidden && !themeMenu.contains(e.target) && e.target !== themeBtn) closeThemeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !themeMenu.hidden) closeThemeMenu();
});

// ---------------------------------------------------------------------------
// Playback speed — 0.5×/1×/1.5×/2×, podcast episodes only (see SPEEDS
// above). Same open/close-popover pattern as the theme switcher, just
// anchored to open upward since this lives in the sticky footer.
// ---------------------------------------------------------------------------
function formatSpeed(rate) {
  return `${rate % 1 === 0 ? rate.toFixed(0) : rate.toFixed(1)}×`;
}

function buildSpeedMenu() {
  SPEEDS.forEach((rate) => {
    const opt = document.createElement("button");
    opt.type = "button";
    opt.className = "speed-opt";
    opt.dataset.rate = String(rate);
    opt.setAttribute("role", "menuitemradio");
    opt.textContent = formatSpeed(rate);
    opt.addEventListener("click", () => {
      setSpeed(rate);
      closeSpeedMenu();
    });
    speedMenu.appendChild(opt);
  });
}

function setSpeed(rate) {
  currentSpeed = SPEEDS.includes(rate) ? rate : 1;
  if (mode === "podcast") audio.playbackRate = currentSpeed;
  speedLabel.textContent = formatSpeed(currentSpeed);
  try {
    localStorage.setItem(STORAGE_KEY_SPEED, String(currentSpeed));
  } catch (e) {}

  speedMenu.querySelectorAll(".speed-opt").forEach((opt) => {
    const isActive = parseFloat(opt.dataset.rate) === currentSpeed;
    opt.classList.toggle("active", isActive);
    opt.setAttribute("aria-checked", String(isActive));
  });
}

function openSpeedMenu() {
  speedMenu.hidden = false;
  speedBtn.setAttribute("aria-expanded", "true");
}
function closeSpeedMenu() {
  speedMenu.hidden = true;
  speedBtn.setAttribute("aria-expanded", "false");
}

speedBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (speedMenu.hidden) openSpeedMenu();
  else closeSpeedMenu();
});
document.addEventListener("click", (e) => {
  if (!speedMenu.hidden && !speedMenu.contains(e.target) && e.target !== speedBtn) closeSpeedMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !speedMenu.hidden) closeSpeedMenu();
});

// ---------------------------------------------------------------------------
// Settings popover — Podcast Index API key + secret. Same open/close-popover
// pattern as the theme and speed switchers.
// ---------------------------------------------------------------------------
function updatePiStatus() {
  if (hasPodcastIndexKey()) {
    piStatus.textContent = "✓ key saved — World Podcasts is ready to browse";
    piStatus.className = "settings-status ok";
  } else {
    piStatus.textContent = "no key saved yet — World Podcasts will ask for one";
    piStatus.className = "settings-status";
  }
}

function loadPiCredentials() {
  let key = "", secret = "";
  try {
    key = localStorage.getItem(STORAGE_KEY_PI_KEY) || "";
    secret = localStorage.getItem(STORAGE_KEY_PI_SECRET) || "";
  } catch (e) {}
  piKeyInput.value = key;
  piSecretInput.value = secret;
  updatePiStatus();
}

function openSettingsPanel() {
  settingsPanel.hidden = false;
  settingsBtn.setAttribute("aria-expanded", "true");
  loadPiCredentials();
}
function closeSettingsPanel() {
  settingsPanel.hidden = true;
  settingsBtn.setAttribute("aria-expanded", "false");
}

settingsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (settingsPanel.hidden) openSettingsPanel();
  else closeSettingsPanel();
});
document.addEventListener("click", (e) => {
  if (!settingsPanel.hidden && !settingsPanel.contains(e.target) && e.target !== settingsBtn) closeSettingsPanel();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !settingsPanel.hidden) closeSettingsPanel();
});

piSaveBtn.addEventListener("click", () => {
  const key = piKeyInput.value.trim();
  const secret = piSecretInput.value.trim();
  try {
    if (key) localStorage.setItem(STORAGE_KEY_PI_KEY, key); else localStorage.removeItem(STORAGE_KEY_PI_KEY);
    if (secret) localStorage.setItem(STORAGE_KEY_PI_SECRET, secret); else localStorage.removeItem(STORAGE_KEY_PI_SECRET);
  } catch (e) {}
  updatePiStatus();
  // A key was just added while World Podcasts was sitting on the
  // "add a key" prompt — try loading it right away instead of making the
  // user click the row again.
  if (podcastView === "world" && worldStatus === "no-key" && hasPodcastIndexKey()) {
    openWorldPodcasts();
  }
  // Refresh the pinned "Browse World Podcasts" row's "needs API key" tag
  // if it's currently on screen.
  if (mode === "podcast" && podcastView === "library") renderList();
});

piClearBtn.addEventListener("click", () => {
  try {
    localStorage.removeItem(STORAGE_KEY_PI_KEY);
    localStorage.removeItem(STORAGE_KEY_PI_SECRET);
  } catch (e) {}
  piKeyInput.value = "";
  piSecretInput.value = "";
  worldStatus = "idle";
  worldPodcasts = [];
  updatePiStatus();
  if (mode === "podcast" && (podcastView === "library" || podcastView === "world")) {
    if (podcastView === "world") podcastView = "library";
    renderList();
  }
});

// Clock
function tickClock() {
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString([], { hour12: false });
}
tickClock();
setInterval(tickClock, 1000);

// Ambient "listeners" counter — a gentle simulated drift, purely decorative.
let listeners = 380 + Math.floor(Math.random() * 400);
function renderListeners() {
  listenerCountEl.textContent = listeners.toLocaleString();
}
renderListeners();
setInterval(() => {
  const delta = Math.floor(Math.random() * 15) - 6;
  listeners = Math.max(120, listeners + delta);
  renderListeners();
}, 4000);

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
buildRegionTabs();
buildThemeMenu();
buildSpeedMenu();
(function boot() {
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
  } catch (e) {}
  applyTheme(savedTheme || "terminal");

  let savedSpeed = null;
  try {
    savedSpeed = parseFloat(localStorage.getItem(STORAGE_KEY_SPEED));
  } catch (e) {}
  setSpeed(SPEEDS.includes(savedSpeed) ? savedSpeed : 1);

  const savedRegion = localStorage.getItem(STORAGE_KEY_REGION);
  currentRegion = REGION_IDS.includes(savedRegion) ? savedRegion : "pakistan";

  const savedStation = localStorage.getItem(STORAGE_KEY_STATION);
  const fallback = REGION_ORDER[currentRegion][0];
  const initialId = STATION_INDEX[savedStation] ? savedStation : fallback;

  updateTabHighlight();
  updateSearchHint();
  selectStation(initialId, { autoplay: false });
})();
