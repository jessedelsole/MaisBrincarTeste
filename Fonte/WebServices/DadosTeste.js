export function cursosTeste(){

    cursos = [];
    for(i=1;i<=10;i++){
        aulas=[];
        for(j=1;j<=10;j++){
          aulas.push({titulo:'Aula '+j, descricao:'Descricao da Aula '+j });
        }  
        cursos.push({nome:'Curso'+i , descricao:'Descricao do Curso'+i, aulas});
    }
    return cursos;
}
