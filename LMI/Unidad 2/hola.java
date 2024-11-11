public class hola {
    public static void main(String[] args) {
        gato Gat = new gato();
        Gat.maullar();
        Perro.ladrar();
    }
}

class gato {
    public void maullar(){
        System.out.println("Miau");
    }    
}
class Perro {
    public static void  ladrar(){
        System.out.println("Guau");
    }
    
}