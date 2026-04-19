import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const messageFetch = fetch("https://openapi.programming-hero.com/api/all").then((res) => res.json());

function App() {
  return (
    <>
      <section id="center">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Countries messageFetch={messageFetch}></Countries>
        </Suspense>
      </section>
    </>
  );
}

export default App;
