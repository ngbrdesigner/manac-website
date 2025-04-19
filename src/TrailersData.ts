export interface TrailerInfo {
  title: string;
  sort: "4-axles" | "5-axles" | "7-axles" | "reinforced" | "blade";
  subtitle: string;
  axles: number;
  capacity: string;
  length: string;
  extension: string;
  workingArea: string;
  loadingHeight: string;
  imageUrl: string;
}

export const trailers: TrailerInfo[] = [
  {
    title: "TSR 4OSI",
    sort: "4-axles",
    subtitle: "extendable semi-trailer",
    axles: 5,
    capacity: "64,5",
    length: "16,6 – 24,6",
    extension: "8",
    workingArea: "11,8 – 19,8",
    loadingHeight: "895",
    imageUrl: "/images/5osei/01.webp",
  },
  {
    title: "TSR 5 OSI",
    sort: "5-axles",
    subtitle: "extendable semi-trailer",
    axles: 4,
    capacity: "54,5",
    length: "14,6 – 22,6",
    extension: "8",
    workingArea: "10,8 – 18,8",
    loadingHeight: "895",
    imageUrl: "/images/5osei/01.webp",
  },
  {
    title: "TSR 7 OSI",
    sort: "7-axles",
    subtitle: "extendable semi-trailer",
    axles: 4,
    capacity: "54,5",
    length: "14,6 – 22,6",
    extension: "8",
    workingArea: "10,8 – 18,8",
    loadingHeight: "895",
    imageUrl: "/images/5osei/01.webp",
  },
  {
    title: "TSR BALKOVOZ",
    sort: "reinforced",
    subtitle: "extendable semi-trailer",
    axles: 4,
    capacity: "54,5",
    length: "14,6 – 22,6",
    extension: "8",
    workingArea: "10,8 – 18,8",
    loadingHeight: "895",
    imageUrl: "/images/5osei/01.webp",
  },
  {
    title: "TSR LOPASTEVOZ",
    sort: "blade",
    subtitle: "extendable semi-trailer",
    axles: 4,
    capacity: "54,5",
    length: "14,6 – 22,6",
    extension: "8",
    workingArea: "10,8 – 18,8",
    loadingHeight: "895",
    imageUrl: "/images/5osei/01.webp",
  },
];
