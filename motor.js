const credito = {
    M : {
        minimo : [
            A = [ 
                { meses : 26, credito: 100 },
                { meses : 27, credito: 400 },
                { meses : 28, credito: 900 },
                { meses : 29, credito: 100 },
                { meses : 30, credito: 600 },
            ],
            B = [ 
                { meses : 24, credito: 1000 },
                { meses : 25, credito: 600 },
                { meses : 26, credito: 1000 },
                { meses : 27, credito: 1000 },
                { meses : 28, credito: 1000 },
            ],
            C = [ 
                { meses : 24, credito: 400 },
                { meses : 25, credito: 200 },
                { meses : 26, credito: 200 },
                { meses : 27, credito: 1000 },
                { meses : 28, credito: 600 },
            ],
            D = [ 
                { meses : 24, credito: 400 },
                { meses : 25, credito: 300 },
                { meses : 26, credito: 500 },
                { meses : 27, credito: 900 },
                { meses : 28, credito: 1000 },
            ]
        ],
        maximo : [
            A = [ 
                { meses : 26, credito: 4900 },
                { meses : 27, credito: 4700 },
                { meses : 28, credito: 4600 },
                { meses : 29, credito: 4600 },
                { meses : 30, credito: 4500 },
            ],
            B = [ 
                { meses : 24, credito: 4700 },
                { meses : 25, credito: 4400 },
                { meses : 26, credito: 5000 },
                { meses : 27, credito: 4400 },
                { meses : 28, credito: 4900 },
            ],
            C = [ 
                { meses : 24, credito: 5000 },
                { meses : 25, credito: 4700 },
                { meses : 26, credito: 5000 },
                { meses : 27, credito: 4200 },
                { meses : 28, credito: 4600 },
            ],
            D = [ 
                { meses : 24, credito: 4400},
                { meses : 25, credito: 4700 },
                { meses : 26, credito: 4300 },
                { meses : 27, credito: 4900 },
                { meses : 28, credito: 4300 },
            ]
        ]
    },
    F : {
        minimo : [
            A = [ 
                { meses : 26, credito: 800 },
                { meses : 27, credito: 800 },
                { meses : 28, credito: 800 },
                { meses : 29, credito: 600 },
                { meses : 30, credito: 200 },
            ],
            B = [ 
                { meses : 24, credito: 800 },
                { meses : 25, credito: 700 },
                { meses : 26, credito: 100 },
                { meses : 27, credito: 600 },
                { meses : 28, credito: 700 },
            ],
            C = [ 
                { meses : 24, credito: 200 },
                { meses : 25, credito: 900 },
                { meses : 26, credito: 700 },
                { meses : 27, credito: 800 },
                { meses : 28, credito: 100 },
            ],
            D = [ 
                { meses : 24, credito: 500 },
                { meses : 25, credito: 1000 },
                { meses : 26, credito: 600 },
                { meses : 27, credito: 400 },
                { meses : 28, credito: 700 },
            ]
        ],
        maximo : [
            A = [
                { meses : 26, credito: 4000 },
                { meses : 27, credito: 4200 },
                { meses : 28, credito: 4100 },
                { meses : 29, credito: 4200 },
                { meses : 30, credito: 4500 },
            ],
            B = [ 
                { meses : 24, credito: 4700 },
                { meses : 25, credito: 4200 },
                { meses : 26, credito: 4500 },
                { meses : 27, credito: 4300 },
                { meses : 28, credito: 4400 },
            ],
            C = [ 
                { meses : 24, credito: 4600 },
                { meses : 25, credito: 4900 },
                { meses : 26, credito: 4600 },
                { meses : 27, credito: 4700 },
                { meses : 28, credito: 4000 },
            ],
            D = [ 
                { meses : 24, credito: 5000},
                { meses : 25, credito: 4900 },
                { meses : 26, credito: 4700 },
                { meses : 27, credito: 5000 },
                { meses : 28, credito: 4300 },
            ]
        ]
    }
}

const getMonths = (startDate, endDate) => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());

const getIndexFromLetter = (letter) => letter.toLowerCase().charCodeAt(0) - 97

const obtenerMontoMinimo = (tipoNomina, meses , genero) => {
    if (genero.toUpperCase() === 'M') {
        const index = getIndexFromLetter(tipoNomina)
        const cred = credito.M.minimo[index].find(
            e => {
                if (meses <= e.meses) {
                    return e.credito
                }
            }
        )
        return meses < 30 ? cred.credito : credito.M.minimo[index][4].credito; 
    }else{
        const index = getIndexFromLetter(tipoNomina)
        const cred = credito.F.minimo[index].find(
            e => {
                if (meses <= e.meses) {
                    return e.credito
                }
            }
        )
        return meses < 28 ? cred.credito : credito.F.minimo[index][4].credito;
    }
}

const obtenerMontoMaximo = (tipoNomina, meses , genero) => {
    if (genero.toUpperCase() === 'M') {
        const index = getIndexFromLetter(tipoNomina)
        const cred = credito.M.maximo[index].find(
            e => {
                if (meses <= e.meses) {
                    return e.credito
                }
            }
        )
        return meses < 30 ? cred.credito : credito.M.maximo[index][4].credito; ;
    }else{
        const index = getIndexFromLetter(tipoNomina)
        const cred = credito.F.maximo[index].find(
            e => {
                if (meses <= e.meses) {
                    return e.credito
                }
            }
        )
        return meses < 28 ? cred.credito : credito.F.maximo[index][4].credito;
    }
}
const calculoMotor = (tipoNomina, fechaPrimerEmpleo, genero) => {
    const meses = getMonths(new Date(fechaPrimerEmpleo), new Date());
    console.log('meses '+ meses);
    const montoMinimo = obtenerMontoMinimo(tipoNomina, meses, genero);
    console.log('montoMinimo: '+montoMinimo);
    const montoMaximo = obtenerMontoMaximo(tipoNomina, meses, genero);
    console.log('montoMinimo: '+montoMaximo);
    const p1 = montoMinimo + Math.sqrt(montoMaximo - montoMinimo);
    const p2 = montoMinimo + 0.0175 * (montoMaximo - montoMinimo);
    const lineaCreditoOptima = Math.max(p1,p2);
    return lineaCreditoOptima;
}

const calculo1 = calculoMotor('A','2022/06/12','f');
console.log(`El linea optima de credito es ${calculo1}`);
const calculo2 = calculoMotor('B','1993/12/30','f');
console.log(`El linea optima de credito es ${calculo2}`);
const calculo3 = calculoMotor('C','2020/09/19','m');
console.log(`El linea optima de credito es ${calculo3}`);
const calculo4 = calculoMotor('D','2019/01/15','m');
console.log(`El linea optima de credito es ${calculo4}`);