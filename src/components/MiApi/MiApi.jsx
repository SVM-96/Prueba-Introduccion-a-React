import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Buscador from "../Buscador/Buscador";
import "./MiApi.css";

function MiApi() {
  const [digimons, setDigimons] = useState([]);
  const [filteredDigimons, setFilteredDigimons] = useState([]);

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((data) => {
        setDigimons(data);
        setFilteredDigimons(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredResults = digimons.filter((digimon) =>
      digimon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sortedFilteredResults = filteredResults.sort((a, b) =>
      a.name.localeCompare(b.name)
    ); // Ordena alfabéticamente
    setFilteredDigimons(sortedFilteredResults);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4 title">Lista de Digimons</h1>
      <Buscador onSearch={handleSearch} />
      <Row className="justify-content-center">
        {filteredDigimons.map((digimon) => (
          <Col key={digimon.name} xs={12} sm={6} md={4} lg={3}>
            <Card className="digimon-card mb-4">
              <Card.Img variant="top" src={digimon.img} alt={digimon.name} />
              <Card.Body>
                <Card.Title>{digimon.name}</Card.Title>
                <Card.Text>
                  <strong>Nivel:</strong> {digimon.level}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MiApi;
