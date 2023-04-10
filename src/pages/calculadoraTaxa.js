import React, { useState } from "react";
import styles from "./CalculadoraTaxa.module.css";

function CalculadoraTaxa() {
  const [capitalInicial, setCapitalInicial] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [juros, setJuros] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const taxaCalculada =
      (juros / ( capitalInicial * periodo)) * 100;
    setTaxaJuros(taxaCalculada.toFixed(2));
  };

  return (
    <div className={styles.calculadoraTaxaContainer}>
      <h1 className={styles.calculadoraTaxaTitle}>Calculadora de Taxa de Juros</h1>
      <form onSubmit={handleSubmit} className={styles.calculadoraTaxaForm}>
        <div className={styles.calculadoraTaxaFormGroup}>
          <label htmlFor="juros">Juros Gerados</label>
          <input
            type="number"
            id="juros"
            value={juros}
            onChange={(e) => setJuros(e.target.value)}
            className={styles.calculadoraTaxaFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraTaxaFormGroup}>
          <label htmlFor="capitalInicial">Capital Inicial</label>
          <input
            type="number"
            id="capitalInicial"
            value={capitalInicial}
            onChange={(e) => setCapitalInicial(e.target.value)}
            className={styles.calculadoraTaxaFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraTaxaFormGroup}>
          <label htmlFor="periodo">Período de tempo</label>
          <input
            type="number"
            id="periodo"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className={styles.calculadoraTaxaFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraTaxaFormGroup}>
          <label htmlFor="taxaJuros">Taxa de juros (%)</label>
          <input
            type="text"
            id="taxaJuros"
            value={taxaJuros}
            readOnly
            className={styles.calculadoraTaxaFormControl}
          />
        </div>
        <button type="submit" className={styles.calculadoraTaxaBtnPrimary}>
          Calcular Taxa de Juros
        </button>
      </form>
    </div>
  );
}

export default CalculadoraTaxa;
