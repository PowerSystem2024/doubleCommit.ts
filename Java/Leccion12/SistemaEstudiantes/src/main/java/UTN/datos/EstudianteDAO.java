package UTN.datos;

import UTN.dominio.Estudiante;

import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {
    // Método listar
    public List<Estudiante> listar() {
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
                estudiante.getIdEstudiante(rs.getInt("idestudiante2024"));
            }
        } catch (Exception e) {
            System.out.println("Ocurrió un error: " + e.getMessage());
        }
    }
}
