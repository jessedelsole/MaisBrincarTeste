export function cursosTeste(){

    cursos = [];
    for(i=1;i<=10;i++){
        filmes=[];
        for(j=1;j<=10;j++){
          filmes.push({nome:'Filme'+j});
        }  
        cursos.push({nome:'Curso'+i , descricao:'Descricao do Curso'+i, filmes});
    }
    return cursos;
}
