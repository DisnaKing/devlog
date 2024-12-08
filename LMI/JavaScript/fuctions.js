function creaLlibre (autorLlibre,títolLlibre,num_pgLlibre){
   
    let autor = autorLlibre;
    let Títol = títolLlibre;
    let Num_pag = num_pgLlibre;

    function mostrallibre(){
        console.log("--------------------------\nAutor : "+ this.Autor +"\nLlibre : "+ this.Títol +"\nNúm pàgines : "+ this.Num_pag + "\n--------------------------\n\n")
    }

    function canviarnom(Nou_nom){
        Títol = Nou_nom;
    }

    function canviarautor (Nou_autor){
        autor = Nou_autor;
    }
    
    function canviarnpag(npag){
        Num_pag = npag;
    }

    return{mostrallibre, canviarnom, canviarautor, canviarnpag}
}

let llibreQuijote = creaLlibre("Miguel de cervantes","El quijote","1234");

let llibreOnepiece = creaLlibre("One piece","Eichiiro Oda","19273197321");

llibreQuijote.mostrallibre();

llibreOnepiece.mostrallibre();

llibreQuijote.canviarnom("nou nom");

llibreOnepiece.canviarautor("nou autor");