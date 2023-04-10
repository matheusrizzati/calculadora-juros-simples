import React, { useState } from "react";
import styles from "./CalculadoraCapital.module.css";

function CalculadoraCapital() {
  const [capitalInicial, setCapitalInicial] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [juros, setJuros] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const capitalCalculado =
      juros * ( taxaJuros / periodo);
    setCapitalInicial(capitalCalculado.toFixed(2));
  };

  return (
    <div className={styles.calculadoraCapitalContainer}>
      <h1 className={styles.calculadoraCapitalTitle}>Calculadora de Capital Investido</h1>
      <form onSubmit={handleSubmit} className={styles.calculadoraCapitalForm}>
        <div className={styles.calculadoraCapitalFormGroup}>
          <label htmlFor="juros">Juros Gerados</label>
          <input
            type="number"
            id="juros"
            value={juros}
            onChange={(e) => setJuros(e.target.value)}
            className={styles.calculadoraCapitalFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraCapitalFormGroup}>
          <label htmlFor="taxaJuros">Taxa de Juros (%)</label>
          <input
            type="number"
            id="taxaJuros"
            value={taxaJuros}
            onChange={(e) => setTaxaJuros(e.target.value)}
            className={styles.calculadoraCapitalFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraCapitalFormGroup}>
          <label htmlFor="periodo">Período de tempo</label>
          <input
            type="number"
            id="periodo"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className={styles.calculadoraCapitalFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraCapitalFormGroup}>
          <label htmlFor="capitalInicial">Capital Inicial</label>
          <input
            type="text"
            id="capitalInicial"
            value={capitalInicial}
            readOnly
            className={styles.calculadoraCapitalFormControl}
          />
        </div>
        <button type="submit" className={styles.calculadoraCapitalBtnPrimary}>
          Calcular Juros
        </button>
      </form>
    </div>
  );
}

export default CalculadoraCapital;
