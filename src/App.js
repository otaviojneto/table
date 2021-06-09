import React from "react";
import { Container } from "./styles";

export default function App() {
  return (
    <Container>
      <h1>Company</h1>
      <table id="customers">
        <tr></tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
        </tr>
        <tr>
          <td>Königlich Essen</td>
          <td>Philip Cramer</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>Simon Crowther</td>
        </tr>
        <tr>
          <td>Paris spécialités</td>
          <td>Marie Bertrand</td>
        </tr>
      </table>
    </Container>
  );
}
