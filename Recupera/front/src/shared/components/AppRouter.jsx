// import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
//import { AuthContext } from '../../modules/auth/authContext';
//import { LoginScreen } from '../../modules/auth/LoginScreen';
//import {PublicNavbar} from './PublicNavbar';
import { AdminNabvar } from "../components/AdminNabvar";
//import {CategoryScreen} from '../../modules/category/CategoryScreen'

import { FabricantesScreen } from "../../modules/fabricante/FabricantesScreen";
import { ProductScreen } from "../../modules/products/ProductsScreen";
import { Consulta3 } from "../../modules/fabricante/Consulta1";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <AdminNabvar />
              <Container style={{ marginTop: "20px" }}>
                <Routes>
                  <Route path="products" element={<ProductScreen />} />
                  <Route path="fabricante" element={<FabricantesScreen />} />
                  <Route path="consulta1" element={<Consulta1/>} />
                  <Route path="consulta2" element={<Consulta2/>} />
                  <Route path="consulta3" element={<Consulta3/>} />
                  <Route path="consulta4" element={<Consulta4/>} />
                  <Route path="consulta5" element={<Consulta5/>} />
                  <Route index element={<>INDEX</>} />
                  <Route path="*" element={<>404</>} />
                </Routes>
              </Container>
            </>
          }
        />
        <Route path="*" element={<>404</>} />
      </Routes>
    </Router>
  );
};
