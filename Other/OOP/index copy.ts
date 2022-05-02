interface Shopee {
  menu: any;
  ban: any;
  quanLy: any;
}

interface Menu {
  menuPhai: any;
  menuTrai: any;
}

interface MenuTrai {
  logo: any;
  search: any;
}

interface logo {
  title: string;
  image: string;
}

interface title {
  mau: string;
  font: string;
  size: number;
}

class ThucHienCode implements Shopee, Menu, MenuTrai, logo, title {
  menu: any;
  ban: any;
  quanLy: any;
  menuPhai: any;
  menuTrai: any;
  logo: any;
  search: any;
  title: string; // return 'shopee'...
  image: string; // Dua tui Designer...
  mau: string; // return 'da cam'
  font: string; // return 'Time normal'
  size: number; // return '15'
  //... 10500 viec can lam
}