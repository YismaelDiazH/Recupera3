import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import ButtonCircle from "../../shared/components/ButtonCircle";
import { Loading } from "../../shared/components/Loading";
import AxiosClient from "../../shared/plugins/axios";
import Alert, {
  confirmMsj,
  confirmTitle,
  errorMsj,
  errorTitle,
  successMsj,
  successTitle,
} from "../../shared/plugins/alerts";

export const FabricantesScreen = () => {
  const [fabricante, setFabricante] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    rowsPerPageText: "registros por pagina",
    rangeSeparatorText: "de",
  };

  const getFabricantes = async () => {
    try {
      const data = await AxiosClient({ url: "/findFabricantesAndProductosPrecio" });
      if (!data.error) setFabricante(data);
    } catch (error) {
      //poner alerta de error
      //suitalert
      setIsLoading(false);
    }
  };


  useEffect(() => {
    getFabricantes();
  }, []);



  const columns = React.useMemo(() => [
    {
      name: "#",
      cell: (row, index) => <div>{index + 1}</div>,
      sortable: true,
    },
    {
      name: "fabricante",
      cell: (row) => <div>{ row[0]}</div>,
      sortable: true,
      selector: (row) => row[0],
    }, {
      name: "Cuenta",
      cell: (row) => <div>{ row[1]}</div>,
      sortable: true,
      selector: (row) => row[1],
    }
  ]);

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>Fabricante</Col>
          <Col className="text-end">
            <ButtonCircle
              type={"btn btn-outline-success"}
              onClick={() => setIsOpen(true)}
              icon="plus"
              size={16}
            />
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <DataTable
          columns={columns}
          data={fabricante}
          progressPending={isLoading}
          progressComponent={<Loading />}
          noDataComponent={"sin registros"}
          pagination
          paginationComponentOptions={options}
          persistTableHead
          striped={true}
          highlightOnHover={true}
        />
      </Card.Body>
    </Card>
  );
};
