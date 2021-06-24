export const data = [
  {
    id: 1,
    minRate: 0,
    maxRate: 18.4,
    title: 'Zayıf',
    desc: 'Uzunluğunuza göre uygun ağırlıkta olmadığınızı, zayıf olduğunuzu gösterir. Zayıflık, bazı hastalıklar için risk oluşturan ve istenmeyen bir durumdur. Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz.',
    color: 'weak',
  },
  {
    id: 2,
    minRate: 18.5,
    maxRate: 24.9,
    title: 'Normal',
    desc: 'Uzunluğunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz.',
    color: 'regular',
  },
  {
    id: 3,
    minRate: 25,
    maxRate: 29.9,
    title: 'Fazla Kilolu',
    desc: 'Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar.',
    color: 'overweight',
  },
  {
    id: 4,
    minRate: 30,
    maxRate: 34.9,
    title: 'Şişman (Obez) - I. Sınıf',
    desc: 'Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz.',
    color: 'fat',
  },
  {
    id: 5,
    minRate: 35,
    maxRate: 44.9,
    title: 'Şişman (Obez) - II. Sınıf',
    desc: 'Uzunluğunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz.',
    color: 'fat2',
  },
  {
    id: 6,
    minRate: 45,
    maxRate: 100,
    title: 'Aşırı Şişman (Aşırı Obez) - III. Sınıf',
    desc: 'Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz.',
    color: 'obese',
  },
];

export const diet = [
  {
    id: 1,
    name: 'Kahvaltı',
    list: [
      { id: 1, listItem: '30 gram yağsız beyaz peynir' },
      { id: 2, listItem: '1 bardak şekersiz çay' },
      {
        id: 3,
        listItem: 'Yağsız sirkeli mevsim salata (Bol yeşillikli ve yağsız)',
      },
      { id: 4, listItem: '1 dilim kepekli ekmek' },
    ],
  },
  {
    id: 2,
    name: 'Ara öğün',
    list: [
      { id: 5, listItem: '1 tane orta boy yeşil elma' },
      { id: 6, listItem: 'Yarım kâse kaymaksız köy yoğurdu' },
    ],
  },
  {
    id: 3,
    name: 'Öğle Yemeği',
    list: [
      {
        id: 7,
        listItem: 'Lahana, ıspanak tere gibi sebzelerden yapılmış çorba',
      },
      { id: 8, listItem: 'Yarım porsiyon balık' },
      { id: 9, listItem: 'Yağsız sirkeli mevsim salata' },
      { id: 10, listItem: '1 yeşil elma ya da yarım greyfurt}' },
    ],
  },
  {
    id: 4,
    name: 'İkindi',
    list: [{ id: 11, listItem: 'Diyet kraker' }],
  },
  {
    id: 5,
    name: 'Akşam',
    list: [
      { id: 12, listItem: '1 kase sebze çorbası' },
      { id: 13, listItem: '1 kâse yağsız sirkeli mevsim salata' },
      { id: 14, listItem: '5 tane şeker oranı az meyve' },
    ],
  },
  {
    id: 6,
    name: 'Uykudan Önce',
    list: [
      { id: 15, listItem: '200 gram yağsız köy yoğurdu ya da yağsız süt' },
    ],
  },
];
