package com.entrega.java;

import javax.swing.*;

public class Main {

    public static void main(String[] args) {
        String user = "webadmin";
        String password = "AnselAdams84";
        int intentos = 3;


        JOptionPane.showMessageDialog(null, "Bienvenido.\n" +
                "Para ingresar a esta sección, debe ingresar su usuario y contraseña.\n" +
                "Tiene hasta "+ intentos + " intentos.");
//        String userInput = JOptionPane.showInputDialog("Ingrese su usuario");
//        String passwordInput = JOptionPane.showInputDialog("Ingrese su contraseña");

        do {
            String userInput = JOptionPane.showInputDialog("Ingrese su usuario");
            String passwordInput = JOptionPane.showInputDialog("Ingrese su contraseña");

            if (user.equals(userInput) && password.equals(passwordInput)){
                JOptionPane.showMessageDialog(null, "Acceso correcto, bienvenido al sistema");
                break;
            } else{
                intentos -=1;
                if(intentos == 1){
                    JOptionPane.showMessageDialog(null, "Acceso denegado.\n" +
                            "Usuario o contraseña incorrectos.\n" +
                            "Le queda "+ intentos + " intento.");
                }else if (intentos == 0){
                    JOptionPane.showMessageDialog(null, "Acceso denegado.\n" +
                            "Usuario o contraseña incorrectos.\n" +
                            "Se le acabaron los intentos.");
                } else{
                    JOptionPane.showMessageDialog(null, "Acceso denegado.\n" +
                            "Usuario o contraseña incorrectos.\n" +
                            "Le quedan "+ intentos + " intentos.");
                }
            }

        }while(intentos != 0);





    }

}
