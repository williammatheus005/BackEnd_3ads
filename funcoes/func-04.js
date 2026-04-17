function fabricaCarro(marca, modelo, montadora, motor){
    return{
        marca: marca,
        modelo: modelo,
        montadora: montadora,
        motor: motor
    }
}
const carro2 = {
     marca: 'BMW',
        modelo: 'X5',
        montadora: 'BMW S.A',
        motor: 'v8 6.0'
}
const camaro = fabricaCarro("camaro", "camaro v387", "chevrolet", "v8")
const bmw = fabricarCarro(carro2.marca, carro2.modelo, carro2.montadora, carro2.motor)
console.log(camaro)
console.log(bmw)