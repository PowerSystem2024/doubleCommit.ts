package domain;

public class Gerente extends Empleado {

    private String departamento;

    public Gerente(String nombre, double empleado, String departamento) {
        super(nombre, empleado);
        this.departamento = departamento;
    }

    // Sobreescribimos el método
    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles() + ", Departamento: " + this.departamento;
    }

    public String getDepartamento() {
        return this.departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

}
