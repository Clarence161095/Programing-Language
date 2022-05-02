class GiaCam {
  soChan: string;
}

interface Animal {
  name: string;
  keu: Function;
}

interface SinhVatSong {
  hitTho: any;
}

class Dog implements Animal {
  name: string;
  keu () {
    // XU ly abc...
    return 'Gau gau'
  }
}

class Ga extends GiaCam implements Animal, SinhVatSong {
  hitTho: any;
  name: string;
  keu () {
    return 'Chip chip'
  }
}

const dog1 = new Dog();
const ga1 = new Ga();
dog1.keu()
ga1.keu()
