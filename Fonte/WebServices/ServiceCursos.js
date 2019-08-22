import {cursosTeste} from './DadosTeste';

export const ServiceCursos = {

    getCursos : () => {
        return new Promise((resolve, reject)=> {
            resolve(cursosTeste());
        })
    }
}


