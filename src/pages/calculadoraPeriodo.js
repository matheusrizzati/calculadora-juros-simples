import React, { useState } from "react";
import styles from "./CalculadoraPeriodo.module.css";

function CalculadoraPeriodo() {
  const [capitalInicial, setCapitalInicial] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [juros, setJuros] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const periodoCalculado =
      (Math.log(parseFloat(juros) / parseFloat(capitalInicial))) / (Math.log( 1 + parseFloat(taxaJuros)));
    setPeriodo(periodoCalculado.toFixed(0));
  };

  return (
    <div className={styles.calculadoraPeriodoContainer}>
      <h1 className={styles.calculadoraPeriodoTitle}>Calculadora de Periodo</h1>
      <form onSubmit={handleSubmit} className={styles.calculadoraPeriodoForm}>
        <div className={styles.calculadoraPeriodoFormGroup}>
          <label htmlFor="juros">Juros Gerados</label>
          <input
            type="number"
            id="juros"
            value={juros}
            onChange={(e) => setJuros(e.target.value)}
            className={styles.calculadoraPeriodoFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraPeriodoFormGroup}>
          <label htmlFor="capitalInicial">Capital Inicial</label>
          <input
            type="number"
            id="capitalInicial"
            value={capitalInicial}
            onChange={(e) => setCapitalInicial(e.target.value)}
            className={styles.calculadoraPeriodoFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraPeriodoFormGroup}>
          <label htmlFor="taxaJuros">Taxa de juros (%)</label>
          <input
            type="number"
            id="taxaJuros"
            value={taxaJuros}
            onChange={(e) => setTaxaJuros(e.target.value)}
            className={styles.calculadoraPeriodoFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraPeriodoFormGroup}>
          <label htmlFor="periodo">Periodo</label>
          <input
            type="text"
            id="periodo"
            value={periodo}
            readOnly
            className={styles.calculadoraPeriodoFormControl}
          />
        </div>
        <button type="submit" className={styles.calculadoraPeriodoBtnPrimary}>
          Calcular Periodo
        </button>
      </form>
    </div>
  );
}

export default CalculadoraPeriodo;
