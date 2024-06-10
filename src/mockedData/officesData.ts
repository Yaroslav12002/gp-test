type OfficeItem = {
  id: string;
  area: string;
  building: string;
  purpose: string;
  photos: string[];
};

type OfficesData = {
  category1000: OfficeItem[];
  category500: OfficeItem[];
  category300: OfficeItem[];
  category200: OfficeItem[];
  category100: OfficeItem[];
  categoryLess100: OfficeItem[];
};

export const officesData: OfficesData = {
  category1000: [
    {
      id: "4(А,В,С)-301(Ф)",
      area: "2062,50",
      building: "4",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717611487/136_gwrh3p.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717611486/127_ocwwrk.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717611486/132_zqhppf.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717611831/4_%D0%90_%D0%92_%D0%A1_-301_%D0%A4__page-0001_1_hoigit.jpg",
      ],
    },
    {
      id: "4(А,В,С)-601(Ф)",
      area: "2062,94",
      building: "4",
      purpose: "Офісне приміщення",
      photos: [
        "",
        "",
        "",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717685018/4_%D0%90_%D0%92_%D0%A1_-601_%D0%A4_oav0lo.jpg",
      ],
    },
    {
      id: "5(А)-201(Б)",
      area: "1868,45",
      building: "5",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717612726/IMG_2144_vrm35c.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717612723/IMG_1023_j8qzfw.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717612725/IMG_2147_qvbpxh.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717612876/5_%D0%90_-201_%D0%91__page-0001_dls1wj.jpg",
      ],
    },
    {
      id: "5(А)-301",
      area: "1760,65",
      building: "5",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678476/204_kp2jfs.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678473/203_da3l0z.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678471/202_reyv7s.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678467/201_d2twu3.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678465/200_zqvmyf.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678463/199_oo2yiq.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678462/197_ntd55j.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678481/5-301_page-0001_uldr5y.jpg",
      ],
    },
    {
      id: "5(А)-401(Б)",
      area: "1744,74",
      building: "5",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717613200/218_ajfrj5.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717613198/212_rpmati.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717613198/212_rpmati.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717613358/5_%D0%90_-401_%D0%91_3__page-0001_kftqfa.jpg",
      ],
    },
  ],

  category500: [
    {
      id: "2(D)-305(Р)",
      area: "675,43",
      building: "2",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717665922/871_nvqq0q.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717665922/880_zzspcj.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717665922/867_ta0osg.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717665980/2_D__305_%D0%A0__page-0001_fetul9.jpg",
      ],
    },
    {
      id: "4(А)-202(Ф)",
      area: "805,38",
      building: "4",
      purpose: "Офісне приміщення",
      photos: ["", "", "", ""],
    },
    {
      id: "4(А)-402(Ф)",
      area: "932,36",
      building: "4",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666231/961_d6xcml.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666296/967_kyfhw6.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666294/963_kncbhf.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666234/978_myqgrs.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666232/965_piukst.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666363/4_%D0%90_-402_%D0%A4__page-0001_ikwxpc.jpg",
      ],
    },
    {
      id: "4(А)-502(Ф)",
      area: "841,92",
      building: "4",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666562/137_gkdrdi.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666561/134_orpnpz.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666563/140_syxopu.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666564/143_m7aihy.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666566/144_yfd4rp.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717666567/147_ssmqm8.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717684812/4_%D0%90_-502_%D0%A4_1_wryclq.jpg",
      ],
    },
    {
      id: "5(А)-503/2(Б)",
      area: "523,93",
      building: "5",
      purpose: "Офісне приміщення",
      photos: ["", "", "", ""],
    },
  ],

  category300: [
    {
      id: "2(D)-204(Р)",
      area: "509,80",
      building: "2",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717667228/901_l4u3dc.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717667240/903_h6scji.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717667241/904_wscui8.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717667243/906_epzdph.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717667245/911_nx52gp.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717667247/916_egkfhn.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717667272/2_D_-204_%D0%A0__page-0001_ue3aw4.jpg",
      ],
    },
    {
      id: "2(D)-401(Р)",
      area: "464,20",
      building: "2",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717673856/165_fml2p0.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717673856/162_vyayvv.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717673856/167_u2ms7c.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717673917/2_D_-401_%D0%A0__page-0001_swoy9w.jpg",
      ],
    },
    {
      id: "4(A)-201(Ф)",
      area: "420,31",
      building: "4",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674244/115_opev9c.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674244/114_ijhrpe.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674242/108_fqblxh.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674242/107_eutgcu.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674243/113_oqgyez.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674518/4_A_-201_%D0%A4__page-0001_dwhsw7.jpg",
      ],
    },
    {
      id: "4(B)-204(Ф)",
      area: "476,30",
      building: "4",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674752/152_wxltil.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674752/151_mxyfle.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674750/150_ib72jg.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674798/4_B_-204_%D0%A4__page-0001_g6v4we.jpg",
      ],
    },
    {
      id: "4(В)-203(Ф)",
      area: "415,69",
      building: "4",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674968/181_kjgduz.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674971/185_tise7e.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674970/182_dowsls.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674966/175_nebi8a.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717674966/173_qpiy0d.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717684908/4%D0%92-203_%D0%A4___1_n3trsu.jpg",
      ],
    },
  ],

  category200: [
    {
      id: "2(С)-109(Р)",
      area: "305,80",
      building: "2",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675195/52_idv0d5.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675201/59_xfeyq8.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675200/57_bftylz.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675197/56_nnrwwz.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675193/51_b6tqtq.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675191/50_ek0gmk.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675187/48_uf6zqb.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675342/2_%D0%A1_-109_%D0%A0__page-0001_khacm0.jpg",
      ],
    },
    {
      id: "3(A)-202(Ф)",
      area: "230,45",
      building: "3",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675490/37_erelif.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675484/35_pde6y2.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675492/38_n6nyvh.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675497/41_en6jgy.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675499/42_alhgqc.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675502/43_y2aeiz.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675504/45_qtceja.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675719/3_A_-202_%D0%A4__page-0001_ooknmh.jpg",
      ],
    },
    {
      id: "4(B)-403(Ф)",
      area: "308,99",
      building: "4",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675869/IMG_2154_s4apji.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675881/IMG_2156_ipdeig.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675885/IMG_2160_m5obvj.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717675891/4_B_-403_%D0%A4__page-0001_ivhzfx.jpg",
      ],
    },
  ],

  category100: [
    {
      id: "1(А)-201(Х)",
      area: "180,73",
      building: "1",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717676203/850_xlnidp.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717676200/849_ug9ubd.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717676206/851_qt8cjh.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717676210/852_xnqqaq.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717676783/1_%D0%90_-201_%D0%A5__page-0001_yiaezg.jpg",
      ],
    },
    {
      id: "2(А,В)-302",
      area: "160,63",
      building: "2",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717676977/IMG_1042_reytkl.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717676968/IMG_1038_dup19h.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717676965/IMG_1037_l8ca0y.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677042/2_%D0%90__302_%D0%A0__page-0001_vclvjr.jpg",
      ],
    },
    {
      id: "3(B)-301(Ф)",
      area: "144,99",
      building: "3",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677175/IMG_1130_z1yeyw.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677170/IMG_1129_kggbkm.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677166/IMG_1123_iswp0m.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677181/3_%D0%92_-301_%D0%A4__page-0001_cqshzm.jpg",
      ],
    },
    {
      id: "3(A)-603(Ф)",
      area: "194,15",
      building: "3",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677311/IMG_1170_okrrff.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677306/IMG_1169_zhhrbs.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677301/IMG_1165_i7ngy2.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677293/IMG_1161_qia7or.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677317/3_A_-603_%D0%A4__page-0001_wo0swr.jpg",
      ],
    },
    {
      id: "3(B)-703(Ф)",
      area: "184,71",
      building: "3",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677472/IMG_1153_rsmqse.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677481/IMG_1155_nncl00.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677481/IMG_1154_rbsjnx.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677481/IMG_1157_m532jm.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677488/3_B_-703_%D0%A4__page-0001_ir5pbw.jpg",
      ],
    },
  ],

  categoryLess100: [
    {
      id: "1(В)-101(Х)",
      area: "53,9",
      building: "1",
      purpose: "Офісне приміщення",
      photos: ["", "", "", ""],
    },
    {
      id: "1(А)-103/2(Х)",
      area: "26,46",
      building: "1",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677694/6_ycd7fo.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677695/8_gh10th.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677693/5_jgrzqn.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677693/3_jnntce.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677692/2_uwjajt.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677705/1_%D0%90_-103_2_%D0%A5__page-0001_xzqtkp.jpg",
      ],
    },
    {
      id: "1(В)-102(Х)",
      area: "69,80",
      building: "1",
      purpose: "Громадське харчування",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677878/21_ssvtnm.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677882/26_gnzb6e.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677881/25_dfyisg.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677880/24_oa8ojk.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677883/32_cs9egw.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677885/33_csvjae.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717677898/1_%D0%90_-103_2_%D0%A5__page-0001_iya9ml.jpg",
      ],
    },
    {
      id: "1(А)-103/7(Х)",
      area: "40,94",
      building: "1",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678059/16_k4mcvl.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678058/15_ybfvyc.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678072/17_ctuzsb.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678073/18_wqwon3.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678075/20_lzyo4q.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678083/1_%D0%90_-103_7_%D0%A5__page-0001_syq3uv.jpg",
      ],
    },
    {
      id: "6-102(Б)",
      area: "95,76",
      building: "6",
      purpose: "Офісне приміщення",
      photos: [
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678234/163_l7ofei.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678232/162_ymzbdd.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678237/164_mnxqjq.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678241/167_vl4sdo.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678239/166_wutfit.jpg",
        "https://res.cloudinary.com/dws8qdbjg/image/upload/v1717678246/6-102_%D0%91__page-0001_l9xhl5.jpg",
      ],
    },
  ],
};
