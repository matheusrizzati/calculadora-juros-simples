import React, { useState } from "react";
import styles from "./CalculadoraJuros.module.css";

function CalculadoraJuros() {
  const [capitalInicial, setCapitalInicial] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [juros, setJuros] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table(capitalInicial, taxaJuros, periodo)
    let jurosCalculado =
      parseFloat(capitalInicial) * ((1 + parseFloat(taxaJuros)) ** parseFloat(periodo));
      console.log(jurosCalculado)
    setJuros(jurosCalculado.toFixed(2));
  };

  return (
    <div className={styles.calculadoraJurosContainer}>
      <h1 className={styles.calculadoraJurosTitle}>Calculadora de Juros compostos</h1>
      <form onSubmit={handleSubmit} className={styles.calculadoraJurosForm}>
        <div className={styles.calculadoraJurosFormGroup}>
          <label htmlFor="capitalInicial">Capital Inicial</label>
          <input
            type="number"
            id="capitalInicial"
            value={capitalInicial}
            onChange={(e) => setCapitalInicial(e.target.value)}
            className={styles.calculadoraJurosFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraJurosFormGroup}>
          <label htmlFor="taxaJuros">Taxa de Juros (%)</label>
          <input
            type="number"
            id="taxaJuros"
            value={taxaJuros}
            onChange={(e) => setTaxaJuros(e.target.value)}
            className={styles.calculadoraJurosFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraJurosFormGroup}>
          <label htmlFor="periodo">Período de tempo</label>
          <input
            type="number"
            id="periodo"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className={styles.calculadoraJurosFormControl}
            required
          />
        </div>
        <div className={styles.calculadoraJurosFormGroup}>
          <label htmlFor="jurosGerados">Juros Gerados</label>
          <input
            type="text"
            id="jurosGerados"
            value={juros}
            readOnly
            className={styles.calculadoraJurosFormControl}
          />
        </div>
        <button type="submit" className={styles.calculadoraJurosBtnPrimary}>
          Calcular Juros
        </button>
      </form>
    </div>
  );
}

export default CalculadoraJuros;
