import React, { useEffect, useState } from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";
import DataTable from "react-data-table-component";
import AxiosClient from "../../shared/plugins/axios";
import ButtonCircle from "../../shared/components/ButtonCircle";
import { Loading } from "../../shared/components/Loading";
import FilterComponent from "../../shared/components/FilterComponent";
import Alert, {
  confirmMsj,
  confirmTitle,
  errorMsj,
  errorTitle,
  successMsj,
  successTitle,
} from "../../shared/plugins/alerts";
// import { ProductForm } from './components/ProductsForm';

const options = {
  rowsPerPageText: "Registros por página",
  rangeSeparatorText: "de",
};

export const ProductScreen = () => {
  const [producto, setProducto] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredProductos = producto.filter(
    (producto) =>
    producto.name &&
    producto.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const getProductos = async () => {
    try {
      const data = await AxiosClient({ url: "/findFabricantesAndProductosPrecio" });
      if (!data.error) setProducto(data.data);
    } catch (error) {
      //poner alerta de error
    } finally {
      setIsLoading(false);
    }
  };
  const filteredProducto = producto.filter(
    (producto) =>
    producto.name &&
    producto.name.toLowerCase().includes(filterText.toLowerCase())
  );
  useEffect(() => {
    getProductos();
  }, []);

  const headerComponent = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) setFilterText("");
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText]);

  const columns = React.useMemo(() => [
    {
      name: "#",
      cell: (row, index) => <div>{index + 1}</div>,
      sortable: true,
    },
    {
      name: "Producto",
      cell: (row) => <div>{row.name}</div>,
      sortable: true,
      selector: (row) => row.name,
    },
    {
      name: "precio",
      cell: (row) => <div>{row.status}</div>,
      sortable: true,
      selector: (row) => row.status,
    },
  ]);
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>Productos</Col>
          <Col className="text-end">
            <ButtonCircle
              type={"btn btn-outline-success"}
              onClick={() => setIsOpen(true)}
              icon="plus"
              size={16}
            />

            {/* <EditProductForm
                        isOpen={isEditing}
                        onClose={() => setIsEditing(false)}
                        setProducts={setProducts}
                        Product={selectedProduct}
                    /> */}
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <DataTable
          columns={columns}
          data={filteredProducto}
          progressPending={isLoading}
          progressComponent={<Loading />}
          noDataComponent={"Sin registros"}
          pagination
          paginationComponentOptions={options}
          subHeader
          subHeaderComponent={headerComponent}
          persistTableHead
          striped={true}
          highlightOnHover={true}
        />
      </Card.Body>
    </Card>
  );
};
