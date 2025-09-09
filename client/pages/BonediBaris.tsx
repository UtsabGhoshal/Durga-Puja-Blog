import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  ExternalLink,
  Search,
  Crown,
  Calendar,
  Star,
  Map,
} from "lucide-react";
import { useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MapIntegration from "@/components/MapIntegration";

interface BonediBari {
  name: string;
  location: string;
  area: string;
  mapUrl: string;
  isRajbari?: boolean;
}

const bonediBaris: BonediBari[] = [
  {
    name: "Bagbazar Haldar Bari",
    location: "Bagbazar",
    area: "Bagbazar",
    mapUrl:
      "https://www.google.co.in/maps/search/Bonedi+bari+durga+puja+kolkata/@22.580825,88.3235104,12722m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Hathkhola Dutta Bari",
    location: "Sovabazar Area",
    area: "Sovabazar",
    mapUrl:
      "https://www.google.co.in/maps/search/Bonedi+bari+durga+puja+kolkata/@22.5892656,88.3576912,2674m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Sovabazar Rajbari",
    location: "Raja Nabakrishna Deb & Raja Radhakanta Deb",
    area: "Sovabazar",
    mapUrl:
      "https://www.google.co.in/maps/place/Sovabazar+Rajbati/@22.5965828,88.3663575,19.25z/data=!4m5!3m4!1s0x3a027633ccbc0001:0x91c63cb1189b5816!8m2!3d22.5966135!4d88.3667763?hl=en&entry=yt",
    isRajbari: true,
  },
  {
    name: "Chhatubabu & Latubabu Bari",
    location: "Ramdulal Nivas - Sovabazar Area",
    area: "Sovabazar",
    mapUrl:
      "https://www.google.co.in/maps/place/Chhatu+Babu+Latu+Babu+Thakur+Bari+(Ramdulal+Nibas)/@22.5931945,88.364419,946m/data=!3m1!1e3!4m6!3m5!1s0x3a0276351b7b6505:0x79f84a2cca334458!8m2!3d22.5903317!4d88.3644845!16s%2Fg%2F11h9qdqfc1?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Darjeepara Mitra Bari",
    location: "Sovabazar Area",
    area: "Sovabazar",
    mapUrl:
      "https://www.google.co.in/maps/place/Dorji+Para+Mitra+Barir+Durga+Puja/@22.5911716,88.3622484,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a027793c8303323:0xe5f42f8220ec69cd!8m2!3d22.5911667!4d88.3648233!16s%2Fg%2F11vc92my80?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Harakutir Ray Banerjee Bari",
    location: "Sovabazar Area",
    area: "Sovabazar",
    mapUrl:
      "https://www.google.co.in/maps/place/Harakutir+Ray-Banerjee+Barir+Durga+Pujo/@22.5886456,88.3557297,562m/data=!3m1!1e3!4m6!3m5!1s0x3a0277cae647b961:0x4e210ae0e428f372!8m2!3d22.5885619!4d88.3575862!16s%2Fg%2F11r_wv2bl9?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Shyamaldhan Dutta Bari",
    location: "Girish Park Area",
    area: "Girish Park",
    mapUrl:
      "https://www.google.co.in/maps/place/Shyamaldhan+Dutta+Bari/@22.5877322,88.3574556,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277b5550152dd:0xa1eba2da35293cc6!8m2!3d22.5877273!4d88.362069!16s%2Fg%2F11fz9y8gky?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Pathuriaghata Rajbari",
    location: "Girish Park",
    area: "Girish Park",
    mapUrl:
      "https://www.google.co.in/maps/place/Pathuriaghata+Rajbari+(Khelat+Ghose's+Residence)/@22.5887327,88.3539746,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277c9c362b86f:0xb6575ddd5ce9acca!8m2!3d22.5887278!4d88.3565495!16s%2Fg%2F1pp2tyvr3?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
    isRajbari: true,
  },
  {
    name: "Badan Chand Roy Bari",
    location: "Central Area",
    area: "Central",
    mapUrl:
      "https://www.google.co.in/maps/place/Badan+Chand+Roy+Bari/@22.5752322,88.3557303,17z/data=!4m6!3m5!1s0x3a0277b14f012d4b:0xdd76600a59e3f05!8m2!3d22.5748514!4d88.3579284!16s%2Fg%2F11gnsz5gwk?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Motilal Seal's Thakurbari",
    location: "Central Area",
    area: "Central",
    mapUrl:
      "https://www.google.com/maps/place/Motilal+Seal's+Bari/@22.5755923,88.3565643,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277e17b12c05f:0xd13226ad73e6b683!8m2!3d22.5755874!4d88.3591392!16s%2Fg%2F11fd7nj_1j?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Chorbagan Mitra Bari",
    location: "MG Road Area",
    area: "Central",
    mapUrl:
      "https://www.google.co.in/maps/place/Chorbagan+Mitra+Bari/@22.5824068,88.3579228,669m/data=!3m1!1e3!4m10!1m2!2m1!1sBonedi+bari+durga+puja+kolkata!3m6!1s0x3a02779f24773141:0x368a110b0e2ec78d!8m2!3d22.5824066!4d88.3624287!15sCh5Cb25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGFaICIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRhkgERaGVyaXRhZ2VfYnVpbGRpbmeaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUTFaMlZFV2t0QkVBRaoBVgoNL2cvMTFsZjR3MWNfNxABMh8QASIbltxj8t2Vpq_sR4dlvsbq3Co9TLRVrjfs3LcKMiIQAiIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRh4AEA-gEECAAQLQ!16s%2Fg%2F11f8jsnzjs?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Chorbagan Chatterjee Bari",
    location: "MG Road Area",
    area: "Central",
    mapUrl:
      "https://www.google.co.in/maps/place/Chorbagan+Chatterjee+Bari/@22.5822066,88.3617123,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277339dd39d07:0x395705c2772fc0af!8m2!3d22.5822031!4d88.363533!16s%2Fg%2F11qgzf44wx?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Jorasako Shib Krishna Daw Bari",
    location: "MG Road Area",
    area: "Central",
    mapUrl:
      "https://www.google.co.in/maps/place/Jorasanko+Shib+Krishna+Daw+Bari/@22.5858473,88.3557785,669m/data=!3m1!1e3!4m10!1m2!2m1!1sBonedi+bari+durga+puja+kolkata!3m6!1s0x3a0277b5bb6c6f37:0xc33f700bade8e1ce!8m2!3d22.5858473!4d88.3595674!15sCh5Cb25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGFaICIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRhkgETaGlzdG9yaWNhbF9sYW5kbWFya5oBJENoZERTVWhOTUc5blMwVkpRMEZuU1VRMmNDMDNXR3BSUlJBQqoBVgoNL2cvMTFsZjR3MWNfNxABMh8QASIbltxj8t2Vpq_sR4dlvsbq3Co9TLRVrjfs3LcKMiIQAiIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRh4AEA-gEECEwQSg!16s%2Fg%2F11b66kmsb1?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Rani Rashmoni Kachari Bari",
    location: "Esplanade Area",
    area: "Esplanade",
    mapUrl:
      "https://www.google.com/maps/place/Rani+Rashmoni+Kachari+Bari/@22.5620091,88.354064,18z/data=!3m1!4b1!4m6!3m5!1s0x3a0277bb7a866687:0x159e51175b4bdb15!8m2!3d22.562007!4d88.3551466!16s%2Fg%2F11k3mb8lmx?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Janbazar Rajbari",
    location: "Esplanade Area",
    area: "Esplanade",
    mapUrl:
      "https://www.google.com/maps/place/Janbazar+Rajbari/@22.5617914,88.355362,19.25z/data=!4m14!1m7!3m6!1s0x3a0277bb7a866687:0x159e51175b4bdb15!2sRani+Rashmoni+Kachari+Bari!8m2!3d22.562007!4d88.3551466!16s%2Fg%2F11k3mb8lmx!3m5!1s0x3a02779d7bb724df:0xf2cbcc320fa44835!8m2!3d22.562031!4d88.3554856!16s%2Fg%2F11h7_mvmnq?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
    isRajbari: true,
  },
  {
    name: "Bardhan Bari",
    location: "Esplanade Area",
    area: "Esplanade",
    mapUrl:
      "https://www.google.com/maps/place/Bardhan+Bari+Durga+Puja/@22.5611557,88.3513756,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277e65d2fce15:0xc86ace726595e44c!8m2!3d22.5611508!4d88.3539505!16s%2Fg%2F11gv12yt00?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Laha Bari",
    location: "Thanthania Area",
    area: "Thanthania",
    mapUrl:
      "https://www.google.co.in/maps/place/1,+Bechu+Chatterjee+St,+Machuabazar,+Kolkata,+West+Bengal+700007/@22.5804198,88.3646063,17.25z/data=!4m6!3m5!1s0x3a02764c6b5c58b5:0x2c83eb19c8f3f661!8m2!3d22.580599!4d88.3664004!16s%2Fg%2F11q2wwfr7k?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Thanthania Dutta Bari",
    location: "Thanthania Area",
    area: "Thanthania",
    mapUrl:
      "https://www.google.co.in/maps/place/Thanthania+Dutta+Bari/@22.5805798,88.3633098,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277abd15c1fef:0x532570aaff30622f!8m2!3d22.5805749!4d88.3658847!16s%2Fg%2F1tdfg331?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Chandra Bari",
    location: "Girish Park Area",
    area: "Girish Park",
    mapUrl:
      "https://www.google.co.in/maps/place/24,+Bechu+Chatterjee+St,+Machuabazar,+Kolkata,+West+Bengal+700009/@22.5806405,88.3658982,18.75z/data=!4m6!3m5!1s0x3a02764e9488c815:0xd9b911a31de52695!8m2!3d22.5800302!4d88.3686908!16s%2Fg%2F11h_fsf34k?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Maniktala Saha Bari",
    location: "Maniktala Area",
    area: "Maniktala",
    mapUrl:
      "https://www.google.co.in/maps/place/SAHA+Bari,+DURGA+PUJA,+Maniktala/@22.5831303,88.3661012,1337m/data=!3m2!1e3!5s0x3a027648436f8277:0xc7c266403b8303dd!4m10!1m2!2m1!1sBonedi+bari+durga+puja+kolkata!3m6!1s0x3a02778f5ea5e051:0x5d22f2339e9e04e7!8m2!3d22.5856359!4d88.3710417!15sCh5Cb25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGFaICIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRhkgETaGlzdG9yaWNhbF9sYW5kbWFya5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOc09YSXpjVTlCRUFFqgFWCg0vZy8xMWxmNHcxY183EAEyHxABIhuW3GPy3ZWmr-xHh2W-xurcKj1MtFWuN-zctwoyIhACIh5ib25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGHgAQD6AQUIhQIQNw!16s%2Fg%2F11lkvrhwfm?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Durga Bari Banerjee Parivar",
    location: "Maniktala",
    area: "Maniktala",
    mapUrl:
      "https://www.google.co.in/maps/place/SAHA+Bari,+DURGA+PUJA,+Maniktala/@22.5831303,88.3661012,1337m/data=!3m2!1e3!5s0x3a027648436f8277:0xc7c266403b8303dd!4m10!1m2!2m1!1sBonedi+bari+durga+puja+kolkata!3m6!1s0x3a02778f5ea5e051:0x5d22f2339e9e04e7!8m2!3d22.5856359!4d88.3710417!15sCh5Cb25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGFaICIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRhkgETaGlzdG9yaWNhbF9sYW5kbWFya5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOc09YSXpjVTlCRUFFqgFWCg0vZy8xMWxmNHcxY183EAEyHxABIhuW3GPy3ZWmr-xHh2W-xurcKj1MtFWuN-zctwoyIhACIh5ib25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGHgAQD6AQUIhQIQNw!16s%2Fg%2F11lkvrhwfm?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Harinath Mookerjee Bari",
    location: "Rajabazar",
    area: "Rajabazar",
    mapUrl:
      "https://www.google.co.in/maps/place/4,+Kalidas+Singhi+Ln,+Machuabazar,+Kolkata,+West+Bengal+700009/@22.5787762,88.3695843,17.5z/data=!4m6!3m5!1s0x3a02764f9adc2f39:0xac872605ec614ed1!8m2!3d22.5783013!4d88.3717915!16s%2Fg%2F11j6yb6h1n?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Bhawanipur Mallick Bari",
    location: "Bhawanipur",
    area: "Bhawanipur",
    mapUrl:
      "https://www.google.co.in/maps/place/Mallick+Bari/@22.5333976,88.3485142,199m/data=!3m1!1e3!4m6!3m5!1s0x3a0277402e786227:0x6195f740cf985bc5!8m2!3d22.5335981!4d88.3490916!16s%2Fg%2F11gvs35x5c?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Bhawanipur De Bari",
    location: "Bhawanipur",
    area: "Bhawanipur",
    mapUrl:
      "https://www.google.co.in/maps/place/Bhowanipore+De+Bari/@22.5350672,88.3409957,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02777ea8f8b343:0x44c372338b3144b1!8m2!3d22.5350623!4d88.3435706!16s%2Fg%2F11gl170j6z?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Bhawanipur Mitra Bari",
    location: "Bhawanipur",
    area: "Bhawanipur",
    mapUrl:
      "https://www.google.co.in/maps/place/Mitra+Bari/@22.5323942,88.3495106,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDeuoj50gE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAC9h4nqoq_5pzenKU5XquAL3Pcvg92lnUjmA9CKcfyMzcAeJQYjH0SCdZ5sxNUTSNzc3Xb5DrG-2DOyIe6bFf_OIiMn-ItSuhKWjkFwa4622SbDL0AhESDlldQgHaT98FUaLNR53y2b3kQ%3Dw203-h270-k-no!7i6936!8i9248!4m11!1m2!2m1!1sBhawanipur+Mitra+bari!3m7!1s0x3a027737f964503f:0x5dcba69543d2863b!8m2!3d22.5325322!4d88.3496009!10e5!15sChVCaGF3YW5pcHVyIE1pdHJhIGJhcmlaFyIVYmhhd2FuaXB1ciBtaXRyYSBiYXJpkgESYXBhcnRtZW50X2J1aWxkaW5nmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVExTVhGWVMwRjNFQUWqAU4QASoOIgptaXRyYSBiYXJpKAAyHxABIhuTi0gN1nYplQdFQ62rggByFaHALIQzDwR8qIwyGRACIhViaGF3YW5pcHVyIG1pdHJhIGJhcmngAQD6AQQIABAR!16s%2Fg%2F11nxc6bcq6?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Hem Kutir",
    location: "Jatin Das Park Area",
    area: "Jatin Das Park",
    mapUrl:
      "https://www.google.co.in/maps/place/Hem+Kutir/@22.5272078,88.3474991,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhAGbyw7gyi5Y2eh8NUAA7Xl!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAC9h4noJitR1kaD_u1R0cqycqgCYPa2ywc0XKagLokhRrWgly7YnIHPckcCsASgrx-XhI4KcVo_Ml-SKJCMyBK5-iVn3Hg9qm6EUFRCejwcFIafjx6hyGZv1l-axpgqv3VN51NeTIiSjyXeaJnMs%3Dw86-h129-k-no!7i4000!8i6000!4m7!3m6!1s0x3a0277374528ed59:0x3557d49d235aa2da!8m2!3d22.5272077!4d88.3474719!10e5!16s%2Fg%2F1ptx_v425?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Amrendra Bhawan Roy Family",
    location: "Behala",
    area: "Behala",
    mapUrl:
      "https://www.google.co.in/maps/place/Amarendra+Bhavan+Durga+Puja+(Roy+House+Puja)/@22.5023436,88.3112867,1892m/data=!3m1!1e3!4m10!1m2!2m1!1sBonedi+bari+durga+puja+kolkata!3m6!1s0x3a027bf22c581e17:0x29092556ac4cffe5!8m2!3d22.5015817!4d88.318873!15sCh5Cb25lZGkgYmFyaSBkdXJnYSBwdWphIGtvbGthdGFaICIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRhkgERaGVyaXRhZ2VfYnVpbGRpbmeaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUTFNblEyVVdSUkVBRaoBVgoNL2cvMTFsZjR3MWNfNxABMh8QASIbltxj8t2Vpq_sR4dlvsbq3Co9TLRVrjfs3LcKMiIQAiIeYm9uZWRpIGJhcmkgZHVyZ2EgcHVqYSBrb2xrYXRh4AEA-gEFCJwGEEg!16s%2Fg%2F11fn2p5zfh?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Sabarna Roychowdhury Atchala Bari",
    location: "Behala Sakherbazar",
    area: "Behala",
    mapUrl:
      "https://www.google.co.in/maps/place/SABARNA+ROY+CHOWDHURY+ATTCHALA+BARI/@22.4798771,88.3064281,16z/data=!3m1!4b1!4m6!3m5!1s0x3a027a6626c80eb7:0xc9844e215327f601!8m2!3d22.4798771!4d88.3064281!16s%2Fg%2F1tgmtpgz?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Narsingha Daw Bari",
    location: "MG Road Area",
    area: "Central",
    mapUrl: "https://maps.app.goo.gl/PUn6M6x2EscAXd2j7",
  },
  {
    name: "Ramgopal Saha Bari Durga Pujo",
    location: "Bowbazar Area",
    area: "Bowbazar",
    mapUrl: "https://maps.app.goo.gl/Lx62H7qgJU2ygXsk7",
  },
  {
    name: "Kalidas Chandra Bari",
    location: "Bowbazar Area",
    area: "Bowbazar",
    mapUrl: "https://maps.app.goo.gl/2XXVzBgZ8wbt8PGc6",
  },
  {
    name: "Bholanath Dham",
    location: "Maniktala",
    area: "Maniktala",
    mapUrl: "https://maps.app.goo.gl/GSQRoyyMoF4gi2GGA",
  },
  {
    name: "Pataldanga Basu Mallick Family Pujo",
    location: "MG Road",
    area: "Central",
    mapUrl: "https://maps.app.goo.gl/DPJNvUo5wHmc7Avv9",
  },
  {
    name: "Cocola Dey Bari",
    location: "Sealdah",
    area: "Sealdah",
    mapUrl: "https://maps.app.goo.gl/shJfXqtCBaZ98nKv5",
  },
  {
    name: "Kundu Bari",
    location: "Girish Park",
    area: "Girish Park",
    mapUrl: "https://maps.app.goo.gl/ghANHpaEpoF1GDpq5",
  },
  {
    name: "Mahendra Srimani Nibas",
    location: "Maniktala",
    area: "Maniktala",
    mapUrl: "https://maps.app.goo.gl/8VX5BiiAaWiArvbK6",
  },
];

export default function BonediBaris() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("All");
  const [showMap, setShowMap] = useState(false);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });

  const areas = useMemo(() => {
    const uniqueAreas = [...new Set(bonediBaris.map((bari) => bari.area))];
    return ["All", ...uniqueAreas.sort()];
  }, []);

  const filteredBaris = useMemo(() => {
    return bonediBaris.filter((bari) => {
      const matchesSearch =
        bari.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bari.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bari.area.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesArea = selectedArea === "All" || bari.area === selectedArea;
      return matchesSearch && matchesArea;
    });
  }, [searchTerm, selectedArea]);

  const rajbaris = filteredBaris.filter((bari) => bari.isRajbari);
  const otherBaris = filteredBaris.filter((bari) => !bari.isRajbari);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Hero Section with Background Image */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-r from-festival-orange to-festival-saffron text-white py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/25473186/pexels-photo-25473186.jpeg"
            alt="Heritage Bonedi Bari"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-festival-orange/80 to-festival-saffron/80"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <motion.div
            className="absolute top-20 left-10 w-24 h-24 bg-festival-gold/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-20 w-20 h-20 bg-festival-vermillion/20 rounded-full blur-lg"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 shadow-glow">
                <Crown className="w-4 h-4 mr-2" />
                Heritage Durga Pujas
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white via-festival-gold to-white bg-clip-text text-transparent">
                Bonedi Baris
              </span>
              <motion.span
                className="block text-festival-gold text-2xl md:text-3xl mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHeroInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Traditional Heritage Pujas of Kolkata
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover the aristocratic families' ancestral Durga Pujas that
              have been preserving centuries-old traditions and rituals in their
              family homes across Kolkata.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-festival-orange hover:bg-gray-100 text-lg px-8 py-6 shadow-festival-lg"
                  onClick={() => setShowMap(!showMap)}
                >
                  <Map className="w-5 h-5 mr-2" />
                  {showMap ? "Hide Map" : "Show Map"}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  View Royal Palaces
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Integration Section */}
      {showMap && (
        <motion.section
          className="py-12 bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <MapIntegration
              searchQuery="Bonedi Bari Durga Puja Kolkata"
              latitude={22.5726}
              longitude={88.3639}
            />
          </div>
        </motion.section>
      )}

      {/* Stats & Info Section */}
      <motion.section
        ref={statsRef}
        className="py-12 bg-white border-b"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              {
                value: bonediBaris.length,
                label: "Heritage Baris",
                icon: <Crown className="w-8 h-8" />,
              },
              {
                value: rajbaris.length,
                label: "Royal Rajbaris",
                icon: <Star className="w-8 h-8" />,
              },
              {
                value: areas.length - 1,
                label: "Areas Covered",
                icon: <MapPin className="w-8 h-8" />,
              },
              {
                value: "400+",
                label: "Years of Tradition",
                icon: <Calendar className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-white to-festival-orange/5 rounded-xl shadow-lg hover:shadow-festival transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isStatsInView ? 1 : 0,
                  y: isStatsInView ? 0 : 30,
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-festival-orange mb-4 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-festival-orange mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row gap-4 mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, location, or area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-festival-orange/30 focus:border-festival-orange"
                />
              </div>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-2 border border-festival-orange/30 rounded-md focus:border-festival-orange focus:outline-none"
              >
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </motion.div>

            <div className="text-center mb-8">
              <p className="text-gray-600">
                Showing {filteredBaris.length} of {bonediBaris.length} heritage
                Bonedi Baris
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rajbaris Section */}
      {rajbaris.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                <Crown className="w-8 h-8 text-festival-gold" />
                Royal Rajbaris
                <Crown className="w-8 h-8 text-festival-gold" />
              </h2>
              <p className="text-gray-600">
                Historic royal palaces celebrating Durga Puja with grandeur
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {rajbaris.map((bari, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-gradient-to-br from-white to-festival-gold/5">
                    <CardHeader className="bg-gradient-to-r from-festival-gold/10 to-yellow-100 relative">
                      <motion.div
                        className="absolute top-2 right-2"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Crown className="w-6 h-6 text-festival-gold" />
                      </motion.div>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                            <Crown className="w-5 h-5 text-festival-gold" />
                            {bari.name}
                          </CardTitle>
                          <CardDescription className="text-gray-600 flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {bari.location}
                          </CardDescription>
                        </div>
                        <Badge className="bg-festival-gold text-white">
                          Royal
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="mb-4">
                        <Badge
                          variant="outline"
                          className="border-festival-orange text-festival-orange"
                        >
                          {bari.area}
                        </Badge>
                      </div>
                      <a
                        href={bari.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button className="w-full bg-festival-gold hover:bg-yellow-600 text-white flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            View on Map
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Bonedi Baris Section */}
      {otherBaris.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Heritage Bonedi Baris
              </h2>
              <p className="text-gray-600">
                Traditional aristocratic family pujas preserving Bengali
                heritage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherBaris.map((bari, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-festival-orange/20 hover:border-festival-orange/40 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-800 mb-2">
                        {bari.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {bari.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <Badge
                          variant="outline"
                          className="border-festival-orange text-festival-orange"
                        >
                          {bari.area}
                        </Badge>
                      </div>
                      <a
                        href={bari.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button className="w-full bg-festival-orange hover:bg-festival-orange-dark text-white flex items-center gap-2 shadow-lg hover:shadow-festival">
                            <MapPin className="w-4 h-4" />
                            View on Map
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Bonedi Baris Section with Enhanced Visuals */}
      <section className="py-16 bg-gradient-to-br from-white via-festival-gold/5 to-festival-saffron/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Bonedi Baris
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the Heritage of Aristocratic Durga Pujas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-festival-orange mb-3">
                  What are Bonedi Baris?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bonedi Baris are the ancestral homes of aristocratic Bengali
                  families who have been celebrating Durga Puja for centuries.
                  These heritage pujas maintain traditional rituals, authentic
                  ceremonies, and age-old customs that have been passed down
                  through generations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Unlike community pujas, Bonedi Bari pujas are intimate family
                  celebrations where traditions are strictly followed, from the
                  clay idol preparation to the final visarjan ceremony.
                </p>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-festival-orange mb-3">
                  Historical Significance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Many of these Bonedi Baris date back to the 16th-18th
                  centuries, established by wealthy merchants, zamindars, and
                  nobles. They represent the cultural and religious heritage of
                  Bengal, preserving traditions that might otherwise be lost.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Each Bonedi Bari has its unique style of celebration, special
                  rituals, traditional recipes, and architectural features that
                  reflect the family's history and social status.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 p-6 bg-gradient-to-r from-festival-orange/5 to-festival-saffron/5 rounded-lg border border-festival-orange/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-festival-orange mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Visiting Bonedi Baris
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    While some Bonedi Baris welcome visitors during Durga Puja,
                    many remain private family celebrations. It's important to
                    respect the traditions and seek permission before visiting.
                    The experience offers a unique glimpse into Bengal's rich
                    cultural heritage and authentic Durga Puja traditions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
