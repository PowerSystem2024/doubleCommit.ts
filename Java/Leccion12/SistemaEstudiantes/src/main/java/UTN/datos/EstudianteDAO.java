package UTN.datos;

import UTN.conexion.Conexion;
import UTN.dominio.Estudiante;

import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

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
    } // Fin método modificar estudiante

    // Método eliminar estudiante
    public boolean eliminarEstudiante(Estudiante estudiante) {
        PreparedStatement ps;
        Connection conn = getConnection();
        String sql = "DELETE FROM estudiantes2024 WHERE idestudiantes2024 = ?";
        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e) {
            System.out.println("Ocurrió un error al eliminar estudiante: " + e.getMessage());
            return false;
        } finally {
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión: " + e.getMessage());
            }
        }
    }
}
