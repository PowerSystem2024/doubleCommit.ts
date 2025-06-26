package UTN.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConnection() {
        Connection conexion = null;
        // Variables para conectar a la base de datos
        var baseDatos = "estudiantes2024";
        var url = "jdbc:mysql://localhost:3306/estudiantes2024";
        var usuario = "root";
        var password = "admin";

        // Cargamos la clase del driver de mysql en memoria
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conexion = DriverManager.getConnection(url, usuario, password);
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("Ocurrió un error:" + e.getMessage());
        }
        return conexion;
    }
}
