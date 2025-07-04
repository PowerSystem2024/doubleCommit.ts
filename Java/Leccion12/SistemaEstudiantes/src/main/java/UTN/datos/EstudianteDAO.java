package UTN.datos;

import UTN.conexion.Conexion;
import UTN.dominio.Estudiante;

import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {
    // Método listar
    public List<Estudiante> listarEstudiante() {
        List<Estudiante> estudiantes = new ArrayList<>();
        // Creamos algunos objetos que son necesarios para comunicarnos con la base de datos
        PreparedStatement ps; // envía la sentencia a la base de datos
        ResultSet rs; // Obtenemos el resultado de la base de datos
        // Creamos un objeto de tipo conexión
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2024 ORDER BY idestudiantes2024";
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2024"));
                estudiante.setNombre((rs.getString("nombre")));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                // Falta agregarlo a la lista
                estudiantes.add(estudiante);
            }
        } catch (Exception e) {
            System.out.println("Ocurrió un error al selccionar datos: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión: " + e.getMessage());
            }
        } // Fin finally
        return estudiantes;
    } // Fin método listar

    // método por id -> fin by id
    public boolean buscarEstudiantePorId(Estudiante estudiante) {
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2024 WHERE idestudiantes2024 = ?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if (rs.next()) {
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true;
            }
        } catch (Exception e) {
            System.out.println("Ocurrió un error al buscar estudiante = " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar conexión = " + e.getMessage());
            }
        }
        return false;
    } // Fin método buscar por id

    // Método agregar estudiante
    public boolean agregarEstudiante(Estudiante estudiante) {
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudiantes2024(nombre, apellido, telefono, email) VALUES (?, ?, ? ,?)";
        try {
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;
        } catch (Exception e) {
            System.out.println("Ocurrió un error al insertar estudiante: " + e.getMessage());
        } finally  {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión = " + e.getMessage());
            }
        }
        return false;
    } // Fin método agregar estudiante

    // Método modificar estudiante

    public boolean modificarEstudiante(Estudiante estudiante) {
        PreparedStatement ps;
        Connection con = getConnection();
        ResultSet rs;
        String sql = "UPDATE estudiantes2024 SET nombre = ?, apellido = ?, telefono = ?, email = ? WHERE idestudiantes2024 = ?";
        try {
            ps = con.prepareStatement(sql);
            // Modificamos el estudiante
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e) {
            System.out.println("No se pudo actualizar el estudiante: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión: " + e.getMessage());
            }
        }
        return false;
    }

    public static void main(String[] args) {
        // LIstar estudiantes
        var estudianteDAO = new EstudianteDAO();
        System.out.println("Listado de estudiantes");
        List<Estudiante> estudiantes = estudianteDAO.listarEstudiante();
        estudiantes.forEach(System.out::println); // Función lamda para imprimir
        // Búsqueda de estudiante por ID
//        var estudiante1 = new Estudiante(3);
//        System.out.println("Estudiantes antes de la busqueda: " + estudiante1);
//        var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante1);
//        if (encontrado) {
//            System.out.println("Estudiante encontrado = " + estudiante1);
//        } else {
//            System.out.println("Estudiante no encontrado: "+ estudiante1.getIdEstudiante());
//        }
        // Agregar estudiante
//        var nuevoEstudiante = new Estudiante("Carla", "Sanchez", "2665458566", "carla_sanchez@yahoo.com");
//        var agregado = estudianteDAO.agregarEstudiante(nuevoEstudiante);
//        if (agregado) {
//            System.out.println("Estudiante agregado a la BD: " + nuevoEstudiante);
//        } else {
//            System.out.println("No se agregó estudiante a la BD: " + nuevoEstudiante);
//        }
        // Modificación estudiante
        var estudianteModificado = new Estudiante(4, "Laura", "Gonzales", "2664562887", "laura_gon@yahoo.com");
        var modificado = estudianteDAO.modificarEstudiante(estudianteModificado);
        System.out.println("ID a modificar: " + estudianteModificado.getIdEstudiante());
        if (modificado) {
            System.out.println("Se ha modificado el estudiante: " + estudianteModificado);
        } else {
            System.out.println("No se ha podido modificar el estudiante: " + estudianteModificado);
        }

    }
}
