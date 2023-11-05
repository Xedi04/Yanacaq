// ortalama sürəti 0-60 km/s - 6 litr
// ortalama sürəti 60-90 km/s - 9 litr
// ortalama sürəti 90-120- km/s - 8 litr
// ortalama sürəti 120 km/s-dan çoxdursa - 10 litr

// her 100km (mesafe) -ortyanacaq
//   mesafe-x
//  x=mesafe*ortyanacaq/100

const benzin = function (mesafe, zaman) {
    let ortyanacaq;
    let suret = mesafe / zaman;

    if (suret <= 60) {
        ortyanacaq = 6;


    } else if (suret > 60 && suret <= 90) {
        ortyanacaq = 9;

    } else if (suret > 90 && suret <= 120) {
        ortyanacaq = 8;

    } else
        ortyanacaq = 10;

    let ys = (mesafe * ortyanacaq) / 100;


    return ` ${mesafe} km yolu ${zaman} saat muddetine getmek ucun , sizin ortalama suretiniz ${suret} km/saat olmalidir . Size lazim olacaq yanacaq miqdari ${ys} litr, ortalama yanacaq serfiyyati ise ${ortyanacaq} /100 km olacaq  `

}
console.log(benzin(200, 4));
